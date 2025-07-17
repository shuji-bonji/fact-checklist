import type { LayoutLoad } from './$types';

// Disable prerendering to allow dynamic SSR on Vercel
export const prerender = false;
export const ssr = true;
export const trailingSlash = 'never';

export const load: LayoutLoad = async ({ data }) =>
  // SSRで検出された言語データをそのままパススルー
  // クライアントサイドの+layout.svelteで初期化される
  data;
