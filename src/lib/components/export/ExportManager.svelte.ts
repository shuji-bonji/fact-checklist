// src/lib/components/export/ExportManager.svelte.ts
// エクスポート機能の統合マネージャー

import type { ChecklistResult } from '$lib/types/checklist.js';
import type {
  FactChecklistI18n,
  TranslationFunction,
  GetCurrentLanguageFunction,
  GetSupportedLanguagesFunction
} from '$lib/types/i18n.js';
import { ExportOptionsManager } from './ExportOptions.svelte.js';
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
  groupItemsByCategory
} from './ExportUtils.js';

// 共通ユーティリティのインポート
import { ExportValidationHelper } from './utils/ExportValidationHelper.js';
import { ExportErrorHandler } from './utils/ExportErrorHandler.js';
import { ExportProgressHelper } from './utils/ExportProgressHelper.js';
import { ExportI18nLoader } from './utils/ExportI18nLoader.js';
import { ExportContentGenerator } from './utils/ExportContentGenerator.js';

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
            this.generateHTMLContentWrapper.bind(this),
            checklistStoreTitle,
            t
          );
          break;

        case 'html':
          await this.htmlHandler.export(
            checklist,
            options,
            this.progressManager,
            this.generateHTMLContentWrapperSimple.bind(this),
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
            this.generateMarkdownContentWrapper.bind(this),
            checklistStoreTitle,
            t
          );
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
    _factChecklistI18n: FactChecklistI18n,
    _getCurrentLanguage: GetCurrentLanguageFunction,
    _getSupportedLanguages: GetSupportedLanguagesFunction
  ): Promise<string> {
    // This would need access to the current checklist, which we'd need to pass through
    // For now, we'll throw an error indicating this needs to be refactored
    throw new Error(
      'HTML content generation needs checklist context - this requires further refactoring'
    );
  }

  /**
   * HTMLコンテンツ生成のラッパー（簡単版）
   */
  private async generateHTMLContentWrapperSimple(
    _factChecklistI18n: FactChecklistI18n
  ): Promise<string> {
    // This would need access to the current checklist, which we'd need to pass through
    throw new Error(
      'HTML content generation needs checklist context - this requires further refactoring'
    );
  }

  /**
   * Markdownコンテンツ生成のラッパー
   */
  private async generateMarkdownContentWrapper(
    _factChecklistI18n: FactChecklistI18n
  ): Promise<string> {
    // This would need access to the current checklist, which we'd need to pass through
    throw new Error(
      'Markdown content generation needs checklist context - this requires further refactoring'
    );
  }

  /**
   * セクション情報を取得する
   * @param checklist チェックリスト結果
   */
  getSections(checklist: ChecklistResult | null) {
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

      if (navigator.clipboard?.writeText) {
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

      console.log('✅ Content copied to clipboard successfully');
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
            i18nResult.getCurrentLanguage!,
            i18nResult.getSupportedLanguages!
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
            checklist.title
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
