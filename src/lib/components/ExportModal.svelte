<!-- src/lib/components/ExportModal.svelte -->
<script lang="ts">
  import type { ChecklistResult, CheckItem } from '$lib/types/checklist.js';
  import { CATEGORIES } from '$lib/data/checklist-items.js';
  import { PWAAwarePDFExporter } from '$lib/utils/pwaAwarePDFExporter.js';
  import {
    ReliablePDFGenerator,
    type ReliablePDFOptions
  } from '$lib/utils/reliablePDFGenerator.js';
  // import { HTMLToPDFGenerator, type HTMLToPDFOptions } from '$lib/utils/htmlToPDFGenerator.js';
  import { SimplePDFGenerator } from '$lib/utils/simplePDFGenerator.js';
  import { platformStore } from '$lib/stores/platformStore.svelte.js';
  import { t } from '$lib/i18n/index.js';

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
    pixelPerfectMode: boolean; // HTML→Canvas→PDF（ブラウザ表示と完全一致）
  }

  const { checklist, onClose }: Props = $props();

  let modalElement: HTMLDivElement;
  let isExporting = $state(false);
  const exportProgress = $state<{
    current: number;
    total: number;
    stage: string;
    message: string;
  }>({ current: 0, total: 100, stage: '', message: '' });
  let exportError = $state<string | null>(null);
  let exportSuccess = $state<boolean>(false);

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
  let textMode = $state(false); // テキストベースPDF（レガシー）
  let advancedMode = $state(false); // 高度なモード
  let reliableMode = $state(false); // 確実な日本語フォント対応
  let pixelPerfectMode = $state(true); // HTML→印刷→PDF（デフォルト）

  // リアクティブなエクスポートオプション
  const exportOptions = $derived<ExportOptions>({
    format,
    includeGuides,
    includeNotes,
    includeSummary,
    sectionBreaks,
    textMode,
    advancedMode,
    reliableMode,
    pixelPerfectMode
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
        // テキストモードを有効にしたら他のPDFモードを無効化
        if (textMode) {
          pixelPerfectMode = false;
          reliableMode = false;
        }
        break;
      case 'advancedMode':
        advancedMode = value as boolean;
        break;
      case 'reliableMode':
        reliableMode = value as boolean;
        // 確実モードを有効にしたら他のPDFモードを無効化
        if (reliableMode) {
          pixelPerfectMode = false;
          textMode = false;
        }
        break;
      case 'pixelPerfectMode':
        pixelPerfectMode = value as boolean;
        // ピクセルパーフェクトモードを有効にしたら他のPDFモードを無効化
        if (pixelPerfectMode) {
          reliableMode = false;
          textMode = false;
        }
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

  // 進捗更新ユーティリティ
  function updateProgress(current: number, total: number, stage: string, message: string) {
    exportProgress.current = current;
    exportProgress.total = total;
    exportProgress.stage = stage;
    exportProgress.message = message;
  }

  // エラーリセット
  function resetExportState() {
    exportError = null;
    exportSuccess = false;
    updateProgress(0, 100, '', '');
  }

  // ユーザーフレンドリーエラーメッセージ
  function getErrorMessage(error: unknown, context: string): string {
    const errorStr = error instanceof Error ? error.message : String(error);

    if (errorStr.includes('fetch')) {
      return t('errors.network');
    } else if (errorStr.includes('memory') || errorStr.includes('size')) {
      return t('errors.general');
    } else if (errorStr.includes('permission') || errorStr.includes('access')) {
      return t('errors.permissionDenied');
    } else {
      return `${context}: ${errorStr.substring(0, 100)}`;
    }
  }

  async function handleExport() {
    if (!checklist) return;

    resetExportState();
    isExporting = true;

    try {
      updateProgress(10, 100, t('export.progress.initializing'), t('export.progress.initializing'));

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

      updateProgress(100, 100, t('export.progress.completed'), t('export.progress.completed'));
      exportSuccess = true;

      // 成功メッセージを短時間表示後にモーダルを閉じる
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('エクスポートエラー:', error);
      exportError = getErrorMessage(
        error,
        `${exportOptions.format.toUpperCase()} ${t('common.export')}`
      );
      updateProgress(0, 100, t('export.progress.failed'), exportError);
    } finally {
      isExporting = false;
    }
  }

  async function exportToPDF() {
    if (!checklist) return;

    try {
      updateProgress(20, 100, t('export.progress.initializing'), t('export.progress.generating'));
      console.log('🚀 Starting PDF export with reliable font support');

      if (exportOptions.pixelPerfectMode) {
        // HTML→印刷→PDF（ピクセルパーフェクト）
        updateProgress(30, 100, t('export.progress.generating'), t('export.progress.processing'));
        console.log('🎨 Using SimplePDFGenerator for pixel-perfect output');

        // HTMLコンテンツを生成
        const htmlContent = generateSectionedHTMLContent();

        updateProgress(50, 100, t('export.progress.processing'), t('export.progress.processing'));

        const simplePdfGenerator = new SimplePDFGenerator();

        // ファイル名生成
        const timestamp = new Date().toISOString().slice(0, 10);
        const sanitizedTitle = checklist.title.replace(
          /[^\w\s\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/gi,
          ''
        );
        const filename = `${t('app.title')}_${sanitizedTitle}_${timestamp}.pdf`;

        try {
          // 印刷ダイアログを開く方式
          updateProgress(70, 100, t('export.progress.processing'), t('export.progress.processing'));
          await simplePdfGenerator.generateFromHTML(htmlContent, filename);

          updateProgress(100, 100, t('export.progress.completed'), t('export.progress.completed'));
          console.log('✅ Print dialog opened successfully');
        } catch (printError) {
          // フォールバック: 直接PDF生成
          console.warn('⚠️ Print dialog failed, using direct PDF generation:', printError);
          updateProgress(70, 100, t('export.progress.generating'), t('export.progress.generating'));

          const pdfBlob = await simplePdfGenerator.generateDirectPDF(htmlContent, checklist);

          updateProgress(80, 100, t('export.progress.finalizing'), t('export.progress.finalizing'));

          // ダウンロード実行
          const url = URL.createObjectURL(pdfBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }

        console.log('✅ Pixel-perfect PDF generated successfully');
      } else if (exportOptions.reliableMode) {
        // 確実な日本語フォント対応PDF生成
        updateProgress(30, 100, t('export.progress.processing'), t('export.progress.processing'));
        console.log('📝 Using ReliablePDFGenerator for Japanese font support');

        const reliableOptions: ReliablePDFOptions = {
          includeGuides: exportOptions.includeGuides,
          includeNotes: exportOptions.includeNotes,
          includeSummary: exportOptions.includeSummary,
          sectionBreaks: exportOptions.sectionBreaks,
          useLocalFonts: true, // 静的フォント使用
          optimizeForMobile:
            platformStore.capabilities.platform === 'ios' ||
            platformStore.capabilities.platform === 'android',
          // Phase 3: 高度なPDF機能
          addWatermark: exportOptions.advancedMode,
          includeTableOfContents: exportOptions.advancedMode,
          addMetadata: true,
          watermarkText: 'FACT CHECK EVALUATION',
          documentTitle: `事実確認チェックシート - ${checklist.title}`,
          documentAuthor: 'Fact Checklist Generator',
          documentSubject:
            '情報の信頼性を科学的・体系的に評価するための実用的事実確認チェックシート'
        };

        updateProgress(50, 100, t('export.progress.generating'), t('export.progress.generating'));
        const pdf = await reliablePDFGenerator.generateFromChecklist(checklist, reliableOptions);

        updateProgress(80, 100, t('export.progress.finalizing'), t('export.progress.finalizing'));

        // ファイル名生成
        const timestamp = new Date().toISOString().slice(0, 10);
        const sanitizedTitle = checklist.title.replace(
          /[^\\w\\s\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FAF]/gi,
          ''
        );
        const filename = `${t('app.title')}_${sanitizedTitle}_${timestamp}.pdf`;

        // ダウンロード実行
        pdf.save(filename);
        console.log('✅ PDF generated successfully with reliable font support');
      } else {
        // 従来のPWA対応エクスポーター使用
        updateProgress(40, 100, t('export.progress.processing'), t('export.progress.processing'));
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
      throw error; // エラーは上位でハンドリング
    }
  }

  async function exportToHTML() {
    updateProgress(30, 100, t('export.progress.generating'), t('export.progress.generating'));
    const htmlContent = generateSectionedHTMLContent();
    updateProgress(70, 100, t('export.progress.finalizing'), t('export.progress.finalizing'));
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const filename = `${t('app.title')}_${checklist!.title}_${new Date().toISOString().slice(0, 10)}.html`;
    downloadBlob(blob, filename);
  }

  async function exportToJSON() {
    updateProgress(30, 100, t('export.progress.processing'), t('export.progress.processing'));

    // Import i18n functions for multilingual data
    const { getCurrentLanguage, getSupportedLanguages } = await import('$lib/i18n/index.js');
    const { factChecklistI18n } = await import('$lib/i18n/index.js');

    const currentLang = getCurrentLanguage();
    const supportedLangs = getSupportedLanguages();

    // アイテムデータをオプションに応じて調整（多言語対応）
    const processedItems = checklist!.items.map(item => {
      const processedItem = { ...item };

      // カテゴリ情報の翻訳
      if (processedItem.category) {
        try {
          processedItem.category = {
            ...processedItem.category,
            name: factChecklistI18n.getCategoryName(processedItem.category.id),
            description: factChecklistI18n.getCategoryDescription(processedItem.category.id)
          };
        } catch {
          // フォールバック: 既存のカテゴリ情報を使用
        }
      }

      // 基本項目情報の翻訳
      if (item.translationKey) {
        try {
          processedItem.title = factChecklistI18n.getCheckItemTitle(item.translationKey);
          processedItem.description = factChecklistI18n.getCheckItemDescription(
            item.translationKey
          );
        } catch {
          // フォールバック: 既存のタイトル・説明を使用
        }
      }

      // 多言語対応: 現在の言語での翻訳テキストを追加
      const multilingual: any = {
        translationKey: item.translationKey || item.id,
        currentLanguage: {
          title: processedItem.title,
          description: processedItem.description
        }
      };

      // i18n領域用の翻訳情報（重複確認のため再取得）
      if (item.translationKey) {
        try {
          multilingual.currentLanguage.title = factChecklistI18n.getCheckItemTitle(
            item.translationKey
          );
          multilingual.currentLanguage.description = factChecklistI18n.getCheckItemDescription(
            item.translationKey
          );
        } catch {
          // フォールバック: 処理済みのタイトル・説明を使用
          multilingual.currentLanguage.title = processedItem.title;
          multilingual.currentLanguage.description = processedItem.description;
        }
      }

      // ガイド内容の多言語対応
      if (exportOptions.includeGuides && item.guideContent) {
        const guideContent = { ...item.guideContent };

        if (item.translationKey) {
          try {
            guideContent.title = factChecklistI18n.getCheckItemGuideTitle(item.translationKey);
            guideContent.content = factChecklistI18n.getCheckItemGuideContent(item.translationKey);

            // 例文の翻訳
            const goodExamples = factChecklistI18n.getCheckItemExamplesGood(item.translationKey);
            const badExamples = factChecklistI18n.getCheckItemExamplesBad(item.translationKey);

            if (goodExamples.length > 0 || badExamples.length > 0) {
              guideContent.examples = {
                good: goodExamples,
                bad: badExamples
              };
            }
          } catch {
            // フォールバック: 既存のガイド内容を使用
          }
        }

        processedItem.guideContent = guideContent;
        multilingual.currentLanguage.guideTitle = guideContent.title;
        multilingual.currentLanguage.guideContent = guideContent.content;
        multilingual.currentLanguage.examplesGood = guideContent.examples?.good || [];
        multilingual.currentLanguage.examplesBad = guideContent.examples?.bad || [];
      } else if (!exportOptions.includeGuides) {
        delete processedItem.guideContent;
      }

      // 多言語情報をアイテムに追加（型安全のため any を使用）
      (processedItem as any).i18n = multilingual;

      return processedItem;
    });

    // セクション情報の多言語対応
    const processedSections = exportOptions.includeSummary
      ? groupItemsByCategory().map(section => ({
          ...section,
          i18n: {
            translationKey: `categories.${section.category.id}`,
            currentLanguage: {
              name: factChecklistI18n.getCategoryName(section.category.id),
              description: factChecklistI18n.getCategoryDescription(section.category.id),
              emoji: factChecklistI18n.getCategoryEmoji(section.category.id)
            }
          }
        }))
      : undefined;

    // 判定情報の多言語対応
    const processedJudgment =
      exportOptions.includeSummary && checklist!.judgment
        ? {
            value: checklist!.judgment,
            i18n: {
              currentLanguage: {
                text: factChecklistI18n.getJudgmentText(checklist!.judgment),
                advice: factChecklistI18n.getJudgmentAdvice(checklist!.judgment)
              }
            }
          }
        : checklist!.judgment;

    const exportData = {
      // メタデータ
      metadata: {
        version: '2.0',
        format: 'json',
        exportedAt: new Date().toISOString(),
        language: {
          current: currentLang,
          available: Object.keys(supportedLangs),
          info: supportedLangs[currentLang]
        },
        application: {
          name: t('app.title'),
          version: t('app.version'),
          description: t('app.description')
        }
      },

      // チェックリスト基本情報
      checklist: {
        id: checklist!.id,
        title: checklist!.title,
        description: checklist!.description,
        status: checklist!.status,
        createdAt: checklist!.createdAt.toISOString(),
        updatedAt: checklist!.updatedAt.toISOString(),
        completedAt: checklist!.completedAt?.toISOString(),
        notes: exportOptions.includeNotes ? checklist!.notes : undefined
      },

      // 評価結果
      evaluation: exportOptions.includeSummary
        ? {
            score: checklist!.score,
            confidenceLevel: checklist!.confidenceLevel,
            confidence: {
              text: (() => {
                const level =
                  checklist!.confidenceLevel >= 80
                    ? 'high'
                    : checklist!.confidenceLevel >= 60
                      ? 'medium'
                      : checklist!.confidenceLevel >= 40
                        ? 'low'
                        : 'poor';
                try {
                  return factChecklistI18n.getConfidenceText(level);
                } catch {
                  return checklist!.confidenceText;
                }
              })(),
              translationKey: `checklist.confidence.${checklist!.confidenceLevel >= 80 ? 'high' : checklist!.confidenceLevel >= 60 ? 'medium' : checklist!.confidenceLevel >= 40 ? 'low' : 'poor'}`
            },
            judgment: processedJudgment,
            advice: {
              text: (() => {
                const level =
                  checklist!.confidenceLevel >= 80
                    ? 'high'
                    : checklist!.confidenceLevel >= 60
                      ? 'medium'
                      : checklist!.confidenceLevel >= 40
                        ? 'low'
                        : 'poor';
                try {
                  return factChecklistI18n.getConfidenceLevelAdvice(level);
                } catch {
                  return checklist!.judgmentAdvice;
                }
              })(),
              translationKey: `checklist.advice.${checklist!.confidenceLevel >= 80 ? 'high' : checklist!.confidenceLevel >= 60 ? 'medium' : checklist!.confidenceLevel >= 40 ? 'low' : 'poor'}`
            }
          }
        : undefined,

      // チェック項目
      items: processedItems,

      // セクション別統計
      sections: processedSections,

      // エクスポート設定
      exportOptions: {
        includeGuides: exportOptions.includeGuides,
        includeNotes: exportOptions.includeNotes,
        includeSummary: exportOptions.includeSummary,
        format: 'json',
        language: currentLang
      },

      // 多言語サポート情報
      i18n: {
        supportedLanguages: supportedLangs,
        currentLanguage: currentLang,
        fallbackLanguage: 'ja',
        note: 'This export includes internationalization data. The `i18n` fields contain translation keys and current language text.'
      }
    };

    // undefinedのプロパティを削除
    const cleanObject = (obj: any): any => {
      if (obj === null || typeof obj !== 'object') return obj;
      if (Array.isArray(obj)) return obj.map(cleanObject);

      const cleaned: any = {};
      for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined) {
          cleaned[key] = cleanObject(value);
        }
      }
      return cleaned;
    };

    const cleanedExportData = cleanObject(exportData);

    updateProgress(70, 100, t('export.progress.generating'), t('export.progress.generating'));
    const jsonString = JSON.stringify(cleanedExportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const filename = `${t('app.title')}_${checklist!.title}_${new Date().toISOString().slice(0, 10)}.json`;
    downloadBlob(blob, filename);
  }

  async function exportToMarkdown() {
    updateProgress(30, 100, t('export.progress.generating'), t('export.progress.generating'));
    const markdownContent = generateMarkdownContent();
    updateProgress(70, 100, t('export.progress.finalizing'), t('export.progress.finalizing'));
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const filename = `${t('app.title')}_${checklist!.title}_${new Date().toISOString().slice(0, 10)}.md`;
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
      alert(`📋 ${t('success.copied')}`);
    } catch (error) {
      console.error('コピーに失敗:', error);
      alert(`❌ ${t('errors.general')}`);
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
      <h2 id="modal-title">📄 {t('export.title')}</h2>
      <button class="close-btn" onclick={onClose} aria-label={t('common.close')}> ✕ </button>
    </div>

    <div class="modal-body">
      <!-- フォーマット選択 -->
      <div class="option-group">
        <h3>📋 {t('export.format')}</h3>
        <div class="format-options">
          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="pdf"
              checked={exportOptions.format === 'pdf'}
              onchange={() => updateExportOption('format', 'pdf')}
            />
            <span>📄 {t('export.formats.pdf')}</span>
            <small>{t('export.pdfModes.pixelPerfect')}</small>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="html"
              checked={exportOptions.format === 'html'}
              onchange={() => updateExportOption('format', 'html')}
            />
            <span>🌐 {t('export.formats.html')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="json"
              checked={exportOptions.format === 'json'}
              onchange={() => updateExportOption('format', 'json')}
            />
            <span>📊 {t('export.formats.json')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="markdown"
              checked={exportOptions.format === 'markdown'}
              onchange={() => updateExportOption('format', 'markdown')}
            />
            <span>📝 {t('export.formats.markdown')}</span>
            <small>{t('export.description')}</small>
          </label>
        </div>
      </div>

      <!-- 内容オプション -->
      <div class="option-group">
        <h3>📝 {t('export.options')}</h3>
        <div class="checkbox-options">
          <label class="checkbox-option">
            <input
              type="checkbox"
              checked={exportOptions.includeSummary}
              onchange={e =>
                updateExportOption('includeSummary', (e.target as HTMLInputElement).checked)}
            />
            <span>📊 {t('export.includeSummary')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="checkbox-option">
            <input
              type="checkbox"
              checked={exportOptions.includeGuides}
              onchange={e =>
                updateExportOption('includeGuides', (e.target as HTMLInputElement).checked)}
            />
            <span>📚 {t('export.includeGuides')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="checkbox-option">
            <input
              type="checkbox"
              checked={exportOptions.includeNotes}
              onchange={e =>
                updateExportOption('includeNotes', (e.target as HTMLInputElement).checked)}
            />
            <span>📝 {t('export.includeNotes')}</span>
            <small>{t('export.description')}</small>
          </label>

          {#if exportOptions.format === 'pdf' || exportOptions.format === 'markdown'}
            <label class="checkbox-option">
              <input
                type="checkbox"
                checked={exportOptions.sectionBreaks}
                onchange={e =>
                  updateExportOption('sectionBreaks', (e.target as HTMLInputElement).checked)}
              />
              <span>📄 {t('export.sectionBreaks')}</span>
              <small>{t('export.description')}</small>
            </label>
          {/if}

          {#if exportOptions.format === 'pdf'}
            <div class="pdf-mode-section">
              <div class="section-label">{t('export.pdfModes.pixelPerfect')}</div>

              <label class="checkbox-option">
                <input
                  type="checkbox"
                  checked={exportOptions.pixelPerfectMode}
                  onchange={e =>
                    updateExportOption('pixelPerfectMode', (e.target as HTMLInputElement).checked)}
                />
                <span>🎨 {t('export.pdfModes.pixelPerfect')}</span>
                <small>{t('export.pdfModes.pixelPerfect')}</small>
              </label>

              <label class="checkbox-option">
                <input
                  type="checkbox"
                  checked={exportOptions.reliableMode}
                  onchange={e =>
                    updateExportOption('reliableMode', (e.target as HTMLInputElement).checked)}
                />
                <span>🔥 {t('export.pdfModes.reliableFont')}</span>
                <small>{t('export.pdfModes.reliableFont')}</small>
              </label>

              <label class="checkbox-option">
                <input
                  type="checkbox"
                  checked={exportOptions.textMode}
                  onchange={e =>
                    updateExportOption('textMode', (e.target as HTMLInputElement).checked)}
                />
                <span>🔤 {t('export.pdfModes.textBased')}</span>
                <small>{t('export.pdfModes.textBased')}</small>
              </label>
            </div>

            <label class="checkbox-option">
              <input
                type="checkbox"
                checked={exportOptions.advancedMode}
                onchange={e =>
                  updateExportOption('advancedMode', (e.target as HTMLInputElement).checked)}
              />
              <span>⚡ {t('export.description')}</span>
              <small>{t('export.description')}</small>
            </label>

            <!-- プラットフォーム機能表示 -->
            {#if platformStore.capabilities.isNativeApp || supportedFeatures.hasNativeFeatures}
              <div class="platform-info">
                <div class="platform-badge">
                  {#if platformStore.capabilities.isNativeApp}
                    📱 {t('export.description')}
                  {:else}
                    🌐 {t('export.description')}
                  {/if}
                </div>
                <div class="feature-list">
                  {#if supportedFeatures.canSave}
                    <span class="feature-item">💾 {t('common.save')}</span>
                  {/if}
                  {#if supportedFeatures.canShare}
                    <span class="feature-item">📤 {t('common.share')}</span>
                  {/if}
                  {#if supportedFeatures.qualityLevel === 'high'}
                    <span class="feature-item">✨ {t('export.description')}</span>
                  {/if}
                </div>
              </div>
            {/if}
          {/if}
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <!-- 進捗インジケータ -->
      {#if isExporting}
        <div class="progress-container">
          <div class="progress-header">
            <span class="progress-stage">{exportProgress.stage}</span>
            <span class="progress-percentage">{Math.round(exportProgress.current)}%</span>
          </div>
          <div class="progress-bar">
            <div
              class="progress-fill"
              style:width="{(exportProgress.current / exportProgress.total) * 100}%"
            ></div>
          </div>
          <div class="progress-message">{exportProgress.message}</div>
        </div>
      {/if}

      <!-- エラー表示 -->
      {#if exportError}
        <div class="error-container">
          <div class="error-header">
            <span class="error-icon">⚠️</span>
            <span class="error-title">{t('errors.export')}</span>
          </div>
          <div class="error-message">{exportError}</div>
          <div class="error-actions">
            <button class="btn btn-secondary btn-small" onclick={resetExportState}>
              🔄 {t('common.reset')}
            </button>
          </div>
        </div>
      {/if}

      <!-- 成功表示 -->
      {#if exportSuccess}
        <div class="success-container">
          <div class="success-header">
            <span class="success-icon">✅</span>
            <span class="success-title">{t('export.progress.completed')}</span>
          </div>
          <div class="success-message">{t('success.exported')}</div>
        </div>
      {/if}

      <div class="action-buttons">
        <button
          class="btn btn-secondary"
          onclick={copyToClipboard}
          disabled={!checklist || isExporting}
        >
          📋 {t('common.copy')}
        </button>

        <button class="btn btn-primary" onclick={handleExport} disabled={!checklist || isExporting}>
          {isExporting ? `⏳ ${t('export.progress.generating')}` : `📤 ${t('common.export')}`}
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

  /* PDFモードセクション */
  .pdf-mode-section {
    margin-top: 10px;
    padding: 15px;
    background: rgba(52, 152, 219, 0.05);
    border: 1px solid rgba(52, 152, 219, 0.2);
    border-radius: 8px;
  }

  .section-label {
    font-size: 12px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .pdf-mode-section .checkbox-option {
    margin-bottom: 8px;
  }

  .pdf-mode-section .checkbox-option:last-child {
    margin-bottom: 0;
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

  /* 進捗インジケータスタイル */
  .progress-container {
    margin-bottom: 20px;
    padding: 16px;
    background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
    border-radius: 12px;
    border-left: 4px solid #3498db;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .progress-stage {
    font-weight: 600;
    color: #2c3e50;
    font-size: 14px;
  }

  .progress-percentage {
    font-weight: 700;
    color: #3498db;
    font-size: 14px;
  }

  .progress-bar {
    height: 8px;
    background: rgba(52, 152, 219, 0.2);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3498db, #2980b9);
    border-radius: 4px;
    transition: width 0.3s ease;
    position: relative;
  }

  .progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .progress-message {
    font-size: 13px;
    color: #5a6c7d;
    font-style: italic;
  }

  /* エラー表示スタイル */
  .error-container {
    margin-bottom: 20px;
    padding: 16px;
    background: linear-gradient(135deg, #fdebeb, #f1d4d4);
    border-radius: 12px;
    border-left: 4px solid #e74c3c;
  }

  .error-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .error-icon {
    font-size: 16px;
  }

  .error-title {
    font-weight: 600;
    color: #c0392b;
    font-size: 14px;
  }

  .error-message {
    color: #721c24;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 12px;
  }

  .error-actions {
    display: flex;
    gap: 8px;
  }

  .btn-small {
    padding: 6px 12px;
    font-size: 12px;
  }

  /* 成功表示スタイル */
  .success-container {
    margin-bottom: 20px;
    padding: 16px;
    background: linear-gradient(135deg, #ebf7eb, #d4f1d4);
    border-radius: 12px;
    border-left: 4px solid #27ae60;
  }

  .success-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .success-icon {
    font-size: 16px;
  }

  .success-title {
    font-weight: 600;
    color: #1e8449;
    font-size: 14px;
  }

  .success-message {
    color: #145a32;
    font-size: 13px;
    line-height: 1.4;
  }

  /* レスポンシブ対応 */
  @media (max-width: 480px) {
    .progress-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    .error-header,
    .success-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
</style>
