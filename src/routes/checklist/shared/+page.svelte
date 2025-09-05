<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { parseShareableUrl } from '$lib/utils/shareUrl';
  import { getChecklistItems, getCategories } from '$lib/data/checklist-items';
  import { t, factChecklistI18n } from '$lib/i18n/simple-store.svelte.js';
  import type { ChecklistResult } from '$lib/types/checklist';

  // State
  // let sharedData = $state<Partial<ChecklistResult> | null>(null); // 未使用
  let fullChecklist = $state<ChecklistResult | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);
  let copiedToClipboard = $state(false);

  // シンプルストアは常に初期化済み
  const isI18nReady = true;
  const categories = $derived(getCategories());

  onMount(() => {
    loadSharedData();
  });

  async function loadSharedData() {
    try {
      // URLパラメータからデータを復元
      const data = parseShareableUrl($page.url.searchParams);

      if (!data) {
        error = t('intro.share.invalidUrl');
        loading = false;
        return;
      }

      // sharedData = data;

      // チェックリストアイテムを復元
      const allItems = getChecklistItems();
      const checkedIds = (data as ChecklistResult & { _checkedIds?: string[] })._checkedIds || [];

      // チェック状態を復元
      const restoredItems = allItems.map(item => ({
        ...item,
        checked: checkedIds.includes(item.id)
      }));

      // スコアを再計算
      const scoresByCategory = {
        critical: 0,
        detailed: 0,
        verification: 0,
        context: 0
      };

      restoredItems.forEach(item => {
        if (item.checked) {
          const categoryId = item.category.id as keyof typeof scoresByCategory;
          if (categoryId in scoresByCategory) {
            scoresByCategory[categoryId]++;
          }
        }
      });

      const totalScore = Object.values(scoresByCategory).reduce((sum, score) => sum + score, 0);
      const maxScore = allItems.length;
      const percentage = Math.round((totalScore / maxScore) * 100);

      // 完全なチェックリストオブジェクトを作成
      fullChecklist = {
        id: crypto.randomUUID(),
        title: data.title || t('intro.share.sharedChecklist'),
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        completedAt: data.completedAt,
        status: 'completed',
        items: restoredItems,
        score: {
          critical: scoresByCategory.critical,
          detailed: scoresByCategory.detailed,
          verification: scoresByCategory.verification,
          context: scoresByCategory.context,
          total: totalScore,
          maxScore,
          percentage
        },
        judgment: data.judgment || null,
        notes: data.notes || '',
        confidenceLevel: percentage,
        confidenceText: getConfidenceText(percentage),
        judgmentAdvice: getJudgmentAdvice(data.judgment)
      } as ChecklistResult;

      loading = false;
    } catch (err) {
      console.error('Failed to load shared data:', err);
      error = t('intro.share.loadError');
      loading = false;
    }
  }

  function getConfidenceText(level: number): string {
    if (level >= 80) return t('checklist.confidence.high');
    if (level >= 60) return t('checklist.confidence.high');
    if (level >= 40) return t('checklist.confidence.medium');
    if (level >= 20) return t('checklist.confidence.low');
    return t('checklist.confidence.poor');
  }

  function getJudgmentAdvice(judgment: string | null | undefined): string {
    switch (judgment) {
      case 'accept':
        return t('checklist.judgmentAdvice.accept');
      case 'caution':
        return t('checklist.judgmentAdvice.caution');
      case 'reject':
        return t('checklist.judgmentAdvice.reject');
      default:
        return '';
    }
  }

  async function saveToLocal() {
    if (!fullChecklist) return;

    try {
      // ローカルストレージに保存
      const { StorageService } = await import('$lib/services/StorageService');
      const storage = new StorageService();
      await storage.saveChecklist(fullChecklist);

      // 保存したチェックリストのページへ遷移
      goto(`${base}/checklist/${fullChecklist.id}?saved=true`);
    } catch (err) {
      console.error('Failed to save checklist:', err);
      error = t('intro.share.saveError');
    }
  }

  async function copyCurrentUrl() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copiedToClipboard = true;
      setTimeout(() => {
        copiedToClipboard = false;
      }, 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  }

  function startNewCheck() {
    goto(`${base}/`);
  }
</script>

<div class="container">
  {#if loading}
    <div class="loading-container">
      <div class="spinner"></div>
      <p>{t('common.loading')}</p>
    </div>
  {:else if error}
    <div class="error-container">
      <h1>❌ {t('common.error')}</h1>
      <p>{error}</p>
      <button type="button" class="btn btn-primary" onclick={startNewCheck}>
        {t('checklist.newChecklist')}
      </button>
    </div>
  {:else if fullChecklist}
    <div class="shared-notice">
      <div class="notice-icon">📤</div>
      <div class="notice-content">
        <h2>{t('intro.share.sharedResultTitle')}</h2>
        <p>{t('intro.share.sharedResultDescription')}</p>
      </div>
    </div>

    <header class="result-header">
      <div class="header-info">
        <h1>{fullChecklist.title}</h1>
        <div class="meta">
          <span class="meta-item">
            📅 {fullChecklist.completedAt?.toLocaleDateString()}
          </span>
          <span class="meta-item">
            📊 {t('checklist.score')}: {fullChecklist.score.percentage}%
          </span>
          {#if fullChecklist.judgment}
            <span class="meta-item judgment-{fullChecklist.judgment}">
              {fullChecklist.judgment === 'accept'
                ? '✅'
                : fullChecklist.judgment === 'caution'
                  ? '⚠️'
                  : '❌'}
              {t(`checklist.judgment.${fullChecklist.judgment}`)}
            </span>
          {/if}
        </div>
      </div>

      <div class="header-actions">
        <button type="button" class="btn btn-secondary" onclick={copyCurrentUrl}>
          {copiedToClipboard ? '✅' : '📋'}
          {copiedToClipboard ? t('intro.share.copied') : t('intro.share.copyLink')}
        </button>
        <button type="button" class="btn btn-primary" onclick={saveToLocal}>
          💾 {t('intro.share.saveToDevice')}
        </button>
        <button type="button" class="btn btn-success" onclick={startNewCheck}>
          ➕ {t('checklist.newChecklist')}
        </button>
      </div>
    </header>

    <div class="main-content">
      <!-- スコアサマリー -->
      <div class="score-summary card">
        <h2>📊 {t('checklist.evaluationResults')}</h2>

        <div class="score-grid">
          <div class="score-card critical">
            <div class="score-icon">🚨</div>
            <div class="score-info">
              <div class="score-label">{t('categories.critical.name')}</div>
              <div class="score-value">{fullChecklist.score.critical}/6</div>
            </div>
          </div>

          <div class="score-card detailed">
            <div class="score-icon">📝</div>
            <div class="score-info">
              <div class="score-label">{t('categories.detailed.name')}</div>
              <div class="score-value">{fullChecklist.score.detailed}/6</div>
            </div>
          </div>

          <div class="score-card verification">
            <div class="score-icon">🔍</div>
            <div class="score-info">
              <div class="score-label">{t('categories.verification.name')}</div>
              <div class="score-value">{fullChecklist.score.verification}/4</div>
            </div>
          </div>

          <div class="score-card context">
            <div class="score-icon">🌐</div>
            <div class="score-info">
              <div class="score-label">{t('categories.context.name')}</div>
              <div class="score-value">{fullChecklist.score.context}/4</div>
            </div>
          </div>
        </div>

        <div class="total-score">
          <span class="total-label">{t('checklist.totalScore')}</span>
          <span class="total-value">{fullChecklist.score.total}/{fullChecklist.score.maxScore}</span
          >
          <span class="percentage">({fullChecklist.score.percentage}%)</span>
        </div>
      </div>

      <!-- チェック項目詳細 -->
      <div class="items-detail card">
        <h2>📋 {t('checklist.itemsDetail')}</h2>

        {#each categories as category (category.id)}
          {@const categoryItems = fullChecklist.items.filter(
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
              {#each categoryItems as item (item.id)}
                <div class="item-row {item.checked ? 'checked' : 'unchecked'}">
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
      {#if fullChecklist.notes}
        <div class="notes-display card">
          <h2>📝 {t('checklist.evaluationNotes')}</h2>
          <div class="notes-content">
            {fullChecklist.notes}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 1200px;
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

  .shared-notice {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-lg);
  }

  .notice-icon {
    font-size: 3rem;
  }

  .notice-content h2 {
    margin: 0 0 var(--spacing-xs) 0;
    font-size: 1.5rem;
  }

  .notice-content p {
    margin: 0;
    opacity: 0.9;
  }

  .result-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: var(--spacing-lg);
    padding: var(--spacing-lg);
    background: var(--surface-color);
    border-radius: var(--radius-lg);
    gap: var(--spacing-lg);
  }

  .header-info h1 {
    margin: 0 0 var(--spacing-sm) 0;
    font-size: 1.8rem;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    font-size: 0.9rem;
    color: var(--text-color-secondary);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  .header-actions {
    display: flex;
    gap: var(--spacing-sm);
    flex-shrink: 0;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .card {
    background: var(--surface-color);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
  }

  .card h2 {
    margin: 0 0 var(--spacing-md) 0;
    font-size: 1.3rem;
  }

  .score-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
  }

  .score-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    background: var(--background-color);
  }

  .score-card.critical {
    border-left: 4px solid var(--danger-color);
  }
  .score-card.detailed {
    border-left: 4px solid var(--warning-color);
  }
  .score-card.verification {
    border-left: 4px solid var(--info-color);
  }
  .score-card.context {
    border-left: 4px solid var(--success-color);
  }

  .score-icon {
    font-size: 2rem;
  }

  .score-label {
    font-size: 0.9rem;
    color: var(--text-color-secondary);
    margin-bottom: var(--spacing-xs);
  }

  .score-value {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .total-score {
    text-align: center;
    padding: var(--spacing-lg);
    background: var(--background-color);
    border-radius: var(--radius-md);
  }

  .total-label {
    font-size: 1.1rem;
    color: var(--text-color-secondary);
    margin-right: var(--spacing-md);
  }

  .total-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-color);
  }

  .percentage {
    font-size: 1.5rem;
    color: var(--text-color-secondary);
    margin-left: var(--spacing-sm);
  }

  .category-section {
    margin-bottom: var(--spacing-lg);
  }

  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    font-weight: bold;
  }

  .category-header.critical {
    background: rgba(239, 68, 68, 0.1);
  }
  .category-header.detailed {
    background: rgba(245, 158, 11, 0.1);
  }
  .category-header.verification {
    background: rgba(59, 130, 246, 0.1);
  }
  .category-header.context {
    background: rgba(34, 197, 94, 0.1);
  }

  .category-items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .item-row {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    background: var(--background-color);
    transition: all 0.2s;
  }

  .item-row.checked {
    opacity: 0.9;
  }

  .item-status {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .item-title {
    font-weight: 500;
    margin-bottom: var(--spacing-xs);
  }

  .item-description {
    font-size: 0.9rem;
    color: var(--text-color-secondary);
  }

  .notes-content {
    padding: var(--spacing-md);
    background: var(--background-color);
    border-radius: var(--radius-md);
    white-space: pre-wrap;
  }

  /* レスポンシブ */
  @media (max-width: 768px) {
    .result-header {
      flex-direction: column;
    }

    .header-actions {
      width: 100%;
      flex-direction: column;
    }

    .header-actions button {
      width: 100%;
    }
  }
</style>
