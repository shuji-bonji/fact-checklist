<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { checklistStore } from '$lib/stores/checklistStore.svelte.js';
	import { CATEGORIES } from '$lib/data/checklist-items.js';
	import type { ChecklistResult, JudgmentType } from '$lib/types/checklist.js';

	import ExportModal from '$lib/components/ExportModal.svelte';

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

	function loadChecklist() {
		if (!checklistId) {
			goto(base || '/');
			return;
		}

		const loaded = checklistStore.loadChecklist(checklistId);
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
				return { icon: '✅', text: '採用', class: 'accept' };
			case 'caution':
				return { icon: '⚠️', text: '要注意', class: 'caution' };
			case 'reject':
				return { icon: '❌', text: '不採用', class: 'reject' };
			default:
				return { icon: '❓', text: '未判定', class: 'unknown' };
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
</script>

<svelte:head>
	<title>{checklist?.title || 'チェックリスト詳細'} - 実用的事実確認チェックシート</title>
	<meta name="description" content="事実確認チェックリストの評価結果" />
</svelte:head>

{#if loading}
	<div class="loading-container">
		<div class="spinner"></div>
		<p>読み込み中...</p>
	</div>
{:else if checklist}
	<div class="container">
		<!-- 完了通知バナー -->
		{#if isCompleted}
			<div class="completion-banner">
				<div class="banner-content">
					<span class="banner-icon">🎉</span>
					<div class="banner-text">
						<h3>評価が完了しました！</h3>
						<p>チェックリストの評価結果を確認できます。</p>
					</div>
				</div>
			</div>
		{/if}

		<!-- ヘッダー -->
		<header class="detail-header">
			<div class="header-content">
				<h1>{checklist.title}</h1>
				{#if checklist.description}
					<p class="description">{checklist.description}</p>
				{/if}

				<div class="meta-info">
					<span class="meta-item">
						📅 作成: {checklist.createdAt.toLocaleDateString('ja-JP')}
					</span>
					{#if checklist.completedAt}
						<span class="meta-item">
							✅ 完了: {checklist.completedAt.toLocaleDateString('ja-JP')}
						</span>
					{/if}
					<span class="meta-item">
						🔄 更新: {checklist.updatedAt.toLocaleDateString('ja-JP')}
					</span>
				</div>
			</div>

			<div class="header-actions">
				<button class="btn btn-secondary" onclick={editChecklist}> ✏️ 編集 </button>
				<button class="btn btn-primary" onclick={() => (showExportModal = true)}>
					📄 エクスポート
				</button>
				<button class="btn btn-success" onclick={createNewChecklist}> ➕ 新規作成 </button>
			</div>
		</header>

		<div class="main-content grid grid-2">
			<!-- 評価結果 -->
			<div class="results-area">
				<!-- スコアサマリー -->
				<div class="score-summary card">
					<h2>📊 評価結果</h2>

					<div class="score-grid">
						<div class="score-card critical">
							<div class="score-icon">🚨</div>
							<div class="score-info">
								<div class="score-label">クリティカル</div>
								<div class="score-value">{checklist.score.critical}/6</div>
							</div>
						</div>

						<div class="score-card detailed">
							<div class="score-icon">📝</div>
							<div class="score-info">
								<div class="score-label">詳細評価</div>
								<div class="score-value">{checklist.score.detailed}/6</div>
							</div>
						</div>

						<div class="score-card verification">
							<div class="score-icon">🔍</div>
							<div class="score-info">
								<div class="score-label">検証・照合</div>
								<div class="score-value">{checklist.score.verification}/4</div>
							</div>
						</div>

						<div class="score-card context">
							<div class="score-icon">🌐</div>
							<div class="score-info">
								<div class="score-label">文脈・バイアス</div>
								<div class="score-value">{checklist.score.context}/4</div>
							</div>
						</div>
					</div>

					<div class="total-score-display">
						<div class="total-score">
							<span class="total-label">総合スコア</span>
							<span class="total-value">{checklist.score.total}/{checklist.score.maxScore}</span>
						</div>

						<div class="confidence-display">
							<div class="confidence-meter">
								<div
									class="confidence-bar {getConfidenceClass(checklist.confidenceLevel)}"
									style="width: {checklist.confidenceLevel}%"
								></div>
							</div>
							<div class="confidence-text">
								信頼度: {checklist.confidenceLevel}% ({checklist.confidenceText})
							</div>
						</div>
					</div>

					{#if checklist.judgment}
						<div class="final-judgment {getJudgmentDisplay(checklist.judgment).class}">
							<span class="judgment-icon">{getJudgmentDisplay(checklist.judgment).icon}</span>
							<span class="judgment-text"
								>最終判定: {getJudgmentDisplay(checklist.judgment).text}</span
							>
						</div>
					{/if}
				</div>

				<!-- チェック項目詳細 -->
				<div class="items-detail card">
					<h2>📋 チェック項目詳細</h2>

					{#each CATEGORIES as category (category.id)}
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
										style="animation-delay: {getItemDelay(index)}"
									>
										<div class="item-status">
											{item.checked ? '✅' : '❌'}
										</div>
										<div class="item-content">
											<div class="item-title">{item.title}</div>
											<div class="item-description">{item.description}</div>
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
						<h2>📝 評価メモ</h2>
						<div class="notes-content">
							{@html checklist.notes.replace(/\n/g, '<br>')}
						</div>
					</div>
				{/if}
			</div>

			<!-- 推奨アクション -->
			<div class="sidebar">
				<div class="recommendations card">
					<h3>💡 推奨アクション</h3>
					<div class="advice-content">
						{checklist.judgmentAdvice}
					</div>

					{#if checklist.confidenceLevel < 60}
						<div class="improvement-tips">
							<h4>信頼性向上のために:</h4>
							<ul>
								<li>未チェック項目の確認</li>
								<li>追加の情報源調査</li>
								<li>専門家への確認</li>
								<li>ファクトチェック機関の活用</li>
							</ul>
						</div>
					{/if}
				</div>

				<!-- 統計情報 -->
				<div class="statistics card">
					<h3>📈 統計情報</h3>
					<div class="stat-list">
						<div class="stat-item">
							<span class="stat-label">チェック済み</span>
							<span class="stat-value">
								{checklist.items.filter(i => i.checked).length}項目
							</span>
						</div>
						<div class="stat-item">
							<span class="stat-label">未チェック</span>
							<span class="stat-value">
								{checklist.items.filter(i => !i.checked).length}項目
							</span>
						</div>
						<div class="stat-item">
							<span class="stat-label">完了率</span>
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
					<h3>🔧 アクション</h3>
					<div class="action-buttons">
						<button class="btn btn-primary w-full" onclick={() => (showExportModal = true)}>
							📄 エクスポート・共有
						</button>
						<button class="btn btn-secondary w-full" onclick={editChecklist}> ✏️ 再編集 </button>
						<button class="btn btn-success w-full" onclick={createNewChecklist}>
							➕ 新しいチェックリスト
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
		<button class="btn btn-primary" onclick={() => goto(base || '/')}> 🏠 ホームに戻る </button>
	</div>
{/if}

<style>
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 20px;
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
		gap: var(--spacing-lg);
		align-items: start;
	}

	.card {
		background: var(--bg-color);
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		padding: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
	}

	.card h2,
	.card h3 {
		margin: 0 0 var(--spacing-md) 0;
		color: var(--text-color);
	}

	/* スコアサマリー */
	.score-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-md);
	}

	.score-card {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		padding: var(--spacing-sm);
		border-radius: var(--border-radius-sm);
		border-left: 4px solid;
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
		background: var(--surface-color);
		padding: var(--spacing-md);
		border-radius: var(--border-radius-sm);
		margin-bottom: var(--spacing-md);
	}

	.total-score {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--spacing-sm);
	}

	.total-label {
		font-size: 1.1em;
		font-weight: 600;
		color: var(--text-color);
	}

	.total-value {
		font-size: 1.3em;
		font-weight: bold;
		color: var(--text-color);
	}

	.confidence-meter {
		width: 100%;
		height: 8px;
		background: var(--border-color);
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: var(--spacing-xs);
	}

	.confidence-bar {
		height: 100%;
		transition: width 0.5s ease;
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
		font-size: 0.9em;
		color: var(--text-muted);
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
		top: 20px;
	}

	.advice-content {
		padding: var(--spacing-sm);
		background: var(--surface-color);
		border-radius: var(--border-radius-sm);
		border-left: 4px solid var(--secondary-color);
		color: var(--text-color);
		line-height: 1.5;
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
		gap: var(--spacing-xs);
		padding: var(--spacing-sm) var(--spacing-md);
		border: none;
		border-radius: 25px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-hover);
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--primary-color), #34495e);
		color: white;
	}
	.btn-secondary {
		background: linear-gradient(135deg, var(--secondary-color), #2980b9);
		color: white;
	}
	.btn-success {
		background: linear-gradient(135deg, var(--success-color), #229954);
		color: white;
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

	@media (max-width: 768px) {
		.container {
			padding: 10px;
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
