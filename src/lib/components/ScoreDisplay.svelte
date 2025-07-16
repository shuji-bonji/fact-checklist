<script lang="ts">
  import type { ChecklistScore, JudgmentType } from '$lib/types/checklist.js';
  import { t } from '$lib/i18n/index.js';

  interface Props {
    score: ChecklistScore;
    confidenceLevel: number;
    confidenceText: string;
    judgmentAdvice: string;
    currentJudgment: JudgmentType;
    onJudgmentChange: (judgment: JudgmentType) => void;
  }

  const {
    score,
    confidenceLevel,
    confidenceText,
    judgmentAdvice,
    currentJudgment,
    onJudgmentChange
  }: Props = $props();

  function setJudgment(judgment: JudgmentType) {
    onJudgmentChange(judgment);
  }

  // 信頼度バーの色を動的に決定
  const confidenceBarColor = $derived(() => {
    if (confidenceLevel >= 80) return 'var(--gradient-success)';
    if (confidenceLevel >= 60) return 'var(--gradient-accent)';
    if (confidenceLevel >= 40) return 'var(--gradient-warning)';
    return 'var(--gradient-error)';
  });

  // 判定ボタンのスタイル決定
  function getJudgmentButtonClass(judgment: JudgmentType) {
    const baseClass = 'judgment-btn';
    const typeClass =
      judgment === 'accept' ? 'accept' : judgment === 'caution' ? 'caution' : 'reject';
    const activeClass = currentJudgment === judgment ? 'active' : '';
    return `${baseClass} ${typeClass} ${activeClass}`.trim();
  }
</script>

<div class="score-container">
  <!-- スコア表示 -->
  <div class="score-display card">
    <h3>📊 {t('checklist.score')}</h3>

    <div class="score-breakdown">
      <div class="score-item">
        <span class="score-label"
          >{t('categories.critical.emoji')} {t('categories.critical.name')}</span
        >
        <span class="score-value">{score.critical}/6</span>
      </div>
      <div class="score-item">
        <span class="score-label"
          >{t('categories.detailed.emoji')} {t('categories.detailed.name')}</span
        >
        <span class="score-value">{score.detailed}/6</span>
      </div>
      <div class="score-item">
        <span class="score-label"
          >{t('categories.verification.emoji')} {t('categories.verification.name')}</span
        >
        <span class="score-value">{score.verification}/4</span>
      </div>
      <div class="score-item">
        <span class="score-label"
          >{t('categories.context.emoji')} {t('categories.context.name')}</span
        >
        <span class="score-value">{score.context}/4</span>
      </div>
    </div>

    <div class="total-score">
      <div class="score-item total">
        <strong class="score-label">{t('units.total')} {t('units.score')}</strong>
        <strong class="score-value">{score.total}/{score.maxScore}</strong>
      </div>
    </div>
  </div>

  <!-- 信頼度メーター -->
  <div class="confidence-meter card">
    <h3>🎯 {t('checklist.confidenceLevel')}</h3>
    <div class="confidence-bar-container">
      <div class="confidence-bar">
        <div
          class="confidence-fill"
          style:width="{confidenceLevel}%"
          style:background={confidenceBarColor.toString()}
        ></div>
      </div>
      <div class="confidence-percentage">{confidenceLevel}%</div>
    </div>
    <div class="confidence-text">{confidenceText}</div>
  </div>

  <!-- 最終判定 -->
  <div class="final-judgment card">
    <h3>⚖️ {t('checklist.finalJudgment')}</h3>
    <div class="judgment-buttons">
      <button
        type="button"
        class={getJudgmentButtonClass('accept')}
        onclick={() => setJudgment('accept')}
        aria-pressed={currentJudgment === 'accept'}
      >
        ✅ {t('checklist.judgment.accept')}
      </button>
      <button
        type="button"
        class={getJudgmentButtonClass('caution')}
        onclick={() => setJudgment('caution')}
        aria-pressed={currentJudgment === 'caution'}
      >
        ⚠️ {t('checklist.judgment.caution')}
      </button>
      <button
        type="button"
        class={getJudgmentButtonClass('reject')}
        onclick={() => setJudgment('reject')}
        aria-pressed={currentJudgment === 'reject'}
      >
        ❌ {t('checklist.judgment.reject')}
      </button>
    </div>

    <div class="judgment-advice">
      {judgmentAdvice}
    </div>
  </div>
</div>

<style>
  .score-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .card {
    background: var(--surface-elevated);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-6);
    border: 2px solid var(--border-color);
    transition: all var(--transition-base) var(--ease-out);
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

  .card:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
    border-color: var(--primary-color);
  }

  .card h3 {
    margin: 0 0 var(--spacing-4) 0;
    color: var(--text-color);
    font-family: var(--font-family-heading);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    position: relative;
    z-index: 1;
  }

  /* スコア表示 */
  .score-breakdown {
    margin-bottom: var(--spacing-4);
    position: relative;
    z-index: 1;
  }

  .score-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-3) var(--spacing-4);
    border-bottom: 1px solid var(--border-color);
    background: var(--surface-color);
    margin-bottom: var(--spacing-2);
    border-radius: var(--radius-lg);
    transition: all var(--transition-fast) var(--ease-out);
  }

  .score-item:hover {
    background: var(--surface-elevated);
    transform: translateX(4px);
  }

  .score-item:last-child {
    border-bottom: none;
  }

  .score-item.total {
    margin-top: var(--spacing-4);
    padding: var(--spacing-4);
    border: 2px solid var(--primary-color);
    background: var(--gradient-primary);
    color: white;
    margin-bottom: 0;
    box-shadow: var(--shadow-primary);
  }

  .score-item.total:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .score-label {
    color: var(--text-color-secondary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
  }

  .score-value {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    color: var(--text-color);
    font-family: var(--font-family-mono);
  }

  .total .score-label,
  .total .score-value {
    color: white;
    font-size: var(--font-size-lg);
  }

  /* 信頼度メーター */
  .confidence-bar-container {
    margin-bottom: var(--spacing-4);
    position: relative;
    z-index: 1;
  }

  .confidence-bar {
    width: 100%;
    height: 24px;
    background: var(--color-gray-200);
    border-radius: var(--radius-full);
    overflow: hidden;
    margin-bottom: var(--spacing-3);
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .confidence-fill {
    height: 100%;
    transition: width var(--transition-slower) var(--ease-out);
    border-radius: var(--radius-full);
    position: relative;
  }

  .confidence-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    border-radius: var(--radius-full);
  }

  .confidence-percentage {
    text-align: right;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    color: var(--text-color);
    font-family: var(--font-family-mono);
  }

  .confidence-text {
    text-align: center;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-lg);
    color: var(--text-color);
    padding: var(--spacing-4);
    background: var(--surface-color);
    border-radius: var(--radius-lg);
    border: 2px solid var(--border-color);
    box-shadow: var(--shadow-sm);
  }

  /* 最終判定 */
  .judgment-buttons {
    display: flex;
    gap: var(--spacing-3);
    justify-content: center;
    margin-bottom: var(--spacing-4);
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  .judgment-btn {
    padding: var(--spacing-4) var(--spacing-6);
    border: 2px solid transparent;
    border-radius: var(--radius-xl);
    cursor: pointer;
    font-family: var(--font-family-base);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-base);
    transition: all var(--transition-base) var(--ease-out);
    min-width: 100px;
    text-align: center;
    opacity: 0.8;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(var(--blur-sm));
  }

  .judgment-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
  }

  .judgment-btn:hover::before {
    opacity: 1;
  }

  .judgment-btn:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    opacity: 1;
  }

  .judgment-btn:focus {
    outline: 3px solid var(--primary-color);
    outline-offset: 3px;
  }

  .judgment-btn.accept {
    background: var(--gradient-success);
    color: white;
    border-color: var(--color-success-400);
  }

  .judgment-btn.accept:hover {
    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
  }

  .judgment-btn.caution {
    background: var(--gradient-warning);
    color: white;
    border-color: var(--color-warning-400);
  }

  .judgment-btn.caution:hover {
    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.4);
  }

  .judgment-btn.reject {
    background: var(--gradient-error);
    color: white;
    border-color: var(--color-error-400);
  }

  .judgment-btn.reject:hover {
    box-shadow: 0 8px 25px rgba(244, 67, 54, 0.4);
  }

  .judgment-btn.active {
    transform: scale(1.1) translateY(-2px);
    box-shadow: var(--shadow-xl);
    opacity: 1;
    border-color: white;
  }

  .judgment-btn.active::before {
    opacity: 0.3;
  }

  .judgment-advice {
    text-align: center;
    font-size: var(--font-size-base);
    color: var(--text-color-secondary);
    line-height: var(--line-height-relaxed);
    padding: var(--spacing-4);
    background: var(--surface-color);
    border-radius: var(--radius-lg);
    border-left: 4px solid var(--secondary-color);
    border: 2px solid var(--border-color);
    position: relative;
    z-index: 1;
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .score-container {
      gap: var(--spacing-4);
    }

    .card {
      padding: var(--spacing-4);
    }

    .card h3 {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-3);
    }

    .score-item {
      padding: var(--spacing-2) var(--spacing-3);
      margin-bottom: var(--spacing-1);
    }

    .score-label {
      font-size: var(--font-size-xs);
    }

    .score-value {
      font-size: var(--font-size-base);
    }

    .score-item.total {
      padding: var(--spacing-3);
    }

    .confidence-bar {
      height: 20px;
    }

    .judgment-buttons {
      gap: var(--spacing-2);
      flex-direction: column;
    }

    .judgment-btn {
      padding: var(--spacing-3) var(--spacing-4);
      font-size: var(--font-size-sm);
      min-width: auto;
    }

    .judgment-advice {
      font-size: var(--font-size-sm);
      padding: var(--spacing-3);
    }
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    .card,
    .card::before,
    .confidence-fill,
    .confidence-fill::after,
    .judgment-btn,
    .judgment-btn::before,
    .score-item {
      transition: none !important;
    }
  }
</style>
