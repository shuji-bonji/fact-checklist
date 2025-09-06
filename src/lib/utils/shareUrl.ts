/**
 * URLエンコード共有ユーティリティ
 * チェックリストデータをURLパラメータに圧縮して埋め込む
 */

import type { ChecklistResult, ChecklistScore } from '$lib/types/checklist';

/**
 * 最小化された共有データ
 */
interface MinimalShareData {
  v: number; // バージョン
  t: string; // タイトル
  desc?: string; // 説明・概要（オプション）
  n?: string; // ノート（オプション）
  c: string[]; // チェックされたアイテムのID配列
  s: number; // スコア（パーセンテージ）
  j?: string; // 判定（accept/caution/reject）
  d: number; // 日付（タイムスタンプ）
  l?: string; // 言語コード（オプション）
}

/**
 * チェックリストデータを共有用URLに変換
 */
export function createShareableUrl(checklist: ChecklistResult): string {
  try {
    // チェックされたアイテムのIDのみを抽出
    const checkedIds = checklist.items.filter(item => item.checked).map(item => item.id);

    // 最小化データを作成
    const minimalData: MinimalShareData = {
      v: 1, // URLフォーマットバージョン
      t: checklist.title.substring(0, 100), // タイトルは100文字まで
      c: checkedIds,
      s: Math.round(checklist.score.percentage),
      d: checklist.completedAt ? new Date(checklist.completedAt).getTime() : Date.now()
    };

    // 説明がある場合は追加（150文字まで）
    if (checklist.description) {
      minimalData.desc = checklist.description.substring(0, 150);
    }

    // ノートがある場合は追加（200文字まで）
    if (checklist.notes) {
      minimalData.n = checklist.notes.substring(0, 200);
    }

    // 判定がある場合は追加
    if (checklist.judgment) {
      minimalData.j = checklist.judgment;
    }

    // JSONを文字列化して圧縮
    const jsonStr = JSON.stringify(minimalData);

    // Base64エンコード（URLセーフ）- TextEncoderを使用
    const encoder = new TextEncoder();
    const data = encoder.encode(jsonStr);
    const base64 = btoa(String.fromCharCode(...data));
    const encoded = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

    // 共有用URLを生成（GitHub Pagesのbase pathを考慮）
    if (typeof window !== 'undefined') {
      const host = window.location.host;
      const protocol = window.location.protocol;
      const pathname = window.location.pathname;

      // GitHub Pagesの場合はbase pathを含める
      if (host.includes('github.io') || pathname.includes('/fact-checklist')) {
        // httpsを強制
        return `https://${host}/fact-checklist/checklist/shared?d=${encoded}`;
      }

      // ローカル開発環境
      return `${protocol}//${host}/checklist/shared?d=${encoded}`;
    }

    // SSR時のフォールバック
    return `https://shuji-bonji.github.io/fact-checklist/checklist/shared?d=${encoded}`;
  } catch (error) {
    console.error('Failed to create shareable URL:', error);
    throw new Error('URLの生成に失敗しました');
  }
}

/**
 * 共有用URLからチェックリストデータを復元
 */
export function parseShareableUrl(
  urlOrParams: string | URLSearchParams
): Partial<ChecklistResult> | null {
  try {
    let params: URLSearchParams;

    if (typeof urlOrParams === 'string') {
      const url = new URL(urlOrParams);
      params = url.searchParams;
    } else {
      params = urlOrParams;
    }

    const encoded = params.get('d');
    if (encoded === null || encoded === '') return null;

    // Base64デコード（URLセーフから通常のBase64に変換）
    const base64 =
      encoded.replace(/-/g, '+').replace(/_/g, '/') +
      '=='.substring(0, (4 - (encoded.length % 4)) % 4);

    // TextDecoderを使用してデコード
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const decoder = new TextDecoder();
    const jsonStr = decoder.decode(bytes);
    const data = JSON.parse(jsonStr) as MinimalShareData;

    // バージョンチェック
    if (data.v !== 1) {
      console.warn('Unsupported share data version:', data.v);
    }

    // 復元データを作成
    const result = {
      title: data.t,
      description: data.desc !== null && data.desc !== undefined ? data.desc : '',
      notes: data.n !== null && data.n !== undefined ? data.n : '',
      judgment:
        data.j !== null && data.j !== undefined
          ? (data.j as 'accept' | 'caution' | 'reject' | null)
          : null,
      completedAt: new Date(data.d),
      score: {
        percentage: data.s
      } as ChecklistScore
    } as ChecklistResult & { _checkedIds?: string[] };

    // チェックされたアイテムのIDリスト（実際のアイテムは後で復元）
    (result as ChecklistResult & { _checkedIds: string[] })._checkedIds = data.c;

    return result;
  } catch (error) {
    console.error('Failed to parse shareable URL:', error);
    return null;
  }
}

/**
 * 短縮URLのような見た目にする（実際は短縮しない）
 */
export function formatShareUrl(url: string): string {
  // URLが長すぎる場合は省略表示
  if (url.length > 60) {
    const start = url.substring(0, 40);
    const end = url.substring(url.length - 15);
    return `${start}...${end}`;
  }
  return url;
}

/**
 * URLの長さをチェック（ブラウザの制限を考慮）
 */
export function isUrlTooLong(url: string): boolean {
  // 一般的なブラウザの制限は2000-8000文字
  // 安全のため2000文字を上限とする
  return url.length > 2000;
}

/**
 * データサイズを推定
 */
export function estimateDataSize(checklist: ChecklistResult): {
  size: number;
  percentage: number;
  canShare: boolean;
} {
  const url = createShareableUrl(checklist);
  const size = url.length;
  const maxSize = 2000;
  const percentage = Math.round((size / maxSize) * 100);

  return {
    size,
    percentage,
    canShare: size <= maxSize
  };
}
