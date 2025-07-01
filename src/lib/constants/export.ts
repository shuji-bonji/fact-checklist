// src/lib/constants/export.ts
// エクスポート関連の定数・設定

/**
 * エクスポート形式
 */
export const EXPORT_FORMATS = {
  PDF: 'pdf',
  HTML: 'html',
  JSON: 'json',
  MARKDOWN: 'markdown'
} as const;

export type ExportFormat = (typeof EXPORT_FORMATS)[keyof typeof EXPORT_FORMATS];

/**
 * エクスポートプログレス段階
 */
export const EXPORT_STAGES = {
  INITIALIZING: 'initializing',
  GENERATING_CONTENT: 'generating',
  PROCESSING_PDF: 'processing',
  CREATING_FILE: 'creating',
  DOWNLOADING: 'downloading',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
} as const;

/**
 * エクスポートプログレス値
 */
export const EXPORT_PROGRESS = {
  START: 0,
  INITIALIZED: 10,
  CONTENT_GENERATED: 30,
  PDF_PROCESSING: 60,
  FILE_CREATED: 80,
  DOWNLOAD_STARTED: 90,
  COMPLETED: 100
} as const;

/**
 * MIMEタイプ
 */
export const MIME_TYPES = {
  PDF: 'application/pdf',
  HTML: 'text/html',
  JSON: 'application/json',
  MARKDOWN: 'text/markdown',
  PLAIN_TEXT: 'text/plain'
} as const;

/**
 * ファイル拡張子
 */
export const FILE_EXTENSIONS = {
  PDF: '.pdf',
  HTML: '.html',
  JSON: '.json',
  MARKDOWN: '.md',
  TEXT: '.txt'
} as const;

/**
 * デフォルトファイル名
 */
export const DEFAULT_FILENAMES = {
  PREFIX: 'fact-checklist',
  PDF: 'fact-checklist-report.pdf',
  HTML: 'fact-checklist-report.html',
  JSON: 'fact-checklist-data.json',
  MARKDOWN: 'fact-checklist-report.md'
} as const;

/**
 * HTML/CSS テンプレート設定
 */
export const HTML_TEMPLATE = {
  CHARSET: 'UTF-8',
  VIEWPORT: 'width=device-width, initial-scale=1.0',
  LANG: 'ja',
  TITLE_PREFIX: 'Fact Checklist - ',
  STYLES: {
    BODY_FONT: '"Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif',
    HEADING_FONT: '"Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif',
    FONT_SIZE: '14px',
    LINE_HEIGHT: '1.6',
    COLOR_PRIMARY: '#2c3e50',
    COLOR_SECONDARY: '#7f8c8d',
    COLOR_SUCCESS: '#27ae60',
    COLOR_WARNING: '#f39c12',
    COLOR_DANGER: '#e74c3c',
    COLOR_INFO: '#3498db',
    BACKGROUND_COLOR: '#ffffff',
    BORDER_COLOR: '#ecf0f1'
  }
} as const;

/**
 * Markdown フォーマット設定
 */
export const MARKDOWN_FORMAT = {
  HEADING_PREFIX: '#',
  LIST_MARKER: '-',
  TABLE_SEPARATOR: '|',
  CODE_FENCE: '```',
  HORIZONTAL_RULE: '---',
  EMPHASIS: '**',
  LINK_FORMAT: '[{text}]({url})'
} as const;

/**
 * JSON エクスポート設定
 */
export const JSON_EXPORT = {
  INDENT_SPACES: 2,
  INCLUDE_METADATA: true,
  INCLUDE_TIMESTAMP: true,
  INCLUDE_VERSION: true
} as const;

/**
 * PDF生成モード
 */
export const PDF_MODES = {
  TEXT_BASED: 'text',
  HTML_CANVAS: 'canvas',
  RELIABLE: 'reliable',
  PIXEL_PERFECT: 'pixel-perfect',
  SIMPLE: 'simple'
} as const;

export type PDFMode = (typeof PDF_MODES)[keyof typeof PDF_MODES];

/**
 * エクスポートオプションのデフォルト値
 */
export const DEFAULT_EXPORT_OPTIONS = {
  format: EXPORT_FORMATS.PDF,
  includeGuides: true,
  includeNotes: true,
  includeSummary: true,
  sectionBreaks: false,
  textMode: false,
  advancedMode: false,
  reliableMode: true,
  pixelPerfectMode: false
} as const;

/**
 * エクスポートエラーメッセージ
 */
export const EXPORT_ERRORS = {
  UNSUPPORTED_FORMAT: 'Unsupported export format',
  MISSING_DATA: 'Required data is missing',
  PDF_GENERATION_FAILED: 'PDF generation failed',
  FILE_TOO_LARGE: 'Generated file is too large',
  BROWSER_NOT_SUPPORTED: 'Browser does not support this feature',
  NETWORK_ERROR: 'Network error occurred',
  TIMEOUT: 'Export process timed out',
  CANCELLED: 'Export was cancelled by user',
  UNKNOWN: 'Unknown error occurred'
} as const;

/**
 * エクスポート成功メッセージ
 */
export const EXPORT_SUCCESS = {
  PDF_GENERATED: 'PDF file generated successfully',
  HTML_GENERATED: 'HTML file generated successfully',
  JSON_GENERATED: 'JSON file generated successfully',
  MARKDOWN_GENERATED: 'Markdown file generated successfully',
  DOWNLOAD_STARTED: 'Download has started',
  EXPORT_COMPLETED: 'Export completed successfully'
} as const;

/**
 * エクスポートバリデーション
 */
export const EXPORT_VALIDATION = {
  MIN_TITLE_LENGTH: 1,
  MAX_TITLE_LENGTH: 200,
  MIN_ITEMS_COUNT: 1,
  MAX_ITEMS_COUNT: 1000,
  REQUIRED_FIELDS: ['id', 'title', 'createdAt', 'items'] as const
} as const;
