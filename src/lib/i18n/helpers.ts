/**
 * i18n共通ヘルパー関数
 * 型安全なユーティリティ関数群
 */

import type { NestedRecord } from './types.js';

/**
 * ネストしたオブジェクトから値を安全に取得
 * anyの代わりに型安全な実装
 */
export function getNestedValue(obj: NestedRecord, path: string): string | undefined {
	const keys = path.split('.');
	let current: NestedRecord | string = obj;

	for (const key of keys) {
		if (typeof current === 'string') {
			return undefined; // 文字列に到達したが、まだパスが残っている
		}

		if (current && typeof current === 'object' && key in current) {
			const nextValue: NestedRecord | string | undefined = current[key];
			if (nextValue !== undefined) {
				current = nextValue;
			} else {
				return undefined;
			}
		} else {
			return undefined;
		}
	}

	return typeof current === 'string' ? current : undefined;
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
 * 安全な翻訳関数を作成
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

		if (value === undefined) {
			console.warn(`⚠️ Translation not found for key: ${key}`);
			return fallbackKey ?? key;
		}

		// パラメータ置換
		if (params) {
			return interpolateParams(value, params);
		}

		return value;
	};
}
