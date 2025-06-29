<script lang="ts">
	import '../app.css';

	// PWA設定
	import { onMount } from 'svelte';
	import { dev, browser } from '$app/environment';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	interface Props {
		children: import('svelte').Snippet;
	}

	const { children }: Props = $props();

	// ナビゲーションメニューの状態
	let isMenuOpen = $state(false);

	// 現在のページを判定
	const currentPath = $derived($page.url.pathname);
	const isHomePage = $derived(currentPath === '/' || currentPath === base);
	const isAboutPage = $derived(currentPath.includes('/about'));
	const isHelpPage = $derived(currentPath.includes('/help'));
	const isPrivacyPage = $derived(currentPath.includes('/privacy'));

	onMount(async () => {
		// ローディング画面を確実に非表示にする（ブラウザ環境でのみ）
		if (browser) {
			document.body.classList.add('app-loaded');
			const loadingElement = document.querySelector('.app-loading') as HTMLElement;
			if (loadingElement) {
				loadingElement.style.display = 'none';
				console.log('Loading screen hidden from layout');
			}
		}

		if (!dev && 'serviceWorker' in navigator && browser) {
			try {
				// ベースパスを考慮したService Worker登録
				const swPath = `${base}/service-worker.js`;
				console.log('Registering Service Worker at:', swPath);

				const registration = await navigator.serviceWorker.register(swPath, {
					scope: `${base}/`
				});
				console.log('Service Worker registered successfully:', registration);
			} catch (error) {
				console.error('Service Worker registration failed:', error);
			}
		}
	});

	// ナビゲーション関数
	function goToHome() {
		goto(base || '/');
		isMenuOpen = false;
	}

	function goToAbout() {
		goto(`${base}/about`);
		isMenuOpen = false;
	}

	function goToHelp() {
		goto(`${base}/help`);
		isMenuOpen = false;
	}

	function goToPrivacy() {
		goto(`${base}/privacy`);
		isMenuOpen = false;
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// メニュー外クリックで閉じる
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.global-nav') && isMenuOpen) {
			isMenuOpen = false;
		}
	}
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="description"
		content="情報の信頼性を科学的・体系的に評価するための実用的事実確認チェックシート"
	/>
	<meta name="keywords" content="事実確認,ファクトチェック,情報検証,信頼性評価,PWA" />
	<meta name="author" content="Fact Checklist Team" />

	<!-- PWA用メタタグ -->
	<meta name="theme-color" content="#2c3e50" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="事実確認チェックシート" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="実用的事実確認チェックシート" />
	<meta property="og:description" content="情報の信頼性を科学的・体系的に評価するためのPWA" />
	<meta property="og:locale" content="ja_JP" />

	<!-- アイコン -->
	<link rel="icon" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<!-- Vite PWAが自動でmanifestリンクを挿入するため、手動linkは削除 -->

	<title>実用的事実確認チェックシート</title>
</svelte:head>

<svelte:window onclick={handleClickOutside} />

<div class="app">
	<!-- グローバルナビゲーション -->
	<nav class="global-nav">
		<!-- タブレット用２段レイアウト -->
		<div class="nav-content tablet-layout">
			<div class="nav-top">
				<button class="nav-brand" onclick={goToHome}>
					<span class="nav-icon">🔍</span>
					<div class="brand-text">
						<span class="brand-title">事実確認チェックシート</span>
						<span class="brand-subtitle">情報の信頼性を科学的評価</span>
					</div>
				</button>
			</div>
			<div class="nav-bottom">
				<div class="nav-menu desktop-menu">
					<button class="nav-link" class:active={isHomePage} onclick={goToHome}> 🏠 ホーム </button>
					<button class="nav-link" class:active={isAboutPage} onclick={goToAbout}>
						📖 アプリについて
					</button>
					<button class="nav-link" class:active={isHelpPage} onclick={goToHelp}>
						❓ ヘルプ・使い方
					</button>
					<button class="nav-link" class:active={isPrivacyPage} onclick={goToPrivacy}>
						🔐 プライバシー
					</button>
				</div>
			</div>
		</div>

		<!-- デスクトップ用１段レイアウト -->
		<div class="nav-content desktop-layout">
			<button class="nav-brand" onclick={goToHome}>
				<span class="nav-icon">🔍</span>
				<div class="brand-text">
					<span class="brand-title">事実確認チェックシート</span>
					<span class="brand-subtitle">情報の信頼性を科学的評価</span>
				</div>
			</button>

			<!-- デスクトップメニュー -->
			<div class="nav-menu desktop-menu">
				<button class="nav-link" class:active={isHomePage} onclick={goToHome}> 🏠 ホーム </button>
				<button class="nav-link" class:active={isAboutPage} onclick={goToAbout}>
					📖 アプリについて
				</button>
				<button class="nav-link" class:active={isHelpPage} onclick={goToHelp}>
					❓ ヘルプ・使い方
				</button>
				<button class="nav-link" class:active={isPrivacyPage} onclick={goToPrivacy}>
					🔐 プライバシー
				</button>
			</div>

			<!-- モバイルメニューボタン -->
			<button class="mobile-menu-toggle" onclick={toggleMenu} aria-label="メニューを開閉">
				<span class="hamburger-line"></span>
				<span class="hamburger-line"></span>
				<span class="hamburger-line"></span>
			</button>
		</div>

		<!-- モバイルメニュー -->
		{#if isMenuOpen}
			<div class="mobile-menu">
				<button class="mobile-nav-link" class:active={isHomePage} onclick={goToHome}>
					🏠 ホーム
				</button>
				<button class="mobile-nav-link" class:active={isAboutPage} onclick={goToAbout}>
					📖 アプリについて
				</button>
				<button class="mobile-nav-link" class:active={isHelpPage} onclick={goToHelp}>
					❓ ヘルプ・使い方
				</button>
				<button class="mobile-nav-link" class:active={isPrivacyPage} onclick={goToPrivacy}>
					🔐 プライバシー
				</button>
			</div>
		{/if}
	</nav>

	<main>
		{@render children()}
	</main>
</div>

<style>
	/* Global styles are now imported from app.css with design tokens */

	/* Layout-specific overrides if needed */

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		width: 100%;
	}

	/* グローバルナビゲーションスタイル - Modern Design */
	.global-nav {
		background: rgba(227, 242, 253, 0.85);
		border-bottom: 1px solid rgba(227, 242, 253, 0.3);
		box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: var(--z-index-modal);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.nav-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: var(--spacing-4) var(--spacing-6);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--spacing-2);
		border-radius: var(--radius-lg);
		transition: all var(--transition-base) var(--ease-out);
		position: relative;
		overflow: hidden;
	}

	.nav-brand::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--gradient-primary);
		opacity: 0;
		transition: opacity var(--transition-base) var(--ease-out);
		border-radius: var(--radius-lg);
	}

	.nav-brand:hover::before {
		opacity: 0.1;
	}

	.nav-brand:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.nav-icon {
		font-size: 2em;
		position: relative;
		z-index: 1;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		z-index: 1;
	}

	.brand-title {
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-lg);
		color: var(--text-color);
		line-height: var(--line-height-tight);
	}

	.brand-subtitle {
		font-size: var(--font-size-xs);
		color: var(--text-color-secondary);
		line-height: var(--line-height-tight);
		font-weight: var(--font-weight-medium);
	}

	.desktop-menu {
		display: flex;
		gap: var(--spacing-2);
	}

	.nav-link {
		background: var(--surface-color);
		border: 2px solid transparent;
		padding: var(--spacing-3) var(--spacing-4);
		border-radius: var(--radius-lg);
		color: var(--text-color);
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-sm);
		cursor: pointer;
		transition: all var(--transition-base) var(--ease-out);
		white-space: nowrap;
		position: relative;
		overflow: hidden;
	}

	.nav-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--gradient-primary);
		opacity: 0;
		transition: opacity var(--transition-base) var(--ease-out);
	}

	.nav-link:hover::before {
		opacity: 1;
	}

	.nav-link:hover {
		color: white;
		transform: translateY(-2px);
		box-shadow: var(--shadow-primary);
	}

	.nav-link.active {
		background: var(--gradient-primary);
		color: white;
		box-shadow: var(--shadow-primary);
	}

	.nav-link.active::before {
		opacity: 0;
	}

	.mobile-menu-toggle {
		display: none;
		flex-direction: column;
		gap: var(--spacing-1);
		background: var(--surface-color);
		border: 2px solid var(--border-color);
		border-radius: var(--radius-lg);
		padding: var(--spacing-3);
		cursor: pointer;
		transition: all var(--transition-base) var(--ease-out);
	}

	.mobile-menu-toggle:hover {
		background: var(--surface-elevated);
		border-color: var(--primary-color);
		transform: translateY(-1px);
	}

	.hamburger-line {
		width: 24px;
		height: 3px;
		background: var(--text-color);
		border-radius: var(--radius-sm);
		transition: all var(--transition-fast) var(--ease-out);
	}

	.mobile-menu {
		background: var(--surface-elevated);
		border-top: 1px solid var(--border-color);
		padding: var(--spacing-6);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
		backdrop-filter: blur(var(--blur-md));
		-webkit-backdrop-filter: blur(var(--blur-md));
	}

	.mobile-nav-link {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-4);
		background: var(--surface-color);
		border: 2px solid transparent;
		border-radius: var(--radius-lg);
		color: var(--text-color);
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-base);
		cursor: pointer;
		transition: all var(--transition-base) var(--ease-out);
		text-align: left;
		position: relative;
		overflow: hidden;
	}

	.mobile-nav-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--gradient-primary);
		opacity: 0;
		transition: opacity var(--transition-base) var(--ease-out);
	}

	.mobile-nav-link:hover::before {
		opacity: 1;
	}

	.mobile-nav-link:hover {
		color: white;
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.mobile-nav-link.active {
		background: var(--gradient-primary);
		color: white;
		box-shadow: var(--shadow-primary);
	}

	.mobile-nav-link.active::before {
		opacity: 0;
	}

	/* ダークモード対応は CSS変数で自動対応 */

	/* タブレット・デスクトップレイアウト制御 */
	.tablet-layout {
		display: none;
	}

	.desktop-layout {
		display: flex;
	}

	/* タブレット用２段レイアウト */
	.tablet-layout .nav-top {
		display: flex;
		justify-content: center;
		padding: var(--spacing-2) 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.tablet-layout .nav-bottom {
		display: flex;
		justify-content: center;
		padding: var(--spacing-2) 0;
	}

	.tablet-layout .nav-brand {
		padding: var(--spacing-2) var(--spacing-4);
	}

	.tablet-layout .brand-title {
		font-size: var(--font-size-base);
	}

	.tablet-layout .brand-subtitle {
		font-size: var(--font-size-xs);
	}

	.tablet-layout .nav-icon {
		font-size: 1.5em;
	}

	/* タブレット範囲でレイアウト切り替え */
	@media (min-width: 769px) and (max-width: 1064px) {
		.tablet-layout {
			display: block;
		}

		.desktop-layout {
			display: none;
		}
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.desktop-menu {
			display: none;
		}

		.mobile-menu-toggle {
			display: flex;
		}

		.nav-content {
			padding: var(--spacing-3) var(--spacing-4);
		}

		.brand-title {
			font-size: var(--font-size-base);
		}

		.brand-subtitle {
			font-size: var(--font-size-xs);
		}

		.nav-icon {
			font-size: 1.5em;
		}

		.tablet-layout {
			display: none;
		}
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.nav-brand,
		.nav-link,
		.mobile-nav-link,
		.hamburger-line,
		.nav-brand::before,
		.nav-link::before,
		.mobile-nav-link::before {
			transition: none !important;
		}
	}

	/* フォーカス時の視認性向上 */
	.nav-brand:focus,
	.nav-link:focus,
	.mobile-nav-link:focus,
	.mobile-menu-toggle:focus {
		outline: 3px solid var(--primary-color);
		outline-offset: 3px;
		border-radius: var(--radius-sm);
	}
</style>
