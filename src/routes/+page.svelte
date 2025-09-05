<script lang="ts">
  import { onMount } from 'svelte';
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
  import { t } from '$lib/i18n/index.js';
  import type { PageData } from './$types';

  // Components
  import CheckSection from '$lib/components/CheckSection.svelte';
  import ScoreDisplay from '$lib/components/ScoreDisplay.svelte';
  import HistorySidebar from '$lib/components/HistorySidebar.svelte';
  import ExportModal from '$lib/components/ExportModal.svelte';

  // Props
  const { data: _data } = $props<{ data: PageData }>();

  // State
  let title = $state('');
  let description = $state('');
  let notes = $state('');
  // const _currentJudgment = $state<JudgmentType>(null); // 未使用
  let showExportModal = $state(false);
  const collapsedSections = $state<Record<string, boolean>>({});
  let isClientReady = $state(false);

  // Derived state
  const categories = $derived(getCategories());
  const currentChecklist = $derived(refactoredChecklistStore.currentChecklist);
  const score = $derived(refactoredChecklistStore.score);
  const confidenceLevel = $derived(refactoredChecklistStore.confidenceLevel);
  const confidenceText = $derived(refactoredChecklistStore.confidenceText);
  const judgmentAdvice = $derived(refactoredChecklistStore.judgmentAdvice);

  // SSRセーフな翻訳関数
  function safeT(key: string, fallback: string = ''): string {
    // SSR時は静的テキストまたはフォールバックを返す
    if (!browser) {
      // 静的な翻訳マップ（最小限）
      const staticTranslations: Record<string, string> = {
        'checklist.title': 'ファクトチェックシート',
        'checklist.description': '情報の信頼性を科学的・体系的に評価する20項目のチェックシート',
        'forms.titleLabel': '情報のタイトル',
        'forms.titlePlaceholder': '評価する情報のタイトルを入力',
        'forms.descriptionLabel': '概要・要約',
        'forms.descriptionPlaceholder': '評価対象の情報の概要を記入',
        'forms.notesLabel': '評価メモ・追加確認事項',
        'forms.notesPlaceholder': '評価中の気づきや追加で確認が必要な事項',
        'ui.completeEvaluation': '評価を完了',
        'ui.createChecklist': 'チェックリストを作成',
        'ui.export': 'エクスポート',
        'history.title': '履歴',
        'checklist.confidence.none': '未評価',
        'judgment.adopt': '採用（信頼できる）',
        'judgment.wait': '保留（追加確認が必要）',
        'judgment.reject': '不採用（信頼できない）'
      };
      return staticTranslations[key] || fallback || key;
    }

    // クライアント側では通常のt関数を使用
    try {
      const result = t(key as Parameters<typeof t>[0]);
      return result || fallback;
    } catch {
      return fallback || key;
    }
  }

  // クライアント側でのみ実行する処理
  onMount(async () => {
    // ストアの初期化（クライアント側のみ）
    // ストアの初期化は既に完了している

    // URLパラメータから新規作成モードをチェック
    const isNew = $page.url.searchParams.get('new');

    if (isNew === 'true') {
      // 新規作成モード
      await handleNew();
    } else {
      // 既存のセッションを復元
      const sessionId = await refactoredChecklistStore.createOrRestoreSession();
      if (sessionId) {
        restoreFromSession();
      }
    }

    // クライアント準備完了
    isClientReady = true;
  });

  // === イベントハンドラー ===
  async function handleNew() {
    if (!browser) return;

    // 新規セッションを作成
    // 新規セッションを作成
    await refactoredChecklistStore.createOrRestoreSession();
    replaceState(`${base}/`, {});

    // フォームをクリア
    title = '';
    description = '';
    notes = '';
  }

  async function handleComplete(judgment: JudgmentType) {
    if (!browser || !currentChecklist) return;

    // タイトルが未入力の場合はデフォルトを設定
    if (!currentChecklist.title || currentChecklist.title.trim() === '') {
      await refactoredChecklistStore.updateTitle(
        safeT('checklist.defaultTitle', '無題のチェックリスト')
      );
    }

    // 判定を設定してから完了処理
    await refactoredChecklistStore.setJudgment(judgment);
    await refactoredChecklistStore.completeChecklist();
    const completed = refactoredChecklistStore.currentChecklist;

    if (completed) {
      await goto(`${base}/checklist/${completed.id}`);
    }
  }

  // Removed unused function - using inline handler in CheckSection component instead

  function restoreFromSession() {
    if (!browser) return;

    const checklist = refactoredChecklistStore.currentChecklist;
    if (checklist) {
      title = checklist.title || '';
      description = checklist.description || '';
      notes = checklist.notes || '';
    }
  }

  function handleExport() {
    if (browser) {
      showExportModal = true;
    }
  }

  function toggleSection(categoryId: string) {
    collapsedSections[categoryId] = !collapsedSections[categoryId];
  }

  // タイトルの更新
  async function updateTitle(value: string) {
    title = value;
    if (browser && currentChecklist) {
      await refactoredChecklistStore.updateTitle(value);
    }
  }

  // 説明の更新
  async function updateDescription(value: string) {
    description = value;
    if (browser && currentChecklist) {
      await refactoredChecklistStore.updateDescription(value);
    }
  }

  // メモの更新
  async function updateNotes(value: string) {
    notes = value;
    if (browser && currentChecklist) {
      await refactoredChecklistStore.updateNotes(value);
    }
  }

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

<!-- SSRセーフなコンテンツ表示 - 条件付きレンダリングを削除 -->
<div class="container">
  <!-- メインコンテンツ -->
  <div class="main-content">
    <!-- ヘッダーセクション - 常に表示 -->
    <div class="quick-start" id="quick-start">
      <h1 class="visually-hidden">{safeT('checklist.title', 'ファクトチェックシート')}</h1>
      <p
        style="text-align: left; font-size: 0.9em; color: var(--color-text-secondary); margin-bottom: 2rem;"
      >
        {safeT(
          'checklist.description',
          '情報の信頼性を科学的・体系的に評価する20項目のチェックシート'
        )}
      </p>

      <!-- フォームセクション - 常に表示 -->
      <div class="evaluation-form">
        <div class="form-row">
          <div class="form-group form-group-title">
            <label for="title">{safeT('forms.titleLabel', '情報のタイトル')}</label>
            <input
              id="title"
              type="text"
              bind:value={title}
              onchange={e => updateTitle(e.currentTarget.value)}
              placeholder={safeT('forms.titlePlaceholder', '評価する情報のタイトルを入力')}
              disabled={!browser}
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group form-group-description">
            <label for="description">{safeT('forms.descriptionLabel', '概要・要約')}</label>
            <textarea
              id="description"
              bind:value={description}
              onchange={e => updateDescription(e.currentTarget.value)}
              placeholder={safeT('forms.descriptionPlaceholder', '評価対象の情報の概要を記入')}
              rows="2"
              disabled={!browser}
            ></textarea>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group form-group-notes">
            <label for="notes">{safeT('forms.notesLabel', '評価メモ・追加確認事項')}</label>
            <textarea
              id="notes"
              bind:value={notes}
              onchange={e => updateNotes(e.currentTarget.value)}
              placeholder={safeT(
                'forms.notesPlaceholder',
                '評価中の気づきや追加で確認が必要な事項'
              )}
              rows="1"
              disabled={!browser}
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- スコア表示 - 常に表示（初期値: 0） -->
    <ScoreDisplay
      {score}
      {confidenceLevel}
      confidenceText={confidenceText || safeT('checklist.confidence.none', '未評価')}
      judgmentAdvice={judgmentAdvice || ''}
      currentJudgment={null}
      onJudgmentChange={() => {}}
    />

    <!-- チェックリストセクション - 常に表示 -->
    <div class="checklist-sections">
      {#each categories as category (category.id)}
        <CheckSection
          {category}
          items={currentChecklist?.items.filter(item => item.category.id === category.id) || []}
          collapsed={collapsedSections[category.id] || false}
          onToggle={() => toggleSection(category.id)}
          onCheckItem={async (itemId: string, checked: boolean) => {
            if (browser) {
              await refactoredChecklistStore.updateCheckItem(itemId, checked);
            }
          }}
        />
      {/each}
    </div>

    <!-- 判定アドバイス - クライアント側でのみ表示 -->
    {#if browser && judgmentAdvice}
      <div class="judgment-advice">
        <h3>{safeT('checklist.judgmentAdvice', '推奨判定')}</h3>
        <p>{judgmentAdvice}</p>
      </div>
    {/if}

    <!-- アクションボタン - クライアント側でのみ有効 -->
    <div class="action-buttons">
      {#if browser && currentChecklist}
        <div class="judgment-buttons">
          <button
            type="button"
            class="judgment-button adopt"
            onclick={() => handleComplete('adopt' as JudgmentType)}
            disabled={!isClientReady}
          >
            <span class="judgment-emoji">✅</span>
            <span class="judgment-text">{safeT('judgment.adopt', '採用（信頼できる）')}</span>
          </button>

          <button
            type="button"
            class="judgment-button wait"
            onclick={() => handleComplete('wait' as JudgmentType)}
            disabled={!isClientReady}
          >
            <span class="judgment-emoji">⏸️</span>
            <span class="judgment-text">{safeT('judgment.wait', '保留（追加確認が必要）')}</span>
          </button>

          <button
            type="button"
            class="judgment-button reject"
            onclick={() => handleComplete('reject' as JudgmentType)}
            disabled={!isClientReady}
          >
            <span class="judgment-emoji">❌</span>
            <span class="judgment-text">{safeT('judgment.reject', '不採用（信頼できない）')}</span>
          </button>
        </div>

        {#if isClientReady}
          <button type="button" class="export-button" onclick={handleExport}>
            {safeT('ui.export', 'エクスポート')}
          </button>
        {/if}
      {/if}
    </div>
  </div>

  <!-- サイドバー - 常に表示構造 -->
  <aside class="sidebar">
    <HistorySidebar />
  </aside>
</div>

<!-- モーダル - クライアント側でのみ表示 -->
{#if browser && showExportModal && currentChecklist}
  <ExportModal checklist={currentChecklist} onClose={() => (showExportModal = false)} />
{/if}

<style>
  /* 既存のスタイルを維持 */
  .container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2rem;
    min-height: calc(100vh - var(--header-height, 60px));
  }

  .main-content {
    padding: 2rem;
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    overflow-x: hidden;
  }

  .quick-start {
    margin-bottom: 2rem;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .evaluation-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-row {
    display: flex;
    gap: 1rem;
  }

  .form-group {
    flex: 1;
  }

  .form-group label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 0.95rem;
    transition: all 0.2s;
    background: var(--color-bg);
    color: var(--color-text);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary-alpha);
  }

  .form-group input:disabled,
  .form-group textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  textarea {
    resize: vertical;
    min-height: 38px;
  }

  .checklist-sections {
    margin: 2rem 0;
  }

  .judgment-advice {
    background: var(--color-info-bg);
    border: 1px solid var(--color-info-border);
    border-radius: var(--radius-md);
    padding: 1rem;
    margin: 2rem 0;
  }

  .judgment-advice h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .action-buttons {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .judgment-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .judgment-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    background: var(--color-surface);
    cursor: pointer;
    transition: all 0.2s;
  }

  .judgment-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .judgment-button.adopt {
    border-color: var(--color-success);
  }

  .judgment-button.adopt:hover:not(:disabled) {
    background: var(--color-success-bg);
  }

  .judgment-button.wait {
    border-color: var(--color-warning);
  }

  .judgment-button.wait:hover:not(:disabled) {
    background: var(--color-warning-bg);
  }

  .judgment-button.reject {
    border-color: var(--color-error);
  }

  .judgment-button.reject:hover:not(:disabled) {
    background: var(--color-error-bg);
  }

  .judgment-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .judgment-emoji {
    font-size: 2rem;
  }

  .judgment-text {
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
  }

  .export-button {
    padding: 0.75rem 1.5rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .export-button:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .sidebar {
    padding: 1rem;
    position: sticky;
    top: calc(var(--header-height, 60px) + 1rem);
    height: fit-content;
    max-height: calc(100vh - var(--header-height, 60px) - 2rem);
    overflow-y: auto;
  }

  /* レスポンシブ対応 */
  @media (max-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
    }

    .sidebar {
      position: static;
      max-height: none;
    }

    .judgment-buttons {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .container {
      padding: 1rem;
    }

    .main-content {
      padding: 1rem;
    }

    .form-row {
      flex-direction: column;
    }
  }

  /* ダークモード対応 */
  @media (prefers-color-scheme: dark) {
    .quick-start {
      background: var(--surface-color);
      padding: 1.5rem;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
    }

    .form-group input,
    .form-group textarea {
      background: var(--surface-elevated);
      border-color: var(--border-color);
      color: var(--text-color);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: var(--text-color-secondary);
    }

    .judgment-button {
      background: var(--surface-elevated);
      color: var(--text-color);
    }
  }
</style>
