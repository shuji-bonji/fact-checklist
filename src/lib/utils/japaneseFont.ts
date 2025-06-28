// src/lib/utils/japaneseFont.ts
/**
 * 日本語フォントユーティリティ
 * jsPDFで日本語テキストを適切に表示するためのフォント管理
 */

import type jsPDF from 'jspdf';

export interface FontConfig {
	name: string;
	weight: 'normal' | 'bold';
	style: 'normal' | 'italic';
	sizes: {
		title: number;
		heading: number;
		body: number;
		small: number;
	};
}

// 日本語フォント設定インターフェース（CSP制約により現在未使用）
// interface JapaneseFontSource {
//   name: string;
//   displayName: string;
//   url: string;
//   filename: string;
//   fallback?: boolean;
// }

// CSP制約により外部フォント取得は現在無効化
// 将来的にCSP設定が変更された場合は以下のフォント設定を使用可能:
// const JAPANESE_FONTS = [
//   { name: 'NotoSansJP', url: 'https://fonts.gstatic.com/s/notosansjp/...', ... },
//   { name: 'NotoSansCJKjp', url: 'https://fonts.gstatic.com/ea/notosanscjkjp/...', ... }
// ];

/**
 * デフォルトフォント設定
 */
export const DEFAULT_FONT_CONFIG: FontConfig = {
	name: 'helvetica', // CSP制約によりHelveticaを暫定デフォルトに
	weight: 'normal',
	style: 'normal',
	sizes: {
		title: 18,
		heading: 14,
		body: 10,
		small: 8
	}
};

/**
 * ArrayBuffer を Base64 文字列に変換
 */
function arrayBufferToBase64(buffer: ArrayBuffer): string {
	const bytes = new Uint8Array(buffer);
	let binary = '';
	for (let i = 0; i < bytes.byteLength; i++) {
		const byte = bytes[i];
		if (byte !== undefined) {
			binary += String.fromCharCode(byte);
		}
	}
	return btoa(binary);
}

/**
 * 最適な日本語フォントを読み込み
 */
export async function loadBestJapaneseFont(pdf: jsPDF): Promise<string> {
	// 既存のフォントをチェック
	const fontList = pdf.getFontList();
	console.log('現在利用可能なフォント:', Object.keys(fontList));

	// CSP制約により外部フォント取得は無効化されているため、
	// システムフォントの中から日本語表示に最も適したものを選択

	// 日本語表示に適したシステムフォント優先順位
	const preferredFonts = [
		'helvetica', // 最も安全で確実
		'times', // セリフ体の代替
		'courier' // 等幅フォントの代替
	];

	for (const fontName of preferredFonts) {
		if (fontList[fontName]) {
			console.log(`CSP制約下でのフォント選択: ${fontName}`);
			console.log(
				'注意: 外部フォント取得が制限されているため、日本語文字の表示品質が制限される可能性があります'
			);
			return fontName;
		}
	}

	// フォールバック
	console.log('デフォルトフォントにフォールバック');
	console.warn('⚠️ CSP制約により日本語フォントの読み込みが制限されています');
	return 'helvetica';
}

// loadSingleFont関数はCSP制約により一時的に無効化
// 外部フォント取得が可能になった場合に復活予定

/**
 * PDF文書に日本語フォントを追加（新しいAPI）
 */
export async function addJapaneseFontToPDF(
	pdf: jsPDF,
	fontConfig: FontConfig = DEFAULT_FONT_CONFIG
): Promise<string> {
	try {
		const fontName = await loadBestJapaneseFont(pdf);

		// 成功したフォント名でfontConfigを更新
		if (fontName !== fontConfig.name) {
			console.log(`フォント設定を更新: ${fontConfig.name} → ${fontName}`);
		}

		// CSP制約の警告を表示
		if (fontName === 'helvetica') {
			console.warn('🔒 CSP制約により日本語専用フォントが利用できません');
			console.warn('📄 PDFの日本語文字は標準フォントで表示されます');
		}

		return fontName;
	} catch (error) {
		console.error('フォント読み込み完全失敗:', error);
		return 'helvetica';
	}
}

/**
 * ローカル静的フォントの読み込み（将来の拡張用）
 */
export async function loadLocalJapaneseFont(pdf: jsPDF): Promise<string> {
	try {
		// 静的ファイルから読み込み
		const response = await fetch('/fonts/NotoSansJP-Regular.ttf');
		if (!response.ok) {
			throw new Error('ローカルフォント読み込み失敗');
		}

		const fontBuffer = await response.arrayBuffer();
		const fontBase64 = arrayBufferToBase64(fontBuffer);

		pdf.addFileToVFS('NotoSansJP-Regular.ttf', fontBase64);
		pdf.addFont('NotoSansJP-Regular.ttf', 'NotoSansJP', 'normal');

		return 'NotoSansJP';
	} catch (error) {
		console.error('ローカルフォント読み込みエラー:', error);
		return 'helvetica';
	}
}

/**
 * フォント状態をデバッグ
 */
export function debugFontStatus(pdf: jsPDF): void {
	const fontList = pdf.getFontList();
	console.log('=== フォント状態確認 ===');
	console.log('利用可能フォント:', Object.keys(fontList));

	// 各フォントの詳細
	Object.entries(fontList).forEach(([name, styles]) => {
		console.log(`${name}:`, styles);
	});

	console.log('======================');
}

/**
 * テキストサイズの設定
 */
export function setFontSize(
	pdf: jsPDF,
	size: keyof FontConfig['sizes'],
	fontConfig: FontConfig = DEFAULT_FONT_CONFIG
): void {
	pdf.setFontSize(fontConfig.sizes[size]);
}

/**
 * テキストスタイルの設定
 */
export function setFontStyle(
	pdf: jsPDF,
	weight: 'normal' | 'bold' = 'normal',
	fontName?: string
): void {
	const font = fontName ?? 'helvetica';
	pdf.setFont(font, weight);
}

/**
 * 日本語テキストの幅を計算
 */
export function getTextWidth(
	pdf: jsPDF,
	text: string,
	fontSize: number,
	fontName?: string
): number {
	const currentFont = pdf.getFont();
	const currentSize = pdf.getFontSize();

	// 一時的にフォントサイズを設定
	pdf.setFontSize(fontSize);
	if (fontName) {
		pdf.setFont(fontName, 'normal');
	}

	const width = pdf.getTextWidth(text);

	// 元の設定に戻す
	pdf.setFont(currentFont.fontName, currentFont.fontStyle);
	pdf.setFontSize(currentSize);

	return width;
}

/**
 * 改行を考慮したテキストの行数を計算
 */
export function calculateTextLines(
	pdf: jsPDF,
	text: string,
	maxWidth: number,
	fontSize: number,
	fontName?: string
): string[] {
	// テキストを行ごとに分割
	const lines = text.split('\n');
	const wrappedLines: string[] = [];

	pdf.setFontSize(fontSize);
	if (fontName) {
		pdf.setFont(fontName, 'normal');
	}

	for (const line of lines) {
		if (pdf.getTextWidth(line) <= maxWidth) {
			wrappedLines.push(line);
		} else {
			// 長い行を単語境界で分割
			const words = line.split(' ');
			let currentLine = '';

			for (const word of words) {
				const testLine = currentLine ? `${currentLine} ${word}` : word;
				if (pdf.getTextWidth(testLine) <= maxWidth) {
					currentLine = testLine;
				} else {
					if (currentLine) {
						wrappedLines.push(currentLine);
						currentLine = word;
					} else {
						// 単語が行幅より長い場合は強制的に切り詰め
						wrappedLines.push(word);
					}
				}
			}

			if (currentLine) {
				wrappedLines.push(currentLine);
			}
		}
	}

	return wrappedLines;
}

/**
 * フォント設定の検証
 */
export function validateFontConfig(config: Partial<FontConfig>): FontConfig {
	return {
		name: config.name ?? DEFAULT_FONT_CONFIG.name,
		weight: config.weight ?? DEFAULT_FONT_CONFIG.weight,
		style: config.style ?? DEFAULT_FONT_CONFIG.style,
		sizes: {
			title: config.sizes?.title ?? DEFAULT_FONT_CONFIG.sizes.title,
			heading: config.sizes?.heading ?? DEFAULT_FONT_CONFIG.sizes.heading,
			body: config.sizes?.body ?? DEFAULT_FONT_CONFIG.sizes.body,
			small: config.sizes?.small ?? DEFAULT_FONT_CONFIG.sizes.small
		}
	};
}
