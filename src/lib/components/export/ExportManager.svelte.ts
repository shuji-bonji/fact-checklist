// src/lib/components/export/ExportManager.svelte.ts
// エクスポート機能の統合マネージャー

import type { ChecklistResult } from '$lib/types/checklist.js';
import type {
  FactChecklistI18n,
  TranslationFunction,
  GetCurrentLanguageFunction,
  GetSupportedLanguagesFunction
} from '$lib/types/i18n.js';
import { ExportOptionsManager, type ExportOptions } from './ExportOptions.svelte.js';
import { ExportProgressManager } from './ExportProgress.svelte.js';
import {
  PDFExportHandler,
  HTMLExportHandler,
  JSONExportHandler,
  MarkdownExportHandler
} from './ExportFormatHandlers.js';
import {
  generateSectionedHTMLContent,
  generateMarkdownContent,
  groupItemsByCategory,
  type SectionInfo
} from './ExportUtils.js';

// 共通ユーティリティのインポート
import { ExportValidationHelper } from './utils/ExportValidationHelper.js';
import { ExportErrorHandler } from './utils/ExportErrorHandler.js';
import { ExportProgressHelper } from './utils/ExportProgressHelper.js';
import { ExportI18nLoader } from './utils/ExportI18nLoader.js';
import { ExportContentGenerator } from './utils/ExportContentGenerator.js';
import { ExportFilenameGenerator } from './utils/ExportFilenameGenerator.js';

/**
 * エクスポート機能を統合管理するクラス
 */
export class ExportManager {
  readonly optionsManager: ExportOptionsManager;
  readonly progressManager: ExportProgressManager;

  private pdfHandler: PDFExportHandler;
  private htmlHandler: HTMLExportHandler;
  private jsonHandler: JSONExportHandler;
  private markdownHandler: MarkdownExportHandler;

  constructor() {
    this.optionsManager = new ExportOptionsManager();
    this.progressManager = new ExportProgressManager();

    this.pdfHandler = new PDFExportHandler();
    this.htmlHandler = new HTMLExportHandler();
    this.jsonHandler = new JSONExportHandler();
    this.markdownHandler = new MarkdownExportHandler();
  }

  /**
   * エクスポートを実行する
   * @param checklist チェックリスト結果
   * @param checklistStoreTitle チェックリストタイトル
   * @param t 翻訳関数
   */
  async exportChecklist(
    checklist: ChecklistResult,
    checklistStoreTitle: string,
    t: TranslationFunction
  ): Promise<void> {
    // 統一的なバリデーション
    if (
      !ExportValidationHelper.validateExportRequest(
        checklist,
        this.optionsManager,
        this.progressManager
      )
    ) {
      return;
    }

    const options = this.optionsManager.options;

    try {
      ExportProgressHelper.startExport(this.progressManager, options.format.toUpperCase(), t);

      switch (options.format) {
        case 'pdf':
          await this.pdfHandler.export(
            checklist,
            options,
            this.progressManager,
            await this.generateHTMLContentWrapper(checklist, options, t),
            checklistStoreTitle,
            t
          );
          break;

        case 'html':
          await this.htmlHandler.export(
            checklist,
            options,
            this.progressManager,
            await this.generateHTMLContentWrapperSimple(checklist, options, t),
            checklistStoreTitle,
            t
          );
          break;

        case 'json':
          await this.jsonHandler.export(
            checklist,
            options,
            this.progressManager,
            checklistStoreTitle,
            t
          );
          break;

        case 'markdown':
          await this.markdownHandler.export(
            checklist,
            options,
            this.progressManager,
            await this.generateMarkdownContentWrapper(checklist, options, t),
            checklistStoreTitle,
            t
          );
          break;

        case 'csv':
          await this.exportCSV(checklist, options, checklistStoreTitle, t);
          break;

        case 'xml':
          await this.exportXML(checklist, options, checklistStoreTitle, t);
          break;

        default:
          throw new Error(`Unsupported export format: ${options.format}`);
      }
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'Export', this.progressManager, false);
    }
  }

  /**
   * HTMLコンテンツ生成のラッパー（完全版）
   */
  private async generateHTMLContentWrapper(
    checklist: ChecklistResult,
    options: ExportOptions,
    t: TranslationFunction
  ): Promise<
    (
      factChecklistI18n: FactChecklistI18n,
      getCurrentLanguage: GetCurrentLanguageFunction,
      getSupportedLanguages: GetSupportedLanguagesFunction
    ) => Promise<string>
  > {
    return async (
      factChecklistI18n: FactChecklistI18n,
      getCurrentLanguage: GetCurrentLanguageFunction,
      getSupportedLanguages: GetSupportedLanguagesFunction
    ) =>
      generateSectionedHTMLContent(
        checklist,
        options,
        factChecklistI18n,
        t,
        getCurrentLanguage,
        getSupportedLanguages
      );
  }

  /**
   * HTMLコンテンツ生成のラッパー（簡単版）
   */
  private async generateHTMLContentWrapperSimple(
    checklist: ChecklistResult,
    options: ExportOptions,
    t: TranslationFunction
  ): Promise<(factChecklistI18n: FactChecklistI18n) => Promise<string>> {
    return async (_factChecklistI18n: FactChecklistI18n) => {
      const i18nResult = await ExportI18nLoader.loadFullI18n();
      return generateSectionedHTMLContent(
        checklist,
        options,
        i18nResult.factChecklistI18n, // Use the loaded i18n instead of the passed one
        t,
        i18nResult.getCurrentLanguage ?? (() => 'en'),
        i18nResult.getSupportedLanguages ?? (() => ({ en: { name: 'English' } }))
      );
    };
  }

  /**
   * Markdownコンテンツ生成のラッパー
   */
  private async generateMarkdownContentWrapper(
    checklist: ChecklistResult,
    options: ExportOptions,
    t: TranslationFunction
  ): Promise<(factChecklistI18n: FactChecklistI18n) => Promise<string>> {
    return async (factChecklistI18n: FactChecklistI18n) =>
      generateMarkdownContent(checklist, options, factChecklistI18n, t);
  }

  /**
   * セクション情報を取得する
   * @param checklist チェックリスト結果
   */
  getSections(checklist: ChecklistResult | null): SectionInfo[] {
    return groupItemsByCategory(checklist);
  }

  /**
   * エクスポートをキャンセルする
   */
  cancelExport(): void {
    this.progressManager.reset();
  }

  /**
   * エクスポート状態をリセットする
   */
  reset(): void {
    this.progressManager.reset();
    this.optionsManager.resetToDefaults();
  }

  /**
   * CSVエクスポートを実行する
   * @param checklist チェックリスト結果
   * @param options エクスポートオプション
   * @param checklistStoreTitle チェックリストタイトル
   * @param t 翻訳関数
   */
  private async exportCSV(
    checklist: ChecklistResult,
    options: ExportOptions,
    checklistStoreTitle: string,
    t: TranslationFunction
  ): Promise<void> {
    try {
      await ExportProgressHelper.updateStandardProgress(this.progressManager, 'GENERATING', t);

      const csvContent = ExportContentGenerator.generateCSVData(checklist, options, t);

      await ExportProgressHelper.updateStandardProgress(this.progressManager, 'SAVING', t);

      const filename = await ExportFilenameGenerator.generateCSVFilename(checklistStoreTitle, t);
      const { downloadText } = await import('$lib/utils/download.js');
      downloadText(csvContent, filename, 'text/csv');

      await ExportProgressHelper.completeExport(this.progressManager, 'CSV', t);
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'CSV', this.progressManager);
    }
  }

  /**
   * XMLエクスポートを実行する
   * @param checklist チェックリスト結果
   * @param options エクスポートオプション
   * @param checklistStoreTitle チェックリストタイトル
   * @param t 翻訳関数
   */
  private async exportXML(
    checklist: ChecklistResult,
    options: ExportOptions,
    checklistStoreTitle: string,
    t: TranslationFunction
  ): Promise<void> {
    try {
      await ExportProgressHelper.updateStandardProgress(this.progressManager, 'GENERATING', t);

      const xmlContent = ExportContentGenerator.generateXMLData(
        checklist,
        options,
        checklistStoreTitle
      );

      await ExportProgressHelper.updateStandardProgress(this.progressManager, 'SAVING', t);

      const filename = await ExportFilenameGenerator.generateXMLFilename(checklistStoreTitle, t);
      const { downloadText } = await import('$lib/utils/download.js');
      downloadText(xmlContent, filename, 'application/xml');

      await ExportProgressHelper.completeExport(this.progressManager, 'XML', t);
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'XML', this.progressManager);
    }
  }

  /**
   * クリップボードにコピーする
   * @param content コピーするコンテンツ
   * @param t 翻訳関数
   */
  async copyToClipboard(content: string, _t: TranslationFunction): Promise<void> {
    try {
      this.progressManager.startExport('Copying', 'Copying to clipboard...');

      await ExportProgressHelper.updateCustomProgress(
        this.progressManager,
        50,
        'Copying',
        'Preparing content...'
      );

      if (navigator.clipboard?.writeText !== undefined) {
        await navigator.clipboard.writeText(content);
      } else {
        // フォールバック: テキストエリアを使用
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      await ExportProgressHelper.updateCustomProgress(
        this.progressManager,
        100,
        'Complete',
        'Copied to clipboard'
      );
      this.progressManager.completeExport('Content copied to clipboard successfully');

      // console.log('✅ Content copied to clipboard successfully');
    } catch (error) {
      ExportErrorHandler.handleExportError(error, 'Clipboard copy', this.progressManager, false);
    }
  }

  /**
   * ファイル生成のプレビューを表示する
   * @param checklist チェックリスト結果
   * @param t 翻訳関数
   */
  async generatePreview(checklist: ChecklistResult, t: TranslationFunction): Promise<string> {
    const options = this.optionsManager.options;

    try {
      const i18nResult = await ExportI18nLoader.loadFullI18n();

      switch (options.format) {
        case 'html':
          return await generateSectionedHTMLContent(
            checklist,
            options,
            i18nResult.factChecklistI18n,
            i18nResult.t,
            i18nResult.getCurrentLanguage ?? (() => 'en'),
            i18nResult.getSupportedLanguages ?? (() => ({ en: { name: 'English' } }))
          );

        case 'markdown':
          return await generateMarkdownContent(
            checklist,
            options,
            i18nResult.factChecklistI18n,
            i18nResult.t
          );

        case 'json': {
          const jsonData = ExportContentGenerator.generateJSONExportData(
            checklist,
            options,
            checklist.title,
            undefined,
            i18nResult.factChecklistI18n
          );
          return JSON.stringify(jsonData, null, 2);
        }

        case 'pdf':
          return (
            t('export.preview.pdfNotAvailable') ??
            'PDF preview is not available. PDF will be generated when exported.'
          );

        default:
          return t('export.preview.notAvailable') ?? 'Preview not available for this format.';
      }
    } catch (error) {
      console.error('Failed to generate preview:', error);
      return `Preview generation failed: ${error instanceof Error ? error.message : String(error)}`;
    }
  }
}
