/**
 * Hindi translation file template
 * Hindi (hi) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
  language: 'hi' as const,
  version: '1.0.0',
  lastUpdated: '2025-01-30',
  translator: 'Claude AI (Anthropic)',
  completeness: 100
};

// Hindi translations - template structure with basic translations
export const translations: TranslationKeys = {
  common: {
    loading: 'लोड हो रहा है...',
    error: 'एक त्रुटि हुई',
    success: 'सफल',
    cancel: 'रद्द करें',
    save: 'सेव करें',
    delete: 'डिलीट करें',
    edit: 'संपादित करें',
    close: 'बंद करें',
    back: 'वापस',
    next: 'अगला',
    previous: 'पिछला',
    search: 'खोजें',
    clear: 'साफ़ करें',
    reset: 'रीसेट करें',
    copy: 'कॉपी करें',
    download: 'डाउनलोड करें',
    share: 'साझा करें',
    print: 'प्रिंट करें',
    export: 'निर्यात करें',
    import: 'आयात करें',
    settings: 'सेटिंग्स',
    help: 'सहायता',
    about: 'के बारे में',
    privacy: 'गोपनीयता',
    terms: 'नियम',
    home: 'होम',
    menu: 'मेन्यू',
    languages: 'भाषाएं',
    darkMode: 'डार्क मोड',
    lightMode: 'लाइट मोड',
    systemMode: 'सिस्टम',
    guide: 'गाइड',
    showGuide: 'गाइड दिखाएं',
    rip: {
      high: 'उच्च जोखिम',
      medium: 'मध्यम जोखिम',
      low: 'कम जोखिम'
    }
  },
  app: {
    title: 'व्यावहारिक तथ्य-जांच चेकलिस्ट',
    subtitle: 'जानकारी की विश्वसनीयता का वैज्ञानिक मूल्यांकन के लिए एक व्यापक प्रणाली',
    description: 'जानकारी की विश्वसनीयता का वैज्ञानिक और व्यवस्थित मूल्यांकन के लिए एक चेकलिस्ट',
    version: '1.0.0',
    author: 'तथ्य-जांच चेकलिस्ट टीम',
    copyright: '© 2025 तथ्य-जांच चेकलिस्ट टीम',
    poweredBy: 'द्वारा संचालित'
  },
  navigation: {
    home: 'होम',
    about: 'के बारे में',
    help: 'सहायता और उपयोग',
    privacy: 'गोपनीयता',
    checklist: 'चेकलिस्ट',
    history: 'इतिहास',
    settings: 'सेटिंग्स'
  },
  checklist: {
    title: 'चेकलिस्ट जानकारी',
    description: 'चेकलिस्ट विवरण',
    newChecklist: 'नई चेकलिस्ट',
    createChecklist: 'चेकलिस्ट बनाएं',
    editChecklist: 'चेकलिस्ट संपादित करें',
    deleteChecklist: 'चेकलिस्ट हटाएं',
    completeChecklist: 'मूल्यांकन पूरा करें',
    checklistTitle: 'शीर्षक',
    checklistDescription: 'लक्षित जानकारी का अवलोकन',
    targetInfo: 'लक्षित जानकारी',
    targetInfoPlaceholder: 'उदाहरण: COVID-19 वैक्सीन की प्रभावशीलता पर लेख',
    evaluationNotes: 'मूल्यांकन नोट्स और अतिरिक्त सत्यापन आइटम',
    evaluationNotesPlaceholder:
      'कोई भी प्रश्न, सत्यापन के लिए आइटम, सामान्य छाप आदि रिकॉर्ड करें...',
    score: 'मूल्यांकन स्कोर',
    confidenceLevel: 'विश्वास स्तर',
    finalJudgment: 'अंतिम निर्णय',
    completed: 'पूर्ण',
    judgment: {
      accept: 'स्वीकार करें',
      caution: 'सावधानी',
      reject: 'अस्वीकार करें',
      pending: 'लंबित'
    },
    judgmentAdvice: {
      accept: 'अपनाने की सिफारिश की जाती है। पर्याप्त सत्यापन किया गया है।',
      caution: 'अतिरिक्त सत्यापन की सिफारिश की जाती है। महत्वपूर्ण निर्णयों के साथ सावधान रहें।',
      reject: 'अस्वीकार करने की सिफारिश की जाती है। अधिक विश्वसनीय स्रोत खोजें।'
    },
    confidence: {
      high: 'उच्च विश्वसनीयता',
      medium: 'मध्यम विश्वसनीयता',
      low: 'कम विश्वसनीयता',
      poor: 'विश्वसनीयता संबंधी समस्याएं'
    },
    advice: {
      high: 'अपनाने की सिफारिश की जाती है। पर्याप्त सत्यापन किया गया है।',
      medium: 'अतिरिक्त पुष्टि की सिफारिश की जाती है। महत्वपूर्ण निर्णयों में सावधानी बरतें।',
      low: 'सावधानी आवश्यक है। अधिक सत्यापन की आवश्यकता है।',
      poor: 'अस्वीकार करने की सिफारिश की जाती है। विश्वसनीय जानकारी स्रोत खोजें।'
    },
    evaluationCompleted: '✓ मूल्यांकन पूर्ण!',
    evaluationCompletedDescription: 'आप चेकलिस्ट मूल्यांकन के परिणामों की समीक्षा कर सकते हैं।',
    evaluationResults: 'मूल्यांकन परिणाम',
    totalScore: 'कुल स्कोर',
    itemsDetail: 'विस्तृत तत्व',
    recommendedActions: 'सुझाई गई कार्रवाईयां',
    improvementTips: 'विश्वसनीयता बढ़ाने के लिए',
    checkUncheckedItems: 'अंचेकित तत्वों की जांच करें',
    additionalSourceResearch: 'अतिरिक्त स्रोत अनुसंधान',
    expertConsultation: 'विशेषज्ञ परामर्श',
    factCheckOrganizations: 'तथ्य-जांच संगठनों का उपयोग',
    statistics: 'आंकड़े',
    checkedItems: 'जांचित',
    uncheckedItems: 'असाख्यांकित',
    completionRate: 'पूर्णता दर',
    actions: 'कार्रवाईयां',
    exportShare: 'निर्यात और साझा करें',
    reEdit: 'पुन: संपादित करें'
  },
  categories: {
    critical: {
      name: 'महत्वपूर्ण मूल्यांकन (आवश्यक)',
      description: 'बुनियादी जानकारी विश्वसनीयता निर्धारित करने के लिए सबसे महत्वपूर्ण आइटम',
      emoji: '🚨'
    },
    detailed: {
      name: 'विस्तृत मूल्यांकन (महत्वपूर्ण)',
      description: 'जानकारी की गुणवत्ता और विशेषज्ञता का मूल्यांकन करने के लिए आइटम',
      emoji: '📝'
    },
    verification: {
      name: 'सत्यापन और क्रॉस-चेकिंग',
      description: 'जानकारी की सत्यापनीयता और समर्थन की पुष्टि के लिए आइटम',
      emoji: '🔍'
    },
    context: {
      name: 'संदर्भ और पूर्वाग्रह मूल्यांकन',
      description: 'पूर्वाग्रह की उपयुक्तता और संदर्भ का मूल्यांकन करने के लिए आइटम',
      emoji: '🌐'
    }
  },
  export: {
    title: 'निर्यात करें',
    description: 'चेकलिस्ट को विभिन्न प्रारूपों में निर्यात करें',
    format: 'प्रारूप',
    options: 'विकल्प',
    includeGuides: 'गाइड शामिल करें',
    includeNotes: 'नोट्स शामिल करें',
    includeSummary: 'सारांश शामिल करें',
    sectionBreaks: 'सेक्शन ब्रेक',
    pdfModes: {
      pixelPerfect: 'पिक्सेल परफेक्ट',
      reliableFont: 'फ़ॉन्ट विश्वसनीयता फोकस',
      textBased: 'टेक्स्ट आधारित'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      initializing: 'प्रारंभ हो रहा है...',
      generating: 'जेनरेट हो रहा है...',
      processing: 'प्रोसेसिंग...',
      finalizing: 'अंतिम रूप दे रहा है...',
      completed: 'पूर्ण',
      failed: 'असफल'
    },
    generatedAt: 'पर उत्पन्न',
    summaryTable: {
      item: 'आइटम',
      value: 'मूल्य'
    },
    table: {
      section: 'खंड',
      completionRate: 'पूर्णता दर',
      completedItems: 'पूर्ण आइटम'
    },
    sectionCompletionRates: 'खंड पूर्णता दरें',
    achievementStatus: 'उपलब्धि स्थिति',
    goodExamples: 'अच्छे उदाहरण',
    badExamples: 'बुरे उदाहरण'
  },
  history: {
    title: 'मूल्यांकन इतिहास',
    description: 'पिछले मूल्यांकन परिणाम',
    empty: 'कोई इतिहास उपलब्ध नहीं',
    lastEvaluated: 'अंतिम मूल्यांकन',
    viewResults: 'परिणाम देखें',
    deleteHistory: 'इतिहास हटाएं',
    clearAll: 'सभी साफ़ करें',
    recent: 'हाल के मूल्यांकन',
    viewAll: 'सभी दिखाएं',
    createFirst: 'आइए अपनी पहली चेकलिस्ट बनाते हैं!'
  },
  errors: {
    general: 'एक अप्रत्याशित त्रुटि हुई',
    network: 'एक नेटवर्क त्रुटि हुई',
    storage: 'एक स्टोरेज त्रुटि हुई',
    export: 'निर्यात असफल',
    import: 'आयात असफल',
    invalidData: 'अवैध डेटा',
    unsupportedFeature: 'असमर्थित सुविधा',
    permissionDenied: 'अनुमति अस्वीकृत',
    fileNotFound: 'फ़ाइल नहीं मिली',
    fileTooLarge: 'फ़ाइल बहुत बड़ी',
    invalidFileFormat: 'अवैध फ़ाइल प्रारूप'
  },
  success: {
    saved: 'सेव किया गया',
    exported: 'निर्यात किया गया',
    imported: 'आयात किया गया',
    deleted: 'हटाया गया',
    copied: 'कॉपी किया गया',
    shared: 'साझा किया गया'
  },
  confirmations: {
    delete: 'क्या आप वाकई हटाना चाहते हैं?',
    reset: 'रीसेट करें?',
    clearHistory: 'सभी इतिहास साफ़ करें?',
    overwrite: 'अधिलेखित करें?',
    discard: 'परिवर्तन छोड़ें?'
  },
  help: {
    title: 'सहायता और उपयोग',
    subtitle: 'तथ्य जांच चेकलिस्ट के उपयोग के लिए विस्तृत गाइड',
    tableOfContents: 'विषय सूची',
    navigation: {
      overview: 'अवलोकन',
      usage: 'उपयोग',
      categories: 'श्रेणियां',
      scoring: 'स्कोरिंग',
      features: 'विशेषताएं',
      privacy: 'गोपनीयता',
      troubleshooting: 'समस्या निवारण'
    },
    sections: {
      overview: {
        title: 'ऐप अवलोकन',
        emoji: '📋',
        description: 'तथ्य जांच चेकलिस्ट का बुनियादी उपयोग',
        content:
          'यह ऐप इंटरनेट पर जानकारी की विश्वसनीयता का वैज्ञानिक और व्यवस्थित मूल्यांकन करने का एक उपकरण है।',
        subSections: {
          features: {
            title: 'मुख्य विशेषताएं',
            content:
              '• पूर्ण गोपनीयता: सभी डेटा स्थानीय रूप से संग्रहीत\n• ऑफलाइन कार्य\n• वैज्ञानिक मूल्यांकन\n• इतिहास प्रबंधन'
          },
          targetUsers: {
            title: 'लक्षित उपयोगकर्ता',
            content:
              'पत्रकार, शोधकर्ता, छात्र और जानकारी की विश्वसनीयता का मूल्यांकन करने में रुचि रखने वाले सभी लोग'
          }
        }
      },
      usage: {
        title: 'उपयोग',
        emoji: '🔍',
        description: 'ऐप उपयोग के लिए चरणबद्ध गाइड',
        content: 'जानकारी की विश्वसनीयता का व्यवस्थित मूल्यांकन करने के लिए इन चरणों का पालन करें।',
        subSections: {
          step1: {
            title: 'चरण 1: जानकारी दर्ज करें',
            content: 'मूल्यांकन करने वाली जानकारी का शीर्षक और विवरण दर्ज करें'
          },
          step2: {
            title: 'चरण 2: तत्वों का मूल्यांकन करें',
            content: 'उपलब्ध साक्ष्य के आधार पर सूची के प्रत्येक तत्व का मूल्यांकन करें'
          },
          step3: {
            title: 'चरण 3: परिणाम की समीक्षा करें',
            content: 'गणना किए गए परिणाम और विश्वास स्तर की समीक्षा करें'
          },
          step4: {
            title: 'चरण 4: अंतिम निर्णय',
            content: 'मूल्यांकन के आधार पर अपना अंतिम निर्णय लें: स्वीकार, सावधानी या अस्वीकार'
          }
        }
      },
      categories: {
        title: 'मूल्यांकन श्रेणियां',
        emoji: '📊',
        description: 'मूल्यांकन की चार मुख्य श्रेणियां',
        content:
          'व्यापक मूल्यांकन सुनिश्चित करने के लिए मूल्यांकन तत्व चार मुख्य श्रेणियों में व्यवस्थित हैं।',
        subSections: {
          critical: {
            title: 'महत्वपूर्ण मूल्यांकन',
            content: 'जानकारी की बुनियादी विश्वसनीयता निर्धारित करने के लिए सबसे महत्वपूर्ण तत्व'
          },
          detailed: {
            title: 'विस्तृत मूल्यांकन',
            content: 'जानकारी की गुणवत्ता और विशेषज्ञता का मूल्यांकन करने के लिए तत्व'
          },
          verification: {
            title: 'सत्यापन और क्रॉस-चेकिंग',
            content: 'जानकारी की सत्यापनता और समर्थन की पुष्टि करने के लिए तत्व'
          },
          context: {
            title: 'संदर्भ और पूर्वाग्रह मूल्यांकन',
            content: 'पूर्वाग्रह और संदर्भ की उपयुक्तता का मूल्यांकन करने के लिए तत्व'
          }
        }
      },
      scoring: {
        title: 'स्कोरिंग सिस्टम',
        emoji: '🎯',
        description: 'स्कोर और विश्वास स्तर की गणना कैसे की जाती है',
        content:
          'स्कोर की गणना कुल तत्वों में से पूर्ण किए गए तत्वों की संख्या के आधार पर की जाती है।',
        subSections: {
          calculation: {
            title: 'गणना विधि',
            content: 'स्कोर = (पूर्ण किए गए तत्वों की संख्या / कुल तत्व) × 100'
          },
          criteria: {
            title: 'मूल्यांकन मानदंड',
            content:
              '• 80%+: उच्च विश्वसनीयता\n• 60-79%: मध्यम विश्वसनीयता\n• 40-59%: कम विश्वसनीयता\n• <40%: विश्वसनीयता समस्याएं'
          },
          finalJudgment: {
            title: 'अंतिम निर्णय',
            content:
              'स्कोर को गाइड के रूप में उपयोग करें, लेकिन अंतिम निर्णय आपके व्यक्तिगत निर्णय पर निर्भर करता है'
          }
        }
      },
      features: {
        title: 'विशेषताएं',
        emoji: '⭐',
        description: 'ऐप की उन्नत विशेषताएं',
        content: 'ऐप उपयोगकर्ता अनुभव में सुधार के लिए कई उन्नत विशेषताएं प्रदान करता है।',
        subSections: {
          detailedGuide: {
            title: 'विस्तृत गाइड',
            content:
              'प्रत्येक मूल्यांकन तत्व में आपके मूल्यांकन में सहायता के लिए विस्तृत गाइड और व्यावहारिक उदाहरण शामिल हैं'
          },
          exportFunction: {
            title: 'एक्सपोर्ट फंक्शन',
            content:
              'आप मूल्यांकन परिणाम को कई प्रारूपों में एक्सपोर्ट कर सकते हैं (PDF, HTML, JSON, Markdown)',
            exportFormats: {
              title: 'एक्सपोर्ट प्रारूप',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: 'प्रिंट और साझा करने के लिए पेशेवर प्रारूप',
                  usage: 'आधिकारिक रिपोर्ट और संग्रह के लिए उपयुक्त'
                },
                html: {
                  name: 'HTML',
                  features: 'ब्राउज़र में इंटरैक्टिव प्रदर्शन',
                  usage: 'वेब पर साझा करने के लिए उपयुक्त'
                },
                json: {
                  name: 'JSON',
                  features: 'संरचित डेटा प्रारूप',
                  usage: 'स्वचालित विश्लेषण और आयात के लिए उपयुक्त'
                },
                markdown: {
                  name: 'Markdown',
                  features: 'लचीला पाठ प्रारूप',
                  usage: 'ब्लॉग और दस्तावेज़ीकरण के लिए उपयुक्त'
                }
              }
            },
            pdfModes: {
              title: 'PDF मोड',
              modes: {
                pixelPerfect: {
                  name: 'पिक्सेल परफेक्ट',
                  subtitle: 'सर्वोत्तम दृश्य गुणवत्ता',
                  description: 'उच्च सटीकता के साथ मूल डिज़ाइन बनाए रखता है',
                  features: 'इंटरफ़ेस-अनुपालित डिज़ाइन, सटीक रंग, स्पष्ट फ़ॉन्ट'
                },
                reliableFont: {
                  name: 'विश्वसनीय फ़ॉन्ट',
                  description: 'पाठ स्पष्टता और पठनीयता पर ध्यान देता है',
                  features: 'अनुकूलित फ़ॉन्ट, तेज़ प्रदर्शन, छोटा फ़ाइल आकार'
                },
                textBased: {
                  name: 'पाठ आधारित',
                  subtitle: 'खोजने योग्य और कॉपी करने योग्य पाठ',
                  description: 'शुद्ध पाठीय, खोजने योग्य PDF उत्पन्न करता है',
                  features: 'खोजने योग्य पाठ, छोटा आकार, उच्च संगतता'
                }
              }
            },
            exportOptions: {
              title: 'एक्सपोर्ट विकल्प',
              options: {
                summary: {
                  name: 'सारांश शामिल करें',
                  description: 'परिणाम और मूल्यांकन सारांश जोड़ता है',
                  formats: 'सभी प्रारूपों में उपलब्ध'
                },
                guides: {
                  name: 'गाइड शामिल करें',
                  description: 'प्रत्येक तत्व के लिए विस्तृत गाइड जोड़ता है',
                  formats: 'PDF और HTML में उपलब्ध'
                },
                notes: {
                  name: 'नोट्स शामिल करें',
                  description: 'आपके व्यक्तिगत नोट्स जोड़ता है',
                  formats: 'सभी प्रारूपों में उपलब्ध'
                },
                sectionBreaks: {
                  name: 'सेक्शन ब्रेक',
                  description: 'सेक्शन के लिए अलग पृष्ठ जोड़ता है',
                  formats: 'केवल PDF में उपलब्ध'
                }
              }
            },
            exportNote:
              'याद रखें: सभी एक्सपोर्ट आपके डिवाइस पर स्थानीय रूप से बिना डेटा ट्रांसफर के होते हैं'
          },
          historyManagement: {
            title: 'इतिहास प्रबंधन',
            content:
              'ऐप अंतिम 5 मूल्यांकन स्वचालित रूप से सहेजता है और आपको पहुंच और प्रबंधन की अनुमति देता है'
          },
          pwaSupport: {
            title: 'PWA समर्थन',
            content: 'ऐप को डिवाइस पर इंस्टॉल किया जा सकता है और पूरी तरह से ऑफलाइन काम कर सकता है'
          }
        }
      },
      privacy: {
        title: 'गोपनीयता और सुरक्षा',
        emoji: '🔒',
        description: 'हम आपकी गोपनीयता और डेटा की सुरक्षा कैसे करते हैं',
        content:
          'हम गोपनीयता-उन्मुख डिज़ाइन के माध्यम से आपकी गोपनीयता की सुरक्षा के लिए प्रतिबद्ध हैं।',
        subSections: {
          localStorage: {
            title: 'स्थानीय भंडारण',
            content:
              'आपका सभी डेटा आपके ब्राउज़र में स्थानीय रूप से संग्रहीत होता है और कभी भी आपके डिवाइस को नहीं छोड़ता'
          },
          security: {
            title: 'सुरक्षा',
            content: 'कोई बाहरी कनेक्शन या उपयोगकर्ता ट्रैकिंग नहीं'
          },
          dataDeletion: {
            title: 'डेटा हटाना',
            content: 'आप ब्राउज़र डेटा मिटाकर किसी भी समय अपना सभी डेटा हटा सकते हैं'
          }
        }
      },
      troubleshooting: {
        title: 'समस्या निवारण',
        emoji: '🔧',
        description: 'सामान्य समस्याओं के समाधान',
        content: 'यदि आपको समस्याएं हैं, तो इन सामान्य समाधानों को आज़माएं।',
        subSections: {
          dataNotSaved: {
            title: 'डेटा सहेजा नहीं जा रहा',
            content: 'सुनिश्चित करें कि ब्राउज़र में स्थानीय भंडारण सक्षम है और ब्राउज़र अपडेट है'
          },
          scoreNotDisplayed: {
            title: 'स्कोर प्रदर्शित नहीं हो रहा',
            content: 'सुनिश्चित करें कि सभी आवश्यक तत्वों का मूल्यांकन पूरा हो गया है'
          },
          exportFailed: {
            title: 'एक्सपोर्ट असफल',
            content:
              'सुनिश्चित करें कि ब्राउज़र में डाउनलोड की अनुमति है और पर्याप्त स्थान उपलब्ध है'
          },
          otherIssues: {
            title: 'अन्य समस्याएं',
            content: 'पृष्ठ को रीफ्रेश करने या ब्राउज़र कैश साफ़ करने का प्रयास करें'
          }
        }
      }
    }
  },
  accessibility: {
    skipToContent: 'सामग्री पर जाएं',
    mainNavigation: 'मुख्य नेवीगेशन',
    searchForm: 'खोज फॉर्म',
    languageSelector: 'भाषा चयनकर्ता',
    themeToggle: 'थीम टॉगल',
    closeDialog: 'डायलॉग बंद करें',
    openMenu: 'मेन्यू खोलें',
    expandSection: 'सेक्शन का विस्तार करें',
    collapseSection: 'सेक्शन को संकुचित करें'
  },
  datetime: {
    justNow: 'अभी-अभी',
    minutesAgo: 'मिनट पहले',
    hoursAgo: 'घंटे पहले',
    daysAgo: 'दिन पहले',
    weeksAgo: 'सप्ताह पहले',
    monthsAgo: 'महीने पहले',
    yearsAgo: 'साल पहले',
    createdAt: 'बनाया गया',
    updatedAt: 'अपडेट किया गया',
    completedAt: 'पूरा किया गया'
  },
  units: {
    items: 'आइटम',
    percent: '%',
    score: 'स्कोर',
    total: 'कुल',
    completed: 'पूर्ण',
    remaining: 'शेष',
    of: 'का'
  },

  // गोपनीयता नीति
  privacy: {
    title: 'गोपनीयता नीति',
    subtitle: 'आपकी गोपनीयता को सुरक्षित करने की हमारी प्रतिबद्धता',
    lastUpdated: 'अंतिम अपडेट: 1 जनवरी 2025',
    introduction: {
      title: 'गोपनीयता-प्रथम डिज़ाइन',
      content:
        'Fact Checklist गोपनीयता को मूलभूत सिद्धांत के रूप में डिज़ाइन किया गया है। सभी डेटा प्रोसेसिंग आपके डिवाइस पर स्थानीय रूप से होती है बिना किसी सर्वर संचार या डेटा संग्रह के।'
    },
    dataCollection: {
      title: 'डेटा संग्रह',
      description: 'हम कोई व्यक्तिगत डेटा या उपयोग आँकड़े संग्रहीत नहीं करते।',
      details: [
        'कोई सर्वर संचार नहीं - सभी प्रोसेसिंग स्थानीय है',
        'कोई ट्रैकिंग कुकीज़ या एनालिटिक्स इंस्टॉल नहीं',
        'कोई व्यक्तिगत जानकारी संग्रहीत नहीं',
        'कोई उपयोग डेटा प्रेषित नहीं'
      ]
    },
    localStorage: {
      title: 'स्थानीय स्टोरेज उपयोग',
      description: 'डेटा केवल आपके ब्राउज़र में एप्लिकेशन कार्यक्षमता के लिए सैव किया जाता है।',
      details: [
        'मूल्यांकन डेटा ब्राउज़र localStorage में सैव',
        'भाषा प्राथमिकताएँ स्थानीय रूप से सैव',
        'कोई क्लाउड सिंक्रोनाइज़ेशन या बैकअप नहीं',
        'डेटा केवल आपके डिवाइस पर रहता है'
      ]
    },
    offlineFunctionality: {
      title: 'ऑफ़लाइन कार्यक्षमता',
      description: 'एप्लिकेशन किसी भी नेटवर्क अनुरोध के बिना पूरी तरह ऑफ़लाइन काम करता है।',
      details: [
        'Service worker के साथ Progressive Web App',
        'सभी रिसोर्स स्थानीय रूप से कैश किए गए',
        'कोई बाहरी API कॉल या डेटा प्राप्ति नहीं',
        'इंटरनेट के बिना पूरी कार्यक्षमता'
      ]
    },
    securityMeasures: {
      title: 'सुरक्षा उपाय',
      description: 'आपके डेटा और गोपनीयता की सुरक्षा के लिए निर्मित सुरक्षा उपाय।',
      details: [
        'Content Security Policy (CSP) लागू किया गया',
        'कोई तीसरे पक्ष की स्क्रिप्ट या ट्रैकिंग नहीं',
        'सुरक्षित कोडिंग प्रथाओं का पालन',
        'नियमित सुरक्षा अपडेट'
      ]
    },
    dataRetention: {
      title: 'डेटा भंडारण',
      description: 'आपका अपने डेटा भंडारण पर पूरा नियंत्रण है।',
      details: [
        'डेटा केवल तब तक बना रहता है जब तक आप उसे रखते हैं',
        'ब्राउज़र सेटिंग्स के माध्यम से आसान डिलीशन',
        'कोई स्वचालित डेटा समाप्ति नहीं',
        'डेटा हटाने के लिए स्पष्ट निर्देश'
      ]
    },
    policyUpdates: {
      title: 'नीति अपडेट',
      description: 'इस गोपनीयता नीति में कोई भी बदलाव स्पष्ट रूप से संचारित किया जाएगा।',
      details: [
        'GitHub रिपॉजिटरी पर अपडेट की घोषणा',
        'वर्जन इतिहास बनाए रखा गया',
        'महत्वपूर्ण बदलावों की स्पष्ट सूचना',
        'निरंतर उपयोग स्वीकृति दर्शाता है'
      ]
    },
    contact: {
      title: 'संपर्क जानकारी',
      content: 'यदि आपके इस गोपनीयता नीति के बारे में प्रश्न हैं, तो कृपया हमसे संपर्क करें ',
      githubText: 'GitHub Issues',
      suffix: 'के माध्यम से।'
    }
  },

  // एप के बारे में
  about: {
    title: 'एप के बारे में',
    subtitle: 'हमारे व्यापक फैक्ट-चेकिंग सिस्टम के बारे में जानें',
    hero: {
      title: 'व्यावहारिक फैक्ट-चेक चेकलिस्ट',
      subtitle:
        'जानकारी की विश्वसनीयता का वैज्ञानिक और व्यवस्थित मूल्यांकन के लिए एक प्रगतिशील वेब ऐप (PWA)',
      description: [
        'गलत जानकारी और भ्रामक सामग्री से भरे युग में, यह व्यावहारिक उपकरण सूचना साक्षरता के सुधार का समर्थन करता है।',
        '4 श्रेणियों में 20 मदों की जांच करके, यह जानकारी की विश्वसनीयता को मापता है और वस्तुनिष्ठ निर्णय का समर्थन करता है।'
      ],
      startButton: 'अभी शुरू करें'
    },
    sections: {
      features: 'विशेषताएँ',
      howItWorks: 'यह कैसे काम करता है',
      categories: 'मूल्यांकन श्रेणियाँ',
      techStack: 'तकनीक',
      performance: 'प्रदर्शन'
    },
    sectionDescriptions: {
      howItWorks: '4 सरल चरणों में जानकारी की विश्वसनीयता का मूल्यांकन करें',
      categories: '4 श्रेणियों के माध्यम से बहुआयामी जानकारी मूल्यांकन',
      techStack: 'अत्याधुनिक तकनीक के साथ निर्मित उच्च-प्रदर्शन एप्लिकेशन',
      performance: 'Lighthouse ऑडिट से उच्च-गुणवत्ता स्कोर'
    },
    stats: {
      performance: 'प्रदर्शन',
      accessibility: 'पहुंच',
      bestPractices: 'सर्वोत्तम प्रथाएं',
      seo: 'SEO'
    },
    cta: {
      title: 'अभी शुरू करें',
      description:
        'क्या आप वैज्ञानिक और व्यवस्थित तरीके से जानकारी की विश्वसनीयता का मूल्यांकन करने के लिए तैयार हैं?',
      startButton: 'मूल्यांकन शुरू करें',
      helpButton: 'और जानें'
    },
    features: {
      privacy: {
        title: 'पहले गोपनीयता',
        description: 'सभी डेटा आपके डिवाइस पर बिना किसी ट्रैकिंग या डेटा संग्रह के रहता है',
        details: [
          'कोई सर्वर संचार नहीं - सभी प्रोसेसिंग स्थानीय रूप से की जाती है',
          'कोई ट्रैकिंग या एनालिटिक्स इंस्टॉल नहीं',
          'सभी डेटा केवल ब्राउज़र localStorage में सैव',
          'पूरी गोपनीयता सुरक्षा सुनिश्चित'
        ]
      },
      offline: {
        title: 'ऑफ़लाइन कार्यक्षमता',
        description: 'Progressive Web App के रूप में पूरी तरह ऑफ़लाइन काम करता है',
        details: [
          'इंटरनेट कनेक्शन के बिना पूरी कार्यक्षमता उपलब्ध',
          'डेस्कटॉप/मोबाइल एप के रूप में इंस्टॉल करने योग्य',
          'ऑफ़लाइन कैशिंग के लिए Service worker',
          'तेज़ शुरुआत और अनुक्रियाशील प्रदर्शन'
        ]
      },
      scientific: {
        title: 'वैज्ञानिक पद्धति',
        description: 'अकादमिक मानकों का पालन करते हुए साक्ष्य-आधारित मूल्यांकन प्रणाली',
        details: [
          '4 श्रेणियों में 20-आइटम संरचित चेकलिस्ट',
          'विश्वास स्तरों के साथ मात्रात्मक स्कोरिंग',
          'पत्रकारिता और अकादमिक अनुसंधान मानकों पर आधारित',
          'वस्तुनिष्ठ और पुनरावर्तनीय मूल्यांकन प्रक्रिया'
        ]
      },
      export: {
        title: 'मल्टी-फॉर्मेट निर्यात',
        description:
          'साझाकरण और आर्काइविंग के लिए विभिन्न प्रारूपों में मूल्यांकन परिणाम निर्यात करें',
        details: [
          'हिंदी फॉन्ट समर्थन के साथ PDF निर्यात',
          'वेब साझाकरण के लिए HTML प्रारूप',
          'डेटा आदान-प्रदान के लिए JSON',
          'दस्तावेज़ीकरण के लिए Markdown'
        ]
      },
      history: {
        title: 'मूल्यांकन इतिहास',
        description: 'पिछले मूल्यांकनों की स्वचालित बचत और प्रबंधन',
        details: [
          'पूरे किए गए मूल्यांकनों की स्वचालित बचत',
          'हाल के मूल्यांकनों तक तेज़ पहुँच',
          'तुलनात्मक विश्लेषण क्षमताएँ',
          'ऐतिहासिक डेटा का निर्यात'
        ]
      },
      support: {
        title: 'पहुँचयोग्यता समर्थन',
        description: 'सार्वभौमिक पहुँच और उपयोगिता के लिए डिज़ाइन किया गया',
        details: [
          'स्क्रीन रीडर सुसंगतता',
          'कीबोर्ड नेविगेशन समर्थन',
          'उच्च कॉन्ट्रास्ट मोड उपलब्ध',
          'सभी डिवाइसों के लिए रेस्पॉन्सिव डिज़ाइन'
        ]
      }
    },
    steps: {
      step1: {
        title: 'जानकारी दर्ज करें',
        description: 'मूल्यांकन की जाने वाली जानकारी का शीर्षक और अवलोकन दर्ज करें'
      },
      step2: {
        title: 'व्यवस्थित मूल्यांकन',
        description: '4 श्रेणियों में 20-आइटम चेकलिस्ट के माध्यम से काम करें'
      },
      step3: {
        title: 'स्कोर मूल्यांकन',
        description: 'स्वचालित रूप से गणना किए गए विश्वसनीयता स्कोर और विश्वास स्तर की समीक्षा करें'
      },
      step4: {
        title: 'अंतिम निर्णय',
        description: 'अपना अंतिम फैसला लें और आवश्यकतानुसार परिणाम निर्यात करें'
      }
    },
    categories: {
      critical: {
        name: 'महत्वपूर्ण मूल्यांकन',
        description: 'बुनियादी विश्वसनीयता मूल्यांकन के लिए आवश्यक तत्व',
        items: 6
      },
      detailed: {
        name: 'विस्तृत मूल्यांकन',
        description: 'गहराई गुणवत्ता और विशेषज्ञता मूल्यांकन',
        items: 5
      },
      verification: {
        name: 'सत्यापन और क्रॉस-चेकिंग',
        description: 'सत्यापन और सहायक साक्ष्य मूल्यांकन',
        items: 5
      },
      context: {
        name: 'संदर्भ और पूर्वाग्रह',
        description: 'संदर्भ उपयुक्तता और पूर्वाग्रह मूल्यांकन',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'उत्कृष्ट प्रदर्शन के लिए runes के साथ नवीनतम रिएक्टिव फ्रेमवर्क'
      },
      framework: {
        name: 'SvelteKit',
        description: 'स्टेटिक जेनरेशन समर्थन के साथ फुल-स्टैक फ्रेमवर्क'
      },
      language: {
        name: 'TypeScript',
        description: 'कड़े कॉन्फ़िगरेशन के साथ टाइप-सेफ डेवलपमेंट'
      },
      styling: {
        name: 'कस्टम CSS',
        description: 'CSS कस्टम प्रोपर्टीज और डार्क मोड के साथ आधुनिक स्टाइलिंग'
      },
      pwa: {
        name: 'Progressive Web App',
        description: 'ऑफ़लाइन कार्यक्षमता के साथ इंस्टॉल योग्य एप'
      },
      export: {
        name: 'मल्टी-फॉर्मेट निर्यात',
        description: 'PDF, HTML, JSON, Markdown निर्यात क्षमताएँ'
      }
    }
  },

  // फ़ॉर्म
  forms: {
    titleLabel: 'शीर्षक',
    titlePlaceholder: 'मूल्यांकन की जाने वाली जानकारी या स्रोत का शीर्षक दर्ज करें',
    descriptionLabel: 'लक्षित जानकारी का अवलोकन',
    descriptionPlaceholder: 'मूल्यांकन की जाने वाली जानकारी की सामग्री का संक्षिप्त वर्णन करें',
    notesLabel: 'मूल्यांकन नोट्स और अतिरिक्त सत्यापन आइटम',
    notesPlaceholder: 'कोई भी प्रश्न, सत्यापन के लिए आइटम, सामान्य छाप आदि रिकॉर्ड करें...'
  },

  // UI टेक्स्ट
  ui: {
    quickStartGuide: '💡 तेजी से शुरू करने के लिए इस गाइड का उपयोग करें!',
    guideModeDetailed: '🔍 विस्तृत गाइड मोड',
    guideModeNormal: '📝 सामान्य मोड',
    completeEvaluation: 'मूल्यांकन पूरा करें'
  },

  // Checklist items (Hindi translation)
  checklistItems: {
    'source-authority': {
      title: 'प्रामाणिक स्रोतों से प्रकाशन',
      description:
        'सरकारी एजेंसियां, शैक्षणिक संस्थान, पेशेवर संगठन, peer-reviewed पत्रिकाएं, विश्वसनीय मीडिया आदि',
      guideTitle: '🏛️ प्रामाणिक स्रोतों के मापदंड',
      guideContent:
        'सरकारी/सार्वजनिक संस्थान: मंत्रालय, सांख्यिकी विभाग, RBI, न्यायालय, PIB आदि\nशैक्षणिक संस्थान: IIT, IIM, AIIMS, ICMR, UGC मान्यता प्राप्त विश्वविद्यालय\nअंतर्राष्ट्रीय संगठन: WHO, UN, World Bank, IMF\nपेशेवर संगठन: Medical Council of India, Bar Council, ICAI',
      examplesGood: [
        'स्वास्थ्य मंत्रालय की आधिकारिक सांख्यिकी',
        'Current Science जैसी peer-reviewed जर्नल',
        'ICMR द्वारा प्रकाशित शोध',
        'RBI की मौद्रिक नीति रिपोर्ट'
      ],
      examplesBad: [
        'व्यक्तिगत ब्लॉग की जानकारी',
        'WhatsApp forward संदेश',
        'अज्ञात सोशल मीडिया पोस्ट',
        'बिना स्रोत के वायरल संदेश'
      ]
    },
    'source-primary': {
      title: 'प्राथमिक स्रोत सत्यापन',
      description: 'स्रोत से सीधी जानकारी, सुनी-सुनाई या दूसरे हाथ की रिपोर्ट नहीं',
      guideTitle: '🎯 प्राथमिक स्रोतों की पहचान कैसे करें',
      guideContent:
        'प्राथमिक स्रोत: शोधकर्ताओं के मूल शोध पत्र, प्रत्यक्षदर्शी गवाही, आधिकारिक घोषणाएं\nउदाहरण: सरकारी प्रेस विज्ञप्ति, कंपनी की वार्षिक रिपोर्ट, न्यायालय के आदेश, मूल शोध डेटा',
      examplesGood: [
        'शोधकर्ताओं द्वारा स्वयं प्रकाशित पेपर',
        'कंपनी की आधिकारिक वित्तीय घोषणाएं',
        'सुप्रीम कोर्ट के फैसले का पूरा टेक्स्ट',
        'सरकारी विभाग की प्रेस रिलीज़'
      ],
      examplesBad: [
        '"विशेषज्ञों के अनुसार" बिना नाम',
        '"एक सर्वेक्षण के अनुसार" बिना विवरण',
        'सोशल मीडिया पर वायरल स्क्रीनशॉट',
        'तीसरे व्यक्ति द्वारा बताई गई बात'
      ]
    },
    'source-multiple': {
      title: 'कई स्वतंत्र स्रोत',
      description: 'विभिन्न संगठनों/पदों से समान रिपोर्ट या पुष्टि',
      guideTitle: '🔄 स्वतंत्रता की पुष्टि कैसे करें',
      guideContent:
        'स्वतंत्र स्रोत: अलग-अलग संगठन, funding, और हितों वाले स्रोत\nजांच करें: क्या स्रोत एक-दूसरे से जुड़े तो नहीं हैं?\nक्या सभी स्रोत एक ही मूल स्रोत से जानकारी ले रहे हैं?',
      examplesGood: [
        'सरकारी घोषणा + शैक्षणिक शोध + विभिन्न मीडिया रिपोर्ट',
        'The Hindu + Indian Express + The Wire की अलग-अलग जांच',
        'ICMR + WHO + स्वतंत्र विशेषज्ञों की पुष्टि',
        'विभिन्न राज्य सरकारों के समान आंकड़े'
      ],
      examplesBad: [
        'एक ही मीडिया समूह के विभिन्न चैनल',
        'सभी स्रोत एक ही प्रेस रिलीज़ को quote कर रहे हों',
        'केवल सरकारी स्रोत या केवल विपक्षी स्रोत',
        'एक ही funding source वाले संगठन'
      ]
    },
    'warning-anonymous': {
      title: 'गुमनाम या बिना श्रेय की जानकारी नहीं',
      description: 'रचनाकार/प्रकाशक की स्पष्ट पहचान हो सकती है',
      guideTitle: '🔍 स्रोत पहचान के मुख्य बिंदु',
      guideContent:
        'आवश्यक जानकारी: रचनाकार का वास्तविक नाम, संबद्धता, संपर्क जानकारी\nलेखक की योग्यता और विशेषज्ञता\nसंस्था का पता और पंजीकरण विवरण',
      examplesGood: [
        'डॉ. रणदीप गुलेरिया (AIIMS निदेशक) के अनुसार',
        'प्रो. के. विजयराघवन (पूर्व PSA) का बयान',
        'Alt News के सह-संस्थापक प्रतीक सिन्हा की रिपोर्ट',
        'BOOM के मोहम्मद जुबैर द्वारा fact-check'
      ],
      examplesBad: [
        '"एक डॉक्टर के अनुसार" बिना नाम',
        '"विशेषज्ञों का कहना है" बिना विवरण',
        'WhatsApp पर गुमनाम संदेश',
        '"अंदर के सूत्र" बिना पहचान'
      ]
    },
    'warning-sensational': {
      title: 'सनसनीखेज या भड़काऊ अभिव्यक्तियों का अभाव',
      description: 'शांत और वस्तुनिष्ठ वर्णन, अत्यधिक भावनात्मक अपील नहीं',
      guideTitle: '⚠️ सनसनीखेज अभिव्यक्तियों की पहचान',
      guideContent:
        'चेतावनी शब्द: चौंकाने वाला, अविश्वसनीय, 100% गारंटी, चमत्कार, तुरंत\nभावनात्मक manipulation: डर, गुस्सा, या अत्यधिक उत्साह पैदा करने वाले शब्द\nअतिशयोक्ति: सबसे बड़ा, सबसे खराब, कभी नहीं, हमेशा',
      examplesGood: [
        'शोध में 75% विषयों में सुधार दिखा',
        'ICMR के अध्ययन के अनुसार 3.2% वृद्धि',
        'सांख्यिकीय रूप से महत्वपूर्ण परिणाम (p<0.05)',
        'विशेषज्ञों ने सावधानी बरतने की सलाह दी'
      ],
      examplesBad: [
        'चौंकाने वाला सच जो डॉक्टर नहीं बताते!',
        'यह एक चमत्कार है! 100% गारंटी!',
        'Breaking: देश में तबाही मचने वाली है!',
        'Viral हो रहा है ये खतरनाक वीडियो!'
      ]
    },
    'warning-logical': {
      title: 'तार्किक विरोधाभास नहीं',
      description: 'सामग्री में संगति है और कोई स्पष्ट तार्किक छलांग नहीं',
      guideTitle: '🧠 तार्किक संगति की जांच कैसे करें',
      guideContent:
        'जांचें: क्या आधार और निष्कर्ष ठीक से जुड़े हैं?\nक्या कारण-प्रभाव संबंध तर्कसंगत है?\nक्या सभी तथ्य एक-दूसरे से मेल खाते हैं?\nक्या कोई hidden assumptions तो नहीं हैं?',
      examplesGood: [
        'अन्य कारकों को ध्यान में रखते हुए सांख्यिकीय विश्लेषण',
        'control group के साथ तुलनात्मक अध्ययन',
        'कारण-प्रभाव की स्पष्ट व्याख्या',
        'सभी variables को consider करते हुए निष्कर्ष'
      ],
      examplesBad: [
        'A और B साथ हुए इसलिए A ने B का कारण बना',
        'हल्दी खाने वाले कम बीमार पड़ते हैं, इसलिए हल्दी सभी बीमारियों का इलाज है',
        'पहले ये था फिर वो हुआ, इसलिए इसकी वजह से वो हुआ',
        'Cherry-picked data से व्यापक निष्कर्ष'
      ]
    },
    'time-recent': {
      title: 'जानकारी की ताज़गी',
      description: 'प्रकाशन तिथि निर्दिष्ट है और सामग्री उपयुक्त ताज़गी बनाए रखती है',
      guideTitle: '⏰ उपयुक्त जानकारी ताज़गी का आकलन',
      guideContent:
        'क्षेत्र-विशिष्ट ताज़गी आवश्यकताएं:\nचिकित्सा/स्वास्थ्य: 1-2 वर्ष\nतकनीक: 6 महीने-1 वर्ष\nकानून/नीति: नवीनतम संशोधन\nसमाचार: 24-48 घंटे',
      examplesGood: [
        'प्रकाशित: जनवरी 2025',
        'अंतिम अपडेट: 30 जनवरी 2025',
        'Budget 2025 की ताज़ा जानकारी',
        'आज जारी की गई सरकारी घोषणा'
      ],
      examplesBad: [
        'कोई तारीख नहीं दी गई',
        '5 साल पुरानी तकनीकी जानकारी',
        '2020 की COVID guidelines को 2025 में share करना',
        'पुराने कानून के आधार पर सलाह'
      ]
    },
    'time-update': {
      title: 'अपडेट और सुधार इतिहास',
      description: 'आवश्यकतानुसार सामग्री अपडेट की जाती है और पारदर्शी सुधार होते हैं',
      guideTitle: '📝 पारदर्शी अपडेट और सुधार की जांच',
      guideContent:
        'अच्छे अपडेट की विशेषताएं:\nस्पष्ट रूप से बताया गया कि क्या बदला गया\nपिछले versions का record\nगलतियों की स्वीकृति और सुधार\nअपडेट की तारीख और कारण',
      examplesGood: [
        'सुधार: पिछले आंकड़े में त्रुटि थी, सही आंकड़ा है...',
        'Version history के साथ Wikipedia लेख',
        "Editor's note के साथ अपडेट किए गए लेख",
        'Changelog के साथ सरकारी दस्तावेज़'
      ],
      examplesBad: [
        'चुपचाप बदली गई जानकारी',
        'कोई सुधार record नहीं',
        'गलत जानकारी को बिना acknowledgment के हटाना',
        'Stealth editing बिना notice के'
      ]
    },
    'expert-knowledge': {
      title: 'उपयुक्त विशेषज्ञता',
      description: 'रचनाकार के पास संबंधित क्षेत्र में पर्याप्त ज्ञान/अनुभव है',
      guideTitle: '🎓 विशेषज्ञता की पुष्टि कैसे करें',
      guideContent:
        'जांच बिंदु:\nसंबंधित क्षेत्र में डिग्री/योग्यता\nपेशेवर अनुभव और track record\nPeer-reviewed publications\nपेशेवर संगठनों में सदस्यता\nक्षेत्र में मान्यता',
      examplesGood: [
        'संक्रामक रोग विशेषज्ञ द्वारा vaccine की व्याख्या',
        'अर्थशास्त्री द्वारा बजट विश्लेषण',
        'Supreme Court वकील द्वारा कानूनी राय',
        'IIT प्रोफेसर द्वारा तकनीकी विषय'
      ],
      examplesBad: [
        'अभिनेता द्वारा चिकित्सा सलाह',
        'राजनेता द्वारा वैज्ञानिक दावे बिना विशेषज्ञता के',
        'Self-proclaimed विशेषज्ञ बिना credentials',
        'YouTube influencer द्वारा स्वास्थ्य सलाह'
      ]
    },
    'detail-sufficient': {
      title: 'पर्याप्त विवरण और साक्ष्य',
      description:
        'निष्कर्ष तक पहुंचने की प्रक्रिया और समर्थन करने वाले साक्ष्य उचित रूप से समझाए गए हैं',
      guideTitle: '📋 साक्ष्य की पर्याप्तता का आकलन',
      guideContent:
        'आवश्यक तत्व:\nदावों का समर्थन करने वाला विशिष्ट डेटा\nMethodology का स्पष्ट विवरण\nSample size और selection criteria\nLimitations की स्वीकृति',
      examplesGood: [
        'Sample size (n=1000), सांख्यिकीय methods, confidence intervals शामिल',
        'Step-by-step प्रक्रिया विवरण के साथ',
        'Raw data या source data की उपलब्धता',
        'Peer review process का उल्लेख'
      ],
      examplesBad: [
        'केवल "प्रभाव सिद्ध हुआ" बिना विवरण के',
        '"कई लोगों ने फायदा उठाया" बिना संख्या',
        '"शोध से पता चला" बिना methodology',
        'Vague claims बिना specific evidence'
      ]
    },
    'citation-proper': {
      title: 'उचित citations और संदर्भ',
      description: 'महत्वपूर्ण दावों के लिए विश्वसनीय स्रोत दिखाए गए हैं',
      guideTitle: '📚 उचित Citations के मानक',
      guideContent:
        'Citation की आवश्यकता वाली सामग्री:\nसांख्यिकीय डेटा/संख्याएं\nवैज्ञानिक दावे\nऐतिहासिक तथ्य\nकिसी और के विचार या शोध\nControversial statements',
      examplesGood: [
        'ICMR के अध्ययन के अनुसार (Kumar et al., 2024)',
        'RBI बुलेटिन, जनवरी 2025, पृष्ठ 45',
        'Economic Survey 2024-25, Chapter 3',
        'Lancet journal में प्रकाशित (DOI: 10.1016/...)'
      ],
      examplesBad: [
        '"शोध के अनुसार" (स्रोत अस्पष्ट)',
        '"विशेषज्ञों का मानना है" बिना नाम',
        '"अध्ययन में पाया गया" बिना reference',
        'Wikipedia से copy-paste बिना attribution'
      ]
    },
    'citation-accessible': {
      title: 'उद्धृत स्रोतों की सत्यापनीयता',
      description: 'उद्धृत स्रोत वास्तव में accessed और verified किए जा सकते हैं',
      guideTitle: '🌐 Citation पहुंच की जांच',
      guideContent:
        'आदर्श स्थिति:\nDirect links या DOI\nPublicly accessible documents\nLibrary या archive में उपलब्ध\nOfficial websites पर मौजूद',
      examplesGood: [
        'URL links के साथ',
        'DOI numbers वाले papers',
        'सरकारी वेबसाइट का direct link',
        'Open access journals में प्रकाशित'
      ],
      examplesBad: [
        '"आंतरिक सामग्री के अनुसार"',
        'Private या paid databases बिना access',
        'Broken links या 404 errors',
        '"Personal communication" बिना सत्यापन'
      ]
    },
    'cross-check': {
      title: 'अन्य स्रोतों के साथ cross-reference',
      description: 'समान सामग्री की कई स्वतंत्र स्रोतों द्वारा पुष्टि की जा सकती है',
      guideTitle: '🔍 प्रभावी Cross-checking Methods',
      guideContent:
        'चरणबद्ध सत्यापन प्रक्रिया:\n1. मूल दावे की पहचान\n2. स्वतंत्र स्रोतों की खोज\n3. विरोधाभासी जानकारी की जांच\n4. समान निष्कर्ष की पुष्टि',
      examplesGood: [
        'कई peer-reviewed papers में समान परिणाम',
        'The Hindu + Indian Express + Times of India की समान reporting',
        'WHO + ICMR + CDC के similar guidelines',
        'विभिन्न opinion polls में consistent trends'
      ],
      examplesBad: [
        'केवल एक स्रोत',
        'सभी स्रोत एक ही मूल report को cite कर रहे हैं',
        'Conflicting information को ignore करना',
        'Cherry-picking केवल supporting sources'
      ]
    },
    'fact-check': {
      title: 'Fact-checking संगठनों द्वारा सत्यापन',
      description: 'विश्वसनीय fact-checking संस्थानों से सत्यापन मौजूद है',
      guideTitle: '✅ विश्वसनीय Fact-checking संगठन',
      guideContent:
        'भारतीय संगठन: Alt News, BOOM, The Quint WebQoof, Fact Checker, Vishvas News\nअंतर्राष्ट्रीय संगठन: Snopes, PolitiFact, AFP Fact Check, BBC Reality Check\nमान्यता: IFCN (International Fact-Checking Network) certified',
      examplesGood: [
        'Alt News द्वारा "True" rating',
        'BOOM द्वारा सत्यापित factcheck',
        'The Quint WebQoof की detailed investigation',
        'कई fact-checkers द्वारा समान निष्कर्ष'
      ],
      examplesBad: [
        'Fact-checking द्वारा "False" का निर्णय',
        'Multiple fact-checkers द्वारा "Misleading" rating',
        'सत्यापित fake news या manipulated content',
        'Debunked misinformation को फिर से share करना'
      ]
    },
    'data-verifiable': {
      title: 'सत्यापनीय डेटा',
      description: 'दावों का समर्थन करने वाला डेटा वस्तुनिष्ठ रूप से सत्यापित किया जा सकता है',
      guideTitle: '📈 डेटा सत्यापनीयता की जांच',
      guideContent:
        'सत्यापन तत्व:\nडेटा स्रोत और संग्रह methods\nSample size और representativeness\nMethodology transparency\nRaw data की उपलब्धता\nPeer review या third-party validation',
      examplesGood: [
        'सरकारी सांख्यिकी डेटा (NSO, RBI)',
        'Census data या official surveys',
        'Publicly available datasets',
        'Peer-reviewed research में प्रयुक्त डेटा'
      ],
      examplesBad: [
        'केवल आंतरिक डेटा',
        'Source या methodology के बिना statistics',
        'Unverified online polls',
        'Anecdotal evidence को data के रूप में present करना'
      ]
    },
    methodology: {
      title: 'Methods/methodology की वैधता',
      description: 'शोध या सर्वेक्षण methodology उपयुक्त और reproducible है',
      guideTitle: '🔬 Methodological वैधता का मूल्यांकन',
      guideContent:
        'मूल्यांकन बिंदु:\nResearch design की उपयुक्तता\nSample selection और size\nControl groups का उपयोग\nBias को minimize करने के तरीके\nReproducibility और transparency',
      examplesGood: [
        'Double-blind trials',
        'उपयुक्त control group setting',
        'Randomized controlled studies',
        'Clearly defined inclusion/exclusion criteria'
      ],
      examplesBad: [
        'कोई methodology विवरण नहीं',
        'Biased sample selection',
        'Leading questions in surveys',
        'Cherry-picked data analysis'
      ]
    },
    'bias-disclosure': {
      title: 'हितों के टकराव का प्रकटीकरण',
      description: 'वित्तीय, राजनीतिक, और व्यक्तिगत हित उचित रूप से प्रकट किए गए हैं',
      guideTitle: '💰 हितों के टकराव की जांच के लिए आइटम',
      guideContent:
        'प्रकट करने योग्य हित:\nअनुसंधान funding sources\nकंपनी या संगठन से वित्तीय संबंध\nराजनीतिक या वैचारिक संबद्धता\nPersonal stakes या benefits\nSponsorship या advertising revenue',
      examplesGood: [
        'COI स्पष्ट रूप से बताया गया',
        '"यह शोध XYZ कंपनी द्वारा funded है"',
        'पत्रकार ने अपनी political affiliation बताई',
        'Transparency notice में सभी financial ties'
      ],
      examplesBad: [
        'कोई COI disclosure नहीं',
        'छुपाई गई funding sources',
        'Political bias को स्वीकार न करना',
        'Financial incentives का खुलासा न करना'
      ]
    },
    'balanced-view': {
      title: 'संतुलित दृष्टिकोण',
      description: 'विभिन्न पदों और विरोधी विचारों पर भी विचार किया गया है',
      guideTitle: '⚖️ संतुलन मूल्यांकन के लिए दृष्टिकोण',
      guideContent:
        'जांच बिंदु:\nविरोधी/आलोचनात्मक विचारों का परिचय\nMultiple stakeholders की राय\nLimitations की स्वीकृति\nCounterarguments का address करना\nNuanced approach rather than black/white',
      examplesGood: [
        'कई शोध परिणामों की तुलना',
        'विशेषज्ञों के अलग-अलग मत दिखाना',
        '"हालांकि, आलोचकों का कहना है..."',
        'Both sides के arguments को fairly present करना'
      ],
      examplesBad: [
        'केवल supporting evidence को list करना',
        'Counter-arguments को ignore करना',
        'One-sided presentation',
        'Opposing views को misrepresent करना'
      ]
    },
    'context-adequate': {
      title: 'पर्याप्त पृष्ठभूमि जानकारी',
      description: 'जानकारी को समझने के लिए आवश्यक पृष्ठभूमि और संदर्भ प्रदान किया गया है',
      guideTitle: '🌍 संदर्भीय जानकारी के लिए जांच आइटम',
      guideContent:
        'आवश्यक पृष्ठभूमि जानकारी:\nऐतिहासिक पृष्ठभूमि/पिछला शोध\nCurrent situation का context\nRelevant policies या regulations\nSocial, economic, political background\nComparative data या benchmarks',
      examplesGood: [
        'पिछले समान मामले',
        'ऐतिहासिक पृष्ठभूमि की व्याख्या',
        'Indian context में global trends की तुलना',
        'Policy background के साथ current events'
      ],
      examplesBad: [
        'केवल एकल संख्याएं',
        'कोई पृष्ठभूमि जानकारी नहीं',
        'Context के बिना isolated statistics',
        'Without cultural या social context'
      ]
    },
    'scope-clear': {
      title: 'लागू होने के दायरे की स्पष्टता',
      description: 'जानकारी का लागू होने वाला दायरा और सीमाएं स्पष्ट रूप से दिखाई गई हैं',
      guideTitle: '🎯 लागू होने के दायरे की स्पष्टता',
      guideContent:
        'स्पष्ट करने योग्य दायरा:\nTarget लोग/क्षेत्र/कालावधि\nGeographical limitations\nAge groups या demographics\nSpecific conditions या circumstances\nTemporal limitations',
      examplesGood: [
        'स्पष्ट सीमा कथन',
        '"यह अध्ययन केवल भारतीय आबादी पर लागू है"',
        '"18-65 आयु वर्ग के लिए परिणाम"',
        '"शहरी क्षेत्रों में किए गए सर्वेक्षण के आधार पर"'
      ],
      examplesBad: [
        'सीमित शोध परिणामों का असीमित सामान्यीकरण',
        'Scope की कोई स्पष्टता नहीं',
        'Global claims based on limited local data',
        'All demographics के लिए generalize करना बिना evidence'
      ]
    }
  }
};

export default translations;
