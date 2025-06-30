/**
 * Traditional Chinese translation file template
 * Traditional Chinese (zh-TW) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
  language: 'zh-TW' as const,
  version: '1.0.0',
  lastUpdated: '2025-06-29',
  translator: 'Claude AI',
  completeness: 100
};

export const translations: TranslationKeys = {
  // 通用介面
  common: {
    loading: '載入中...',
    error: '發生錯誤',
    success: '成功',
    cancel: '取消',
    save: '儲存',
    delete: '刪除',
    edit: '編輯',
    close: '關閉',
    back: '返回',
    next: '下一個',
    previous: '上一個',
    search: '搜尋',
    clear: '清除',
    reset: '重設',
    copy: '複製',
    download: '下載',
    share: '分享',
    print: '列印',
    export: '匯出',
    import: '匯入',
    settings: '設定',
    help: '說明',
    about: '關於',
    privacy: '隱私',
    terms: '條款',
    home: '首頁',
    menu: '選單',
    languages: '語言',
    darkMode: '深色模式',
    lightMode: '淺色模式',
    systemMode: '系統',
    guide: '指南',
    showGuide: '顯示指南',
    rip: {
      high: '高風險',
      medium: '中等風險',
      low: '低風險'
    }
  },

  // 應用程式特定
  app: {
    title: '實用事實查核檢查表',
    subtitle: '科學評估資訊可靠性的綜合系統',
    description: '科學系統性評估資訊可靠性的檢查表',
    version: '1.0.0',
    author: '事實查核檢查表團隊',
    copyright: '© 2025 事實查核檢查表團隊',
    poweredBy: '技術支援'
  },

  // 導航
  navigation: {
    home: '首頁',
    about: '關於',
    help: '說明與使用',
    privacy: '隱私',
    checklist: '檢查表',
    history: '歷史記錄',
    settings: '設定'
  },

  // 檢查表相關
  checklist: {
    title: '檢查表資訊',
    description: '檢查表詳細資訊',
    newChecklist: '新檢查表',
    createChecklist: '建立檢查表',
    editChecklist: '編輯檢查表',
    deleteChecklist: '刪除檢查表',
    completeChecklist: '完成評估',
    checklistTitle: '標題',
    checklistDescription: '目標資訊概述',
    targetInfo: '目標資訊',
    targetInfoPlaceholder: '例如：新冠疫苗效力相關文章',
    evaluationNotes: '評估筆記與額外驗證項目',
    evaluationNotesPlaceholder: '記錄任何疑問、需要驗證的項目、整體印象等...',
    score: '評估分數',
    confidenceLevel: '信心程度',
    finalJudgment: '最終判斷',
    judgment: {
      accept: '接受',
      caution: '謹慎',
      reject: '拒絕',
      pending: '待定'
    },
    judgmentAdvice: {
      accept: '建議採用。已進行充分驗證。',
      caution: '建議額外驗證。重要決定請謹慎。',
      reject: '建議拒絕。尋找更可靠的來源。'
    },
    confidence: {
      high: '高可靠性',
      medium: '中等可靠性',
      low: '低可靠性',
      poor: '可靠性問題'
    },
    advice: {
      high: '建議採用。已進行充分驗證。',
      medium: '建議額外確認。重要決定請謹慎。',
      low: '需要謹慎。需要進一步驗證。',
      poor: '建議拒絕。尋找可靠的資訊來源。'
    }
  },

  // 檢查項目類別
  categories: {
    critical: {
      name: '關鍵評估（必需）',
      description: '判斷基本資訊可靠性的最重要項目',
      emoji: '🚨'
    },
    detailed: {
      name: '詳細評估（重要）',
      description: '評估資訊質量和專業性的項目',
      emoji: '📝'
    },
    verification: {
      name: '驗證與交叉檢查',
      description: '確認資訊可驗證性和支持的項目',
      emoji: '🔍'
    },
    context: {
      name: '背景與偏見評估',
      description: '評估偏見適當性和背景的項目',
      emoji: '🌐'
    }
  },

  // 匯出功能
  export: {
    title: '匯出',
    description: '以各種格式匯出檢查表',
    format: '格式',
    options: '選項',
    includeGuides: '包含指南',
    includeNotes: '包含筆記',
    includeSummary: '包含摘要',
    sectionBreaks: '章節分隔',
    pdfModes: {
      pixelPerfect: '像素完美',
      reliableFont: '字體可靠性優先',
      textBased: '基於文字'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      initializing: '初始化中...',
      generating: '產生中...',
      processing: '處理中...',
      finalizing: '完成中...',
      completed: '完成',
      failed: '失敗'
    }
  },

  // 歷史記錄
  history: {
    title: '評估歷史',
    description: '過去的評估結果',
    empty: '沒有歷史記錄',
    lastEvaluated: '最後評估',
    viewResults: '查看結果',
    deleteHistory: '刪除歷史',
    clearAll: '全部清除',
    recent: '最近的評估',
    viewAll: '查看全部',
    createFirst: '讓我們建立你的第一個檢查表！'
  },

  // 錯誤訊息
  errors: {
    general: '發生意外錯誤',
    network: '發生網路錯誤',
    storage: '發生儲存錯誤',
    export: '匯出失敗',
    import: '匯入失敗',
    invalidData: '無效資料',
    unsupportedFeature: '不支援的功能',
    permissionDenied: '權限被拒絕',
    fileNotFound: '找不到檔案',
    fileTooLarge: '檔案太大',
    invalidFileFormat: '無效的檔案格式'
  },

  // 成功訊息
  success: {
    saved: '已儲存',
    exported: '已匯出',
    imported: '已匯入',
    deleted: '已刪除',
    copied: '已複製',
    shared: '已分享'
  },

  // 確認訊息
  confirmations: {
    delete: '確定要刪除嗎？',
    reset: '重設？',
    clearHistory: '清除所有歷史記錄？',
    overwrite: '覆寫？',
    discard: '放棄更改？'
  },

  // 說明與指南
  help: {
    title: '說明與使用',
    subtitle: '事實查核清單使用詳細指南',
    tableOfContents: '目錄',
    navigation: {
      overview: '概述',
      usage: '使用方法',
      categories: '類別',
      scoring: '評分',
      features: '功能',
      privacy: '隱私',
      troubleshooting: '疑難排解'
    },
    sections: {
      overview: {
        title: '應用程式概述',
        emoji: '📋',
        description: '事實查核清單的基本使用',
        content: '此應用程式是一個工具，用於科學和系統地評估網際網路上資訊的可信度。',
        subSections: {
          features: {
            title: '主要功能',
            content: '• 完全隱私：所有資料都在本地儲存\n• 離線運作\n• 科學評估\n• 歷史記錄管理'
          },
          targetUsers: {
            title: '目標使用者',
            content: '記者、研究人員、學生以及所有對評估資訊可信度有興趣的人'
          }
        }
      },
      usage: {
        title: '使用方法',
        emoji: '🔍',
        description: '使用應用程式的逐步指南',
        content: '按照這些步驟系統地評估資訊的可信度。',
        subSections: {
          step1: {
            title: '步驟1：輸入資訊',
            content: '輸入您想要評估的資訊的標題和描述'
          },
          step2: {
            title: '步驟2：評估元素',
            content: '根據可用證據評估清單中的每個元素'
          },
          step3: {
            title: '步驟3：檢視結果',
            content: '檢視計算出的結果和信心水準'
          },
          step4: {
            title: '步驟4：最終決定',
            content: '根據評估做出最終決定：接受、謹慎或拒絕'
          }
        }
      },
      categories: {
        title: '評估類別',
        emoji: '📊',
        description: '四個主要評估類別',
        content: '評估元素組織在四個主要類別中，以確保全面評估。',
        subSections: {
          critical: {
            title: '關鍵評估',
            content: '確定資訊基本可信度的最重要元素'
          },
          detailed: {
            title: '詳細評估',
            content: '評估資訊品質和專業性的元素'
          },
          verification: {
            title: '驗證和交叉檢查',
            content: '確認資訊可驗證性和支援的元素'
          },
          context: {
            title: '背景和偏見評估',
            content: '評估偏見和背景適當性的元素'
          }
        }
      },
      scoring: {
        title: '評分系統',
        emoji: '🎯',
        description: '分數和信心水準如何計算',
        content: '分數根據滿足元素數與總元素數的比例計算。',
        subSections: {
          calculation: {
            title: '計算方法',
            content: '分數 = (滿足元素數 / 總元素數) × 100'
          },
          criteria: {
            title: '評估標準',
            content:
              '• 80%+：高可信度\n• 60-79%：中等可信度\n• 40-59%：低可信度\n• <40%：可信度問題'
          },
          finalJudgment: {
            title: '最終判斷',
            content: '使用分數作為指南，但最終決定取決於您的個人判斷'
          }
        }
      },
      features: {
        title: '功能',
        emoji: '⭐',
        description: '應用程式的進階功能',
        content: '應用程式提供多種進階功能來改善使用者體驗。',
        subSections: {
          detailedGuide: {
            title: '詳細指南',
            content: '每個評估元素都包含詳細指南和實用範例，協助您進行評估'
          },
          exportFunction: {
            title: '匯出功能',
            content: '您可以以多種格式匯出評估結果（PDF、HTML、JSON、Markdown）',
            exportFormats: {
              title: '匯出格式',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: '專業格式，適合列印和分享',
                  usage: '適合正式報告和存檔'
                },
                html: {
                  name: 'HTML',
                  features: '在瀏覽器中互動顯示',
                  usage: '適合透過網路分享'
                },
                json: {
                  name: 'JSON',
                  features: '結構化資料格式',
                  usage: '適合自動分析和匯入'
                },
                markdown: {
                  name: 'Markdown',
                  features: '靈活的文字格式',
                  usage: '適合部落格和文件'
                }
              }
            },
            pdfModes: {
              title: 'PDF模式',
              modes: {
                pixelPerfect: {
                  name: '像素完美',
                  subtitle: '最佳視覺品質',
                  description: '以高精度保持原始設計',
                  features: '符合介面的設計、準確的顏色、清晰的字型'
                },
                reliableFont: {
                  name: '可靠字型',
                  description: '專注於文字清晰度和可讀性',
                  features: '最佳化字型、快速效能、較小檔案大小'
                },
                textBased: {
                  name: '基於文字',
                  subtitle: '可搜尋和可複製的文字',
                  description: '產生純文字、可搜尋的PDF',
                  features: '可搜尋文字、小尺寸、高相容性'
                }
              }
            },
            exportOptions: {
              title: '匯出選項',
              options: {
                summary: {
                  name: '包含摘要',
                  description: '新增結果和評估摘要',
                  formats: '在所有格式中可用'
                },
                guides: {
                  name: '包含指南',
                  description: '為每個元素新增詳細指南',
                  formats: '在PDF和HTML中可用'
                },
                notes: {
                  name: '包含備註',
                  description: '新增您的個人備註',
                  formats: '在所有格式中可用'
                },
                sectionBreaks: {
                  name: '區段分隔',
                  description: '為區段新增單獨頁面',
                  formats: '僅在PDF中可用'
                }
              }
            },
            exportNote: '請記住：所有匯出都在您的裝置上本地進行，無需資料傳輸'
          },
          historyManagement: {
            title: '歷史記錄管理',
            content: '應用程式自動儲存最近5次評估，並允許您存取和管理'
          },
          pwaSupport: {
            title: 'PWA支援',
            content: '應用程式可以安裝在裝置上並完全離線運作'
          }
        }
      },
      privacy: {
        title: '隱私和安全',
        emoji: '🔒',
        description: '我們如何保護您的隱私和資料',
        content: '我們致力於透過隱私優先設計保護您的隱私。',
        subSections: {
          localStorage: {
            title: '本地儲存',
            content: '您的所有資料都在瀏覽器中本地儲存，永遠不會離開您的裝置'
          },
          security: {
            title: '安全性',
            content: '沒有外部連線或使用者追蹤'
          },
          dataDeletion: {
            title: '資料刪除',
            content: '您可以透過清除瀏覽器資料隨時刪除所有資料'
          }
        }
      },
      troubleshooting: {
        title: '疑難排解',
        emoji: '🔧',
        description: '常見問題的解決方案',
        content: '如果您遇到問題，請嘗試這些常見解決方案。',
        subSections: {
          dataNotSaved: {
            title: '資料未儲存',
            content: '確保瀏覽器中已啟用本地儲存且瀏覽器為最新版本'
          },
          scoreNotDisplayed: {
            title: '分數未顯示',
            content: '確保您已完成所有必需元素的評估'
          },
          exportFailed: {
            title: '匯出失敗',
            content: '確保瀏覽器中允許下載且有足夠空間'
          },
          otherIssues: {
            title: '其他問題',
            content: '嘗試重新整理頁面或清除瀏覽器快取'
          }
        }
      }
    }
  },

  // 無障礙
  accessibility: {
    skipToContent: '跳至內容',
    mainNavigation: '主要導航',
    searchForm: '搜尋表單',
    languageSelector: '語言選擇器',
    themeToggle: '主題切換',
    closeDialog: '關閉對話框',
    openMenu: '開啟選單',
    expandSection: '展開部分',
    collapseSection: '收合部分'
  },

  // 日期與時間
  datetime: {
    justNow: '剛剛',
    minutesAgo: '分鐘前',
    hoursAgo: '小時前',
    daysAgo: '天前',
    weeksAgo: '週前',
    monthsAgo: '月前',
    yearsAgo: '年前',
    createdAt: '建立於',
    updatedAt: '更新於',
    completedAt: '完成於'
  },

  // 單位與數字
  units: {
    items: '項目',
    percent: '%',
    score: '分數',
    total: '總計',
    completed: '已完成',
    remaining: '剩餘',
    of: '/'
  },

  // 隱私政策
  privacy: {
    title: '隱私政策',
    subtitle: '我們保護您隱私的承諾',
    lastUpdated: '最後更新：2025年1月1日',
    introduction: {
      title: '隱私優先的設計',
      content:
        '事實查核清單以隱私為核心原則設計。所有資料處理都在您的裝置本地進行，無伺服器通訊或資料收集。'
    },
    dataCollection: {
      title: '資料收集',
      description: '我們不收集任何個人資料或使用統計。',
      details: [
        '無伺服器通訊 - 所有處理都在本地進行',
        '未安裝追蹤Cookie或統計分析',
        '未收集個人資訊',
        '未傳輸使用資料'
      ]
    },
    localStorage: {
      title: '本地儲存使用',
      description: '資料僅儲存在您的瀏覽器中以供應用程式功能使用。',
      details: [
        '評估資料儲存在瀏覽器的localStorage中',
        '語言偏好設定本地儲存',
        '無雲端同步或備份',
        '資料僅保留在您的裝置上'
      ]
    },
    offlineFunctionality: {
      title: '離線功能',
      description: '應用程式完全離線運作，無任何網路請求。',
      details: [
        '具有service worker的漸進式網頁應用程式',
        '所有資源本地快取',
        '無外部API調用或資料擷取',
        '無網際網路連線下的完整功能'
      ]
    },
    securityMeasures: {
      title: '安全措施',
      description: '內建安全措施保護您的資料和隱私。',
      details: ['實施內容安全政策(CSP)', '無第三方腳本或追蹤', '遵循安全編碼實務', '定期安全更新']
    },
    dataRetention: {
      title: '資料保留',
      description: '您對資料保留擁有完全控制權。',
      details: [
        '資料僅在您保留期間持續存在',
        '透過瀏覽器設定輕鬆刪除',
        '無資料自動過期',
        '資料移除的明確說明'
      ]
    },
    policyUpdates: {
      title: '政策更新',
      description: '此隱私政策的任何變更都會清楚傳達。',
      details: ['在GitHub儲存庫宣布更新', '維護版本歷史', '重大變更的明確通知', '繼續使用表示接受']
    },
    contact: {
      title: '聯絡資訊',
      content: '如果您對此隱私政策有疑問，請透過 ',
      githubText: 'GitHub Issues',
      suffix: ' 聯繫我們。'
    }
  },

  // 關於應用程式
  about: {
    title: '關於應用程式',
    subtitle: '了解我們的綜合事實查核系統',
    hero: {
      title: '實用事實查核檢核表',
      subtitle: '一個用於科學和系統性評估資訊可信度的漸進式網頁應用程式（PWA）',
      description: [
        '在充斥著錯誤資訊和誤導性內容的時代，這個實用工具支援提升資訊素養。',
        '透過檢查4個類別中的20個項目，它量化資訊可信度並支援客觀判斷。'
      ],
      startButton: '立即開始'
    },
    sections: {
      features: '功能特色',
      howItWorks: '運作方式',
      categories: '評估類別',
      techStack: '技術',
      performance: '效能'
    },
    sectionDescriptions: {
      howItWorks: '透過4個簡單步驟評估資訊可信度',
      categories: '透過4個類別進行多面向資訊評估',
      techStack: '以尖端技術打造的高效能應用程式',
      performance: '來自 Lighthouse 稽核的高品質分數'
    },
    stats: {
      performance: '效能',
      accessibility: '無障礙',
      bestPractices: '最佳實務',
      seo: 'SEO'
    },
    cta: {
      title: '立即開始',
      description: '準備好科學且系統化地評估資訊可信度了嗎？',
      startButton: '開始評估',
      helpButton: '了解更多'
    },
    features: {
      privacy: {
        title: '隱私優先',
        description: '所有資料都保留在您的裝置上，無追蹤或資料收集',
        details: [
          '無伺服器通訊 - 所有處理都在本地完成',
          '未安裝追蹤或分析工具',
          '所有資料僅儲存在瀏覽器的localStorage中',
          '確保完整的隱私保護'
        ]
      },
      offline: {
        title: '離線功能',
        description: '作為漸進式網頁應用程式完全離線運作',
        details: [
          '無網際網路連線下可使用完整功能',
          '可安裝為桌面/行動應用程式',
          'Service worker提供離線快取',
          '快速啟動和響應式效能'
        ]
      },
      scientific: {
        title: '科學方法論',
        description: '遵循學術標準的循證評估系統',
        details: [
          '跨4個類別的20項結構化檢查清單',
          '具信心水準的量化評分',
          '基於新聞學和學術研究標準',
          '客觀且可重現的評估過程'
        ]
      },
      export: {
        title: '多格式匯出',
        description: '以各種格式匯出評估結果以供分享和存檔',
        details: [
          '支援中文字型的PDF匯出',
          '用於網頁分享的HTML格式',
          '用於資料交換的JSON',
          '用於文件的Markdown'
        ]
      },
      history: {
        title: '評估歷史',
        description: '自動儲存和管理過往評估',
        details: ['自動儲存已完成的評估', '快速存取最近的評估', '比較分析功能', '歷史資料匯出']
      },
      support: {
        title: '無障礙支援',
        description: '設計為通用存取和可用性',
        details: [
          '螢幕閱讀器相容性',
          '鍵盤導航支援',
          '提供高對比模式',
          '適用於所有裝置的響應式設計'
        ]
      }
    },
    steps: {
      step1: {
        title: '輸入資訊',
        description: '輸入要評估的資訊標題和概述'
      },
      step2: {
        title: '系統化評估',
        description: '透過4個類別的20項檢查清單進行評估'
      },
      step3: {
        title: '分數評估',
        description: '檢視自動計算的可靠性分數和信心水準'
      },
      step4: {
        title: '最終判定',
        description: '做出最終決定並根據需要匯出結果'
      }
    },
    categories: {
      critical: {
        name: '關鍵評估',
        description: '基本可靠性評估的關鍵項目',
        items: 6
      },
      detailed: {
        name: '詳細評估',
        description: '深度品質和專業性評估',
        items: 5
      },
      verification: {
        name: '驗證與交叉檢查',
        description: '驗證和支持證據評估',
        items: 5
      },
      context: {
        name: '脈絡與偏見',
        description: '脈絡適當性和偏見評估',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: '具有runes的最新反應式框架，提供最佳效能'
      },
      framework: {
        name: 'SvelteKit',
        description: '具有靜態生成支援的全端框架'
      },
      language: {
        name: 'TypeScript',
        description: '具有嚴格配置的型別安全開發'
      },
      styling: {
        name: '自訂CSS',
        description: '具有CSS自訂屬性和深色模式的現代樣式'
      },
      pwa: {
        name: '漸進式網頁應用程式',
        description: '具有離線功能的可安裝應用程式'
      },
      export: {
        name: '多格式匯出',
        description: 'PDF、HTML、JSON、Markdown匯出功能'
      }
    }
  },

  // 表單相關
  forms: {
    titleLabel: '標題',
    titlePlaceholder: '請輸入要評估的資訊或來源的標題',
    descriptionLabel: '目標資訊概述',
    descriptionPlaceholder: '請簡要描述要評估的資訊內容',
    notesLabel: '評估筆記與額外驗證項目',
    notesPlaceholder: '記錄任何疑問、需要驗證的項目、整體印象等...'
  },

  // UI 文字
  ui: {
    quickStartGuide: '💡 使用此指南快速開始！',
    guideModeDetailed: '🔍 詳細指南模式',
    guideModeNormal: '📝 一般模式',
    completeEvaluation: '完成評估'
  },

  // 檢查清單項目 - 繁體中文翻譯
  checklistItems: {
    'source-authority': {
      title: '權威來源發布',
      description: '政府機關、學術機構、專業組織、同儕評議論文、可靠媒體等',
      guideTitle: '🏛️ 權威來源的判斷標準',
      guideContent:
        '政府/公共機構：各部會、統計局、央行、法院等。學術機構：大學、研究所、智庫等。專業組織：醫學會、工程師學會等。媒體：具有新聞專業標準的媒體機構。',
      examplesGood: ['衛生福利部統計資料', '自然期刊同儕評議論文', '台灣大學研究報告'],
      examplesBad: ['個人部落格資訊', '匿名論壇發文', '來路不明的網路文章']
    },
    'source-primary': {
      title: '第一手來源確認',
      description: '來自源頭的直接資訊，非道聽塗說或轉述報導',
      guideTitle: '🎯 如何識別第一手來源',
      guideContent:
        '第一手來源：作者本人發表的研究論文、當事人的證詞、官方正式公告、親眼目擊的報告、實驗數據的原始記錄等。',
      examplesGood: ['研究者本人發表的論文', '公司財報公告', '政府部門正式聲明'],
      examplesBad: ['據專家表示', '某項調查顯示（無明確出處）', '網路傳言']
    },
    'source-multiple': {
      title: '多重獨立來源',
      description: '不同立場/組織的類似報導或確認',
      guideTitle: '🔄 如何確認來源獨立性',
      guideContent:
        '獨立來源：不同組織、不同資金來源、不同利益關係的消息來源。檢查是否存在共同的資金來源或利益關係。',
      examplesGood: ['政府公告 + 學術研究 + 多家媒體報導', '不同國家的研究機構得出相似結論'],
      examplesBad: ['同一企業集團內的多家媒體', '引用相同單一來源的多篇報導']
    },
    'warning-anonymous': {
      title: '非匿名或無來源資訊',
      description: '創作者/發布者可以清楚識別',
      guideTitle: '🔍 來源識別的重點',
      guideContent:
        '必要資訊：創作者真實姓名、所屬機構、聯絡方式、專業背景。如果是機構發布，需要明確的機構名稱和負責人資訊。',
      examplesGood: ['台大醫學院X教授表示', '中研院Y研究員發表', '衛福部疾管署聲明'],
      examplesBad: ['某位醫師表示', '匿名專家', '據了解', '有消息指出']
    },
    'warning-sensational': {
      title: '少煽動性或誇大表達',
      description: '冷靜客觀的描述，無過度情緒化訴求',
      guideTitle: '⚠️ 如何識別煽動性表達',
      guideContent:
        '警示用詞：絕對、完全、震驚、驚人、史上最強、神奇、立即見效等。客觀表達應該使用：研究顯示、數據表明、證據支持等中性詞彙。',
      examplesGood: ['研究顯示75%的受試者有改善', '統計資料顯示相關性', '根據臨床試驗結果'],
      examplesBad: ['醫生絕不告訴你的驚人真相！', '史上最強效果！', '震撼醫界的發現！']
    },
    'warning-logical': {
      title: '無邏輯矛盾',
      description: '內容前後一致，無明顯邏輯跳躍',
      guideTitle: '🧠 如何檢查邏輯一致性',
      guideContent:
        '檢查前提與結論是否合理連接、是否存在邏輯謬誤、因果關係是否成立、推論過程是否合理。常見謬誤：相關性不等於因果性。',
      examplesGood: ['考慮其他因素的統計顯著性分析', '控制變因的對照實驗', '多角度驗證的結論'],
      examplesBad: ['A和B同時發生所以A導致B', '少數案例推廣到全體', '忽略其他可能因素']
    },
    'time-recent': {
      title: '資訊時效性',
      description: '發布日期明確，內容保持適當的新鮮度',
      guideTitle: '⏰ 判斷適當的資訊時效性',
      guideContent:
        '不同領域的時效性標準：醫學資訊5年內、科技資訊2年內、法規資訊需最新版本、統計數據需最近期。確認更新頻率是否合適。',
      examplesGood: ['2024年12月發布', '最後更新：2025年1月', '定期更新的統計資料'],
      examplesBad: ['無日期標示', '5年前的技術資訊', '過時的法規資訊']
    },
    'time-update': {
      title: '更新與修正紀錄',
      description: '內容必要時會更新，修正透明化',
      guideTitle: '📝 檢查透明的更新與修正',
      guideContent:
        '良好的更新特徵：明確說明更新內容、修正原因、更新時間。錯誤修正應該保留原始內容並標明修正部分。',
      examplesGood: ['清楚的修正紀錄', '標明更新內容與時間', '保留修正軌跡'],
      examplesBad: ['無修正紀錄', '悄悄修改內容', '刪除錯誤內容而非修正']
    },
    'expert-knowledge': {
      title: '適當的專業性',
      description: '創作者在相關領域具有足夠的知識/經驗',
      guideTitle: '🎓 如何確認專業性',
      guideContent:
        '檢查項目：相關領域的學位/資格、實務經驗、發表紀錄、同儕認可、專業機構認證。跨領域發言需要特別謹慎評估。',
      examplesGood: ['感染科專家說明疫苗', '經濟學者分析金融政策', '工程師解釋技術問題'],
      examplesBad: ['藝人發表醫學見解', '非專業人士的技術建議', '跨領域過度延伸']
    },
    'detail-sufficient': {
      title: '充分的細節與證據',
      description: '導致結論的過程和支持證據都有適當說明',
      guideTitle: '📋 判斷證據充分性',
      guideContent:
        '必要元素：支持主張的具體數據、研究方法說明、樣本大小、統計方法、信賴區間、潛在限制等。避免只有結論沒有過程。',
      examplesGood: ['包含樣本數、統計方法、信賴區間', '詳細的實驗設計說明', '完整的數據分析'],
      examplesBad: ['僅說明已證實效果但無細節', '模糊的研究描述', '缺乏支持數據']
    },
    'citation-proper': {
      title: '適當的引用與參考',
      description: '重要主張都有顯示可靠來源',
      guideTitle: '📚 適當引用的標準',
      guideContent:
        '需要引用的內容：統計數據/數字、研究發現、專家意見、歷史事件、法規條文等。引用格式應包含：作者、標題、出版年份、頁碼等。',
      examplesGood: ['附有適當引用的研究', '完整的參考文獻列表', '可追溯的資料來源'],
      examplesBad: ['據研究顯示（來源不明）', '無參考文獻', '引用格式不完整']
    },
    'citation-accessible': {
      title: '引用來源的可查證性',
      description: '所引用的來源實際上可以取得和查證',
      guideTitle: '🌐 檢查引用可及性',
      guideContent:
        '理想狀態：直接連結或DOI、公開可取得的資料、圖書館可查閱的資源。避免：內部資料、付費牆後的資源（除非有替代來源）。',
      examplesGood: ['附有網址連結', '具DOI編號的論文', '公開資料庫的資料'],
      examplesBad: ['據內部資料', '無法取得的私人文件', '失效的網址連結']
    },
    'cross-check': {
      title: '與其他來源交叉比對',
      description: '類似內容可以由多個獨立來源確認',
      guideTitle: '🔍 有效交叉比對的方法',
      guideContent:
        '逐步驗證流程：1.識別關鍵主張 2.尋找獨立來源 3.比較不同來源的描述 4.檢查是否存在矛盾 5.評估一致性程度。',
      examplesGood: ['多篇同儕評議論文的相似結果', '不同機構的統計資料相符', '多重驗證的事實'],
      examplesBad: ['僅有單一來源', '所有來源都引用同一原始資料', '缺乏其他佐證']
    },
    'fact-check': {
      title: '事實查核機構驗證',
      description: '有可靠的事實查核機構進行過驗證',
      guideTitle: '✅ 可靠的事實查核機構',
      guideContent:
        '國際組織：Snopes、PolitiFact、AFP事實查核。台灣機構：台灣事實查核中心、MyGoPen、蘭姆酒吐司等。檢查查核機構的可信度和查核方法。',
      examplesGood: ['多家事實查核機構判定為真', '經台灣事實查核中心驗證', '國際查核組織確認'],
      examplesBad: ['被事實查核判定為錯誤資訊', '無任何查核驗證', '被多個機構標記為假消息']
    },
    'data-verifiable': {
      title: '數據可驗證性',
      description: '支持主張的數據可以客觀查證',
      guideTitle: '📈 檢查數據可驗證性',
      guideContent:
        '驗證要素：數據來源、收集方法、樣本代表性、統計處理過程、原始數據可及性。政府統計資料通常最可靠。',
      examplesGood: ['政府統計資料', '公開的研究數據', '可重現的分析結果'],
      examplesBad: ['僅有內部資料', '無法重現的結果', '來源不明的數字']
    },
    methodology: {
      title: '方法/方法論的有效性',
      description: '研究或調查方法論適當且可重現',
      guideTitle: '🔬 評估方法論有效性',
      guideContent:
        '評估要點：研究設計適當性、樣本選擇合理性、控制組設置、統計方法正確性、偏誤控制、結果可重現性等。',
      examplesGood: ['雙盲試驗', '適當的控制組設置', '隨機抽樣', '標準化程序'],
      examplesBad: ['無方法論說明', '有偏誤的樣本選擇', '缺乏控制組', '方法不當的研究']
    },
    'bias-disclosure': {
      title: '利益衝突揭露',
      description: '金錢、政治、個人利益等都有適當揭露',
      guideTitle: '💰 利益衝突檢查項目',
      guideContent:
        '需揭露的利益：研究資金來源、商業關係、政治立場、個人利益、競爭關係等。學術界和新聞界都有相關揭露標準。',
      examplesGood: ['明確聲明COI', '揭露資金來源', '說明利益關係'],
      examplesBad: ['無COI揭露', '隱藏資金來源', '未說明利益關係']
    },
    'balanced-view': {
      title: '平衡觀點',
      description: '不同立場和反對觀點也有考慮',
      guideTitle: '⚖️ 平衡性評估的角度',
      guideContent:
        '檢查要點：反對/批評觀點的介紹、不同立場的呈現、爭議點的說明、限制與不確定性的承認。避免只呈現支持證據。',
      examplesGood: ['多項研究結果比較', '呈現不同觀點', '承認研究限制'],
      examplesBad: ['只列舉支持證據', '忽略反對意見', '單一觀點呈現']
    },
    'context-adequate': {
      title: '充分的背景資訊',
      description: '理解資訊所需的背景和脈絡都有提供',
      guideTitle: '🌍 背景資訊檢查項目',
      guideContent:
        '必要背景資訊：歷史背景/過往研究、相關法規/政策、社會脈絡、技術背景、比較基準等。幫助讀者完整理解資訊意涵。',
      examplesGood: ['過往類似案例', '歷史背景說明', '政策脈絡介紹'],
      examplesBad: ['僅有單一數字', '無背景資訊', '脫離脈絡的資訊']
    },
    'scope-clear': {
      title: '適用範圍明確',
      description: '資訊的適用範圍和限制都有清楚說明',
      guideTitle: '🎯 適用範圍的澄清',
      guideContent:
        '需澄清的範圍：目標人群/地區/時期、適用條件、限制條件、例外情況等。避免過度概括化有限的研究結果。',
      examplesGood: ['明確的限制說明', '適用條件清楚', '範圍界定明確'],
      examplesBad: ['有限研究結果的無限概括', '適用範圍不明', '忽略限制條件']
    }
  }
};

export default translations;
