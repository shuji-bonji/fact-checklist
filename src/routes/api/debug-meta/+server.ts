import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

/**
 * Debug endpoint to verify meta tag generation logic
 */
export const GET: RequestHandler = async ({ url, request }) => {
  const pathname = url.searchParams.get('path') || '/';
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  
  // Simulate the logic from layout.server.ts
  const shouldSkipMeta = pathname.includes('/intro');
  
  return json({
    path: pathname,
    shouldSkipMeta,
    reason: shouldSkipMeta ? 'Page has dedicated server load function' : 'Uses layout meta generation',
    acceptLanguage,
    timestamp: new Date().toISOString()
  });
};