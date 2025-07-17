/**
 * 国際化設定
 * Issue #131: ハードコーディングされた'ja'を集約管理
 */

export const I18N_CONFIG = {
  /** デフォルト言語 (後で環境変数化予定) */
  DEFAULT_LANGUAGE: 'ja' as const,

  /** ブラウザ言語を優先するかどうか */
  PREFER_BROWSER_LANGUAGE: true,

  /** フォールバック言語チェーン */
  FALLBACK_CHAIN: ['ja', 'en'] as const,

  /** ローカルストレージキー */
  STORAGE_KEY: 'fact-checklist-language',

  /** CJK言語リスト */
  CJK_LANGUAGES: ['ja', 'zh-TW', 'ko'] as const
} as const;

export type DefaultLanguage = typeof I18N_CONFIG.DEFAULT_LANGUAGE;
export type FallbackLanguage = (typeof I18N_CONFIG.FALLBACK_CHAIN)[number];
