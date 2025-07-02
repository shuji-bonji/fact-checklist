// src/lib/components/export/ExportUtils.ts
// エクスポート用ユーティリティ関数

import type { ChecklistResult, CheckItem } from '$lib/types/checklist.js';
import type { ExportOptions } from './ExportOptions.svelte.js';
import type {
  FactChecklistI18n,
  GetCurrentLanguageFunction,
  GetSupportedLanguagesFunction
} from '$lib/types/i18n.js';
import { CATEGORIES } from '$lib/data/checklist-items.js';

/**
 * セクション情報インターフェース
 */
export interface SectionInfo {
  category: (typeof CATEGORIES)[0];
  items: CheckItem[];
  checkedItems: CheckItem[];
  uncheckedItems: CheckItem[];
  completionRate: number;
}

/**
 * セクション別にアイテムを分類する
 * @param checklist チェックリスト結果
 * @returns セクション情報配列
 */
export function groupItemsByCategory(checklist: ChecklistResult | null): SectionInfo[] {
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
      completionRate: items.length > 0 ? Math.round((checkedItems.length / items.length) * 100) : 0
    };
  });
}

/**
 * チェックアイテムをHTMLとして描画する
 * @param item チェックアイテム
 * @param options エクスポートオプション
 * @param factChecklistI18n 国際化オブジェクト
 * @returns HTML文字列
 */
export function renderCheckItem(
  item: CheckItem,
  options: ExportOptions,
  factChecklistI18n?: FactChecklistI18n,
  t?: (key: string) => string
): string {
  return `
    <div class="check-item ${item.checked ? 'checked' : 'unchecked'}">
      <div class="check-item-header">
        <span class="check-icon">${item.checked ? '✅' : '❌'}</span>
        <div style="flex: 1;">
          <div class="check-item-title">${
            factChecklistI18n && item.translationKey
              ? (factChecklistI18n.getCheckItemTitle?.(item.translationKey) ?? item.title)
              : item.title
          }</div>
          <div class="check-item-description">${
            factChecklistI18n && item.translationKey
              ? (factChecklistI18n.getCheckItemDescription?.(item.translationKey) ??
                item.description)
              : item.description
          }</div>
          ${
            options.includeGuides && item.guideContent
              ? `
            <div class="check-item-guide">
              <div class="guide-title">${
                factChecklistI18n && item.translationKey
                  ? (factChecklistI18n.getCheckItemGuideTitle?.(item.translationKey) ??
                    item.guideContent.title)
                  : item.guideContent.title
              }</div>
              <div>${
                factChecklistI18n && item.translationKey
                  ? (
                      factChecklistI18n.getCheckItemGuideContent?.(item.translationKey) ??
                      item.guideContent.content
                    ).replace(/\n/g, '<br>')
                  : item.guideContent.content.replace(/\n/g, '<br>')
              }</div>
              ${
                item.guideContent.examples &&
                (item.guideContent.examples.good.length > 0 ||
                  item.guideContent.examples.bad.length > 0)
                  ? `
                <div class="guide-examples">
                  <div class="examples-title">${t ? t('export.examples') : 'Examples'}:</div>
                  ${
                    factChecklistI18n && item.translationKey
                      ? (() => {
                          const goodExamples =
                            factChecklistI18n.getCheckItemGuideExamplesGood?.(
                              item.translationKey
                            ) ?? [];
                          return goodExamples.length > 0
                            ? `
                          <div class="good-examples">
                            <div class="example-type">${t ? t('export.goodExamples') : 'Good Examples'}:</div>
                            <ul>
                              ${goodExamples.map((example: string) => `<li>${example}</li>`).join('')}
                            </ul>
                          </div>
                        `
                            : '';
                        })() +
                        (() => {
                          const badExamples =
                            factChecklistI18n.getCheckItemGuideExamplesBad?.(item.translationKey) ??
                            [];
                          return badExamples.length > 0
                            ? `
                          <div class="bad-examples">
                            <div class="example-type">${t ? t('export.badExamples') : 'Bad Examples'}:</div>
                            <ul>
                              ${badExamples.map((example: string) => `<li>${example}</li>`).join('')}
                            </ul>
                          </div>
                        `
                            : '';
                        })()
                      : `
                        ${
                          item.guideContent.examples.good.length > 0
                            ? `
                          <div class="good-examples">
                            <div class="example-type">${t ? t('export.goodExamples') : 'Good Examples'}:</div>
                            <ul>
                              ${item.guideContent.examples.good.map(example => `<li>${example}</li>`).join('')}
                            </ul>
                          </div>
                        `
                            : ''
                        }
                        ${
                          item.guideContent.examples.bad.length > 0
                            ? `
                          <div class="bad-examples">
                            <div class="example-type">${t ? t('export.badExamples') : 'Bad Examples'}:</div>
                            <ul>
                              ${item.guideContent.examples.bad.map(example => `<li>${example}</li>`).join('')}
                            </ul>
                          </div>
                        `
                            : ''
                        }
                      `
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

/**
 * セクション別HTMLコンテンツを生成する
 * @param checklist チェックリスト結果
 * @param options エクスポートオプション
 * @param factChecklistI18n 国際化オブジェクト
 * @param getCurrentLanguage 現在の言語取得関数
 * @param getSupportedLanguages サポート言語取得関数
 * @returns HTML文字列
 */
export async function generateSectionedHTMLContent(
  checklist: ChecklistResult,
  options: ExportOptions,
  factChecklistI18n: FactChecklistI18n,
  t: (key: string) => string,
  getCurrentLanguage: GetCurrentLanguageFunction,
  _getSupportedLanguages: GetSupportedLanguagesFunction
): Promise<string> {
  const sections = groupItemsByCategory(checklist);
  const currentLanguage = getCurrentLanguage();

  // 基本情報
  const appTitle = t('app.title');
  const checklistTitle = checklist.title;
  const title = checklistTitle ? `${appTitle} - ${checklistTitle}` : appTitle;
  const description = checklist.description || t('app.description');
  const createdAt = checklist.createdAt ? new Date(checklist.createdAt).toLocaleDateString() : '';
  const score = checklist.score;
  const confidenceLevel = checklist.confidenceLevel;
  const judgment = checklist.judgment;

  return `
<!DOCTYPE html>
<html lang="${currentLanguage}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('app.title')} - ${title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif;
      line-height: 1.6;
      color: #333;
      background: #fff;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 3px solid #2c3e50;
    }
    
    .title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 10px;
    }
    
    .subtitle {
      font-size: 1.8rem;
      font-weight: 600;
      color: #34495e;
      margin-bottom: 15px;
      font-style: italic;
    }
    
    .description {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 20px;
    }
    
    .metadata {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-bottom: 20px;
    }
    
    .metadata-item {
      background: #f8f9fa;
      padding: 10px;
      border-radius: 5px;
      border-left: 4px solid #2c3e50;
    }
    
    .metadata-label {
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 5px;
    }
    
    .metadata-value {
      color: #333;
    }
    
    .section {
      margin-bottom: 40px;
      ${options.sectionBreaks ? 'page-break-before: always;' : ''}
    }
    
    .section-header {
      background: linear-gradient(135deg, #2c3e50, #34495e);
      color: white;
      padding: 20px;
      border-radius: 10px 10px 0 0;
      margin-bottom: 0;
    }
    
    .section-title {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .section-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .completion-rate {
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    .item-count {
      font-size: 0.9rem;
      opacity: 0.9;
    }
    
    .section-items {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 0 0 10px 10px;
      border: 1px solid #e9ecef;
      border-top: none;
    }
    
    .check-item {
      background: white;
      margin-bottom: 15px;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #ddd;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .check-item.checked {
      border-left-color: #27ae60;
      background: #f8fff8;
    }
    
    .check-item.unchecked {
      border-left-color: #e74c3c;
      background: #fff8f8;
    }
    
    .check-item-header {
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    
    .check-icon {
      font-size: 1.2rem;
      margin-top: 2px;
    }
    
    .check-item-title {
      font-size: 1.1rem;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 8px;
    }
    
    .check-item-description {
      color: #555;
      margin-bottom: 10px;
    }
    
    .check-item-guide {
      background: #e8f4fd;
      padding: 15px;
      border-radius: 5px;
      margin-top: 10px;
      border-left: 3px solid #3498db;
    }
    
    .guide-title {
      font-weight: bold;
      color: #2980b9;
      margin-bottom: 8px;
    }
    
    .guide-examples {
      margin-top: 10px;
    }
    
    .examples-title {
      font-weight: bold;
      margin-bottom: 8px;
      color: #2980b9;
    }
    
    .good-examples, .bad-examples {
      margin-bottom: 10px;
    }
    
    .example-type {
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .good-examples .example-type {
      color: #27ae60;
    }
    
    .bad-examples .example-type {
      color: #e74c3c;
    }
    
    .example {
      margin-bottom: 8px;
    }
    
    .example.good {
      border-left: 3px solid #27ae60;
      padding-left: 10px;
    }
    
    .example.bad {
      border-left: 3px solid #e74c3c;
      padding-left: 10px;
    }
    
    .check-item-notes {
      background: #fff3cd;
      padding: 10px;
      border-radius: 5px;
      margin-top: 10px;
      border-left: 3px solid #ffc107;
    }
    
    .notes-title {
      font-weight: bold;
      color: #856404;
      margin-bottom: 5px;
    }
    
    .summary {
      background: linear-gradient(135deg, #f8f9fa, #e9ecef);
      padding: 30px;
      border-radius: 15px;
      margin-top: 40px;
      border: 1px solid #dee2e6;
    }
    
    .summary-title {
      font-size: 1.8rem;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .summary-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .summary-stat {
      text-align: center;
      background: white;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .summary-stat-value {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .summary-stat-label {
      color: #666;
      font-size: 0.9rem;
    }
    
    .judgment {
      text-align: center;
      margin-top: 20px;
      padding: 20px;
      border-radius: 10px;
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    .judgment.accept {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }
    
    .judgment.caution {
      background: #fff3cd;
      color: #856404;
      border: 1px solid #ffeaa7;
    }
    
    .judgment.reject {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
    
    @media print {
      body {
        max-width: none;
        margin: 0;
        padding: 15px;
      }
      
      .section {
        ${options.sectionBreaks ? 'page-break-before: always;' : ''}
      }
      
      .check-item {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="title">${appTitle}</div>
    ${checklistTitle ? `<div class="subtitle">${checklistTitle}</div>` : ''}
    <div class="description">${description}</div>
    
    <div class="metadata">
      <div class="metadata-item">
        <div class="metadata-label">${t('export.metadata.created')}</div>
        <div class="metadata-value">${createdAt}</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-label">${t('export.metadata.score')}</div>
        <div class="metadata-value">${score.total}/${score.maxScore} (${Math.round((score.total / score.maxScore) * 100)}%)</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-label">${t('export.metadata.confidence')}</div>
        <div class="metadata-value">${confidenceLevel}%</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-label">${t('export.metadata.language')}</div>
        <div class="metadata-value">${currentLanguage}</div>
      </div>
    </div>
  </div>

  ${sections
    .map(
      section => `
    <div class="section">
      <div class="section-header">
        <div class="section-title">
          <span>${t(`categories.${section.category.id}.emoji`)}</span>
          <span>${t(`categories.${section.category.id}.name`)}</span>
        </div>
        <div class="section-stats">
          <div class="completion-rate">${section.completionRate}% ${t('export.completed')}</div>
          <div class="item-count">${section.checkedItems.length}/${section.items.length} ${t('export.items')}</div>
        </div>
      </div>
      <div class="section-items">
        ${section.items.map(item => renderCheckItem(item, options, factChecklistI18n, t)).join('')}
      </div>
    </div>
  `
    )
    .join('')}

  ${
    options.includeSummary
      ? `
    <div class="summary">
      <div class="summary-title">${t('export.summary.title')}</div>
      
      <div class="summary-stats">
        <div class="summary-stat">
          <div class="summary-stat-value">${score.total}</div>
          <div class="summary-stat-label">${t('export.summary.totalScore')}</div>
        </div>
        <div class="summary-stat">
          <div class="summary-stat-value">${Math.round((score.total / score.maxScore) * 100)}%</div>
          <div class="summary-stat-label">${t('export.summary.completionRate')}</div>
        </div>
        <div class="summary-stat">
          <div class="summary-stat-value">${confidenceLevel}%</div>
          <div class="summary-stat-label">${t('export.summary.confidenceLevel')}</div>
        </div>
        <div class="summary-stat">
          <div class="summary-stat-value">${sections.reduce((acc, section) => acc + section.checkedItems.length, 0)}</div>
          <div class="summary-stat-label">${t('export.summary.checkedItems')}</div>
        </div>
      </div>
      
      ${
        judgment
          ? `
        <div class="judgment ${judgment}">
          ${t(`export.judgment.${judgment}`)}
        </div>
      `
          : ''
      }
    </div>
  `
      : ''
  }
</body>
</html>
  `;
}

/**
 * Markdownコンテンツを生成する
 * @param checklist チェックリスト結果
 * @param options エクスポートオプション
 * @param factChecklistI18n 国際化オブジェクト
 * @returns Markdown文字列
 */
export async function generateMarkdownContent(
  checklist: ChecklistResult,
  options: ExportOptions,
  factChecklistI18n: FactChecklistI18n,
  t: (key: string) => string
): Promise<string> {
  const sections = groupItemsByCategory(checklist);
  const title = checklist.title || t('app.title');
  const description = checklist.description || t('app.description');
  const createdAt = checklist.createdAt ? new Date(checklist.createdAt).toLocaleDateString() : '';
  const score = checklist.score;
  const confidenceLevel = checklist.confidenceLevel;
  const judgment = checklist.judgment;

  let markdown = `# ${title}\n\n`;
  markdown += `${description}\n\n`;

  markdown += `## ${t('export.metadata.title')}\n\n`;
  markdown += `- **${t('export.metadata.created')}**: ${createdAt}\n`;
  markdown += `- **${t('export.metadata.score')}**: ${score.total}/${score.maxScore} (${Math.round((score.total / score.maxScore) * 100)}%)\n`;
  markdown += `- **${t('export.metadata.confidence')}**: ${confidenceLevel}%\n\n`;

  // セクション別の内容
  for (const section of sections) {
    markdown += `## ${section.category.emoji} ${
      factChecklistI18n.getCategoryTitle
        ? factChecklistI18n.getCategoryTitle(section.category.id)
        : section.category.name
    }\n\n`;

    markdown += `**${t('export.completionStatus')}**: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length})\n\n`;

    for (const item of section.items) {
      markdown += `### ${item.checked ? '✅' : '❌'} ${
        factChecklistI18n && item.translationKey
          ? (factChecklistI18n.getCheckItemTitle?.(item.translationKey) ?? item.title)
          : item.title
      }\n\n`;

      markdown += `${
        factChecklistI18n && item.translationKey
          ? (factChecklistI18n.getCheckItemDescription?.(item.translationKey) ?? item.description)
          : item.description
      }\n\n`;

      if (options.includeGuides && item.guideContent) {
        markdown += `#### ${
          factChecklistI18n && item.translationKey
            ? (factChecklistI18n.getCheckItemGuideTitle?.(item.translationKey) ??
              item.guideContent.title)
            : item.guideContent.title
        }\n\n`;

        markdown += `${
          factChecklistI18n && item.translationKey
            ? (factChecklistI18n.getCheckItemGuideContent?.(item.translationKey) ??
              item.guideContent.content)
            : item.guideContent.content
        }\n\n`;

        if (
          item.guideContent.examples &&
          (item.guideContent.examples.good.length > 0 || item.guideContent.examples.bad.length > 0)
        ) {
          markdown += '**Examples:**\n\n';
          for (const example of item.guideContent.examples.good) {
            markdown += `- **Good Example**: ${example}\n`;
          }
          for (const example of item.guideContent.examples.bad) {
            markdown += `- **Bad Example**: ${example}\n`;
          }
          markdown += '\n';
        }
      }
    }
  }

  // サマリー
  if (options.includeSummary) {
    markdown += `## ${t('export.summary.title')}\n\n`;
    markdown += `- **${t('export.summary.totalScore')}**: ${score.total}\n`;
    markdown += `- **${t('export.summary.completionRate')}**: ${Math.round((score.total / score.maxScore) * 100)}%\n`;
    markdown += `- **${t('export.summary.confidenceLevel')}**: ${confidenceLevel}%\n`;
    markdown += `- **${t('export.summary.checkedItems')}**: ${sections.reduce((acc, section) => acc + section.checkedItems.length, 0)}\n\n`;

    if (judgment) {
      markdown += `### ${t('export.judgment.title')}\n\n`;
      markdown += `**${t(`export.judgment.${judgment}`)}**\n\n`;
    }
  }

  return markdown;
}
