// src/lib/components/export/ExportFormatHandlers.ts
// エクスポートフォーマット別のハンドラー

import type { ChecklistResult } from '$lib/types/checklist.js';
import type { ExportOptions } from './ExportOptions.svelte.js';
import type { ExportProgressManager } from './ExportProgress.svelte.js';
import type {
  HTMLContentGenerator,
  SimpleHTMLContentGenerator,
  MarkdownContentGenerator,
  TranslationFunction
} from '$lib/types/i18n.js';
import { PDFService, PDFGenerationMode, type PDFServiceOptions } from '$lib/services/PDFService.js';
// downloadJSON, downloadText は必要時に動的インポート

// 共通ユーティリティのインポート
import { ExportErrorHandler } from './utils/ExportErrorHandler.js';
import { ExportProgressHelper } from './utils/ExportProgressHelper.js';
import { ExportFilenameGenerator } from './utils/ExportFilenameGenerator.js';
import { ExportI18nLoader } from './utils/ExportI18nLoader.js';
import { ExportContentGenerator } from './utils/ExportContentGenerator.js';

/**
 * PDFエクスポートハンドラー
 */
export class PDFExportHandler {
  private pdfService: PDFService;

  constructor() {
    this.pdfService = new PDFService();
  }

  async export(
    checklist: ChecklistResult,
    options: ExportOptions,
    progressManager: ExportProgressManager,
    generateHTMLContent: HTMLContentGenerator,
    _checklistStoreTitle: string,
    t: TranslationFunction
  ): Promise<void> {
    try {
      ExportProgressHelper.startExport(progressManager, 'PDF', t);
      // PDF生成モードを決定
      let pdfMode: PDFGenerationMode = PDFGenerationMode.RELIABLE_FONTS; // デフォルト

      if (options.pixelPerfectMode) {
        pdfMode = PDFGenerationMode.PRINT_DIALOG;
      } else if (options.reliableMode) {
        pdfMode = PDFGenerationMode.RELIABLE_FONTS;
      } else if (options.textMode) {
        pdfMode = PDFGenerationMode.TEXT_BASED;
      }

      // PDFサービス用オプションに変換
      const pdfOptions: PDFServiceOptions = {
        ...options,
        mode: pdfMode,
        onProgress: (progress, message) => {
          progressManager.updateProgress(progress, 100, 'PDF Generation', message);
        }
      };

      // HTMLコンテンツを生成（必要な場合）
      let htmlContent: string | undefined;
      if (
        pdfMode === PDFGenerationMode.PRINT_DIALOG ||
        (pdfMode as PDFGenerationMode) === PDFGenerationMode.HTML_TO_CANVAS
      ) {
        await ExportProgressHelper.updateStandardProgress(
          progressManager,
          'GENERATING',
          t,
          'Generating HTML content...'
        );
        const i18nResult = await ExportI18nLoader.loadFullI18n();
        htmlContent = await generateHTMLContent(
          i18nResult.factChecklistI18n,
          i18nResult.getCurrentLanguage ?? (() => 'en'),
          i18nResult.getSupportedLanguages ?? (() => ({ en: { name: 'English' } }))
        );
      }

      // PDFServiceを使用して統一的に生成
      await ExportProgressHelper.updateCustomProgress(
        progressManager,
        30,
        t('export.progress.processing'),
        'Starting PDF generation...'
      );

      const result = await this.pdfService.generatePDF(checklist, pdfOptions, htmlContent, t);

      if (!result.success) {
        throw new Error(result.error ?? 'PDF generation failed');
      }

      await ExportProgressHelper.completeExport(progressManager, 'PDF', t);

      // console.log(
      //   `✅ PDF export completed successfully using ${result.usedMode} in ${result.duration}ms`
      // );
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'PDF', progressManager);
    }
  }
}

/**
 * HTMLエクスポートハンドラー
 */
export class HTMLExportHandler {
  async export(
    _checklist: ChecklistResult,
    _options: ExportOptions,
    progressManager: ExportProgressManager,
    generateHTMLContent: SimpleHTMLContentGenerator,
    checklistStoreTitle: string,
    t: TranslationFunction
  ): Promise<void> {
    try {
      ExportProgressHelper.startExport(progressManager, 'HTML', t);

      await ExportProgressHelper.updateStandardProgress(progressManager, 'GENERATING', t);

      // Import i18n functions
      const factChecklistI18n = await ExportI18nLoader.loadBasicI18n();

      await ExportProgressHelper.updateStandardProgress(progressManager, 'PROCESSING', t);

      // HTMLコンテンツを生成
      const htmlContent = await generateHTMLContent(factChecklistI18n);

      await ExportProgressHelper.updateStandardProgress(progressManager, 'SAVING', t);

      // ファイル名生成
      const filename = await ExportFilenameGenerator.generateHTMLFilename(checklistStoreTitle, t);

      // HTMLファイルとしてダウンロード
      const { downloadText } = await import('$lib/utils/download.js');
      downloadText(htmlContent, filename, 'text/html');

      await ExportProgressHelper.completeExport(progressManager, 'HTML', t);
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'HTML', progressManager);
    }
  }
}

/**
 * JSONエクスポートハンドラー
 */
export class JSONExportHandler {
  async export(
    checklist: ChecklistResult,
    options: ExportOptions,
    progressManager: ExportProgressManager,
    checklistStoreTitle: string,
    t: TranslationFunction
  ): Promise<void> {
    try {
      ExportProgressHelper.startExport(progressManager, 'JSON', t);

      await ExportProgressHelper.updateStandardProgress(progressManager, 'GENERATING', t);

      // Import i18n functions
      const { factChecklistI18n } = await import('$lib/i18n/simple-store.svelte.js');
      
      // JSONデータを準備
      const exportData = ExportContentGenerator.generateJSONExportData(
        checklist,
        options,
        checklistStoreTitle,
        undefined,
        factChecklistI18n
      );

      await ExportProgressHelper.updateCustomProgress(
        progressManager,
        60,
        t('export.progress.processing'),
        'Serializing data...'
      );

      // ファイル名生成
      const filename = await ExportFilenameGenerator.generateJSONFilename(checklistStoreTitle, t);

      await ExportProgressHelper.updateStandardProgress(progressManager, 'SAVING', t);

      // JSONファイルとしてダウンロード
      const { downloadJSON } = await import('$lib/utils/download.js');
      downloadJSON(exportData, filename);

      await ExportProgressHelper.completeExport(progressManager, 'JSON', t);
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'JSON', progressManager);
    }
  }
}

/**
 * Markdownエクスポートハンドラー
 */
export class MarkdownExportHandler {
  async export(
    _checklist: ChecklistResult,
    _options: ExportOptions,
    progressManager: ExportProgressManager,
    generateMarkdownContent: MarkdownContentGenerator,
    checklistStoreTitle: string,
    t: TranslationFunction
  ): Promise<void> {
    try {
      ExportProgressHelper.startExport(progressManager, 'Markdown', t);

      await ExportProgressHelper.updateStandardProgress(progressManager, 'GENERATING', t);

      // Import i18n functions
      const factChecklistI18n = await ExportI18nLoader.loadBasicI18n();

      await ExportProgressHelper.updateStandardProgress(progressManager, 'PROCESSING', t);

      // Markdownコンテンツを生成
      const markdownContent = await generateMarkdownContent(factChecklistI18n);

      await ExportProgressHelper.updateStandardProgress(progressManager, 'SAVING', t);

      // ファイル名生成
      const filename = await ExportFilenameGenerator.generateMarkdownFilename(
        checklistStoreTitle,
        t
      );

      // Markdownファイルとしてダウンロード
      const { downloadText } = await import('$lib/utils/download.js');
      downloadText(markdownContent, filename, 'text/markdown');

      await ExportProgressHelper.completeExport(progressManager, 'Markdown', t);
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'Markdown', progressManager);
    }
  }
}
