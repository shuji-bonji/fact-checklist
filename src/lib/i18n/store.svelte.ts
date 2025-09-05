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
import { translations } from './translations/index.js';

import { countTranslations, createSafeTranslator, createFlexibleTranslator } from './helpers.js';
import { dev } from '$app/environment';

// デバッグ: 翻訳データの確認
if (dev) {
  console.warn('🔍 [DEBUG] translations loaded:', !!translations);
  console.warn('🔍 [DEBUG] translations keys:', translations ? Object.keys(translations) : 'undefined');
}

// ブラウザ環境チェック
const isBrowser = typeof window !== 'undefined';

// 初期言語を決定する関数（クラス外で定義）
function getInitialLanguage(): LanguageCode {
  if (!isBrowser) return I18N_CONFIG.DEFAULT_LANGUAGE;

  try {
    // 1. LocalStorage確認（最優先）
    const saved = localStorage.getItem('fact-checklist-language');
    if (saved && saved in SUPPORTED_LANGUAGES) {
      if (dev) console.warn(`🌍 Loaded saved language from localStorage: ${saved}`);
      return saved as LanguageCode;
    }

    // 2. Cookie確認（SSRとの同期用）
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === 'language' && value && value in SUPPORTED_LANGUAGES) {
        if (dev) console.warn(`🍪 Loaded language from cookie: ${value}`);
        return value as LanguageCode;
      }
    }

    // 3. ブラウザ言語検出（初回のみ）
    const browserLang = navigator.language.toLowerCase();
    for (const [code, info] of Object.entries(SUPPORTED_LANGUAGES)) {
      if (browserLang.startsWith(code) || browserLang.startsWith(info.code.toLowerCase())) {
        if (dev) console.warn(`🌐 Detected browser language: ${code}`);
        return code as LanguageCode;
      }
    }
  } catch (error) {
    console.warn('⚠️ Language detection failed:', error);
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
    // デバッグログ
    if (dev) {
      console.warn('🚨 [DEBUG] I18nStore constructor called');
      console.warn('🚨 [DEBUG] translations exists:', !!translations);
      console.warn('🚨 [DEBUG] isBrowser:', isBrowser);
      if (translations) {
        console.warn('🚨 [DEBUG] Available languages:', Object.keys(translations));
      }
    }

    // SSRでも安全に実行できるデフォルト初期化
    this.initializeDefault();

    // ブラウザ環境では追加の初期化
    if (isBrowser) {
      this.initializeImmediately();
    }
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
    return this._translations[this._currentLanguage] ?? null;
  }

  /**
   * SSR/CSR両方で安全に実行できるデフォルト初期化
   * サーバーサイドでも翻訳データを読み込む
   */
  private initializeDefault(): void {
    try {
      // デフォルト言語を取得
      const defaultLang = I18N_CONFIG.DEFAULT_LANGUAGE;

      if (dev) {
        console.warn(`🔍 [initializeDefault] Starting with defaultLang: ${defaultLang}`);
        console.warn(`🔍 [initializeDefault] translations status:`, !!translations);
      }

      // 静的インポートされた翻訳データを直接設定
      // これはSSRでも安全（静的インポートのため）
      if (translations && translations[defaultLang]) {
        this._translations[defaultLang] = translations[defaultLang];
        this._currentLanguage = defaultLang;

        // 英語のフォールバックも読み込む
        const enLang = 'en' as LanguageCode;
        if (defaultLang !== enLang && translations[enLang]) {
          this._translations[enLang] = translations[enLang];
        }

        // 初期化フラグを設定
        this._initialized = true;

        if (dev) {
          console.warn(`✅ [SSR-Safe] Default translations (${defaultLang}) loaded`);
        }
      } else {
        console.warn(`⚠️ [SSR-Safe] No translations found for ${defaultLang}, using emergency fallback`);
        
        // 緊急フォールバック：最小限の翻訳を提供
        this._translations[defaultLang] = {
          app: {
            title: 'ファクトチェックシート',
            brandTitle: 'Fact Checklist',
            brandSubtitle: 'ファクトチェックシート'
          },
          checklist: {
            title: 'ファクトチェックシート'
          },
          categories: {
            critical: {
              name: '重要評価項目',
              emoji: '⚠️',
              description: '重要な評価項目'
            },
            detailed: {
              name: '詳細評価項目',
              emoji: '🔍',
              description: '詳細な評価項目'
            },
            verification: {
              name: '検証項目',
              emoji: '✅',
              description: '検証項目'
            },
            context: {
              name: '文脈評価',
              emoji: '📝',
              description: '文脈の評価'
            }
          },
          forms: {
            notesLabel: '評価メモ・追加確認事項'
          }
        } as any;
        
        this._currentLanguage = defaultLang;
        this._initialized = true;
        
        console.warn('🟡 [Emergency] Using hardcoded fallback translations');
      }
    } catch (error) {
      console.error('❌ [SSR-Safe] Default initialization failed:', error);
      // エラーでも初期化済みとマーク（無限ループ防止）
      this._initialized = true;
    }
  }

  /**
   * 即座に翻訳データを同期的に読み込む
   * 初期表示時の翻訳キー表示を防ぐための初期化
   */
  private initializeImmediately(): void {
    try {
      const currentLang = this._currentLanguage;

      // ブラウザで検出した言語がデフォルトと異なる場合のみ更新
      const browserLang = getInitialLanguage();
      if (browserLang !== currentLang && translations[browserLang]) {
        this._currentLanguage = browserLang;
        this._translations[browserLang] = translations[browserLang];

        // HTML属性を更新
        this.updateDocumentAttributes();

        if (dev) {
          console.warn(`✅ [Browser] Language updated to: ${browserLang}`);
        }
      }

      // LocalStorage/Cookieとの同期
      this.loadLanguageFromStorage(true);

      // HTML属性を更新（言語が変わっていない場合でも）
      this.updateDocumentAttributes();
    } catch (error) {
      console.error('❌ [Browser] Immediate initialization failed:', error);
    }
  }

  // 公開初期化メソッド（SSR検出言語を受け取る）
  async initializeWithLanguage(ssrDetectedLanguage?: LanguageCode): Promise<void> {
    // 重複初期化の防止（すでに同期的に初期化されている場合はスキップ）
    if (this._initialized && this._translations[this._currentLanguage]) {
      if (dev) console.warn('🌍 i18n store already initialized with translations, skipping...');
      return;
    }

    try {
      this._isLoading = true;
      this._error = null;

      // 現在の言語が既に正しく設定されているか確認
      const currentLang = this._currentLanguage;
      if (dev) console.warn(`🌍 Current language on initialization: ${currentLang}`);

      // 保存された言語設定を再確認（初回のみCookieと同期）
      const savedLanguage = this.loadLanguageFromStorage(true);

      // 言語を決定（優先順位）
      // 1. LocalStorageに保存された言語（ユーザーが明示的に選択した場合）
      // 2. 現在の言語（初期化時に設定されている場合）
      // 3. SSR検出言語（サーバーサイドで検出された場合）
      // 4. ブラウザ言語（初回アクセス時のみ）
      // 5. デフォルト言語
      let targetLanguage: LanguageCode;

      if (savedLanguage) {
        // LocalStorageに保存されている = ユーザーが明示的に選択した
        targetLanguage = savedLanguage;
      } else if (currentLang && currentLang !== I18N_CONFIG.DEFAULT_LANGUAGE) {
        // 既に設定されている言語がデフォルト以外
        targetLanguage = currentLang;
      } else if (ssrDetectedLanguage) {
        // サーバーサイドで検出された言語
        targetLanguage = ssrDetectedLanguage;
      } else if (isBrowser) {
        // ブラウザ言語を検出（初回のみ）
        const browserLang = this.detectBrowserLanguage();
        targetLanguage = browserLang || I18N_CONFIG.DEFAULT_LANGUAGE;
      } else {
        // フォールバック
        targetLanguage = I18N_CONFIG.DEFAULT_LANGUAGE;
      }

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
      if (SUPPORTED_LANGUAGES[language] === null || SUPPORTED_LANGUAGES[language] === undefined) {
        throw new Error(`Unsupported language: ${language}`);
      }

      // 翻訳データが未読み込みの場合は読み込み
      if (this._translations[language] === null || this._translations[language] === undefined) {
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
      const baseTranslations = translations[language];

      if (baseTranslations === null || baseTranslations === undefined) {
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
        this._translations[I18N_CONFIG.DEFAULT_LANGUAGE] !== null &&
        this._translations[I18N_CONFIG.DEFAULT_LANGUAGE] !== undefined
      ) {
        console.warn(`🔄 Using ${I18N_CONFIG.DEFAULT_LANGUAGE} fallback for: ${language}`);
        this._translations[language] = this._translations[I18N_CONFIG.DEFAULT_LANGUAGE];
      } else if (
        language !== I18N_CONFIG.DEFAULT_LANGUAGE &&
        translations[I18N_CONFIG.DEFAULT_LANGUAGE] !== null &&
        translations[I18N_CONFIG.DEFAULT_LANGUAGE] !== undefined
      ) {
        console.warn(
          `🔄 Using ${I18N_CONFIG.DEFAULT_LANGUAGE} fallback from static imports for: ${language}`
        );
        this._translations[language] = translations[I18N_CONFIG.DEFAULT_LANGUAGE];
      } else {
        throw error;
      }
    }
  }

  // 翻訳関数（SSRセーフ版）
  t: TranslationFunction = (key: string, params?: Record<string, string | number>): string => {
    try {
      // 現在の言語の翻訳を取得
      let translations = this._translations[
        this._currentLanguage
      ] as unknown as NestedRecord | null;

      // フォールバック: デフォルト言語
      if (!translations && this._currentLanguage !== I18N_CONFIG.DEFAULT_LANGUAGE) {
        translations = this._translations[
          I18N_CONFIG.DEFAULT_LANGUAGE
        ] as unknown as NestedRecord | null;
      }

      // それでも見つからない場合は、最初に見つかった翻訳を使用
      if (!translations) {
        const availableLanguages = Object.keys(this._translations) as LanguageCode[];
        if (availableLanguages.length > 0) {
          const firstLang = availableLanguages[0];
          if (firstLang) {
            translations = this._translations[firstLang] as unknown as NestedRecord | null;
          }
        }
      }

      // 翻訳データがまったくない場合はキーを返す
      if (!translations) {
        if (dev) {
          console.warn(`[i18n] No translations available, returning key: ${key}`);
        }
        return key;
      }

      // safeTranslatorを使用
      const safeTranslator = createSafeTranslator(translations);
      return safeTranslator(key, params);
    } catch (error) {
      console.error(`[i18n] Error translating key "${key}":`, error);
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
      if (
        langCode !== null &&
        langCode !== undefined &&
        langCode !== '' &&
        langCode in SUPPORTED_LANGUAGES
      ) {
        return langCode as LanguageCode;
      }
    }

    return null;
  }

  // localStorageから言語設定を読み込み（Cookieとの同期オプション付き）
  private loadLanguageFromStorage(syncToCookie = false): LanguageCode | null {
    if (!isBrowser) return null;

    try {
      const saved = localStorage.getItem('fact-checklist-language');
      if (saved !== null && saved !== '' && saved in SUPPORTED_LANGUAGES) {
        if (syncToCookie) {
          // LocalStorageに保存されている場合、Cookieにも同期
          // （PWAで LocalStorageに保存されたがCookieがない場合の対策）
          document.cookie = `language=${saved}; max-age=31536000; path=/; SameSite=Lax`;
        }
        return saved as LanguageCode;
      }
    } catch (error) {
      console.warn('⚠️ Failed to load language from localStorage:', error);
    }

    return null;
  }

  // localStorageに言語設定を保存（Cookieとも同期）
  private saveLanguageToStorage(language: LanguageCode): void {
    if (!isBrowser) return;

    try {
      // LocalStorageに保存
      localStorage.setItem('fact-checklist-language', language);

      // Cookieにも保存（サーバー側で読めるように）
      this.saveLanguageToCookie(language);
    } catch (error) {
      console.warn('⚠️ Failed to save language to localStorage:', error);
    }
  }

  /**
   * Cookie同期メソッド
   */
  private saveLanguageToCookie(language: LanguageCode): void {
    if (!isBrowser) return;

    try {
      // max-age=31536000 (1年), SameSite=Lax, Path=/
      document.cookie = `language=${language}; max-age=31536000; path=/; SameSite=Lax`;
    } catch (error) {
      console.warn('Cookie save failed:', error);
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
export const setLanguage = (language: LanguageCode): Promise<void> =>
  i18nStore.setLanguage(language);
export const getCurrentLanguage = (): LanguageCode => i18nStore.currentLanguage;
export const getDirection = (): 'ltr' | 'rtl' => i18nStore.direction;
export const getIsRTL = (): boolean => i18nStore.isRTL;
