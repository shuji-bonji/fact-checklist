<script lang="ts">
	import type { CheckItem } from '$lib/types/checklist.js';

	interface Props {
		item: CheckItem;
		showGuideMode?: boolean;
		onCheckChange: (checked: boolean) => void;
	}

	let { item, showGuideMode = false, onCheckChange }: Props = $props();

	let showGuide = $state(false);

	function toggleGuide() {
		showGuide = !showGuide;
	}

	function handleCheckChange(event: Event) {
		const target = event.target as HTMLInputElement;
		onCheckChange(target.checked);
	}

	// ガイドモードが有効な場合は自動でガイドを表示
	$effect(() => {
		if (showGuideMode) {
			showGuide = true;
		} else {
			showGuide = false;
		}
	});

	// リスクレベルに応じたスタイルクラス
	const riskClasses = {
		high: 'risk-high',
		medium: 'risk-medium',
		low: 'risk-low'
	};
</script>

<div class="check-item">
	<div class="check-content">
		<div class="checkbox-wrapper">
			<input
				type="checkbox"
				id="check-{item.id}"
				checked={item.checked}
				onchange={handleCheckChange}
				aria-describedby="desc-{item.id}"
			/>
		</div>

		<div class="item-content">
			<label for="check-{item.id}" class="item-title">
				{item.title}
				<span class="risk-indicator {riskClasses[item.riskLevel]}">
					{item.riskLevel === 'high'
						? '高リスク'
						: item.riskLevel === 'medium'
							? '中リスク'
							: '低リスク'}
				</span>

				{#if item.guideContent && !showGuideMode}
					<button
						class="guide-toggle"
						onclick={toggleGuide}
						aria-expanded={showGuide}
						aria-controls="guide-{item.id}"
						title="ガイドを表示"
					>
						ガイド
					</button>
				{/if}
			</label>

			<div id="desc-{item.id}" class="item-description">
				{item.description}
			</div>

			{#if item.guideContent && showGuide}
				<div id="guide-{item.id}" class="detailed-guide" class:show={showGuide}>
					<div class="guide-section">
						<div class="guide-title">
							{item.guideContent.title}
						</div>
						<div class="guide-content">
							{@html item.guideContent.content.replace(/\n/g, '<br>')}
						</div>

						{#if item.guideContent.examples}
							<div class="guide-examples">
								{#if item.guideContent.examples.good.length > 0}
									<div class="examples-section">
										<h5>✅ 良い例:</h5>
										{#each item.guideContent.examples.good as example}
											<div class="example-item good">{example}</div>
										{/each}
									</div>
								{/if}

								{#if item.guideContent.examples.bad.length > 0}
									<div class="examples-section">
										<h5>❌ 悪い例:</h5>
										{#each item.guideContent.examples.bad as example}
											<div class="example-item bad">{example}</div>
										{/each}
									</div>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.check-item {
		margin-bottom: var(--spacing-md);
		padding: var(--spacing-md);
		background: var(--surface-color);
		border-radius: var(--border-radius-sm);
		border-left: 4px solid var(--secondary-color);
		transition: all 0.2s ease;
	}

	.check-item:hover {
		background: rgba(52, 152, 219, 0.05);
		transform: translateX(2px);
	}

	.check-content {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-sm);
	}

	.checkbox-wrapper {
		margin-top: 2px;
		flex-shrink: 0;
	}

	.checkbox-wrapper input[type='checkbox'] {
		width: 18px;
		height: 18px;
		cursor: pointer;
		accent-color: var(--secondary-color);
	}

	.item-content {
		flex: 1;
		min-width: 0;
	}

	.item-title {
		font-weight: 600;
		color: var(--text-color);
		margin-bottom: var(--spacing-xs);
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		flex-wrap: wrap;
		cursor: pointer;
		line-height: 1.4;
	}

	.item-description {
		color: var(--text-muted);
		font-size: 0.9em;
		line-height: 1.4;
		margin-bottom: var(--spacing-xs);
	}

	.risk-indicator {
		padding: 2px 8px;
		border-radius: 12px;
		font-size: 0.8em;
		font-weight: bold;
		white-space: nowrap;
	}

	.risk-high {
		background: #ffebee;
		color: #c62828;
	}

	.risk-medium {
		background: #fff3e0;
		color: #ef6c00;
	}

	.risk-low {
		background: #e8f5e8;
		color: #2e7d32;
	}

	.guide-toggle {
		background: var(--secondary-color);
		color: white;
		border: none;
		padding: 4px 12px;
		border-radius: 15px;
		cursor: pointer;
		font-size: 0.8em;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	.guide-toggle:hover {
		background: #2980b9;
		transform: translateY(-1px);
	}

	.guide-toggle:focus {
		outline: 2px solid var(--secondary-color);
		outline-offset: 2px;
	}

	.detailed-guide {
		background: var(--bg-color);
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius-sm);
		padding: var(--spacing-md);
		margin-top: var(--spacing-sm);
		opacity: 0;
		transform: translateY(-10px);
		transition: all 0.3s ease;
	}

	.detailed-guide.show {
		opacity: 1;
		transform: translateY(0);
	}

	.guide-title {
		font-weight: bold;
		color: var(--text-color);
		margin-bottom: var(--spacing-sm);
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		font-size: 1.1em;
	}

	.guide-content {
		color: var(--text-color);
		line-height: 1.6;
		margin-bottom: var(--spacing-sm);
	}

	.guide-examples {
		background: var(--surface-color);
		padding: var(--spacing-sm);
		border-radius: var(--border-radius-sm);
		border-left: 4px solid var(--secondary-color);
	}

	.examples-section {
		margin-bottom: var(--spacing-sm);
	}

	.examples-section:last-child {
		margin-bottom: 0;
	}

	.examples-section h5 {
		font-size: 0.9em;
		font-weight: 600;
		margin: 0 0 var(--spacing-xs) 0;
		color: var(--text-color);
	}

	.example-item {
		padding: var(--spacing-xs) 0;
		border-bottom: 1px solid var(--border-color);
		font-size: 0.9em;
		line-height: 1.4;
	}

	.example-item:last-child {
		border-bottom: none;
	}

	.example-item.good {
		color: var(--success-color);
		font-weight: 500;
	}

	.example-item.bad {
		color: var(--accent-color);
		font-weight: 500;
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.check-item,
		.guide-toggle,
		.detailed-guide {
			transition: none;
		}
	}

	/* モバイル対応 */
	@media (max-width: 768px) {
		.check-item {
			padding: var(--spacing-sm);
		}

		.item-title {
			font-size: 0.95em;
		}

		.item-description {
			font-size: 0.85em;
		}

		.guide-toggle {
			padding: 3px 10px;
			font-size: 0.75em;
		}

		.detailed-guide {
			padding: var(--spacing-sm);
		}
	}
</style>
