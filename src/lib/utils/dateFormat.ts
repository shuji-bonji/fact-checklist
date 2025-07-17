// src/lib/utils/dateFormat.ts
// 日付フォーマット関連のユーティリティ関数

import { I18N_CONFIG } from '../config/i18n.js';

/**
 * 日付を指定されたロケールでフォーマットする
 * @param date フォーマットする日付
 * @param locale ロケール（デフォルト: 設定値）
 * @param options フォーマットオプション
 * @returns フォーマットされた日付文字列
 */
export function formatDate(
  date: Date | string,
  locale: string = I18N_CONFIG.DEFAULT_LANGUAGE,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  const formatOptions = { ...defaultOptions, ...options };

  try {
    return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
  } catch {
    // フォールバック: シンプルな形式
    return dateObj.toLocaleDateString(locale);
  }
}

/**
 * 日付のみをフォーマットする（時刻なし）
 * @param date フォーマットする日付
 * @param locale ロケール
 * @returns フォーマットされた日付文字列
 */
export function formatDateOnly(
  date: Date | string,
  locale: string = I18N_CONFIG.DEFAULT_LANGUAGE
): string {
  return formatDate(date, locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * 時刻のみをフォーマットする
 * @param date フォーマットする日付
 * @param locale ロケール
 * @returns フォーマットされた時刻文字列
 */
export function formatTimeOnly(
  date: Date | string,
  locale: string = I18N_CONFIG.DEFAULT_LANGUAGE
): string {
  return formatDate(date, locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

/**
 * ISO 8601形式の日付文字列を生成する
 * @param date 日付
 * @returns ISO 8601形式の文字列
 */
export function formatISO(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
}

/**
 * ファイル名に適した日付文字列を生成する
 * @param date 日付
 * @returns ファイル名に適した日付文字列（YYYY-MM-DD_HH-mm-ss形式）
 */
export function formatDateForFilename(date: Date | string = new Date()): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

/**
 * 相対時間を文字列で表現する
 * @param date 基準日付
 * @param locale ロケール
 * @returns 相対時間文字列（例: "2時間前"）
 */
export function formatRelativeTime(
  date: Date | string,
  locale: string = I18N_CONFIG.DEFAULT_LANGUAGE
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return rtf.format(-diffDays, 'day');
  } else if (diffHours > 0) {
    return rtf.format(-diffHours, 'hour');
  } else if (diffMinutes > 0) {
    return rtf.format(-diffMinutes, 'minute');
  } else {
    return rtf.format(-diffSeconds, 'second');
  }
}

/**
 * ロケールに応じた日付フォーマッター関数を作成する
 * @param locale ロケール
 * @returns 日付フォーマッター関数
 */
export function createDateFormatter(locale: string) {
  return {
    formatDate: (date: Date | string, options?: Intl.DateTimeFormatOptions) =>
      formatDate(date, locale, options),
    formatDateOnly: (date: Date | string) => formatDateOnly(date, locale),
    formatTimeOnly: (date: Date | string) => formatTimeOnly(date, locale),
    formatRelativeTime: (date: Date | string) => formatRelativeTime(date, locale)
  };
}
