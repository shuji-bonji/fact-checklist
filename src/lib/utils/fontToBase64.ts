// src/lib/utils/fontToBase64.ts
/**
 * フォントファイルをBase64に変換してjsPDFで使用可能にする
 */

export async function loadFontAsBase64(fontUrl: string): Promise<string | null> {
  try {
    console.log(`🔤 Loading font file: ${fontUrl}`);

    const response = await fetch(fontUrl);
    if (!response.ok) {
      throw new Error(`Font file not found: ${fontUrl}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // ArrayBufferをBase64に変換
    let binary = '';
    for (let i = 0; i < uint8Array.byteLength; i++) {
      const byte = uint8Array[i];
      if (byte !== undefined) {
        binary += String.fromCharCode(byte);
      }
    }

    const base64 = btoa(binary);
    console.log(`✅ Font converted to Base64, size: ${Math.round(base64.length / 1024)}KB`);

    return base64;
  } catch (error) {
    console.warn(`⚠️ Failed to load font: ${fontUrl}`, error);
    return null;
  }
}

export async function registerJapaneseFonts(pdf: import('jspdf').jsPDF): Promise<boolean> {
  try {
    // Noto Sans JP Regular
    const regularBase64 = await loadFontAsBase64('/fonts/NotoSansJP-Regular.ttf');
    if (regularBase64) {
      pdf.addFileToVFS('NotoSansJP-Regular.ttf', regularBase64);
      pdf.addFont('NotoSansJP-Regular.ttf', 'NotoSansJP', 'normal');
      console.log('✅ Registered NotoSansJP-Regular font');
    }

    // Noto Sans JP Bold
    const boldBase64 = await loadFontAsBase64('/fonts/NotoSansJP-Bold.ttf');
    if (boldBase64) {
      pdf.addFileToVFS('NotoSansJP-Bold.ttf', boldBase64);
      pdf.addFont('NotoSansJP-Bold.ttf', 'NotoSansJP', 'bold');
      console.log('✅ Registered NotoSansJP-Bold font');
    }

    return !!(regularBase64 && boldBase64);
  } catch (error) {
    console.error('❌ Failed to register Japanese fonts:', error);
    return false;
  }
}
