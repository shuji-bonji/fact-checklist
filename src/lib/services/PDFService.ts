// src/lib/services/PDFService.ts
// 統一PDFサービス - 全PDF生成器を統合

import type { ExportOptions } from '$lib/components/export/ExportOptions.svelte.js';
import type { ChecklistResult } from '$lib/types/checklist.js';
import type { TranslationFunction } from '$lib/types/i18n.js';
import { PlatformAwarePDFGenerator } from '$lib/utils/platformAwarePDFGenerator.js';
import { PWAAwarePDFExporter } from '$lib/utils/pwaAwarePDFExporter.js';
import { ReliablePDFGenerator } from '$lib/utils/reliablePDFGenerator.js';
import { SimplePDFGenerator } from '$lib/utils/simplePDFGenerator.js';
import { TextBasedPDFGenerator } from '$lib/utils/textBasedPDFGenerator.js';
// import { HTMLToPDFGenerator } from '$lib/utils/htmlToPDFGenerator.js';
import { formatDateForFilename } from '$lib/utils/dateFormat.js';
// sanitizeFilename, downloadBlob は必要時に動的インポート

/**
 * PDF生成方式
 */
export enum PDFGenerationMode {
  /** 印刷ダイアログ経由（推奨） */
  PRINT_DIALOG = 'print-dialog',
  /** テキストベース生成 */
  TEXT_BASED = 'text-based',
  /** 確実な日本語フォント対応 */
  RELIABLE_FONTS = 'reliable-fonts',
  /** HTML→Canvas→PDF（高品質） */
  HTML_TO_CANVAS = 'html-to-canvas',
  /** プラットフォーム対応 */
  PLATFORM_AWARE = 'platform-aware',
  /** PWA対応 */
  PWA_OPTIMIZED = 'pwa-optimized'
}

/**
 * PDF生成オプション
 */
export interface PDFServiceOptions extends ExportOptions {
  /** 生成方式 */
  mode: PDFGenerationMode;
  /** 高品質モード */
  highQuality?: boolean;
  /** モバイル最適化 */
  optimizeForMobile?: boolean;
  /** ファイル名（省略時は自動生成） */
  filename?: string;
  /** プログレスコールバック */
  onProgress?: (progress: number, message: string) => void;
}

/**
 * PDF生成結果
 */
export interface PDFGenerationResult {
  /** 成功フラグ */
  success: boolean;
  /** 生成されたBlob（ダウンロード用） */
  blob?: Blob | undefined;
  /** エラーメッセージ */
  error?: string;
  /** 使用された生成方式 */
  usedMode: PDFGenerationMode;
  /** 生成時間（ミリ秒） */
  duration: number;
  /** ファイル名 */
  filename: string;
}

// PDF生成器の共通インターフェース（各生成器の型を緩和）
interface BasePDFGenerator {
  generatePDF?: (
    checklist: ChecklistResult,
    options?: Record<string, unknown>
  ) => Promise<Blob | void>;
  generateFromHTML?: (
    htmlContent: string,
    options?: string | Record<string, unknown>
  ) => Promise<{ success?: boolean; cancelled?: boolean } | Blob>;
  exportPDF?: (checklist: ChecklistResult, options?: Record<string, unknown>) => Promise<void>;
}

/**
 * 統一PDFサービス
 * 複数のPDF生成器を統合し、最適な方式を自動選択
 */
export class PDFService {
  private generators: Map<PDFGenerationMode, unknown>;
  private fallbackChain: PDFGenerationMode[];

  constructor() {
    this.generators = new Map();
    this.generators.set(PDFGenerationMode.PRINT_DIALOG, new SimplePDFGenerator());
    this.generators.set(PDFGenerationMode.TEXT_BASED, new TextBasedPDFGenerator());
    this.generators.set(PDFGenerationMode.RELIABLE_FONTS, new ReliablePDFGenerator());
    // this.generators.set(PDFGenerationMode.HTML_TO_CANVAS, new HTMLToPDFGenerator());
    this.generators.set(PDFGenerationMode.PLATFORM_AWARE, new PlatformAwarePDFGenerator());
    this.generators.set(PDFGenerationMode.PWA_OPTIMIZED, new PWAAwarePDFExporter());

    // フォールバックチェーン（失敗時の代替手段）
    this.fallbackChain = [
      PDFGenerationMode.PRINT_DIALOG,
      PDFGenerationMode.RELIABLE_FONTS,
      PDFGenerationMode.TEXT_BASED,
      PDFGenerationMode.PWA_OPTIMIZED
    ];
  }

  /**
   * PDF生成（メインメソッド）
   * @param checklist チェックリスト結果
   * @param options 生成オプション
   * @param htmlContent HTMLコンテンツ（HTML系生成方式用）
   * @param t 翻訳関数
   * @returns 生成結果
   */
  async generatePDF(
    checklist: ChecklistResult,
    options: PDFServiceOptions,
    htmlContent?: string,
    t?: TranslationFunction
  ): Promise<PDFGenerationResult> {
    const startTime = Date.now();
    const filename = await this.generateFilename(checklist, options, t);

    try {
      // 指定された方式で生成を試行
      const result = await this.tryGenerateWithMode(
        checklist,
        options,
        options.mode,
        htmlContent,
        filename,
        t
      );

      if (result.success) {
        return {
          ...result,
          duration: Date.now() - startTime,
          filename
        };
      }

      // 失敗時はフォールバックチェーンを試行
      return await this.tryFallbackGeneration(
        checklist,
        options,
        htmlContent,
        filename,
        startTime,
        t
      );
    } catch (error) {
      console.error('❌ PDF generation failed completely:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        usedMode: options.mode,
        duration: Date.now() - startTime,
        filename
      };
    }
  }

  /**
   * 指定された方式でPDF生成を試行
   */
  private async tryGenerateWithMode(
    checklist: ChecklistResult,
    options: PDFServiceOptions,
    mode: PDFGenerationMode,
    htmlContent?: string,
    filename?: string,
    t?: TranslationFunction
  ): Promise<PDFGenerationResult> {
    const generator = this.generators.get(mode);
    if (generator === undefined) {
      throw new Error(`Unsupported PDF generation mode: ${mode}`);
    }

    try {
      options.onProgress?.(20, `Starting ${mode} generation...`);

      switch (mode) {
        case PDFGenerationMode.PRINT_DIALOG: {
          if (htmlContent === null || htmlContent === undefined || htmlContent === '') {
            throw new Error('HTML content required for print dialog mode');
          }
          const printResult = await (generator as BasePDFGenerator).generateFromHTML?.(
            htmlContent,
            filename
          );
          const result = printResult as { success?: boolean; cancelled?: boolean } | undefined;
          if (result !== null && result !== undefined && result.cancelled === true) {
            return {
              success: false,
              error: 'Print dialog was cancelled by user',
              usedMode: mode,
              duration: 0,
              filename:
                typeof filename === 'string' && filename.trim() !== '' ? filename : 'unknown.pdf'
            };
          }
          return {
            success: result?.success ?? true,
            usedMode: mode,
            duration: 0,
            filename:
              typeof filename === 'string' && filename.trim() !== '' ? filename : 'unknown.pdf'
          };
        }

        case PDFGenerationMode.RELIABLE_FONTS: {
          options.onProgress?.(50, 'Generating with reliable fonts...');
          const reliableBlob = (await (generator as BasePDFGenerator).generatePDF?.(
            checklist,
            this.convertOptionsForReliable(options, t)
          )) as Blob | void;
          const blob = reliableBlob instanceof Blob ? reliableBlob : undefined;
          if (
            typeof filename === 'string' &&
            filename !== null &&
            filename.trim() !== '' &&
            blob !== null &&
            blob !== undefined
          ) {
            const { downloadBlob } = await import('$lib/utils/download.js');
            downloadBlob(blob, filename);
          }
          return {
            success: true,
            blob,
            usedMode: mode,
            duration: 0,
            filename:
              typeof filename === 'string' && filename.trim() !== '' ? filename : 'unknown.pdf'
          };
        }

        case PDFGenerationMode.TEXT_BASED: {
          options.onProgress?.(50, 'Generating text-based PDF...');
          const textBlob = (await (generator as BasePDFGenerator).generatePDF?.(
            checklist,
            this.convertOptionsForText(options, t)
          )) as Blob | void;
          const blob = textBlob instanceof Blob ? textBlob : undefined;
          if (
            typeof filename === 'string' &&
            filename !== null &&
            filename.trim() !== '' &&
            blob !== null &&
            blob !== undefined
          ) {
            const { downloadBlob } = await import('$lib/utils/download.js');
            downloadBlob(blob, filename);
          }
          return {
            success: true,
            blob,
            usedMode: mode,
            duration: 0,
            filename:
              filename !== null && filename !== undefined && filename !== ''
                ? filename
                : 'unknown.pdf'
          };
        }

        case PDFGenerationMode.HTML_TO_CANVAS: {
          if (htmlContent === null || htmlContent === undefined || htmlContent === '')
            throw new Error('HTML content required for HTML to canvas mode');
          options.onProgress?.(50, 'Converting HTML to canvas...');
          const canvasBlob = (await (generator as BasePDFGenerator).generateFromHTML?.(
            htmlContent,
            this.convertOptionsForHTML(options)
          )) as Blob | { success?: boolean; cancelled?: boolean } | undefined;
          const blob = canvasBlob instanceof Blob ? canvasBlob : undefined;
          if (
            filename !== null &&
            filename !== undefined &&
            filename !== '' &&
            blob !== null &&
            blob !== undefined
          ) {
            const { downloadBlob } = await import('$lib/utils/download.js');
            downloadBlob(blob, filename);
          }
          return {
            success: true,
            blob,
            usedMode: mode,
            duration: 0,
            filename:
              filename !== null && filename !== undefined && filename !== ''
                ? filename
                : 'unknown.pdf'
          };
        }

        case PDFGenerationMode.PLATFORM_AWARE: {
          options.onProgress?.(50, 'Generating platform-aware PDF...');
          await (generator as BasePDFGenerator).generatePDF?.(
            checklist,
            this.convertOptionsForPlatform(options)
          );
          return {
            success: true,
            usedMode: mode,
            duration: 0,
            filename:
              filename !== null && filename !== undefined && filename !== ''
                ? filename
                : 'unknown.pdf'
          };
        }

        case PDFGenerationMode.PWA_OPTIMIZED: {
          options.onProgress?.(50, 'Generating PWA-optimized PDF...');
          await (generator as BasePDFGenerator).exportPDF?.(
            checklist,
            this.convertOptionsForPWA(options, t)
          );
          return {
            success: true,
            usedMode: mode,
            duration: 0,
            filename:
              filename !== null && filename !== undefined && filename !== ''
                ? filename
                : 'unknown.pdf'
          };
        }

        default:
          throw new Error(`Generation mode ${mode} not implemented`);
      }
    } catch (error) {
      console.warn(`❌ PDF generation failed with mode ${mode}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        usedMode: mode,
        duration: 0,
        filename:
          filename !== null && filename !== undefined && filename !== '' ? filename : 'unknown.pdf'
      };
    }
  }

  /**
   * フォールバックチェーンでPDF生成を試行
   */
  private async tryFallbackGeneration(
    checklist: ChecklistResult,
    options: PDFServiceOptions,
    htmlContent?: string,
    filename?: string,
    startTime?: number,
    t?: TranslationFunction
  ): Promise<PDFGenerationResult> {
    const errors: string[] = [];

    for (const fallbackMode of this.fallbackChain) {
      if (fallbackMode === options.mode) continue; // 既に試行済み

      // console.log(`🔄 Trying fallback mode: ${fallbackMode}`);
      options.onProgress?.(60, `Trying fallback: ${fallbackMode}...`);

      const result = await this.tryGenerateWithMode(
        checklist,
        { ...options, mode: fallbackMode },
        fallbackMode,
        htmlContent,
        filename,
        t
      );

      if (result.success) {
        // console.log(`✅ Fallback successful with mode: ${fallbackMode}`);
        return {
          ...result,
          duration:
            startTime !== null && startTime !== undefined && startTime > 0
              ? Date.now() - startTime
              : result.duration
        };
      }

      errors.push(`${fallbackMode}: ${result.error}`);
    }

    // 全ての方式が失敗
    return {
      success: false,
      error: `All PDF generation methods failed. Errors: ${errors.join('; ')}`,
      usedMode: options.mode,
      duration:
        startTime !== null && startTime !== undefined && startTime > 0 ? Date.now() - startTime : 0,
      filename:
        filename !== null && filename !== undefined && filename !== '' ? filename : 'unknown.pdf'
    };
  }

  /**
   * ファイル名を生成する
   */
  private async generateFilename(
    checklist: ChecklistResult,
    options: PDFServiceOptions,
    t?: TranslationFunction
  ): Promise<string> {
    if (options.filename !== null && options.filename !== undefined && options.filename !== '')
      return options.filename;

    const timestamp = formatDateForFilename();
    const { sanitizeFilename } = await import('$lib/utils/download.js');
    const sanitizedTitle = sanitizeFilename(checklist.title ?? 'fact-checklist');
    const appTitle = t?.('app.title') ?? 'FactCheckList';

    return `${appTitle}_${sanitizedTitle}_${timestamp}.pdf`;
  }

  /**
   * ReliablePDFGenerator用のオプション変換
   */
  private convertOptionsForReliable(
    options: PDFServiceOptions,
    t?: TranslationFunction
  ): Record<string, unknown> {
    return {
      includeGuides: options.includeGuides,
      includeNotes: options.includeNotes,
      includeSummary: options.includeSummary,
      sectionBreaks: options.sectionBreaks,
      advancedMode: options.advancedMode,
      t
    };
  }

  /**
   * TextBasedPDFGenerator用のオプション変換
   */
  private convertOptionsForText(
    options: PDFServiceOptions,
    t?: TranslationFunction
  ): Record<string, unknown> {
    return {
      includeGuides: options.includeGuides,
      includeNotes: options.includeNotes,
      includeSummary: options.includeSummary,
      sectionBreaks: options.sectionBreaks,
      optimizeForMobile: options.optimizeForMobile,
      t
    };
  }

  /**
   * HTMLToPDFGenerator用のオプション変換
   */
  private convertOptionsForHTML(options: PDFServiceOptions): Record<string, unknown> {
    return {
      includeGuides: options.includeGuides,
      includeNotes: options.includeNotes,
      includeSummary: options.includeSummary,
      sectionBreaks: options.sectionBreaks,
      highQuality: options.highQuality,
      pageFormat: 'A4' as const
    };
  }

  /**
   * PlatformAwarePDFGenerator用のオプション変換
   */
  private convertOptionsForPlatform(options: PDFServiceOptions): Record<string, unknown> {
    return {
      includeGuides: options.includeGuides,
      includeNotes: options.includeNotes,
      includeSummary: options.includeSummary,
      sectionBreaks: options.sectionBreaks,
      useNativeFeatures: true,
      enableProgressiveEnhancement: true
    };
  }

  /**
   * PWAAwarePDFExporter用のオプション変換
   */
  private convertOptionsForPWA(
    options: PDFServiceOptions,
    t?: TranslationFunction
  ): Record<string, unknown> {
    return {
      includeGuides: options.includeGuides,
      includeNotes: options.includeNotes,
      includeSummary: options.includeSummary,
      sectionBreaks: options.sectionBreaks,
      textMode: options.textMode,
      advancedMode: options.advancedMode,
      optimizeForMobile: options.optimizeForMobile,
      t
    };
  }

  /**
   * 推奨PDF生成方式を取得
   * @param checklist チェックリスト結果
   * @param userPreferences ユーザー設定
   * @returns 推奨方式
   */
  getRecommendedMode(
    _checklist: ChecklistResult,
    userPreferences?: Partial<PDFServiceOptions>
  ): PDFGenerationMode {
    // ユーザーの明示的な設定がある場合
    if (userPreferences?.mode !== null && userPreferences?.mode !== undefined) {
      return userPreferences.mode;
    }

    // プラットフォーム・環境に基づく自動選択
    if (typeof window !== 'undefined') {
      // モバイルデバイスの場合
      if (window.innerWidth <= 768) {
        return PDFGenerationMode.PWA_OPTIMIZED;
      }

      // 印刷機能が利用可能な場合（推奨）
      if (typeof window.print === 'function') {
        return PDFGenerationMode.PRINT_DIALOG;
      }
    }

    // デフォルトは確実な日本語フォント対応
    return PDFGenerationMode.RELIABLE_FONTS;
  }

  /**
   * 利用可能なPDF生成方式一覧を取得
   * @returns 方式リスト
   */
  getAvailableModes(): PDFGenerationMode[] {
    return Array.from(this.generators.keys());
  }

  /**
   * PDF生成方式の説明を取得
   * @param mode 生成方式
   * @param t 翻訳関数
   * @returns 説明文
   */
  getModeDescription(mode: PDFGenerationMode, t?: TranslationFunction): string {
    const descriptions: Record<PDFGenerationMode, string> = {
      [PDFGenerationMode.PRINT_DIALOG]: t?.('pdf.mode.printDialog') ?? 'Print dialog (recommended)',
      [PDFGenerationMode.TEXT_BASED]: t?.('pdf.mode.textBased') ?? 'Text-based PDF (searchable)',
      [PDFGenerationMode.RELIABLE_FONTS]:
        t?.('pdf.mode.reliableFonts') ?? 'Reliable Japanese fonts',
      [PDFGenerationMode.HTML_TO_CANVAS]: t?.('pdf.mode.htmlToCanvas') ?? 'High-quality visual PDF',
      [PDFGenerationMode.PLATFORM_AWARE]: t?.('pdf.mode.platformAware') ?? 'Platform-optimized',
      [PDFGenerationMode.PWA_OPTIMIZED]: t?.('pdf.mode.pwaOptimized') ?? 'PWA-optimized'
    };

    return descriptions[mode] ?? mode;
  }
}
