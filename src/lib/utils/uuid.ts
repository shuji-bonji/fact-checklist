/**
 * UUID生成ユーティリティ
 *
 * crypto.randomUUID()を使用して標準準拠のUUIDを生成
 * SSR環境でも動作するようにフォールバック実装を含む
 */

/**
 * UUID v4を生成する
 * @returns {string} UUID文字列（例：550e8400-e29b-41d4-a716-446655440000）
 */
export function generateUUID(): string {
  // ブラウザ環境またはNode.js 16.7+でcrypto.randomUUID()が利用可能
  if (typeof crypto !== 'undefined' && crypto.randomUUID !== undefined) {
    return crypto.randomUUID();
  }

  // フォールバック実装（古い環境やSSR用）
  // UUID v4の仕様に従った実装
  const segments = [
    Math.random().toString(16).substring(2, 10), // 8文字
    Math.random().toString(16).substring(2, 6), // 4文字
    `4${Math.random().toString(16).substring(2, 5)}`, // 4xxx（バージョン4）
    ((Math.random() * 4) | 8).toString(16) + Math.random().toString(16).substring(2, 5), // yxxx（y = 8,9,a,b）
    Math.random().toString(16).substring(2, 14) // 12文字
  ];

  return segments.join('-');
}

/**
 * 短縮UUID（最初の8文字）を生成する
 * URLなどで使用する場合に便利
 * @returns {string} 短縮UUID文字列（例：550e8400）
 */
export function generateShortUUID(): string {
  const firstSegment = generateUUID().split('-')[0];
  return firstSegment !== null && firstSegment !== undefined && firstSegment !== ''
    ? firstSegment
    : '';
}

/**
 * タイムスタンプベースのIDを生成する（レガシー互換用）
 * @deprecated generateUUID()の使用を推奨
 * @returns {string} タイムスタンプベースのID
 */
export function generateTimestampId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
