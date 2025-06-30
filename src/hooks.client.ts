import type { HandleClientError } from '@sveltejs/kit';

// クライアントサイドエラーハンドリング
export const handleError: HandleClientError = ({ error, event: _event }) => {
  console.error('Client-side error:', error);

  // エラーをカスタムログシステムに送信することもできます
  // sendToAnalytics({ error, url: event.url });

  return {
    message: 'アプリケーションでエラーが発生しました。',
    code: 'UNEXPECTED_ERROR'
  };
};
