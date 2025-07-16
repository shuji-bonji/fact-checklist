<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { goto, replaceState } from '$app/navigation';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import { refactoredChecklistStore } from '$lib/stores/refactoredChecklistStore.svelte.js';
  import { getCategories } from '$lib/data/checklist-items.js';
  import type { JudgmentType } from '$lib/types/checklist.js';
  import { t, i18nStore, initializeI18n, setLanguage } from '$lib/i18n/index.js';
  import type { PageData } from './$types';

  // Svelte5の新しいprops構文
  const { data: _data } = $props<{ data: PageData }>();

  // リアクティブな状態
  let _isLoading = $state(true);
  let isI18nReady = $state(false);
  let i18nError = $state<string | null>(null);

  // i18n初期化状態を監視
  const _i18nInitialized = $derived(i18nStore.initialized && !!i18nStore.translations);

  import CheckSection from '$lib/components/CheckSection.svelte';
  import ScoreDisplay from '$lib/components/ScoreDisplay.svelte';
  import HistorySidebar from '$lib/components/HistorySidebar.svelte';
  import ExportModal from '$lib/components/ExportModal.svelte';

  // State
  let title = $state('');
  let description = $state('');
  let notes = $state('');
  let currentJudgment = $state<JudgmentType>(null);
  let showGuideMode = $state(false);
  let showExportModal = $state(false);
  const collapsedSections = $state<Record<string, boolean>>({});

  // Derived state
  const categories = $derived(getCategories());
  const currentChecklist = $derived(refactoredChecklistStore.currentChecklist);
  const score = $derived(refactoredChecklistStore.score);
  const confidenceLevel = $derived(refactoredChecklistStore.confidenceLevel);
  const confidenceText = $derived(refactoredChecklistStore.confidenceText);
  const judgmentAdvice = $derived(refactoredChecklistStore.judgmentAdvice);

  onMount(async () => {
    // i18nの初期化を確実に行う
    try {
      // console.log('🌍 Starting i18n initialization...');

      // i18nシステムの初期化
      await initializeI18n();

      // デフォルト言語（日本語）を設定
      await setLanguage('ja');

      // i18nの初期化完了を監視
      let attempts = 0;
      const maxAttempts = 50; // 5秒間

      while (attempts < maxAttempts) {
        if (i18nStore.initialized && i18nStore.translations) {
          // console.log('✅ i18n initialization complete');
          isI18nReady = true;
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if (!isI18nReady) {
        throw new Error('i18n initialization timeout');
      }
    } catch (error) {
      console.error('❌ Failed to initialize i18n:', error);
      i18nError = error instanceof Error ? error.message : 'i18n initialization failed';
      isI18nReady = false;
    }

    // ローディング画面を確実に非表示にする（ブラウザ環境でのみ）
    if (browser) {
      document.body.classList.add('app-loaded');
      const loadingElement = document.querySelector('.app-loading') as HTMLElement;
      if (loadingElement) {
        loadingElement.style.display = 'none';
        // console.log('Loading screen hidden from main page');
      }
    }

    // URLパラメータから既存のチェックリストIDを確認
    const checklistId = $page.url.searchParams.get('id');
    // console.log('checklistId from URL:', checklistId);

    if (checklistId) {
      // 既存のチェックリストを読み込み（非同期）
      // console.log('Loading existing checklist...');
      refactoredChecklistStore.loadChecklist(checklistId).then(loaded => {
        // console.log('loadChecklist result:', loaded);
        // console.log('[snapshot] currentChecklist after load:', $state.snapshot(currentChecklist));
        if (loaded && currentChecklist) {
          title = currentChecklist.title;
          description = currentChecklist.description;
          notes = currentChecklist.notes;
          currentJudgment = currentChecklist.judgment;
          // console.log('Loaded checklist data successfully');
        }
      });
    } else {
      // 新しいチェックリストを作成
      // console.log('Creating new checklist...');
      startNewChecklist();
    }

    // デフォルトで「クリティカル評価」以外を折りたたみ
    categories.forEach((category, index) => {
      if (index > 0) {
        collapsedSections[category.id] = true;
      }
    });

    // 最終的にローディング完了
    _isLoading = false;
  });

  async function startNewChecklist() {
    // console.log('startNewChecklist called');
    const id = await refactoredChecklistStore.createNewChecklist();
    // console.log('Created new checklist with id:', id);
    // console.log('[snapshot] currentChecklist after create:', $state.snapshot(currentChecklist));

    // SvelteKitルーターの初期化を待つ
    await tick();

    // URLを更新（履歴に追加せず）
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('id', id);
      replaceState(url.pathname + url.search, {});
      // console.log('URL updated to:', url.toString());
    } catch (error) {
      console.warn('Failed to update URL:', error);
      // フォールバック: 通常のhistory API
      const url = new URL(window.location.href);
      url.searchParams.set('id', id);
      history.replaceState(null, '', url.toString());
    }
  }

  async function handleCheckItem(itemId: string, checked: boolean) {
    await refactoredChecklistStore.updateCheckItem(itemId, checked);
  }

  async function handleTitleChange() {
    await refactoredChecklistStore.updateTitle(title);
  }

  async function handleDescriptionChange() {
    await refactoredChecklistStore.updateDescription(description);
  }

  async function handleNotesChange() {
    await refactoredChecklistStore.updateNotes(notes);
  }

  async function handleJudgmentChange(judgment: JudgmentType) {
    currentJudgment = judgment;
    await refactoredChecklistStore.setJudgment(judgment);
  }

  function toggleSection(categoryId: string) {
    collapsedSections[categoryId] = !collapsedSections[categoryId];
  }

  function toggleGuideMode() {
    showGuideMode = !showGuideMode;
  }

  async function completeChecklist() {
    // console.log('completeChecklist called');
    // console.log('[snapshot] currentChecklist:', $state.snapshot(currentChecklist));

    if (!currentChecklist) {
      console.error('currentChecklist is null or undefined');
      return;
    }

    // console.log('About to call refactoredChecklistStore.completeChecklist()');

    try {
      const success = await refactoredChecklistStore.completeChecklist();
      // console.log('completeChecklist result:', success);

      if (success) {
        // console.log('Redirecting to:', `${base}/checklist/${currentChecklist.id}?completed=true`);
        // 完了ページにリダイレクト
        goto(`${base}/checklist/${currentChecklist.id}?completed=true`);
      } else {
        console.error('completeChecklist returned false');
      }
    } catch (error) {
      console.error('Error in completeChecklist:', error);
    }
  }

  function exportChecklist() {
    showExportModal = true;
  }

  // 信頼度に基づく判定の自動提案
  $effect(() => {
    if (confidenceLevel >= 80 && currentJudgment !== 'accept') {
      // 高信頼度の場合は採用を提案（ただし自動設定はしない）
    }
  });
</script>

<!-- Meta tags are now handled by server-side layout only to prevent duplicates -->

{#if !isI18nReady}
  <div class="loading-container">
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p class="loading-text">
        {#if i18nError}
          エラーが発生しました: {i18nError}
        {:else}
          読み込み中...
        {/if}
      </p>
    </div>
  </div>
{:else}
  <div class="container">
    <!-- ページヘッダー -->
    <header class="page-header">
      <h1>🔍 {t('app.title')}</h1>
      <p class="page-subtitle">{t('app.subtitle')}</p>
    </header>

    <!-- メインコンテンツ -->
    <div class="main-content">
      <!-- 評価エリア -->
      <div class="evaluation-area">
        <!-- チェックリスト情報入力 -->
        <div class="card">
          <h2>📋 {t('checklist.title')}</h2>
          <div class="form-group">
            <label for="title" class="form-label">{t('forms.titleLabel')}</label>
            <input
              id="title"
              type="text"
              class="form-input"
              bind:value={title}
              oninput={handleTitleChange}
              placeholder={t('forms.titlePlaceholder')}
            />
          </div>

          <div class="form-group mb-0">
            <label for="description" class="form-label">{t('forms.descriptionLabel')}</label>
            <textarea
              id="description"
              class="form-input form-textarea"
              bind:value={description}
              oninput={handleDescriptionChange}
              placeholder={t('forms.descriptionPlaceholder')}
            ></textarea>
          </div>
        </div>

        <!-- クイックスタートガイド -->
        <div class="quick-start card">
          <p>{t('ui.quickStartGuide')}</p>
        </div>

        <!-- チェックセクション -->
        {#each categories as category (category.id)}
          <CheckSection
            {category}
            items={currentChecklist?.items.filter(item => item.category.id === category.id) || []}
            collapsed={collapsedSections[category.id] || false}
            {showGuideMode}
            onToggle={() => toggleSection(category.id)}
            onCheckItem={handleCheckItem}
          />
        {/each}

        <!-- 評価メモ -->
        <div class="notes-area card">
          <h3>📝 {t('forms.notesLabel')}</h3>
          <textarea
            class="form-input form-textarea"
            bind:value={notes}
            oninput={handleNotesChange}
            placeholder={t('forms.notesPlaceholder')}
          ></textarea>
        </div>
      </div>

      <!-- サイドバー -->
      <div class="sidebar">
        <!-- ガイドモード切り替えボタン -->
        <div class="guide-toggle-section card">
          <button type="button" class="btn btn-secondary w-full" onclick={() => toggleGuideMode()}>
            {showGuideMode ? t('ui.guideModeNormal') : t('ui.guideModeDetailed')}
          </button>
        </div>

        <!-- スコア表示 -->
        <ScoreDisplay
          {score}
          {confidenceLevel}
          {confidenceText}
          {judgmentAdvice}
          {currentJudgment}
          onJudgmentChange={handleJudgmentChange}
        />

        <!-- アクションボタン -->
        <div class="action-buttons card">
          <button
            type="button"
            class="btn btn-primary w-full mb-2 btn-complete"
            onclick={completeChecklist}
            disabled={!currentChecklist}
          >
            {t('ui.completeEvaluation')}
          </button>

          <button
            type="button"
            class="btn btn-ghost w-full"
            onclick={exportChecklist}
            disabled={!currentChecklist}
          >
            📄 {t('common.export')}
          </button>
        </div>

        <!-- 履歴サイドバー -->
        <HistorySidebar />
      </div>
    </div>

    <!-- エクスポートモーダル -->
    {#if showExportModal}
      <ExportModal checklist={currentChecklist} onClose={() => (showExportModal = false)} />
    {/if}
  </div>
{/if}

<style>
  /* ローディング画面 */
  .loading-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-color);
  }

  .loading-content {
    text-align: center;
    padding: var(--spacing-8);
    background: var(--surface-color);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
  }

  .loading-spinner {
    width: 48px;
    height: 48px;
    border: 3px solid var(--color-primary-200);
    border-top: 3px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-text {
    color: var(--text-color);
    font-size: var(--font-size-lg);
    margin: 0;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-6);
  }

  /* ページヘッダー - モダンデザイン */
  .page-header {
    text-align: center;
    margin-bottom: var(--spacing-8);
    padding: var(--spacing-8);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-2xl);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .page-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.03;
    pointer-events: none;
  }

  .page-header h1 {
    color: var(--text-color);
    margin: 0 0 var(--spacing-4) 0;
    font-family: var(--font-family-heading);
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-light);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  .page-subtitle {
    color: var(--text-color-secondary);
    margin: 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
  }

  /* 2カラムレイアウト - CSS Grid */
  .main-content {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: var(--spacing-8);
    align-items: start;
  }

  .evaluation-area {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  /* サイドバー - モダンデザイン */
  .sidebar {
    position: sticky;
    top: var(--spacing-6);
    max-height: calc(100vh - var(--spacing-12));
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    /* スクロールバーを非表示にする */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .sidebar::-webkit-scrollbar {
    display: none; /* WebKit browsers (Chrome, Safari, etc.) */
  }

  /* ガイドボタンセクション */
  .guide-toggle-section {
    text-align: center;
    padding: var(--spacing-4);
    background: var(--surface-elevated);
    border-radius: var(--radius-xl);
    border: 2px solid var(--border-color);
    box-shadow: var(--shadow-sm);
  }

  /* クイックスタートガイド */
  .quick-start {
    background: var(--gradient-accent);
    color: white;
    text-align: center;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-accent);
    position: relative;
    overflow: hidden;
  }

  .quick-start::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }

  .quick-start p {
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    position: relative;
    z-index: 1;
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-relaxed);
  }

  /* 評価メモエリア */
  .notes-area h3 {
    margin-bottom: var(--spacing-4);
    color: var(--text-color);
    font-family: var(--font-family-heading);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
  }

  /* アクションボタン */
  .action-buttons {
    text-align: center;
    background: var(--surface-elevated);
    border-radius: var(--radius-xl);
    border: 2px solid var(--border-color);
    padding: var(--spacing-6);
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: visible;
    z-index: 1;
  }

  .action-buttons::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-mesh);
    opacity: 0.02;
    pointer-events: none;
  }

  .w-full {
    width: 100%;
  }

  .mb-2 {
    margin-bottom: var(--spacing-4);
  }

  /* 評価完了ボタンの強調スタイル */
  .action-buttons .btn-complete {
    position: relative;
    z-index: 2;
    background: var(--gradient-success);
    color: white;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    padding: var(--spacing-4) var(--spacing-6);
    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
    border: 2px solid var(--color-success-400);
  }

  .action-buttons .btn-complete:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(76, 175, 80, 0.5);
    background: linear-gradient(135deg, var(--color-success-500) 0%, var(--color-success-700) 100%);
  }

  .action-buttons .btn-complete:disabled {
    opacity: 0.6;
    transform: none;
    box-shadow: var(--shadow-sm);
  }

  /* レスポンシブ対応 */
  @media (max-width: 1200px) {
    .main-content {
      grid-template-columns: 1fr 350px;
      gap: var(--spacing-6);
    }
  }

  @media (max-width: 1024px) {
    .main-content {
      grid-template-columns: 1fr;
      gap: var(--spacing-6);
    }

    .sidebar {
      position: static;
      max-height: none;
      overflow-y: visible;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: var(--spacing-4);
    }

    .page-header {
      padding: var(--spacing-6);
      margin-bottom: var(--spacing-6);
    }

    .page-header h1 {
      font-size: var(--font-size-4xl);
    }

    .page-subtitle {
      font-size: var(--font-size-base);
    }

    .main-content {
      gap: var(--spacing-4);
    }

    .evaluation-area {
      gap: var(--spacing-4);
    }

    .sidebar {
      gap: var(--spacing-3);
    }

    .guide-toggle-section,
    .action-buttons {
      padding: var(--spacing-4);
    }
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    .page-header::before,
    .quick-start::before,
    .action-buttons::before {
      transition: none !important;
    }
  }
</style>
