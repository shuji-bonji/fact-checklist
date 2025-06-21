<script lang="ts">
	import { goto } from '$app/navigation';
	import { checklistStore } from '$lib/stores/checklistStore.svelte.js';
	import type { ChecklistHistoryItem, JudgmentType } from '$lib/types/checklist.js';

	// ストアから履歴を取得
	const history = $derived(checklistStore.history);
	let showAllHistory = $state(false);

	// 表示する履歴項目（最新5件 or 全件）
	const displayedHistory = $derived(
		showAllHistory ? checklistStore.getAllHistory() : history.slice(0, 5)
	);

	function loadHistoryItem(item: ChecklistHistoryItem) {
		goto(`/checklist/${item.id}`);
	}

	function deleteHistoryItem(item: ChecklistHistoryItem, event: Event) {
		event.stopPropagation(); // 親要素のクリックイベントを防ぐ
		if (confirm(`「${item.title}」を履歴から削除しますか？`)) {
			checklistStore.deleteFromHistory(item.id);
		}
	}

	function toggleHistoryView() {
		showAllHistory = !showAllHistory;
	}

	function createNewChecklist() {
		const id = checklistStore.createNewChecklist();
		goto(`/?id=${id}`);
	}

	// 判定タイプに応じたアイコンとスタイル
	function getJudgmentDisplay(judgment: JudgmentType) {
		switch (judgment) {
			case 'accept':
				return { icon: '✅', text: '採用', class: 'accept' };
			case 'caution':
				return { icon: '⚠️', text: '要注意', class: 'caution' };
			case 'reject':
				return { icon: '❌', text: '不採用', class: 'reject' };
			default:
				return { icon: '❓', text: '未判定', class: 'unknown' };
		}
	}

	// 日付フォーマット
	function formatDate(date: Date): string {
		return new Intl.DateTimeFormat('ja-JP', {
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date);
	}

	// 信頼度レベルに応じたクラス
	function getConfidenceClass(level: number): string {
		if (level >= 80) return 'high';
		if (level >= 60) return 'medium';
		if (level >= 40) return 'low';
		return 'very-low';
	}
</script>

<div class="history-sidebar">
	<!-- 新規作成ボタン -->
	<div class="new-checklist card">
		<button 
			class="btn btn-primary w-full"
			onclick={createNewChecklist}
		>
			➕ 新しいチェックリスト
		</button>
	</div>

	<!-- 履歴表示 -->
	<div class="history-section card">
		<div class="history-header">
			<h3>📚 評価履歴</h3>
			{#if history.length > 5}
				<button 
					class="toggle-view-btn"
					onclick={toggleHistoryView}
				>
					{showAllHistory ? '最新5件' : '全て表示'}
				</button>
			{/if}
		</div>

		{#if displayedHistory.length === 0}
			<div class="empty-state">
				<p>まだ評価履歴がありません。</p>
				<p class="text-muted">最初のチェックリストを作成しましょう！</p>
			</div>
		{:else}
			<div class="history-list">
				{#each displayedHistory as item (item.id)}
					<div 
						class="history-item"
						onclick={() => loadHistoryItem(item)}
						role="button"
						tabindex="0"
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								loadHistoryItem(item);
							}
						}}
					>
						<div class="item-header">
							<div class="item-title" title={item.title}>
								{item.title}
							</div>
							<button 
								class="delete-btn"
								onclick={(e) => deleteHistoryItem(item, e)}
								title="削除"
								aria-label="履歴から削除"
							>
								🗑️
							</button>
						</div>
						
						<div class="item-meta">
							<div class="completion-date">
								{formatDate(item.completedAt)}
							</div>
							<div class="score-summary">
								スコア: {item.score.total}/{item.score.maxScore}
							</div>
						</div>
						
						<div class="item-status">
							<div class="confidence-indicator {getConfidenceClass(item.confidenceLevel)}">
								{item.confidenceLevel}%
							</div>
							<div class="judgment-indicator {getJudgmentDisplay(item.judgment).class}">
								{getJudgmentDisplay(item.judgment).icon} 
								{getJudgmentDisplay(item.judgment).text}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.history-sidebar {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.card {
		background: var(--bg-color);
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		padding: var(--spacing-md);
	}

	/* 新規作成ボタン */
	.new-checklist {
		text-align: center;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-sm) var(--spacing-md);
		border: none;
		border-radius: 25px;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s ease;
		user-select: none;
		white-space: nowrap;
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-hover);
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--primary-color), #34495e);
		color: white;
	}

	.w-full {
		width: 100%;
	}

	/* 履歴セクション */
	.history-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--spacing-sm);
	}

	.history-header h3 {
		margin: 0;
		color: var(--text-color);
		font-size: 1.1em;
		font-weight: 600;
	}

	.toggle-view-btn {
		background: none;
		border: 1px solid var(--border-color);
		color: var(--text-muted);
		padding: 4px 8px;
		border-radius: 12px;
		cursor: pointer;
		font-size: 0.8em;
		transition: all 0.3s ease;
	}

	.toggle-view-btn:hover {
		background: var(--surface-color);
		color: var(--text-color);
	}

	/* 空の状態 */
	.empty-state {
		text-align: center;
		padding: var(--spacing-lg) var(--spacing-sm);
		color: var(--text-muted);
	}

	.empty-state p {
		margin: var(--spacing-xs) 0;
	}

	/* 履歴リスト */
	.history-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.history-item {
		padding: var(--spacing-sm);
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius-sm);
		cursor: pointer;
		transition: all 0.3s ease;
		background: var(--surface-color);
	}

	.history-item:hover {
		background: var(--bg-color);
		box-shadow: var(--shadow);
		transform: translateY(-1px);
	}

	.history-item:focus {
		outline: 2px solid var(--secondary-color);
		outline-offset: 2px;
	}

	.item-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--spacing-xs);
	}

	.item-title {
		font-weight: 600;
		font-size: 0.9em;
		color: var(--text-color);
		line-height: 1.3;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		flex: 1;
		margin-right: var(--spacing-xs);
	}

	.delete-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 2px;
		border-radius: 4px;
		font-size: 0.8em;
		opacity: 0.6;
		transition: all 0.3s ease;
		flex-shrink: 0;
	}

	.delete-btn:hover {
		opacity: 1;
		background: var(--accent-color);
		transform: scale(1.1);
	}

	.item-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--spacing-xs);
		font-size: 0.8em;
		color: var(--text-muted);
	}

	.item-status {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-xs);
	}

	.confidence-indicator {
		padding: 2px 6px;
		border-radius: 10px;
		font-size: 0.75em;
		font-weight: bold;
		text-align: center;
		min-width: 45px;
	}

	.confidence-indicator.high { background: #e8f5e8; color: #2e7d32; }
	.confidence-indicator.medium { background: #fff3e0; color: #ef6c00; }
	.confidence-indicator.low { background: #ffebee; color: #c62828; }
	.confidence-indicator.very-low { background: #ffebee; color: #c62828; }

	.judgment-indicator {
		padding: 2px 6px;
		border-radius: 10px;
		font-size: 0.75em;
		font-weight: bold;
		text-align: center;
	}

	.judgment-indicator.accept { background: #e8f5e8; color: #2e7d32; }
	.judgment-indicator.caution { background: #fff3e0; color: #ef6c00; }
	.judgment-indicator.reject { background: #ffebee; color: #c62828; }
	.judgment-indicator.unknown { background: var(--surface-color); color: var(--text-muted); }

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.card {
			padding: var(--spacing-sm);
		}

		.history-header h3 {
			font-size: 1em;
		}

		.toggle-view-btn {
			font-size: 0.75em;
			padding: 3px 6px;
		}

		.item-title {
			font-size: 0.85em;
		}

		.item-meta {
			font-size: 0.75em;
		}

		.confidence-indicator,
		.judgment-indicator {
			font-size: 0.7em;
			padding: 1px 4px;
			min-width: 40px;
		}
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.btn,
		.history-item,
		.delete-btn {
			transition: none;
		}
	}
</style>