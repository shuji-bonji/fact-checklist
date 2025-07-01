// src/lib/types/common.ts
// 共通型・ユーティリティ型定義

/**
 * 基本的なエラー情報
 */
export interface ErrorInfo {
  /** エラーコード */
  code: string;

  /** エラーメッセージ */
  message: string;

  /** 詳細情報 */
  details?: string;

  /** スタックトレース */
  stack?: string;

  /** エラー発生時刻 */
  timestamp: Date;

  /** 関連するコンテキスト */
  context?: Record<string, unknown>;
}

/**
 * API レスポンス基本型
 */
export interface APIResponse<T = unknown> {
  /** 成功フラグ */
  success: boolean;

  /** データ */
  data?: T;

  /** エラー情報 */
  error?: ErrorInfo;

  /** メッセージ */
  message?: string;

  /** メタデータ */
  metadata?: {
    timestamp: Date;
    version: string;
    requestId?: string;
  };
}

/**
 * ページネーション情報
 */
export interface Pagination {
  /** 現在のページ */
  page: number;

  /** ページサイズ */
  pageSize: number;

  /** 総アイテム数 */
  totalItems: number;

  /** 総ページ数 */
  totalPages: number;

  /** 前のページが存在するか */
  hasPrevious: boolean;

  /** 次のページが存在するか */
  hasNext: boolean;
}

/**
 * ソート情報
 */
export interface SortInfo {
  /** ソートフィールド */
  field: string;

  /** ソート方向 */
  direction: 'asc' | 'desc';
}

/**
 * フィルター情報
 */
export interface FilterInfo {
  /** フィルターフィールド */
  field: string;

  /** フィルター演算子 */
  operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'like' | 'regex';

  /** フィルター値 */
  value: unknown;
}

/**
 * 検索クエリ
 */
export interface SearchQuery {
  /** 検索キーワード */
  query?: string;

  /** フィルター */
  filters?: FilterInfo[];

  /** ソート */
  sort?: SortInfo[];

  /** ページネーション */
  pagination?: Pick<Pagination, 'page' | 'pageSize'>;
}

/**
 * 操作結果
 */
export interface OperationResult<T = unknown> {
  /** 成功フラグ */
  success: boolean;

  /** 結果データ */
  data?: T;

  /** エラー */
  error?: string;

  /** 実行時間（ミリ秒） */
  duration?: number;

  /** 操作タイプ */
  operation?: string;
}

/**
 * 進捗情報（汎用）
 */
export interface ProgressInfo {
  /** 現在の進捗 */
  current: number;

  /** 総数 */
  total: number;

  /** パーセンテージ */
  percentage: number;

  /** 現在のステップ */
  step?: string;

  /** メッセージ */
  message?: string;

  /** 完了フラグ */
  isComplete: boolean;

  /** 開始時刻 */
  startTime?: Date;

  /** 推定完了時刻 */
  estimatedCompletion?: Date;
}

/**
 * キー値ペア
 */
export interface KeyValuePair<K = string, V = unknown> {
  key: K;
  value: V;
}

/**
 * 選択肢
 */
export interface Option<T = string> {
  /** ラベル */
  label: string;

  /** 値 */
  value: T;

  /** 無効化フラグ */
  disabled?: boolean;

  /** 説明 */
  description?: string;

  /** アイコン */
  icon?: string;

  /** グループ */
  group?: string;
}

/**
 * 設定項目
 */
export interface Setting<T = unknown> {
  /** 設定キー */
  key: string;

  /** 設定値 */
  value: T;

  /** デフォルト値 */
  defaultValue: T;

  /** 設定タイプ */
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';

  /** 説明 */
  description?: string;

  /** バリデーション */
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: string;
    options?: T[];
  };
}

/**
 * イベント情報
 */
export interface EventInfo<T = unknown> {
  /** イベントタイプ */
  type: string;

  /** イベントデータ */
  data: T;

  /** イベント発生時刻 */
  timestamp: Date;

  /** イベントソース */
  source?: string;

  /** イベントID */
  id?: string;
}

/**
 * 統計情報
 */
export interface Statistics {
  /** 総数 */
  count: number;

  /** 平均値 */
  average?: number;

  /** 最小値 */
  min?: number;

  /** 最大値 */
  max?: number;

  /** 中央値 */
  median?: number;

  /** 標準偏差 */
  standardDeviation?: number;

  /** パーセンタイル */
  percentiles?: Record<number, number>;
}

/**
 * 時間範囲
 */
export interface TimeRange {
  /** 開始時刻 */
  start: Date;

  /** 終了時刻 */
  end: Date;

  /** 期間（ミリ秒） */
  duration?: number;
}

/**
 * ユーティリティ型: 部分的にOptional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * ユーティリティ型: 部分的にRequired
 */
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * ユーティリティ型: 深い部分型
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * ユーティリティ型: 深いRequired
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * ユーティリティ型: キーの型から値の型を取得
 */
export type ValueOf<T> = T[keyof T];

/**
 * ユーティリティ型: 文字列のUnion型から配列型を作成
 */
export type ArrayOfUnion<T extends string> = Array<T>;

/**
 * ユーティリティ型: オブジェクトのキーを文字列リテラル型として取得
 */
export type StringKeys<T> = Extract<keyof T, string>;

/**
 * ユーティリティ型: null/undefinedを除外
 */
export type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * ユーティリティ型: 関数の戻り値型を取得
 */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

/**
 * ユーティリティ型: 配列の要素型を取得
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/**
 * ユーティリティ型: オブジェクトのパスを型安全に表現
 */
export type ObjectPath<T, K extends keyof T = keyof T> = K extends string
  ? T[K] extends Record<string, unknown>
    ? T[K] extends ArrayLike<unknown>
      ? K | `${K}.${ObjectPath<T[K], Exclude<keyof T[K], keyof unknown[]>>}`
      : K | `${K}.${ObjectPath<T[K], keyof T[K]>}`
    : K
  : never;

/**
 * ユーティリティ型: パスから値の型を取得
 */
export type ObjectPathValue<T, P extends ObjectPath<T>> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends ObjectPath<T[K]>
      ? ObjectPathValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;
