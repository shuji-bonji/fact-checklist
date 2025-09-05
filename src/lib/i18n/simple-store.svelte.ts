/**
 * シンプルで確実な i18n ストア
 * 翻訳データを直接埋め込み、初期化待ちを完全に排除
 */

import type { LanguageCode } from './types.js';
import { translations as allTranslations } from './translations/index.js';

// ブラウザ環境チェック
const isBrowser = typeof window !== 'undefined';

// 初期言語の決定（即座に実行）
function determineInitialLanguage(): LanguageCode {
  if (!isBrowser) return 'ja';

  // LocalStorage確認
  const saved = localStorage.getItem('fact-checklist-language');
  if (saved !== null && saved !== '' && saved in allTranslations) {
    return saved as LanguageCode;
  }

  // Cookie確認
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === 'language' && value !== undefined && value !== '' && value in allTranslations) {
      return value as LanguageCode;
    }
  }

  // ブラウザ言語
  const browserLang = navigator.language.toLowerCase();
  for (const code of Object.keys(allTranslations)) {
    if (browserLang.startsWith(code)) {
      return code as LanguageCode;
    }
  }

  return 'ja';
}

class SimpleI18nStore {
  // 言語状態
  private _currentLanguage = $state<LanguageCode>(determineInitialLanguage());

  // 翻訳データは直接保持（遅延読み込みなし）
  private _allTranslations = allTranslations;

  // 初期化フラグ（常にtrue）
  public initialized = true;

  constructor() {
    // HTML属性を即座に更新
    if (isBrowser) {
      this.updateDocumentAttributes();
    }
  }

  get currentLanguage(): LanguageCode {
    return this._currentLanguage;
  }

  get translations(): unknown {
    // 常に現在の言語の翻訳を返す（nullなし）
    return this._allTranslations[this._currentLanguage] ?? this._allTranslations.ja;
  }

  get direction(): 'ltr' | 'rtl' {
    return this._currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }

  // 言語変更（同期的）
  setLanguage(language: LanguageCode): void {
    if (!(language in this._allTranslations)) {
      console.warn(`Unsupported language: ${language}`);
      return;
    }

    this._currentLanguage = language;

    // 永続化
    if (isBrowser) {
      localStorage.setItem('fact-checklist-language', language);
      document.cookie = `language=${language}; max-age=31536000; path=/; SameSite=Lax`;
      this.updateDocumentAttributes();
    }
  }

  // シンプルな翻訳関数（ネストされたキーに対応）
  t(key: string, params?: Record<string, string | number>): string {
    const parts = key.split('.');
    let current: unknown = this.translations;

    for (const part of parts) {
      if (
        current !== null &&
        current !== undefined &&
        typeof current === 'object' &&
        part in current
      ) {
        current = (current as Record<string, unknown>)[part];
      } else {
        // キーが見つからない場合はキー自体を返す
        return key;
      }
    }

    // 文字列でない場合はキーを返す
    if (typeof current !== 'string') {
      return key;
    }

    // パラメータ置換
    if (params) {
      let result = current;
      for (const [paramKey, value] of Object.entries(params)) {
        result = result.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(value));
      }
      return result;
    }

    return current;
  }

  private updateDocumentAttributes(): void {
    if (!isBrowser) return;

    const html = document.documentElement;
    html.lang = this._currentLanguage;
    html.dir = this.direction;
    html.style.setProperty('--text-direction', this.direction);
    html.style.setProperty('--is-rtl', this.direction === 'rtl' ? '1' : '0');
  }
}

// シングルトンインスタンス（即座に利用可能）
export const simpleI18nStore = new SimpleI18nStore();

// 便利な関数のエクスポート
export const t = (key: string, params?: Record<string, string | number>): string =>
  simpleI18nStore.t(key, params);

export const setLanguage = (language: LanguageCode): void => simpleI18nStore.setLanguage(language);

export const getCurrentLanguage = (): LanguageCode => simpleI18nStore.currentLanguage;

// チェックリスト専用のヘルパー関数
export const factChecklistI18n = {
  getCheckItemTitle: (itemId: string): string => {
    return t(`checklistItems.${itemId}.title`);
  },
  getCheckItemDescription: (itemId: string): string => {
    return t(`checklistItems.${itemId}.description`);
  },
  getCheckItemGuideTitle: (itemId: string): string => {
    return t(`checklistItems.${itemId}.guideTitle`);
  },
  getCheckItemGuideContent: (itemId: string): string => {
    return t(`checklistItems.${itemId}.guideContent`);
  },
  getCategoryName: (categoryId: string): string => {
    return t(`categories.${categoryId}.name`);
  },
  getCategoryDescription: (categoryId: string): string => {
    return t(`categories.${categoryId}.description`);
  },
  getCategoryEmoji: (categoryId: string): string => {
    return t(`categories.${categoryId}.emoji`);
  }
};
