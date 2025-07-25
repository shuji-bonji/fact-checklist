/**
 * Internationalized font support for PDF generation
 * Supports all 12 languages with appropriate font fallbacks
 */

import type { LanguageCode } from './types.js';
import type jsPDF from 'jspdf';

export interface FontConfig {
  fontFamily: string;
  fontFile: string;
  fontName: string;
  supports: LanguageCode[];
  fallback?: string;
}

/**
 * Get the correct base path for font URLs based on environment
 */
export function getFontBasePath(): string {
  if (typeof window === 'undefined') return '/fonts/'; // SSR

  // Check for GitHub Pages environment
  const isGitHubPages =
    window.location.hostname === 'shuji-bonji.github.io' ||
    window.location.pathname.startsWith('/fact-checklist/') ||
    window.location.origin.includes('github.io');

  // console.log(
  //   `🔧 Font path detection: hostname=${window.location.hostname}, pathname=${window.location.pathname}, isGitHubPages=${isGitHubPages}`
  // );

  return isGitHubPages ? '/fact-checklist/fonts/' : '/fonts/';
}

/**
 * Get font configurations with correct paths for current environment
 */
export function getFontConfigs(): Record<string, FontConfig> {
  const basePath = getFontBasePath();

  return {
    // Latin script languages (English, French, Spanish, Portuguese, German, Italian, Indonesian)
    // Use NotoSansJP as universal font since it supports both Latin and Japanese
    latin: {
      fontFamily: 'NotoSansJP',
      fontFile: `${basePath}NotoSansJP-Regular.ttf`,
      fontName: 'NotoSansJP',
      supports: ['en', 'fr', 'es', 'pt', 'de', 'it', 'id'],
      fallback: 'helvetica'
    },

    // CJK languages (Japanese, Korean, Chinese Traditional)
    // Use existing NotoSansJP font
    cjk: {
      fontFamily: 'NotoSansJP',
      fontFile: `${basePath}NotoSansJP-Regular.ttf`,
      fontName: 'NotoSansJP',
      supports: ['ja', 'ko', 'zh-TW'],
      fallback: 'helvetica'
    },

    // Devanagari script (Hindi) - Fallback to NotoSansJP
    devanagari: {
      fontFamily: 'NotoSansJP',
      fontFile: `${basePath}NotoSansJP-Regular.ttf`,
      fontName: 'NotoSansJP',
      supports: ['hi'],
      fallback: 'helvetica'
    },

    // Arabic script - Fallback to NotoSansJP
    arabic: {
      fontFamily: 'NotoSansJP',
      fontFile: `${basePath}NotoSansJP-Regular.ttf`,
      fontName: 'NotoSansJP',
      supports: ['ar'],
      fallback: 'helvetica'
    }
  };
}

// Legacy export for backward compatibility (use getFontConfigs() instead)
export const FONT_CONFIGS: Record<string, FontConfig> = {
  // These will be updated at runtime by InternationalFontManager
  latin: {
    fontFamily: 'NotoSansJP',
    fontFile: '/fonts/NotoSansJP-Regular.ttf',
    fontName: 'NotoSansJP',
    supports: ['en', 'fr', 'es', 'pt', 'de', 'it', 'id'],
    fallback: 'helvetica'
  },
  cjk: {
    fontFamily: 'NotoSansJP',
    fontFile: '/fonts/NotoSansJP-Regular.ttf',
    fontName: 'NotoSansJP',
    supports: ['ja', 'ko', 'zh-TW'],
    fallback: 'helvetica'
  },
  devanagari: {
    fontFamily: 'NotoSansJP',
    fontFile: '/fonts/NotoSansJP-Regular.ttf',
    fontName: 'NotoSansJP',
    supports: ['hi'],
    fallback: 'helvetica'
  },
  arabic: {
    fontFamily: 'NotoSansJP',
    fontFile: '/fonts/NotoSansJP-Regular.ttf',
    fontName: 'NotoSansJP',
    supports: ['ar'],
    fallback: 'helvetica'
  }
};

// Mapping of language codes to font configurations
// All languages use NotoSansJP as it's the only available font
export const LANGUAGE_FONT_MAP: Record<LanguageCode, string> = {
  ja: 'cjk',
  en: 'latin',
  fr: 'latin',
  'zh-TW': 'cjk',
  es: 'latin',
  pt: 'latin',
  hi: 'devanagari',
  de: 'latin',
  it: 'latin',
  ar: 'arabic',
  id: 'latin',
  ko: 'cjk'
};

export async function loadFontAsBase64(fontUrl: string): Promise<string | null> {
  try {
    // console.log(`🔤 Loading font file: ${fontUrl}`);
    // console.log(`🔤 Current location: ${window.location.origin}${window.location.pathname}`);

    const response = await fetch(fontUrl);
    if (!response.ok) {
      console.error(
        `❌ Font fetch failed: ${response.status} ${response.statusText} for ${fontUrl}`
      );
      throw new Error(
        `Font file not found: ${fontUrl} (${response.status} ${response.statusText})`
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Convert ArrayBuffer to Base64
    let binary = '';
    for (let i = 0; i < uint8Array.byteLength; i++) {
      const byte = uint8Array[i];
      if (byte !== undefined) {
        binary += String.fromCharCode(byte);
      }
    }

    const base64 = btoa(binary);
    // console.log(`✅ Font converted to Base64, size: ${Math.round(base64.length / 1024)}KB`);

    return base64;
  } catch (error) {
    console.warn(`⚠️ Failed to load font: ${fontUrl}`, error);
    return null;
  }
}

export class InternationalFontManager {
  private pdf: jsPDF;
  private loadedFonts: Set<string> = new Set();
  private currentLanguage: LanguageCode;

  constructor(pdf: jsPDF, language: LanguageCode) {
    this.pdf = pdf;
    this.currentLanguage = language;
  }

  async setupFontsForLanguage(language: LanguageCode): Promise<boolean> {
    this.currentLanguage = language;
    const fontConfigKey = LANGUAGE_FONT_MAP[language];
    const fontConfigs = getFontConfigs();
    const fontConfig = fontConfigs[fontConfigKey];

    if (!fontConfig) {
      console.warn(`⚠️ No font configuration found for language: ${language}`);
      return false;
    }

    // Check if font is already loaded
    if (this.loadedFonts.has(fontConfig.fontName)) {
      this.pdf.setFont(fontConfig.fontName);
      return true;
    }

    try {
      // Load and register the font
      const fontBase64 = await loadFontAsBase64(fontConfig.fontFile);
      if (fontBase64) {
        const fontFileName = fontConfig.fontFile.split('/').pop() ?? `${fontConfig.fontName}.ttf`;

        this.pdf.addFileToVFS(fontFileName, fontBase64);
        this.pdf.addFont(fontFileName, fontConfig.fontName, 'normal');

        // Also register bold variant if available
        const boldFontFile = fontConfig.fontFile.replace('Regular', 'Bold');
        const boldFontBase64 = await loadFontAsBase64(boldFontFile);
        if (boldFontBase64) {
          const boldFontFileName =
            boldFontFile.split('/').pop() ?? `${fontConfig.fontName}-Bold.ttf`;
          this.pdf.addFileToVFS(boldFontFileName, boldFontBase64);
          this.pdf.addFont(boldFontFileName, fontConfig.fontName, 'bold');
        }

        this.loadedFonts.add(fontConfig.fontName);
        this.pdf.setFont(fontConfig.fontName);

        // console.log(`✅ Successfully loaded font for language ${language}: ${fontConfig.fontName}`);
        return true;
      }
    } catch (error) {
      console.error(`❌ Failed to load font for language ${language}:`, error);
    }

    // Fallback to system font
    console.warn(`⚠️ Using fallback font for language ${language}: ${fontConfig.fallback}`);
    this.pdf.setFont(fontConfig.fallback ?? 'helvetica');
    return false;
  }

  setFont(style: 'normal' | 'bold' = 'normal'): void {
    const fontConfigKey = LANGUAGE_FONT_MAP[this.currentLanguage];
    const fontConfigs = getFontConfigs();
    const fontConfig = fontConfigs[fontConfigKey];

    if (fontConfig && this.loadedFonts.has(fontConfig.fontName)) {
      this.pdf.setFont(fontConfig.fontName, style);
    } else {
      this.pdf.setFont(fontConfig?.fallback ?? 'helvetica', style);
    }
  }

  isRTL(): boolean {
    return this.currentLanguage === 'ar';
  }

  getTextDirection(): 'ltr' | 'rtl' {
    return this.isRTL() ? 'rtl' : 'ltr';
  }

  // Text wrapping with RTL support
  splitTextToFit(text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = this.pdf.getTextWidth(testLine);

      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) {
          lines.push(this.isRTL() ? this.reverseText(currentLine) : currentLine);
          currentLine = word;
        } else {
          // Word is too long, break it
          lines.push(this.isRTL() ? this.reverseText(word) : word);
        }
      }
    }

    if (currentLine) {
      lines.push(this.isRTL() ? this.reverseText(currentLine) : currentLine);
    }

    return lines;
  }

  private reverseText(text: string): string {
    // Simple text reversal for RTL - in production, you'd want proper bidi algorithm
    return text.split('').reverse().join('');
  }

  // Get appropriate font size for the language
  getRecommendedFontSize(baseSize: number): number {
    const fontConfigKey = LANGUAGE_FONT_MAP[this.currentLanguage];

    // Some languages may need larger font sizes for readability
    switch (fontConfigKey) {
      case 'devanagari': // Hindi
      case 'arabic':
        return baseSize + 1; // Slightly larger for complex scripts
      case 'cjk': // Japanese, Korean, Chinese
        return baseSize; // Standard size works well
      default:
        return baseSize;
    }
  }
}
