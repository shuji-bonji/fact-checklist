<script lang="ts">
	import type { CheckCategory, CheckItem } from '$lib/types/checklist.js';
	import CheckItemComponent from './CheckItem.svelte';

	interface Props {
		category: CheckCategory;
		items: CheckItem[];
		collapsed?: boolean;
		showGuideMode?: boolean;
		onToggle: () => void;
		onCheckItem: (itemId: string, checked: boolean) => void;
	}

	const {
		category,
		items,
		collapsed = false,
		showGuideMode = false,
		onToggle,
		onCheckItem
	}: Props = $props();

	// カテゴリ別のスタイルクラス
	const categoryClasses = {
		critical: 'critical',
		detailed: 'important',
		verification: 'verification',
		context: 'context'
	};

	const categoryClass = categoryClasses[category.id as keyof typeof categoryClasses] || 'default';
</script>

<div class="section">
	<button
		class="section-header {categoryClass}"
		onclick={onToggle}
		aria-expanded={!collapsed}
		aria-controls="section-{category.id}"
	>
		<span class="section-title">
			{category.emoji}
			{category.name}
		</span>
		<span class="section-description">
			{category.description}
		</span>
		<span class="toggle-icon" class:rotated={!collapsed}> ▼ </span>
	</button>

	<div id="section-{category.id}" class="collapsible-content" class:collapsed>
		<div class="section-content">
			{#each items as item (item.id)}
				<CheckItemComponent
					{item}
					{showGuideMode}
					onCheckChange={checked => onCheckItem(item.id, checked)}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.section {
		margin-bottom: var(--spacing-lg);
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius);
		overflow: hidden;
		transition: all 0.3s ease;
		background: var(--bg-color);
	}

	.section:hover {
		box-shadow: var(--shadow-hover);
	}

	.section-header {
		width: 100%;
		padding: 20px 25px;
		border: none;
		background: none;
		text-align: left;
		cursor: pointer;
		user-select: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: white;
		font-weight: bold;
		font-size: 1.2em;
		transition: all 0.3s ease;
		position: relative;
	}

	.section-header:hover {
		filter: brightness(1.1);
	}

	.section-header:focus {
		outline: 2px solid rgba(255, 255, 255, 0.5);
		outline-offset: -2px;
	}

	.section-header.critical {
		background: linear-gradient(135deg, #e74c3c, #c0392b);
	}

	.section-header.important {
		background: linear-gradient(135deg, #f39c12, #e67e22);
	}

	.section-header.verification {
		background: linear-gradient(135deg, #3498db, #2980b9);
	}

	.section-header.context {
		background: linear-gradient(135deg, #9b59b6, #8e44ad);
	}

	.section-title {
		font-size: 1.2em;
		font-weight: 700;
		margin-bottom: 4px;
	}

	.section-description {
		font-size: 0.9em;
		opacity: 0.9;
		font-weight: 400;
		display: block;
		margin-top: 4px;
	}

	.toggle-icon {
		font-size: 1em;
		transition: transform 0.3s ease;
		margin-left: var(--spacing-sm);
	}

	.toggle-icon.rotated {
		transform: rotate(180deg);
	}

	.collapsible-content {
		max-height: 2000px;
		overflow: hidden;
		transition: max-height 0.4s ease-out;
	}

	.collapsible-content.collapsed {
		max-height: 0;
	}

	.section-content {
		padding: var(--spacing-lg);
		background: var(--bg-color);
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.section-header,
		.toggle-icon,
		.collapsible-content {
			transition: none;
		}
	}

	/* モバイル対応 */
	@media (max-width: 768px) {
		.section-header {
			padding: 15px 20px;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-xs);
		}

		.toggle-icon {
			position: absolute;
			top: 50%;
			right: 20px;
			transform: translateY(-50%);
			margin-left: 0;
		}

		.toggle-icon.rotated {
			transform: translateY(-50%) rotate(180deg);
		}

		.section-content {
			padding: var(--spacing-md);
		}
	}
</style>
