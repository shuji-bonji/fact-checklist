/**
 * i18n言語ストア - Svelte 5 runesベース
 * 12言語対応の国際化システム
 *
 * 改善版: 同期的翻訳読み込みと多段階フォールバック
 */

import {
  SUPPORTED_LANGUAGES,
  type LanguageCode,
  type SupportedLanguage,
  type TranslationKeys,
  type TranslationFunction
} from './types.js';
import { I18N_CONFIG } from '../config/i18n.js';

// 🔴 重要: 翻訳データを同期的にインポート
// 動的インポートではなく、静的インポートを使用
import { translations as ja } from './translations/ja.js';
import { translations as en } from './translations/en.js';
import { translations as fr } from './translations/fr.js';
import { translations as es } from './translations/es.js';
import { translations as pt } from './translations/pt.js';
import { translations as de } from './translations/de.js';
import { translations as it } from './translations/it.js';
import { translations as ar } from './translations/ar.js';
import { translations as hi } from './translations/hi.js';
import { translations as ko } from './translations/ko.js';
import { translations as zhTW } from './translations/zh-TW.js';
import { translations as id } from './translations/id.js';

// 🔴 翻訳データを事前に準備（同期的）
const allTranslations: Record<LanguageCode, TranslationKeys> = {
  ja,
  en,
  fr,
  es,
  pt,
  de,
  it,
  ar,
  hi,
  ko,
  'zh-TW': zhTW,
  id
};

// デフォルトフォールバック辞書（最小限の翻訳）
const FALLBACK_TRANSLATIONS: Partial<TranslationKeys> = {
  app: {
    title: 'Fact Checklist',
    brandTitle: 'Fact Checklist',
    brandSubtitle: 'Fact Checklist'
  },
  checklist: {
    title: 'Checklist',
    score: 'Score',
    confidenceLevel: 'Confidence',
    finalJudgment: 'Judgment'
  },
  categories: {
    critical: {
      name: 'Critical',
      emoji: '⚠️',
      description: 'Critical Items'
    },
    detailed: {
      name: 'Detailed',
      emoji: '🔍',
      description: 'Detailed Items'
    },
    verification: {
      name: 'Verification',
      emoji: '✅',
      description: 'Verification Items'
    },
    context: {
      name: 'Context',
      emoji: '📝',
      description: 'Context Items'
    }
  },
  forms: {
    notesLabel: 'Notes',
    notesTitlePlaceholder: 'Title',
    notesPlaceholder: 'Add notes...'
  },
  history: {
    title: 'History',
    empty: 'No history',
    createFirst: 'Create your first checklist'
  },
  ui: {
    quickStartGuide: 'Quick Start Guide'
  },
  units: {
    total: 'Total',
    score: 'Score'
  }
} as TranslationKeys;

// ブラウザ環境チェック
const isBrowser = typeof window !== 'undefined';

// 初期言語を決定
function getInitialLanguage(): LanguageCode {
  if (!isBrowser) return I18N_CONFIG.DEFAULT_LANGUAGE;

  try {
    const saved = localStorage.getItem('fact-checklist-language');
    if (saved !== null && saved !== '' && saved in SUPPORTED_LANGUAGES) {
      return saved as LanguageCode;
    }
  } catch {
    // Storage not available
  }

  return I18N_CONFIG.DEFAULT_LANGUAGE;
}

class I18nStore {
  // 状態管理
  private _currentLanguage = $state<LanguageCode>(getInitialLanguage());
  private _translations = $state<Record<LanguageCode, TranslationKeys>>(allTranslations);
  private _isLoading = $state<boolean>(false);
  private _error = $state<string | null>(null);
  private _initialized = $state<boolean>(false);

  constructor() {
    // 🔴 同期的に即座に初期化（翻訳データは既に読み込み済み）
    this._initialized = true;

    // ブラウザ環境での追加処理
    if (isBrowser) {
      this.updateDocumentAttributes();
      this.loadLanguageFromStorage();
    }

    // Initialization complete with language: this._currentLanguage
  }

  // === Getters ===
  get currentLanguage(): LanguageCode {
    return this._currentLanguage;
  }

  get currentLanguageInfo(): SupportedLanguage {
    return SUPPORTED_LANGUAGES[this._currentLanguage];
  }

  get direction(): 'ltr' | 'rtl' {
    return this.currentLanguageInfo.dir;
  }

  get isRTL(): boolean {
    return this.direction === 'rtl';
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get error(): string | null {
    return this._error;
  }

  get initialized(): boolean {
    return this._initialized;
  }

  get translations(): TranslationKeys | null {
    return this._translations[this._currentLanguage] || null;
  }

  // === メソッド ===

  /**
   * 🔴 改善された翻訳関数
   * フォールバック順序:
   * 1. 現在の言語の翻訳
   * 2. デフォルト言語の翻訳
   * 3. 英語の翻訳
   * 4. ハードコードされたフォールバック
   * 5. 最後の手段: キーを整形して返す
   */
  t: TranslationFunction = (key: string, params?: Record<string, unknown>): string => {
    try {
      // 1. 現在の言語で探す
      let value = this.getTranslationValue(this._currentLanguage, key);

      // 2. デフォルト言語で探す
      if (value === null && this._currentLanguage !== I18N_CONFIG.DEFAULT_LANGUAGE) {
        value = this.getTranslationValue(I18N_CONFIG.DEFAULT_LANGUAGE, key);
      }

      // 3. 英語で探す
      if (value === null && this._currentLanguage !== 'en') {
        value = this.getTranslationValue('en', key);
      }

      // 4. ハードコードされたフォールバックを使う
      if (value === null) {
        value = this.getFallbackValue(key);
      }

      // 5. 最後の手段: キーを整形して返す
      if (value === null) {
        // "checklist.title" → "Title"
        // "checklistTitle" → "Checklist Title"
        const parts = key.split('.');
        const lastPart = parts[parts.length - 1] ?? key;
        const formatted = lastPart
          .replace(/([A-Z])/g, ' $1')
          .replace(/[_-]/g, ' ')
          .replace(/^./, str => str.toUpperCase())
          .trim();

        console.warn(`[i18n] Missing translation for "${key}", using: "${formatted}"`);
        return formatted;
      }

      // パラメータ置換
      if (typeof value === 'string' && params) {
        return value.replace(/\{(\w+)\}/g, (_, k: string) => String(params[k] ?? `{${k}}`));
      }

      return value;
    } catch (error) {
      console.error(`[i18n] Error translating "${key}":`, error);
      // エラー時も整形したキーを返す
      const parts = key.split('.');
      const lastPart = parts[parts.length - 1] || key;
      return lastPart
        .replace(/([A-Z])/g, ' $1')
        .replace(/[_-]/g, ' ')
        .trim();
    }
  };

  /**
   * 指定言語から翻訳値を取得
   */
  private getTranslationValue(language: LanguageCode, key: string): string | null {
    const translations = this._translations[language];
    if (!translations) return null;

    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (value !== null && value !== undefined && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return null;
      }
    }

    return typeof value === 'string' ? value : null;
  }

  /**
   * ハードコードされたフォールバック値を取得
   */
  private getFallbackValue(key: string): string | null {
    const keys = key.split('.');
    let value: unknown = FALLBACK_TRANSLATIONS;

    for (const k of keys) {
      if (value !== null && value !== undefined && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return null;
      }
    }

    return typeof value === 'string' ? value : null;
  }

  /**
   * 言語を変更
   */
  async setLanguage(language: LanguageCode): Promise<void> {
    if (!(language in SUPPORTED_LANGUAGES)) {
      throw new Error(`Unsupported language: ${language}`);
    }

    this._currentLanguage = language;
    this.saveLanguageToStorage(language);
    this.updateDocumentAttributes();

    // Language changed successfully to: ${language}
  }

  /**
   * LocalStorageから言語設定を読み込む
   */
  private loadLanguageFromStorage(): void {
    if (!isBrowser) return;

    try {
      const saved = localStorage.getItem('fact-checklist-language');
      if (
        saved !== null &&
        saved !== '' &&
        saved in SUPPORTED_LANGUAGES &&
        saved !== this._currentLanguage
      ) {
        this._currentLanguage = saved as LanguageCode;
        this.updateDocumentAttributes();
      }
    } catch (error) {
      console.warn('Failed to load language from storage:', error);
    }
  }

  /**
   * LocalStorageに言語設定を保存
   */
  private saveLanguageToStorage(language: LanguageCode): void {
    if (!isBrowser) return;

    try {
      localStorage.setItem('fact-checklist-language', language);
      // Cookieにも保存（SSR用）
      document.cookie = `language=${language}; max-age=31536000; path=/; SameSite=Lax`;
    } catch (error) {
      console.warn('Failed to save language:', error);
    }
  }

  /**
   * HTML属性を更新
   */
  private updateDocumentAttributes(): void {
    if (!isBrowser) return;

    try {
      const html = document.documentElement;
      html.lang = this._currentLanguage;
      html.dir = this.direction;

      // RTL言語の場合、bodyにもクラスを追加
      if (this.isRTL) {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    } catch (error) {
      console.warn('Failed to update document attributes:', error);
    }
  }

  /**
   * SSR検出言語での初期化（互換性のため残す）
   */
  async initializeWithLanguage(ssrDetectedLanguage?: LanguageCode): Promise<void> {
    // 既に初期化済みなので、言語設定のみ更新
    if (ssrDetectedLanguage && ssrDetectedLanguage in SUPPORTED_LANGUAGES) {
      if (!isBrowser || localStorage.getItem('fact-checklist-language') === null) {
        // ユーザーが選択していない場合のみSSR言語を適用
        await this.setLanguage(ssrDetectedLanguage);
      }
    }
  }

  /**
   * 現在の言語情報を取得
   */
  getCurrentLanguageInfo(): SupportedLanguage {
    return this.currentLanguageInfo;
  }

  /**
   * サポートされている言語のリストを取得
   */
  getSupportedLanguages(): Record<LanguageCode, SupportedLanguage> {
    return SUPPORTED_LANGUAGES;
  }

  /**
   * 配列の翻訳を取得する関数
   * 翻訳値が配列の場合はその配列を返し、文字列の場合は単一要素の配列を返す
   */
  tArray(key: string): string[] {
    try {
      // 1. 現在の言語で探す
      let value = this.getTranslationArray(this._currentLanguage, key);

      // 2. デフォルト言語で探す
      if (value === null && this._currentLanguage !== I18N_CONFIG.DEFAULT_LANGUAGE) {
        value = this.getTranslationArray(I18N_CONFIG.DEFAULT_LANGUAGE, key);
      }

      // 3. 英語で探す
      if (value === null && this._currentLanguage !== 'en') {
        value = this.getTranslationArray('en', key);
      }

      // 4. 最後の手段: 空の配列を返す
      if (value === null) {
        console.warn(`[i18n] Missing translation array for "${key}"`);
        return [];
      }

      return value;
    } catch (error) {
      console.error(`[i18n] Error getting array for "${key}":`, error);
      return [];
    }
  }

  /**
   * 指定言語から配列値を取得
   */
  private getTranslationArray(language: LanguageCode, key: string): string[] | null {
    const translations = this._translations[language];
    if (!translations) return null;

    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (value !== null && value !== undefined && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return null;
      }
    }

    // 配列の場合はそのまま返す
    if (Array.isArray(value)) {
      return value.filter((v): v is string => typeof v === 'string');
    }

    // 文字列の場合は単一要素の配列として返す
    if (typeof value === 'string') {
      return [value];
    }

    return null;
  }

  /**
   * 特定のキーが存在するか確認
   */
  hasTranslation(key: string, language?: LanguageCode): boolean {
    const lang = language || this._currentLanguage;
    return this.getTranslationValue(lang, key) !== null;
  }

  /**
   * 翻訳の完全性をチェック
   */
  getTranslationCompleteness(language: LanguageCode): number {
    const translations = this._translations[language];
    const defaultTranslations = this._translations[I18N_CONFIG.DEFAULT_LANGUAGE];

    if (!translations || !defaultTranslations) return 0;

    const countKeys = (obj: unknown): number => {
      if (obj === null || obj === undefined || typeof obj !== 'object') return 0;
      let count = 0;
      const record = obj as Record<string, unknown>;
      for (const key in record) {
        const value = record[key];
        if (typeof value === 'string') {
          count++;
        } else if (typeof value === 'object' && value !== null) {
          count += countKeys(value);
        }
      }
      return count;
    };

    const targetCount = countKeys(translations);
    const defaultCount = countKeys(defaultTranslations);

    return defaultCount === 0 ? 100 : Math.round((targetCount / defaultCount) * 100);
  }
}

// シングルトンインスタンス
export const i18nStore = new I18nStore();

// 便利なエクスポート
export const t = i18nStore.t;
export const tArray = (key: string): string[] => i18nStore.tArray(key);
export const setLanguage = (language: LanguageCode): Promise<void> =>
  i18nStore.setLanguage(language);
export const getCurrentLanguage = (): LanguageCode => i18nStore.currentLanguage;
export const getDirection = (): 'ltr' | 'rtl' => i18nStore.direction;
export const getIsRTL = (): boolean => i18nStore.isRTL;
export const hasTranslation = (key: string, language?: LanguageCode): boolean =>
  i18nStore.hasTranslation(key, language);
export const getTranslationCompleteness = (language: LanguageCode): number =>
  i18nStore.getTranslationCompleteness(language);

// デフォルトエクスポート
export default i18nStore;
