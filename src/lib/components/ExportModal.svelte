<script lang="ts">
	import { onMount } from 'svelte';
	import type { ChecklistResult, ExportOptions } from '$lib/types/checklist.js';

	interface Props {
		checklist: ChecklistResult | null;
		onClose: () => void;
	}

	const { checklist, onClose }: Props = $props();

	const exportOptions = $state<ExportOptions>({
		format: 'pdf',
		includeGuides: true,
		includeNotes: true
	});

	let isExporting = $state(false);
	let modalElement: HTMLDivElement;

	onMount(() => {
		// ESCキーでモーダルを閉じる
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeydown);
		document.body.style.overflow = 'hidden'; // スクロールを無効化

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			document.body.style.overflow = '';
		};
	});

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === modalElement) {
			onClose();
		}
	}

	function updateExportOption<K extends keyof ExportOptions>(key: K, value: ExportOptions[K]) {
		exportOptions[key] = value;
	}

	async function exportChecklist() {
		if (!checklist) return;

		isExporting = true;
		try {
			switch (exportOptions.format) {
				case 'pdf':
					await exportToPDF();
					break;
				case 'html':
					await exportToHTML();
					break;
				case 'json':
					await exportToJSON();
					break;
			}
		} catch (error) {
			console.error('エクスポートエラー:', error);
			alert('エクスポートに失敗しました。');
		} finally {
			isExporting = false;
		}
	}

	async function exportToPDF() {
		if (!checklist) return;

		try {
			// html2canvasとjsPDFを動的インポート
			const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
				import('html2canvas'),
				import('jspdf')
			]);

			// PDF用のHTMLコンテンツを生成
			const htmlContent = generatePDFHTMLContent();

			// 一時的なコンテナを作成
			const tempContainer = document.createElement('div');
			tempContainer.innerHTML = htmlContent;
			tempContainer.style.position = 'absolute';
			tempContainer.style.left = '-9999px';
			tempContainer.style.top = '0';
			tempContainer.style.width = '210mm'; // A4幅
			tempContainer.style.backgroundColor = 'white';
			tempContainer.style.padding = '20px';
			tempContainer.style.boxSizing = 'border-box';

			document.body.appendChild(tempContainer);

			try {
				// HTMLをCanvasに変換
				const canvas = await html2canvas(tempContainer, {
					scale: 2, // 高解像度
					useCORS: true,
					allowTaint: true,
					backgroundColor: 'white',
					width: tempContainer.scrollWidth,
					height: tempContainer.scrollHeight
				});

				// PDFを作成
				const pdf = new jsPDF('p', 'mm', 'a4');
				const pageWidth = pdf.internal.pageSize.getWidth();
				const pageHeight = pdf.internal.pageSize.getHeight();

				// 画像データを取得
				const imgData = canvas.toDataURL('image/png');
				const imgWidth = pageWidth - 20; // 両側10mmのマージン
				const imgHeight = (canvas.height * imgWidth) / canvas.width;

				let heightLeft = imgHeight;
				let position = 10; // 上マージン

				// 最初のページに画像を追加
				pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
				heightLeft -= pageHeight - 20; // 上下マージンを考慮

				// 必要に応じて追加ページを作成
				while (heightLeft >= 0) {
					position = heightLeft - imgHeight + 10;
					pdf.addPage();
					pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
					heightLeft -= pageHeight - 20;
				}

				// ダウンロード
				const filename = `事実確認チェックシート_${checklist.title.replace(/[^\w\s]/gi, '')}_${new Date().toISOString().slice(0, 10)}.pdf`;
				pdf.save(filename);
			} finally {
				// 一時コンテナを削除
				document.body.removeChild(tempContainer);
			}
		} catch (error) {
			console.error('PDF生成エラー:', error);
			throw error;
		}
	}

	function generatePDFHTMLContent(): string {
		if (!checklist) return '';

		const checkedItems = checklist.items.filter(item => item.checked);
		const uncheckedItems = checklist.items.filter(item => !item.checked);

		return `
			<div style="
				font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', 'Takao Gothic', 'IPAexGothic', 'IPAPGothic', 'VL PGothic', 'Noto Sans CJK JP', sans-serif;
				font-size: 14px;
				line-height: 1.6;
				color: #333;
				background: white;
				max-width: 170mm;
				margin: 0 auto;
			">
				<!-- ヘッダー -->
				<div style="border-bottom: 3px solid #2c3e50; padding-bottom: 15px; margin-bottom: 25px;">
					<h1 style="
						color: #2c3e50; 
						margin: 0 0 10px 0; 
						font-size: 24px; 
						font-weight: bold;
						line-height: 1.3;
					">${checklist.title}</h1>
					<div style="font-size: 12px; color: #666;">
						<p style="margin: 5px 0;">作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}</p>
						${checklist.completedAt ? `<p style="margin: 5px 0;">評価完了日: ${checklist.completedAt.toLocaleDateString('ja-JP')}</p>` : ''}
					</div>
				</div>

				<!-- 評価結果 -->
				<div style="
					background: #f8f9fa; 
					padding: 20px; 
					border-radius: 8px; 
					margin-bottom: 25px;
					border-left: 4px solid #3498db;
				">
					<h2 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 18px;">📊 評価結果</h2>
					<div style="font-size: 13px; line-height: 1.8;">
						<p style="margin: 8px 0;"><strong>総合スコア:</strong> ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)</p>
						<p style="margin: 8px 0;"><strong>信頼度:</strong> ${checklist.confidenceText}</p>
						<p style="margin: 8px 0;"><strong>最終判定:</strong> <span style="font-weight: bold; color: ${getJudgmentColor(checklist.judgment)};">${getJudgmentText(checklist.judgment)}</span></p>
						${checklist.judgmentAdvice ? `<p style="margin: 8px 0;"><strong>推奨:</strong> ${checklist.judgmentAdvice}</p>` : ''}
					</div>
				</div>

				<!-- チェック済み項目 -->
				${
					checkedItems.length > 0
						? `
				<div style="margin-bottom: 25px;">
					<h2 style="
						color: #27ae60; 
						border-left: 4px solid #27ae60; 
						padding-left: 15px; 
						margin: 0 0 15px 0; 
						font-size: 16px;
					">✅ チェック済み項目 (${checkedItems.length}件)</h2>
					${checkedItems
						.map(
							item => `
						<div style="
							margin: 12px 0; 
							padding: 15px; 
							background: #d5f4e6; 
							border-radius: 5px; 
							border-left: 4px solid #27ae60;
							page-break-inside: avoid;
						">
							<div style="font-weight: bold; margin-bottom: 5px; color: #27ae60;">
								${item.title}
							</div>
							<div style="margin-bottom: 8px; color: #2c3e50; font-size: 13px;">
								${item.description}
							</div>
							${
								exportOptions.includeGuides && item.guideContent
									? `
								<div style="font-size: 11px; color: #666; font-style: italic; margin-top: 8px;">
									📖 ガイド: ${item.guideContent.content}
								</div>
							`
									: ''
							}
						</div>
					`
						)
						.join('')}
				</div>
				`
						: ''
				}

				<!-- 未チェック項目 -->
				${
					uncheckedItems.length > 0
						? `
				<div style="margin-bottom: 25px;">
					<h2 style="
						color: #e74c3c; 
						border-left: 4px solid #e74c3c; 
						padding-left: 15px; 
						margin: 0 0 15px 0; 
						font-size: 16px;
					">❌ 未チェック項目 (${uncheckedItems.length}件)</h2>
					${uncheckedItems
						.map(
							item => `
						<div style="
							margin: 12px 0; 
							padding: 15px; 
							background: #ffeaa7; 
							border-radius: 5px; 
							border-left: 4px solid #e17055;
							page-break-inside: avoid;
						">
							<div style="font-weight: bold; margin-bottom: 5px; color: #e74c3c;">
								${item.title}
							</div>
							<div style="margin-bottom: 8px; color: #2c3e50; font-size: 13px;">
								${item.description}
							</div>
							${
								exportOptions.includeGuides && item.guideContent
									? `
								<div style="font-size: 11px; color: #666; font-style: italic; margin-top: 8px;">
									📖 ガイド: ${item.guideContent.content}
								</div>
							`
									: ''
							}
						</div>
					`
						)
						.join('')}
				</div>
				`
						: ''
				}

				<!-- 評価メモ -->
				${
					exportOptions.includeNotes && checklist.notes
						? `
				<div style="
					background: #e8f4fd; 
					padding: 20px; 
					border-radius: 8px; 
					margin-top: 25px;
					border-left: 4px solid #3498db;
				">
					<h2 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 16px;">📝 評価メモ</h2>
					<div style="font-size: 13px; line-height: 1.7; white-space: pre-wrap;">
						${checklist.notes}
					</div>
				</div>
				`
						: ''
				}

				<!-- フッター -->
				<div style="
					margin-top: 30px; 
					text-align: center; 
					color: #666; 
					border-top: 1px solid #ddd; 
					padding-top: 15px;
					font-size: 11px;
				">
					実用的事実確認チェックシートによる評価 - ${new Date().toLocaleDateString('ja-JP')}
				</div>
			</div>
		`;
	}

	function getJudgmentColor(judgment: string | null): string {
		switch (judgment) {
			case 'accept':
				return '#27ae60';
			case 'caution':
				return '#f39c12';
			case 'reject':
				return '#e74c3c';
			default:
				return '#95a5a6';
		}
	}

	async function exportToHTML() {
		if (!checklist) return;

		const html = generateHTMLContent();
		const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
		const filename = `事実確認チェックシート_${checklist.title}_${new Date().toISOString().slice(0, 10)}.html`;
		downloadBlob(blob, filename);
	}

	async function exportToJSON() {
		if (!checklist) return;

		// エクスポート用のクリーンなオブジェクトを作成
		const exportData = {
			title: checklist.title,
			description: checklist.description,
			notes: checklist.notes,
			createdAt: checklist.createdAt.toISOString(),
			completedAt: checklist.completedAt?.toISOString() || null,
			judgment: checklist.judgment,
			score: checklist.score,
			confidenceLevel: checklist.confidenceLevel,
			confidenceText: checklist.confidenceText,
			judgmentAdvice: checklist.judgmentAdvice,
			items: checklist.items,
			exportedAt: new Date().toISOString(),
			version: '1.0'
		};

		const jsonString = JSON.stringify(exportData, null, 2);
		const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
		const filename = `事実確認チェックシート_${checklist.title}_${new Date().toISOString().slice(0, 10)}.json`;
		downloadBlob(blob, filename);
	}

	function generateHTMLContent(): string {
		if (!checklist) return '';

		const checkedItems = checklist.items.filter(item => item.checked);
		const uncheckedItems = checklist.items.filter(item => !item.checked);

		return `
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>事実確認チェックシート - ${checklist.title}</title>
	<style>
		body { 
			font-family: "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif; 
			margin: 40px; 
			line-height: 1.6; 
			color: #333; 
			background: #fff;
		}
		.header { 
			border-bottom: 2px solid #2c3e50; 
			padding-bottom: 20px; 
			margin-bottom: 30px; 
		}
		.header h1 { 
			color: #2c3e50; 
			margin: 0 0 10px 0; 
			font-size: 24px;
		}
		.meta-info {
			font-size: 14px;
			color: #666;
		}
		.score-summary { 
			background: #f8f9fa; 
			padding: 20px; 
			border-radius: 8px; 
			margin-bottom: 30px;
			border-left: 4px solid #3498db;
		}
		.score-summary h2 {
			margin-top: 0;
			color: #2c3e50;
		}
		.check-section { 
			margin-bottom: 30px; 
		}
		.check-section h2 { 
			color: #34495e; 
			border-left: 4px solid #3498db; 
			padding-left: 15px; 
			margin-bottom: 15px;
		}
		.check-item { 
			margin: 15px 0; 
			padding: 15px; 
			border-radius: 5px; 
			border-left: 4px solid #ddd;
		}
		.check-item.checked { 
			background: #d5f4e6; 
			border-left-color: #27ae60; 
		}
		.check-item.unchecked { 
			background: #ffeaa7; 
			border-left-color: #e17055; 
		}
		.check-item-title {
			font-weight: bold;
			margin-bottom: 5px;
		}
		.check-item-description {
			margin-bottom: 10px;
			color: #555;
		}
		.check-item-guide {
			font-size: 12px;
			color: #777;
			font-style: italic;
		}
		.notes { 
			background: #e8f4fd; 
			padding: 20px; 
			border-radius: 8px; 
			margin-top: 30px; 
			border-left: 4px solid #3498db;
		}
		.notes h2 {
			margin-top: 0;
		}
		.footer {
			margin-top: 40px; 
			text-align: center; 
			color: #666; 
			border-top: 1px solid #ddd; 
			padding-top: 20px;
			font-size: 12px;
		}
		@media print { 
			body { 
				margin: 20px; 
			} 
			.check-item {
				page-break-inside: avoid;
			}
		}
	</style>
</head>
<body>
	<div class="header">
		<h1>${checklist.title}</h1>
		<div class="meta-info">
			<p>作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}</p>
			<p>評価完了日: ${checklist.completedAt?.toLocaleDateString('ja-JP') || '未完了'}</p>
		</div>
	</div>
	
	<div class="score-summary">
		<h2>評価結果</h2>
		<p><strong>総合スコア:</strong> ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)</p>
		<p><strong>信頼度:</strong> ${checklist.confidenceText}</p>
		<p><strong>最終判定:</strong> ${getJudgmentText(checklist.judgment)}</p>
		${checklist.judgmentAdvice ? `<p><strong>推奨:</strong> ${checklist.judgmentAdvice}</p>` : ''}
	</div>

	<div class="check-section">
		<h2>チェック済み項目 (${checkedItems.length}件)</h2>
		${checkedItems
			.map(
				item => `
			<div class="check-item checked">
				<div class="check-item-title">✅ ${item.title}</div>
				<div class="check-item-description">${item.description}</div>
				${
					exportOptions.includeGuides && item.guideContent
						? `<div class="check-item-guide">ガイド: ${item.guideContent.content}</div>`
						: ''
				}
			</div>
		`
			)
			.join('')}
	</div>

	<div class="check-section">
		<h2>未チェック項目 (${uncheckedItems.length}件)</h2>
		${uncheckedItems
			.map(
				item => `
			<div class="check-item unchecked">
				<div class="check-item-title">❌ ${item.title}</div>
				<div class="check-item-description">${item.description}</div>
				${
					exportOptions.includeGuides && item.guideContent
						? `<div class="check-item-guide">ガイド: ${item.guideContent.content}</div>`
						: ''
				}
			</div>
		`
			)
			.join('')}
	</div>

	${
		exportOptions.includeNotes && checklist.notes
			? `
		<div class="notes">
			<h2>評価メモ</h2>
			<p>${checklist.notes.replace(/\n/g, '<br>')}</p>
		</div>
	`
			: ''
	}

	<div class="footer">
		<p>実用的事実確認チェックシートによる評価 - ${new Date().toLocaleDateString('ja-JP')}</p>
	</div>
</body>
</html>
		`.trim();
	}

	function downloadBlob(blob: Blob, filename: string) {
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	function getJudgmentText(judgment: string | null): string {
		switch (judgment) {
			case 'accept':
				return '採用';
			case 'caution':
				return '要注意';
			case 'reject':
				return '不採用';
			default:
				return '未判定';
		}
	}

	async function copyToClipboard() {
		if (!checklist) return;

		const text = `
事実確認評価結果

タイトル: ${checklist.title}
作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}
総合スコア: ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)
信頼度: ${checklist.confidenceText}
最終判定: ${getJudgmentText(checklist.judgment)}

チェック済み項目: ${checklist.items.filter(i => i.checked).length}件
未チェック項目: ${checklist.items.filter(i => !i.checked).length}件

${checklist.notes ? `評価メモ:\n${checklist.notes}` : ''}
		`.trim();

		try {
			await navigator.clipboard.writeText(text);
			alert('クリップボードにコピーしました');
		} catch (error) {
			console.error('コピーに失敗:', error);
			alert('コピーに失敗しました');
		}
	}
</script>

<div
	class="modal-backdrop"
	bind:this={modalElement}
	onclick={handleBackdropClick}
	onkeydown={e => {
		if (e.key === 'Escape') {
			onClose();
		}
	}}
	role="dialog"
	aria-modal="true"
	aria-labelledby="modal-title"
	tabindex="-1"
>
	<div class="modal-content">
		<div class="modal-header">
			<h2 id="modal-title">📄 エクスポート・共有</h2>
			<button class="close-btn" onclick={onClose} aria-label="閉じる"> ✕ </button>
		</div>

		<div class="modal-body">
			<!-- フォーマット選択 -->
			<div class="option-group">
				<h3>出力形式</h3>
				<div class="format-options">
					<label class="radio-option">
						<input
							type="radio"
							name="format"
							value="pdf"
							checked={exportOptions.format === 'pdf'}
							onchange={() => updateExportOption('format', 'pdf')}
						/>
						<span>📄 PDF</span>
						<small>印刷・共有に最適</small>
					</label>

					<label class="radio-option">
						<input
							type="radio"
							name="format"
							value="html"
							checked={exportOptions.format === 'html'}
							onchange={() => updateExportOption('format', 'html')}
						/>
						<span>🌐 HTML</span>
						<small>ブラウザで表示可能</small>
					</label>

					<label class="radio-option">
						<input
							type="radio"
							name="format"
							value="json"
							checked={exportOptions.format === 'json'}
							onchange={() => updateExportOption('format', 'json')}
						/>
						<span>📊 JSON</span>
						<small>データ形式（開発者向け）</small>
					</label>
				</div>
			</div>

			<!-- 含める内容 -->
			<div class="option-group">
				<h3>含める内容</h3>
				<div class="checkbox-options">
					<label class="checkbox-option">
						<input
							type="checkbox"
							checked={exportOptions.includeGuides}
							onchange={e =>
								updateExportOption('includeGuides', (e.target as HTMLInputElement).checked)}
						/>
						<span>📖 ガイド情報を含める</span>
					</label>

					<label class="checkbox-option">
						<input
							type="checkbox"
							checked={exportOptions.includeNotes}
							onchange={e =>
								updateExportOption('includeNotes', (e.target as HTMLInputElement).checked)}
						/>
						<span>📝 評価メモを含める</span>
					</label>
				</div>
			</div>

			<!-- アクションボタン -->
			<div class="action-buttons">
				<button class="btn btn-primary" onclick={exportChecklist} disabled={isExporting}>
					{#if isExporting}
						⏳ エクスポート中...
					{:else}
						📥 ダウンロード
					{/if}
				</button>

				<button class="btn btn-secondary" onclick={copyToClipboard} disabled={isExporting}>
					📋 コピー
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
	}

	.modal-content {
		background: var(--bg-color);
		border-radius: var(--border-radius);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
		width: 100%;
		max-width: 500px;
		max-height: 90vh;
		overflow-y: auto;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 24px;
		border-bottom: 1px solid var(--border-color);
	}

	.modal-header h2 {
		margin: 0;
		color: var(--text-color);
		font-size: 1.25rem;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--text-muted);
		transition: color 0.2s ease;
		padding: 4px;
		border-radius: 4px;
	}

	.close-btn:hover {
		color: var(--text-color);
		background: var(--hover-color);
	}

	.modal-body {
		padding: 24px;
	}

	.option-group {
		margin-bottom: 24px;
	}

	.option-group h3 {
		margin: 0 0 12px 0;
		color: var(--text-color);
		font-size: 1rem;
		font-weight: 600;
	}

	.format-options {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.radio-option,
	.checkbox-option {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px;
		border: 2px solid var(--border-color);
		border-radius: var(--border-radius);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.radio-option:hover,
	.checkbox-option:hover {
		border-color: var(--primary-color);
		background: var(--hover-color);
	}

	.radio-option:has(input:checked) {
		border-color: var(--primary-color);
		background: var(--primary-light);
	}

	.radio-option input,
	.checkbox-option input {
		margin: 0;
	}

	.radio-option span,
	.checkbox-option span {
		font-weight: 500;
		color: var(--text-color);
	}

	.radio-option small {
		color: var(--text-muted);
		font-size: 0.875rem;
		margin-left: auto;
	}

	.checkbox-options {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.action-buttons {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}

	.btn {
		flex: 1;
		min-width: 120px;
		padding: 12px 20px;
		border: none;
		border-radius: var(--border-radius);
		font-size: 0.95rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.btn-primary {
		background: var(--primary-color);
		color: white;
	}

	.btn-primary:hover:not(:disabled) {
		background: var(--primary-dark);
		transform: translateY(-1px);
	}

	.btn-secondary {
		background: var(--secondary-color);
		color: var(--text-color);
		border: 1px solid var(--border-color);
	}

	.btn-secondary:hover:not(:disabled) {
		background: var(--secondary-dark);
		transform: translateY(-1px);
	}

	/* ダークモード対応 */
	@media (prefers-color-scheme: dark) {
		.modal-content {
			box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
		}
	}

	/* レスポンシブ対応 */
	@media (max-width: 600px) {
		.modal-backdrop {
			padding: 10px;
		}

		.modal-header,
		.modal-body {
			padding: 16px;
		}

		.action-buttons {
			flex-direction: column;
		}

		.btn {
			min-width: auto;
		}
	}
</style>
