import type { LanguageCode } from '$lib/i18n/types';
import { I18N_CONFIG } from '$lib/config/i18n.js';

/**
 * Accept-Language ヘッダーから単一の言語を決定する
 * 重複メタタグを避けるため、必ず1つの言語のみを返す
 * Issue #131: ブラウザ言語を優先する設定に対応
 */
export function detectLanguage(acceptLanguage: string): LanguageCode {
  // ブラウザ言語を優先しない場合は、デフォルト言語を返す
  if (!I18N_CONFIG.PREFER_BROWSER_LANGUAGE) {
    return I18N_CONFIG.DEFAULT_LANGUAGE;
  }

  if (!acceptLanguage) {
    return I18N_CONFIG.DEFAULT_LANGUAGE; // 設定ファイルから取得
  }

  // Accept-Language: ja,en;q=0.9,fr;q=0.8 を解析
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, q] = lang.trim().split(';q=');
      return {
        locale: (locale ?? '').toLowerCase(),
        quality: q ? parseFloat(q) : 1.0
      };
    })
    .sort((a, b) => b.quality - a.quality);

  // 対応言語リスト（設定ファイルから動的取得）
  const supportedLanguages: LanguageCode[] = [
    I18N_CONFIG.DEFAULT_LANGUAGE,
    'en',
    'fr',
    'zh-TW',
    'es',
    'pt',
    'hi',
    'de',
    'it',
    'ar',
    'id',
    'ko'
  ];

  // 優先順位で言語を確認
  for (const { locale } of languages) {
    // 完全一致チェック (zh-TW など)
    if (supportedLanguages.includes(locale as LanguageCode)) {
      return locale as LanguageCode;
    }

    // 基本言語コードをチェック (zh-CN -> zh-TW など)
    const langCode = locale.split('-')[0];
    const matchedLang = supportedLanguages.find(lang => lang.split('-')[0] === langCode);
    if (matchedLang) {
      return matchedLang;
    }
  }

  return I18N_CONFIG.DEFAULT_LANGUAGE; // 設定からフォールバック
}

/**
 * 言語に応じたロケール文字列を生成 (og:locale用)
 */
export function getLocaleString(language: LanguageCode): string {
  const localeMap: Record<LanguageCode, string> = {
    ja: 'ja_JP',
    en: 'en_US',
    fr: 'fr_FR',
    'zh-TW': 'zh_TW',
    es: 'es_ES',
    pt: 'pt_PT',
    hi: 'hi_IN',
    de: 'de_DE',
    it: 'it_IT',
    ar: 'ar_SA',
    id: 'id_ID',
    ko: 'ko_KR'
  };

  return localeMap[language] ?? `${I18N_CONFIG.DEFAULT_LANGUAGE}_JP`;
}
