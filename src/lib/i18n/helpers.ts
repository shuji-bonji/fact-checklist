/**
 * i18n共通ヘルパー関数
 * 型安全なユーティリティ関数群
 */

import type { NestedRecord } from './types.js';

/**
 * ネストしたオブジェクトから値を安全に取得
 * anyの代わりに型安全な実装 - 配列対応版
 */
export function getNestedValue(obj: NestedRecord, path: string): string | string[] | undefined {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && current !== null && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  // 文字列、配列、または未定義を返す
  if (typeof current === 'string') {
    return current;
  } else if (Array.isArray(current) && current.every(item => typeof item === 'string')) {
    return current;
  }

  return undefined;
}

/**
 * オブジェクトの翻訳数を再帰的にカウント
 * 型安全な実装
 */
export function countTranslations(obj: NestedRecord): number {
  let count = 0;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === 'string') {
        count++;
      } else if (typeof value === 'object' && value !== null) {
        count += countTranslations(value);
      }
    }
  }

  return count;
}

/**
 * パラメータ置換処理
 * {{key}} 形式のプレースホルダーを置換
 */
export function interpolateParams(text: string, params: Record<string, string | number>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    const value = params[key];
    return value !== undefined ? String(value) : match;
  });
}

/**
 * 翻訳キーの妥当性を検証
 */
export function isValidTranslationKey(key: string): boolean {
  // 基本的なキー形式の検証
  return /^[a-zA-Z0-9._-]+$/.test(key) && !key.startsWith('.') && !key.endsWith('.');
}

/**
 * 安全な翻訳関数を作成（文字列専用）
 * 型安全性を保ちながら動的キーアクセスを可能にする
 */
export function createSafeTranslator(
  translations: NestedRecord | null,
  fallbackKey?: string
): (key: string, params?: Record<string, string | number>) => string {
  return (key: string, params?: Record<string, string | number>): string => {
    if (!translations) {
      console.warn(`⚠️ No translations available, returning key: ${key}`);
      return fallbackKey ?? key;
    }

    if (!isValidTranslationKey(key)) {
      console.warn(`⚠️ Invalid translation key format: ${key}`);
      return fallbackKey ?? key;
    }

    const value = getNestedValue(translations, key);

    if (value === undefined || Array.isArray(value)) {
      console.warn(`⚠️ Translation not found or is array for key: ${key}`);
      return fallbackKey ?? key;
    }

    // パラメータ置換
    if (params) {
      return interpolateParams(value, params);
    }

    return value;
  };
}

/**
 * 配列対応の安全な翻訳関数を作成
 * 文字列と配列の両方を返すことができる
 */
export function createFlexibleTranslator(
  translations: NestedRecord | null,
  fallbackKey?: string
): (key: string, params?: Record<string, string | number>) => string | string[] {
  return (key: string, params?: Record<string, string | number>): string | string[] => {
    if (!translations) {
      console.warn(`⚠️ No translations available, returning key: ${key}`);
      return fallbackKey ?? key;
    }

    if (!isValidTranslationKey(key)) {
      console.warn(`⚠️ Invalid translation key format: ${key}`);
      return fallbackKey ?? key;
    }

    const value = getNestedValue(translations, key);

    if (value === undefined) {
      console.warn(`⚠️ Translation not found for key: ${key}`);
      return fallbackKey ?? key;
    }

    // 配列の場合はそのまま返す
    if (Array.isArray(value)) {
      return value;
    }

    // 文字列の場合はパラメータ置換
    if (params) {
      return interpolateParams(value, params);
    }

    return value;
  };
}
