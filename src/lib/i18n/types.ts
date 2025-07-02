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

  // ページ固有メタデータ
  pages: {
    home: {
      title: string;
      description: string;
      keywords: string;
    };
    about: {
      title: string;
      description: string;
      keywords: string;
    };
    help: {
      title: string;
      description: string;
      keywords: string;
    };
    privacy: {
      title: string;
      description: string;
      keywords: string;
    };
    intro: {
      title: string;
      description: string;
      keywords: string;
    };
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

  // チェックリスト関連
  checklist: {
    title: string;
    defaultFileName: string;
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
    // 詳細ページ用の新しいキー
    evaluationCompleted: string;
    evaluationCompletedDescription: string;
    evaluationResults: string;
    totalScore: string;
    itemsDetail: string;
    recommendedActions: string;
    improvementTips: string;
    checkUncheckedItems: string;
    additionalSourceResearch: string;
    expertConsultation: string;
    factCheckOrganizations: string;
    statistics: string;
    checkedItems: string;
    uncheckedItems: string;
    completionRate: string;
    actions: string;
    exportShare: string;
    reEdit: string;
    completed: string;
  };

  // チェック項目カテゴリ
  categories: {
    critical: {
      name: string;
      description: string;
      emoji: string;
      short: string;
    };
    detailed: {
      name: string;
      description: string;
      emoji: string;
      short: string;
    };
    verification: {
      name: string;
      description: string;
      emoji: string;
      short: string;
    };
    context: {
      name: string;
      description: string;
      emoji: string;
      short: string;
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
    pdfMode: string;
    pdfModes: {
      pixelPerfect: string;
      pixelPerfectDescription: string;
      reliableFont: string;
      reliableFontDescription: string;
      textBased: string;
      textBasedDescription: string;
    };
    formats: {
      pdf: string;
      html: string;
      json: string;
      markdown: string;
    };
    progress: {
      starting: string;
      initializing: string;
      generating: string;
      processing: string;
      saving: string;
      finalizing: string;
      completed: string;
      failed: string;
    };
    generatedAt: string;
    summaryTable: {
      item: string;
      value: string;
    };
    table: {
      section: string;
      completionRate: string;
      completedItems: string;
    };
    sectionCompletionRates: string;
    achievementStatus: string;
    completionStatus: string;
    goodExamples: string;
    badExamples: string;
    completed: string;
    notCompleted: string;
    items: string;
    examples: string;
    metadata: {
      title: string;
      created: string;
      score: string;
      confidence: string;
      language: string;
      judgment: string;
    };
    summary: {
      title: string;
      totalScore: string;
      completionRate: string;
      confidenceLevel: string;
      checkedItems: string;
      result: string;
      confidenceText: string;
      judgmentAdvice: string;
    };
    clipboardTitle: string;
    sectionCompletion: string;
    notes: string;
    judgment: {
      accept: string;
      caution: string;
      reject: string;
      notEvaluated: string;
    };
    csv: {
      id: string;
      title: string;
      description: string;
      checked: string;
      category: string;
    };
    error: {
      pdfGeneration: string;
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
    subtitle: string;
    tableOfContents: string;
    navigation: {
      overview: string;
      usage: string;
      categories: string;
      scoring: string;
      features: string;
      privacy: string;
      troubleshooting: string;
    };
    sections: {
      overview: {
        title: string;
        emoji: string;
        description: string;
        content: string;
        subSections: {
          features: {
            title: string;
            content: string;
          };
          targetUsers: {
            title: string;
            content: string;
          };
        };
      };
      usage: {
        title: string;
        emoji: string;
        description: string;
        content: string;
        subSections: {
          step1: {
            title: string;
            content: string;
          };
          step2: {
            title: string;
            content: string;
          };
          step3: {
            title: string;
            content: string;
          };
          step4: {
            title: string;
            content: string;
          };
        };
      };
      categories: {
        title: string;
        emoji: string;
        description: string;
        content: string;
        subSections: {
          critical: {
            title: string;
            content: string;
          };
          detailed: {
            title: string;
            content: string;
          };
          verification: {
            title: string;
            content: string;
          };
          context: {
            title: string;
            content: string;
          };
        };
      };
      scoring: {
        title: string;
        emoji: string;
        description: string;
        content: string;
        subSections: {
          calculation: {
            title: string;
            content: string;
          };
          criteria: {
            title: string;
            content: string;
          };
          finalJudgment: {
            title: string;
            content: string;
          };
        };
      };
      features: {
        title: string;
        emoji: string;
        description: string;
        content: string;
        subSections: {
          detailedGuide: {
            title: string;
            content: string;
          };
          exportFunction: {
            title: string;
            content: string;
            exportFormats: {
              title: string;
              formats: {
                pdf: {
                  name: string;
                  features: string;
                  usage: string;
                };
                html: {
                  name: string;
                  features: string;
                  usage: string;
                };
                json: {
                  name: string;
                  features: string;
                  usage: string;
                };
                markdown: {
                  name: string;
                  features: string;
                  usage: string;
                };
              };
            };
            pdfModes: {
              title: string;
              modes: {
                pixelPerfect: {
                  name: string;
                  subtitle: string;
                  description: string;
                  features: string;
                };
                reliableFont: {
                  name: string;
                  description: string;
                  features: string;
                };
                textBased: {
                  name: string;
                  subtitle: string;
                  description: string;
                  features: string;
                };
              };
            };
            exportOptions: {
              title: string;
              options: {
                summary: {
                  name: string;
                  description: string;
                  formats: string;
                };
                guides: {
                  name: string;
                  description: string;
                  formats: string;
                };
                notes: {
                  name: string;
                  description: string;
                  formats: string;
                };
                sectionBreaks: {
                  name: string;
                  description: string;
                  formats: string;
                };
              };
            };
            exportNote: string;
          };
          historyManagement: {
            title: string;
            content: string;
          };
          pwaSupport: {
            title: string;
            content: string;
          };
        };
      };
      privacy: {
        title: string;
        emoji: string;
        description: string;
        content: string;
        subSections: {
          localStorage: {
            title: string;
            content: string;
          };
          security: {
            title: string;
            content: string;
          };
          dataDeletion: {
            title: string;
            content: string;
          };
        };
      };
      troubleshooting: {
        title: string;
        emoji: string;
        description: string;
        content: string;
        subSections: {
          dataNotSaved: {
            title: string;
            content: string;
          };
          scoreNotDisplayed: {
            title: string;
            content: string;
          };
          exportFailed: {
            title: string;
            content: string;
          };
          otherIssues: {
            title: string;
            content: string;
          };
        };
      };
    };
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

  // イントロページ
  intro: {
    meta: {
      title: string;
      keywords: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
    cta: {
      startNow: string;
      useChecklist: string;
      learnMore: string;
    };
    sections: {
      regulation: {
        title: string;
        quote: string;
        content1: string;
        content2: string;
      };
      balance: {
        title: string;
        control: {
          title: string;
          content: string;
        };
        quality: {
          title: string;
          content: string;
        };
        conclusion: string;
      };
      aiLimitations: {
        title: string;
        lead: string;
        point1: string;
        point2: string;
        point3: string;
        conclusion: string;
      };
      features: {
        title: string;
      };
    };
    features: {
      systematic: {
        title: string;
        description: string;
      };
      privacy: {
        title: string;
        description: string;
      };
      pwa: {
        title: string;
        description: string;
      };
      multilingual: {
        title: string;
        description: string;
      };
    };
    finalCta: {
      title: string;
      subtitle: string;
    };
    share: {
      title: string;
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
