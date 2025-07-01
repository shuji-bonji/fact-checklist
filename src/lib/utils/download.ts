// src/lib/utils/download.ts
// ファイルダウンロード関連のユーティリティ関数

/**
 * Blobデータからファイルをダウンロードする
 * @param blob ダウンロードするBlobデータ
 * @param filename ダウンロードファイル名
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * テキストデータからファイルをダウンロードする
 * @param content テキスト内容
 * @param filename ダウンロードファイル名
 * @param mimeType MIMEタイプ（デフォルト: text/plain）
 */
export function downloadText(
  content: string,
  filename: string,
  mimeType: string = 'text/plain'
): void {
  const blob = new Blob([content], { type: mimeType });
  downloadBlob(blob, filename);
}

/**
 * JSONオブジェクトからファイルをダウンロードする
 * @param data JSONデータ
 * @param filename ダウンロードファイル名
 */
export function downloadJSON(data: unknown, filename: string): void {
  const content = JSON.stringify(data, null, 2);
  downloadText(content, filename, 'application/json');
}

/**
 * HTMLコンテンツからファイルをダウンロードする
 * @param htmlContent HTML内容
 * @param filename ダウンロードファイル名
 */
export function downloadHTML(htmlContent: string, filename: string): void {
  downloadText(htmlContent, filename, 'text/html');
}

/**
 * Markdownコンテンツからファイルをダウンロードする
 * @param markdownContent Markdown内容
 * @param filename ダウンロードファイル名
 */
export function downloadMarkdown(markdownContent: string, filename: string): void {
  downloadText(markdownContent, filename, 'text/markdown');
}

/**
 * 安全なファイル名を生成する（無効な文字を除去）
 * @param filename 元のファイル名
 * @returns 安全なファイル名
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[<>:"/\\|?*]/g, '_') // 無効な文字を_に置換
    .replace(/\s+/g, '_') // 空白を_に置換
    .replace(/_+/g, '_') // 複数の_を1つに統合
    .substring(0, 100); // 長さ制限
}

/**
 * ファイル拡張子を追加（存在しない場合）
 * @param filename ファイル名
 * @param extension 拡張子（.を含む）
 * @returns 拡張子付きファイル名
 */
export function ensureFileExtension(filename: string, extension: string): string {
  return filename.toLowerCase().endsWith(extension.toLowerCase()) ? filename : filename + extension;
}
