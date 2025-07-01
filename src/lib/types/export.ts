// src/lib/types/export.ts
// エクスポート関連の型定義

import type { ChecklistResult } from './checklist.js';

/**
 * エクスポート形式
 */
export type ExportFormat = 'pdf' | 'html' | 'json' | 'markdown';

/**
 * PDF生成モード
 */
export type PDFMode = 'text' | 'canvas' | 'reliable' | 'pixel-perfect' | 'simple';

/**
 * エクスポートオプション
 */
export interface ExportOptions {
  /** エクスポート形式 */
  format: ExportFormat;

  /** ガイド内容を含めるか */
  includeGuides: boolean;

  /** 評価メモを含めるか */
  includeNotes: boolean;

  /** サマリーを含めるか */
  includeSummary: boolean;

  /** セクションごとのページブレイク */
  sectionBreaks: boolean;

  /** PDF生成モード: true=テキストベース, false=画像ベース */
  textMode: boolean;

  /** 高度なPDF機能を使用するか */
  advancedMode: boolean;

  /** 確実な日本語フォント対応 */
  reliableMode: boolean;

  /** HTML→Canvas→PDF（ブラウザ表示と完全一致） */
  pixelPerfectMode: boolean;
}

/**
 * エクスポート進捗情報
 */
export interface ExportProgress {
  /** 現在の進捗値 */
  current: number;

  /** 総進捗値 */
  total: number;

  /** 現在のステージ */
  stage: string;

  /** 進捗メッセージ */
  message: string;

  /** パーセンテージ */
  percentage?: number;

  /** 完了フラグ */
  isComplete?: boolean;
}

/**
 * エクスポート結果
 */
export interface ExportResult {
  /** 成功フラグ */
  success: boolean;

  /** 生成されたファイル名 */
  filename?: string;

  /** 生成されたBlob */
  blob?: Blob;

  /** ファイルサイズ（バイト） */
  fileSize?: number;

  /** エラーメッセージ */
  error?: string;

  /** 生成時間（ミリ秒） */
  duration?: number;

  /** 使用したモード */
  mode?: PDFMode;
}

/**
 * エクスポート設定
 */
export interface ExportConfig {
  /** タイムアウト時間（ミリ秒） */
  timeout: number;

  /** 最大ファイルサイズ（バイト） */
  maxFileSize: number;

  /** デフォルトファイル名 */
  defaultFilename: string;

  /** 品質設定 */
  quality: number;

  /** 圧縮設定 */
  compression: boolean;
}

/**
 * HTML エクスポート設定
 */
export interface HTMLExportOptions {
  /** インラインCSS */
  inlineCSS: boolean;

  /** メタタグを含めるか */
  includeMetaTags: boolean;

  /** 文字エンコーディング */
  charset: string;

  /** ビューポート設定 */
  viewport: string;

  /** 言語設定 */
  language: string;
}

/**
 * JSON エクスポート設定
 */
export interface JSONExportOptions {
  /** インデント文字数 */
  indent: number;

  /** メタデータを含めるか */
  includeMetadata: boolean;

  /** タイムスタンプを含めるか */
  includeTimestamp: boolean;

  /** バージョン情報を含めるか */
  includeVersion: boolean;

  /** 圧縮するか */
  minify: boolean;
}

/**
 * Markdown エクスポート設定
 */
export interface MarkdownExportOptions {
  /** 見出しプレフィックス */
  headingPrefix: string;

  /** リストマーカー */
  listMarker: string;

  /** テーブル区切り文字 */
  tableSeparator: string;

  /** コードフェンス */
  codeFence: string;

  /** 水平線 */
  horizontalRule: string;
}

/**
 * PDF エクスポート設定
 */
export interface PDFExportOptions {
  /** ページ形式 */
  format: 'a4' | 'letter' | 'legal';

  /** ページ向き */
  orientation: 'portrait' | 'landscape';

  /** マージン設定 */
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };

  /** フォント設定 */
  font: {
    name: string;
    size: number;
  };

  /** カラー設定 */
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
  };

  /** ヘッダー・フッター */
  header?: string;
  footer?: string;

  /** ページ番号 */
  pageNumbers: boolean;

  /** 透かし */
  watermark?: string;
}

/**
 * エクスポートメタデータ
 */
export interface ExportMetadata {
  /** エクスポート日時 */
  exportedAt: Date;

  /** エクスポート形式 */
  format: ExportFormat;

  /** ソースチェックリストID */
  sourceId: string;

  /** ソースタイトル */
  sourceTitle: string;

  /** エクスポートバージョン */
  version: string;

  /** 使用したオプション */
  options: ExportOptions;

  /** 生成時間 */
  generationTime: number;

  /** ファイルサイズ */
  fileSize: number;
}

/**
 * エクスポートキューアイテム
 */
export interface ExportQueueItem {
  /** 一意ID */
  id: string;

  /** チェックリストデータ */
  checklist: ChecklistResult;

  /** エクスポートオプション */
  options: ExportOptions;

  /** 作成日時 */
  createdAt: Date;

  /** 優先度 */
  priority: 'high' | 'medium' | 'low';

  /** ステータス */
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';

  /** 進捗情報 */
  progress?: ExportProgress;

  /** 結果 */
  result?: ExportResult;

  /** エラー情報 */
  error?: string;
}

/**
 * エクスポート統計
 */
export interface ExportStatistics {
  /** 総エクスポート数 */
  totalExports: number;

  /** 形式別エクスポート数 */
  exportsByFormat: Record<ExportFormat, number>;

  /** 成功率 */
  successRate: number;

  /** 平均生成時間 */
  averageGenerationTime: number;

  /** 平均ファイルサイズ */
  averageFileSize: number;

  /** 最終エクスポート日時 */
  lastExportAt?: Date;
}

/**
 * エクスポートイベント
 */
export interface ExportEvent {
  /** イベントタイプ */
  type: 'start' | 'progress' | 'complete' | 'error' | 'cancel';

  /** イベント発生時刻 */
  timestamp: Date;

  /** 関連するエクスポートID */
  exportId: string;

  /** イベントデータ */
  data?: {
    progress?: ExportProgress;
    result?: ExportResult;
    error?: string;
  };
}

/**
 * エクスポートパフォーマンス情報
 */
export interface ExportPerformance {
  /** 開始時刻 */
  startTime: number;

  /** 終了時刻 */
  endTime?: number;

  /** 実行時間（ミリ秒） */
  duration?: number;

  /** メモリ使用量（バイト） */
  memoryUsage?: number;

  /** CPU使用率 */
  cpuUsage?: number;

  /** 段階別時間 */
  stageTimings?: Record<string, number>;
}
