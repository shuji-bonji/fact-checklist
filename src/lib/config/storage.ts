import { IndexedDBStorage, type StorageConfig } from '../utils/indexedDBStorage.js';

/**
 * Storage configuration for fact-checklist app
 */
export const STORAGE_CONFIG: StorageConfig = {
  dbName: 'fact-checklist-db',
  version: 1,
  storeName: 'app-data',
  namespace: 'fact-checklist'
};

/**
 * Storage keys used by the application
 */
export const STORAGE_KEYS = {
  CHECKLIST_PREFIX: 'checklist_',
  HISTORY: 'checklist_history'
} as const;

/**
 * Create IndexedDB storage instance
 */
export function createStorage(): IndexedDBStorage {
  return new IndexedDBStorage(STORAGE_CONFIG);
}

/**
 * Fallback localStorage interface for compatibility
 */
export interface StorageInterface {
  getItem<T>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<void>;
  removeItem(key: string): Promise<void>;
  getKeys(): Promise<string[]>;
  clear(): Promise<void>;
}

/**
 * Create storage instance with fallback to localStorage
 */
export async function createStorageWithFallback(): Promise<StorageInterface> {
  // console.log('createStorageWithFallback: start');

  // Try IndexedDB first
  if (IndexedDBStorage.isSupported()) {
    // console.log('createStorageWithFallback: IndexedDB is supported, trying to initialize...');
    try {
      const storage = createStorage();
      // console.log('createStorageWithFallback: storage instance created, initializing...');
      await storage.init();
      // console.log('createStorageWithFallback: IndexedDB initialized successfully');
      return storage;
    } catch (error) {
      console.warn('Failed to initialize IndexedDB, falling back to localStorage:', error);
    }
  } else {
    console.warn('createStorageWithFallback: IndexedDB not supported, using localStorage fallback');
  }

  // Fallback to localStorage wrapper
  // console.log('createStorageWithFallback: creating localStorage wrapper');
  return {
    async getItem<T>(key: string): Promise<T | null> {
      const value = localStorage.getItem(key);
      if (value === null) return null;
      try {
        return JSON.parse(value);
      } catch {
        return value as T;
      }
    },

    async setItem<T>(key: string, value: T): Promise<void> {
      localStorage.setItem(key, JSON.stringify(value));
    },

    async removeItem(key: string): Promise<void> {
      localStorage.removeItem(key);
    },

    async getKeys(): Promise<string[]> {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) keys.push(key);
      }
      return keys;
    },

    async clear(): Promise<void> {
      localStorage.clear();
    }
  };
}
