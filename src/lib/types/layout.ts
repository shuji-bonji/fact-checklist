/**
 * Layout server data types
 */

import type { LanguageCode } from '$lib/i18n/types';

export interface MetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  alternateLinks: Array<{ lang: string; url: string }>;
  structuredData: string;
}

export interface LayoutServerData {
  meta: MetaData;
  currentLang: LanguageCode;
  currentUrl: string;
}
