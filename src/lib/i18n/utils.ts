/**
 * i18nユーティリティ関数
 * 国際化に関するヘルパー関数とRTL対応ユーティリティ
 */

import {
  SUPPORTED_LANGUAGES,
  type LanguageCode,
  type DirectionalStyles,
  type SupportedLanguage,
  type TranslationKeys,
  type NestedRecord
} from './types.js';
import { getNestedValue } from './helpers.js';

/**
 * RTL言語用のスタイルを生成
 */
export function getRTLStyles(isRTL: boolean): DirectionalStyles {
  const styles: DirectionalStyles = {
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: isRTL ? 'right' : 'left'
  };

  if (isRTL) {
    styles.marginLeft = 'auto';
    styles.paddingRight = '0';
  } else {
    styles.marginRight = 'auto';
    styles.paddingLeft = '0';
  }

  return styles;
}

/**
 * 言語コードから言語情報を取得
 */
export function getLanguageInfo(languageCode: LanguageCode): SupportedLanguage {
  return SUPPORTED_LANGUAGES[languageCode];
}

/**
 * RTL言語かどうかを判定
 */
export function isRTLLanguage(languageCode: LanguageCode): boolean {
  return SUPPORTED_LANGUAGES[languageCode]?.dir === 'rtl';
}

/**
 * 言語コードが有効かチェック
 */
export function isValidLanguageCode(code: string): code is LanguageCode {
  return code in SUPPORTED_LANGUAGES;
}

/**
 * ブラウザの言語設定から最適な言語を検出
 */
export function detectPreferredLanguage(): LanguageCode {
  // デフォルトは日本語
  const defaultLang: LanguageCode = 'ja';

  if (typeof window === 'undefined') {
    return defaultLang;
  }

  const browserLanguages = [navigator.language, ...navigator.languages];

  for (const browserLang of browserLanguages) {
    // 完全一致チェック
    if (isValidLanguageCode(browserLang)) {
      return browserLang;
    }

    // 言語コードの前半部分をチェック
    const langCode = browserLang.split('-')[0];
    if (langCode && isValidLanguageCode(langCode)) {
      return langCode;
    }

    // 特別なケース: zh-TW
    if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-Hant')) {
      return 'zh-TW';
    }
  }

  return defaultLang;
}

/**
 * CSS クラス名に方向を追加
 */
export function addDirectionToClassName(baseClassName: string, isRTL: boolean): string {
  return `${baseClassName} ${isRTL ? 'rtl' : 'ltr'}`;
}

/**
 * インライン スタイルに方向プロパティを追加
 */
export function addDirectionToStyle(
  baseStyle: Record<string, string>,
  isRTL: boolean
): Record<string, string> {
  return {
    ...baseStyle,
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: isRTL ? 'right' : 'left'
  };
}

/**
 * 数値のローカライズ（言語に応じた数値表記）
 */
export function localizeNumber(
  number: number,
  languageCode: LanguageCode,
  options?: Intl.NumberFormatOptions
): string {
  try {
    return new Intl.NumberFormat(languageCode, options).format(number);
  } catch {
    // フォールバック
    return number.toString();
  }
}

/**
 * 日付のローカライズ
 */
export function localizeDate(
  date: Date,
  languageCode: LanguageCode,
  options?: Intl.DateTimeFormatOptions
): string {
  try {
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options
    };

    return new Intl.DateTimeFormat(languageCode, defaultOptions).format(date);
  } catch {
    // フォールバック
    return date.toLocaleDateString();
  }
}

/**
 * 相対時間の表示（〇分前、〇時間前など）
 */
export function getRelativeTime(
  date: Date,
  languageCode: LanguageCode,
  baseDate: Date = new Date()
): string {
  try {
    const rtf = new Intl.RelativeTimeFormat(languageCode, { numeric: 'auto' });
    const diffInSeconds = (date.getTime() - baseDate.getTime()) / 1000;

    // 秒
    if (Math.abs(diffInSeconds) < 60) {
      return rtf.format(Math.round(diffInSeconds), 'second');
    }

    // 分
    const diffInMinutes = diffInSeconds / 60;
    if (Math.abs(diffInMinutes) < 60) {
      return rtf.format(Math.round(diffInMinutes), 'minute');
    }

    // 時間
    const diffInHours = diffInMinutes / 60;
    if (Math.abs(diffInHours) < 24) {
      return rtf.format(Math.round(diffInHours), 'hour');
    }

    // 日
    const diffInDays = diffInHours / 24;
    if (Math.abs(diffInDays) < 30) {
      return rtf.format(Math.round(diffInDays), 'day');
    }

    // 月
    const diffInMonths = diffInDays / 30;
    if (Math.abs(diffInMonths) < 12) {
      return rtf.format(Math.round(diffInMonths), 'month');
    }

    // 年
    const diffInYears = diffInMonths / 12;
    return rtf.format(Math.round(diffInYears), 'year');
  } catch {
    // フォールバック
    return localizeDate(date, languageCode);
  }
}

/**
 * パーセンテージのローカライズ
 */
export function localizePercentage(
  value: number,
  languageCode: LanguageCode,
  fractionDigits: number = 0
): string {
  try {
    return new Intl.NumberFormat(languageCode, {
      style: 'percent',
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    }).format(value / 100);
  } catch {
    return `${value}%`;
  }
}

/**
 * 通貨のローカライズ（必要に応じて）
 */
export function localizeCurrency(
  amount: number,
  languageCode: LanguageCode,
  currency: string = 'USD'
): string {
  try {
    return new Intl.NumberFormat(languageCode, {
      style: 'currency',
      currency
    }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}

/**
 * 複数形の処理（英語などの言語用）
 */
export function pluralize(
  count: number,
  singular: string,
  plural: string,
  languageCode: LanguageCode = 'en'
): string {
  // 簡単な複数形ルール（実際のプロジェクトではより複雑なルールが必要）
  if (languageCode === 'en') {
    return count === 1 ? singular : plural;
  }

  // 日本語など複数形がない言語
  if (['ja', 'ko', 'zh-TW', 'id'].includes(languageCode)) {
    return singular;
  }

  // その他の言語は基本的な複数形ルール
  return count === 1 ? singular : plural;
}

/**
 * 翻訳キーの検証（開発時のデバッグ用）
 */
export function validateTranslationKeys(
  translations: TranslationKeys,
  requiredKeys: string[]
): { valid: boolean; missingKeys: string[] } {
  const missingKeys: string[] = [];

  for (const key of requiredKeys) {
    const value = getNestedValue(translations as unknown as NestedRecord, key);
    if (value === undefined || value === null) {
      missingKeys.push(key);
    }
  }

  return {
    valid: missingKeys.length === 0,
    missingKeys
  };
}

/**
 * 言語選択用のオプション配列を生成
 */
export function getLanguageOptions(): Array<{
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}> {
  return Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => ({
    code: code as LanguageCode,
    name: info.name,
    nativeName: info.nativeName,
    flag: info.flag
  }));
}

/**
 * フォント読み込みのための言語別フォントファミリー取得
 */
export function getLanguageFontFamily(languageCode: LanguageCode): string {
  const fontFamilies: Record<LanguageCode, string> = {
    ja: '"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif',
    en: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    fr: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    'zh-TW': '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
    es: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    pt: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    hi: '"Noto Sans Devanagari", "Mangal", "Aparajita", sans-serif',
    de: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    it: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    ar: '"Noto Sans Arabic", "Segoe UI Arabic", "Tahoma", sans-serif',
    id: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    ko: '"Noto Sans KR", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif'
  };

  return fontFamilies[languageCode] || fontFamilies['en'];
}

/**
 * CSSカスタムプロパティでフォントファミリーを設定
 */
export function setLanguageFontCSS(languageCode: LanguageCode): void {
  if (typeof window === 'undefined') return;

  const fontFamily = getLanguageFontFamily(languageCode);
  document.documentElement.style.setProperty('--font-family-primary', fontFamily);
}
