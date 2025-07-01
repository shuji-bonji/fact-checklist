// src/lib/services/ExportService.ts
// エクスポート機能を統合管理するサービス

import type { ChecklistResult } from '../types/checklist.js';
import type { ExportOptions } from '../components/export/ExportOptions.svelte.js';
import { ExportManager } from '../components/export/ExportManager.svelte.js';
// import { ExportProgressHelper } from '../components/export/utils/ExportProgressHelper.js';
import { ExportValidationHelper } from '../components/export/utils/ExportValidationHelper.js';
// import { ExportFilenameGenerator } from '../components/export/utils/ExportFilenameGenerator.js';
// import { ExportErrorHandler } from '../components/export/utils/ExportErrorHandler.js';

/**
 * エクスポート要求
 */
export interface ExportRequest {
  checklist: ChecklistResult;
  options: ExportOptions;
  filename?: string;
  onProgress?: (progress: number, message: string) => void;
  onError?: (error: string) => void;
}

/**
 * エクスポート結果
 */
export interface ExportResult {
  success: boolean;
  format: string;
  filename?: string;
  blob?: Blob;
  size?: number;
  duration: number;
  error?: string;
}

/**
 * エクスポート統計
 */
export interface ExportStatistics {
  totalExports: number;
  formatBreakdown: Record<string, number>;
  averageSize: number;
  averageDuration: number;
  errorRate: number;
}

/**
 * エクスポートサービス
 * 全エクスポート機能の統合管理とオーケストレーション
 */
export class ExportService {
  private static instance: ExportService | null = null;
  private exportManager: ExportManager;
  private statistics: ExportStatistics = {
    totalExports: 0,
    formatBreakdown: {},
    averageSize: 0,
    averageDuration: 0,
    errorRate: 0
  };

  private constructor() {
    this.exportManager = new ExportManager();
  }

  /**
   * シングルトンインスタンスを取得
   */
  static getInstance(): ExportService {
    this.instance ??= new ExportService();
    return this.instance;
  }

  /**
   * チェックリストをエクスポート
   * @param request エクスポート要求
   * @returns エクスポート結果
   */
  async exportChecklist(request: ExportRequest): Promise<ExportResult> {
    const startTime = Date.now();
    const { checklist, options, filename, onProgress, onError } = request;

    try {
      // バリデーション
      const validation = this.validateExportRequest(request);
      if (!validation.isValid) {
        const error = `Validation failed: ${validation.errors.join(', ')}`;
        onError?.(error);
        return {
          success: false,
          format: options.format,
          duration: Date.now() - startTime,
          error
        };
      }

      // 進捗ハンドラーの設定
      const progressHandler =
        onProgress ??
        ((_progress: number, _message: string) => {
          // Default empty progress handler
        });

      // ファイル名の生成
      const finalFilename =
        filename ??
        `checklist_${checklist.id}_${new Date().toISOString().slice(0, 10)}.${options.format}`;

      progressHandler(10, 'Starting export...');

      // エクスポート実行
      let result: Blob | string;

      if (options.format === 'pdf') {
        // PDF エクスポート (placeholder)
        result = new Blob(['PDF content placeholder'], { type: 'application/pdf' });
      } else {
        // その他の形式 (placeholder)
        result = 'Export content placeholder';
      }

      progressHandler(100, 'Export completed');

      const duration = Date.now() - startTime;
      const exportResult: ExportResult = {
        success: true,
        format: options.format,
        filename: finalFilename,
        duration
      };

      // Blobの場合はサイズとダウンロード情報を追加
      if (result instanceof Blob) {
        exportResult.blob = result;
        exportResult.size = result.size;

        // 自動ダウンロード
        this.downloadBlob(result, finalFilename);
      } else if (typeof result === 'string') {
        // 文字列データの場合はBlobに変換
        const blob = new Blob([result], {
          type: this.getMimeType(options.format)
        });
        exportResult.blob = blob;
        exportResult.size = blob.size;

        // 自動ダウンロード
        this.downloadBlob(blob, finalFilename);
      }

      // 統計を更新
      this.updateStatistics(exportResult);

      return exportResult;
    } catch (error) {
      const errorMessage = `Export error: ${error}`;
      const duration = Date.now() - startTime;

      onError?.(errorMessage);

      // エラー統計を更新
      this.updateErrorStatistics();

      return {
        success: false,
        format: options.format,
        duration,
        error: errorMessage
      };
    }
  }

  /**
   * バッチエクスポート（複数のチェックリスト）
   * @param requests エクスポート要求配列
   * @returns エクスポート結果配列
   */
  async batchExport(requests: ExportRequest[]): Promise<ExportResult[]> {
    const results: ExportResult[] = [];

    for (let i = 0; i < requests.length; i++) {
      const request = requests[i]!;

      // バッチ進捗の計算
      const batchProgress = Math.round((i / requests.length) * 100);

      // 各エクスポートの進捗を調整
      const adjustedProgressHandler = request.onProgress
        ? (progress: number, message: string) => {
            const overallProgress = batchProgress + Math.round(progress / requests.length);
            request.onProgress!(overallProgress, `${message} (${i + 1}/${requests.length})`);
          }
        : undefined;

      const result = await this.exportChecklist({
        checklist: request.checklist,
        options: request.options,
        ...(request.filename && { filename: request.filename }),
        ...(adjustedProgressHandler && { onProgress: adjustedProgressHandler }),
        ...(request.onError && { onError: request.onError })
      });

      results.push(result);
    }

    return results;
  }

  /**
   * エクスポート要求のバリデーション
   * @param request エクスポート要求
   * @returns バリデーション結果
   */
  private validateExportRequest(request: ExportRequest): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    // チェックリストの検証
    if (!request.checklist) {
      errors.push('Checklist is required');
    } else {
      const checklistValidation = ExportValidationHelper.validateChecklistData(request.checklist);
      if (!checklistValidation.isValid) {
        errors.push(...checklistValidation.errors);
      }
    }

    // オプションの検証
    if (!request.options) {
      errors.push('Export options are required');
    } else {
      // Basic validation placeholder
      const optionsValidation = { isValid: true, errors: [] as string[] };
      if (!optionsValidation.isValid) {
        errors.push(...optionsValidation.errors);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Blobをダウンロード
   * @param blob ダウンロードするBlob
   * @param filename ファイル名
   */
  private downloadBlob(blob: Blob, filename: string): void {
    if (typeof window === 'undefined') return;

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * MIMEタイプを取得
   * @param format エクスポート形式
   * @returns MIMEタイプ
   */
  private getMimeType(format: string): string {
    const mimeTypes: Record<string, string> = {
      json: 'application/json',
      csv: 'text/csv',
      html: 'text/html',
      markdown: 'text/markdown',
      xml: 'application/xml',
      pdf: 'application/pdf'
    };

    return mimeTypes[format] ?? 'text/plain';
  }

  /**
   * 統計を更新
   * @param result エクスポート結果
   */
  private updateStatistics(result: ExportResult): void {
    this.statistics.totalExports++;

    // 形式別カウント
    this.statistics.formatBreakdown[result.format] =
      (this.statistics.formatBreakdown[result.format] ?? 0) + 1;

    // 平均サイズの更新
    if (result.size) {
      const totalSize = this.statistics.averageSize * (this.statistics.totalExports - 1);
      this.statistics.averageSize = (totalSize + result.size) / this.statistics.totalExports;
    }

    // 平均時間の更新
    const totalDuration = this.statistics.averageDuration * (this.statistics.totalExports - 1);
    this.statistics.averageDuration =
      (totalDuration + result.duration) / this.statistics.totalExports;
  }

  /**
   * エラー統計を更新
   */
  private updateErrorStatistics(): void {
    this.statistics.totalExports++;
    // エラー率の再計算は getStatistics() で行う
  }

  /**
   * エクスポート統計を取得
   * @returns 統計情報
   */
  getStatistics(): ExportStatistics {
    // const _totalSuccessful = this.statistics.totalExports - this.getErrorCount();

    return {
      ...this.statistics,
      errorRate:
        this.statistics.totalExports > 0
          ? (this.getErrorCount() / this.statistics.totalExports) * 100
          : 0
    };
  }

  /**
   * エラー数を取得
   * @returns エラー数
   */
  private getErrorCount(): number {
    // 実装では別途エラーカウンターを管理する
    // ここでは簡略化
    return 0;
  }

  /**
   * 利用可能なエクスポート形式を取得
   * @returns サポートされているエクスポート形式配列
   */
  static getSupportedFormats(): string[] {
    return ['pdf', 'json', 'csv', 'html', 'markdown', 'xml'];
  }

  /**
   * 形式別の詳細情報を取得
   * @param format エクスポート形式
   * @returns 形式詳細情報
   */
  static getFormatInfo(format: string): {
    name: string;
    description: string;
    mimeType: string;
    extension: string;
    features: string[];
  } | null {
    const formatInfo: Record<
      string,
      {
        name: string;
        description: string;
        mimeType: string;
        extension: string;
        features: string[];
      }
    > = {
      pdf: {
        name: 'PDF',
        description: 'Portable Document Format - 印刷に最適',
        mimeType: 'application/pdf',
        extension: '.pdf',
        features: ['高品質印刷', '国際化対応', 'デバイス非依存']
      },
      json: {
        name: 'JSON',
        description: 'JavaScript Object Notation - データ交換用',
        mimeType: 'application/json',
        extension: '.json',
        features: ['構造化データ', 'API連携', '再インポート可能']
      },
      csv: {
        name: 'CSV',
        description: 'Comma Separated Values - 表計算ソフト用',
        mimeType: 'text/csv',
        extension: '.csv',
        features: ['Excel対応', 'データ分析', '軽量']
      },
      html: {
        name: 'HTML',
        description: 'HyperText Markup Language - ウェブ表示用',
        mimeType: 'text/html',
        extension: '.html',
        features: ['ブラウザ表示', '印刷可能', 'スタイル付き']
      },
      markdown: {
        name: 'Markdown',
        description: 'Markdown形式 - ドキュメント作成用',
        mimeType: 'text/markdown',
        extension: '.md',
        features: ['GitHub対応', '軽量', '可読性']
      },
      xml: {
        name: 'XML',
        description: 'eXtensible Markup Language - 構造化文書',
        mimeType: 'application/xml',
        extension: '.xml',
        features: ['構造化', 'バリデーション', 'システム連携']
      }
    };

    return formatInfo[format] ?? null;
  }

  /**
   * 統計をリセット
   */
  resetStatistics(): void {
    this.statistics = {
      totalExports: 0,
      formatBreakdown: {},
      averageSize: 0,
      averageDuration: 0,
      errorRate: 0
    };
  }

  /**
   * サービスの健全性チェック
   * @returns 健全性チェック結果
   */
  async healthCheck(): Promise<{
    isHealthy: boolean;
    details: {
      exportManagerReady: boolean;
      supportedFormats: string[];
    };
    errors: string[];
  }> {
    const errors: string[] = [];

    // ExportManagerの状態チェック
    const exportManagerReady = !!this.exportManager;
    if (!exportManagerReady) {
      errors.push('Export manager is not initialized');
    }

    // サポート形式の確認
    const supportedFormats = ExportService.getSupportedFormats();
    if (supportedFormats.length === 0) {
      errors.push('No supported export formats available');
    }

    return {
      isHealthy: errors.length === 0,
      details: {
        exportManagerReady,
        supportedFormats
      },
      errors
    };
  }
}
