// src/lib/constants/i18n.ts
// 国際化関連の定数・設定

/**
 * サポート言語設定
 */
export const SUPPORTED_LANGUAGES = {
  JA: { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', rtl: false, script: 'cjk' },
  EN: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    rtl: false,
    script: 'latin'
  },
  FR: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    rtl: false,
    script: 'latin'
  },
  ZH_TW: {
    code: 'zh-TW',
    name: 'Traditional Chinese',
    nativeName: '繁體中文',
    flag: '🇹🇼',
    rtl: false,
    script: 'cjk'
  },
  ES: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    rtl: false,
    script: 'latin'
  },
  PT: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    rtl: false,
    script: 'latin'
  },
  HI: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    rtl: false,
    script: 'devanagari'
  },
  DE: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    rtl: false,
    script: 'latin'
  },
  IT: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    rtl: false,
    script: 'latin'
  },
  AR: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    rtl: true,
    script: 'arabic'
  },
  ID: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    rtl: false,
    script: 'latin'
  },
  KO: { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', rtl: false, script: 'cjk' }
} as const;

/**
 * 言語コード配列
 */
export const LANGUAGE_CODES = Object.values(SUPPORTED_LANGUAGES).map(lang => lang.code);

/**
 * デフォルト言語設定
 */
export const DEFAULT_LANGUAGE = 'ja';
export const FALLBACK_LANGUAGE = 'en';

/**
 * 文字体系分類
 */
export const SCRIPT_FAMILIES = {
  LATIN: ['en', 'fr', 'es', 'pt', 'de', 'it', 'id'],
  CJK: ['ja', 'zh-TW', 'ko'],
  ARABIC: ['ar'],
  DEVANAGARI: ['hi']
} as const;

/**
 * RTL（右から左）言語
 */
export const RTL_LANGUAGES = ['ar'];

/**
 * 日付フォーマット設定
 */
export const DATE_FORMATS = {
  ja: {
    dateStyle: 'long' as const,
    timeStyle: 'short' as const,
    calendar: 'gregory' as const
  },
  en: {
    dateStyle: 'long' as const,
    timeStyle: 'short' as const,
    calendar: 'gregory' as const
  },
  ar: {
    dateStyle: 'long' as const,
    timeStyle: 'short' as const,
    calendar: 'islamic' as const,
    numberingSystem: 'arab' as const
  },
  hi: {
    dateStyle: 'long' as const,
    timeStyle: 'short' as const,
    calendar: 'gregory' as const,
    numberingSystem: 'deva' as const
  }
} as const;

/**
 * 数値フォーマット設定
 */
export const NUMBER_FORMATS = {
  ja: {
    style: 'decimal' as const,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  },
  en: {
    style: 'decimal' as const,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  },
  ar: {
    style: 'decimal' as const,
    numberingSystem: 'arab' as const,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  },
  hi: {
    style: 'decimal' as const,
    numberingSystem: 'deva' as const,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }
} as const;

/**
 * フォント設定（PDF生成用）
 */
export const I18N_FONTS = {
  LATIN: {
    name: 'Roboto',
    files: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Bold.ttf',
      italic: 'Roboto-Italic.ttf'
    }
  },
  CJK: {
    name: 'NotoSansCJK',
    files: {
      normal: 'NotoSansCJK-Regular.ttf',
      bold: 'NotoSansCJK-Bold.ttf'
    }
  },
  ARABIC: {
    name: 'NotoSansArabic',
    files: {
      normal: 'NotoSansArabic-Regular.ttf',
      bold: 'NotoSansArabic-Bold.ttf'
    }
  },
  DEVANAGARI: {
    name: 'NotoSansDevanagari',
    files: {
      normal: 'NotoSansDevanagari-Regular.ttf',
      bold: 'NotoSansDevanagari-Bold.ttf'
    }
  }
} as const;

/**
 * 翻訳キー設定
 */
export const TRANSLATION_NAMESPACES = {
  APP: 'app',
  NAVIGATION: 'navigation',
  CHECKLIST: 'checklist',
  EXPORT: 'export',
  FORMS: 'forms',
  UI: 'ui',
  ERRORS: 'errors',
  DATETIME: 'datetime',
  ACCESSIBILITY: 'accessibility',
  INTRO: 'intro',
  PAGES: 'pages'
} as const;

/**
 * 言語検出設定
 */
export const LANGUAGE_DETECTION = {
  BROWSER_LANGUAGE: true,
  LOCAL_STORAGE_KEY: 'fact-checklist-language',
  URL_PARAMETER: 'lang',
  COOKIE_NAME: 'language',
  FALLBACK_CHAIN: ['ja', 'en'],
  AUTO_DETECT: true
} as const;

/**
 * 翻訳ローディング設定
 */
export const TRANSLATION_LOADING = {
  LAZY_LOAD: true,
  CACHE_TRANSLATIONS: true,
  MAX_CACHE_SIZE: 10,
  CACHE_DURATION: 24 * 60 * 60 * 1000, // 24時間
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
} as const;

/**
 * 複数形ルール
 */
export const PLURALIZATION_RULES = {
  en: (n: number) => (n === 1 ? 0 : 1),
  ja: () => 0, // 日本語は複数形なし
  fr: (n: number) => (n === 0 || n === 1 ? 0 : 1),
  ar: (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n >= 3 && n <= 10) return 3;
    if (n >= 11 && n <= 99) return 4;
    return 5;
  },
  hi: (n: number) => (n === 1 ? 0 : 1)
} as const;

/**
 * 言語固有の設定
 */
export const LANGUAGE_SPECIFIC_SETTINGS = {
  ar: {
    direction: 'rtl',
    textAlign: 'right',
    fontFamily: 'Noto Sans Arabic',
    lineHeight: 1.8
  },
  hi: {
    direction: 'ltr',
    textAlign: 'left',
    fontFamily: 'Noto Sans Devanagari',
    lineHeight: 1.7
  },
  ja: {
    direction: 'ltr',
    textAlign: 'left',
    fontFamily: 'Noto Sans CJK JP',
    lineHeight: 1.8
  },
  'zh-TW': {
    direction: 'ltr',
    textAlign: 'left',
    fontFamily: 'Noto Sans CJK TC',
    lineHeight: 1.8
  },
  ko: {
    direction: 'ltr',
    textAlign: 'left',
    fontFamily: 'Noto Sans CJK KR',
    lineHeight: 1.7
  }
} as const;

/**
 * 文字エンコーディング設定
 */
export const TEXT_ENCODING = {
  DEFAULT: 'UTF-8',
  BOM_REQUIRED: false,
  NORMALIZE_FORM: 'NFC' as const,
  PRESERVE_WHITESPACE: false
} as const;
