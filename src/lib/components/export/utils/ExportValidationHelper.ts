// src/lib/components/export/utils/ExportValidationHelper.ts
// エクスポートバリデーションの共通ロジック

import type { ChecklistResult } from '$lib/types/checklist.js';
import type { ExportOptionsManager } from '../ExportOptions.svelte.js';
import type { ExportProgressManager } from '../ExportProgress.svelte.js';
import { validateExportOptions } from '$lib/utils/validation.js';

/**
 * バリデーション結果インターフェース
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

/**
 * エクスポートバリデーションのヘルパークラス
 */
export class ExportValidationHelper {
  /**
   * エクスポートリクエスト全体のバリデーションを実行する
   * @param checklist チェックリスト結果
   * @param optionsManager オプション管理インスタンス
   * @param progressManager プログレス管理インスタンス
   * @returns バリデーション成功の可否
   */
  static validateExportRequest(
    checklist: ChecklistResult | null,
    optionsManager: ExportOptionsManager,
    progressManager: ExportProgressManager
  ): boolean {
    // チェックリストデータの存在確認
    if (!checklist) {
      progressManager.setError('No checklist data available for export');
      return false;
    }

    // エクスポートオプションのバリデーション
    const optionsValidation = optionsManager.validate();
    if (!optionsValidation.isValid) {
      progressManager.setError(
        `Export options validation failed: ${optionsValidation.errors.join(', ')}`
      );
      return false;
    }

    // 追加のエクスポートバリデーション
    const exportValidation = validateExportOptions(
      optionsManager.options as unknown as Record<string, unknown>
    );
    if (!exportValidation.isValid) {
      progressManager.setError(`Export validation failed: ${exportValidation.errors.join(', ')}`);
      return false;
    }

    return true;
  }

  /**
   * チェックリストデータの詳細バリデーション
   * @param checklist チェックリスト結果
   * @returns バリデーション結果
   */
  static validateChecklistData(checklist: ChecklistResult | null): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!checklist) {
      errors.push('Checklist data is null or undefined');
      return { isValid: false, errors, warnings };
    }

    // 必須フィールドの確認
    if (!checklist.id) {
      errors.push('Checklist ID is missing');
    }

    if (!checklist.items || checklist.items.length === 0) {
      errors.push('Checklist has no items');
    }

    if (!checklist.score) {
      warnings.push('Score information is missing');
    }

    // アイテムの詳細チェック
    if (checklist.items) {
      checklist.items.forEach((item, index) => {
        if (!item.id) {
          errors.push(`Item ${index + 1} is missing ID`);
        }
        if (!item.title?.trim()) {
          errors.push(`Item ${index + 1} is missing title`);
        }
        if (!item.category) {
          errors.push(`Item ${index + 1} is missing category`);
        }
      });
    }

    // データ整合性チェック
    if (checklist.createdAt && checklist.updatedAt) {
      if (new Date(checklist.createdAt) > new Date(checklist.updatedAt)) {
        warnings.push('Created date is later than updated date');
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * エクスポート形式固有のバリデーション
   * @param format エクスポート形式
   * @param checklist チェックリスト結果
   * @param htmlContent HTMLコンテンツ（PDF用）
   * @returns バリデーション結果
   */
  static validateFormatSpecific(
    format: string,
    checklist: ChecklistResult,
    htmlContent?: string
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    switch (format.toLowerCase()) {
      case 'pdf':
        // PDFの場合、フォント対応チェック
        if (
          checklist.items.some(item =>
            /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(item.title || item.description)
          )
        ) {
          warnings.push('Japanese characters detected - ensure proper font support');
        }

        // HTML→PDF変換の場合はHTMLコンテンツが必要
        if (!htmlContent && format === 'pdf-html') {
          errors.push('HTML content is required for HTML-to-PDF conversion');
        }
        break;

      case 'html':
        // HTMLの場合、特殊文字のエスケープチェック
        if (checklist.items.some(item => /<[^>]*>/.test(item.title || item.description))) {
          warnings.push('HTML tags detected in content - ensure proper escaping');
        }
        break;

      case 'json':
        // JSONの場合、循環参照チェック
        try {
          JSON.stringify(checklist);
        } catch {
          errors.push('Checklist data contains circular references or non-serializable values');
        }
        break;

      case 'markdown':
        // Markdownの場合、特殊文字のエスケープチェック
        if (checklist.items.some(item => /[*_`#[\]()!]/.test(item.title || item.description))) {
          warnings.push('Markdown special characters detected - they will be escaped');
        }
        break;

      default:
        warnings.push(`Unknown export format: ${format}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * エクスポートサイズの見積もりとバリデーション
   * @param checklist チェックリスト結果
   * @param format エクスポート形式
   * @param includeGuides ガイドを含めるか
   * @param includeNotes ノートを含めるか
   * @returns サイズ見積もり結果
   */
  static estimateExportSize(
    checklist: ChecklistResult,
    format: string,
    includeGuides: boolean = false,
    _includeNotes: boolean = false
  ): { estimatedSize: number; warnings: string[] } {
    const warnings: string[] = [];
    let estimatedSize = 0;

    // 基本データサイズ
    const baseSize = JSON.stringify({
      id: checklist.id,
      title: checklist.title,
      description: checklist.description,
      items: checklist.items.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        checked: item.checked
      }))
    }).length;

    estimatedSize += baseSize;

    // ガイドコンテンツ
    if (includeGuides) {
      const guideSize = checklist.items.reduce((acc, item) => {
        if (item.guideContent) {
          return acc + JSON.stringify(item.guideContent).length;
        }
        return acc;
      }, 0);
      estimatedSize += guideSize;
    }

    // ノート (CheckItemにnotesプロパティが存在しないため、この計算をスキップ)
    // if (includeNotes) {
    //   const notesSize = checklist.items.reduce((acc, item) => {
    //     return acc + (item.notes?.length ?? 0);
    //   }, 0);
    //   estimatedSize += notesSize;
    // }

    // 形式別の係数を適用
    switch (format.toLowerCase()) {
      case 'html':
        estimatedSize *= 3; // HTMLマークアップによる増加
        break;
      case 'pdf':
        estimatedSize *= 2; // PDF構造による増加
        break;
      case 'markdown':
        estimatedSize *= 1.5; // Markdownフォーマットによる増加
        break;
      case 'json':
        estimatedSize *= 1.2; // JSON構造による増加
        break;
    }

    // サイズに基づく警告
    if (estimatedSize > 1024 * 1024) {
      // 1MB
      warnings.push('Large export size (>1MB) may affect performance');
    }

    if (estimatedSize > 10 * 1024 * 1024) {
      // 10MB
      warnings.push('Very large export size (>10MB) - consider reducing content');
    }

    return { estimatedSize, warnings };
  }

  /**
   * 完全なエクスポートバリデーションを実行する
   * @param checklist チェックリスト結果
   * @param optionsManager オプション管理インスタンス
   * @param format エクスポート形式
   * @param htmlContent HTMLコンテンツ（必要に応じて）
   * @returns 総合バリデーション結果
   */
  static validateComplete(
    checklist: ChecklistResult | null,
    optionsManager: ExportOptionsManager,
    format: string,
    htmlContent?: string
  ): ValidationResult {
    const allErrors: string[] = [];
    const allWarnings: string[] = [];

    // チェックリストデータのバリデーション
    const dataValidation = this.validateChecklistData(checklist);
    allErrors.push(...dataValidation.errors);
    allWarnings.push(...(dataValidation.warnings ?? []));

    if (!checklist) {
      return { isValid: false, errors: allErrors, warnings: allWarnings };
    }

    // オプションのバリデーション
    const optionsValidation = optionsManager.validate();
    allErrors.push(...optionsValidation.errors);

    // 形式固有のバリデーション
    const formatValidation = this.validateFormatSpecific(format, checklist, htmlContent);
    allErrors.push(...formatValidation.errors);
    allWarnings.push(...(formatValidation.warnings ?? []));

    // サイズ見積もり
    const options = optionsManager.options;
    const sizeEstimation = this.estimateExportSize(
      checklist,
      format,
      options.includeGuides,
      options.includeNotes
    );
    allWarnings.push(...sizeEstimation.warnings);

    return {
      isValid: allErrors.length === 0,
      errors: allErrors,
      warnings: allWarnings
    };
  }
}
