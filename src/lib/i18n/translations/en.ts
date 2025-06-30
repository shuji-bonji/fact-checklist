/**
 * English translation file template
 * English (en) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
  language: 'en' as const,
  version: '1.0.0',
  lastUpdated: '2025-01-01',
  translator: 'To be translated',
  completeness: 0
};

export const translations: TranslationKeys = {
  // Common UI
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    clear: 'Clear',
    reset: 'Reset',
    copy: 'Copy',
    download: 'Download',
    share: 'Share',
    print: 'Print',
    export: 'Export',
    import: 'Import',
    settings: 'Settings',
    help: 'Help',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
    home: 'Home',
    menu: 'Menu',
    languages: 'Languages',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    systemMode: 'System',
    guide: 'Guide',
    showGuide: 'Show Guide',
    rip: {
      high: 'High Risk',
      medium: 'Medium Risk',
      low: 'Low Risk'
    }
  },

  // Application specific
  app: {
    title: 'Practical Fact-Check Checklist',
    subtitle: 'A comprehensive system for scientifically evaluating information reliability',
    description:
      'A checklist for scientifically and systematically evaluating information reliability',
    version: '1.0.0',
    author: 'Fact Checklist Team',
    copyright: '© 2025 Fact Checklist Team',
    poweredBy: 'Powered by'
  },

  // Navigation
  navigation: {
    home: 'Home',
    about: 'About',
    help: 'Help & Usage',
    privacy: 'Privacy',
    checklist: 'Checklist',
    history: 'History',
    settings: 'Settings'
  },

  // Checklist related
  checklist: {
    title: 'Checklist Information',
    description: 'Checklist details',
    newChecklist: 'New Checklist',
    createChecklist: 'Create Checklist',
    editChecklist: 'Edit Checklist',
    deleteChecklist: 'Delete Checklist',
    completeChecklist: 'Complete Evaluation',
    checklistTitle: 'Title',
    checklistDescription: 'Target Information Overview',
    targetInfo: 'Target Information',
    targetInfoPlaceholder: 'Example: Article about COVID-19 vaccine effectiveness',
    evaluationNotes: 'Evaluation Notes & Additional Verification Items',
    evaluationNotesPlaceholder:
      'Record any questions, additional items to verify, overall impressions, etc...',
    score: 'Evaluation Score',
    confidenceLevel: 'Confidence Level',
    finalJudgment: 'Final Judgment',
    judgment: {
      accept: 'Accept',
      caution: 'Caution',
      reject: 'Reject',
      pending: 'Pending'
    },
    judgmentAdvice: {
      accept: 'Adoption recommended. Sufficient verification has been conducted.',
      caution: 'Additional verification recommended. Be cautious with important decisions.',
      reject: 'Rejection recommended. Look for more reliable sources.'
    },
    confidence: {
      high: 'High Reliability',
      medium: 'Moderate Reliability',
      low: 'Low Reliability',
      poor: 'Reliability Issues'
    },
    advice: {
      high: 'Adoption recommended. Sufficient verification has been conducted.',
      medium: 'Additional confirmation recommended. Be cautious with important decisions.',
      low: 'Caution required. Further verification is needed.',
      poor: 'Rejection recommended. Look for reliable information sources.'
    }
  },

  // Check item categories
  categories: {
    critical: {
      name: 'Critical Evaluation (Required)',
      description: 'Most important items for determining basic information reliability',
      emoji: '🚨'
    },
    detailed: {
      name: 'Detailed Evaluation (Important)',
      description: 'Items for evaluating information quality and expertise',
      emoji: '📝'
    },
    verification: {
      name: 'Verification & Cross-checking',
      description: 'Items for confirming information verifiability and backing',
      emoji: '🔍'
    },
    context: {
      name: 'Context & Bias Evaluation',
      description: 'Items for evaluating bias appropriateness and context',
      emoji: '🌐'
    }
  },

  // Export functionality
  export: {
    title: 'Export',
    description: 'Export checklist in various formats',
    format: 'Format',
    options: 'Options',
    includeGuides: 'Include Guides',
    includeNotes: 'Include Notes',
    includeSummary: 'Include Summary',
    sectionBreaks: 'Section Breaks',
    pdfModes: {
      pixelPerfect: 'Pixel Perfect',
      reliableFont: 'Font Reliability Focus',
      textBased: 'Text Based'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      initializing: 'Initializing...',
      generating: 'Generating...',
      processing: 'Processing...',
      finalizing: 'Finalizing...',
      completed: 'Completed',
      failed: 'Failed'
    }
  },

  // History
  history: {
    title: 'Evaluation History',
    description: 'Past evaluation results',
    empty: 'No evaluation history yet.',
    lastEvaluated: 'Last Evaluated',
    viewResults: 'View Results',
    deleteHistory: 'Delete History',
    clearAll: 'Clear All',
    recent: 'Latest 5',
    viewAll: 'Show All',
    createFirst: "Let's create your first checklist!"
  },

  // Error messages
  errors: {
    general: 'An unexpected error occurred',
    network: 'A network error occurred',
    storage: 'A storage error occurred',
    export: 'Export failed',
    import: 'Import failed',
    invalidData: 'Invalid data',
    unsupportedFeature: 'Unsupported feature',
    permissionDenied: 'Permission denied',
    fileNotFound: 'File not found',
    fileTooLarge: 'File too large',
    invalidFileFormat: 'Invalid file format'
  },

  // Success messages
  success: {
    saved: 'Saved',
    exported: 'Exported',
    imported: 'Imported',
    deleted: 'Deleted',
    copied: 'Copied',
    shared: 'Shared'
  },

  // Confirmation messages
  confirmations: {
    delete: 'Are you sure you want to delete?',
    reset: 'Reset?',
    clearHistory: 'Clear all history?',
    overwrite: 'Overwrite?',
    discard: 'Discard changes?'
  },

  // Help & Guide
  help: {
    title: 'Help & Usage Guide',
    subtitle: 'Detailed explanation of how to use the Fact Verification Checklist',
    tableOfContents: 'Table of Contents',

    // Navigation
    navigation: {
      overview: 'Overview',
      usage: 'Usage',
      categories: 'Categories',
      scoring: 'Scoring',
      features: 'Features',
      privacy: 'Privacy',
      troubleshooting: 'Troubleshooting'
    },

    // Sections
    sections: {
      overview: {
        title: 'App Overview',
        emoji: '📋',
        description: 'Basic usage of the Fact Verification Checklist',
        content:
          'This app is a tool for scientifically and systematically evaluating the reliability of information on the Internet. By checking a total of 20 items across 4 major categories (Critical Assessment, Detailed Assessment, Verification Assessment, and Context Assessment), it quantifies the reliability of information and supports final judgment.',
        subSections: {
          features: {
            title: 'Key Features',
            content:
              '• Completely Private: All data is stored only on your device\n• Offline Support: Works without network connection\n• Scientific Assessment: Systematic checklist items\n• History Management: Save and reference past evaluation results'
          },
          targetUsers: {
            title: 'Target Users',
            content:
              '• General Users: Those who want to verify the reliability of online information\n• Professionals: As a supplementary tool for information analysis\n• Media Professionals: As support for fact-checking'
          }
        }
      },
      usage: {
        title: 'Usage Guide',
        emoji: '🚀',
        description: 'Step-by-step usage instructions',
        content:
          'Please follow these steps from creating a checklist to completing the evaluation.',
        subSections: {
          step1: {
            title: 'Step 1: Create Checklist',
            content:
              '1. Enter title and overview of target information\n2. Record details of information to be evaluated\n3. Checklist will be automatically created'
          },
          step2: {
            title: 'Step 2: Item Evaluation',
            content:
              '1. Start with Critical Assessment\n2. Check each item in order\n3. Refer to detailed guide for unclear items\n4. Score updates in real-time'
          },
          step3: {
            title: 'Step 3: Final Judgment',
            content:
              '1. Check all items\n2. Record evaluation notes (optional)\n3. Select final judgment (Accept/Caution/Reject)\n4. Click "Complete Evaluation" button'
          },
          step4: {
            title: 'Step 4: Review Results & Share',
            content:
              '1. Review details on evaluation results page\n2. Export if needed\n3. Output available in PDF, HTML, JSON, Markdown formats'
          }
        }
      },
      categories: {
        title: 'Assessment Categories',
        emoji: '📊',
        description: 'Detailed explanation of the 4 assessment categories',
        content:
          'To evaluate information reliability from multiple angles, we conduct checks across 4 categories.',
        subSections: {
          critical: {
            title: 'Critical Assessment',
            content:
              'Evaluates the most important basic reliability.\n• Publication from authoritative sources\n• Verification of primary information\n• Multiple independent sources\n• Not anonymous or unattributed\n• Minimal inflammatory or sensational language\n• Logical consistency'
          },
          detailed: {
            title: 'Detailed Assessment',
            content:
              'Evaluates information quality and detail.\n• Recency of information\n• Update and correction history\n• Appropriate expertise\n• Sufficient detail and evidence\n• Proper citation and references\n• Verifiability of cited sources'
          },
          verification: {
            title: 'Verification Assessment',
            content:
              'Evaluates external verification and objectivity.\n• Cross-checking with other sources\n• Verification by fact-checking organizations\n• Verifiable data\n• Validity of methods and methodology'
          },
          context: {
            title: 'Context Assessment',
            content:
              'Evaluates information background and bias.\n• Disclosure of conflicts of interest\n• Balanced perspective\n• Sufficient background information\n• Clear scope of application'
          }
        }
      },
      scoring: {
        title: 'Scoring',
        emoji: '🎯',
        description: 'Details of score calculation and judgment criteria',
        content:
          'Reliability scores are automatically calculated based on the status of each item check.',
        subSections: {
          calculation: {
            title: 'Calculation Method',
            content:
              '• Weighting by importance of each category\n• Critical Assessment: 35%\n• Detailed Assessment: 25%\n• Verification Assessment: 25%\n• Context Assessment: 15%'
          },
          criteria: {
            title: 'Judgment Criteria',
            content:
              '• 80% or higher: High reliability → "Accept" recommended\n• 60-79%: Moderate reliability → Additional verification recommended\n• 40-59%: Low reliability → "Caution"\n• Below 40%: Reliability issues → "Reject" recommended'
          },
          finalJudgment: {
            title: 'Final Judgment',
            content:
              'The score is a reference value. The final judgment is left to the evaluator\'s expertise and comprehensive judgment. Please select from "Accept," "Caution," or "Reject."'
          }
        }
      },
      features: {
        title: 'Feature Details',
        emoji: '⚙️',
        description: 'About the various features of the app',
        content: 'Use various features to efficiently evaluate information.',
        subSections: {
          detailedGuide: {
            title: 'Detailed Guide Mode',
            content:
              'Displays detailed explanations and specific examples for each checklist item. Useful for first-time users or when you want to confirm judgment criteria for items.'
          },
          exportFunction: {
            title: 'Export Function',
            content: 'Evaluation results can be output in 4 formats.',
            exportFormats: {
              title: 'List of Output Formats',
              formats: {
                pdf: {
                  name: 'PDF',
                  features:
                    '• Optimized for printing\n• Japanese font support\n• Choose from 3 modes',
                  usage: 'Reports, archives, printed distribution'
                },
                html: {
                  name: 'HTML',
                  features: '• Viewable in browser\n• CSS styles embedded\n• Single file',
                  usage: 'Web sharing, online viewing'
                },
                json: {
                  name: 'JSON',
                  features:
                    '• Structured data\n• Programmable processing\n• Complete data retention',
                  usage: 'System integration, data analysis'
                },
                markdown: {
                  name: 'Markdown',
                  features:
                    '• Editable in text editor\n• Optimized for GitHub display\n• Simple format',
                  usage: 'Document editing, version control'
                }
              }
            },
            pdfModes: {
              title: 'PDF Generation Modes (select one)',
              modes: {
                pixelPerfect: {
                  name: '🎨 Pixel Perfect',
                  subtitle: '(Default, Recommended)',
                  description:
                    'Uses browser print function to generate PDF with exactly the same appearance as screen display',
                  features:
                    '• Complete reproduction of gradients, colors, layout\n• Confirmable with print preview\n• Highest quality output'
                },
                reliableFont: {
                  name: '🔥 Reliable Japanese Support',
                  description:
                    'Directly generates PDF with jsPDF library, ensuring Japanese font embedding',
                  features:
                    '• Guaranteed Japanese font embedding\n• Complete prevention of garbled text\n• CSP compliant and secure\n• Advanced features like watermarks and table of contents'
                },
                textBased: {
                  name: '🔤 Text-Based',
                  subtitle: '(Legacy PWA Method)',
                  description: 'Simple PDF generation centered on text utilizing PWA features',
                  features:
                    '• Utilizes PWA save and share functions\n• Text searchable and copyable\n• Minimal file size\n• Mobile optimized'
                }
              }
            },
            exportOptions: {
              title: 'Common Export Options',
              options: {
                summary: {
                  name: '📊 Evaluation Summary',
                  description: 'Overview of scores, judgment results, and achievement rates',
                  formats: 'All formats'
                },
                guides: {
                  name: '📚 Guide Content',
                  description: 'Detailed explanations and examples for each checklist item',
                  formats: 'All formats'
                },
                notes: {
                  name: '📝 Evaluation Notes',
                  description: 'Added notes and comments',
                  formats: 'All formats'
                },
                sectionBreaks: {
                  name: '📄 Section Breaks',
                  description: 'Page breaks and dividers for each category',
                  formats: 'PDF, Markdown'
                }
              }
            },
            exportNote:
              '📌 Note: PDF generation modes are exclusive. Only one of the 3 modes can be selected. By default, the highest quality "Pixel Perfect" mode is selected.'
          },
          historyManagement: {
            title: 'History Management',
            content:
              'Automatically saves past evaluation results.\n• Display latest 5 items in sidebar\n• List view of all history\n• Individual deletion function\n• Re-edit function (before completion only)'
          },
          pwaSupport: {
            title: 'PWA Support & Advanced Features',
            content:
              '• Add to home screen\n• Offline operation\n• Platform-adaptive features\n• Font cache system\n• Device-specific optimization\n• Automatic updates'
          }
        }
      },
      privacy: {
        title: 'Privacy',
        emoji: '🔐',
        description: 'Data handling and security',
        content: 'Designed with user privacy protection as the top priority.',
        subSections: {
          localStorage: {
            title: 'Local Storage',
            content:
              '• All data is stored only on your device\n• No data transmission to servers\n• No data provision to third parties\n• No collection of personally identifiable information'
          },
          security: {
            title: 'Security',
            content:
              '• Enforced HTTPS communication\n• Content Security Policy implementation\n• XSS attack prevention measures\n• Same-Origin Policy compliance'
          },
          dataDeletion: {
            title: 'Data Deletion',
            content:
              'Users can delete saved data at any time. Data is also completely deleted when browser data is cleared.'
          }
        }
      },
      troubleshooting: {
        title: 'Troubleshooting',
        emoji: '🔧',
        description: 'Common problems and solutions',
        content: 'Here are solutions for problems that may occur during use.',
        subSections: {
          dataNotSaved: {
            title: 'Data Not Saved',
            content:
              '• Check browser private mode\n• Check storage capacity\n• Verify local storage is enabled in browser settings\n• Try a different browser'
          },
          scoreNotDisplayed: {
            title: 'Score Not Displayed',
            content:
              '• Reload the page\n• Clear browser cache\n• Verify JavaScript is enabled\n• Check browser console for errors'
          },
          exportFailed: {
            title: 'Export Failed',
            content:
              '• Check popup blocking\n• Check download settings\n• Check browser permission settings\n• Verify sufficient storage capacity'
          },
          otherIssues: {
            title: 'Other Issues',
            content:
              "If the above doesn't resolve the issue, please feel free to contact us through GitHub Issues. We will provide support to the best of our ability."
          }
        }
      }
    }
  },

  // Accessibility
  accessibility: {
    skipToContent: 'Skip to content',
    mainNavigation: 'Main navigation',
    searchForm: 'Search form',
    languageSelector: 'Language selector',
    themeToggle: 'Theme toggle',
    closeDialog: 'Close dialog',
    openMenu: 'Open menu',
    expandSection: 'Expand section',
    collapseSection: 'Collapse section'
  },

  // Date & Time
  datetime: {
    justNow: 'Just now',
    minutesAgo: 'minutes ago',
    hoursAgo: 'hours ago',
    daysAgo: 'days ago',
    weeksAgo: 'weeks ago',
    monthsAgo: 'months ago',
    yearsAgo: 'years ago',
    createdAt: 'Created at',
    updatedAt: 'Updated at',
    completedAt: 'Completed at'
  },

  // Units & Numbers
  units: {
    items: 'items',
    percent: '%',
    score: 'score',
    total: 'total',
    completed: 'completed',
    remaining: 'remaining',
    of: 'of'
  },

  // About page translations
  about: {
    title: 'About',
    subtitle: 'Learn about our comprehensive fact-checking system',
    hero: {
      title: 'Practical Fact-Check Checklist',
      subtitle:
        'A Progressive Web App (PWA) for scientifically and systematically evaluating information reliability',
      description: [
        'In an era flooded with misinformation and misleading content, this practical tool supports the improvement of information literacy.',
        'By checking 20 items across 4 categories, it quantifies information reliability and supports objective judgment.'
      ],
      startButton: 'Get Started Now'
    },
    sections: {
      features: 'Features',
      howItWorks: 'How It Works',
      categories: 'Evaluation Categories',
      techStack: 'Technology',
      performance: 'Performance'
    },
    sectionDescriptions: {
      howItWorks: 'Evaluate information reliability in 4 simple steps',
      categories: 'Multi-dimensional information evaluation across 4 categories',
      techStack: 'High-performance application built with cutting-edge technology',
      performance: 'High-quality scores from Lighthouse audits'
    },
    stats: {
      performance: 'Performance',
      accessibility: 'Accessibility',
      bestPractices: 'Best Practices',
      seo: 'SEO'
    },
    cta: {
      title: 'Get Started Now',
      description: 'Ready to evaluate information reliability scientifically and systematically?',
      startButton: 'Start Evaluation',
      helpButton: 'Learn More'
    },
    features: {
      privacy: {
        title: 'Privacy First',
        description: 'All data remains on your device with no tracking or data collection',
        details: [
          'No server communication - all processing done locally',
          'No tracking or analytics installed',
          'All data stored only in browser localStorage',
          'Complete privacy protection ensured'
        ]
      },
      offline: {
        title: 'Offline Functionality',
        description: 'Works completely offline as a Progressive Web App',
        details: [
          'Full functionality available without internet connection',
          'Installable as desktop/mobile app',
          'Service worker for offline caching',
          'Quick startup and responsive performance'
        ]
      },
      scientific: {
        title: 'Scientific Methodology',
        description: 'Evidence-based evaluation system following academic standards',
        details: [
          '20-item structured checklist across 4 categories',
          'Quantitative scoring with confidence levels',
          'Based on journalism and academic research standards',
          'Objective and reproducible evaluation process'
        ]
      },
      export: {
        title: 'Multi-format Export',
        description: 'Export evaluation results in various formats for sharing and archiving',
        details: [
          'PDF export with Japanese font support',
          'HTML format for web sharing',
          'JSON for data exchange',
          'Markdown for documentation'
        ]
      },
      history: {
        title: 'Evaluation History',
        description: 'Automatic saving and management of past evaluations',
        details: [
          'Automatic saving of completed evaluations',
          'Quick access to recent evaluations',
          'Comparative analysis capabilities',
          'Export of historical data'
        ]
      },
      support: {
        title: 'Accessibility Support',
        description: 'Designed for universal access and usability',
        details: [
          'Screen reader compatibility',
          'Keyboard navigation support',
          'High contrast mode available',
          'Responsive design for all devices'
        ]
      }
    },
    steps: {
      step1: {
        title: 'Input Information',
        description: 'Enter the title and overview of information to be evaluated'
      },
      step2: {
        title: 'Systematic Evaluation',
        description: 'Work through the 20-item checklist across 4 categories'
      },
      step3: {
        title: 'Score Assessment',
        description: 'Review the automatically calculated reliability score and confidence level'
      },
      step4: {
        title: 'Final Judgment',
        description: 'Make your final decision and export results as needed'
      }
    },
    categories: {
      critical: {
        name: 'Critical Evaluation',
        description: 'Essential items for basic reliability assessment',
        items: 6
      },
      detailed: {
        name: 'Detailed Evaluation',
        description: 'In-depth quality and expertise assessment',
        items: 5
      },
      verification: {
        name: 'Verification & Cross-checking',
        description: 'Verification and supporting evidence assessment',
        items: 5
      },
      context: {
        name: 'Context & Bias',
        description: 'Context appropriateness and bias assessment',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'Latest reactive framework with runes for optimal performance'
      },
      framework: {
        name: 'SvelteKit',
        description: 'Full-stack framework with static generation support'
      },
      language: {
        name: 'TypeScript',
        description: 'Type-safe development with strict configuration'
      },
      styling: {
        name: 'Custom CSS',
        description: 'Modern styling with CSS custom properties and dark mode'
      },
      pwa: {
        name: 'Progressive Web App',
        description: 'Installable app with offline functionality'
      },
      export: {
        name: 'Multi-format Export',
        description: 'PDF, HTML, JSON, Markdown export capabilities'
      }
    }
  },

  // Privacy page translations
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Our commitment to protecting your privacy',
    lastUpdated: 'Last updated: January 1, 2025',
    introduction: {
      title: 'Privacy-First Design',
      content:
        'Fact Checklist is designed with privacy as a core principle. All data processing occurs locally on your device with no server communication or data collection.'
    },
    dataCollection: {
      title: 'Data Collection',
      description: 'We do not collect any personal data or usage analytics.',
      details: [
        'No server communication - all processing local',
        'No tracking cookies or analytics installed',
        'No personal information collected',
        'No usage data transmitted'
      ]
    },
    localStorage: {
      title: 'Local Storage Usage',
      description: 'Data is stored only in your browser for application functionality.',
      details: [
        'Evaluation data stored in browser localStorage',
        'Language preferences saved locally',
        'No cloud synchronization or backup',
        'Data remains on your device only'
      ]
    },
    offlineFunctionality: {
      title: 'Offline Functionality',
      description: 'The application works completely offline without any network requests.',
      details: [
        'Progressive Web App with service worker',
        'All resources cached locally',
        'No external API calls or data fetching',
        'Complete functionality without internet'
      ]
    },
    securityMeasures: {
      title: 'Security Measures',
      description: 'Built-in security measures to protect your data and privacy.',
      details: [
        'Content Security Policy (CSP) implemented',
        'No third-party scripts or tracking',
        'Secure coding practices followed',
        'Regular security updates'
      ]
    },
    dataRetention: {
      title: 'Data Retention',
      description: 'You have complete control over your data retention.',
      details: [
        'Data persists only as long as you keep it',
        'Easy deletion through browser settings',
        'No automatic data expiration',
        'Clear instructions for data removal'
      ]
    },
    policyUpdates: {
      title: 'Policy Updates',
      description: 'Any changes to this privacy policy will be clearly communicated.',
      details: [
        'Updates announced on GitHub repository',
        'Version history maintained',
        'Clear notification of significant changes',
        'Continued use implies acceptance'
      ]
    },
    contact: {
      title: 'Contact Information',
      content: 'If you have questions about this privacy policy, please contact us via ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // Forms
  forms: {
    titleLabel: 'Title',
    titlePlaceholder: 'Example: Article about COVID-19 vaccine effectiveness',
    descriptionLabel: 'Target Information Overview',
    descriptionPlaceholder: 'Please enter details of the information to be evaluated...',
    notesLabel: 'Evaluation Notes & Additional Verification Items',
    notesPlaceholder:
      'Record any questions, additional items to verify, overall impressions, etc...'
  },

  // UI texts
  ui: {
    quickStartGuide:
      'Start with "Critical Evaluation" first to verify basic reliability. As you check each item, the score on the right will update in real-time.',
    guideModeDetailed: '📖 Detailed Guide Mode',
    guideModeNormal: '📝 Normal Mode',
    completeEvaluation: '✅ Complete Evaluation'
  },

  // Checklist items
  checklistItems: {
    // Critical evaluation
    'source-authority': {
      title: 'Publication from authoritative sources',
      description:
        'Government agencies, academic institutions, professional organizations, peer-reviewed papers, reliable media, etc.',
      guideTitle: '🏛️ Criteria for Authoritative Sources',
      guideContent:
        'Government/Public institutions: Ministries, statistical bureaus, central banks, courts, etc.\nAcademic institutions: Universities, research institutes, academic societies, peer-reviewed journals\nProfessional organizations: Domestic and international organizations in relevant fields\nReliable media: News organizations with clear editorial policies and track records of corrections/apologies',
      examplesGood: [
        'Ministry of Health statistical data',
        'Nature journal peer-reviewed papers',
        'Official Bank announcements'
      ],
      examplesBad: [
        'Personal blog information',
        'Anonymous forum posts',
        'Advertisement-focused sites'
      ]
    },
    'source-primary': {
      title: 'Primary source verification',
      description: 'Direct information from the source, not hearsay or secondhand reports',
      guideTitle: '🎯 How to Identify Primary Sources',
      guideContent:
        'Primary sources: Research papers by authors themselves, witness testimonies, official announcements, raw data\nSecondary sources: Commentary articles, summary sites, third-party analyses\nChecking points: Pay attention to expressions like "according to" or "reported by"',
      examplesGood: [
        'Papers published by researchers themselves',
        'Company earnings announcements',
        'Government official statistics'
      ],
      examplesBad: ['"According to experts"', '"A certain survey" without clear attribution']
    },
    'source-multiple': {
      title: 'Multiple independent sources',
      description: 'Similar reports or confirmations from different positions/organizations',
      guideTitle: '🔄 How to Verify Independence',
      guideContent:
        'Independent sources: Sources with different organizations, funding, and interests\nMinimum standard: Confirmation from 2-3 independent reliable sources\nNote: Articles based on the same press release are not "independent"',
      examplesGood: [
        'Government announcement + academic research + multiple media reports',
        'Similar results from different research institutions'
      ],
      examplesBad: ['Multiple media within the same corporate group', 'Reposted articles only']
    },
    'warning-anonymous': {
      title: 'Not anonymous or unattributed information',
      description: 'Creator/publisher can be clearly identified',
      guideTitle: '🔍 Key Points for Source Identification',
      guideContent:
        'Required information: Real name of creator, affiliation, contact information, expertise\nWarning signs: "According to internal sources", "anonymous experts", "a certain study"\nAcceptable anonymity: Source protection in journalism (but reporter must be identifiable)',
      examplesGood: [
        'According to Prof. Ichiro Tanaka (University of Tokyo Medical School)',
        'Statement by Ministry of Health Division Chief'
      ],
      examplesBad: ['According to a certain doctor', 'Sources say', 'Anonymous expert']
    },
    'warning-sensational': {
      title: 'Few sensational or inflammatory expressions',
      description: 'Calm and objective description, no excessive emotional appeals',
      guideTitle: '⚠️ How to Identify Sensational Expressions',
      guideContent:
        'Warning expressions: "Absolutely", "Completely", "Shocking", "Stunning", "What X industry hides"\nEmotional manipulation: Expressions that incite fear, anger, jealousy\nAppropriate expressions: "According to research", "Data shows", "Expert opinion"',
      examplesGood: [
        'Research showed improvement in 75% of subjects',
        'Statistically significant difference confirmed by data'
      ],
      examplesBad: ['Shocking truth doctors never tell!', 'Industry cover-up exposed']
    },
    'warning-logical': {
      title: 'No logical contradictions',
      description: 'Content is consistent with no obvious logical leaps',
      guideTitle: '🧠 How to Check Logical Consistency',
      guideContent:
        'Check items:\n• Are premises and conclusions properly connected?\n• Are causal relationships clearly shown?\n• Are contradictory claims made simultaneously?\nCommon logical fallacies: Confusing correlation with causation, extreme generalizations',
      examplesGood: [
        'Statistically significant analysis considering other factors',
        'Step-by-step logical development'
      ],
      examplesBad: [
        'A and B happened together so A caused B',
        'Extreme generalizations from examples'
      ]
    },
    // Detailed evaluation
    'time-recent': {
      title: 'Information freshness',
      description: 'Publication date is specified and content maintains appropriate freshness',
      guideTitle: '⏰ Judging Appropriate Information Freshness',
      guideContent:
        'Field-specific standards:\n• News/Current affairs: Within days to 1 week\n• Medicine/Science: Within 2-3 years (up to 5 years for basic research)\n• Technology/IT: Within 1-2 years\n• Law/Systems: Reflects latest revisions\nCheck points: Clear publication date/time, last update date recorded',
      examplesGood: [
        'Published December 2024',
        'Last updated: January 2025',
        'Reflects latest legal revisions'
      ],
      examplesBad: [
        'No date listed',
        '5-year-old technical information',
        'Explanation based on old laws'
      ]
    },
    'time-update': {
      title: 'Update and correction history',
      description: 'Content is updated as necessary with transparent corrections',
      guideTitle: '📝 Checking Transparent Updates and Corrections',
      guideContent:
        'Good update characteristics:\n• Clear description of updates\n• Explanation of correction reasons\n• Recording of update date/time\n• Notes for important changes\nReliability indicator: Attitude of acknowledging and correcting mistakes',
      examplesGood: [
        'Updated January 15, 2025: Statistical data replaced with latest version',
        'Clear correction history'
      ],
      examplesBad: [
        'Old information left unchanged',
        'No correction records',
        'Silent content changes'
      ]
    },
    'expert-knowledge': {
      title: 'Appropriate expertise',
      description: 'Creator has sufficient knowledge/experience in the relevant field',
      guideTitle: '🎓 How to Verify Expertise',
      guideContent:
        'Check items:\n• Degrees/qualifications in related fields\n• Practical experience/research history\n• Academic presentation/publication record\n• Professional institutional experience\nNote: Expertise in related fields is important (e.g., doctors discussing economics)',
      examplesGood: [
        'Infectious disease specialist explaining vaccines',
        'Economics PhD analyzing monetary policy'
      ],
      examplesBad: [
        'Celebrity outside their field making medical claims',
        'Person with unclear qualifications explaining law'
      ]
    },
    'detail-sufficient': {
      title: 'Sufficient detail and evidence',
      description:
        'Process leading to conclusions and supporting evidence are appropriately explained',
      guideTitle: '📋 Judging Sufficiency of Evidence',
      guideContent:
        'Required elements:\n• Specific data supporting claims\n• Methodology explanation\n• Mention of limitations/constraints\n• Reference to opposing views\nWarning signs: Conclusions only with unclear process, vague evidence',
      examplesGood: [
        'Sample size, statistical methods, confidence intervals included',
        'Detailed methodology explanation'
      ],
      examplesBad: [
        'Only states effect proven without details',
        'Conclusions only with unclear evidence'
      ]
    },
    'citation-proper': {
      title: 'Proper citations and references',
      description: 'Reliable sources are shown for important claims',
      guideTitle: '📚 Standards for Proper Citations',
      guideContent:
        'Content requiring citation:\n• Statistical data/numbers\n• Specialized claims\n• Other research results\n• Legal/regulatory content\nCitation format: Minimum information including author name, publication year, title, publisher',
      examplesGood: [
        'According to Tanaka (2024) research...',
        'Ministry of Health statistics (2025)...'
      ],
      examplesBad: ['According to research (source unclear)', 'Data shows (details unclear)']
    },
    'citation-accessible': {
      title: 'Verifiability of cited sources',
      description: 'Cited sources can actually be accessed and verified',
      guideTitle: '🌐 Checking Citation Accessibility',
      guideContent:
        'Ideal state:\n• Direct links or DOI\n• Publicly available sources\n• Searchable specific information\nAcceptable range: Paid databases, materials verifiable at libraries\nProblematic citations: Private conversations, unverifiable internal materials',
      examplesGood: ['With URL links', 'Papers with DOI numbers', 'Books with ISBN numbers'],
      examplesBad: [
        'According to internal materials',
        'In private discussions',
        'Inaccessible materials'
      ]
    },
    // Verification and cross-checking
    'cross-check': {
      title: 'Cross-reference with other sources',
      description: 'Similar content can be confirmed by multiple independent sources',
      guideTitle: '🔍 Effective Cross-checking Methods',
      guideContent:
        'Step-by-step verification:\n1. Find other reliable sources reporting the same facts\n2. Check reports from different angles on the same event\n3. Research opposing views and critical perspectives\nVerification tools: Google Scholar, public databases, fact-checking sites',
      examplesGood: [
        'Similar results in multiple peer-reviewed papers',
        'Consistency verification with government statistics'
      ],
      examplesBad: ['Only one source', 'Multiple articles using same source']
    },
    'fact-check': {
      title: 'Verification by fact-checking organizations',
      description: 'Verification exists from reliable fact-checking institutions',
      guideTitle: '✅ Reliable Fact-checking Organizations',
      guideContent:
        'International organizations: Snopes, PolitiFact, AFP Fact Check, Full Fact (UK), etc.\nJapanese organizations: InFact, Japan Fact-check Center, FIJ (Fact Check Initiative)\nMedia-based: NHK, Asahi Shimbun, Yomiuri Shimbun fact-checking departments\nVerification method: Search relevant information on fact-checking sites',
      examplesGood: [
        'Multiple fact-checking organizations judged as "true"',
        'Verification by international organizations'
      ],
      examplesBad: ['Judged as "false information" by fact-checking', 'Unverified information']
    },
    'data-verifiable': {
      title: 'Verifiable data',
      description: 'Data supporting claims can be objectively verified',
      guideTitle: '📈 Checking Data Verifiability',
      guideContent:
        'Elements to verify:\n• Data source (research institutions, statistical bureaus, etc.)\n• Clear collection methods/periods\n• Sample size/target details\n• Access to raw or detailed data\nWarning signs: Only "internal data" or "proprietary research" without details',
      examplesGood: [
        'Ministry of Internal Affairs statistics data',
        'Data published in paper supplementary materials'
      ],
      examplesBad: ['According to our survey (no detailed survey overview)', 'Internal data only']
    },
    methodology: {
      title: 'Validity of methods/methodology',
      description: 'Research or survey methodology is appropriate and reproducible',
      guideTitle: '🔬 Evaluating Methodological Validity',
      guideContent:
        'Evaluation points:\n• Appropriateness of research design (RCT, cohort studies, etc.)\n• Presence of bias countermeasures\n• Validity of statistical methods\n• Reproducibility assurance (protocol publication, etc.)\nPoints verifiable by non-experts: Detailed methodology description, comparison with other research',
      examplesGood: [
        'Double-blind trials',
        'Appropriate control group setting',
        'Protocol publication'
      ],
      examplesBad: [
        'No methodology description',
        'Biased sample selection',
        'Non-reproducible methods'
      ]
    },
    // Context and bias evaluation
    'bias-disclosure': {
      title: 'Disclosure of conflicts of interest',
      description: 'Financial, political, and personal interests are appropriately disclosed',
      guideTitle: '💰 Items to Check for Conflicts of Interest',
      guideContent:
        'Interests to disclose:\n• Research funding sources\n• Corporate fees/consulting payments\n• Financial benefits like stock ownership\n• Political/ideological positions\nVerification method: Look for mentions of "conflict of interest", "COI", "funding"',
      examplesGood: [
        'This research was conducted with funding from XX Foundation',
        'COI (conflict of interest) clearly stated'
      ],
      examplesBad: [
        'Pharmaceutical company research with no COI disclosure',
        'Unclear funding sources'
      ]
    },
    'balanced-view': {
      title: 'Balanced perspective',
      description: 'Different positions and opposing views are also considered',
      guideTitle: '⚖️ Perspectives for Balance Evaluation',
      guideContent:
        'Check points:\n• Introduction of opposing/critical views\n• Mention of different research results\n• Reference to uncertainties/limitations\n• Multiple expert opinions\nWarning signs: One-sided claims only, cherry-picking favorable information',
      examplesGood: [
        'On the other hand, Professor XX shows a different view',
        'Comparison of multiple research results'
      ],
      examplesBad: ['Only listing supporting evidence', 'No mention of opposing views']
    },
    'context-adequate': {
      title: 'Sufficient background information',
      description:
        'Background and context necessary for understanding the information are provided',
      guideTitle: '🌍 Items to Check for Contextual Information',
      guideContent:
        'Necessary background information:\n• Historical background/previous research\n• Related laws/systems\n• Social/cultural background\n• International trends/comparisons\nEvaluation point: Providing context for readers to properly understand/judge',
      examplesGood: [
        'Past similar cases',
        'Comparison data with other countries also presented',
        'Historical background explanation'
      ],
      examplesBad: [
        'Single numbers only',
        'No background information',
        'Comparisons ignoring context'
      ]
    },
    'scope-clear': {
      title: 'Clear scope of application',
      description: 'Applicable scope and limitations of information are clearly shown',
      guideTitle: '🎯 Clarifying Scope of Application',
      guideContent:
        'Scope to clarify:\n• Target people/regions/periods\n• Research limitations/constraints\n• Degree of generalizability\n• Excluded cases\nImportance: To prevent excessive generalization or misuse',
      examplesGood: [
        'Research targeted Japanese adult males, so application to other groups should be cautious',
        'Clear limitation statements'
      ],
      examplesBad: [
        'Unlimited generalization of limited research results',
        'Unclear scope of application'
      ]
    }
  }
};

// Checklist items translations (placeholder - needs translation)
export const checklistItems = {
  // Critical evaluation
  'source-authority': {
    title: 'Publication from authoritative sources',
    description:
      'Government agencies, academic institutions, professional organizations, peer-reviewed papers, reliable media, etc.',
    guideTitle: '🏛️ Criteria for Authoritative Sources',
    guideContent:
      'Government/Public institutions: Ministries, statistical bureaus, central banks, courts, etc.\nAcademic institutions: Universities, research institutes, academic societies, peer-reviewed journals\nProfessional organizations: Domestic and international organizations in relevant fields\nReliable media: News organizations with clear editorial policies and track records of corrections/apologies',
    examplesGood: [
      'Ministry of Health statistical data',
      'Peer-reviewed paper in Nature',
      'Bank of Japan official announcement'
    ],
    examplesBad: [
      'Personal blog information',
      'Anonymous forum posts',
      'Advertisement-purpose sites'
    ]
  },
  'source-primary': {
    title: 'Primary source verification',
    description: 'Direct information from original sources, not hearsay or secondhand',
    guideTitle: '🎯 How to Identify Primary Sources',
    guideContent:
      'Primary sources: Researcher\'s own papers, witness testimony, official announcements, raw data\nSecondary sources: Commentary articles, summary sites, other\'s analysis\nVerification points: Watch for expressions like "according to..." or "reported by..."',
    examplesGood: [
      'Paper published by researcher themselves',
      'Company earnings announcement',
      'Government official statistics'
    ],
    examplesBad: ['"According to experts"', '"In a certain survey" and other vague citations']
  },
  'source-multiple': {
    title: 'Multiple independent sources',
    description: 'Similar reports or confirmations from different positions/organizations',
    guideTitle: '🔄 How to Verify Independence',
    guideContent:
      'Independent sources: Sources with different organizations, funding, and interests\nMinimum standard: Confirmation from 2-3 independent reliable sources\nNote: Articles based on the same press release are not "independent"',
    examplesGood: [
      'Government announcement + academic research + multiple media reports',
      'Similar results from different research institutions'
    ],
    examplesBad: ['Multiple media within same corporate group', 'Reposted articles only']
  },
  'warning-anonymous': {
    title: 'Not anonymous or unidentified information',
    description: 'Creator/publisher can be clearly identified',
    guideTitle: '🔍 Verification Points for Source Identification',
    guideContent:
      'Required information: Author\'s real name, affiliation, contact, expertise\nWarning signs: "According to internal sources" "Anonymous expert" "A certain study"\nAcceptable anonymity: Journalism source protection (but reporter must be identifiable)',
    examplesGood: [
      'According to Dr. Ichiro Tanaka (University of Tokyo Medical School Professor)',
      'Statement by Ministry of Health ○○ Division Chief'
    ],
    examplesBad: ['According to a certain doctor', 'According to sources', 'Anonymous expert']
  },
  'warning-sensational': {
    title: 'Few inflammatory or sensational expressions',
    description: 'Calm and objective description, no excessive emotional appeals',
    guideTitle: '⚠️ How to Identify Inflammatory Expressions',
    guideContent:
      'Warning expressions: "Absolutely" "Completely" "Shocking" "Sensational" "Hidden by ○○ industry"\nEmotional manipulation: Expressions that incite fear, anger, jealousy\nAppropriate expressions: "According to research" "Data shows" "Expert opinion"',
    examplesGood: [
      'Research showed improvement in 75% of subjects',
      'Data confirmed statistically significant difference'
    ],
    examplesBad: ['Shocking truth doctors never tell!', 'Industry cover-up shocking facts']
  },
  'warning-logical': {
    title: 'No logical contradictions',
    description: 'Content is consistent with no obvious logical leaps',
    guideTitle: '🧠 How to Verify Logical Consistency',
    guideContent:
      'Check items:\n• Are premises and conclusions properly connected?\n• Are causal relationships clearly shown?\n• Are contradictory claims made simultaneously?\nCommon logical fallacies: Confusing correlation with causation, extreme generalizations',
    examplesGood: [
      'Statistically significant analysis considering other factors',
      'Step-by-step logical development'
    ],
    examplesBad: ['A and B happened together so A caused B', 'Generalization from extreme examples']
  },
  // Detailed evaluation
  'time-recent': {
    title: 'Information recency',
    description: 'Publication date is specified and maintains appropriate freshness for content',
    guideTitle: '⏰ Judging Appropriate Information Freshness',
    guideContent:
      'Field-specific standards:\n• News/Current events: Within days to 1 week\n• Medicine/Science: Within 2-3 years (basic research up to 5 years)\n• Technology/IT: Within 1-2 years\n• Law/Regulations: Reflects latest revisions\nVerification points: Publication date/time specified, last update date recorded',
    examplesGood: [
      'Published December 2024',
      'Last updated: January 2025',
      'Reflects latest legal revisions'
    ],
    examplesBad: [
      'No date specified',
      '5-year-old technology information',
      'Explanation based on old laws'
    ]
  },
  'time-update': {
    title: 'Update/correction history',
    description: 'Content is updated as needed and corrections are made transparently',
    guideTitle: '📝 Verification of Transparent Updates/Corrections',
    guideContent:
      'Good update characteristics:\n• Clear specification of update content\n• Explanation of correction reasons\n• Recording of update date/time\n• Notes for important changes\nReliability indicator: Attitude of acknowledging and correcting mistakes',
    examplesGood: [
      'Updated January 15, 2025: Statistical data replaced with latest version',
      'Clear correction history'
    ],
    examplesBad: [
      'Old information left unchanged',
      'No correction records',
      'Silent content changes'
    ]
  },
  'expert-knowledge': {
    title: 'Appropriate expertise',
    description: 'Author has sufficient knowledge/experience in the relevant field',
    guideTitle: '🎓 How to Verify Expertise',
    guideContent:
      'Verification items:\n• Degrees/qualifications in related fields\n• Practical experience/research history\n• Academic presentation/publication record\n• Professional institution career\nNote: Expertise in related fields is important (e.g., doctors discussing economics)',
    examplesGood: [
      'Infectious disease specialist explaining vaccines',
      'Economics PhD analyzing monetary policy'
    ],
    examplesBad: [
      'Non-expert celebrity making medical claims',
      'Person with unknown qualifications explaining law'
    ]
  },
  'detail-sufficient': {
    title: 'Sufficient detail and evidence',
    description: 'Process and evidence leading to conclusions are appropriately explained',
    guideTitle: '📋 Judging Evidence Sufficiency',
    guideContent:
      'Necessary elements:\n• Specific data supporting claims\n• Methodology explanation\n• Mention of limitations/constraints\n• Reference to opposing opinions\nWarning signs: Only conclusions without process, vague evidence',
    examplesGood: [
      'Sample size, statistical methods, confidence intervals specified',
      'Detailed methodology explanation'
    ],
    examplesBad: ['Only states effect proven without details', 'Conclusions only without evidence']
  },
  'citation-proper': {
    title: 'Appropriate citations/references',
    description: 'Reliable sources are shown for important claims',
    guideTitle: '📚 Standards for Appropriate Citations',
    guideContent:
      'Content requiring citation:\n• Statistical data/numbers\n• Specialist claims\n• Other research results\n• Laws/regulations content\nCitation format: Minimum information like author name, publication year, title, publisher',
    examplesGood: [
      'According to Tanaka (2024) research...',
      'In Ministry of Health statistics (2025)...'
    ],
    examplesBad: ['According to research (source unknown)', 'Data shows (details unknown)']
  },
  'citation-accessible': {
    title: 'Citation source accessibility',
    description: 'Cited sources can be actually accessed and verified',
    guideTitle: '🌐 Verifying Citation Source Accessibility',
    guideContent:
      'Ideal state:\n• Direct links or DOI\n• Publicly available sources\n• Searchable specific information\nAcceptable range: Paid databases, library-verifiable materials\nProblematic citations: Private conversations, unverifiable internal materials',
    examplesGood: ['With URL links', 'Papers with DOI numbers', 'Books with ISBN numbers'],
    examplesBad: [
      'According to internal materials',
      'In personal discussions',
      'Inaccessible materials'
    ]
  },
  // Verification & cross-checking
  'cross-check': {
    title: 'Cross-checking with other sources',
    description: 'Similar content can be confirmed by multiple independent sources',
    guideTitle: '🔍 Effective Cross-checking Methods',
    guideContent:
      'Step-by-step verification:\n1. Find other reliable sources reporting the same facts\n2. Confirm reports from different angles on the same event\n3. Research opposing opinions and critical perspectives\nVerification tools: Google Scholar, public databases, fact-check sites',
    examplesGood: [
      'Similar results in multiple peer-reviewed papers',
      'Consistency verification with government statistics'
    ],
    examplesBad: ['Only one source', 'Multiple articles using same source']
  },
  'fact-check': {
    title: 'Fact-checking organization verification',
    description: 'Verification by reliable fact-checking organizations',
    guideTitle: '✅ Reliable Fact-checking Organizations',
    guideContent:
      'International organizations: Snopes, PolitiFact, AFP Fact Check, Full Fact (UK), etc., organizations from different positions/regions\nJapanese organizations: InFact, Japan Fact-check Center, FIJ (Fact-Check Initiative), etc.\nMedia-based: NHK, Asahi Shimbun, Yomiuri Shimbun fact-check departments\nVerification method: Search relevant information on fact-check sites',
    examplesGood: [
      'Multiple fact-check organizations rated as "true"',
      'Verification by international organizations'
    ],
    examplesBad: ['Rated as "false information" by fact-checkers', 'Unverified information']
  },
  'data-verifiable': {
    title: 'Verifiable data',
    description: 'Data supporting claims can be objectively confirmed',
    guideTitle: '📈 Verifying Data Verifiability',
    guideContent:
      'Elements to verify:\n• Data source (research institutions, statistical bureaus, etc.)\n• Collection methods/periods specified\n• Sample size/target details\n• Access to raw or detailed data\nWarning signs: Only "internal data" or "proprietary research" without details',
    examplesGood: [
      'Ministry of Internal Affairs statistics data',
      'Data published in paper supplementary materials'
    ],
    examplesBad: ['According to our survey (no detailed survey overview)', 'Internal data only']
  },
  methodology: {
    title: 'Methodology validity',
    description: 'Research or survey methodology is appropriate and reproducible',
    guideTitle: '🔬 Methodology Validity Assessment',
    guideContent:
      'Assessment points:\n• Appropriateness of research design (RCT, cohort studies, etc.)\n• Presence of bias countermeasures\n• Statistical method validity\n• Reproducibility assurance (protocol publication, etc.)\nVerifiable by non-experts: Detailed methodology description, comparison with other research',
    examplesGood: [
      'Double-blind trials',
      'Appropriate control group setting',
      'Protocol publication'
    ],
    examplesBad: [
      'No methodology description',
      'Biased sample selection',
      'Non-reproducible methods'
    ]
  },
  // Context & bias evaluation
  'bias-disclosure': {
    title: 'Conflict of interest disclosure',
    description:
      'Financial, political, or personal conflicts of interest are appropriately disclosed',
    guideTitle: '💰 Conflict of Interest Verification Items',
    guideContent:
      'Conflicts to disclose:\n• Research funding sources\n• Corporate fees/consulting payments\n• Financial benefits like stock ownership\n• Political/ideological positions\nVerification method: Look for "conflict of interest," "COI," "funding" mentions',
    examplesGood: [
      'This research was conducted with ○○ Foundation grant',
      'COI (conflict of interest) specified'
    ],
    examplesBad: [
      'Pharmaceutical company research without COI disclosure',
      'Unknown funding source'
    ]
  },
  'balanced-view': {
    title: 'Balanced perspective',
    description: 'Different positions and opposing opinions are also considered',
    guideTitle: '⚖️ Balance Assessment Perspectives',
    guideContent:
      'Verification points:\n• Introduction of opposing opinions/critical perspectives\n• Mention of different research results\n• Mention of uncertainties/limitations\n• Multiple expert opinions\nWarning signs: Only one-sided claims, cherry-picking favorable information',
    examplesGood: [
      'On the other hand, Professor ○○ shows different view',
      'Comparison of multiple research results'
    ],
    examplesBad: ['Only listing supporting evidence', 'No mention of opposing opinions']
  },
  'context-adequate': {
    title: 'Sufficient background information',
    description: 'Background and context necessary for understanding information is provided',
    guideTitle: '🌍 Context Information Verification Items',
    guideContent:
      'Necessary background information:\n• Historical background/previous research\n• Related laws/regulations\n• Social/cultural background\n• International trends/comparisons\nAssessment point: Providing context for readers to properly understand/judge',
    examplesGood: [
      'Past similar cases',
      'Comparison data with other countries also presented',
      'Historical background explanation'
    ],
    examplesBad: [
      'Only isolated numbers',
      'No background information',
      'Context-ignoring comparisons'
    ]
  },
  'scope-clear': {
    title: 'Clear scope of application',
    description: 'Applicable scope and limitations of information are clearly indicated',
    guideTitle: '🎯 Clarifying Scope of Application',
    guideContent:
      'Scope to clarify:\n• Target people/regions/periods\n• Research limitations/constraints\n• Degree of generalizability\n• Excluded cases\nImportance: To prevent excessive generalization or misuse',
    examplesGood: [
      'Study targeted Japanese adult males, application to other groups should be cautious',
      'Limitations specified'
    ],
    examplesBad: [
      'Unlimited generalization of limited research results',
      'Unclear scope of application'
    ]
  }
};

// Confidence texts
export const confidenceTexts = {
  high: 'High reliability',
  medium: 'Medium reliability',
  low: 'Low reliability',
  veryLow: 'Reliability issues'
};

// Judgment advice
export const judgmentAdvices = {
  accept: 'Adoption recommended. Sufficient verification has been conducted.',
  caution: 'Additional verification recommended. Be cautious with important decisions.',
  reject: 'Rejection recommended. Look for more reliable sources.',
  lowConfidence: 'Caution required. Further verification needed.'
};

// UI specific texts
export const uiTexts = {
  quickStartGuide:
    'Start with "Critical Evaluation" first to verify basic reliability. As you check each item, the score on the right will update in real-time.',
  guideMode: {
    detailed: '📖 Detailed Guide Mode',
    normal: '📝 Normal Mode'
  },
  placeholders: {
    title: 'Example: Article about COVID-19 vaccine effectiveness',
    description: 'Please enter details of the information to be evaluated...',
    notes: 'Record any questions, additional items to verify, overall impressions, etc...'
  },
  defaultTitle: 'Fact Check_',
  menuToggleAriaLabel: 'Toggle menu',
  scoreLabels: {
    critical: '🚨 Critical',
    detailed: '📝 Detailed',
    verification: '🔍 Verification',
    context: '🌐 Context',
    total: 'Total Score'
  }
};

export default translations;
