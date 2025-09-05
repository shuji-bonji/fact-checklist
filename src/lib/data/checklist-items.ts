import type { CheckItem, CheckCategory } from '../types/checklist.js';
import { factChecklistI18n, t } from '../i18n/simple-store.svelte.js';

// カテゴリ情報の取得関数（動的翻訳対応）
export function getCategories(translationFunction?: (key: string) => string): CheckCategory[] {
  // 翻訳関数が提供されない場合は、現在のストアから取得
  const translate = translationFunction ?? t;

  return [
    {
      id: 'critical',
      name: translate('categories.critical.name'),
      description: translate('categories.critical.description'),
      color: '#e74c3c',
      emoji: translate('categories.critical.emoji')
    },
    {
      id: 'detailed',
      name: translate('categories.detailed.name'),
      description: translate('categories.detailed.description'),
      color: '#f39c12',
      emoji: translate('categories.detailed.emoji')
    },
    {
      id: 'verification',
      name: translate('categories.verification.name'),
      description: translate('categories.verification.description'),
      color: '#3498db',
      emoji: translate('categories.verification.emoji')
    },
    {
      id: 'context',
      name: translate('categories.context.name'),
      description: translate('categories.context.description'),
      color: '#9b59b6',
      emoji: translate('categories.context.emoji')
    }
  ];
}

// 後方互換性のための動的関数
export function getCategoriesCompat(): CheckCategory[] {
  return getCategories();
}

// DEPRECATED: 静的なCATEGORIESエクスポートは削除予定
// 既存コードとの互換性のために残しているが、動的な getCategories() を使用すること
export const CATEGORIES = getCategories();

// フォールバック用のカテゴリ作成関数
function createFallbackCategory(index: number): CheckCategory {
  const fallbackCategories: CheckCategory[] = [
    {
      id: 'critical',
      name: 'Critical',
      description: 'Critical evaluation',
      color: '#e74c3c',
      emoji: '🔴'
    },
    {
      id: 'detailed',
      name: 'Detailed',
      description: 'Detailed evaluation',
      color: '#f39c12',
      emoji: '🟡'
    },
    {
      id: 'verification',
      name: 'Verification',
      description: 'Verification and cross-checking',
      color: '#3498db',
      emoji: '🔵'
    },
    {
      id: 'context',
      name: 'Context',
      description: 'Context and bias evaluation',
      color: '#9b59b6',
      emoji: '🟣'
    }
  ];
  const fallbackCategory = fallbackCategories[index] ?? fallbackCategories[0];
  if (!fallbackCategory) {
    throw new Error(`Invalid fallback category index: ${index}`);
  }
  return fallbackCategory;
}

// チェックリスト項目の取得関数（動的翻訳対応）
export function getChecklistItems(translationFunction?: (key: string) => string): CheckItem[] {
  const categories = getCategories(translationFunction);
  return [
    // クリティカル評価（6項目）
    {
      id: 'source-authority',
      title: factChecklistI18n.getCheckItemTitle('source-authority'),
      description: factChecklistI18n.getCheckItemDescription('source-authority'),
      riskLevel: 'high',
      category: categories[0] ?? createFallbackCategory(0),
      checked: false,
      translationKey: 'source-authority',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('source-authority'),
        content: factChecklistI18n.getCheckItemGuideContent('source-authority'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('source-authority'),
          bad: factChecklistI18n.getCheckItemExamplesBad('source-authority')
        }
      }
    },
    {
      id: 'source-primary',
      title: factChecklistI18n.getCheckItemTitle('source-primary'),
      description: factChecklistI18n.getCheckItemDescription('source-primary'),
      riskLevel: 'high',
      category: categories[0] ?? createFallbackCategory(0),
      checked: false,
      translationKey: 'source-primary',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('source-primary'),
        content: factChecklistI18n.getCheckItemGuideContent('source-primary'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('source-primary'),
          bad: factChecklistI18n.getCheckItemExamplesBad('source-primary')
        }
      }
    },
    {
      id: 'source-multiple',
      title: factChecklistI18n.getCheckItemTitle('source-multiple'),
      description: factChecklistI18n.getCheckItemDescription('source-multiple'),
      riskLevel: 'high',
      category: categories[0] ?? createFallbackCategory(0),
      checked: false,
      translationKey: 'source-multiple',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('source-multiple'),
        content: factChecklistI18n.getCheckItemGuideContent('source-multiple'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('source-multiple'),
          bad: factChecklistI18n.getCheckItemExamplesBad('source-multiple')
        }
      }
    },
    {
      id: 'warning-anonymous',
      title: factChecklistI18n.getCheckItemTitle('warning-anonymous'),
      description: factChecklistI18n.getCheckItemDescription('warning-anonymous'),
      riskLevel: 'high',
      category: categories[0] ?? createFallbackCategory(0),
      checked: false,
      translationKey: 'warning-anonymous',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('warning-anonymous'),
        content: factChecklistI18n.getCheckItemGuideContent('warning-anonymous'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('warning-anonymous'),
          bad: factChecklistI18n.getCheckItemExamplesBad('warning-anonymous')
        }
      }
    },
    {
      id: 'warning-sensational',
      title: factChecklistI18n.getCheckItemTitle('warning-sensational'),
      description: factChecklistI18n.getCheckItemDescription('warning-sensational'),
      riskLevel: 'medium',
      category: categories[0] ?? createFallbackCategory(0),
      checked: false,
      translationKey: 'warning-sensational',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('warning-sensational'),
        content: factChecklistI18n.getCheckItemGuideContent('warning-sensational'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('warning-sensational'),
          bad: factChecklistI18n.getCheckItemExamplesBad('warning-sensational')
        }
      }
    },
    {
      id: 'warning-logical',
      title: factChecklistI18n.getCheckItemTitle('warning-logical'),
      description: factChecklistI18n.getCheckItemDescription('warning-logical'),
      riskLevel: 'medium',
      category: categories[0] ?? createFallbackCategory(0),
      checked: false,
      translationKey: 'warning-logical',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('warning-logical'),
        content: factChecklistI18n.getCheckItemGuideContent('warning-logical'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('warning-logical'),
          bad: factChecklistI18n.getCheckItemExamplesBad('warning-logical')
        }
      }
    },

    // 詳細評価（6項目）
    {
      id: 'time-recent',
      title: factChecklistI18n.getCheckItemTitle('time-recent'),
      description: factChecklistI18n.getCheckItemDescription('time-recent'),
      riskLevel: 'medium',
      category: categories[1] ?? createFallbackCategory(1),
      checked: false,
      translationKey: 'time-recent',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('time-recent'),
        content: factChecklistI18n.getCheckItemGuideContent('time-recent'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('time-recent'),
          bad: factChecklistI18n.getCheckItemExamplesBad('time-recent')
        }
      }
    },
    {
      id: 'time-update',
      title: factChecklistI18n.getCheckItemTitle('time-update'),
      description: factChecklistI18n.getCheckItemDescription('time-update'),
      riskLevel: 'low',
      category: categories[1] ?? createFallbackCategory(1),
      checked: false,
      translationKey: 'time-update',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('time-update'),
        content: factChecklistI18n.getCheckItemGuideContent('time-update'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('time-update'),
          bad: factChecklistI18n.getCheckItemExamplesBad('time-update')
        }
      }
    },
    {
      id: 'expert-knowledge',
      title: factChecklistI18n.getCheckItemTitle('expert-knowledge'),
      description: factChecklistI18n.getCheckItemDescription('expert-knowledge'),
      riskLevel: 'medium',
      category: categories[1] ?? createFallbackCategory(1),
      checked: false,
      translationKey: 'expert-knowledge',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('expert-knowledge'),
        content: factChecklistI18n.getCheckItemGuideContent('expert-knowledge'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('expert-knowledge'),
          bad: factChecklistI18n.getCheckItemExamplesBad('expert-knowledge')
        }
      }
    },
    {
      id: 'detail-sufficient',
      title: factChecklistI18n.getCheckItemTitle('detail-sufficient'),
      description: factChecklistI18n.getCheckItemDescription('detail-sufficient'),
      riskLevel: 'medium',
      category: categories[1] ?? createFallbackCategory(1),
      checked: false,
      translationKey: 'detail-sufficient',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('detail-sufficient'),
        content: factChecklistI18n.getCheckItemGuideContent('detail-sufficient'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('detail-sufficient'),
          bad: factChecklistI18n.getCheckItemExamplesBad('detail-sufficient')
        }
      }
    },
    {
      id: 'citation-proper',
      title: factChecklistI18n.getCheckItemTitle('citation-proper'),
      description: factChecklistI18n.getCheckItemDescription('citation-proper'),
      riskLevel: 'medium',
      category: categories[1] ?? createFallbackCategory(1),
      checked: false,
      translationKey: 'citation-proper',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('citation-proper'),
        content: factChecklistI18n.getCheckItemGuideContent('citation-proper'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('citation-proper'),
          bad: factChecklistI18n.getCheckItemExamplesBad('citation-proper')
        }
      }
    },
    {
      id: 'citation-accessible',
      title: factChecklistI18n.getCheckItemTitle('citation-accessible'),
      description: factChecklistI18n.getCheckItemDescription('citation-accessible'),
      riskLevel: 'low',
      category: categories[1] ?? createFallbackCategory(1),
      checked: false,
      translationKey: 'citation-accessible',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('citation-accessible'),
        content: factChecklistI18n.getCheckItemGuideContent('citation-accessible'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('citation-accessible'),
          bad: factChecklistI18n.getCheckItemExamplesBad('citation-accessible')
        }
      }
    },

    // 検証・照合（4項目）
    {
      id: 'cross-check',
      title: factChecklistI18n.getCheckItemTitle('cross-check'),
      description: factChecklistI18n.getCheckItemDescription('cross-check'),
      riskLevel: 'high',
      category: categories[2] ?? createFallbackCategory(2),
      checked: false,
      translationKey: 'cross-check',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('cross-check'),
        content: factChecklistI18n.getCheckItemGuideContent('cross-check'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('cross-check'),
          bad: factChecklistI18n.getCheckItemExamplesBad('cross-check')
        }
      }
    },
    {
      id: 'fact-check',
      title: factChecklistI18n.getCheckItemTitle('fact-check'),
      description: factChecklistI18n.getCheckItemDescription('fact-check'),
      riskLevel: 'medium',
      category: categories[2] ?? createFallbackCategory(2),
      checked: false,
      translationKey: 'fact-check',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('fact-check'),
        content: factChecklistI18n.getCheckItemGuideContent('fact-check'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('fact-check'),
          bad: factChecklistI18n.getCheckItemExamplesBad('fact-check')
        }
      }
    },
    {
      id: 'data-verifiable',
      title: factChecklistI18n.getCheckItemTitle('data-verifiable'),
      description: factChecklistI18n.getCheckItemDescription('data-verifiable'),
      riskLevel: 'medium',
      category: categories[2] ?? createFallbackCategory(2),
      checked: false,
      translationKey: 'data-verifiable',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('data-verifiable'),
        content: factChecklistI18n.getCheckItemGuideContent('data-verifiable'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('data-verifiable'),
          bad: factChecklistI18n.getCheckItemExamplesBad('data-verifiable')
        }
      }
    },
    {
      id: 'methodology',
      title: factChecklistI18n.getCheckItemTitle('methodology'),
      description: factChecklistI18n.getCheckItemDescription('methodology'),
      riskLevel: 'low',
      category: categories[2] ?? createFallbackCategory(2),
      checked: false,
      translationKey: 'methodology',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('methodology'),
        content: factChecklistI18n.getCheckItemGuideContent('methodology'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('methodology'),
          bad: factChecklistI18n.getCheckItemExamplesBad('methodology')
        }
      }
    },

    // 文脈・バイアス評価（4項目）
    {
      id: 'bias-disclosure',
      title: factChecklistI18n.getCheckItemTitle('bias-disclosure'),
      description: factChecklistI18n.getCheckItemDescription('bias-disclosure'),
      riskLevel: 'high',
      category: categories[3] ?? createFallbackCategory(3),
      checked: false,
      translationKey: 'bias-disclosure',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('bias-disclosure'),
        content: factChecklistI18n.getCheckItemGuideContent('bias-disclosure'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('bias-disclosure'),
          bad: factChecklistI18n.getCheckItemExamplesBad('bias-disclosure')
        }
      }
    },
    {
      id: 'balanced-view',
      title: factChecklistI18n.getCheckItemTitle('balanced-view'),
      description: factChecklistI18n.getCheckItemDescription('balanced-view'),
      riskLevel: 'medium',
      category: categories[3] ?? createFallbackCategory(3),
      checked: false,
      translationKey: 'balanced-view',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('balanced-view'),
        content: factChecklistI18n.getCheckItemGuideContent('balanced-view'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('balanced-view'),
          bad: factChecklistI18n.getCheckItemExamplesBad('balanced-view')
        }
      }
    },
    {
      id: 'context-adequate',
      title: factChecklistI18n.getCheckItemTitle('context-adequate'),
      description: factChecklistI18n.getCheckItemDescription('context-adequate'),
      riskLevel: 'medium',
      category: categories[3] ?? createFallbackCategory(3),
      checked: false,
      translationKey: 'context-adequate',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('context-adequate'),
        content: factChecklistI18n.getCheckItemGuideContent('context-adequate'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('context-adequate'),
          bad: factChecklistI18n.getCheckItemExamplesBad('context-adequate')
        }
      }
    },
    {
      id: 'scope-clear',
      title: factChecklistI18n.getCheckItemTitle('scope-clear'),
      description: factChecklistI18n.getCheckItemDescription('scope-clear'),
      riskLevel: 'low',
      category: categories[3] ?? createFallbackCategory(3),
      checked: false,
      translationKey: 'scope-clear',
      guideContent: {
        title: factChecklistI18n.getCheckItemGuideTitle('scope-clear'),
        content: factChecklistI18n.getCheckItemGuideContent('scope-clear'),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood('scope-clear'),
          bad: factChecklistI18n.getCheckItemExamplesBad('scope-clear')
        }
      }
    }
  ];
}

// 後方互換性のためのエクスポート
export const CHECKLIST_ITEMS = getChecklistItems();
