<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { checklistStore } from '$lib/stores/checklistStore.svelte.js';
  import { getCategories } from '$lib/data/checklist-items.js';
  import type { ChecklistResult, JudgmentType } from '$lib/types/checklist.js';
  import { t, i18nStore, factChecklistI18n } from '$lib/i18n/index.js';

  import ExportModal from '$lib/components/ExportModal.svelte';

  // i18n初期化状態を監視
  const isI18nReady = $derived(i18nStore.initialized && !!i18nStore.translations);

  // カテゴリ情報をリアクティブに取得
  const categories = $derived(isI18nReady ? getCategories() : []);

  // State
  let checklist = $state<ChecklistResult | null>(null);
  let showExportModal = $state(false);
  let isCompleted = $state(false);
  let loading = $state(true);

  // URL parameters
  const checklistId = $derived($page.params.id);
  const completedParam = $derived($page.url.searchParams.get('completed'));

  onMount(() => {
    loadChecklist();
    isCompleted = completedParam === 'true';
  });

  async function loadChecklist() {
    if (!checklistId) {
      goto(base || '/');
      return;
    }

    const loaded = await checklistStore.loadChecklist(checklistId);
    if (loaded) {
      checklist = checklistStore.currentChecklist;
    } else {
      // チェックリストが見つからない場合はホームに戻る
      goto(base || '/');
      return;
    }
    loading = false;
  }

  function editChecklist() {
    goto(`${base}/?id=${checklistId}`);
  }

  function createNewChecklist() {
    const id = checklistStore.createNewChecklist();
    goto(`${base}/?id=${id}`);
  }

  function getJudgmentDisplay(judgment: JudgmentType) {
    switch (judgment) {
      case 'accept':
        return { icon: '✅', text: t('checklist.judgment.accept'), class: 'accept' };
      case 'caution':
        return { icon: '⚠️', text: t('checklist.judgment.caution'), class: 'caution' };
      case 'reject':
        return { icon: '❌', text: t('checklist.judgment.reject'), class: 'reject' };
      default:
        return { icon: '❓', text: t('checklist.judgment.pending'), class: 'unknown' };
    }
  }

  function getConfidenceClass(level: number): string {
    if (level >= 80) return 'high';
    if (level >= 60) return 'medium';
    if (level >= 40) return 'low';
    return 'very-low';
  }

  // アニメーション用の遅延
  function getItemDelay(index: number): string {
    return `${index * 0.1}s`;
  }

  function sanitizeHtml(content: string): string {
    return content
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\n/g, '<br>');
  }
</script>

<svelte:head>
  <title
    >{checklist?.title || (isI18nReady ? t('checklist.title') : 'Checklist Details')} - {isI18nReady
      ? t('app.title')
      : 'Fact Checklist'}</title
  >
  <meta
    name="description"
    content={isI18nReady ? t('checklist.description') : 'Fact checklist evaluation results'}
  />
</svelte:head>

{#if loading}
  <div class="loading-container">
    <div class="spinner"></div>
    <p>{isI18nReady ? t('common.loading') : 'Loading...'}</p>
  </div>
{:else if checklist}
  <div class="container">
    <!-- 完了通知バナー -->
    {#if isCompleted}
      <div class="completion-banner">
        <div class="banner-content">
          <span class="banner-icon">🎉</span>
          <div class="banner-text">
            <h3>{t('checklist.evaluationCompleted')}</h3>
            <p>{t('checklist.evaluationCompletedDescription')}</p>
          </div>
        </div>
      </div>
    {/if}

    <!-- ヘッダー -->
    <header class="detail-header">
      <div class="header-content">
        <h1>{checklistStore.effectiveTitle}</h1>
        {#if checklist.description}
          <p class="description">{checklist.description}</p>
        {/if}

        <div class="meta-info">
          <span class="meta-item">
            📅 {t('datetime.createdAt')}: {checklist.createdAt.toLocaleDateString()}
          </span>
          {#if checklist.completedAt}
            <span class="meta-item">
              ✅ {t('datetime.completedAt')}: {checklist.completedAt.toLocaleDateString()}
            </span>
          {/if}
          <span class="meta-item">
            🔄 {t('datetime.updatedAt')}: {checklist.updatedAt.toLocaleDateString()}
          </span>
        </div>
      </div>

      <div class="header-actions">
        <button class="btn btn-secondary" onclick={editChecklist}> ✏️ {t('common.edit')} </button>
        <button class="btn btn-primary" onclick={() => (showExportModal = true)}>
          📄 {t('common.export')}
        </button>
        <button class="btn btn-success" onclick={createNewChecklist}>
          ➕ {t('checklist.newChecklist')}
        </button>
      </div>
    </header>

    <div class="main-content grid grid-2">
      <!-- 評価結果 -->
      <div class="results-area">
        <!-- スコアサマリー -->
        <div class="score-summary card">
          <h2>📊 {t('checklist.evaluationResults')}</h2>

          <div class="score-grid">
            <div class="score-card critical">
              <div class="score-icon">🚨</div>
              <div class="score-info">
                <div class="score-label">{t('categories.critical.name')}</div>
                <div class="score-value">{checklist.score.critical}/6</div>
              </div>
            </div>

            <div class="score-card detailed">
              <div class="score-icon">📝</div>
              <div class="score-info">
                <div class="score-label">{t('categories.detailed.name')}</div>
                <div class="score-value">{checklist.score.detailed}/6</div>
              </div>
            </div>

            <div class="score-card verification">
              <div class="score-icon">🔍</div>
              <div class="score-info">
                <div class="score-label">{t('categories.verification.name')}</div>
                <div class="score-value">{checklist.score.verification}/4</div>
              </div>
            </div>

            <div class="score-card context">
              <div class="score-icon">🌐</div>
              <div class="score-info">
                <div class="score-label">{t('categories.context.name')}</div>
                <div class="score-value">{checklist.score.context}/4</div>
              </div>
            </div>
          </div>

          <div class="total-score-display">
            <div class="total-score">
              <span class="total-label">{t('checklist.totalScore')}</span>
              <span class="total-value">{checklist.score.total}/{checklist.score.maxScore}</span>
            </div>

            <div class="confidence-display">
              <div class="confidence-meter">
                <div
                  class="confidence-bar {getConfidenceClass(checklist.confidenceLevel)}"
                  style:width="{checklist.confidenceLevel}%"
                ></div>
              </div>
              <div class="confidence-text">
                {t('checklist.confidenceLevel')}: {checklist.confidenceLevel}% ({checklist.confidenceText})
              </div>
            </div>
          </div>

          {#if checklist.judgment}
            <div class="final-judgment {getJudgmentDisplay(checklist.judgment).class}">
              <span class="judgment-icon">{getJudgmentDisplay(checklist.judgment).icon}</span>
              <span class="judgment-text"
                >{t('checklist.finalJudgment')}: {getJudgmentDisplay(checklist.judgment).text}</span
              >
            </div>
          {/if}
        </div>

        <!-- チェック項目詳細 -->
        <div class="items-detail card">
          <h2>📋 {t('checklist.itemsDetail')}</h2>

          {#each categories as category (category.id)}
            {@const categoryItems = checklist.items.filter(
              item => item.category.id === category.id
            )}
            {@const checkedCount = categoryItems.filter(item => item.checked).length}

            <div class="category-section">
              <div class="category-header {category.id}">
                <span class="category-title">
                  {category.emoji}
                  {category.name}
                </span>
                <span class="category-score">
                  {checkedCount}/{categoryItems.length}
                </span>
              </div>

              <div class="category-items">
                {#each categoryItems as item, index (item.id)}
                  <div
                    class="item-row {item.checked ? 'checked' : 'unchecked'}"
                    style:animation-delay={getItemDelay(index)}
                  >
                    <div class="item-status">
                      {item.checked ? '✅' : '❌'}
                    </div>
                    <div class="item-content">
                      <div class="item-title">
                        {isI18nReady ? factChecklistI18n.getCheckItemTitle(item.id) : item.title}
                      </div>
                      <div class="item-description">
                        {isI18nReady
                          ? factChecklistI18n.getCheckItemDescription(item.id)
                          : item.description}
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <!-- 評価メモ -->
        {#if checklist.notes}
          <div class="notes-display card">
            <h2>📝 {t('checklist.evaluationNotes')}</h2>
            <div class="notes-content">
              {@html sanitizeHtml(checklist.notes)}
            </div>
          </div>
        {/if}
      </div>

      <!-- 推奨アクション -->
      <div class="sidebar">
        <div class="recommendations card">
          <h3>💡 {t('checklist.recommendedActions')}</h3>
          <div class="advice-content">
            {checklist.judgmentAdvice}
          </div>

          {#if checklist.confidenceLevel < 60}
            <div class="improvement-tips">
              <h4>{t('checklist.improvementTips')}:</h4>
              <ul>
                <li>{t('checklist.checkUncheckedItems')}</li>
                <li>{t('checklist.additionalSourceResearch')}</li>
                <li>{t('checklist.expertConsultation')}</li>
                <li>{t('checklist.factCheckOrganizations')}</li>
              </ul>
            </div>
          {/if}
        </div>

        <!-- 統計情報 -->
        <div class="statistics card">
          <h3>📈 {t('checklist.statistics')}</h3>
          <div class="stat-list">
            <div class="stat-item">
              <span class="stat-label">{t('checklist.checkedItems')}</span>
              <span class="stat-value">
                {checklist.items.filter(i => i.checked).length}{t('units.items')}
              </span>
            </div>
            <div class="stat-item">
              <span class="stat-label">{t('checklist.uncheckedItems')}</span>
              <span class="stat-value">
                {checklist.items.filter(i => !i.checked).length}{t('units.items')}
              </span>
            </div>
            <div class="stat-item">
              <span class="stat-label">{t('checklist.completionRate')}</span>
              <span class="stat-value">
                {Math.round(
                  (checklist.items.filter(i => i.checked).length / checklist.items.length) * 100
                )}%
              </span>
            </div>
          </div>
        </div>

        <!-- アクションボタン -->
        <div class="action-panel card">
          <h3>🔧 {t('checklist.actions')}</h3>
          <div class="action-buttons">
            <button class="btn btn-primary w-full" onclick={() => (showExportModal = true)}>
              📄 {t('checklist.exportShare')}
            </button>
            <button class="btn btn-secondary w-full" onclick={editChecklist}>
              ✏️ {t('checklist.reEdit')}
            </button>
            <button class="btn btn-success w-full" onclick={createNewChecklist}>
              ➕ {t('checklist.newChecklist')}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- エクスポートモーダル -->
  {#if showExportModal}
    <ExportModal {checklist} onClose={() => (showExportModal = false)} />
  {/if}
{:else}
  <div class="error-container">
    <h1>❌ チェックリストが見つかりません</h1>
    <p>指定されたチェックリストは存在しないか、削除された可能性があります。</p>
  </div>
{/if}

<style>
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-6);
  }

  .loading-container,
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    text-align: center;
    gap: var(--spacing-md);
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--secondary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* 完了バナー */
  .completion-banner {
    background: linear-gradient(135deg, #27ae60, #2ecc71);
    color: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-lg);
    animation: slideDown 0.5s ease-out;
  }

  .banner-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .banner-icon {
    font-size: 2em;
    animation: bounce 1s ease-out;
  }

  .banner-text h3 {
    margin: 0;
    font-size: 1.2em;
  }

  .banner-text p {
    margin: 4px 0 0 0;
    opacity: 0.9;
  }

  /* ヘッダー */
  .detail-header {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-lg);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--spacing-lg);
  }

  .header-content h1 {
    margin: 0 0 var(--spacing-sm) 0;
    font-size: 2em;
    font-weight: 400;
  }

  .description {
    margin: 0 0 var(--spacing-sm) 0;
    opacity: 0.9;
    line-height: 1.5;
  }

  .meta-info {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
  }

  .meta-item {
    font-size: 0.9em;
    opacity: 0.8;
  }

  .header-actions {
    display: flex;
    gap: var(--spacing-sm);
    flex-shrink: 0;
  }

  /* メインコンテンツ */
  .main-content {
    gap: var(--spacing-6);
    align-items: start;
  }

  .card {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: var(--spacing-6);
    margin-bottom: var(--spacing-4);
    position: relative;
    overflow: hidden;
  }

  .card::before {
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

  .card h2,
  .card h3 {
    margin: 0 0 var(--spacing-4) 0;
    color: var(--text-color);
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-semibold);
    position: relative;
    z-index: 1;
  }

  /* スコアサマリー - モダンデザイン */
  .score-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-3);
    margin-bottom: var(--spacing-4);
  }

  .score-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-3);
    border-radius: var(--radius-lg);
    border-left: 4px solid;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all var(--transition-base) var(--ease-out);
  }

  .score-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .score-card.critical {
    border-left-color: #e74c3c;
    background: #fdf2f2;
  }
  .score-card.detailed {
    border-left-color: #f39c12;
    background: #fefaf5;
  }
  .score-card.verification {
    border-left-color: #3498db;
    background: #f4f9fd;
  }
  .score-card.context {
    border-left-color: #9b59b6;
    background: #f8f4fd;
  }

  .score-icon {
    font-size: 1.5em;
  }

  .score-label {
    font-size: 0.9em;
    color: var(--text-muted);
  }

  .score-value {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--text-color);
  }

  .total-score-display {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: var(--spacing-4);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .total-score {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-3);
  }

  .total-label {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-color);
    font-family: var(--font-family-heading);
  }

  .total-value {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--text-color);
    font-family: var(--font-family-heading);
  }

  .confidence-meter {
    width: 100%;
    height: 8px;
    background: var(--border-color-subtle);
    border-radius: var(--radius-full);
    overflow: hidden;
    margin-bottom: var(--spacing-2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .confidence-bar {
    height: 100%;
    transition: width 0.8s var(--ease-out);
    border-radius: var(--radius-full);
    position: relative;
    overflow: hidden;
  }

  .confidence-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  .confidence-bar.high {
    background: #27ae60;
  }
  .confidence-bar.medium {
    background: #f39c12;
  }
  .confidence-bar.low {
    background: #e67e22;
  }
  .confidence-bar.very-low {
    background: #e74c3c;
  }

  .confidence-text {
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-medium);
  }

  .final-judgment {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    font-weight: 600;
  }

  .final-judgment.accept {
    background: #e8f5e8;
    color: #2e7d32;
  }
  .final-judgment.caution {
    background: #fff3e0;
    color: #ef6c00;
  }
  .final-judgment.reject {
    background: #ffebee;
    color: #c62828;
  }
  .final-judgment.unknown {
    background: var(--surface-color);
    color: var(--text-muted);
  }

  /* カテゴリセクション */
  .category-section {
    margin-bottom: var(--spacing-lg);
  }

  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    margin-bottom: var(--spacing-sm);
    color: white;
    font-weight: 600;
  }

  .category-header.critical {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
  }
  .category-header.detailed {
    background: linear-gradient(135deg, #f39c12, #e67e22);
  }
  .category-header.verification {
    background: linear-gradient(135deg, #3498db, #2980b9);
  }
  .category-header.context {
    background: linear-gradient(135deg, #9b59b6, #8e44ad);
  }

  .category-items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .item-row {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    animation: fadeIn 0.5s ease-out both;
  }

  .item-row.checked {
    background: #f8fff8;
    border-left: 3px solid #4caf50;
  }

  .item-row.unchecked {
    background: #fff8f8;
    border-left: 3px solid #f44336;
  }

  .item-status {
    font-size: 1.2em;
    margin-top: 2px;
  }

  .item-title {
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 4px;
  }

  .item-description {
    font-size: 0.9em;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* サイドバー */
  .sidebar {
    position: sticky;
    top: var(--spacing-6);
  }

  .advice-content {
    padding: var(--spacing-3);
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: var(--radius-lg);
    color: var(--text-color);
    line-height: var(--line-height-relaxed);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
  }

  .advice-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-primary);
  }

  .improvement-tips {
    margin-top: var(--spacing-md);
  }

  .improvement-tips h4 {
    margin: 0 0 var(--spacing-xs) 0;
    color: var(--text-color);
    font-size: 0.95em;
  }

  .improvement-tips ul {
    margin: 0;
    padding-left: var(--spacing-md);
    color: var(--text-muted);
  }

  .improvement-tips li {
    margin-bottom: 4px;
    font-size: 0.9em;
  }

  .stat-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-xs) 0;
    border-bottom: 1px solid var(--border-color);
  }

  .stat-item:last-child {
    border-bottom: none;
  }

  .stat-label {
    color: var(--text-muted);
    font-size: 0.9em;
  }

  .stat-value {
    font-weight: 600;
    color: var(--text-color);
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3) var(--spacing-4);
    border: none;
    border-radius: var(--radius-full);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition: all var(--transition-base) var(--ease-out);
    text-decoration: none;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }

  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-primary);
  }
  .btn-secondary {
    background: var(--gradient-secondary);
    color: white;
    box-shadow: var(--shadow-secondary);
  }
  .btn-success {
    background: var(--gradient-accent);
    color: white;
    box-shadow: var(--shadow-accent);
  }

  .w-full {
    width: 100%;
  }

  /* レスポンシブ対応 */
  @media (max-width: 1024px) {
    .main-content {
      grid-template-columns: 1fr;
    }

    .sidebar {
      position: static;
      order: -1;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: var(--spacing-4);
    }

    .detail-header {
      flex-direction: column;
      align-items: stretch;
      gap: var(--spacing-md);
    }

    .header-actions {
      justify-content: center;
    }

    .score-grid {
      grid-template-columns: 1fr;
    }

    .meta-info {
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .card {
      padding: var(--spacing-md);
    }
  }

  /* アニメーション */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    40%,
    43% {
      transform: translate3d(0, -5px, 0);
    }
    70% {
      transform: translate3d(0, -3px, 0);
    }
    90% {
      transform: translate3d(0, -1px, 0);
    }
  }
</style>
