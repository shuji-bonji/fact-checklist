<!-- src/routes/+layout.svelte の修正版 -->
<script lang="ts">
  import { page } from '$app/stores';
  import { i18nStore, setLanguage, type LanguageCode } from '$lib/i18n';
  import { SUPPORTED_LANGUAGES } from '$lib/i18n/types';
  import { onMount } from 'svelte';
  import '../app.css';
  import type { LayoutServerData } from './$types';

  interface Props {
    data: LayoutServerData;
  }

  const { data }: Props = $props();

  // 🔴 削除: クライアント準備フラグを使わない
  // let isClientReady = $state(false);

  // 現在の言語（SSRデータから初期化）
  let currentLanguage = $state(data?.currentLang || 'ja');

  // クライアント側の初期化（状態変更を最小限に）
  onMount(async () => {
    // i18nストアが未初期化の場合のみ初期化
    if (!i18nStore.initialized) {
      await i18nStore.initializeWithLanguage(currentLanguage);
    }

    // ストアの初期化は各ページで行う

    // URLパラメータから言語指定を確認
    const urlLang = $page.url.searchParams.get('lang');
    if (urlLang && urlLang in SUPPORTED_LANGUAGES) {
      await setLanguage(urlLang as LanguageCode);
      currentLanguage = urlLang as LanguageCode;
    }
  });

  // 言語切り替えは各ページで処理
</script>

<!-- 🔴 重要: 条件付きレンダリングを完全に削除 -->
<div class="app-layout" data-language={currentLanguage}>
  <main class="main-content">
    <!-- 常にスロットを表示（「読み込み中...」を表示しない） -->
    <slot />
  </main>
</div>

<style>
  .app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-background);
    color: var(--color-text);
  }

  .main-content {
    flex: 1;
    width: 100%;
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
    padding: var(--spacing-4) var(--spacing-2);
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .main-content {
      padding: var(--spacing-2) var(--spacing-1);
    }
  }
</style>
