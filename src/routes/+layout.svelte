<script lang="ts">
	import '../app.css';

	// PWA設定
	import { onMount } from 'svelte';
	import { dev, browser } from '$app/environment';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

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
		<div class="nav-content">
			<button class="nav-brand" onclick={goToHome}>
				<span class="nav-icon">🔍</span>
				<div class="brand-text">
					<span class="brand-title">事実確認チェックシート</span>
					<span class="brand-subtitle">情報の信頼性を科学的評価</span>
				</div>
			</button>

			<!-- デスクトップメニュー -->
			<div class="nav-menu desktop-menu">
				<button class="nav-link {isHomePage ? 'active' : ''}" onclick={goToHome}>
					🏠 ホーム
				</button>
				<button class="nav-link {isAboutPage ? 'active' : ''}" onclick={goToAbout}>
					📖 アプリについて
				</button>
				<button class="nav-link {isHelpPage ? 'active' : ''}" onclick={goToHelp}>
					❓ ヘルプ・使い方
				</button>
				<button class="nav-link {isPrivacyPage ? 'active' : ''}" onclick={goToPrivacy}>
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
				<button class="mobile-nav-link {isHomePage ? 'active' : ''}" onclick={goToHome}>
					🏠 ホーム
				</button>
				<button class="mobile-nav-link {isAboutPage ? 'active' : ''}" onclick={goToAbout}>
					📖 アプリについて
				</button>
				<button class="mobile-nav-link {isHelpPage ? 'active' : ''}" onclick={goToHelp}>
					❓ ヘルプ・使い方
				</button>
				<button class="mobile-nav-link {isPrivacyPage ? 'active' : ''}" onclick={goToPrivacy}>
					🔐 プライバシー
				</button>
			</div>
		{/if}
	</nav>

	<main>
		<slot />
	</main>
</div>

<style>
	:global(html) {
		font-family:
			'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', system-ui, sans-serif;
		line-height: 1.6;
		color-scheme: light dark;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		min-height: 100vh;
		color: var(--text-color);
		background-color: var(--bg-color);
	}

	:global(*) {
		box-sizing: border-box;
	}

	/* CSS Variables for theming */
	:global(:root) {
		--primary-color: #2c3e50;
		--secondary-color: #3498db;
		--accent-color: #e74c3c;
		--warning-color: #f39c12;
		--success-color: #27ae60;
		--bg-color: #ffffff;
		--surface-color: #f8f9fa;
		--text-color: #2c3e50;
		--text-muted: #7f8c8d;
		--border-color: #e9ecef;
		--shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		--shadow-hover: 0 5px 20px rgba(0, 0, 0, 0.15);
		--border-radius: 12px;
		--border-radius-sm: 6px;
		--spacing-xs: 0.5rem;
		--spacing-sm: 1rem;
		--spacing-md: 1.5rem;
		--spacing-lg: 2rem;
		--spacing-xl: 3rem;
	}

	/* ダークモード */
	:global(:root.dark) {
		--bg-color: #1a202c;
		--surface-color: #2d3748;
		--text-color: #f7fafc;
		--text-muted: #a0aec0;
		--border-color: #4a5568;
		--shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		--shadow-hover: 0 5px 20px rgba(0, 0, 0, 0.4);
	}

	/* レスポンシブタイポグラフィ */
	:global(h1) {
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 300;
		margin: 0 0 var(--spacing-sm) 0;
		line-height: 1.2;
	}

	:global(h2) {
		font-size: clamp(1.4rem, 3vw, 2rem);
		font-weight: 400;
		margin: 0 0 var(--spacing-sm) 0;
		line-height: 1.3;
	}

	:global(h3) {
		font-size: clamp(1.2rem, 2.5vw, 1.5rem);
		font-weight: 500;
		margin: 0 0 var(--spacing-xs) 0;
		line-height: 1.4;
	}

	:global(p) {
		margin: 0 0 var(--spacing-sm) 0;
		color: var(--text-muted);
	}

	/* ボタンスタイル */
	:global(.btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-sm) var(--spacing-md);
		border: none;
		border-radius: var(--border-radius);
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 1rem;
		min-height: 44px; /* アクセシビリティ: タッチターゲットサイズ */
	}

	:global(.btn:hover:not(:disabled)) {
		transform: translateY(-2px);
		box-shadow: var(--shadow-hover);
	}

	:global(.btn:disabled) {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}

	:global(.btn-primary) {
		background: linear-gradient(135deg, var(--primary-color), #34495e);
		color: white;
	}

	:global(.btn-secondary) {
		background: linear-gradient(135deg, var(--secondary-color), #2980b9);
		color: white;
	}

	:global(.btn-accent) {
		background: linear-gradient(135deg, var(--accent-color), #c0392b);
		color: white;
	}

	:global(.btn-success) {
		background: linear-gradient(135deg, var(--success-color), #229954);
		color: white;
	}

	:global(.btn-outline) {
		background: transparent;
		border: 2px solid var(--border-color);
		color: var(--text-color);
	}

	:global(.btn-outline:hover) {
		background: var(--surface-color);
		border-color: var(--secondary-color);
	}

	/* カードスタイル */
	:global(.card) {
		background: var(--bg-color);
		border-radius: var(--border-radius);
		padding: var(--spacing-md);
		box-shadow: var(--shadow);
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	:global(.card:hover) {
		box-shadow: var(--shadow-hover);
		transform: translateY(-2px);
	}

	/* フォームスタイル */
	:global(.form-group) {
		margin-bottom: var(--spacing-md);
	}

	:global(.form-label) {
		display: block;
		margin-bottom: var(--spacing-xs);
		font-weight: 600;
		color: var(--text-color);
	}

	:global(.form-input) {
		width: 100%;
		padding: var(--spacing-sm);
		border: 2px solid var(--border-color);
		border-radius: var(--border-radius-sm);
		font-size: 1rem;
		background: var(--bg-color);
		color: var(--text-color);
		transition: border-color 0.3s ease;
	}

	:global(.form-input:focus) {
		outline: none;
		border-color: var(--secondary-color);
		box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
	}

	:global(.form-textarea) {
		min-height: 120px;
		resize: vertical;
		font-family: inherit;
	}

	/* チェックボックススタイル */
	:global(.checkbox-wrapper) {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-sm);
		cursor: pointer;
	}

	:global(.checkbox-wrapper input[type='checkbox']) {
		width: 18px;
		height: 18px;
		cursor: pointer;
		accent-color: var(--secondary-color);
	}

	/* グリッドシステム */
	:global(.container) {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
	}

	:global(.grid) {
		display: grid;
		gap: var(--spacing-md);
	}

	:global(.grid-2) {
		grid-template-columns: 1fr 300px;
	}

	/* レスポンシブ */
	@media (max-width: 1024px) {
		:global(.grid-2) {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		:global(.container) {
			padding: 0 var(--spacing-sm);
		}
	}

	/* ユーティリティクラス */
	:global(.text-center) {
		text-align: center;
	}
	:global(.text-left) {
		text-align: left;
	}
	:global(.text-right) {
		text-align: right;
	}
	:global(.font-bold) {
		font-weight: 700;
	}
	:global(.font-medium) {
		font-weight: 500;
	}
	:global(.text-muted) {
		color: var(--text-muted);
	}
	:global(.mb-0) {
		margin-bottom: 0;
	}
	:global(.mb-1) {
		margin-bottom: var(--spacing-xs);
	}
	:global(.mb-2) {
		margin-bottom: var(--spacing-sm);
	}
	:global(.mb-3) {
		margin-bottom: var(--spacing-md);
	}
	:global(.mt-0) {
		margin-top: 0;
	}
	:global(.mt-1) {
		margin-top: var(--spacing-xs);
	}
	:global(.mt-2) {
		margin-top: var(--spacing-sm);
	}
	:global(.mt-3) {
		margin-top: var(--spacing-md);
	}

	:global(.w-full) {
		width: 100%;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		width: 100%;
	}

	/* グローバルナビゲーションスタイル */
	.global-nav {
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		border-bottom: 2px solid var(--border-color);
		border-bottom-color: var(--secondary-color);
		box-shadow: var(--shadow);
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	.nav-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: var(--spacing-sm) var(--spacing-md);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--spacing-xs);
		border-radius: var(--border-radius-sm);
		transition: all 0.3s ease;
	}

	.nav-brand:hover {
		background: rgba(52, 152, 219, 0.1);
		transform: translateY(-1px);
	}

	.nav-icon {
		font-size: 2em;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.brand-title {
		font-weight: 600;
		font-size: 1.2em;
		color: #2c3e50;
		line-height: 1.2;
	}

	.brand-subtitle {
		font-size: 0.8em;
		color: #34495e;
		line-height: 1.2;
	}

	.desktop-menu {
		display: flex;
		gap: var(--spacing-sm);
	}

	.nav-link {
		background: none;
		border: 2px solid transparent;
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: var(--border-radius-sm);
		color: #2c3e50;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 0.9em;
		white-space: nowrap;
	}

	.nav-link:hover {
		background: var(--secondary-color);
		color: white;
		border-color: var(--secondary-color);
		transform: translateY(-1px);
	}

	.nav-link.active {
		background: var(--secondary-color);
		color: white;
		border-color: var(--secondary-color);
		box-shadow: 0 2px 4px rgba(52, 152, 219, 0.3);
	}

	.mobile-menu-toggle {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		padding: var(--spacing-xs);
		cursor: pointer;
	}

	.hamburger-line {
		width: 25px;
		height: 3px;
		background: #2c3e50;
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	.mobile-menu {
		background: var(--bg-color);
		border-top: 1px solid var(--border-color);
		padding: var(--spacing-md);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.mobile-nav-link {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-sm);
		background: none;
		border: 2px solid transparent;
		border-radius: var(--border-radius-sm);
		color: var(--text-color);
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		text-align: left;
	}

	.mobile-nav-link:hover {
		background: var(--surface-color);
		border-color: var(--secondary-color);
	}

	.mobile-nav-link.active {
		background: var(--secondary-color);
		color: white;
		border-color: var(--secondary-color);
	}

	/* ダークモード対応 */
	:global(.dark) .global-nav {
		background: linear-gradient(135deg, #2d3748, #374151);
		border-bottom-color: #4a5568;
	}

	:global(.dark) .brand-title {
		color: #f7fafc;
	}

	:global(.dark) .brand-subtitle {
		color: #e2e8f0;
	}

	:global(.dark) .nav-link {
		color: #f7fafc;
	}

	:global(.dark) .nav-link:hover,
	:global(.dark) .nav-link.active {
		background: var(--secondary-color);
		color: white;
	}

	:global(.dark) .hamburger-line {
		background: #f7fafc;
	}

	:global(.dark) .mobile-menu {
		background: #2d3748;
		border-top-color: #4a5568;
	}

	:global(.dark) .mobile-nav-link {
		color: #f7fafc;
	}

	:global(.dark) .mobile-nav-link:hover {
		background: #374151;
		border-color: var(--secondary-color);
	}

	:global(.dark) .mobile-nav-link.active {
		background: var(--secondary-color);
		color: white;
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
			padding: var(--spacing-xs) var(--spacing-md);
		}

		.brand-title {
			font-size: 1em;
		}

		.brand-subtitle {
			font-size: 0.7em;
		}

		.nav-icon {
			font-size: 1.5em;
		}
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.nav-brand,
		.nav-link,
		.mobile-nav-link,
		.hamburger-line {
			transition: none;
		}
	}

	/* フォーカス時の視認性向上 */
	.nav-brand:focus,
	.nav-link:focus,
	.mobile-nav-link:focus,
	.mobile-menu-toggle:focus {
		outline: 3px solid var(--secondary-color);
		outline-offset: 2px;
	}
</style>
