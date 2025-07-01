// src/lib/constants/pdf.ts
// PDF生成関連の定数・設定

/**
 * PDF ページ設定
 */
export const PDF_PAGE_SETTINGS = {
  FORMAT: 'a4' as const,
  ORIENTATION: 'portrait' as const,
  UNIT: 'mm' as const,
  MARGIN: {
    TOP: 20,
    RIGHT: 15,
    BOTTOM: 20,
    LEFT: 15
  },
  WIDTH: 210, // A4 width in mm
  HEIGHT: 297 // A4 height in mm
} as const;

/**
 * PDF フォント設定
 */
export const PDF_FONTS = {
  DEFAULT: 'NotoSans',
  JAPANESE: 'NotoSansCJK',
  CHINESE: 'NotoSansCJK',
  KOREAN: 'NotoSansCJK',
  ARABIC: 'NotoSansArabic',
  HINDI: 'NotoSansDevanagari',
  FALLBACK: 'helvetica',
  SIZES: {
    TITLE: 24,
    HEADING1: 18,
    HEADING2: 16,
    HEADING3: 14,
    BODY: 12,
    CAPTION: 10,
    FOOTER: 8
  }
} as const;

/**
 * PDF カラーパレット
 */
export const PDF_COLORS = {
  PRIMARY: '#2c3e50',
  SECONDARY: '#34495e',
  SUCCESS: '#27ae60',
  WARNING: '#f39c12',
  DANGER: '#e74c3c',
  INFO: '#3498db',
  TEXT: '#333333',
  TEXT_LIGHT: '#666666',
  TEXT_MUTED: '#999999',
  BACKGROUND: '#ffffff',
  BORDER: '#dee2e6',
  ACCENT: '#9b59b6',

  // 判定カラー
  ACCEPT: '#27ae60',
  CAUTION: '#f39c12',
  REJECT: '#e74c3c',
  PENDING: '#95a5a6',

  // カテゴリカラー
  CRITICAL: '#e74c3c',
  DETAILED: '#3498db',
  VERIFICATION: '#f39c12',
  CONTEXT: '#9b59b6'
} as const;

/**
 * PDF レイアウト設定
 */
export const PDF_LAYOUT = {
  HEADER_HEIGHT: 15,
  FOOTER_HEIGHT: 15,
  SECTION_SPACING: 10,
  PARAGRAPH_SPACING: 5,
  LINE_HEIGHT: 1.5,
  TABLE_ROW_HEIGHT: 8,
  CHECKBOX_SIZE: 4,
  LOGO_SIZE: 12,

  // インデント設定
  INDENT: {
    NONE: 0,
    SMALL: 5,
    MEDIUM: 10,
    LARGE: 15
  }
} as const;

/**
 * PDF 生成オプション
 */
export const PDF_GENERATION_OPTIONS = {
  // jsPDF設定
  JSPDF: {
    compress: true,
    precision: 2,
    userUnit: 1.0,
    hotfixes: ['px_scaling']
  },

  // html2canvas設定（PixelPerfectモード用）
  HTML2CANVAS: {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: '#ffffff',
    logging: false,
    imageTimeout: 15000,
    removeContainer: true
  },

  // Puppeteer風設定（将来的な拡張用）
  PUPPETEER_LIKE: {
    printBackground: true,
    format: 'A4',
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    }
  }
} as const;

/**
 * PDF 生成モード設定
 */
export const PDF_MODES = {
  TEXT_BASED: {
    id: 'text',
    name: 'Text-based',
    description: 'Fast generation using text elements',
    pros: ['Fast', 'Small file size', 'Searchable text'],
    cons: ['Limited styling', 'Basic layout'],
    recommended: true
  },
  RELIABLE: {
    id: 'reliable',
    name: 'Reliable',
    description: 'Reliable Japanese font support',
    pros: ['Japanese support', 'Consistent fonts', 'Good compatibility'],
    cons: ['Larger file size'],
    recommended: true
  },
  PIXEL_PERFECT: {
    id: 'pixel-perfect',
    name: 'Pixel Perfect',
    description: 'Exact browser rendering',
    pros: ['Perfect styling', 'Exact layout'],
    cons: ['Slow generation', 'Large file size', 'Not searchable'],
    recommended: false
  },
  SIMPLE: {
    id: 'simple',
    name: 'Simple',
    description: 'Basic PDF generation',
    pros: ['Very fast', 'Small file size'],
    cons: ['No styling', 'Basic layout'],
    recommended: false
  }
} as const;

/**
 * PDF セクション設定
 */
export const PDF_SECTIONS = {
  COVER: {
    include: true,
    newPage: false,
    fontSize: PDF_FONTS.SIZES.TITLE
  },
  SUMMARY: {
    include: true,
    newPage: false,
    fontSize: PDF_FONTS.SIZES.BODY
  },
  CHECKLIST: {
    include: true,
    newPage: true,
    fontSize: PDF_FONTS.SIZES.BODY
  },
  NOTES: {
    include: true,
    newPage: false,
    fontSize: PDF_FONTS.SIZES.BODY
  },
  FOOTER: {
    include: true,
    fontSize: PDF_FONTS.SIZES.FOOTER
  }
} as const;

/**
 * PDF テーブル設定
 */
export const PDF_TABLE = {
  BORDER_WIDTH: 0.5,
  CELL_PADDING: 2,
  HEADER_BACKGROUND: '#f8f9fa',
  ODD_ROW_BACKGROUND: '#ffffff',
  EVEN_ROW_BACKGROUND: '#f8f9fa',
  TEXT_COLOR: PDF_COLORS.TEXT,
  BORDER_COLOR: PDF_COLORS.BORDER
} as const;

/**
 * PDF 品質設定
 */
export const PDF_QUALITY = {
  DPI: 150,
  JPEG_QUALITY: 0.92,
  PNG_COMPRESSION: 6,
  TEXT_RENDERING: 'optimizeSpeed' as const,
  IMAGE_SMOOTHING: true
} as const;

/**
 * PDF エラーハンドリング
 */
export const PDF_ERRORS = {
  GENERATION_FAILED: 'PDF generation failed',
  FONT_LOAD_FAILED: 'Font loading failed',
  CANVAS_RENDER_FAILED: 'Canvas rendering failed',
  FILE_TOO_LARGE: 'Generated PDF file is too large',
  BROWSER_NOT_SUPPORTED: 'Browser does not support PDF generation',
  MEMORY_LIMIT_EXCEEDED: 'Memory limit exceeded during PDF generation',
  TIMEOUT: 'PDF generation timed out'
} as const;

/**
 * PDF パフォーマンス設定
 */
export const PDF_PERFORMANCE = {
  MAX_GENERATION_TIME: 60000, // 60秒
  CHUNK_SIZE: 50, // アイテムの分割サイズ
  MEMORY_LIMIT: 100 * 1024 * 1024, // 100MB
  CONCURRENT_GENERATION_LIMIT: 1, // 同時生成数制限
  CLEANUP_DELAY: 1000 // リソースクリーンアップ遅延
} as const;
