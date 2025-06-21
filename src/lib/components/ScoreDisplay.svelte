<script lang="ts">
	import type { ChecklistScore, JudgmentType } from '$lib/types/checklist.js';

	interface Props {
		score: ChecklistScore;
		confidenceLevel: number;
		confidenceText: string;
		judgmentAdvice: string;
		currentJudgment: JudgmentType;
		onJudgmentChange: (judgment: JudgmentType) => void;
	}

	let {
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
		if (confidenceLevel >= 80) return '#27ae60';
		if (confidenceLevel >= 60) return '#f39c12';
		if (confidenceLevel >= 40) return '#e67e22';
		return '#e74c3c';
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
		<h3>📊 評価スコア</h3>

		<div class="score-breakdown">
			<div class="score-item">
				<span class="score-label">🚨 クリティカル</span>
				<span class="score-value">{score.critical}/6</span>
			</div>
			<div class="score-item">
				<span class="score-label">📝 詳細評価</span>
				<span class="score-value">{score.detailed}/6</span>
			</div>
			<div class="score-item">
				<span class="score-label">🔍 検証・照合</span>
				<span class="score-value">{score.verification}/4</span>
			</div>
			<div class="score-item">
				<span class="score-label">🌐 文脈・バイアス</span>
				<span class="score-value">{score.context}/4</span>
			</div>
		</div>

		<div class="total-score">
			<div class="score-item total">
				<strong class="score-label">総合スコア</strong>
				<strong class="score-value">{score.total}/{score.maxScore}</strong>
			</div>
		</div>
	</div>

	<!-- 信頼度メーター -->
	<div class="confidence-meter card">
		<h3>🎯 信頼度</h3>
		<div class="confidence-bar-container">
			<div class="confidence-bar">
				<div
					class="confidence-fill"
					style="width: {confidenceLevel}%; background-color: {confidenceBarColor}"
				></div>
			</div>
			<div class="confidence-percentage">{confidenceLevel}%</div>
		</div>
		<div class="confidence-text">{confidenceText}</div>
	</div>

	<!-- 最終判定 -->
	<div class="final-judgment card">
		<h3>⚖️ 最終判定</h3>
		<div class="judgment-buttons">
			<button
				class={getJudgmentButtonClass('accept')}
				onclick={() => setJudgment('accept')}
				aria-pressed={currentJudgment === 'accept'}
			>
				✅ 採用
			</button>
			<button
				class={getJudgmentButtonClass('caution')}
				onclick={() => setJudgment('caution')}
				aria-pressed={currentJudgment === 'caution'}
			>
				⚠️ 要注意
			</button>
			<button
				class={getJudgmentButtonClass('reject')}
				onclick={() => setJudgment('reject')}
				aria-pressed={currentJudgment === 'reject'}
			>
				❌ 不採用
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
		gap: var(--spacing-md);
	}

	.card {
		background: var(--bg-color);
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		padding: var(--spacing-md);
		transition: all 0.3s ease;
	}

	.card:hover {
		box-shadow: var(--shadow-hover);
	}

	.card h3 {
		margin: 0 0 var(--spacing-sm) 0;
		color: var(--text-color);
		font-size: 1.1em;
		font-weight: 600;
	}

	/* スコア表示 */
	.score-breakdown {
		margin-bottom: var(--spacing-sm);
	}

	.score-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-xs) 0;
		border-bottom: 1px solid var(--border-color);
	}

	.score-item:last-child {
		border-bottom: none;
	}

	.score-item.total {
		margin-top: var(--spacing-xs);
		padding-top: var(--spacing-sm);
		border-top: 2px solid var(--border-color);
		border-bottom: none;
	}

	.score-label {
		color: var(--text-muted);
		font-size: 0.9em;
	}

	.score-value {
		font-weight: bold;
		font-size: 1.1em;
		color: var(--text-color);
	}

	.total .score-label,
	.total .score-value {
		color: var(--text-color);
		font-size: 1.1em;
	}

	/* 信頼度メーター */
	.confidence-bar-container {
		margin-bottom: var(--spacing-sm);
	}

	.confidence-bar {
		width: 100%;
		height: 20px;
		background: var(--border-color);
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: var(--spacing-xs);
		position: relative;
	}

	.confidence-fill {
		height: 100%;
		transition:
			width 0.5s ease,
			background-color 0.3s ease;
		border-radius: 10px;
	}

	.confidence-percentage {
		text-align: right;
		font-weight: bold;
		font-size: 0.9em;
		color: var(--text-muted);
	}

	.confidence-text {
		text-align: center;
		font-weight: 600;
		font-size: 1.1em;
		color: var(--text-color);
		padding: var(--spacing-xs);
		background: var(--surface-color);
		border-radius: var(--border-radius-sm);
	}

	/* 最終判定 */
	.judgment-buttons {
		display: flex;
		gap: var(--spacing-xs);
		justify-content: center;
		margin-bottom: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.judgment-btn {
		padding: var(--spacing-xs) var(--spacing-sm);
		border: none;
		border-radius: 20px;
		cursor: pointer;
		font-weight: bold;
		font-size: 0.9em;
		transition: all 0.3s ease;
		min-width: 70px;
		text-align: center;
		opacity: 0.7;
	}

	.judgment-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		opacity: 1;
	}

	.judgment-btn:focus {
		outline: 2px solid var(--secondary-color);
		outline-offset: 2px;
	}

	.judgment-btn.accept {
		background: var(--success-color);
		color: white;
	}

	.judgment-btn.caution {
		background: var(--warning-color);
		color: white;
	}

	.judgment-btn.reject {
		background: var(--accent-color);
		color: white;
	}

	.judgment-btn.active {
		transform: scale(1.05);
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
		opacity: 1;
	}

	.judgment-advice {
		text-align: center;
		font-size: 0.9em;
		color: var(--text-muted);
		line-height: 1.4;
		padding: var(--spacing-sm);
		background: var(--surface-color);
		border-radius: var(--border-radius-sm);
		border-left: 4px solid var(--secondary-color);
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.card {
			padding: var(--spacing-sm);
		}

		.card h3 {
			font-size: 1em;
		}

		.score-item {
			padding: 6px 0;
		}

		.score-label {
			font-size: 0.85em;
		}

		.score-value {
			font-size: 1em;
		}

		.judgment-buttons {
			gap: 6px;
		}

		.judgment-btn {
			padding: 8px 12px;
			font-size: 0.8em;
			min-width: 60px;
		}

		.judgment-advice {
			font-size: 0.85em;
			padding: var(--spacing-xs);
		}
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.confidence-fill,
		.judgment-btn {
			transition: none;
		}
	}
</style>
