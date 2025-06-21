<script lang="ts">
	import '../app.css';

	// PWA設定
	import { onMount } from 'svelte';
	import { dev, browser } from '$app/environment';

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
				const registration = await navigator.serviceWorker.register('/service-worker.js');
				console.log('Service Worker registered successfully:', registration);
			} catch (error) {
				console.error('Service Worker registration failed:', error);
			}
		}
	});
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
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.json" />

	<title>実用的事実確認チェックシート</title>
</svelte:head>

<div class="app">
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
		padding: var(--spacing-xs) var(--spacing-md);
		border: none;
		border-radius: 25px;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s ease;
		user-select: none;
		white-space: nowrap;
	}

	:global(.btn:hover) {
		transform: translateY(-2px);
		box-shadow: var(--shadow-hover);
	}

	:global(.btn:active) {
		transform: translateY(0);
	}

	:global(.btn-primary) {
		background: linear-gradient(135deg, var(--primary-color), #34495e);
		color: white;
	}

	:global(.btn-secondary) {
		background: linear-gradient(135deg, var(--secondary-color), #2980b9);
		color: white;
	}

	:global(.btn-success) {
		background: linear-gradient(135deg, var(--success-color), #229954);
		color: white;
	}

	:global(.btn-warning) {
		background: linear-gradient(135deg, var(--warning-color), #e67e22);
		color: white;
	}

	:global(.btn-danger) {
		background: linear-gradient(135deg, var(--accent-color), #c0392b);
		color: white;
	}

	/* カードスタイル */
	:global(.card) {
		background: var(--bg-color);
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		padding: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
		transition: all 0.3s ease;
	}

	:global(.card:hover) {
		box-shadow: var(--shadow-hover);
	}

	/* フォームスタイル */
	:global(.form-group) {
		margin-bottom: var(--spacing-md);
	}

	:global(.form-label) {
		display: block;
		font-weight: 600;
		margin-bottom: var(--spacing-xs);
		color: var(--text-color);
	}

	:global(.form-input) {
		width: 100%;
		padding: var(--spacing-sm);
		border: 1px solid var(--border-color);
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

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		width: 100%;
	}
</style>
