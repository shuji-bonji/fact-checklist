// src/lib/components/export/utils/ExportI18nLoader.ts
// エクスポート用i18n読み込みの共通ロジック

import type {
  FactChecklistI18n,
  GetCurrentLanguageFunction,
  GetSupportedLanguagesFunction,
  TranslationFunction
} from '$lib/types/i18n.js';

/**
 * i18nモジュールの型定義
 */
interface I18nModule {
  factChecklistI18n: FactChecklistI18n;
  t: TranslationFunction;
  getCurrentLanguage?: GetCurrentLanguageFunction;
  getSupportedLanguages?: GetSupportedLanguagesFunction;
}

/**
 * i18n読み込み結果インターフェース
 */
export interface I18nLoadResult {
  factChecklistI18n: FactChecklistI18n;
  t: TranslationFunction;
  getCurrentLanguage?: GetCurrentLanguageFunction;
  getSupportedLanguages?: GetSupportedLanguagesFunction;
}

/**
 * エクスポート用i18n読み込みのヘルパークラス
 */
export class ExportI18nLoader {
  private static cachedI18n: I18nLoadResult | null = null;
  private static cacheTimestamp: number = 0;
  private static readonly CACHE_DURATION = 5 * 60 * 1000; // 5分間のキャッシュ

  /**
   * i18nモジュールを読み込む
   * @param includeLanguageFunctions 言語関連関数を含めるかどうか
   * @param forceReload キャッシュを無視して強制再読み込みするか
   * @returns i18n読み込み結果
   */
  static async loadI18n(
    includeLanguageFunctions: boolean = false,
    forceReload: boolean = false
  ): Promise<I18nLoadResult> {
    const now = Date.now();

    // キャッシュチェック
    if (!forceReload && this.cachedI18n && now - this.cacheTimestamp < this.CACHE_DURATION) {
      // 言語関数が必要だがキャッシュに含まれていない場合は再読み込み
      if (includeLanguageFunctions && !this.cachedI18n.getCurrentLanguage) {
        // キャッシュを更新
        await this.reloadWithLanguageFunctions();
      }
      return this.cachedI18n;
    }

    try {
      let result: I18nLoadResult;

      if (includeLanguageFunctions) {
        const i18nModule = (await import('$lib/i18n/index.js')) as I18nModule;
        const { factChecklistI18n, t, getCurrentLanguage, getSupportedLanguages } = i18nModule;

        result = {
          factChecklistI18n,
          t,
          ...(getCurrentLanguage && { getCurrentLanguage }),
          ...(getSupportedLanguages && { getSupportedLanguages })
        };
      } else {
        const i18nModule = (await import('$lib/i18n/index.js')) as I18nModule;
        const { factChecklistI18n, t } = i18nModule;
        result = { factChecklistI18n, t };
      }

      // キャッシュに保存
      this.cachedI18n = result;
      this.cacheTimestamp = now;

      return result;
    } catch (error) {
      console.error('Failed to load i18n modules:', error);

      // フォールバック: 基本的なダミーオブジェクトを返す
      const fallbackI18n = {
        getCheckItemTitle: (key: string) => key,
        getCheckItemDescription: (key: string) => key,
        getCategoryTitle: (key: string) => key
      };

      const fallbackResult: I18nLoadResult = {
        factChecklistI18n: fallbackI18n,
        t: (key: string) => key,
        ...(includeLanguageFunctions && {
          getCurrentLanguage: () => 'en',
          getSupportedLanguages: () => ({ en: { name: 'English' } })
        })
      };

      return fallbackResult;
    }
  }

  /**
   * 言語関数を含めてキャッシュを更新する
   */
  private static async reloadWithLanguageFunctions(): Promise<void> {
    try {
      const i18nModule = (await import('$lib/i18n/index.js')) as I18nModule;
      const { factChecklistI18n, t, getCurrentLanguage, getSupportedLanguages } = i18nModule;

      this.cachedI18n = {
        factChecklistI18n,
        t,
        ...(getCurrentLanguage && { getCurrentLanguage }),
        ...(getSupportedLanguages && { getSupportedLanguages })
      };
      this.cacheTimestamp = Date.now();
    } catch (error) {
      console.error('Failed to reload i18n with language functions:', error);
    }
  }

  /**
   * 基本的なi18n（翻訳関数のみ）を読み込む
   * @param forceReload 強制再読み込み
   * @returns factChecklistI18nオブジェクト
   */
  static async loadBasicI18n(forceReload: boolean = false): Promise<I18nLoadResult> {
    return this.loadI18n(false, forceReload);
  }

  /**
   * 完全なi18n（言語関数を含む）を読み込む
   * @param forceReload 強制再読み込み
   * @returns 完全なi18n読み込み結果
   */
  static async loadFullI18n(forceReload: boolean = false): Promise<I18nLoadResult> {
    return this.loadI18n(true, forceReload);
  }

  /**
   * 現在の言語を取得する
   * @returns 現在の言語コード
   */
  static async getCurrentLanguage(): Promise<string> {
    const result = await this.loadI18n(true);
    return result.getCurrentLanguage?.() ?? 'en';
  }

  /**
   * サポートされている言語リストを取得する
   * @returns サポート言語配列
   */
  static async getSupportedLanguages(): Promise<string[]> {
    const result = await this.loadI18n(true);
    const supportedLangs = result.getSupportedLanguages?.();
    return Array.isArray(supportedLangs) ? supportedLangs : Object.keys(supportedLangs ?? {});
  }

  /**
   * キャッシュをクリアする
   */
  static clearCache(): void {
    this.cachedI18n = null;
    this.cacheTimestamp = 0;
    // console.log('i18n cache cleared');
  }

  /**
   * キャッシュの状態を取得する
   * @returns キャッシュ情報
   */
  static getCacheInfo(): {
    isCached: boolean;
    cacheAge: number;
    hasLanguageFunctions: boolean;
  } {
    const now = Date.now();
    return {
      isCached: this.cachedI18n !== null,
      cacheAge: this.cacheTimestamp > 0 ? now - this.cacheTimestamp : 0,
      hasLanguageFunctions: Boolean(this.cachedI18n?.getCurrentLanguage)
    };
  }

  /**
   * i18nの健全性をチェックする
   * @returns 健全性チェック結果
   */
  static async healthCheck(): Promise<{
    isHealthy: boolean;
    errors: string[];
    loadTime: number;
  }> {
    const startTime = Date.now();
    const errors: string[] = [];

    try {
      // 基本読み込みテスト
      const basicI18n = await this.loadBasicI18n(true);
      if (basicI18n?.t === undefined || basicI18n?.t === null) {
        errors.push('Basic translation function not available');
      }

      // 完全読み込みテスト
      const fullI18n = await this.loadFullI18n(true);
      if (fullI18n.getCurrentLanguage === undefined || fullI18n.getCurrentLanguage === null) {
        errors.push('Language functions not available');
      }

      // 翻訳テスト
      const testResult = await this.loadBasicI18n(true);
      const testTranslation = testResult.t('app.title');
      if (!testTranslation || testTranslation === 'app.title') {
        errors.push('Translation function returned empty or fallback result');
      }
    } catch (error) {
      errors.push(`Health check failed: ${error instanceof Error ? error.message : String(error)}`);
    }

    const loadTime = Date.now() - startTime;

    return {
      isHealthy: errors.length === 0,
      errors,
      loadTime
    };
  }
}
