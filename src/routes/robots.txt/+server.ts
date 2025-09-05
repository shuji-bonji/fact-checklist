import type { RequestHandler } from './$types';

const SITE_URL = 'https://fact-checklist.vercel.app';

export const prerender = true;
export const config = {
  isr: false
};

export const GET: RequestHandler = async () => {
  const robotsTxt = `# Fact Checklist - Robots.txt
# https://fact-checklist.vercel.app

User-agent: *
Allow: /
Crawl-delay: 1

Sitemap: ${SITE_URL}/sitemap.xml

User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Disallow API endpoints
User-agent: *
Disallow: /api/
Disallow: /_app/

# Allow static assets
User-agent: *
Allow: /favicon.ico
Allow: /og-image*.png
Allow: /icons/
Allow: /manifest.json`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=86400'
    }
  });
};
