// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import '@sveltejs/kit';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// PWA関連の型定義
	interface Window {
		fs?: {
			readFile: (filepath: string, options?: { encoding?: string }) => Promise<Uint8Array | string>;
		};
	}

	// Service Worker関連
	interface Navigator {
		serviceWorker: ServiceWorkerContainer;
	}

	interface ServiceWorkerContainer {
		ready: Promise<ServiceWorkerRegistration>;
		register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
		getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | undefined>;
		getRegistrations(): Promise<ServiceWorkerRegistration[]>;
	}

	// PWAインストール関連
	interface BeforeInstallPromptEvent extends Event {
		readonly platforms: Array<string>;
		readonly userChoice: Promise<{
			outcome: 'accepted' | 'dismissed';
			platform: string;
		}>;
		prompt(): Promise<void>;
	}

	interface WindowEventMap {
		beforeinstallprompt: BeforeInstallPromptEvent;
		appinstalled: Event;
	}

	// Web Share API
	interface Navigator {
		share?: (data: {
			title?: string;
			text?: string;
			url?: string;
			files?: File[];
		}) => Promise<void>;
		canShare?: (data: {
			title?: string;
			text?: string;
			url?: string;
			files?: File[];
		}) => boolean;
	}

	// Clipboard API
	interface Navigator {
		clipboard: Clipboard;
	}

	interface Clipboard {
		writeText(data: string): Promise<void>;
		readText(): Promise<string>;
	}

	// Performance Observer API
	interface PerformanceObserver {
		new (callback: PerformanceObserverCallback): PerformanceObserver;
		observe(options: PerformanceObserverInit): void;
		disconnect(): void;
		takeRecords(): PerformanceEntry[];
	}

	interface PerformanceObserverCallback {
		(list: PerformanceObserverEntryList, observer: PerformanceObserver): void;
	}

	// Notification API
	interface Notification {
		data?: any;
	}

	// Storage Estimate API
	interface Navigator {
		storage?: {
			estimate(): Promise<{
				quota?: number;
				usage?: number;
				usageDetails?: {
					indexedDB?: number;
					caches?: number;
					serviceWorkerRegistrations?: number;
				};
			}>;
			persist?(): Promise<boolean>;
			persisted?(): Promise<boolean>;
		};
	}

	// IndexedDB Types
	interface IDBDatabase {
		transaction(
			storeNames: string | string[],
			mode?: IDBTransactionMode,
			options?: IDBTransactionOptions
		): IDBTransaction;
	}
}

// Svelte 5のrunes型定義の拡張
declare module 'svelte' {
	// $stateの型をより厳密に定義
	export function $state<T>(initial: T): T;
	export function $state<T>(): T | undefined;
	
	// $derivedの型をより厳密に定義
	export function $derived<T>(expression: () => T): T;
	export function $derived<T>(expression: T): T;
	
	// $effectの型をより厳密に定義
	export function $effect(fn: () => void | (() => void)): void;
	export namespace $effect {
		export function pre(fn: () => void | (() => void)): void;
		export function root(fn: () => void | (() => void)): () => void;
	}
	
	// $propsの型をより厳密に定義
	export function $props<T = any>(): T;
	
	// $inspectの型定義
	export function $inspect<T extends any[]>(...values: T): void;
}

// HTMLElement拡張
declare global {
	interface HTMLElement {
		// カスタムデータ属性
		dataset: DOMStringMap & {
			checklistId?: string;
			itemId?: string;
			categoryId?: string;
		};
	}
}

// 環境変数の型定義
declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production' | 'test';
		PUBLIC_APP_VERSION?: string;
		PUBLIC_APP_NAME?: string;
		PUBLIC_ANALYTICS_ID?: string;
	}
}

// SvelteKit特有の型定義
declare module '$app/environment' {
	export const browser: boolean;
	export const dev: boolean;
	export const building: boolean;
	export const version: string;
}

declare module '$app/navigation' {
	export function goto(url: string | URL, opts?: {
		replaceState?: boolean;
		noScroll?: boolean;
		keepFocus?: boolean;
		invalidateAll?: boolean;
		state?: any;
	}): Promise<void>;
	
	export function invalidate(url: string | URL | ((url: URL) => boolean)): Promise<void>;
	export function invalidateAll(): Promise<void>;
	export function preloadData(href: string): Promise<void>;
	export function preloadCode(...hrefs: string[]): Promise<void>;
	export function beforeNavigate(fn: (navigation: any) => void): void;
	export function afterNavigate(fn: (navigation: any) => void): void;
	export function pushState(url: string | URL, state: any): void;
	export function replaceState(url: string | URL, state: any): void;
}

declare module '$app/stores' {
	import type { Readable } from 'svelte/store';
	
	export interface Page {
		url: URL;
		params: Record<string, string>;
		route: {
			id: string | null;
		};
		status: number;
		error: any | null;
		data: Record<string, any>;
		form: any;
		state: any;
	}
	
	export interface Navigation {
		from: { url: URL; params: Record<string, string>; route: { id: string | null } } | null;
		to: { url: URL; params: Record<string, string>; route: { id: string | null } } | null;
		type: 'link' | 'popstate' | 'goto';
		complete: Promise<void>;
	}
	
	export const page: Readable<Page>;
	export const navigating: Readable<Navigation | null>;
	export const updated: Readable<boolean>;
}

declare module '$app/paths' {
	export const base: string;
	export const assets: string;
}

// Local Storage拡張（PWA用）
interface Storage {
	// チェックリスト関連のキー
	getItem(key: `checklist_${string}`): string | null;
	setItem(key: `checklist_${string}`, value: string): void;
	removeItem(key: `checklist_${string}`): void;
	
	// 履歴関連
	getItem(key: 'checklist_history'): string | null;
	setItem(key: 'checklist_history', value: string): void;
	
	// 設定関連
	getItem(key: 'app_settings'): string | null;
	setItem(key: 'app_settings', value: string): void;
}

// CSS modules
declare module '*.css' {
	const content: any;
	export default content;
}

declare module '*.scss' {
	const content: any;
	export default content;
}

declare module '*.sass' {
	const content: any;
	export default content;
}

declare module '*.less' {
	const content: any;
	export default content;
}

declare module '*.styl' {
	const content: any;
	export default content;
}

// Vite関連の型定義
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_APP_VERSION: string;
	readonly VITE_BUILD_DATE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// PWA Manifest型定義
interface WebAppManifest {
	name: string;
	short_name: string;
	description: string;
	start_url: string;
	display: 'standalone' | 'fullscreen' | 'minimal-ui' | 'browser';
	theme_color: string;
	background_color: string;
	icons: Array<{
		src: string;
		sizes: string;
		type: string;
		purpose?: 'any' | 'maskable' | 'monochrome';
	}>;
}

export {};