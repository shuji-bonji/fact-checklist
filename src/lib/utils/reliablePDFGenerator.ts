// src/lib/utils/reliablePDFGenerator.ts
/**
 * 確実な日本語PDF生成器
 * 静的フォント配置によるCSP対応とエンコーディング保証
 */

import type jsPDF from 'jspdf';
import type { ChecklistResult, CheckItem } from '$lib/types/checklist.js';
import { CATEGORIES } from '$lib/data/checklist-items.js';
// Font registration is now handled internally with caching
// import { registerJapaneseFonts } from './fontToBase64.js';

export interface ReliablePDFOptions {
	includeGuides: boolean;
	includeNotes: boolean;
	includeSummary: boolean;
	sectionBreaks: boolean;
	fontFamily?: string;
	optimizeForMobile?: boolean;
	useLocalFonts?: boolean; // 静的フォント使用フラグ
	// Phase 3: 高度なPDF機能
	addWatermark?: boolean; // 透かし追加
	includeTableOfContents?: boolean; // 目次追加
	addMetadata?: boolean; // PDFメタデータ追加
	watermarkText?: string; // カスタム透かしテキスト
	documentTitle?: string; // カスタムドキュメントタイトル
	documentAuthor?: string; // 文書作成者
	documentSubject?: string; // 文書の件名
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

	// Phase 3: 高度なPDF機能用プロパティ
	private tableOfContents: Array<{ title: string; page: number; level: number }> = [];
	private options: ReliablePDFOptions = {} as ReliablePDFOptions;

	// パフォーマンス最適化: フォントキャッシュ
	private static fontCache: Map<string, string> = new Map();
	private static fontLoading: Promise<void> | null = null;
	private static initializationPromise: Promise<boolean> | null = null;

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

		// オプションを保存
		this.options = options;
		this.tableOfContents = [];

		console.log('🔥 Starting reliable PDF generation with advanced features...');

		// Phase 3: PDFメタデータの設定
		if (options.addMetadata !== false) {
			this.addPDFMetadata(checklist);
		}

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

		// Phase 3: 目次の追加（最初のページに挿入）
		if (options.includeTableOfContents && this.tableOfContents.length > 0) {
			this.insertTableOfContents();
		}

		// Phase 3: 透かしの追加
		if (options.addWatermark) {
			this.addWatermarkToAllPages(options.watermarkText);
		}

		this.addFooter();

		console.log('✅ Reliable PDF generation with advanced features completed successfully');
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
			console.log('🔤 Attempting to load static Noto Sans JP font with caching...');

			// jsPDFに日本語フォントを登録（キャッシュ付き）
			const fontRegistered = await ReliablePDFGenerator.registerJapaneseFontsWithCache(this.pdf);

			if (fontRegistered) {
				console.log('✅ Japanese fonts successfully registered with jsPDF (cached)');
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

	// Phase 3: TOCエントリ追加用ヘルパー
	private addToTableOfContents(title: string, level: number = 1): void {
		if (this.options.includeTableOfContents) {
			this.tableOfContents.push({
				title,
				page: this.pdf.getNumberOfPages(),
				level
			});
		}
	}

	private addHeader(checklist: ChecklistResult): void {
		// ヘッダーセクションの背景
		this.addBackgroundBox(this.currentY, 35, [255, 255, 255], [248, 249, 250]);

		// 下部ボーダー（HTML版のborder-bottom: 3px solid #2c3e50相当）
		this.pdf.saveGraphicsState();
		this.pdf.setFillColor(44, 62, 80); // #2c3e50
		this.pdf.rect(this.margin, this.currentY + 35, this.maxLineWidth, 1, 'F');
		this.pdf.restoreGraphicsState();

		this.pdf.setFontSize(18);
		this.setFontWeight('bold');
		this.pdf.setTextColor(44, 62, 80); // #2c3e50

		// タイトルを文字化けしにくい形式で表示
		const mainTitle = this.useFallbackFont
			? '📋 Fact Checking Checklist'
			: '📋 事実確認チェックシート';

		this.addText(mainTitle);

		// Phase 3: TOCエントリー追加
		this.addToTableOfContents(mainTitle, 1);

		this.currentY += 5;

		this.pdf.setFontSize(12);
		this.setFontWeight('bold');
		this.pdf.setTextColor(44, 62, 80); // #2c3e50

		// タイトル表示（エンコーディング考慮）
		const displayTitle = this.useFallbackFont
			? `Title: ${this.sanitizeText(checklist.title)}`
			: checklist.title;
		this.addText(displayTitle);
		this.currentY += 5;

		// メタ情報（HTML版のmeta-infoスタイル相当）
		this.pdf.setFontSize(10);
		this.setFontWeight('normal');
		this.pdf.setTextColor(102, 102, 102); // #666

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
		this.currentY += 15;
	}

	private addSummary(checklist: ChecklistResult): void {
		this.checkPageBreak(60);

		// サマリーセクション用の背景を作成（HTML版のlinear-gradient(135deg, #f8f9fa, #e9ecef)相当）
		this.addBackgroundBox(this.currentY, 55, [248, 249, 250], [233, 236, 239]);

		this.pdf.setFontSize(14);
		this.setFontWeight('bold');
		this.pdf.setTextColor(44, 62, 80); // #2c3e50

		const summaryTitle = this.useFallbackFont ? '📊 Evaluation Summary' : '📊 評価結果サマリー';
		this.addText(summaryTitle);

		// Phase 3: TOCエントリー追加
		this.addToTableOfContents(summaryTitle, 1);

		this.currentY += 8;

		this.pdf.setFontSize(11);
		this.setFontWeight('normal');

		// スコアグリッドを作成（HTML版のscore-gridスタイル相当）
		this.addScoreGrid(checklist);

		this.currentY += 15;
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

		// セクションヘッダー（HTML版のsection-headerスタイル相当）
		this.addSectionHeader(section);

		// Phase 3: TOCエントリー追加
		const sectionTitle = this.useFallbackFont
			? `${section.category.emoji} ${this.getCategoryNameEn(section.category.id)}`
			: `${section.category.emoji} ${section.category.name}`;
		this.addToTableOfContents(sectionTitle, 2);

		this.currentY += 5;

		// セクションコンテンツ背景
		const contentHeight = section.items.length * 25 + 15;
		this.addBackgroundBox(this.currentY, contentHeight, [255, 255, 255], [250, 250, 250]);

		this.pdf.setFontSize(10);
		this.setFontWeight('italic');
		this.pdf.setTextColor(85, 85, 85); // #555
		const description = this.useFallbackFont
			? this.getCategoryDescEn(section.category.id)
			: section.category.description;
		this.addWrappedText(description);
		this.currentY += 4;

		// 各項目
		section.items.forEach((item, index) => {
			this.addCheckItem(item, index + 1, options);
		});

		this.currentY += 8;
	}

	private addCheckItem(item: CheckItem, itemNumber: number, options: ReliablePDFOptions): void {
		this.checkPageBreak(25);

		// チェック項目用の背景（HTML版のcheck-itemスタイル相当）
		const bgColors = item.checked
			? { start: [213, 244, 230], end: [168, 230, 207] } // green gradient
			: { start: [255, 234, 167], end: [253, 203, 110] }; // yellow gradient

		this.addBackgroundBox(this.currentY, 22, bgColors.start, bgColors.end);

		// 左側のボーダー色
		const borderColor = item.checked ? [39, 174, 96] : [225, 112, 85]; // #27ae60 or #e17055
		this.addLeftBorder(this.currentY, 22, borderColor);

		this.pdf.setFontSize(24);
		this.setFontWeight('normal');
		this.pdf.setTextColor(44, 62, 80); // #2c3e50

		// アイコンとステータス
		const statusIcon = item.checked ? '✅' : '⚠️';
		this.addText(`${statusIcon}`);

		// タイトル
		this.pdf.setFontSize(11);
		this.setFontWeight('bold');
		this.addWrappedText(`   ${this.getLocalizedText(item.title)}`);
		this.currentY += 2;

		// 説明
		this.pdf.setFontSize(10);
		this.setFontWeight('normal');
		this.pdf.setTextColor(85, 85, 85); // #555
		this.addWrappedText(`   ${this.getLocalizedText(item.description)}`);
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
		this.checkPageBreak(35);

		// ノートセクションの背景（HTML版のlinear-gradient(135deg, #e8f4fd, #d1ecf1)相当）
		const notesHeight = 30 + Math.ceil(notes.length / 80) * 7; // テキスト長に応じて高さ調整
		this.addBackgroundBox(this.currentY, notesHeight, [232, 244, 253], [209, 236, 241]);

		// 左ボーダー（ブルー）
		this.addLeftBorder(this.currentY, notesHeight, [52, 152, 219]); // #3498db

		this.pdf.setFontSize(14);
		this.setFontWeight('bold');
		this.pdf.setTextColor(44, 62, 80); // #2c3e50

		const notesTitle = this.useFallbackFont ? '📝 Evaluation Notes' : '📝 評価メモ';
		this.addText(notesTitle);

		// Phase 3: TOCエントリー追加
		this.addToTableOfContents(notesTitle, 1);

		this.currentY += 8;

		// ノートコンテンツの背景（白）
		const contentHeight = Math.ceil(notes.length / 80) * 7 + 10;
		this.addBackgroundBox(this.currentY, contentHeight, [255, 255, 255], [255, 255, 255]);

		this.pdf.setFontSize(11);
		this.setFontWeight('normal');
		this.pdf.setTextColor(51, 51, 51); // #333
		this.addWrappedText(this.getLocalizedText(notes));
		this.currentY += 10;
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

	// パフォーマンス最適化: キャッシュ付きフォント登録
	private static async registerJapaneseFontsWithCache(
		pdf: import('jspdf').jsPDF
	): Promise<boolean> {
		try {
			// 既に初期化済みの場合はキャッシュされたフォントを使用
			if (ReliablePDFGenerator.initializationPromise) {
				const isInitialized = await ReliablePDFGenerator.initializationPromise;
				if (isInitialized) {
					ReliablePDFGenerator.applyFontsFromCache(pdf);
					return true;
				}
			}

			// 初回ロード
			ReliablePDFGenerator.initializationPromise = ReliablePDFGenerator.loadAndCacheFonts();
			const isSuccess = await ReliablePDFGenerator.initializationPromise;

			if (isSuccess) {
				ReliablePDFGenerator.applyFontsFromCache(pdf);
				return true;
			}

			return false;
		} catch (error) {
			console.error('❌ Failed to register Japanese fonts with cache:', error);
			return false;
		}
	}

	private static async loadAndCacheFonts(): Promise<boolean> {
		try {
			console.log('📦 Loading and caching fonts for the first time...');

			// キャッシュチェック
			if (
				ReliablePDFGenerator.fontCache.has('NotoSansJP-Regular') &&
				ReliablePDFGenerator.fontCache.has('NotoSansJP-Bold')
			) {
				console.log('✅ Fonts already cached, skipping load');
				return true;
			}

			// 並列でフォントをロード
			const [regularBase64, boldBase64] = await Promise.all([
				ReliablePDFGenerator.loadFontAsBase64('/fonts/NotoSansJP-Regular.ttf'),
				ReliablePDFGenerator.loadFontAsBase64('/fonts/NotoSansJP-Bold.ttf')
			]);

			// キャッシュに保存
			if (regularBase64) {
				ReliablePDFGenerator.fontCache.set('NotoSansJP-Regular', regularBase64);
				console.log('📦 Cached NotoSansJP-Regular font');
			}

			if (boldBase64) {
				ReliablePDFGenerator.fontCache.set('NotoSansJP-Bold', boldBase64);
				console.log('📦 Cached NotoSansJP-Bold font');
			}

			return !!(regularBase64 && boldBase64);
		} catch (error) {
			console.error('❌ Failed to load and cache fonts:', error);
			return false;
		}
	}

	private static applyFontsFromCache(pdf: import('jspdf').jsPDF): void {
		try {
			const regularFont = ReliablePDFGenerator.fontCache.get('NotoSansJP-Regular');
			const boldFont = ReliablePDFGenerator.fontCache.get('NotoSansJP-Bold');

			if (regularFont) {
				pdf.addFileToVFS('NotoSansJP-Regular.ttf', regularFont);
				pdf.addFont('NotoSansJP-Regular.ttf', 'NotoSansJP', 'normal');
				console.log('⚡ Applied cached NotoSansJP-Regular font');
			}

			if (boldFont) {
				pdf.addFileToVFS('NotoSansJP-Bold.ttf', boldFont);
				pdf.addFont('NotoSansJP-Bold.ttf', 'NotoSansJP', 'bold');
				console.log('⚡ Applied cached NotoSansJP-Bold font');
			}
		} catch (error) {
			console.error('❌ Failed to apply fonts from cache:', error);
		}
	}

	private static async loadFontAsBase64(fontUrl: string): Promise<string | null> {
		try {
			console.log(`🔤 Loading font file: ${fontUrl}`);

			const response = await fetch(fontUrl);
			if (!response.ok) {
				throw new Error(`Font file not found: ${fontUrl}`);
			}

			const arrayBuffer = await response.arrayBuffer();
			const uint8Array = new Uint8Array(arrayBuffer);

			// ArrayBufferをBase64に変換
			let binary = '';
			for (let i = 0; i < uint8Array.byteLength; i++) {
				const byte = uint8Array[i];
				if (byte !== undefined) {
					binary += String.fromCharCode(byte);
				}
			}

			const base64 = btoa(binary);
			console.log(`✅ Font converted to Base64, size: ${Math.round(base64.length / 1024)}KB`);

			return base64;
		} catch (error) {
			console.warn(`⚠️ Failed to load font: ${fontUrl}`, error);
			return null;
		}
	}

	// キャッシュクリア（メモリ管理用）
	public static clearFontCache(): void {
		ReliablePDFGenerator.fontCache.clear();
		ReliablePDFGenerator.initializationPromise = null;
		console.log('🗑️ Font cache cleared');
	}

	// キャッシュサイズ取得（デバッグ用）
	public static getFontCacheSize(): number {
		let totalSize = 0;
		for (const font of ReliablePDFGenerator.fontCache.values()) {
			totalSize += font.length;
		}
		return Math.round(totalSize / 1024); // KB単位
	}

	// HTML版に合わせたスタイリングメソッド

	// 背景ボックスを描画（グラデーション風）
	private addBackgroundBox(
		y: number,
		height: number,
		startColor: number[],
		endColor: number[]
	): void {
		try {
			// 配列の長さチェック
			if (startColor.length < 3 || endColor.length < 3) {
				console.warn('⚠️ Invalid color arrays provided');
				return;
			}

			this.pdf.saveGraphicsState();

			// グラデーション効果のため複数の矩形を重ねる
			const steps = 5;
			for (let i = 0; i < steps; i++) {
				const ratio = i / (steps - 1);
				const r = Math.round(startColor[0]! + (endColor[0]! - startColor[0]!) * ratio);
				const g = Math.round(startColor[1]! + (endColor[1]! - startColor[1]!) * ratio);
				const b = Math.round(startColor[2]! + (endColor[2]! - startColor[2]!) * ratio);

				this.pdf.setFillColor(r, g, b);
				this.pdf.rect(
					this.margin,
					y + (i * height) / steps,
					this.maxLineWidth,
					height / steps,
					'F'
				);
			}

			this.pdf.restoreGraphicsState();
		} catch (error) {
			console.warn('⚠️ Failed to add background box:', error);
		}
	}

	// 左側ボーダーを描画
	private addLeftBorder(y: number, height: number, color: number[]): void {
		try {
			// 配列の長さチェック
			if (color.length < 3) {
				console.warn('⚠️ Invalid color array provided');
				return;
			}

			this.pdf.saveGraphicsState();
			this.pdf.setFillColor(color[0]!, color[1]!, color[2]!);
			this.pdf.rect(this.margin, y, 2, height, 'F');
			this.pdf.restoreGraphicsState();
		} catch (error) {
			console.warn('⚠️ Failed to add left border:', error);
		}
	}

	// スコアグリッドを描画（HTML版のscore-gridスタイル相当）
	private addScoreGrid(checklist: ChecklistResult): void {
		const summaryLabels = this.useFallbackFont
			? {
					totalScore: 'Total Score',
					confidenceLevel: 'Confidence Level',
					result: 'Evaluation Result',
					judgment: 'Final Judgment'
				}
			: {
					totalScore: '総合スコア',
					confidenceLevel: '信頼度レベル',
					result: '評価結果',
					judgment: '最終判定'
				};

		// スコアカードを2x2グリッドで配置
		const cardWidth = (this.maxLineWidth - 10) / 2;
		const cardHeight = 20;
		const startX = this.margin;
		const startY = this.currentY;

		const scoreData = [
			{
				label: summaryLabels.totalScore,
				value: `${checklist.score.total}/${checklist.score.maxScore}`
			},
			{ label: summaryLabels.confidenceLevel, value: `${checklist.confidenceLevel}%` },
			{ label: summaryLabels.result, value: this.getLocalizedText(checklist.confidenceText) },
			{ label: summaryLabels.judgment, value: this.getJudgmentText(checklist.judgment) }
		];

		scoreData.forEach((item, index) => {
			const col = index % 2;
			const row = Math.floor(index / 2);
			const x = startX + col * (cardWidth + 5);
			const y = startY + row * (cardHeight + 5);

			// カード背景（白）
			this.addBackgroundBox(y, cardHeight, [255, 255, 255], [248, 250, 252]);

			// 左ボーダー（ブルー）
			this.addLeftBorder(y, cardHeight, [52, 165, 245]); // #3498db

			// テキスト
			this.pdf.setFontSize(9);
			this.setFontWeight('bold');
			this.pdf.setTextColor(44, 62, 80); // #2c3e50
			this.pdf.text(item.label, x + 5, y + 8);

			this.pdf.setFontSize(8);
			this.setFontWeight('normal');
			this.pdf.text(item.value, x + 5, y + 16);
		});

		this.currentY += 45;
	}

	// セクションヘッダーを描画（HTML版のsection-headerスタイル相当）
	private addSectionHeader(section: SectionData): void {
		const headerHeight = 25;

		// カテゴリー別の色設定（HTML版に合わせる）
		const colors = this.getSectionColors(section.category.id);

		// ヘッダー背景（グラデーション）
		this.addBackgroundBox(this.currentY, headerHeight, colors.start, colors.end);

		// ヘッダーテキスト
		this.pdf.setFontSize(14);
		this.setFontWeight('bold');
		this.pdf.setTextColor(255, 255, 255); // 白文字

		const sectionTitle = this.useFallbackFont
			? `${section.category.emoji} ${this.getCategoryNameEn(section.category.id)}`
			: `${section.category.emoji} ${section.category.name}`;

		this.pdf.text(sectionTitle, this.margin + 10, this.currentY + 12);

		// 右側に統計情報
		const statsText = `${section.completionRate}% (${section.checkedItems.length}/${section.items.length})`;
		const statsWidth = this.pdf.getTextWidth(statsText);
		this.pdf.setFontSize(10);
		this.pdf.text(statsText, this.pageWidth - this.margin - statsWidth - 10, this.currentY + 12);

		this.currentY += headerHeight;
	}

	// セクション色を取得（HTML版のsection-header色に合わせる）
	private getSectionColors(categoryId: string): { start: number[]; end: number[] } {
		switch (categoryId) {
			case 'critical':
				return { start: [231, 76, 60], end: [192, 57, 43] }; // #e74c3c to #c0392b
			case 'detailed':
				return { start: [243, 156, 18], end: [230, 126, 34] }; // #f39c12 to #e67e22
			case 'verification':
				return { start: [52, 152, 219], end: [41, 128, 185] }; // #3498db to #2980b9
			case 'context':
				return { start: [155, 89, 182], end: [142, 68, 173] }; // #9b59b6 to #8e44ad
			default:
				return { start: [149, 165, 166], end: [127, 140, 141] }; // #95a5a6 to #7f8c8d
		}
	}

	// Phase 3: 高度なPDF機能実装

	// PDFメタデータの設定
	private addPDFMetadata(checklist: ChecklistResult): void {
		try {
			const title = this.options.documentTitle ?? `事実確認チェックシート - ${checklist.title}`;
			const author = this.options.documentAuthor ?? 'Fact Checklist Generator';
			const subject =
				this.options.documentSubject ??
				'情報の信頼性を科学的・体系的に評価するための実用的事実確認チェックシート';

			// jsPDFのメタデータ設定
			this.pdf.setProperties({
				title,
				author,
				subject,
				keywords: 'fact-check, evaluation, reliability, information, 事実確認, 情報検証',
				creator: 'Fact Checklist PWA'
			});

			console.log('📋 PDF metadata configured:', { title, author, subject });
		} catch (error) {
			console.warn('⚠️ Failed to set PDF metadata:', error);
		}
	}

	// 透かしをすべてのページに追加
	private addWatermarkToAllPages(customText?: string): void {
		try {
			const pageCount = this.pdf.getNumberOfPages();
			const watermarkText = customText ?? 'FACT CHECK EVALUATION';

			for (let i = 1; i <= pageCount; i++) {
				this.pdf.setPage(i);
				this.addWatermarkToCurrentPage(watermarkText);
			}

			console.log(`✨ Watermark added to ${pageCount} pages`);
		} catch (error) {
			console.warn('⚠️ Failed to add watermark:', error);
		}
	}

	// 現在のページに透かし追加
	private addWatermarkToCurrentPage(text: string): void {
		try {
			// 現在の設定を保存
			const originalSize = this.pdf.getFontSize();

			// 透かし設定
			this.pdf.saveGraphicsState();
			this.pdf.setGState(this.pdf.GState({ opacity: 0.1 }));
			this.pdf.setFontSize(48);
			this.pdf.setTextColor(128, 128, 128);

			// ページ中央に斜め45度で配置
			const pageWidth = this.pdf.internal.pageSize.getWidth();
			const pageHeight = this.pdf.internal.pageSize.getHeight();
			const centerX = pageWidth / 2;
			const centerY = pageHeight / 2;

			// テキスト幅を計算
			const textWidth = this.pdf.getTextWidth(text);

			// 透かしテキストを回転して描画
			this.pdf.text(text, centerX - textWidth / 2, centerY, {
				angle: 45
			});

			// 設定を復元
			this.pdf.restoreGraphicsState();
			this.pdf.setFontSize(originalSize);
		} catch (error) {
			console.warn('⚠️ Failed to add watermark to current page:', error);
		}
	}

	// 目次をドキュメントの先頭に挿入
	private insertTableOfContents(): void {
		try {
			if (this.tableOfContents.length === 0) return;

			// 新しいページを先頭に挿入
			this.pdf.insertPage(1);
			this.pdf.setPage(1);

			// 目次ヘッダー
			this.currentY = this.margin + 10;
			this.pdf.setFontSize(18);
			this.setFontWeight('bold');

			const tocTitle = this.useFallbackFont ? 'Table of Contents' : '目次';
			this.addText(tocTitle);
			this.addText('========================================');
			this.currentY += 5;

			// 目次エントリ
			this.pdf.setFontSize(11);
			this.setFontWeight('normal');

			this.tableOfContents.forEach(entry => {
				this.checkPageBreak(10);

				// インデント（レベルに応じて）
				const indent = (entry.level - 1) * 10;
				const titleText =
					entry.title.length > 60 ? `${entry.title.substring(0, 57)}...` : entry.title;

				// ドット付きリーダー線
				const dotsNeeded = Math.max(
					3,
					Math.floor((this.maxLineWidth - indent - this.pdf.getTextWidth(titleText) - 20) / 3)
				);
				const dots = '.'.repeat(dotsNeeded);

				// 目次行を描画
				const tocLine = `${' '.repeat(indent / 2)}${titleText} ${dots} ${entry.page + 1}`;
				this.addText(tocLine);
			});

			// ページ番号を更新（目次追加により全ページが1つずつずれる）
			this.updatePageNumbersAfterTOC();

			console.log(`📚 Table of contents inserted with ${this.tableOfContents.length} entries`);
		} catch (error) {
			console.warn('⚠️ Failed to insert table of contents:', error);
		}
	}

	// 目次挿入後のページ番号更新
	private updatePageNumbersAfterTOC(): void {
		try {
			// すべての目次エントリのページ番号を1つずつ増加
			this.tableOfContents.forEach(entry => {
				entry.page += 1;
			});
		} catch (error) {
			console.warn('⚠️ Failed to update page numbers after TOC:', error);
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
