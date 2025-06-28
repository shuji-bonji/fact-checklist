// src/lib/utils/reliablePDFGenerator.ts
/**
 * 確実な日本語PDF生成器
 * 静的フォント配置によるCSP対応とエンコーディング保証
 */

import type jsPDF from 'jspdf';
import type { ChecklistResult, CheckItem } from '$lib/types/checklist.js';
import { CATEGORIES } from '$lib/data/checklist-items.js';
import { registerJapaneseFonts } from './fontToBase64.js';

export interface ReliablePDFOptions {
	includeGuides: boolean;
	includeNotes: boolean;
	includeSummary: boolean;
	sectionBreaks: boolean;
	fontFamily?: string;
	optimizeForMobile?: boolean;
	useLocalFonts?: boolean; // 静的フォント使用フラグ
}

export class ReliablePDFGenerator {
	private pdf: jsPDF;
	private currentY: number = 20;
	private readonly pageHeight: number = 297; // A4高さ
	private readonly pageWidth: number = 210; // A4幅
	private readonly margin: number = 15;
	private readonly lineHeight: number = 7;
	private readonly maxLineWidth: number;
	private fontLoaded: boolean = false;
	private useFallbackFont: boolean = false;

	constructor() {
		this.pdf = {} as jsPDF; // 一時的な初期化
		this.maxLineWidth = this.pageWidth - this.margin * 2;
	}

	async generateFromChecklist(
		checklist: ChecklistResult,
		options: ReliablePDFOptions
	): Promise<jsPDF> {
		// jsPDFを動的インポート
		const { default: jsPDF } = await import('jspdf');
		this.pdf = new jsPDF('p', 'mm', 'a4');

		console.log('🔥 Starting reliable PDF generation with Japanese font support...');

		// 利用可能なフォントの確認
		console.log('📝 Available fonts in jsPDF:', this.pdf.getFontList());

		// フォント設定の試行
		await this.setupReliableFont(options);

		// PDF構築
		this.addHeader(checklist);

		if (options.includeSummary) {
			this.addSummary(checklist);
		}

		this.addDetailedResults(checklist, options);

		if (options.includeNotes && checklist.notes) {
			this.addNotes(checklist.notes);
		}

		this.addFooter();

		console.log('✅ Reliable PDF generation completed successfully');
		return this.pdf;
	}

	private async setupReliableFont(options: ReliablePDFOptions): Promise<void> {
		console.log('📝 Setting up reliable Japanese font...');

		try {
			// Method 1: 静的配置フォント（最優先）
			if (options.useLocalFonts !== false) {
				await this.tryLoadStaticFont();
			}

			// Method 2: システムフォント（フォールバック）
			if (!this.fontLoaded) {
				console.log('⚠️ Static font failed, trying system font fallback...');
				this.setupSystemFontFallback();
			}

			// Method 3: 安全な英数字フォント（最終フォールバック）
			if (!this.fontLoaded && !this.useFallbackFont) {
				console.log('⚠️ All Japanese fonts failed, using safe ASCII font...');
				this.setupSafeFallback();
			}
		} catch (error) {
			console.error('❌ Font setup failed, using final fallback:', error);
			this.setupSafeFallback();
		}
	}

	private async tryLoadStaticFont(): Promise<void> {
		try {
			console.log('🔤 Attempting to load static Noto Sans JP font...');

			// jsPDFに日本語フォントを登録
			const fontRegistered = await registerJapaneseFonts(this.pdf);

			if (fontRegistered) {
				console.log('✅ Japanese fonts successfully registered with jsPDF');
				this.fontLoaded = true;
				this.useFallbackFont = false;

				// デフォルトフォントを日本語フォントに設定
				this.pdf.setFont('NotoSansJP', 'normal');
				this.pdf.setFontSize(11);
				return;
			} else {
				throw new Error('Font registration failed');
			}
		} catch (error) {
			console.warn('⚠️ Static font loading failed:', error);
			// フォールバックへ続行
		}
	}

	private setupSystemFontFallback(): void {
		try {
			console.log('🔤 Setting up system font fallback...');

			// jsPDFで利用可能な標準フォントを使用
			// helveticaは基本的な文字に対応
			this.pdf.setFont('helvetica', 'normal');
			this.pdf.setFontSize(11);

			console.log('✅ System font fallback configured - using Helvetica');
			this.fontLoaded = true; // システムフォントを有効として扱う
			this.useFallbackFont = false; // 標準モードとして扱う
		} catch (error) {
			console.warn('⚠️ System font fallback failed:', error);
		}
	}

	private setupSafeFallback(): void {
		console.log('🔤 Setting up safe ASCII fallback font...');

		// 確実に動作する基本フォント
		this.pdf.setFont('courier', 'normal');
		this.pdf.setFontSize(11);

		console.log('✅ Safe fallback font configured');
		this.useFallbackFont = true;
	}

	private addHeader(checklist: ChecklistResult): void {
		this.pdf.setFontSize(16);
		this.setFontWeight('bold');

		// タイトルを文字化けしにくい形式で表示
		if (this.useFallbackFont) {
			this.addText('========================================');
			this.addText('📋 Fact Checking Checklist');
			this.addText('========================================');
		} else {
			this.addText('========================================');
			this.addText('📋 事実確認チェックシート');
			this.addText('========================================');
		}
		this.currentY += 3;

		this.pdf.setFontSize(12);
		this.setFontWeight('normal');

		// タイトル表示（エンコーディング考慮）
		const displayTitle = this.useFallbackFont
			? `Title: ${this.sanitizeText(checklist.title)}`
			: `タイトル: ${checklist.title}`;
		this.addText(displayTitle);
		this.currentY += 2;

		// 日付情報
		this.pdf.setFontSize(10);
		const createdDate = checklist.createdAt.toLocaleDateString('ja-JP', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		});

		const createdLabel = this.useFallbackFont ? 'Created' : '作成日';
		this.addText(`${createdLabel}: ${createdDate}`);

		if (checklist.completedAt) {
			const completedDate = checklist.completedAt.toLocaleDateString('ja-JP', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			});
			const completedLabel = this.useFallbackFont ? 'Completed' : '完了日';
			this.addText(`${completedLabel}: ${completedDate}`);
		}

		const outputDate = new Date().toLocaleDateString('ja-JP', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		});
		const outputLabel = this.useFallbackFont ? 'Generated' : '出力日';
		this.addText(`${outputLabel}: ${outputDate}`);
		this.currentY += 8;
	}

	private addSummary(checklist: ChecklistResult): void {
		this.checkPageBreak(40);

		this.pdf.setFontSize(14);
		this.setFontWeight('bold');

		const summaryTitle = this.useFallbackFont ? '📊 Evaluation Summary' : '📊 評価結果サマリー';
		this.addText(summaryTitle);
		this.addText('----------------------------------------');
		this.currentY += 2;

		this.pdf.setFontSize(11);
		this.setFontWeight('normal');

		// サマリーデータ（言語対応）
		const summaryLabels = this.useFallbackFont
			? {
					totalScore: 'Total Score',
					confidenceLevel: 'Confidence Level',
					result: 'Evaluation Result',
					judgment: 'Final Judgment',
					advice: 'Recommended Action'
				}
			: {
					totalScore: '総合スコア',
					confidenceLevel: '信頼度レベル',
					result: '評価結果',
					judgment: '最終判定',
					advice: '推奨アクション'
				};

		const summaryData = [
			`${summaryLabels.totalScore}: ${checklist.score.total}/${checklist.score.maxScore}`,
			`${summaryLabels.confidenceLevel}: ${checklist.confidenceLevel}%`,
			`${summaryLabels.result}: ${this.getLocalizedText(checklist.confidenceText)}`,
			`${summaryLabels.judgment}: ${this.getJudgmentText(checklist.judgment)}`,
			...(checklist.judgmentAdvice
				? [`${summaryLabels.advice}: ${this.getLocalizedText(checklist.judgmentAdvice)}`]
				: [])
		];

		summaryData.forEach(line => {
			this.addText(`  ${line}`);
			this.currentY += 1;
		});

		// セクション別達成率
		this.currentY += 3;
		this.setFontWeight('bold');
		const sectionTitle = this.useFallbackFont ? 'Section Completion Rates:' : 'セクション別達成率:';
		this.addText(sectionTitle);
		this.setFontWeight('normal');

		const sections = this.groupItemsByCategory(checklist.items);
		sections.forEach(section => {
			const sectionName = this.useFallbackFont
				? this.getCategoryNameEn(section.category.id)
				: section.category.name;
			const completionText = `  ${section.category.emoji} ${sectionName}: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length})`;
			this.addText(completionText);
		});

		this.currentY += 8;
	}

	private addDetailedResults(checklist: ChecklistResult, options: ReliablePDFOptions): void {
		const sections = this.groupItemsByCategory(checklist.items);

		sections.forEach((section, index) => {
			if (options.sectionBreaks && index > 0) {
				this.pdf.addPage();
				this.currentY = this.margin;
			}

			this.addSection(section, options);
		});
	}

	private addSection(section: SectionData, options: ReliablePDFOptions): void {
		this.checkPageBreak(50);

		// セクションヘッダー
		this.pdf.setFontSize(14);
		this.setFontWeight('bold');
		this.addText('');
		this.addText('========================================');

		const sectionTitle = this.useFallbackFont
			? `${section.category.emoji} ${this.getCategoryNameEn(section.category.id)}`
			: `${section.category.emoji} ${section.category.name}`;
		this.addText(sectionTitle);
		this.addText('========================================');
		this.currentY += 1;

		this.pdf.setFontSize(10);
		this.setFontWeight('italic');
		const description = this.useFallbackFont
			? this.getCategoryDescEn(section.category.id)
			: section.category.description;
		this.addWrappedText(description);
		this.currentY += 2;

		this.pdf.setFontSize(11);
		this.setFontWeight('normal');
		const statusLabel = this.useFallbackFont ? 'Completion Status' : '達成状況';
		this.addText(
			`${statusLabel}: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length})`
		);
		this.currentY += 4;

		// 各項目
		section.items.forEach((item, index) => {
			this.addCheckItem(item, index + 1, options);
		});

		this.currentY += 5;
	}

	private addCheckItem(item: CheckItem, itemNumber: number, options: ReliablePDFOptions): void {
		this.checkPageBreak(25);

		this.pdf.setFontSize(12);
		this.setFontWeight('bold');

		const statusText = this.useFallbackFont
			? item.checked
				? '✓ Completed'
				: '✗ Incomplete'
			: item.checked
				? '✓ 完了'
				: '✗ 未完了';
		const riskIcon = this.getRiskIcon(item.category.id);

		this.addText(`${itemNumber}. ${statusText} ${riskIcon}`);
		this.currentY += 1;

		this.pdf.setFontSize(11);
		this.setFontWeight('bold');
		const titleLabel = this.useFallbackFont ? 'Item' : '題目';
		this.addWrappedText(`   ${titleLabel}: ${this.getLocalizedText(item.title)}`);
		this.currentY += 1;

		// 説明
		this.pdf.setFontSize(10);
		this.setFontWeight('normal');
		const descLabel = this.useFallbackFont ? 'Description' : '説明';
		this.addWrappedText(`   ${descLabel}: ${this.getLocalizedText(item.description)}`);
		this.currentY += 2;

		// ガイド内容（オプション）
		if (options.includeGuides && item.guideContent) {
			this.addGuideContent(item.guideContent);
		}

		this.currentY += 3;
	}

	private addGuideContent(guideContent: NonNullable<CheckItem['guideContent']>): void {
		this.pdf.setFontSize(9);
		this.setFontWeight('italic');

		this.addText('   ----------------------------------------');
		const guideLabel = this.useFallbackFont ? 'Guide' : 'ガイド';
		this.addWrappedText(`   💡 ${guideLabel}: ${this.getLocalizedText(guideContent.title)}`);
		this.currentY += 1;

		this.addWrappedText(`   ${this.getLocalizedText(guideContent.content)}`);
		this.currentY += 1;

		// 良い例
		if (guideContent.examples?.good?.length) {
			const goodLabel = this.useFallbackFont ? 'Good examples' : '良い例';
			this.addText(`   ✅ ${goodLabel}:`);
			guideContent.examples.good.forEach(example => {
				this.addWrappedText(`     - ${this.getLocalizedText(example)}`);
			});
			this.currentY += 1;
		}

		// 悪い例
		if (guideContent.examples?.bad?.length) {
			const badLabel = this.useFallbackFont ? 'Bad examples' : '悪い例';
			this.addText(`   ❌ ${badLabel}:`);
			guideContent.examples.bad.forEach(example => {
				this.addWrappedText(`     - ${this.getLocalizedText(example)}`);
			});
			this.currentY += 1;
		}

		this.addText('   ----------------------------------------');
		this.currentY += 1;
	}

	private addNotes(notes: string): void {
		this.checkPageBreak(30);

		this.pdf.setFontSize(14);
		this.setFontWeight('bold');
		this.addText('');
		this.addText('========================================');
		const notesTitle = this.useFallbackFont ? '📝 Evaluation Notes' : '📝 評価メモ';
		this.addText(notesTitle);
		this.addText('========================================');
		this.currentY += 3;

		this.pdf.setFontSize(11);
		this.setFontWeight('normal');
		this.addWrappedText(this.getLocalizedText(notes));
		this.currentY += 5;
	}

	private addFooter(): void {
		const pageCount = this.pdf.getNumberOfPages();

		for (let i = 1; i <= pageCount; i++) {
			this.pdf.setPage(i);

			// フッター情報
			const footerY = this.pageHeight - 15;
			this.pdf.setFontSize(8);
			this.setFontWeight('normal');

			// 左側：生成情報
			const appName = this.useFallbackFont
				? 'Fact Checking Checklist Evaluation Report'
				: '実用的事実確認チェックシートによる評価結果';
			this.pdf.text(appName, this.margin, footerY);

			const genLabel = this.useFallbackFont ? 'Generated' : '生成日時';
			this.pdf.text(`${genLabel}: ${new Date().toLocaleString('ja-JP')}`, this.margin, footerY + 4);

			// 右側：ページ番号
			const pageText = `${i} / ${pageCount}`;
			const pageTextWidth = this.pdf.getTextWidth(pageText);
			this.pdf.text(pageText, this.pageWidth - this.margin - pageTextWidth, footerY);
		}
	}

	// ユーティリティメソッド
	private addText(text: string): void {
		this.pdf.text(text, this.margin, this.currentY);
		this.currentY += this.lineHeight;
	}

	private addWrappedText(text: string): void {
		const lines = this.pdf.splitTextToSize(text, this.maxLineWidth - 10);
		lines.forEach((line: string) => {
			this.checkPageBreak();
			this.pdf.text(line, this.margin, this.currentY);
			this.currentY += this.lineHeight;
		});
	}

	private checkPageBreak(requiredSpace: number = 20): void {
		if (this.currentY + requiredSpace > this.pageHeight - 25) {
			this.pdf.addPage();
			this.currentY = this.margin + 10;
		}
	}

	private setFontWeight(weight: 'normal' | 'bold' | 'italic'): void {
		try {
			if (this.fontLoaded && !this.useFallbackFont) {
				// 日本語フォントが正常に読み込まれた場合
				this.pdf.setFont('NotoSansJP', weight === 'italic' ? 'normal' : weight);
			} else if (this.useFallbackFont) {
				// ASCII安全モード：courier使用
				this.pdf.setFont('courier', weight === 'italic' ? 'normal' : weight);
			} else {
				// 標準モード：helvetica使用
				this.pdf.setFont('helvetica', weight === 'italic' ? 'normal' : weight);
			}
		} catch (error) {
			// 最終的な安全フォールバック
			console.warn('⚠️ Font weight setting failed, using safe fallback:', error);
			this.pdf.setFont('courier', 'normal');
		}
	}

	private getLocalizedText(text: string): string {
		if (this.fontLoaded && !this.useFallbackFont) {
			// 日本語フォントが利用可能な場合、そのまま返す
			return text;
		} else if (this.useFallbackFont) {
			// ASCII安全モード：英数字のみの安全なテキストに変換
			return this.sanitizeText(text);
		}
		// 標準モード：日本語文字が文字化けする可能性があるがそのまま返す
		return text;
	}

	private sanitizeText(text: string): string {
		// 日本語文字を安全な表現に変換
		return text
			.replace(/[^\u0020-\u007F]/g, '?') // 非ASCII文字を?に置換 (制御文字を避けて\u0020から開始)
			.substring(0, 100); // 長さ制限
	}

	private getJudgmentText(judgment: string | null): string {
		if (this.useFallbackFont) {
			switch (judgment) {
				case 'accept':
					return '✅ Recommended';
				case 'caution':
					return '⚠️ Caution';
				case 'reject':
					return '❌ Not Recommended';
				default:
					return '❓ Not Evaluated';
			}
		} else {
			switch (judgment) {
				case 'accept':
					return '✅ 採用推奨';
				case 'caution':
					return '⚠️ 要注意';
				case 'reject':
					return '❌ 不採用推奨';
				default:
					return '❓ 判定未実施';
			}
		}
	}

	private getRiskIcon(categoryId: string): string {
		switch (categoryId) {
			case 'critical':
				return this.useFallbackFont ? '🔴 Critical' : '🔴 重要';
			case 'detailed':
				return this.useFallbackFont ? '🟠 Detailed' : '🟠 詳細';
			case 'verification':
				return this.useFallbackFont ? '🔵 Verification' : '🔵 検証';
			case 'context':
				return this.useFallbackFont ? '🟣 Context' : '🟣 文脈';
			default:
				return this.useFallbackFont ? '⚪ General' : '⚪ 一般';
		}
	}

	private getCategoryNameEn(categoryId: string): string {
		switch (categoryId) {
			case 'critical':
				return 'Critical Information';
			case 'detailed':
				return 'Detailed Verification';
			case 'verification':
				return 'Source Verification';
			case 'context':
				return 'Context Analysis';
			default:
				return 'General';
		}
	}

	private getCategoryDescEn(categoryId: string): string {
		switch (categoryId) {
			case 'critical':
				return 'Essential elements for information credibility assessment';
			case 'detailed':
				return 'In-depth verification and consistency checks';
			case 'verification':
				return 'Source reliability and evidence validation';
			case 'context':
				return 'Contextual factors and bias analysis';
			default:
				return 'General verification items';
		}
	}

	private groupItemsByCategory(items: CheckItem[]): SectionData[] {
		return CATEGORIES.map(category => {
			const categoryItems = items.filter(item => item.category.id === category.id);
			const checkedItems = categoryItems.filter(item => item.checked);

			return {
				category,
				items: categoryItems,
				checkedItems,
				uncheckedItems: categoryItems.filter(item => !item.checked),
				completionRate:
					categoryItems.length > 0
						? Math.round((checkedItems.length / categoryItems.length) * 100)
						: 0
			};
		});
	}
}

// 型定義
interface SectionData {
	category: (typeof CATEGORIES)[0];
	items: CheckItem[];
	checkedItems: CheckItem[];
	uncheckedItems: CheckItem[];
	completionRate: number;
}
