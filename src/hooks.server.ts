import type { Handle } from '@sveltejs/kit';
import { detectLanguage } from '$lib/utils/language-detection';

export const handle: Handle = async ({ event, resolve }) => {
  // Accept-Languageヘッダーから言語を検出
  const acceptLanguage = event.request.headers.get('accept-language') ?? '';
  const detectedLanguage = detectLanguage(acceptLanguage);

  // イベントに言語を追加（他のフックで使用可能）
  event.locals.language = detectedLanguage;

  // レスポンスを処理
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      // HTMLのlang属性を動的に設定
      html.replace('%sveltekit.lang%', detectedLanguage)
  });

  return response;
};
