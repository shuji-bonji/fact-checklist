// src/lib/constants/app.ts
// アプリ全体の定数・設定

/**
 * アプリケーション基本情報
 */
export const APP_INFO = {
  NAME: 'Fact Checklist',
  TITLE_JA: 'ファクトチェックリスト',
  SUBTITLE_JA: '情報の信頼性を科学的に評価',
  VERSION: '1.0.0',
  AUTHOR: 'Fact Checklist Team',
  DESCRIPTION: 'Information reliability evaluation checklist',
  REPOSITORY: 'https://github.com/shuji-bonji/fact-checklist',
  HOMEPAGE: 'https://fact-checklist.vercel.app/'
} as const;

/**
 * ファイルサイズ制限（バイト）
 */
export const FILE_SIZE_LIMITS = {
  PDF_MAX_SIZE: 50 * 1024 * 1024, // 50MB
  JSON_MAX_SIZE: 10 * 1024 * 1024, // 10MB
  HTML_MAX_SIZE: 25 * 1024 * 1024, // 25MB
  MARKDOWN_MAX_SIZE: 5 * 1024 * 1024 // 5MB
} as const;

/**
 * 文字列長制限
 */
export const STRING_LIMITS = {
  TITLE_MAX_LENGTH: 200,
  DESCRIPTION_MAX_LENGTH: 1000,
  NOTES_MAX_LENGTH: 2000,
  FILENAME_MAX_LENGTH: 255,
  ERROR_MESSAGE_MAX_LENGTH: 500
} as const;

/**
 * タイムアウト設定（ミリ秒）
 */
export const TIMEOUTS = {
  PDF_GENERATION: 60000, // 60秒
  FILE_DOWNLOAD: 30000, // 30秒
  EXPORT_PROCESS: 120000, // 2分
  AUTO_SAVE: 5000, // 5秒
  TOAST_DISPLAY: 5000, // 5秒
  ANIMATION_DURATION: 300 // 0.3秒
} as const;

/**
 * LocalStorage キー
 */
export const STORAGE_KEYS = {
  CHECKLIST_PREFIX: 'fact-checklist-',
  HISTORY_KEY: 'fact-checklist-history',
  SETTINGS_KEY: 'fact-checklist-settings',
  LANGUAGE_KEY: 'fact-checklist-language',
  THEME_KEY: 'fact-checklist-theme'
} as const;

/**
 * スコア計算関連
 */
export const SCORING = {
  MIN_SCORE: 0,
  MAX_PERCENTAGE: 100,
  CONFIDENCE_THRESHOLDS: {
    HIGH: 80,
    MEDIUM: 60,
    LOW: 40,
    POOR: 0
  } as const,
  JUDGMENT_THRESHOLDS: {
    ACCEPT: 75,
    CAUTION: 50,
    REJECT: 0
  } as const
} as const;

/**
 * UI関連定数
 */
export const UI = {
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1200,
  SIDEBAR_WIDTH: 400,
  MODAL_Z_INDEX: 9999,
  DROPDOWN_Z_INDEX: 10000,
  TOOLTIP_Z_INDEX: 10001
} as const;

/**
 * API制限とレート制限
 */
export const API_LIMITS = {
  MAX_CONCURRENT_EXPORTS: 3,
  MAX_REQUESTS_PER_MINUTE: 60,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY_MS: 1000
} as const;

/**
 * ブラウザサポート
 */
export const BROWSER_SUPPORT = {
  MIN_CHROME_VERSION: 90,
  MIN_FIREFOX_VERSION: 88,
  MIN_SAFARI_VERSION: 14,
  MIN_EDGE_VERSION: 90
} as const;

/**
 * パフォーマンス設定
 */
export const PERFORMANCE = {
  CHUNK_SIZE: 1000, // バッチ処理のチャンクサイズ
  DEBOUNCE_DELAY: 300, // 入力のデバウンス遅延
  LAZY_LOAD_THRESHOLD: 100, // 遅延読み込みの閾値
  CACHE_MAX_ENTRIES: 50 // キャッシュの最大エントリ数
} as const;

/**
 * 正規表現パターン
 */
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^https?:\/\/[^\s$.?#].[^\s]*$/,
  FILENAME_SAFE: /^[a-zA-Z0-9_\-.\s]+$/,
  HTML_TAG: /<[^>]*>/g,
  MARKDOWN_LINK: /\[([^\]]+)\]\(([^)]+)\)/g
} as const;

/**
 * デフォルト値
 */
export const DEFAULTS = {
  LANGUAGE: 'ja',
  EXPORT_FORMAT: 'pdf',
  INCLUDE_GUIDES: false,
  INCLUDE_NOTES: true,
  INCLUDE_SUMMARY: true,
  SECTION_BREAKS: false,
  TEXT_MODE: false,
  ADVANCED_MODE: false,
  RELIABLE_MODE: true,
  PIXEL_PERFECT_MODE: false
} as const;
