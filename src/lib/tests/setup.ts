import { vi } from 'vitest';

// グローバルモック設定
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

// LocalStorage モック
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn()
};
vi.stubGlobal('localStorage', localStorageMock);

// IndexedDB モック
const indexedDBMock = {
  open: vi.fn(),
  deleteDatabase: vi.fn()
};
vi.stubGlobal('indexedDB', indexedDBMock);

// PDF生成関連のモック
vi.mock('jspdf', () => ({
  default: vi.fn().mockImplementation(() => ({
    addFont: vi.fn(),
    setFont: vi.fn(),
    text: vi.fn(),
    save: vi.fn(),
    addPage: vi.fn(),
    setFontSize: vi.fn()
  }))
}));

vi.mock('html2canvas', () => ({
  default: vi.fn().mockResolvedValue({
    toDataURL: vi.fn().mockReturnValue('data:image/png;base64,test')
  })
}));
