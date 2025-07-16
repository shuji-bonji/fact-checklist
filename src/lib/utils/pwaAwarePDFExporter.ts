// src/lib/utils/pwaAwarePDFExporter.ts
/**
 * PWA機能統合PDFエクスポーター
 * テキストベース生成とCanvas方式の両方に対応
 */

import type jsPDF from 'jspdf';
import type { ChecklistResult } from '$lib/types/checklist.js';
import type { TranslationFunction } from '$lib/types/i18n.js';
import { TextBasedPDFGenerator, type TextPDFOptions } from './textBasedPDFGenerator.js';
import { PlatformAwarePDFGenerator, type EnhancedPDFOptions } from './platformAwarePDFGenerator.js';
import { platformStore } from '$lib/stores/platformStore.svelte.js';

export interface PDFExportOptions extends TextPDFOptions {
  textMode: boolean; // テキストベース vs Canvas方式の選択
  showSaveDialog?: boolean;
  enableSharing?: boolean;
  useNativeFeatures?: boolean;
  optimizeForMobile?: boolean;
  t?: TranslationFunction;
}

export class PWAAwarePDFExporter {
  private textGenerator: TextBasedPDFGenerator;
  private platformGenerator: PlatformAwarePDFGenerator;
  private isNativeApp: boolean;
  private hasFileSystemAccess: boolean;
  private hasWebShare: boolean;
  private hasWebShareFiles: boolean;

  constructor() {
    this.textGenerator = new TextBasedPDFGenerator();
    this.platformGenerator = new PlatformAwarePDFGenerator();

    // プラットフォーム機能の検出
    const capabilities = platformStore.capabilities;
    this.isNativeApp = capabilities.isNativeApp;
    this.hasFileSystemAccess = capabilities.hasFileSystemAccess;
    this.hasWebShare = capabilities.hasWebShare;
    this.hasWebShareFiles = capabilities.hasWebShareFiles;

    // console.log('🚀 PWAAwarePDFExporter initialized with capabilities:', {
    //   isNativeApp: this.isNativeApp,
    //   hasFileSystemAccess: this.hasFileSystemAccess,
    //   hasWebShare: this.hasWebShare,
    //   hasWebShareFiles: this.hasWebShareFiles
    // });
  }

  async exportPDF(checklist: ChecklistResult, options: PDFExportOptions): Promise<void> {
    // console.log('📄 Starting PDF export with options:', {
    //   textMode: options.textMode,
    //   includeGuides: options.includeGuides,
    //   sectionBreaks: options.sectionBreaks
    // });

    try {
      let pdf: jsPDF;

      if (options.textMode) {
        // テキストベース生成（文字検索・コピー可能）
        // console.log('🔤 Using text-based PDF generation');
        pdf = await this.generateTextBasedPDF(checklist, options);
      } else {
        // 既存のプラットフォーム対応生成（高品質画像）
        // console.log('🎨 Using platform-aware PDF generation');
        pdf = await this.generatePlatformAwarePDF(checklist, options);
      }

      // PWA機能を活用した保存/共有
      await this.saveOrSharePDF(pdf, checklist.title, options, options.t);

      // console.log('✅ PDF export completed successfully');
    } catch (error) {
      console.error('❌ PDF export failed:', error);
      const errorPrefix = options.t?.('export.error.pdfGeneration') ?? 'PDF generation failed';
      throw new Error(
        `${errorPrefix}: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  private async generateTextBasedPDF(
    checklist: ChecklistResult,
    options: PDFExportOptions
  ): Promise<jsPDF> {
    const textOptions: TextPDFOptions = {
      includeGuides: options.includeGuides,
      includeNotes: options.includeNotes,
      includeSummary: options.includeSummary,
      sectionBreaks: options.sectionBreaks,
      ...(options.optimizeForMobile !== undefined && {
        optimizeForMobile: options.optimizeForMobile
      })
    };

    return this.textGenerator.generateFromChecklist(checklist, textOptions);
  }

  private async generatePlatformAwarePDF(
    checklist: ChecklistResult,
    options: PDFExportOptions
  ): Promise<jsPDF> {
    // 既存のプラットフォーム対応生成器を使用
    const enhancedOptions: EnhancedPDFOptions = {
      includeGuides: options.includeGuides,
      includeNotes: options.includeNotes,
      includeSummary: options.includeSummary,
      sectionBreaks: options.sectionBreaks,
      useTextMode: true, // 既存のテキストモードを使用
      useNativeFeatures: options.useNativeFeatures ?? true,
      enableProgressiveEnhancement: true,
      showSaveDialog: options.showSaveDialog ?? this.hasFileSystemAccess,
      enableSharing: options.enableSharing ?? this.hasWebShareFiles,
      ...(options.optimizeForMobile !== undefined && {
        optimizeForMobile: options.optimizeForMobile
      })
    };

    // プラットフォーム対応生成器からPDFインスタンスを取得
    // 注意: 既存のgeneratePDF()メソッドは直接PDFを保存するため、
    // PDFインスタンスを取得する新しいメソッドが必要
    return this.generateDirectPDF(checklist, enhancedOptions);
  }

  private async generateDirectPDF(
    checklist: ChecklistResult,
    options: EnhancedPDFOptions
  ): Promise<jsPDF> {
    // 既存のpdfGenerator.tsの機能を直接使用
    const { generateTextBasedPDF } = await import('./pdfGenerator.js');

    const pdfOptions = {
      includeGuides: options.includeGuides ?? true,
      includeNotes: options.includeNotes ?? true,
      includeSummary: options.includeSummary ?? true,
      sectionBreaks: options.sectionBreaks ?? true,
      useTextMode: options.useTextMode ?? true,
      ...(options.fontConfig && { fontConfig: options.fontConfig })
    };

    return generateTextBasedPDF(checklist, pdfOptions);
  }

  private async saveOrSharePDF(
    pdf: jsPDF,
    title: string,
    options: PDFExportOptions,
    t?: (key: string) => string
  ): Promise<void> {
    const timestamp = new Date().toISOString().slice(0, 10);
    const sanitizedTitle = title.replace(/[^\w\s\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/gi, '');
    const appTitle = t?.('app.title') ?? 'Fact-Checklist';
    const filename = `${appTitle}_${sanitizedTitle}_${timestamp}.pdf`;

    // console.log('💾 Attempting to save/share PDF:', filename);

    // 保存方法の優先順位
    if (options.showSaveDialog && this.hasFileSystemAccess) {
      // console.log('📁 Using File System Access API');
      await this.saveWithFileSystemAPI(pdf, filename);
    } else if (options.enableSharing && this.hasWebShareFiles && this.isNativeApp) {
      // console.log('📤 Using Web Share API');
      await this.shareWithWebShareAPI(pdf, filename, title);
    } else {
      // console.log('⬇️ Using standard download');
      this.downloadPDF(pdf, filename);
    }
  }

  private async saveWithFileSystemAPI(pdf: jsPDF, suggestedName: string): Promise<void> {
    try {
      const fileHandle = await (
        window as typeof window & {
          showSaveFilePicker: (options: {
            suggestedName: string;
            types: Array<{ description: string; accept: Record<string, string[]> }>;
          }) => Promise<FileSystemFileHandle>;
        }
      ).showSaveFilePicker({
        suggestedName,
        types: [
          {
            description: 'PDF files',
            accept: { 'application/pdf': ['.pdf'] }
          }
        ]
      });

      const pdfBlob = pdf.output('blob');
      const writable = await fileHandle.createWritable();
      await writable.write(pdfBlob);
      await writable.close();

      // console.log('✅ PDF saved using File System Access API');
    } catch (error) {
      console.warn('⚠️ File System Access API failed, falling back to download:', error);
      this.downloadPDF(pdf, suggestedName);
    }
  }

  private async shareWithWebShareAPI(pdf: jsPDF, filename: string, title: string): Promise<void> {
    try {
      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], filename, { type: 'application/pdf' });

      if (navigator.canShare?.({ files: [file] }) && navigator.share) {
        await navigator.share({
          title: '事実確認チェックシート',
          text: `${title}の評価結果`,
          files: [file]
        });

        // console.log('✅ PDF shared using Web Share API');
      } else {
        throw new Error('Web Share API does not support files');
      }
    } catch (error) {
      console.warn('⚠️ Web Share API failed, falling back to download:', error);
      this.downloadPDF(pdf, filename);
    }
  }

  private downloadPDF(pdf: jsPDF, filename: string): void {
    pdf.save(filename);
    // console.log('✅ PDF downloaded using standard method');
  }

  /**
   * 対応機能レベルを取得
   */
  getSupportedFeatures(): {
    canSave: boolean;
    canShare: boolean;
    hasNativeFeatures: boolean;
    supportsTextMode: boolean;
    supportsPlatformMode: boolean;
    qualityLevel: 'high' | 'medium' | 'basic';
  } {
    const systemFeatures = platformStore.systemFeatures;

    return {
      canSave: this.hasFileSystemAccess,
      canShare: this.hasWebShareFiles,
      hasNativeFeatures: systemFeatures.nativeFeatureLevel !== 'none',
      supportsTextMode: true, // 常にサポート
      supportsPlatformMode: true, // 既存機能として常にサポート
      qualityLevel:
        systemFeatures.nativeFeatureLevel === 'full'
          ? 'high'
          : systemFeatures.nativeFeatureLevel === 'partial'
            ? 'medium'
            : 'basic'
    };
  }

  /**
   * 推奨設定を取得
   */
  getRecommendedOptions(checklist: ChecklistResult): Partial<PDFExportOptions> {
    const isMobile =
      platformStore.capabilities.platform === 'ios' ||
      platformStore.capabilities.platform === 'android';

    return {
      textMode: true, // デフォルトでテキストモード（検索可能）
      includeGuides: true,
      includeNotes: !!checklist.notes,
      includeSummary: true,
      sectionBreaks: !isMobile, // モバイルでは連続表示
      showSaveDialog: this.hasFileSystemAccess,
      enableSharing: this.hasWebShareFiles && this.isNativeApp,
      useNativeFeatures: true,
      optimizeForMobile: isMobile
    };
  }
}
