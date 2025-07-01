// src/lib/components/export/utils/ExportErrorHandler.ts
// エクスポートエラー処理の共通ロジック

import type { ExportProgressManager } from '../ExportProgress.svelte.js';

/**
 * エクスポート処理におけるエラーハンドリングの統一化
 */
export class ExportErrorHandler {
  /**
   * エクスポートエラーを統一的に処理する
   * @param error エラーオブジェクト
   * @param format エクスポート形式
   * @param progressManager プログレス管理インスタンス
   * @param shouldThrow エラーを再投げするかどうか
   */
  static handleExportError(
    error: unknown,
    format: string,
    progressManager: ExportProgressManager,
    shouldThrow: boolean = true
  ): void {
    const errorMessage = error instanceof Error ? error.message : String(error);

    // 統一されたログ形式
    console.error(`❌ ${format} export failed:`, error);

    // プログレス管理にエラーを設定
    progressManager.setError(`${format} export failed: ${errorMessage}`);

    // 必要に応じてエラーを再投げ
    if (shouldThrow) {
      throw error;
    }
  }

  /**
   * バリデーションエラーを処理する
   * @param errors エラーメッセージ配列
   * @param progressManager プログレス管理インスタンス
   * @param context エラーコンテキスト
   */
  static handleValidationError(
    errors: string[],
    progressManager: ExportProgressManager,
    context: string = 'Validation'
  ): void {
    const errorMessage = `${context} failed: ${errors.join(', ')}`;
    console.warn(`⚠️ ${errorMessage}`);
    progressManager.setError(errorMessage);
  }

  /**
   * 非同期操作のエラーラッパー
   * @param operation 実行する非同期操作
   * @param format エクスポート形式
   * @param progressManager プログレス管理インスタンス
   * @returns 操作結果またはエラー
   */
  static async wrapAsyncOperation<T>(
    operation: () => Promise<T>,
    format: string,
    progressManager: ExportProgressManager
  ): Promise<T | null> {
    try {
      return await operation();
    } catch (error) {
      this.handleExportError(error, format, progressManager, false);
      return null;
    }
  }
}
