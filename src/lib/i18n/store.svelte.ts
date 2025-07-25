/**
 * i18n言語ストア - Svelte 5 runesベース
 * 12言語対応の国際化システム
 */

import {
  SUPPORTED_LANGUAGES,
  type LanguageCode,
  type SupportedLanguage,
  type TranslationKeys,
  type TranslationFunction,
  type NestedRecord
} from './types.js';
import { I18N_CONFIG } from '../config/i18n.js';

// 静的な翻訳インポート
import { translations as allTranslations } from './translations/index.js';

import { countTranslations, createSafeTranslator, createFlexibleTranslator } from './helpers.js';
import { dev } from '$app/environment';

// ブラウザ環境チェック
const isBrowser = typeof window !== 'undefined';

// 初期言語を決定する関数（クラス外で定義）
function getInitialLanguage(): LanguageCode {
  if (!isBrowser) return I18N_CONFIG.DEFAULT_LANGUAGE;

  try {
    const saved = localStorage.getItem('fact-checklist-language');
    if (saved && saved in SUPPORTED_LANGUAGES) {
      if (dev) console.warn(`🌍 Loaded saved language from localStorage: ${saved}`);
      return saved as LanguageCode;
    }
  } catch (error) {
    console.warn('⚠️ Failed to load language from localStorage on init:', error);
  }

  return I18N_CONFIG.DEFAULT_LANGUAGE;
}

class I18nStore {
  // Svelte 5 runesを使用した状態管理
  private _currentLanguage = $state<LanguageCode>(getInitialLanguage());
  private _translations = $state<Record<LanguageCode, TranslationKeys>>(
    {} as Record<LanguageCode, TranslationKeys>
  );
  private _isLoading = $state<boolean>(false);
  private _error = $state<string | null>(null);
  private _initialized = $state<boolean>(false);

  constructor() {
    // 自動初期化を無効化 - 明示的な初期化を待つ
    // if (isBrowser) {
    //   this.initialize();
    // }
  }

  // 現在の言語（読み取り専用）
  get currentLanguage(): LanguageCode {
    return this._currentLanguage;
  }

  // 現在の言語情報
  get currentLanguageInfo(): SupportedLanguage {
    return SUPPORTED_LANGUAGES[this._currentLanguage];
  }

  // テキスト方向
  get direction(): 'ltr' | 'rtl' {
    return this.currentLanguageInfo.dir;
  }

  // RTL言語かどうか
  get isRTL(): boolean {
    return this.direction === 'rtl';
  }

  // 読み込み状態
  get isLoading(): boolean {
    return this._isLoading;
  }

  // エラー状態
  get error(): string | null {
    return this._error;
  }

  // 初期化完了状態
  get initialized(): boolean {
    return this._initialized;
  }

  // 利用可能な言語一覧
  get availableLanguages(): SupportedLanguage[] {
    return Object.values(SUPPORTED_LANGUAGES);
  }

  // 現在の翻訳データ
  get translations(): TranslationKeys | null {
    return this._translations[this._currentLanguage] || null;
  }

  // 公開初期化メソッド（SSR検出言語を受け取る）
  async initializeWithLanguage(ssrDetectedLanguage?: LanguageCode): Promise<void> {
    if (this._initialized) {
      if (dev) console.warn('🌍 i18n store already initialized, skipping...');
      return;
    }

    try {
      this._isLoading = true;
      this._error = null;

      // 現在の言語が既に正しく設定されているか確認
      const currentLang = this._currentLanguage;
      if (dev) console.warn(`🌍 Current language on initialization: ${currentLang}`);

      // 保存された言語設定を再確認（既に初期化時に読み込まれているはず）
      const savedLanguage = this.loadLanguageFromStorage();

      // 言語を決定（保存済み > 現在の言語 > SSR検出 > ブラウザ検出 > デフォルト）
      let targetLanguage = savedLanguage || currentLang;

      if (!targetLanguage || targetLanguage === I18N_CONFIG.DEFAULT_LANGUAGE) {
        if (ssrDetectedLanguage && ssrDetectedLanguage !== I18N_CONFIG.DEFAULT_LANGUAGE) {
          targetLanguage = ssrDetectedLanguage;
        } else if (isBrowser) {
          const browserLang = this.detectBrowserLanguage();
          if (browserLang) {
            targetLanguage = browserLang;
          }
        }
      }

      targetLanguage = targetLanguage ?? I18N_CONFIG.DEFAULT_LANGUAGE;

      if (dev) {
        console.warn(
          `🌍 Language selection: saved=${savedLanguage}, current=${currentLang}, ssrDetected=${ssrDetectedLanguage}, target=${targetLanguage}`
        );
      }

      // 言語を設定（既に設定されている場合でも翻訳データの読み込みのため実行）
      await this.setLanguage(targetLanguage);

      this._initialized = true;
      if (dev) console.warn('✅ i18n store initialized');
    } catch (error) {
      this._error = error instanceof Error ? error.message : '初期化エラー';
      console.error('❌ Failed to initialize i18n store:', error);
      throw error;
    } finally {
      this._isLoading = false;
    }
  }

  // 言語変更
  async setLanguage(language: LanguageCode): Promise<void> {
    // console.log(`🌍 Setting language to: ${language}`);

    try {
      this._isLoading = true;
      this._error = null;

      // 言語が有効かチェック
      if (!SUPPORTED_LANGUAGES[language]) {
        throw new Error(`Unsupported language: ${language}`);
      }

      // 翻訳データが未読み込みの場合は読み込み
      if (!this._translations[language]) {
        // console.log(`📥 Loading translations for: ${language}`);
        await this.loadTranslations(language);
      }

      // 言語を更新
      this._currentLanguage = language;

      // localStorageに保存
      this.saveLanguageToStorage(language);

      // HTML要素のlang属性とdir属性を更新
      this.updateDocumentAttributes();

      // console.log(`✅ Language changed to: ${language}`);
    } catch (error) {
      this._error = error instanceof Error ? error.message : 'Failed to set language';
      console.error('❌ Language change failed:', error);
      throw error;
    } finally {
      this._isLoading = false;
    }
  }

  // 翻訳データの読み込み（静的インポート版）
  private async loadTranslations(language: LanguageCode): Promise<void> {
    try {
      // 静的インポートから翻訳データを取得
      const baseTranslations = allTranslations[language];

      if (!baseTranslations) {
        throw new Error(`No translations found for language: ${language}`);
      }

      // 翻訳データを保存
      this._translations[language] = baseTranslations;

      // console.log(`✅ Translations loaded for: ${language} (static import)`);
    } catch (error) {
      console.error(`❌ Failed to load translations for ${language}:`, error);

      // フォールバック: デフォルト言語の翻訳を使用
      if (
        language !== I18N_CONFIG.DEFAULT_LANGUAGE &&
        this._translations[I18N_CONFIG.DEFAULT_LANGUAGE]
      ) {
        console.warn(`🔄 Using ${I18N_CONFIG.DEFAULT_LANGUAGE} fallback for: ${language}`);
        this._translations[language] = this._translations[I18N_CONFIG.DEFAULT_LANGUAGE];
      } else if (
        language !== I18N_CONFIG.DEFAULT_LANGUAGE &&
        allTranslations[I18N_CONFIG.DEFAULT_LANGUAGE]
      ) {
        console.warn(
          `🔄 Using ${I18N_CONFIG.DEFAULT_LANGUAGE} fallback from static imports for: ${language}`
        );
        this._translations[language] = allTranslations[I18N_CONFIG.DEFAULT_LANGUAGE];
      } else {
        throw error;
      }
    }
  }

  // 翻訳関数（文字列専用）
  t: TranslationFunction = (key: string, params?: Record<string, string | number>): string => {
    try {
      const translations = this.translations as NestedRecord | null;

      // 翻訳がまだ読み込まれていない場合は空文字を返す
      if (!translations) {
        return '';
      }

      const safeTranslator = createSafeTranslator(translations);
      return safeTranslator(key, params);
    } catch (error) {
      console.error(`❌ Translation error for key "${key}":`, error);
      return key;
    }
  };

  // 配列対応翻訳関数
  tArray = (key: string, params?: Record<string, string | number>): string | string[] => {
    try {
      const translations = this.translations as NestedRecord | null;

      // 翻訳がまだ読み込まれていない場合は空文字を返す
      if (!translations) {
        return '';
      }

      const flexibleTranslator = createFlexibleTranslator(translations);
      return flexibleTranslator(key, params);
    } catch (error) {
      console.error(`❌ Translation error for key "${key}":`, error);
      return key;
    }
  };

  // ブラウザ言語の検出
  private detectBrowserLanguage(): LanguageCode | null {
    if (!isBrowser) return null;

    const browserLanguages = [navigator.language, ...navigator.languages];

    for (const browserLang of browserLanguages) {
      // 完全一致をチェック
      if (browserLang in SUPPORTED_LANGUAGES) {
        return browserLang as LanguageCode;
      }

      // 言語コードの前半部分をチェック（例: "en-US" -> "en"）
      const langCode = browserLang.split('-')[0];
      if (langCode && langCode in SUPPORTED_LANGUAGES) {
        return langCode as LanguageCode;
      }
    }

    return null;
  }

  // localStorageから言語設定を読み込み
  private loadLanguageFromStorage(): LanguageCode | null {
    if (!isBrowser) return null;

    try {
      const saved = localStorage.getItem('fact-checklist-language');
      if (saved && saved in SUPPORTED_LANGUAGES) {
        return saved as LanguageCode;
      }
    } catch (error) {
      console.warn('⚠️ Failed to load language from localStorage:', error);
    }

    return null;
  }

  // localStorageに言語設定を保存
  private saveLanguageToStorage(language: LanguageCode): void {
    if (!isBrowser) return;

    try {
      localStorage.setItem('fact-checklist-language', language);
    } catch (error) {
      console.warn('⚠️ Failed to save language to localStorage:', error);
    }
  }

  // HTMLドキュメントの属性を更新
  private updateDocumentAttributes(): void {
    if (!isBrowser) return;

    try {
      const html = document.documentElement;
      html.lang = this._currentLanguage;
      html.dir = this.direction;

      // CSSカスタムプロパティでRTL状態を通知
      html.style.setProperty('--text-direction', this.direction);
      html.style.setProperty('--is-rtl', this.isRTL ? '1' : '0');
    } catch (error) {
      console.warn('⚠️ Failed to update document attributes:', error);
    }
  }

  // デバッグ用: 翻訳データの統計
  getTranslationStats(): {
    loadedLanguages: LanguageCode[];
    currentLanguage: LanguageCode;
    translationCount: number;
  } {
    const loadedLanguages = Object.keys(this._translations) as LanguageCode[];
    const currentTranslations = this.translations as NestedRecord | null;
    const translationCount = currentTranslations ? countTranslations(currentTranslations) : 0;

    return {
      loadedLanguages,
      currentLanguage: this._currentLanguage,
      translationCount
    };
  }
}

// シングルトンインスタンス
export const i18nStore = new I18nStore();

// 便利なエクスポート
export const t = i18nStore.t;
export const tArray = i18nStore.tArray;
export const setLanguage = (language: LanguageCode) => i18nStore.setLanguage(language);
export const getCurrentLanguage = () => i18nStore.currentLanguage;
export const getDirection = () => i18nStore.direction;
export const getIsRTL = () => i18nStore.isRTL;
