<!-- src/lib/components/ExportModal.svelte -->
<script lang="ts">
	import type { ChecklistResult, CheckItem } from '$lib/types/checklist.js';
	import { CATEGORIES } from '$lib/data/checklist-items.js';
	import { PWAAwarePDFExporter } from '$lib/utils/pwaAwarePDFExporter.js';
	import {
		ReliablePDFGenerator,
		type ReliablePDFOptions
	} from '$lib/utils/reliablePDFGenerator.js';
	import { platformStore } from '$lib/stores/platformStore.svelte.js';

	interface Props {
		checklist: ChecklistResult | null;
		onClose: () => void;
	}

	interface ExportOptions {
		format: 'pdf' | 'html' | 'json' | 'markdown';
		includeGuides: boolean;
		includeNotes: boolean;
		includeSummary: boolean;
		sectionBreaks: boolean; // セクションごとのページブレイク
		textMode: boolean; // PDF生成モード: true=テキストベース, false=画像ベース
		advancedMode: boolean; // 高度なPDF機能を使用するか
		reliableMode: boolean; // 確実な日本語フォント対応
	}

	const { checklist, onClose }: Props = $props();

	let modalElement: HTMLDivElement;
	let isExporting = $state(false);

	// PWA対応PDF生成器
	const pdfExporter = new PWAAwarePDFExporter();
	const reliablePDFGenerator = new ReliablePDFGenerator();
	const supportedFeatures = $derived(pdfExporter.getSupportedFeatures());

	// エクスポートオプション（個別の状態として管理）
	let format = $state<'pdf' | 'html' | 'json' | 'markdown'>('pdf');
	let includeGuides = $state(true);
	let includeNotes = $state(true);
	let includeSummary = $state(true);
	let sectionBreaks = $state(true);
	let textMode = $state(true); // デフォルトはテキストベース
	let advancedMode = $state(false); // 高度なモード
	let reliableMode = $state(true); // デフォルトで確実モードを有効

	// リアクティブなエクスポートオプション
	const exportOptions = $derived<ExportOptions>({
		format,
		includeGuides,
		includeNotes,
		includeSummary,
		sectionBreaks,
		textMode,
		advancedMode,
		reliableMode
	});

	function updateExportOption<K extends keyof ExportOptions>(key: K, value: ExportOptions[K]) {
		switch (key) {
			case 'format':
				format = value as 'pdf' | 'html' | 'json' | 'markdown';
				break;
			case 'includeGuides':
				includeGuides = value as boolean;
				break;
			case 'includeNotes':
				includeNotes = value as boolean;
				break;
			case 'includeSummary':
				includeSummary = value as boolean;
				break;
			case 'sectionBreaks':
				sectionBreaks = value as boolean;
				break;
			case 'textMode':
				textMode = value as boolean;
				break;
			case 'advancedMode':
				advancedMode = value as boolean;
				break;
			case 'reliableMode':
				reliableMode = value as boolean;
				break;
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === modalElement) {
			onClose();
		}
	}

	// セクション別にアイテムを分類（リアクティブ）
	const sections = $derived(
		checklist
			? CATEGORIES.map(category => {
					const items = checklist.items.filter(item => item.category.id === category.id);
					const checkedItems = items.filter(item => item.checked);
					const uncheckedItems = items.filter(item => !item.checked);

					return {
						category,
						items,
						checkedItems,
						uncheckedItems,
						completionRate:
							items.length > 0 ? Math.round((checkedItems.length / items.length) * 100) : 0
					};
				})
			: []
	);

	// 従来の関数も残しておく（HTML生成時に使用）
	function groupItemsByCategory() {
		if (!checklist) return [];

		return CATEGORIES.map(category => {
			const items = checklist.items.filter(item => item.category.id === category.id);
			const checkedItems = items.filter(item => item.checked);
			const uncheckedItems = items.filter(item => !item.checked);

			return {
				category,
				items,
				checkedItems,
				uncheckedItems,
				completionRate:
					items.length > 0 ? Math.round((checkedItems.length / items.length) * 100) : 0
			};
		});
	}

	// HTML生成用のヘルパー関数
	function renderCheckItem(item: CheckItem): string {
		return `
			<div class="check-item ${item.checked ? 'checked' : 'unchecked'}">
				<div class="check-item-header">
					<span class="check-icon">${item.checked ? '✅' : '❌'}</span>
					<div style="flex: 1;">
						<div class="check-item-title">${item.title}</div>
						<div class="check-item-description">${item.description}</div>
						${
							exportOptions.includeGuides && item.guideContent
								? `
							<div class="check-item-guide">
								<div class="guide-title">${item.guideContent.title}</div>
								<div>${item.guideContent.content.replace(/\n/g, '<br>')}</div>
								${
									item.guideContent.examples
										? `
									<div style="margin-top: 10px;">
										${
											item.guideContent.examples.good.length > 0
												? `
											<div style="margin-bottom: 8px;">
												<strong style="color: #27ae60;">✅ 良い例:</strong>
												${item.guideContent.examples.good
													.map(
														ex => `
													<div style="margin-left: 15px; margin-top: 5px;">• ${ex}</div>
												`
													)
													.join('')}
											</div>
										`
												: ''
										}
										${
											item.guideContent.examples.bad.length > 0
												? `
											<div>
												<strong style="color: #e74c3c;">❌ 悪い例:</strong>
												${item.guideContent.examples.bad
													.map(
														ex => `
													<div style="margin-left: 15px; margin-top: 5px;">• ${ex}</div>
												`
													)
													.join('')}
											</div>
										`
												: ''
										}
									</div>
								`
										: ''
								}
							</div>
						`
								: ''
						}
					</div>
				</div>
			</div>
		`;
	}

	async function handleExport() {
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
				case 'markdown':
					await exportToMarkdown();
					break;
			}
		} catch (error) {
			console.error('エクスポートエラー:', error);
			alert('エクスポートに失敗しました');
		} finally {
			isExporting = false;
		}
	}

	async function exportToPDF() {
		if (!checklist) return;

		try {
			console.log('🚀 Starting PDF export with reliable font support');

			if (exportOptions.reliableMode) {
				// 確実な日本語フォント対応PDF生成
				console.log('📝 Using ReliablePDFGenerator for Japanese font support');

				const reliableOptions: ReliablePDFOptions = {
					includeGuides: exportOptions.includeGuides,
					includeNotes: exportOptions.includeNotes,
					includeSummary: exportOptions.includeSummary,
					sectionBreaks: exportOptions.sectionBreaks,
					useLocalFonts: true, // 静的フォント使用
					optimizeForMobile:
						platformStore.capabilities.platform === 'ios' ||
						platformStore.capabilities.platform === 'android'
				};

				const pdf = await reliablePDFGenerator.generateFromChecklist(checklist, reliableOptions);

				// ファイル名生成
				const timestamp = new Date().toISOString().slice(0, 10);
				const sanitizedTitle = checklist.title.replace(
					/[^\\w\\s\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FAF]/gi,
					''
				);
				const filename = `事実確認チェックシート_${sanitizedTitle}_${timestamp}.pdf`;

				// ダウンロード実行
				pdf.save(filename);
				console.log('✅ PDF generated successfully with reliable font support');
			} else {
				// 従来のPWA対応エクスポーター使用
				console.log('🔄 Using PWA-aware PDF exporter (legacy mode)');
				await pdfExporter.exportPDF(checklist, {
					textMode: exportOptions.textMode,
					includeGuides: exportOptions.includeGuides,
					includeNotes: exportOptions.includeNotes,
					includeSummary: exportOptions.includeSummary,
					sectionBreaks: exportOptions.sectionBreaks,
					showSaveDialog: supportedFeatures.canSave,
					enableSharing: supportedFeatures.canShare,
					useNativeFeatures: exportOptions.advancedMode,
					optimizeForMobile:
						platformStore.capabilities.platform === 'ios' ||
						platformStore.capabilities.platform === 'android'
				});
			}
		} catch (error) {
			console.error('PDF生成エラー:', error);

			// エラー時のフォールバック提案
			if (exportOptions.reliableMode) {
				alert(
					'確実モードでの生成に失敗しました。従来モードを試すか、ブラウザを再読み込みしてください。'
				);
			} else if (exportOptions.textMode) {
				alert(
					'テキストモードでの生成に失敗しました。確実モードまたは従来の画像モードを試してください。'
				);
			} else {
				alert('PDF生成に失敗しました。確実モードを有効にして再試行してください。');
			}
			throw error;
		}
	}

	async function exportToHTML() {
		const htmlContent = generateSectionedHTMLContent();
		const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
		const filename = `事実確認チェックシート_${checklist!.title}_${new Date().toISOString().slice(0, 10)}.html`;
		downloadBlob(blob, filename);
	}

	async function exportToJSON() {
		const exportData = {
			title: checklist!.title,
			notes: checklist!.notes,
			createdAt: checklist!.createdAt.toISOString(),
			completedAt: checklist!.completedAt?.toISOString(),
			score: checklist!.score,
			judgment: checklist!.judgment,
			judgmentAdvice: checklist!.judgmentAdvice,
			confidenceLevel: checklist!.confidenceLevel,
			confidenceText: checklist!.confidenceText,
			items: checklist!.items,
			sections: groupItemsByCategory(),
			exportedAt: new Date().toISOString(),
			version: '1.0'
		};

		const jsonString = JSON.stringify(exportData, null, 2);
		const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
		const filename = `事実確認チェックシート_${checklist!.title}_${new Date().toISOString().slice(0, 10)}.json`;
		downloadBlob(blob, filename);
	}

	async function exportToMarkdown() {
		const markdownContent = generateMarkdownContent();
		const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
		const filename = `事実確認チェックシート_${checklist!.title}_${new Date().toISOString().slice(0, 10)}.md`;
		downloadBlob(blob, filename);
	}

	function generateSectionedHTMLContent(): string {
		if (!checklist) return '';

		const sections = groupItemsByCategory();

		return `
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>事実確認チェックシート - ${checklist.title}</title>
	<style>
		body { 
			font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif; 
			margin: 20px; 
			line-height: 1.6; 
			color: #333; 
			background: #fff;
		}
		
		/* ヘッダースタイル */
		.header-section { 
			border-bottom: 3px solid #2c3e50; 
			padding-bottom: 20px; 
			margin-bottom: 30px; 
		}
		.header-section h1 { 
			color: #2c3e50; 
			margin: 0 0 15px 0; 
			font-size: 28px;
		}
		.meta-info {
			font-size: 14px;
			color: #666;
			margin-bottom: 20px;
		}
		
		/* サマリースタイル */
		.score-summary { 
			background: linear-gradient(135deg, #f8f9fa, #e9ecef); 
			padding: 25px; 
			border-radius: 10px; 
			margin-bottom: 30px;
			border-left: 5px solid #3498db;
			box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		}
		.score-summary h2 {
			margin: 0 0 20px 0; 
			color: #2c3e50; 
			font-size: 22px;
		}
		.score-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 15px;
			margin-bottom: 15px;
		}
		.score-item {
			background: white;
			padding: 15px;
			border-radius: 8px;
			border-left: 4px solid #3498db;
		}
		.score-item strong {
			display: block;
			color: #2c3e50;
			margin-bottom: 5px;
		}
		
		/* セクションスタイル */
		.category-section { 
			margin-bottom: 40px; 
			page-break-inside: avoid;
			border: 1px solid #ddd;
			border-radius: 10px;
			overflow: hidden;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		}
		.section-header {
			padding: 20px 25px;
			color: white;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.section-header.critical { background: linear-gradient(135deg, #e74c3c, #c0392b); }
		.section-header.detailed { background: linear-gradient(135deg, #f39c12, #e67e22); }
		.section-header.verification { background: linear-gradient(135deg, #3498db, #2980b9); }
		.section-header.context { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
		
		.section-title {
			font-size: 20px;
			display: flex;
			align-items: center;
			gap: 10px;
		}
		.section-stats {
			font-size: 14px;
			opacity: 0.9;
		}
		
		.section-content {
			padding: 25px;
			background: #fff;
		}
		
		/* チェックアイテムスタイル */
		.check-item { 
			margin: 20px 0; 
			padding: 20px; 
			border-radius: 8px; 
			border-left: 5px solid #ddd;
			background: #fafafa;
			page-break-inside: avoid;
		}
		.check-item.checked { 
			background: linear-gradient(135deg, #d5f4e6, #a8e6cf); 
			border-left-color: #27ae60; 
		}
		.check-item.unchecked { 
			background: linear-gradient(135deg, #ffeaa7, #fdcb6e); 
			border-left-color: #e17055; 
		}
		.check-item-header {
			display: flex;
			align-items: flex-start;
			gap: 15px;
			margin-bottom: 10px;
		}
		.check-icon {
			font-size: 24px;
			margin-top: 2px;
		}
		.check-item-title {
			font-weight: bold;
			font-size: 16px;
			color: #2c3e50;
			margin-bottom: 8px;
		}
		.check-item-description {
			color: #555;
			margin-bottom: 15px;
			line-height: 1.7;
		}
		.check-item-guide {
			background: rgba(255,255,255,0.7);
			padding: 15px;
			border-radius: 6px;
			font-size: 13px;
			color: #666;
			border-left: 3px solid #3498db;
		}
		.guide-title {
			font-weight: bold;
			color: #2c3e50;
			margin-bottom: 10px;
		}
		
		/* ノートセクション */
		.notes-section { 
			background: linear-gradient(135deg, #e8f4fd, #d1ecf1); 
			padding: 25px; 
			border-radius: 10px; 
			margin-top: 30px; 
			border-left: 5px solid #3498db;
			page-break-inside: avoid;
		}
		.notes-section h2 {
			margin: 0 0 20px 0;
			color: #2c3e50;
		}
		.notes-content {
			background: white;
			padding: 20px;
			border-radius: 8px;
			line-height: 1.7;
		}
		
		/* フッター */
		.footer {
			margin-top: 40px; 
			text-align: center; 
			color: #666; 
			border-top: 2px solid #ddd; 
			padding-top: 20px;
			font-size: 12px;
		}
		
		/* 印刷対応 */
		@media print { 
			body { margin: 15px; }
			.category-section { 
				page-break-inside: avoid;
				margin-bottom: 30px;
			}
			.check-item { page-break-inside: avoid; }
			${exportOptions.sectionBreaks ? '.category-section { page-break-before: always; }' : ''}
		}
		
		/* レスポンシブ対応 */
		@media (max-width: 768px) {
			body { margin: 10px; }
			.score-grid { grid-template-columns: 1fr; }
			.section-header { flex-direction: column; align-items: flex-start; gap: 10px; }
		}
	</style>
</head>
<body>
	<!-- ヘッダーセクション -->
	<div class="header-section">
		<h1>📋 ${checklist.title}</h1>
		<div class="meta-info">
			<p><strong>作成日:</strong> ${checklist.createdAt.toLocaleDateString('ja-JP')}</p>
			${checklist.completedAt ? `<p><strong>評価完了日:</strong> ${checklist.completedAt.toLocaleDateString('ja-JP')}</p>` : ''}
			<p><strong>出力日:</strong> ${new Date().toLocaleDateString('ja-JP')}</p>
		</div>
		
		${
			exportOptions.includeSummary
				? `
		<div class="score-summary">
			<h2>📊 評価結果サマリー</h2>
			<div class="score-grid">
				<div class="score-item">
					<strong>総合スコア</strong>
					${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)
				</div>
				<div class="score-item">
					<strong>信頼度</strong>
					${checklist.confidenceText}
				</div>
				<div class="score-item">
					<strong>最終判定</strong>
					<span style="color: ${getJudgmentColor(checklist.judgment)}; font-weight: bold;">
						${getJudgmentText(checklist.judgment)}
					</span>
				</div>
				${
					checklist.judgmentAdvice
						? `
				<div class="score-item">
					<strong>推奨</strong>
					${checklist.judgmentAdvice}
				</div>
				`
						: ''
				}
			</div>
		</div>
		`
				: ''
		}
	</div>

	<!-- カテゴリ別セクション -->
	${sections
		.map(
			section => `
		<div class="category-section">
			<div class="section-header ${section.category.id}">
				<div class="section-title">
					<span>${section.category.emoji}</span>
					<div>
						<div>${section.category.name}</div>
						<div style="font-size: 14px; font-weight: normal; opacity: 0.9; margin-top: 5px;">
							${section.category.description}
						</div>
					</div>
				</div>
				<div class="section-stats">
					<div>${section.checkedItems.length}/${section.items.length} 完了</div>
					<div>${section.completionRate}%</div>
				</div>
			</div>
			
			<div class="section-content">
				${section.items.map(renderCheckItem).join('')}
			</div>
		</div>
	`
		)
		.join('')}

	<!-- ノートセクション -->
	${
		exportOptions.includeNotes && checklist.notes
			? `
		<div class="notes-section">
			<h2>📝 評価メモ</h2>
			<div class="notes-content">
				${checklist.notes.replace(/\n/g, '<br>')}
			</div>
		</div>
	`
			: ''
	}

	<!-- フッター -->
	<div class="footer">
		<p>実用的事実確認チェックシートによる評価結果</p>
		<p>生成日時: ${new Date().toLocaleString('ja-JP')}</p>
	</div>
</body>
</html>
		`.trim();
	}

	function generateMarkdownContent(): string {
		if (!checklist) return '';

		const sections = groupItemsByCategory();

		// Markdownヘッダー
		let markdown = `# 📋 ${checklist.title}\n\n`;

		// メタ情報
		markdown += '## 📄 基本情報\n\n';
		markdown += `- **作成日**: ${checklist.createdAt.toLocaleDateString('ja-JP')}\n`;
		if (checklist.completedAt) {
			markdown += `- **評価完了日**: ${checklist.completedAt.toLocaleDateString('ja-JP')}\n`;
		}
		markdown += `- **出力日**: ${new Date().toLocaleDateString('ja-JP')}\n\n`;

		// サマリー
		if (exportOptions.includeSummary) {
			markdown += '## 📊 評価結果サマリー\n\n';
			markdown += '| 項目 | 値 |\n';
			markdown += '|------|----|\n';
			markdown += `| 総合スコア | ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%) |\n`;
			markdown += `| 信頼度 | ${checklist.confidenceText} |\n`;
			markdown += `| 最終判定 | ${getJudgmentTextPlain(checklist.judgment)} |\n`;
			if (checklist.judgmentAdvice) {
				markdown += `| 推奨アクション | ${checklist.judgmentAdvice} |\n`;
			}
			markdown += '\n';

			// セクション別達成率
			markdown += '### 📈 セクション別達成率\n\n';
			markdown += '| セクション | 完了率 | 完了項目 |\n';
			markdown += '|------------|--------|----------|\n';
			sections.forEach(section => {
				markdown += `| ${section.category.emoji} ${section.category.name} | ${section.completionRate}% | ${section.checkedItems.length}/${section.items.length} |\n`;
			});
			markdown += '\n';
		}

		// カテゴリ別チェック項目
		markdown += '## 📋 チェック項目詳細\n\n';

		sections.forEach((section, index) => {
			if (exportOptions.sectionBreaks && index > 0) {
				markdown += '---\n\n';
			}

			markdown += `### ${section.category.emoji} ${section.category.name}\n\n`;
			markdown += `> ${section.category.description}\n\n`;
			markdown += `**達成状況**: ${section.checkedItems.length}/${section.items.length} 完了 (${section.completionRate}%)\n\n`;

			section.items.forEach(item => {
				const checkbox = item.checked ? '- [x]' : '- [ ]';
				markdown += `${checkbox} **${item.title}**\n`;
				markdown += `  ${item.description}\n`;

				if (exportOptions.includeGuides && item.guideContent) {
					markdown += '\n';
					markdown += '  <details>\n';
					markdown += `  <summary>📚 ガイド: ${item.guideContent.title}</summary>\n\n`;
					markdown += `  ${item.guideContent.content}\n\n`;

					if (item.guideContent.examples) {
						if (item.guideContent.examples.good.length > 0) {
							markdown += '  **✅ 良い例:**\n';
							item.guideContent.examples.good.forEach(ex => {
								markdown += `  - ${ex}\n`;
							});
							markdown += '\n';
						}

						if (item.guideContent.examples.bad.length > 0) {
							markdown += '  **❌ 悪い例:**\n';
							item.guideContent.examples.bad.forEach(ex => {
								markdown += `  - ${ex}\n`;
							});
							markdown += '\n';
						}
					}
					markdown += '  </details>\n';
				}
				markdown += '\n';
			});
		});

		// ノート
		if (exportOptions.includeNotes && checklist.notes) {
			markdown += '## 📝 評価メモ\n\n';
			markdown += '```\n';
			markdown += `${checklist.notes}\n`;
			markdown += '```\n\n';
		}

		// フッター
		markdown += '---\n\n';
		markdown += '*実用的事実確認チェックシートによる評価結果*  \n';
		markdown += `*生成日時: ${new Date().toLocaleString('ja-JP')}*\n`;

		return markdown;
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
				return '📗 採用';
			case 'caution':
				return '📙 要注意';
			case 'reject':
				return '📕 不採用';
			default:
				return '❓ 未判定';
		}
	}

	function getJudgmentTextPlain(judgment: string | null): string {
		switch (judgment) {
			case 'accept':
				return '✅ 採用';
			case 'caution':
				return '⚠️ 要注意';
			case 'reject':
				return '❌ 不採用';
			default:
				return '❓ 未判定';
		}
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

	async function copyToClipboard() {
		if (!checklist) return;

		const text = `
📋 事実確認評価結果

タイトル: ${checklist.title}
作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}
総合スコア: ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)
信頼度: ${checklist.confidenceText}
最終判定: ${getJudgmentText(checklist.judgment)}

📊 セクション別達成率:
${sections.map(s => `${s.category.emoji} ${s.category.name}: ${s.completionRate}% (${s.checkedItems.length}/${s.items.length})`).join('\n')}

${checklist.notes ? `📝 評価メモ:\n${checklist.notes}` : ''}
		`.trim();

		try {
			await navigator.clipboard.writeText(text);
			alert('📋 クリップボードにコピーしました');
		} catch (error) {
			console.error('コピーに失敗:', error);
			alert('❌ コピーに失敗しました');
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
				<h3>📋 出力形式</h3>
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
						<small>印刷・共有に最適（セクション分割対応）</small>
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
						<small>ブラウザで表示可能（セクション構造化）</small>
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
						<small>データ形式（プログラム処理用）</small>
					</label>

					<label class="radio-option">
						<input
							type="radio"
							name="format"
							value="markdown"
							checked={exportOptions.format === 'markdown'}
							onchange={() => updateExportOption('format', 'markdown')}
						/>
						<span>📝 Markdown</span>
						<small>テキスト形式（GitHub/エディタで表示可能）</small>
					</label>
				</div>
			</div>

			<!-- 内容オプション -->
			<div class="option-group">
				<h3>📝 含める内容</h3>
				<div class="checkbox-options">
					<label class="checkbox-option">
						<input
							type="checkbox"
							checked={exportOptions.includeSummary}
							onchange={e =>
								updateExportOption('includeSummary', (e.target as HTMLInputElement).checked)}
						/>
						<span>📊 評価サマリー</span>
						<small>スコア・判定結果の概要</small>
					</label>

					<label class="checkbox-option">
						<input
							type="checkbox"
							checked={exportOptions.includeGuides}
							onchange={e =>
								updateExportOption('includeGuides', (e.target as HTMLInputElement).checked)}
						/>
						<span>📚 ガイド内容</span>
						<small>各項目の詳細説明・例</small>
					</label>

					<label class="checkbox-option">
						<input
							type="checkbox"
							checked={exportOptions.includeNotes}
							onchange={e =>
								updateExportOption('includeNotes', (e.target as HTMLInputElement).checked)}
						/>
						<span>📝 評価メモ</span>
						<small>追加したメモ・コメント</small>
					</label>

					{#if exportOptions.format === 'pdf' || exportOptions.format === 'markdown'}
						<label class="checkbox-option">
							<input
								type="checkbox"
								checked={exportOptions.sectionBreaks}
								onchange={e =>
									updateExportOption('sectionBreaks', (e.target as HTMLInputElement).checked)}
							/>
							<span>📄 セクション区切り</span>
							<small
								>{exportOptions.format === 'pdf'
									? '各セクションを個別ページに分離'
									: 'セクション間に区切り線を追加'}</small
							>
						</label>
					{/if}

					{#if exportOptions.format === 'pdf'}
						<label class="checkbox-option">
							<input
								type="checkbox"
								checked={exportOptions.reliableMode}
								onchange={e =>
									updateExportOption('reliableMode', (e.target as HTMLInputElement).checked)}
							/>
							<span>🔥 確実な日本語フォント対応</span>
							<small>文字化け防止・CSP対応 (推奨)</small>
						</label>

						<label class="checkbox-option">
							<input
								type="checkbox"
								checked={exportOptions.textMode}
								onchange={e =>
									updateExportOption('textMode', (e.target as HTMLInputElement).checked)}
							/>
							<span>🔤 テキストベースPDF</span>
							<small>文字検索・コピー可能 (レガシーモード)</small>
						</label>

						<label class="checkbox-option">
							<input
								type="checkbox"
								checked={exportOptions.advancedMode}
								onchange={e =>
									updateExportOption('advancedMode', (e.target as HTMLInputElement).checked)}
							/>
							<span>⚡ 高度なPWA機能</span>
							<small>プラットフォーム固有の最適化を使用</small>
						</label>

						<!-- プラットフォーム機能表示 -->
						{#if platformStore.capabilities.isNativeApp || supportedFeatures.hasNativeFeatures}
							<div class="platform-info">
								<div class="platform-badge">
									{#if platformStore.capabilities.isNativeApp}
										📱 ネイティブアプリ機能
									{:else}
										🌐 拡張機能
									{/if}
								</div>
								<div class="feature-list">
									{#if supportedFeatures.canSave}
										<span class="feature-item">💾 直接保存</span>
									{/if}
									{#if supportedFeatures.canShare}
										<span class="feature-item">📤 ネイティブ共有</span>
									{/if}
									{#if supportedFeatures.qualityLevel === 'high'}
										<span class="feature-item">✨ 高品質</span>
									{/if}
								</div>
							</div>
						{/if}
					{/if}
				</div>
			</div>
		</div>

		<div class="modal-footer">
			<div class="action-buttons">
				<button class="btn btn-secondary" onclick={copyToClipboard} disabled={!checklist}>
					📋 コピー
				</button>

				<button class="btn btn-primary" onclick={handleExport} disabled={!checklist || isExporting}>
					{isExporting ? '⏳ 出力中...' : '📤 エクスポート'}
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
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		backdrop-filter: blur(4px);
	}

	.modal-content {
		background: white;
		border-radius: 16px;
		padding: 0;
		width: 90%;
		max-width: 600px;
		max-height: 90vh;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
	}

	.modal-header {
		padding: 25px 30px;
		border-bottom: 1px solid #e9ecef;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.modal-header h2 {
		margin: 0;
		font-size: 20px;
		font-weight: 600;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 24px;
		color: white;
		cursor: pointer;
		padding: 5px 10px;
		border-radius: 6px;
		transition: background-color 0.2s;
	}

	.close-btn:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.modal-body {
		padding: 30px;
		overflow-y: auto;
		flex: 1;
	}

	.option-group {
		margin-bottom: 30px;
	}

	.option-group h3 {
		margin: 0 0 15px 0;
		font-size: 16px;
		font-weight: 600;
		color: #2c3e50;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.format-options,
	.checkbox-options {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.radio-option,
	.checkbox-option {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		padding: 15px;
		border: 2px solid #e9ecef;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s;
		background: #fafafa;
	}

	.radio-option:hover,
	.checkbox-option:hover {
		border-color: #3498db;
		background: #f8f9fa;
	}

	.radio-option input[type='radio']:checked + span,
	.checkbox-option input[type='checkbox']:checked + span {
		color: #3498db;
		font-weight: 600;
	}

	.radio-option input[type='radio']:checked,
	.checkbox-option input[type='checkbox']:checked {
		accent-color: #3498db;
	}

	.radio-option span,
	.checkbox-option span {
		font-weight: 500;
		font-size: 15px;
		color: #2c3e50;
	}

	.radio-option small,
	.checkbox-option small {
		display: block;
		color: #6c757d;
		font-size: 13px;
		margin-top: 4px;
		line-height: 1.4;
	}

	.modal-footer {
		padding: 20px 30px;
		border-top: 1px solid #e9ecef;
		background: #f8f9fa;
	}

	.action-buttons {
		display: flex;
		gap: 12px;
		justify-content: flex-end;
	}

	.btn {
		padding: 12px 24px;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.btn-secondary {
		background: #6c757d;
		color: white;
	}

	.btn-secondary:hover:not(:disabled) {
		background: #5a6268;
		transform: translateY(-1px);
	}

	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.btn-primary:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.modal-content {
			width: 95%;
			max-height: 95vh;
		}

		.modal-header,
		.modal-body,
		.modal-footer {
			padding-left: 20px;
			padding-right: 20px;
		}

		.action-buttons {
			flex-direction: column;
		}

		.btn {
			width: 100%;
			justify-content: center;
		}
	}

	/* アクセシビリティ */
	@media (prefers-reduced-motion: reduce) {
		.modal-backdrop,
		.modal-content,
		.btn,
		.radio-option,
		.checkbox-option {
			transition: none;
		}
	}

	/* フォーカス状態 */
	.radio-option:focus-within,
	.checkbox-option:focus-within {
		border-color: #3498db;
		box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
	}

	.btn:focus {
		outline: 2px solid #3498db;
		outline-offset: 2px;
	}

	/* プラットフォーム情報スタイル */
	.platform-info {
		margin-top: 10px;
		padding: 12px;
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		border-radius: 8px;
		border-left: 3px solid #3498db;
	}

	.platform-badge {
		font-weight: 600;
		color: #2c3e50;
		margin-bottom: 8px;
		font-size: 13px;
	}

	.feature-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.feature-item {
		background: rgba(255, 255, 255, 0.8);
		padding: 4px 8px;
		border-radius: 12px;
		font-size: 11px;
		color: #2c3e50;
		border: 1px solid rgba(52, 152, 219, 0.3);
	}
</style>
