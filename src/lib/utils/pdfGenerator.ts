// src/lib/utils/pdfGenerator.ts
/**
 * テキストベースPDF生成ユーティリティ
 * html2canvasを使わず、jsPDFのテキストAPIで日本語対応PDFを生成
 */

import type jsPDF from 'jspdf';
import type { ChecklistResult, CheckItem } from '$lib/types/checklist.js';
import { CATEGORIES } from '$lib/data/checklist-items.js';
import {
  addJapaneseFontToPDF,
  setFontSize,
  setFontStyle,
  calculateTextLines,
  getTextWidth,
  debugFontStatus,
  DEFAULT_FONT_CONFIG,
  type FontConfig
} from './japaneseFont.js';

export interface PDFGenerationOptions {
  includeGuides: boolean;
  includeNotes: boolean;
  includeSummary: boolean;
  sectionBreaks: boolean;
  fontConfig?: Partial<FontConfig>;
  useTextMode: boolean; // true: テキストベース, false: 画像ベース
}

interface PageLayout {
  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  lineHeight: number;
}

const DEFAULT_LAYOUT: PageLayout = {
  width: 210, // A4幅 (mm)
  height: 297, // A4高さ (mm)
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 15,
  marginRight: 15,
  lineHeight: 1.4
};

/**
 * テキストベースPDF生成のメイン関数
 */
export async function generateTextBasedPDF(
  checklist: ChecklistResult,
  options: PDFGenerationOptions
): Promise<jsPDF> {
  // jsPDFを動的インポート
  const { default: jsPDF } = await import('jspdf');

  const pdf = new jsPDF('p', 'mm', 'a4');
  const layout = DEFAULT_LAYOUT;
  const fontConfig = { ...DEFAULT_FONT_CONFIG, ...options.fontConfig };

  // 日本語フォントを設定
  console.log('PDF生成開始: フォント初期化中...');
  const actualFontName = await addJapaneseFontToPDF(pdf, fontConfig);
  console.log(`使用フォント決定: ${actualFontName}`);

  // CSP制約により外部フォント取得が制限されている場合の警告
  if (actualFontName === 'helvetica') {
    console.log('📋 PDF生成情報:');
    console.log('  • ブラウザのセキュリティポリシー(CSP)により外部フォント取得が制限されています');
    console.log('  • 日本語文字は標準フォント(Helvetica)で表示されます');
    console.log('  • テキストは検索可能な形式で埋め込まれます');
  }

  // フォント状態をデバッグ
  debugFontStatus(pdf);

  // フォント設定を実際に読み込まれたフォントに更新
  const actualFontConfig = { ...fontConfig, name: actualFontName };

  let currentY = layout.marginTop;
  let _currentPage = 1;

  // PDFコンテンツの生成
  if (options.includeSummary) {
    currentY = await addHeaderAndSummary(pdf, checklist, layout, actualFontConfig, currentY);
  } else {
    currentY = await addHeader(pdf, checklist, layout, actualFontConfig, currentY);
  }

  // セクション別チェック項目の追加
  const sections = groupItemsByCategory(checklist);

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (!section) continue;

    // セクション区切りページの追加
    if (options.sectionBreaks && i > 0) {
      pdf.addPage();
      currentY = layout.marginTop;
      _currentPage++;
    }

    // ページが不足する場合の改ページ
    if (currentY > layout.height - layout.marginBottom - 40) {
      pdf.addPage();
      currentY = layout.marginTop;
      _currentPage++;
    }

    currentY = await addSection(pdf, section, layout, actualFontConfig, currentY, options);
  }

  // ノートの追加
  if (options.includeNotes && checklist.notes) {
    // ページが不足する場合の改ページ
    if (currentY > layout.height - layout.marginBottom - 40) {
      pdf.addPage();
      currentY = layout.marginTop;
      _currentPage++;
    }

    currentY = await addNotes(pdf, checklist.notes, layout, actualFontConfig, currentY);
  }

  // フッターの追加
  addFooter(pdf, layout, actualFontConfig);

  return pdf;
}

/**
 * ヘッダーとサマリーの追加
 */
async function addHeaderAndSummary(
  pdf: jsPDF,
  checklist: ChecklistResult,
  layout: PageLayout,
  fontConfig: FontConfig,
  startY: number
): Promise<number> {
  let y = startY;
  const contentWidth = layout.width - layout.marginLeft - layout.marginRight;

  // タイトル
  setFontStyle(pdf, 'bold', fontConfig.name);
  setFontSize(pdf, 'title', fontConfig);
  pdf.setTextColor(44, 62, 80); // #2c3e50

  // 📋絵文字とタイトル
  const titleText = `📋 ${checklist.title}`;
  pdf.text(titleText, layout.marginLeft, y);
  y += fontConfig.sizes.title * layout.lineHeight;

  // 区切り線
  pdf.setDrawColor(44, 62, 80);
  pdf.setLineWidth(0.5);
  pdf.line(layout.marginLeft, y, layout.width - layout.marginRight, y);
  y += 10;

  // メタ情報
  setFontStyle(pdf, 'normal', fontConfig.name);
  setFontSize(pdf, 'small', fontConfig);
  pdf.setTextColor(102, 102, 102); // #666

  const metaInfo = [
    `作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}`,
    checklist.completedAt ? `評価完了日: ${checklist.completedAt.toLocaleDateString('ja-JP')}` : '',
    `出力日: ${new Date().toLocaleDateString('ja-JP')}`
  ].filter(Boolean);

  for (const info of metaInfo) {
    pdf.text(info, layout.marginLeft, y);
    y += fontConfig.sizes.small * layout.lineHeight;
  }
  y += 10;

  // サマリー背景
  pdf.setFillColor(248, 249, 250); // #f8f9fa
  pdf.setDrawColor(52, 152, 219); // #3498db
  pdf.setLineWidth(2);
  const summaryHeight = 80;
  pdf.rect(layout.marginLeft, y, contentWidth, summaryHeight, 'FD');

  // サマリータイトル
  setFontSize(pdf, 'heading', fontConfig);
  setFontStyle(pdf, 'bold', fontConfig.name);
  pdf.setTextColor(44, 62, 80);
  y += 15;
  pdf.text('📊 評価結果サマリー', layout.marginLeft + 10, y);
  y += 15;

  // サマリー内容
  setFontSize(pdf, 'body', fontConfig);
  setFontStyle(pdf, 'normal', fontConfig.name);
  pdf.setTextColor(51, 51, 51);

  const summaryItems = [
    `総合スコア: ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)`,
    `信頼度: ${checklist.confidenceText}`,
    `最終判定: ${getJudgmentText(checklist.judgment)}`,
    checklist.judgmentAdvice ? `推奨: ${checklist.judgmentAdvice}` : ''
  ].filter(Boolean);

  for (const item of summaryItems) {
    pdf.text(item, layout.marginLeft + 15, y);
    y += fontConfig.sizes.body * layout.lineHeight;
  }

  return y + 20;
}

/**
 * ヘッダーのみの追加
 */
async function addHeader(
  pdf: jsPDF,
  checklist: ChecklistResult,
  layout: PageLayout,
  fontConfig: FontConfig,
  startY: number
): Promise<number> {
  let y = startY;

  // タイトル
  setFontStyle(pdf, 'bold', fontConfig.name);
  setFontSize(pdf, 'title', fontConfig);
  pdf.setTextColor(44, 62, 80);

  const titleText = `📋 ${checklist.title}`;
  pdf.text(titleText, layout.marginLeft, y);
  y += fontConfig.sizes.title * layout.lineHeight;

  // 区切り線
  pdf.setDrawColor(44, 62, 80);
  pdf.setLineWidth(0.5);
  pdf.line(layout.marginLeft, y, layout.width - layout.marginRight, y);

  return y + 15;
}

/**
 * セクションの追加
 */
async function addSection(
  pdf: jsPDF,
  section: SectionData,
  layout: PageLayout,
  fontConfig: FontConfig,
  startY: number,
  options: PDFGenerationOptions
): Promise<number> {
  let y = startY;
  const contentWidth = layout.width - layout.marginLeft - layout.marginRight;

  // セクションヘッダー背景
  const headerHeight = 25;
  const headerColor = getSectionColor(section.category.id);
  pdf.setFillColor(headerColor.r, headerColor.g, headerColor.b);
  pdf.rect(layout.marginLeft, y, contentWidth, headerHeight, 'F');

  // セクションタイトル
  setFontStyle(pdf, 'bold', fontConfig.name);
  setFontSize(pdf, 'heading', fontConfig);
  pdf.setTextColor(255, 255, 255); // 白文字

  const sectionTitle = `${section.category.emoji} ${section.category.name}`;
  pdf.text(sectionTitle, layout.marginLeft + 10, y + 15);

  // 達成率
  const statsText = `${section.checkedItems.length}/${section.items.length} 完了 (${section.completionRate}%)`;
  const statsX =
    layout.width -
    layout.marginRight -
    getTextWidth(pdf, statsText, fontConfig.sizes.heading, fontConfig.name) -
    10;
  pdf.text(statsText, statsX, y + 15);

  y += headerHeight + 10;

  // セクション説明
  setFontStyle(pdf, 'normal', fontConfig.name);
  setFontSize(pdf, 'small', fontConfig);
  pdf.setTextColor(102, 102, 102);

  const descriptionLines = calculateTextLines(
    pdf,
    section.category.description,
    contentWidth - 20,
    fontConfig.sizes.small,
    fontConfig.name
  );

  for (const line of descriptionLines) {
    pdf.text(line, layout.marginLeft + 10, y);
    y += fontConfig.sizes.small * layout.lineHeight;
  }
  y += 10;

  // チェック項目
  for (const item of section.items) {
    // ページ境界チェック
    const itemHeight = calculateItemHeight(pdf, item, layout, fontConfig, options);
    if (y + itemHeight > layout.height - layout.marginBottom) {
      pdf.addPage();
      y = layout.marginTop;
    }

    y = await addCheckItem(pdf, item, layout, fontConfig, y, options);
  }

  return y + 15;
}

/**
 * チェック項目の追加
 */
async function addCheckItem(
  pdf: jsPDF,
  item: CheckItem,
  layout: PageLayout,
  fontConfig: FontConfig,
  startY: number,
  options: PDFGenerationOptions
): Promise<number> {
  let y = startY;
  const contentWidth = layout.width - layout.marginLeft - layout.marginRight;
  const itemPadding = 15;

  // アイテム背景
  const bgColor = item.checked ? { r: 213, g: 244, b: 230 } : { r: 255, g: 234, b: 167 };
  const borderColor = item.checked ? { r: 39, g: 174, b: 96 } : { r: 225, g: 112, b: 85 };

  // 背景の高さを計算
  const itemHeight = calculateItemHeight(pdf, item, layout, fontConfig, options);

  // 背景とボーダー
  pdf.setFillColor(bgColor.r, bgColor.g, bgColor.b);
  pdf.setDrawColor(borderColor.r, borderColor.g, borderColor.b);
  pdf.setLineWidth(1);
  pdf.rect(layout.marginLeft, y, contentWidth, itemHeight, 'FD');

  y += itemPadding;

  // チェックアイコンとタイトル
  setFontStyle(pdf, 'bold', fontConfig.name);
  setFontSize(pdf, 'body', fontConfig);
  pdf.setTextColor(44, 62, 80);

  const icon = item.checked ? '✅' : '❌';
  pdf.text(icon, layout.marginLeft + itemPadding, y);

  const titleX = layout.marginLeft + itemPadding + 20;
  const titleWidth = contentWidth - itemPadding * 2 - 20;
  const titleLines = calculateTextLines(
    pdf,
    item.title,
    titleWidth,
    fontConfig.sizes.body,
    fontConfig.name
  );

  for (const line of titleLines) {
    pdf.text(line, titleX, y);
    y += fontConfig.sizes.body * layout.lineHeight;
  }
  y += 5;

  // 説明
  setFontStyle(pdf, 'normal', fontConfig.name);
  setFontSize(pdf, 'small', fontConfig);
  pdf.setTextColor(85, 85, 85);

  const descLines = calculateTextLines(
    pdf,
    item.description,
    titleWidth,
    fontConfig.sizes.small,
    fontConfig.name
  );
  for (const line of descLines) {
    pdf.text(line, titleX, y);
    y += fontConfig.sizes.small * layout.lineHeight;
  }

  // ガイド内容
  if (options.includeGuides && item.guideContent) {
    y += 5;

    // ガイド背景
    const guideHeight = calculateGuideHeight(pdf, item.guideContent, layout, fontConfig);
    pdf.setFillColor(255, 255, 255, 0.7);
    pdf.setDrawColor(52, 152, 219);
    pdf.setLineWidth(0.5);
    pdf.rect(titleX, y - 5, titleWidth, guideHeight, 'FD');

    y += 5;

    // ガイドタイトル
    setFontStyle(pdf, 'bold', fontConfig.name);
    setFontSize(pdf, 'small', fontConfig);
    pdf.setTextColor(44, 62, 80);
    pdf.text(`📚 ${item.guideContent.title}`, titleX + 5, y);
    y += fontConfig.sizes.small * layout.lineHeight + 3;

    // ガイド内容
    setFontStyle(pdf, 'normal', fontConfig.name);
    pdf.setTextColor(102, 102, 102);
    const guideLines = calculateTextLines(
      pdf,
      item.guideContent.content,
      titleWidth - 10,
      fontConfig.sizes.small,
      fontConfig.name
    );

    for (const line of guideLines) {
      pdf.text(line, titleX + 5, y);
      y += fontConfig.sizes.small * layout.lineHeight;
    }

    // 良い例・悪い例
    if (item.guideContent.examples) {
      if (item.guideContent.examples.good.length > 0) {
        y += 3;
        pdf.setTextColor(39, 174, 96); // Green
        pdf.text('✅ 良い例:', titleX + 5, y);
        y += fontConfig.sizes.small * layout.lineHeight;

        pdf.setTextColor(102, 102, 102);
        for (const example of item.guideContent.examples.good) {
          pdf.text(`• ${example}`, titleX + 15, y);
          y += fontConfig.sizes.small * layout.lineHeight;
        }
      }

      if (item.guideContent.examples.bad.length > 0) {
        y += 3;
        pdf.setTextColor(231, 76, 60); // Red
        pdf.text('❌ 悪い例:', titleX + 5, y);
        y += fontConfig.sizes.small * layout.lineHeight;

        pdf.setTextColor(102, 102, 102);
        for (const example of item.guideContent.examples.bad) {
          pdf.text(`• ${example}`, titleX + 15, y);
          y += fontConfig.sizes.small * layout.lineHeight;
        }
      }
    }

    y += 5;
  }

  return y + itemPadding + 5;
}

/**
 * ノートの追加
 */
async function addNotes(
  pdf: jsPDF,
  notes: string,
  layout: PageLayout,
  fontConfig: FontConfig,
  startY: number
): Promise<number> {
  let y = startY;
  const contentWidth = layout.width - layout.marginLeft - layout.marginRight;

  // ノートセクション背景
  const notesLines = calculateTextLines(
    pdf,
    notes,
    contentWidth - 30,
    fontConfig.sizes.body,
    fontConfig.name
  );
  const notesHeight = 40 + notesLines.length * fontConfig.sizes.body * layout.lineHeight;

  pdf.setFillColor(232, 244, 253); // #e8f4fd
  pdf.setDrawColor(52, 152, 219);
  pdf.setLineWidth(2);
  pdf.rect(layout.marginLeft, y, contentWidth, notesHeight, 'FD');

  y += 20;

  // ノートタイトル
  setFontStyle(pdf, 'bold', fontConfig.name);
  setFontSize(pdf, 'heading', fontConfig);
  pdf.setTextColor(44, 62, 80);
  pdf.text('📝 評価メモ', layout.marginLeft + 15, y);
  y += 15;

  // ノート内容
  setFontStyle(pdf, 'normal', fontConfig.name);
  setFontSize(pdf, 'body', fontConfig);
  pdf.setTextColor(51, 51, 51);

  for (const line of notesLines) {
    pdf.text(line, layout.marginLeft + 15, y);
    y += fontConfig.sizes.body * layout.lineHeight;
  }

  return y + 15;
}

/**
 * フッターの追加
 */
function addFooter(pdf: jsPDF, layout: PageLayout, fontConfig: FontConfig): void {
  const pageCount = pdf.getNumberOfPages();

  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);

    // フッターライン
    const footerY = layout.height - layout.marginBottom + 5;
    pdf.setDrawColor(221, 221, 221);
    pdf.setLineWidth(0.5);
    pdf.line(layout.marginLeft, footerY, layout.width - layout.marginRight, footerY);

    // フッターテキスト
    setFontStyle(pdf, 'normal', fontConfig.name);
    setFontSize(pdf, 'small', fontConfig);
    pdf.setTextColor(102, 102, 102);

    const footerText = '実用的事実確認チェックシートによる評価結果';
    const pageText = `${i} / ${pageCount}`;
    const dateText = `生成日時: ${new Date().toLocaleString('ja-JP')}`;

    pdf.text(footerText, layout.marginLeft, footerY + 8);
    pdf.text(dateText, layout.marginLeft, footerY + 15);

    const pageX =
      layout.width -
      layout.marginRight -
      getTextWidth(pdf, pageText, fontConfig.sizes.small, fontConfig.name);
    pdf.text(pageText, pageX, footerY + 8);
  }
}

// ヘルパー関数

function groupItemsByCategory(checklist: ChecklistResult) {
  return CATEGORIES.map(category => {
    const items = checklist.items.filter(item => item.category.id === category.id);
    const checkedItems = items.filter(item => item.checked);

    return {
      category,
      items,
      checkedItems,
      uncheckedItems: items.filter(item => !item.checked),
      completionRate: items.length > 0 ? Math.round((checkedItems.length / items.length) * 100) : 0
    };
  });
}

type SectionData = ReturnType<typeof groupItemsByCategory>[0];

function getSectionColor(categoryId: string) {
  const colors = {
    critical: { r: 231, g: 76, b: 60 },
    detailed: { r: 243, g: 156, b: 18 },
    verification: { r: 52, g: 152, b: 219 },
    context: { r: 155, g: 89, b: 182 }
  };
  return colors[categoryId as keyof typeof colors] || colors.verification;
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

function calculateItemHeight(
  pdf: jsPDF,
  item: CheckItem,
  layout: PageLayout,
  fontConfig: FontConfig,
  options: PDFGenerationOptions
): number {
  const contentWidth = layout.width - layout.marginLeft - layout.marginRight;
  const titleWidth = contentWidth - 50; // アイコンとパディング分

  // タイトル行数
  const titleLines = calculateTextLines(
    pdf,
    item.title,
    titleWidth,
    fontConfig.sizes.body,
    fontConfig.name
  );
  // 説明行数
  const descLines = calculateTextLines(
    pdf,
    item.description,
    titleWidth,
    fontConfig.sizes.small,
    fontConfig.name
  );

  let height = 30; // 基本パディング
  height += titleLines.length * fontConfig.sizes.body * layout.lineHeight;
  height += descLines.length * fontConfig.sizes.small * layout.lineHeight;

  // ガイド内容
  if (options.includeGuides && item.guideContent) {
    height += calculateGuideHeight(pdf, item.guideContent, layout, fontConfig);
  }

  return height + 15; // 下部マージン
}

function calculateGuideHeight(
  pdf: jsPDF,
  guideContent: NonNullable<CheckItem['guideContent']>,
  layout: PageLayout,
  fontConfig: FontConfig
): number {
  const contentWidth = layout.width - layout.marginLeft - layout.marginRight - 60; // 各種パディング

  let height = 20; // 基本パディング

  // ガイドタイトル
  height += fontConfig.sizes.small * layout.lineHeight;

  // ガイド内容
  const contentLines = calculateTextLines(
    pdf,
    guideContent.content,
    contentWidth,
    fontConfig.sizes.small,
    fontConfig.name
  );
  height += contentLines.length * fontConfig.sizes.small * layout.lineHeight;

  // 例
  if (guideContent.examples) {
    if (guideContent.examples.good.length > 0) {
      height += fontConfig.sizes.small * layout.lineHeight; // ヘッダー
      height += guideContent.examples.good.length * fontConfig.sizes.small * layout.lineHeight;
    }
    if (guideContent.examples.bad.length > 0) {
      height += fontConfig.sizes.small * layout.lineHeight; // ヘッダー
      height += guideContent.examples.bad.length * fontConfig.sizes.small * layout.lineHeight;
    }
  }

  return height;
}
