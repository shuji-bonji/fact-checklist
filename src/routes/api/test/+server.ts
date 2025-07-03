import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
  const acceptLanguage = request.headers.get('accept-language') ?? 'not provided';
  const userAgent = request.headers.get('user-agent') ?? 'not provided';

  return json({
    message: 'SSR is working!',
    timestamp: new Date().toISOString(),
    headers: {
      'accept-language': acceptLanguage,
      'user-agent': userAgent
    }
  });
};
