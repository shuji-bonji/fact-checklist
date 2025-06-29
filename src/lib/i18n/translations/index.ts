/**
 * Translation files index
 * Exports all available translations and metadata
 */

import type { LanguageCode, TranslationKeys } from '../types.js';

// Import all translation files
import { translations as ja, metadata as jaMetadata } from './ja.js';
import { translations as en, metadata as enMetadata } from './en.js';
import { translations as fr, metadata as frMetadata } from './fr.js';
import { translations as zhTW, metadata as zhTWMetadata } from './zh-TW.js';
import { translations as es, metadata as esMetadata } from './es.js';
import { translations as pt, metadata as ptMetadata } from './pt.js';
import { translations as hi, metadata as hiMetadata } from './hi.js';
import { translations as de, metadata as deMetadata } from './de.js';
import { translations as it, metadata as itMetadata } from './it.js';
import { translations as ar, metadata as arMetadata } from './ar.js';
import { translations as id, metadata as idMetadata } from './id.js';
import { translations as ko, metadata as koMetadata } from './ko.js';

// Translation map
export const translations: Record<LanguageCode, TranslationKeys> = {
  ja,
  en,
  fr,
  'zh-TW': zhTW,
  es,
  pt,
  hi,
  de,
  it,
  ar,
  id,
  ko
};

// Metadata map
export const translationMetadata = {
  ja: jaMetadata,
  en: enMetadata,
  fr: frMetadata,
  'zh-TW': zhTWMetadata,
  es: esMetadata,
  pt: ptMetadata,
  hi: hiMetadata,
  de: deMetadata,
  it: itMetadata,
  ar: arMetadata,
  id: idMetadata,
  ko: koMetadata
};

// Helper function to get translation by language code
export function getTranslation(languageCode: LanguageCode): TranslationKeys {
  return translations[languageCode] || translations.ja; // fallback to Japanese
}

// Helper function to get translation metadata
export function getTranslationMetadata(languageCode: LanguageCode) {
  return translationMetadata[languageCode] || translationMetadata.ja;
}

// Get available languages with completion status
export function getAvailableLanguages() {
  return Object.entries(translationMetadata).map(([code, meta]) => ({
    code: code as LanguageCode,
    ...meta
  }));
}

// Get completed translations only (above certain threshold)
export function getCompletedTranslations(threshold = 80) {
  return getAvailableLanguages().filter(lang => lang.completeness >= threshold);
}

export default translations;
