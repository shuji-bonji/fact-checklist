/**
 * i18n TypeScript型定義
 * 12言語対応の国際化システム用型定義
 */

// サポート言語の定義
export const SUPPORTED_LANGUAGES = {
  ja: { name: 'Japanese', nativeName: '日本語', code: 'ja', dir: 'ltr', flag: '🇯🇵' },
  en: { name: 'English', nativeName: 'English', code: 'en', dir: 'ltr', flag: '🇺🇸' },
  fr: { name: 'French', nativeName: 'Français', code: 'fr', dir: 'ltr', flag: '🇫🇷' },
  'zh-TW': {
    name: 'Traditional Chinese',
    nativeName: '繁體中文',
    code: 'zh-TW',
    dir: 'ltr',
    flag: '🇹🇼'
  },
  es: { name: 'Spanish', nativeName: 'Español', code: 'es', dir: 'ltr', flag: '🇪🇸' },
  pt: { name: 'Portuguese', nativeName: 'Português', code: 'pt', dir: 'ltr', flag: '🇵🇹' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', code: 'hi', dir: 'ltr', flag: '🇮🇳' },
  de: { name: 'German', nativeName: 'Deutsch', code: 'de', dir: 'ltr', flag: '🇩🇪' },
  it: { name: 'Italian', nativeName: 'Italiano', code: 'it', dir: 'ltr', flag: '🇮🇹' },
  ar: { name: 'Arabic', nativeName: 'العربية', code: 'ar', dir: 'rtl', flag: '🇸🇦' },
  id: { name: 'Indonesian', nativeName: 'Bahasa Indonesia', code: 'id', dir: 'ltr', flag: '🇮🇩' },
  ko: { name: 'Korean', nativeName: '한국어', code: 'ko', dir: 'ltr', flag: '🇰🇷' }
} as const;

// 言語コード型
export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

// 言語情報インターフェース
export interface SupportedLanguage {
  name: string;
  nativeName: string;
  code: LanguageCode;
  dir: 'ltr' | 'rtl';
  flag: string;
}

// テキスト方向設定
export interface DirectionalStyles {
  direction: 'ltr' | 'rtl';
  textAlign: 'left' | 'right';
  marginLeft?: string;
  marginRight?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

// 翻訳キー構造（ネストしたオブジェクト）
export interface TranslationKeys {
  // 共通UI
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    clear: string;
    reset: string;
    copy: string;
    download: string;
    share: string;
    print: string;
    export: string;
    import: string;
    settings: string;
    help: string;
    about: string;
    privacy: string;
    terms: string;
    home: string;
    menu: string;
    languages: string;
    darkMode: string;
    lightMode: string;
    systemMode: string;
    guide: string;
    showGuide: string;
    rip: {
      high: string;
      medium: string;
      low: string;
    };
  };

  // アプリケーション固有
  app: {
    title: string;
    subtitle: string;
    description: string;
    version: string;
    author: string;
    copyright: string;
    poweredBy: string;
  };

  // ナビゲーション
  navigation: {
    home: string;
    about: string;
    help: string;
    privacy: string;
    checklist: string;
    history: string;
    settings: string;
  };

  // チェックリスト関連
  checklist: {
    title: string;
    description: string;
    newChecklist: string;
    createChecklist: string;
    editChecklist: string;
    deleteChecklist: string;
    completeChecklist: string;
    checklistTitle: string;
    checklistDescription: string;
    targetInfo: string;
    targetInfoPlaceholder: string;
    evaluationNotes: string;
    evaluationNotesPlaceholder: string;
    score: string;
    confidenceLevel: string;
    finalJudgment: string;
    judgment: {
      accept: string;
      caution: string;
      reject: string;
      pending: string;
    };
    judgmentAdvice: {
      accept: string;
      caution: string;
      reject: string;
    };
    confidence: {
      high: string;
      medium: string;
      low: string;
      poor: string;
    };
    advice: {
      high: string;
      medium: string;
      low: string;
      poor: string;
    };
  };

  // チェック項目カテゴリ
  categories: {
    critical: {
      name: string;
      description: string;
      emoji: string;
    };
    detailed: {
      name: string;
      description: string;
      emoji: string;
    };
    verification: {
      name: string;
      description: string;
      emoji: string;
    };
    context: {
      name: string;
      description: string;
      emoji: string;
    };
  };

  // エクスポート機能
  export: {
    title: string;
    description: string;
    format: string;
    options: string;
    includeGuides: string;
    includeNotes: string;
    includeSummary: string;
    sectionBreaks: string;
    pdfModes: {
      pixelPerfect: string;
      reliableFont: string;
      textBased: string;
    };
    formats: {
      pdf: string;
      html: string;
      json: string;
      markdown: string;
    };
    progress: {
      initializing: string;
      generating: string;
      processing: string;
      finalizing: string;
      completed: string;
      failed: string;
    };
  };

  // 履歴
  history: {
    title: string;
    description: string;
    empty: string;
    lastEvaluated: string;
    viewResults: string;
    deleteHistory: string;
    clearAll: string;
    recent: string;
    viewAll: string;
    createFirst: string;
  };

  // エラーメッセージ
  errors: {
    general: string;
    network: string;
    storage: string;
    export: string;
    import: string;
    invalidData: string;
    unsupportedFeature: string;
    permissionDenied: string;
    fileNotFound: string;
    fileTooLarge: string;
    invalidFileFormat: string;
  };

  // 成功メッセージ
  success: {
    saved: string;
    exported: string;
    imported: string;
    deleted: string;
    copied: string;
    shared: string;
  };

  // 確認メッセージ
  confirmations: {
    delete: string;
    reset: string;
    clearHistory: string;
    overwrite: string;
    discard: string;
  };

  // ヘルプ・ガイド
  help: {
    title: string;
    overview: string;
    howToUse: string;
    categories: string;
    scoring: string;
    features: string;
    troubleshooting: string;
    faq: string;
  };

  // プライバシーポリシー
  privacy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    introduction: {
      title: string;
      content: string;
    };
    dataCollection: {
      title: string;
      description: string;
      details: string[];
    };
    localStorage: {
      title: string;
      description: string;
      details: string[];
    };
    offlineFunctionality: {
      title: string;
      description: string;
      details: string[];
    };
    securityMeasures: {
      title: string;
      description: string;
      details: string[];
    };
    dataRetention: {
      title: string;
      description: string;
      details: string[];
    };
    policyUpdates: {
      title: string;
      description: string;
      details: string[];
    };
    contact: {
      title: string;
      content: string;
      githubText: string;
      suffix: string;
    };
  };

  // アプリについて
  about: {
    title: string;
    subtitle: string;
    hero: {
      title: string;
      subtitle: string;
      description: string[];
      startButton: string;
    };
    features: {
      privacy: {
        title: string;
        description: string;
        details: string[];
      };
      offline: {
        title: string;
        description: string;
        details: string[];
      };
      scientific: {
        title: string;
        description: string;
        details: string[];
      };
      export: {
        title: string;
        description: string;
        details: string[];
      };
      history: {
        title: string;
        description: string;
        details: string[];
      };
      support: {
        title: string;
        description: string;
        details: string[];
      };
    };
    steps: {
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
    };
    categories: {
      critical: {
        name: string;
        description: string;
        items: number;
      };
      detailed: {
        name: string;
        description: string;
        items: number;
      };
      verification: {
        name: string;
        description: string;
        items: number;
      };
      context: {
        name: string;
        description: string;
        items: number;
      };
    };
    techStack: {
      frontend: {
        name: string;
        description: string;
      };
      language: {
        name: string;
        description: string;
      };
      framework: {
        name: string;
        description: string;
      };
      styling: {
        name: string;
        description: string;
      };
      pwa: {
        name: string;
        description: string;
      };
      export: {
        name: string;
        description: string;
      };
    };
    sections: {
      features: string;
      howItWorks: string;
      categories: string;
      techStack: string;
      performance: string;
    };
    sectionDescriptions: {
      howItWorks: string;
      categories: string;
      techStack: string;
      performance: string;
    };
    stats: {
      performance: string;
      accessibility: string;
      bestPractices: string;
      seo: string;
    };
    cta: {
      title: string;
      description: string;
      startButton: string;
      helpButton: string;
    };
  };

  // アクセシビリティ
  accessibility: {
    skipToContent: string;
    mainNavigation: string;
    searchForm: string;
    languageSelector: string;
    themeToggle: string;
    closeDialog: string;
    openMenu: string;
    expandSection: string;
    collapseSection: string;
  };

  // 日付・時刻
  datetime: {
    justNow: string;
    minutesAgo: string;
    hoursAgo: string;
    daysAgo: string;
    weeksAgo: string;
    monthsAgo: string;
    yearsAgo: string;
    createdAt: string;
    updatedAt: string;
    completedAt: string;
  };

  // 単位・数値
  units: {
    items: string;
    percent: string;
    score: string;
    total: string;
    completed: string;
    remaining: string;
    of: string;
  };

  // フォーム関連
  forms: {
    titleLabel: string;
    titlePlaceholder: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
  };

  // UI テキスト
  ui: {
    quickStartGuide: string;
    guideModeDetailed: string;
    guideModeNormal: string;
    completeEvaluation: string;
  };

  // チェックリスト項目
  checklistItems: {
    [itemId: string]: {
      title: string;
      description: string;
      guideTitle: string;
      guideContent: string;
      examplesGood: string[];
      examplesBad: string[];
    };
  };
}

// 翻訳関数の型
export type TranslationFunction = (
  key: NestedKeyOf<TranslationKeys>,
  params?: Record<string, string | number>
) => string;

// ネストしたオブジェクトのキーを取得するヘルパー型
export type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

// 言語設定インターフェース
export interface LanguageSettings {
  currentLanguage: LanguageCode;
  fallbackLanguage: LanguageCode;
  autoDetect: boolean;
  rtlSupport: boolean;
}

// i18nストアの状態
export interface I18nState {
  currentLanguage: LanguageCode;
  translations: Record<LanguageCode, TranslationKeys>;
  isLoading: boolean;
  error: string | null;
  direction: 'ltr' | 'rtl';
}

// 翻訳ファイルのメタデータ
export interface TranslationMetadata {
  language: LanguageCode;
  version: string;
  lastUpdated: string;
  translator: string;
  completeness: number; // 0-100%の翻訳完了率
}

// 安全な型定義用ヘルパー
export interface NestedRecord {
  [key: string]: NestedRecord | string;
}
export type SafeTranslationFunction = (
  key: string,
  params?: Record<string, string | number>
) => string;
