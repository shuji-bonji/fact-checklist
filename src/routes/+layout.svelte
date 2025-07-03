<script lang="ts">
  import '../app.css';

  // PWA設定
  import { onMount } from 'svelte';
  import { dev, browser } from '$app/environment';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  // i18n
  import { initializeI18n, t, i18nStore } from '$lib/i18n/index.js';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

  // PWA
  import { registerPWA, setupPWAInstallPrompt } from '$lib/utils/pwa-register.js';

  // i18n初期化状態を監視
  const isI18nReady = $derived(i18nStore.initialized && !!i18nStore.translations);

  interface Props {
    children: import('svelte').Snippet;
    data?: {
      meta?: {
        title: string;
        description: string;
        keywords: string;
        ogTitle: string;
        ogDescription: string;
        ogImage: string;
        ogUrl: string;
        language: string;
        siteName: string;
        type: string;
        locale: string;
      };
      detectedLanguage?: string;
    };
  }

  const { children, data }: Props = $props();

  // ナビゲーションメニューの状態
  let isMenuOpen = $state(false);

  // 現在のページを判定
  const currentPath = $derived($page.url.pathname);
  const isHomePage = $derived(currentPath === '/' || currentPath === base);
  const isAboutPage = $derived(currentPath.includes('/about'));
  const isHelpPage = $derived(currentPath.includes('/help'));
  const isPrivacyPage = $derived(currentPath.includes('/privacy'));
  const isIntroPage = $derived(currentPath.includes('/intro'));

  // デバッグ用
  $effect(() => {
    console.log('Navigation debug:', {
      currentPath,
      isHelpPage,
      isAboutPage,
      isPrivacyPage,
      isHomePage,
      timestamp: new Date().toISOString()
    });

    // DOM要素のクラス確認
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const navButtons = document.querySelectorAll('.desktop-menu .nav-link');
        navButtons.forEach((button, index) => {
          console.log(`Nav button ${index + 1} classes:`, button.className);
        });
      }, 100);
    }
  });

  onMount(() => {
    // 非同期初期化処理
    (async () => {
      // i18n初期化
      try {
        await initializeI18n();
        console.log('✅ i18n initialized in layout');
      } catch (error) {
        console.error('❌ Failed to initialize i18n:', error);
      }

      // ローディング画面を確実に非表示にする（ブラウザ環境でのみ）
      if (browser) {
        document.body.classList.add('app-loaded');
        const loadingElement = document.querySelector('.app-loading') as HTMLElement;
        if (loadingElement) {
          loadingElement.style.display = 'none';
          console.log('Loading screen hidden from layout');
        }
      }

      // PWA Service Worker登録（Safari対応強化版）
      if (!dev && browser) {
        try {
          const pwaInfo = await registerPWA();
          console.log('PWA registration:', pwaInfo);

          // PWAインストール促進設定
          setupPWAInstallPrompt();
        } catch (error) {
          console.error('PWA registration failed:', error);
        }
      }
    })();

    // リサイズイベントでハンバーガーメニューを自動的に閉じる
    const handleResize = () => {
      if (isMenuOpen && window.innerWidth >= 1024) {
        isMenuOpen = false;
      }
    };
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数を返す
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
  {#if data?.meta}
    <!-- サーバーサイドで決定されたメタタグのみ出力（重複回避） -->
    <title>{data.meta.title}</title>
    <meta name="description" content={data.meta.description} />
    <meta name="keywords" content={data.meta.keywords} />

    <!-- OGP -->
    <meta property="og:title" content={data.meta.ogTitle} />
    <meta property="og:description" content={data.meta.ogDescription} />
    <meta property="og:url" content={data.meta.ogUrl} />
    <meta property="og:image" content={data.meta.ogImage} />
    <meta property="og:type" content={data.meta.type} />
    <meta property="og:site_name" content={data.meta.siteName} />
    <meta property="og:locale" content={data.meta.locale} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={data.meta.ogTitle} />
    <meta name="twitter:description" content={data.meta.ogDescription} />
    <meta name="twitter:image" content={data.meta.ogImage} />
  {:else}
    <!-- Fallback meta tags for prerendering -->
    <title>Fact Checklist - 実用的事実確認チェックシート</title>
    <meta
      name="description"
      content="20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。"
    />
    <meta
      name="keywords"
      content="事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策"
    />

    <!-- OGP fallback -->
    <meta property="og:title" content="Fact Checklist - 実用的事実確認チェックシート" />
    <meta
      property="og:description"
      content="20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。"
    />
    <meta property="og:url" content="https://shuji-bonji.github.io/fact-checklist" />
    <meta property="og:image" content="https://shuji-bonji.github.io/fact-checklist/og-image.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="実用的事実確認チェックシート" />
    <meta property="og:locale" content="ja_JP" />

    <!-- Twitter Card fallback -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Fact Checklist - 実用的事実確認チェックシート" />
    <meta
      name="twitter:description"
      content="20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。"
    />
    <meta
      name="twitter:image"
      content="https://shuji-bonji.github.io/fact-checklist/og-image.png"
    />
  {/if}

  <!-- PWA用メタタグ -->
  <meta name="theme-color" content="#2c3e50" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta
    name="apple-mobile-web-app-title"
    content={isI18nReady ? t('app.title') : 'Fact Checklist'}
  />

  <!-- アイコン -->
  <link rel="icon" href="{base}/favicon.png" />
  <link rel="apple-touch-icon" href="{base}/apple-touch-icon.png" />
  <!-- Vite PWAが自動でmanifestリンクを挿入するため、手動linkは削除 -->
</svelte:head>

<svelte:window onclick={handleClickOutside} />

<div class="app">
  <!-- グローバルナビゲーション（introページでは非表示） -->
  {#if !isIntroPage}
    <nav class="global-nav">
      {#if isI18nReady}
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
              <button class="nav-link" class:active={isHomePage} onclick={goToHome}>
                🏠 {t('navigation.home')}
              </button>
              <button class="nav-link" class:active={isAboutPage} onclick={goToAbout}>
                📖 {t('navigation.about')}
              </button>
              <button class="nav-link" class:active={isHelpPage} onclick={goToHelp}>
                ❓ {t('navigation.help')}
              </button>
              <button class="nav-link" class:active={isPrivacyPage} onclick={goToPrivacy}>
                🔐 {t('navigation.privacy')}
              </button>
              <!-- タブレット用言語切り替え -->
              <div class="tablet-language-switcher">
                <LanguageSwitcher />
              </div>
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
            <button class="nav-link" class:active={isHomePage} onclick={goToHome}>
              🏠 {t('navigation.home')}
            </button>
            <button class="nav-link" class:active={isAboutPage} onclick={goToAbout}>
              📖 {t('navigation.about')}
            </button>
            <button class="nav-link" class:active={isHelpPage} onclick={goToHelp}>
              ❓ {t('navigation.help')}
            </button>
            <button class="nav-link" class:active={isPrivacyPage} onclick={goToPrivacy}>
              🔐 {t('navigation.privacy')}
            </button>
          </div>

          <!-- モバイルメニューボタン -->
          <button
            class="mobile-menu-toggle"
            onclick={toggleMenu}
            aria-label={t('accessibility.openMenu')}
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          <!-- デスクトップ用言語切り替え -->
          <div class="desktop-language-switcher">
            <LanguageSwitcher />
          </div>
        </div>

        <!-- モバイルメニュー -->
        {#if isMenuOpen}
          <div class="mobile-menu">
            <button class="mobile-nav-link" class:active={isHomePage} onclick={goToHome}>
              🏠 {t('navigation.home')}
            </button>
            <button class="mobile-nav-link" class:active={isAboutPage} onclick={goToAbout}>
              📖 {t('navigation.about')}
            </button>
            <button class="mobile-nav-link" class:active={isHelpPage} onclick={goToHelp}>
              ❓ {t('navigation.help')}
            </button>
            <button class="mobile-nav-link" class:active={isPrivacyPage} onclick={goToPrivacy}>
              🔐 {t('navigation.privacy')}
            </button>
            <!-- モバイル用言語切り替え -->
            <div class="mobile-language-switcher">
              <LanguageSwitcher mobileMode={true} />
            </div>
          </div>
        {/if}
      {:else}
        <!-- Loading state for navigation -->
        <div class="nav-content desktop-layout">
          <div class="nav-brand-loading">
            <span class="nav-icon">🔍</span>
            <div class="brand-text">
              <span class="brand-title">事実確認チェックシート</span>
              <span class="brand-subtitle">情報の信頼性を科学的評価</span>
            </div>
          </div>
          <div class="nav-loading">Loading...</div>
        </div>
      {/if}
    </nav>
  {/if}

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

  /* Loading states */
  .nav-brand-loading {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-2);
    opacity: 0.6;
  }

  .nav-loading {
    padding: var(--spacing-3) var(--spacing-4);
    color: var(--text-color-secondary);
    font-size: var(--font-size-sm);
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
    background: var(--gradient-primary) !important;
    color: white !important;
    box-shadow: var(--shadow-primary) !important;
    transform: none !important;
  }

  .nav-link.active::before {
    opacity: 0 !important;
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

  /* 言語切り替えスタイル */
  .mobile-language-switcher {
    padding: var(--spacing-4) 0;
    border-top: 1px solid var(--border-color);
    margin-top: var(--spacing-4);
    display: flex;
    justify-content: center;
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
    align-items: center;
    padding: var(--spacing-2) 0;
    gap: var(--spacing-4);
  }

  .tablet-layout .nav-menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
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

  /* デスクトップ用言語切り替えの表示制御 */
  .desktop-language-switcher {
    display: block;
  }

  /* タブレット用言語切り替えの表示制御 */
  .tablet-language-switcher {
    display: none;
  }

  /* タブレット範囲でレイアウト切り替え */
  @media (min-width: 769px) and (max-width: 1064px) {
    .tablet-layout {
      display: block;
    }

    .desktop-layout {
      display: none;
    }

    /* タブレット範囲では言語切り替えをタブレット用に切り替え */
    .desktop-language-switcher {
      display: none;
    }

    .tablet-language-switcher {
      display: block;
      margin-left: var(--spacing-4);
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

    /* モバイルでは言語切り替えを非表示 */
    .desktop-language-switcher {
      display: none;
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
