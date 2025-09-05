<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { goto, replaceState } from '$app/navigation';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import {
    refactoredChecklistStore,
    saveToSessionStorage
  } from '$lib/stores/refactoredChecklistStore.svelte.js';
  import { getCategories } from '$lib/data/checklist-items.js';
  import type { JudgmentType } from '$lib/types/checklist.js';
  import { t, i18nStore } from '$lib/i18n/index.js';
  import type { PageData } from './$types';

  // Svelte5の新しいprops構文
  const { data: _data } = $props<{ data: PageData }>();

  // リアクティブな状態
  let isI18nReady = $state(false);
  let i18nError = $state<string | null>(null);

  import CheckSection from '$lib/components/CheckSection.svelte';
  import ScoreDisplay from '$lib/components/ScoreDisplay.svelte';
  import HistorySidebar from '$lib/components/HistorySidebar.svelte';
  import ExportModal from '$lib/components/ExportModal.svelte';

  // State
  let title = $state('');
  let description = $state('');
  let notes = $state('');
  let currentJudgment = $state<JudgmentType>(null);
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
    // i18nの初期化状態を確認（+layout.svelteで既に初期化済み）
    try {
      // console.log('🌍 Checking i18n initialization state...');

      // i18nの初期化完了を監視
      let attempts = 0;
      const maxAttempts = 50; // 5秒間

      while (attempts < maxAttempts) {
        if (i18nStore.initialized && i18nStore.translations) {
          // console.log('✅ i18n is ready');
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
      console.error('❌ i18n not ready:', error);
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
      // セッションから復元または新規作成
      // console.log('Creating or restoring from session...');
      startOrRestoreSession();
    }

    // デフォルトで全てのセクションを開いた状態にする
    // （必要に応じて、特定のセクションだけを折りたたむ場合は以下のようにできます）
    // categories.forEach((category, index) => {
    //   collapsedSections[category.id] = false; // 全て開く
    // });

    // 最終的にローディング完了
    // ローディング状態は既にisI18nReadyで管理
  });

  async function startOrRestoreSession() {
    // console.log('startOrRestoreSession called');
    const sessionId = await refactoredChecklistStore.createOrRestoreSession();
    // console.log('Created/restored session with id:', sessionId);
    // console.log('[snapshot] currentChecklist after create/restore:', $state.snapshot(currentChecklist));

    // セッションIDの場合はURLに追加しない（Issue #129の要件）
    if (sessionId !== 'session-temp') {
      // SvelteKitルーターの初期化を待つ
      await tick();

      // URLを更新（履歴に追加せず）
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('id', sessionId);
        replaceState(url.pathname + url.search, {});
        // console.log('URL updated to:', url.toString());
      } catch (error) {
        console.warn('Failed to update URL:', error);
        // フォールバック: 通常のhistory API
        const url = new URL(window.location.href);
        url.searchParams.set('id', sessionId);
        history.replaceState(null, '', url.toString());
      }
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

  // 編集内容を自動的にセッションに保存
  $effect(() => {
    if (currentChecklist && currentChecklist.id === 'session-temp' && browser) {
      // セッションデータを定期的に保存
      const saveToSession = () => {
        if (currentChecklist) {
          saveToSessionStorage(currentChecklist);
        }
      };

      // 初回保存
      saveToSession();

      // デバウンスタイマー（頻繁な保存を避ける）
      const saveTimer: number = 0;

      // 変更を監視
      return () => {
        clearTimeout(saveTimer);
      };
    }
    return;
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
    text-align: left;
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
      padding: 0;
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

    .action-buttons {
      padding: var(--spacing-4);
    }
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    .quick-start::before,
    .action-buttons::before {
      transition: none !important;
    }
  }
</style>
