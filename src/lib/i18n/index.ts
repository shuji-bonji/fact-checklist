/**
 * i18n システム初期化・設定
 * 国際化システムのエントリーポイント
 */

import {
	SUPPORTED_LANGUAGES,
	type LanguageCode,
	type TranslationKeys,
	type I18nState,
	type LanguageSettings,
	type NestedRecord
} from './types.js';
import {
	i18nStore,
	t,
	setLanguage,
	getCurrentLanguage,
	getDirection,
	getIsRTL
} from './store.svelte.js';
import { createSafeTranslator } from './helpers.js';
import {
	getRTLStyles,
	getLanguageInfo,
	isRTLLanguage,
	isValidLanguageCode,
	detectPreferredLanguage,
	addDirectionToClassName,
	addDirectionToStyle,
	localizeNumber,
	localizeDate,
	localizePercentage,
	getRelativeTime,
	getLanguageOptions,
	getLanguageFontFamily,
	setLanguageFontCSS
} from './utils.js';

// デフォルト設定
export const DEFAULT_I18N_CONFIG: LanguageSettings = {
	currentLanguage: 'ja',
	fallbackLanguage: 'ja',
	autoDetect: true,
	rtlSupport: true
};

/**
 * i18nシステムの初期化
 * アプリケーション起動時に呼び出し
 */
export async function initializeI18n(_config: Partial<LanguageSettings> = {}): Promise<void> {
	console.log('🌍 Initializing i18n system...');

	try {
		// ブラウザ環境チェック
		if (typeof window === 'undefined') {
			console.log('🌍 Server-side environment detected, skipping i18n initialization');
			return;
		}

		// ストアの初期化は自動的に行われる
		// 必要に応じて追加の設定を適用

		console.log('✅ i18n system initialized successfully');
	} catch (error) {
		console.error('❌ Failed to initialize i18n system:', error);
		throw error;
	}
}

/**
 * 翻訳ファイルの事前読み込み（パフォーマンス最適化用）
 */
export async function preloadTranslations(languages: LanguageCode[]): Promise<void> {
	console.log('📥 Preloading translations for languages:', languages);

	const loadPromises = languages.map(async lang => {
		try {
			await setLanguage(lang);
			console.log(`✅ Preloaded translations for: ${lang}`);
		} catch (error) {
			console.warn(`⚠️ Failed to preload translations for ${lang}:`, error);
		}
	});

	await Promise.allSettled(loadPromises);
}

/**
 * i18nシステムの設定を取得
 */
export function getI18nConfig(): LanguageSettings {
	return {
		currentLanguage: getCurrentLanguage(),
		fallbackLanguage: 'ja',
		autoDetect: true,
		rtlSupport: true
	};
}

/**
 * i18nシステムの状態を取得（デバッグ用）
 */
export function getI18nState(): I18nState {
	return {
		currentLanguage: i18nStore.currentLanguage,
		translations: {} as Record<LanguageCode, TranslationKeys>, // プライベートなので空で返す
		isLoading: i18nStore.isLoading,
		error: i18nStore.error,
		direction: i18nStore.direction
	};
}

/**
 * システム全体でサポートされている言語の取得
 */
export function getSupportedLanguages() {
	return SUPPORTED_LANGUAGES;
}

/**
 * 翻訳統計の取得（開発・デバッグ用）
 */
export function getTranslationStats() {
	return i18nStore.getTranslationStats();
}

/**
 * 言語切り替え時のコールバック
 * コンポーネントで使用可能
 */
export function onLanguageChange(callback: (language: LanguageCode) => void): () => void {
	let currentLang = getCurrentLanguage();

	// ポーリングベースの変更検知（簡易実装）
	const interval = setInterval(() => {
		const newLang = getCurrentLanguage();
		if (newLang !== currentLang) {
			currentLang = newLang;
			callback(newLang);
		}
	}, 100);

	// クリーンアップ関数を返す
	return () => clearInterval(interval);
}

/**
 * HTMLドキュメントの言語属性を更新
 * SSR対応のためのヘルパー
 */
export function updateDocumentLanguage(language: LanguageCode): void {
	if (typeof window === 'undefined') return;

	try {
		const html = document.documentElement;
		const languageInfo = getLanguageInfo(language);

		html.lang = language;
		html.dir = languageInfo.dir;

		// CSS変数の設定
		html.style.setProperty('--text-direction', languageInfo.dir);
		html.style.setProperty('--is-rtl', languageInfo.dir === 'rtl' ? '1' : '0');

		// フォントファミリーの設定
		setLanguageFontCSS(language);

		console.log(`🌍 Document language updated to: ${language} (${languageInfo.dir})`);
	} catch (error) {
		console.warn('⚠️ Failed to update document language:', error);
	}
}

/**
 * エラーハンドリング付きの安全な翻訳関数
 */
export function safeTranslate(
	key: string,
	params?: Record<string, string | number>,
	fallback?: string
): string {
	try {
		// 現在の翻訳データを直接取得して型安全な翻訳関数を作成
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord, fallback);
		return safeTranslator(key, params);
	} catch (error) {
		console.warn(`⚠️ Translation error for key "${key}":`, error);
		return fallback ?? key;
	}
}

/**
 * 複数の翻訳キーを一括取得
 */
export function bulkTranslate(keys: string[]): Record<string, string> {
	const result: Record<string, string> = {};
	const translations = i18nStore.translations;
	const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);

	for (const key of keys) {
		result[key] = safeTranslator(key);
	}

	return result;
}

/**
 * 条件付き翻訳（複数形対応など）
 */
export function conditionalTranslate(
	condition: boolean | number,
	trueKey: string,
	falseKey: string,
	params?: Record<string, string | number>
): string {
	const key =
		typeof condition === 'number'
			? condition === 1
				? trueKey
				: falseKey
			: condition
				? trueKey
				: falseKey;

	const translations = i18nStore.translations;
	const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
	return safeTranslator(key, params);
}

// メインエクスポート（便利な関数群）
export {
	// ストア関連
	i18nStore,
	t,
	setLanguage,
	getCurrentLanguage,
	getDirection,
	getIsRTL,

	// ユーティリティ関数
	getRTLStyles,
	getLanguageInfo,
	isRTLLanguage,
	isValidLanguageCode,
	detectPreferredLanguage,
	addDirectionToClassName,
	addDirectionToStyle,
	localizeNumber,
	localizeDate,
	localizePercentage,
	getRelativeTime,
	getLanguageOptions,
	getLanguageFontFamily,
	setLanguageFontCSS,

	// 型定義
	type LanguageCode,
	type TranslationKeys,
	type I18nState,
	type LanguageSettings
};

// アプリケーション固有のヘルパー
export const factChecklistI18n = {
	/**
	 * チェックリストアプリ専用の翻訳ヘルパー
	 */
	getCategoryName: (categoryId: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`categories.${categoryId}.name`);
	},
	getCategoryDescription: (categoryId: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`categories.${categoryId}.description`);
	},
	getCategoryEmoji: (categoryId: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`categories.${categoryId}.emoji`);
	},

	getJudgmentText: (judgment: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`checklist.judgment.${judgment}`);
	},
	getJudgmentAdvice: (judgment: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`checklist.judgmentAdvice.${judgment}`);
	},

	getExportFormatName: (format: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`export.formats.${format}`);
	},
	getExportProgress: (stage: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`export.progress.${stage}`);
	},

	getErrorMessage: (errorType: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`errors.${errorType}`);
	},
	getSuccessMessage: (actionType: string) => {
		const translations = i18nStore.translations;
		const safeTranslator = createSafeTranslator(translations as unknown as NestedRecord);
		return safeTranslator(`success.${actionType}`);
	},

	/**
	 * スコア表示のローカライズ
	 */
	formatScore: (score: number) => localizePercentage(score, getCurrentLanguage()),

	/**
	 * 日付表示のローカライズ
	 */
	formatDate: (date: Date) => localizeDate(date, getCurrentLanguage()),
	formatRelativeTime: (date: Date) => getRelativeTime(date, getCurrentLanguage()),

	/**
	 * 数値表示のローカライズ
	 */
	formatNumber: (num: number) => localizeNumber(num, getCurrentLanguage())
};
