// src/lib/utils/platformAwarePDFGenerator.ts
/**
 * プラットフォーム対応PDF生成器
 * PWA App Store配信とCSP制約を考慮した段階的機能強化
 */

import type jsPDF from 'jspdf';
import type { ChecklistResult } from '$lib/types/checklist.js';
import {
  platformStore,
  type PlatformCapabilities,
  type DetectedSystemFeatures
} from '$lib/stores/platformStore.svelte.js';
import { generateTextBasedPDF, type PDFGenerationOptions } from './pdfGenerator.js';

export interface EnhancedPDFOptions extends Partial<PDFGenerationOptions> {
  // プラットフォーム固有オプション
  useNativeFeatures?: boolean;
  preferredStrategy?: DetectedSystemFeatures['recommendedPDFStrategy'];
  enableProgressiveEnhancement?: boolean;

  // ファイル処理オプション
  showSaveDialog?: boolean;
  enableSharing?: boolean;

  // 品質・パフォーマンス
  optimizeForMobile?: boolean;
  compression?: 'none' | 'low' | 'medium' | 'high';
}

export class PlatformAwarePDFGenerator {
  private capabilities: PlatformCapabilities;
  private systemFeatures: DetectedSystemFeatures;

  constructor() {
    this.capabilities = platformStore.capabilities;
    this.systemFeatures = platformStore.systemFeatures;
  }

  /**
   * プラットフォーム対応PDF生成のメインエントリーポイント
   */
  async generatePDF(checklist: ChecklistResult, options: EnhancedPDFOptions = {}): Promise<void> {
    console.log('🚀 Platform-aware PDF generation started');
    platformStore.debugInfo();

    try {
      // オプションのデフォルト設定
      const enhancedOptions = this.prepareOptions(options);

      // 最適な生成戦略を決定
      const strategy = this.selectStrategy(enhancedOptions);
      console.log(`📋 Selected PDF strategy: ${strategy}`);

      // 戦略に基づく生成実行
      switch (strategy) {
        case 'native-optimized':
          await this.generateWithNativeFeatures(checklist, enhancedOptions);
          break;
        case 'web-canvas':
          await this.generateWithWebCanvas(checklist, enhancedOptions);
          break;
        case 'text-based':
          await this.generateWithTextBased(checklist, enhancedOptions);
          break;
        case 'fallback':
          await this.generateWithFallback(checklist, enhancedOptions);
          break;
      }

      console.log('✅ PDF generation completed successfully');
    } catch (error) {
      console.error('❌ PDF generation failed:', error);
      // エラー時のフォールバック処理
      await this.generateWithFallback(checklist, options);
    }
  }

  /**
   * オプションの準備とデフォルト値設定
   */
  private prepareOptions(options: EnhancedPDFOptions): EnhancedPDFOptions {
    const defaultOptions: EnhancedPDFOptions = {
      // 基本オプション
      includeGuides: true,
      includeNotes: true,
      includeSummary: true,
      sectionBreaks: true,
      useTextMode: true,

      // プラットフォーム固有オプション
      useNativeFeatures: true,
      enableProgressiveEnhancement: true,
      showSaveDialog: this.capabilities.hasFileSystemAccess,
      enableSharing: this.capabilities.hasWebShare,

      // パフォーマンス設定
      optimizeForMobile:
        this.capabilities.platform === 'ios' || this.capabilities.platform === 'android',
      compression: this.capabilities.isNativeApp ? 'medium' : 'high'
    };

    // ユーザー指定オプションでデフォルトを上書き
    return { ...defaultOptions, ...options };
  }

  /**
   * 最適な生成戦略を選択
   */
  private selectStrategy(
    options: EnhancedPDFOptions
  ): DetectedSystemFeatures['recommendedPDFStrategy'] {
    // ユーザー指定の戦略を優先
    if (options.preferredStrategy) {
      return options.preferredStrategy;
    }

    // システム推奨戦略を使用
    return this.systemFeatures.recommendedPDFStrategy;
  }

  /**
   * ネイティブ機能を活用したPDF生成
   */
  private async generateWithNativeFeatures(
    checklist: ChecklistResult,
    options: EnhancedPDFOptions
  ): Promise<void> {
    console.log('🔧 Generating PDF with native features');

    // 最適なシステムフォントを選択
    const optimalFont = this.selectOptimalFont();
    console.log(`🎯 Using optimal font: ${optimalFont}`);

    // 高品質PDF生成
    const pdf = await this.generateOptimizedPDF(checklist, options, optimalFont);

    // ネイティブファイルシステム連携
    if (options.showSaveDialog && this.capabilities.hasFileSystemAccess) {
      await this.saveWithFileSystemAPI(pdf, checklist.title);
      return;
    }

    // Web Share API での共有
    if (options.enableSharing && this.capabilities.hasWebShareFiles) {
      await this.shareWithWebShareAPI(pdf, checklist.title);
      return;
    }

    // フォールバック: 標準ダウンロード
    this.downloadPDF(pdf, checklist.title);
  }

  /**
   * Web Canvas を活用したPDF生成
   */
  private async generateWithWebCanvas(
    checklist: ChecklistResult,
    options: EnhancedPDFOptions
  ): Promise<void> {
    console.log('🎨 Generating PDF with web canvas');

    // Canvas最適化されたPDF生成
    const pdfOptions = this.convertToGenerationOptions(options);
    const pdf = await generateTextBasedPDF(checklist, pdfOptions);

    // 通常のダウンロード処理
    this.downloadPDF(pdf, checklist.title);
  }

  /**
   * テキストベースPDF生成（CSP制約対応）
   */
  private async generateWithTextBased(
    checklist: ChecklistResult,
    options: EnhancedPDFOptions
  ): Promise<void> {
    console.log('📝 Generating text-based PDF (CSP compliant)');

    // 既存のテキストベース生成を使用
    const pdfOptions = this.convertToGenerationOptions(options);
    const pdf = await generateTextBasedPDF(checklist, pdfOptions);

    this.downloadPDF(pdf, checklist.title);
  }

  /**
   * フォールバック生成（最小機能）
   */
  private async generateWithFallback(
    checklist: ChecklistResult,
    options: EnhancedPDFOptions
  ): Promise<void> {
    console.log('🔄 Generating PDF with fallback method');

    // 最小限の機能でPDF生成
    const fallbackOptions: PDFGenerationOptions = {
      includeGuides: false,
      includeNotes: options.includeNotes ?? true,
      includeSummary: options.includeSummary ?? true,
      sectionBreaks: false,
      useTextMode: true
    };

    const pdf = await generateTextBasedPDF(checklist, fallbackOptions);
    this.downloadPDF(pdf, checklist.title);
  }

  /**
   * 最適なシステムフォントを選択
   */
  private selectOptimalFont(): string {
    const { availableSystemFonts } = this.systemFeatures;

    // 日本語フォント優先順位
    const japanesePreferences = [
      'Hiragino Sans',
      'Hiragino Kaku Gothic ProN',
      'Yu Gothic',
      'Noto Sans CJK JP',
      'Noto Sans JP',
      'Meiryo'
    ];

    // 汎用フォント優先順位
    const universalPreferences = [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'helvetica',
      'arial'
    ];

    // 日本語フォントから選択
    for (const font of japanesePreferences) {
      if (availableSystemFonts.includes(font)) {
        return font;
      }
    }

    // 汎用フォントから選択
    for (const font of universalPreferences) {
      if (availableSystemFonts.includes(font)) {
        return font;
      }
    }

    // 最終フォールバック
    return availableSystemFonts[0] ?? 'helvetica';
  }

  /**
   * 最適化されたPDF生成
   */
  private async generateOptimizedPDF(
    checklist: ChecklistResult,
    options: EnhancedPDFOptions,
    fontName: string
  ): Promise<jsPDF> {
    // フォント設定を含むオプション
    const optimizedOptions: PDFGenerationOptions = {
      includeGuides: options.includeGuides ?? true,
      includeNotes: options.includeNotes ?? true,
      includeSummary: options.includeSummary ?? true,
      sectionBreaks: options.sectionBreaks ?? true,
      useTextMode: options.useTextMode ?? true,
      fontConfig: {
        name: fontName,
        weight: 'normal',
        style: 'normal',
        sizes: {
          title: options.optimizeForMobile ? 16 : 18,
          heading: options.optimizeForMobile ? 12 : 14,
          body: options.optimizeForMobile ? 9 : 10,
          small: options.optimizeForMobile ? 7 : 8
        }
      }
    };

    return await generateTextBasedPDF(checklist, optimizedOptions);
  }

  /**
   * EnhancedPDFOptions を PDFGenerationOptions に変換
   */
  private convertToGenerationOptions(options: EnhancedPDFOptions): PDFGenerationOptions {
    return {
      includeGuides: options.includeGuides ?? true,
      includeNotes: options.includeNotes ?? true,
      includeSummary: options.includeSummary ?? true,
      sectionBreaks: options.sectionBreaks ?? true,
      useTextMode: options.useTextMode ?? true,
      ...(options.fontConfig && { fontConfig: options.fontConfig })
    };
  }

  /**
   * File System Access API を使用した保存
   */
  private async saveWithFileSystemAPI(pdf: jsPDF, title: string): Promise<void> {
    try {
      const fileHandle = await (
        window as typeof window & {
          showSaveFilePicker: (options: {
            suggestedName: string;
            types: Array<{ description: string; accept: Record<string, string[]> }>;
          }) => Promise<FileSystemFileHandle>;
        }
      ).showSaveFilePicker({
        suggestedName: `事実確認チェックシート_${title.replace(/[^\w\s]/gi, '')}_${new Date().toISOString().slice(0, 10)}.pdf`,
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

      console.log('💾 PDF saved using File System Access API');
    } catch (error) {
      console.warn('File System Access API failed, falling back to download:', error);
      this.downloadPDF(pdf, title);
    }
  }

  /**
   * Web Share API を使用した共有
   */
  private async shareWithWebShareAPI(pdf: jsPDF, title: string): Promise<void> {
    try {
      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], `事実確認チェックシート_${title}.pdf`, {
        type: 'application/pdf'
      });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share!({
          title: '事実確認チェックシート',
          text: `${title}の評価結果`,
          files: [file]
        });

        console.log('📤 PDF shared using Web Share API');
      } else {
        throw new Error('Web Share API does not support files');
      }
    } catch (error) {
      console.warn('Web Share API failed, falling back to download:', error);
      this.downloadPDF(pdf, title);
    }
  }

  /**
   * 標準ダウンロード処理
   */
  private downloadPDF(pdf: jsPDF, title: string): void {
    const filename = `事実確認チェックシート_${title.replace(/[^\w\s]/gi, '')}_${new Date().toISOString().slice(0, 10)}.pdf`;
    pdf.save(filename);
    console.log('⬇️ PDF downloaded using standard method');
  }

  /**
   * プラットフォーム機能の動的チェック
   */
  refreshCapabilities(): void {
    platformStore.refresh();
    this.capabilities = platformStore.capabilities;
    this.systemFeatures = platformStore.systemFeatures;
  }

  /**
   * 生成可能な機能レベルを取得
   */
  getSupportedFeatures(): {
    canSave: boolean;
    canShare: boolean;
    hasNativeFeatures: boolean;
    qualityLevel: 'high' | 'medium' | 'basic';
  } {
    return {
      canSave: this.capabilities.hasFileSystemAccess,
      canShare: this.capabilities.hasWebShareFiles,
      hasNativeFeatures: this.systemFeatures.nativeFeatureLevel !== 'none',
      qualityLevel:
        this.systemFeatures.nativeFeatureLevel === 'full'
          ? 'high'
          : this.systemFeatures.nativeFeatureLevel === 'partial'
            ? 'medium'
            : 'basic'
    };
  }
}
