// src/lib/types/i18n.ts
// 国際化関連の型定義

/**
 * 翻訳関数の型定義
 */
export type TranslationFunction = (key: string) => string;

/**
 * ファクトチェックリスト用i18nオブジェクトの型定義
 */
export interface FactChecklistI18n {
  /** 基本翻訳関数 (オプショナル) */
  t?: TranslationFunction;

  /** カテゴリ名を取得 */
  getCategoryName?: (categoryId: string) => string;

  /** カテゴリ説明を取得 */
  getCategoryDescription?: (categoryId: string) => string;

  /** カテゴリ絵文字を取得 */
  getCategoryEmoji?: (categoryId: string) => string;

  /** チェックアイテムのタイトルを取得 */
  getCheckItemTitle?: (itemId: string) => string;

  /** チェックアイテムの説明を取得 */
  getCheckItemDescription?: (itemId: string) => string;

  /** チェックアイテムのガイドタイトルを取得 */
  getCheckItemGuideTitle?: (itemId: string) => string;

  /** チェックアイテムのガイドコンテンツを取得 */
  getCheckItemGuideContent?: (itemId: string) => string;

  /** チェックアイテムの良い例を取得 */
  getCheckItemExamplesGood?: (itemId: string) => string[];

  /** チェックアイテムの悪い例を取得 */
  getCheckItemExamplesBad?: (itemId: string) => string[];

  /** 判定テキストを取得 */
  getJudgmentText?: (judgment: string) => string;

  /** 判定アドバイスを取得 */
  getJudgmentAdvice?: (judgment: string) => string;

  /** 信頼度レベルテキストを取得 */
  getConfidenceText?: (level: string) => string;

  /** エクスポート形式名を取得 */
  getExportFormatName?: (format: string) => string;

  /** エクスポート進捗テキストを取得 */
  getExportProgress?: (stage: string) => string;

  /** エラーメッセージを取得 */
  getErrorMessage?: (errorType: string) => string;

  /** 成功メッセージを取得 */
  getSuccessMessage?: (actionType: string) => string;

  /** スコアをフォーマット */
  formatScore?: (score: number) => string;

  /** 日付をフォーマット */
  formatDate?: (date: Date) => string;

  /** 相対時間をフォーマット */
  formatRelativeTime?: (date: Date) => string;

  /** 数値をフォーマット */
  formatNumber?: (num: number) => string;

  /** レガシー互換性: カテゴリタイトルを取得 */
  getCategoryTitle?: (categoryId: string) => string;

  /** レガシー互換性: チェックアイテムガイドの良い例を取得 */
  getCheckItemGuideExamplesGood?: (itemId: string) => string[];

  /** レガシー互換性: チェックアイテムガイドの悪い例を取得 */
  getCheckItemGuideExamplesBad?: (itemId: string) => string[];
}

/**
 * 言語取得関数の型定義
 */
export type GetCurrentLanguageFunction = () => string;

/**
 * サポート言語リスト取得関数の型定義
 */
export type GetSupportedLanguagesFunction = () => Record<string, unknown>;

/**
 * PDF生成器の共通インターフェース
 */
export interface PDFGenerator {
  /** PDFを生成する */
  generatePDF?: (...args: unknown[]) => Promise<Blob | void>;

  /** HTMLからPDFを生成する */
  generateFromHTML?: (...args: unknown[]) => Promise<void | Blob>;

  /** チェックリストをエクスポートする */
  exportChecklist?: (...args: unknown[]) => Promise<void>;
}

/**
 * HTMLコンテンツ生成関数の型定義
 */
export type HTMLContentGenerator = (
  factChecklistI18n: FactChecklistI18n,
  getCurrentLanguage: GetCurrentLanguageFunction,
  getSupportedLanguages: GetSupportedLanguagesFunction
) => Promise<string>;

/**
 * シンプルなHTMLコンテンツ生成関数の型定義
 */
export type SimpleHTMLContentGenerator = (factChecklistI18n: FactChecklistI18n) => Promise<string>;

/**
 * Markdownコンテンツ生成関数の型定義
 */
export type MarkdownContentGenerator = (factChecklistI18n: FactChecklistI18n) => Promise<string>;

/**
 * i18n関連のユーティリティ型
 */
export namespace I18nTypes {
  /** 翻訳キーの例 */
  export type TranslationKey =
    | 'app.title'
    | 'app.description'
    | 'export.progress.generating'
    | 'export.progress.processing'
    | 'export.progress.saving'
    | 'export.progress.completed'
    | 'export.metadata.created'
    | 'export.metadata.score'
    | 'export.metadata.confidence'
    | 'export.metadata.language'
    | 'export.completed'
    | 'export.items'
    | 'export.summary.title'
    | 'export.summary.totalScore'
    | 'export.summary.completionRate'
    | 'export.summary.confidenceLevel'
    | 'export.summary.checkedItems'
    | 'export.judgment.title'
    | 'export.judgment.accept'
    | 'export.judgment.caution'
    | 'export.judgment.reject'
    | 'export.preview.pdfNotAvailable'
    | 'export.preview.notAvailable';

  /** 言語コード */
  export type LanguageCode =
    | 'ja'
    | 'en'
    | 'fr'
    | 'zh-TW'
    | 'es'
    | 'pt'
    | 'hi'
    | 'de'
    | 'it'
    | 'ar'
    | 'id'
    | 'ko';

  /** RTL言語の判定 */
  export type RTLLanguage = 'ar';

  /** CJK言語の判定 */
  export type CJKLanguage = 'ja' | 'zh-TW' | 'ko';
}
