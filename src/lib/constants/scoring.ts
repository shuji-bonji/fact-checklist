// src/lib/constants/scoring.ts
// スコア計算関連の定数・設定

/**
 * スコア計算基本設定
 */
export const SCORE_SETTINGS = {
  MIN_SCORE: 0,
  MAX_PERCENTAGE: 100,
  DECIMAL_PLACES: 0, // スコア表示の小数点以下桁数
  ITEM_SCORE_VALUE: 1 // 各項目のスコア値
} as const;

/**
 * 信頼度レベルの閾値
 */
export const CONFIDENCE_LEVELS = {
  EXCELLENT: { min: 90, max: 100, label: 'excellent', color: '#1e7e34' },
  HIGH: { min: 80, max: 89, label: 'high', color: '#27ae60' },
  GOOD: { min: 70, max: 79, label: 'good', color: '#28a745' },
  MEDIUM: { min: 60, max: 69, label: 'medium', color: '#ffc107' },
  LOW: { min: 40, max: 59, label: 'low', color: '#fd7e14' },
  POOR: { min: 20, max: 39, label: 'poor', color: '#dc3545' },
  VERY_POOR: { min: 0, max: 19, label: 'very_poor', color: '#721c24' }
} as const;

/**
 * 判定タイプとその閾値
 */
export const JUDGMENT_TYPES = {
  ACCEPT: {
    threshold: 75,
    label: 'accept',
    emoji: '📗',
    color: '#27ae60',
    bgColor: '#d4edda'
  },
  CAUTION: {
    threshold: 50,
    label: 'caution',
    emoji: '📙',
    color: '#f39c12',
    bgColor: '#fff3cd'
  },
  REJECT: {
    threshold: 0,
    label: 'reject',
    emoji: '📕',
    color: '#e74c3c',
    bgColor: '#f8d7da'
  }
} as const;

/**
 * カテゴリ別重み設定（将来的な拡張用）
 */
export const CATEGORY_WEIGHTS = {
  CRITICAL: 1.0, // クリティカル評価
  DETAILED: 1.0, // 詳細評価
  VERIFICATION: 1.0, // 検証評価
  CONTEXT: 1.0 // 文脈評価
} as const;

/**
 * スコア表示設定
 */
export const SCORE_DISPLAY = {
  SHOW_PERCENTAGE: true,
  SHOW_FRACTION: true,
  SHOW_CONFIDENCE_LEVEL: true,
  SHOW_JUDGMENT: true,
  ANIMATE_CHANGES: true,
  ANIMATION_DURATION: 500
} as const;

/**
 * 信頼度に基づく推奨アクション
 */
export const CONFIDENCE_ACTIONS = {
  EXCELLENT: {
    action: 'highly_recommend',
    description: 'Highly reliable information, suitable for public sharing',
    icon: '🌟'
  },
  HIGH: {
    action: 'recommend',
    description: 'Reliable information with minor verification needed',
    icon: '✅'
  },
  GOOD: {
    action: 'conditional_use',
    description: 'Generally reliable but requires additional context',
    icon: '👍'
  },
  MEDIUM: {
    action: 'use_with_caution',
    description: 'Moderate reliability, use with supplementary sources',
    icon: '⚠️'
  },
  LOW: {
    action: 'limited_use',
    description: 'Low reliability, significant verification required',
    icon: '🔍'
  },
  POOR: {
    action: 'avoid_use',
    description: 'Poor reliability, not recommended for use',
    icon: '❌'
  },
  VERY_POOR: {
    action: 'reject',
    description: 'Very poor reliability, should be rejected',
    icon: '🚫'
  }
} as const;

/**
 * セクション完了率計算設定
 */
export const SECTION_COMPLETION = {
  MIN_COMPLETION_RATE: 0,
  MAX_COMPLETION_RATE: 100,
  ROUND_TO_INTEGER: true,
  SHOW_FRACTION: true
} as const;

/**
 * スコア計算に使用する数式
 */
export const SCORE_FORMULAS = {
  // 基本スコア計算: (チェック済み項目数 / 総項目数) * 100
  BASIC_PERCENTAGE: (checked: number, total: number): number =>
    total > 0 ? Math.round((checked / total) * 100) : 0,

  // 重み付きスコア計算（将来的な拡張用）
  WEIGHTED_SCORE: (items: Array<{ checked: boolean; weight: number }>): number => {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    const checkedWeight = items.reduce((sum, item) => sum + (item.checked ? item.weight : 0), 0);
    return totalWeight > 0 ? Math.round((checkedWeight / totalWeight) * 100) : 0;
  }
} as const;

/**
 * スコア履歴管理設定
 */
export const SCORE_HISTORY = {
  MAX_HISTORY_ENTRIES: 100,
  AUTO_SAVE_INTERVAL: 5000, // 5秒
  TRACK_CHANGES: true,
  INCLUDE_TIMESTAMPS: true
} as const;

/**
 * スコア通知設定
 */
export const SCORE_NOTIFICATIONS = {
  SHOW_MILESTONE_ALERTS: true,
  MILESTONES: [25, 50, 75, 90, 100], // 通知を表示するスコア
  SHOW_JUDGMENT_CHANGES: true,
  NOTIFICATION_DURATION: 3000 // 3秒
} as const;
