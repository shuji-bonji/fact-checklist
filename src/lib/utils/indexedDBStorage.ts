/**
 * IndexedDB storage utility with namespace separation
 * Replaces localStorage to avoid cross-site data mixing
 */

export interface StorageConfig {
  dbName: string;
  version: number;
  storeName: string;
  namespace: string;
}

export class IndexedDBStorage {
  private db: IDBDatabase | null = null;
  private config: StorageConfig;

  constructor(config: StorageConfig) {
    this.config = config;
  }

  /**
   * Initialize IndexedDB connection
   */
  async init(): Promise<void> {
    // console.log('IndexedDBStorage.init: start');

    if (typeof window === 'undefined' || typeof window.indexedDB === 'undefined') {
      const error = 'IndexedDB is not available';
      console.error('IndexedDBStorage.init:', error);
      throw new Error(error);
    }

    // console.log(
    //   'IndexedDBStorage.init: opening database',
    //   this.config.dbName,
    //   'version',
    //   this.config.version
    // );

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.config.dbName, this.config.version);

      request.onerror = () => {
        const error = `Failed to open IndexedDB: ${request.error?.message}`;
        console.error('IndexedDBStorage.init:', error);
        reject(new Error(error));
      };

      request.onsuccess = () => {
        // console.log('IndexedDBStorage.init: database opened successfully');
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = event => {
        // console.log('IndexedDBStorage.init: database upgrade needed');
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(this.config.storeName)) {
          // console.log('IndexedDBStorage.init: creating object store', this.config.storeName);
          const store = db.createObjectStore(this.config.storeName, { keyPath: 'key' });
          // Create index for namespace filtering
          store.createIndex('namespace', 'namespace', { unique: false });
          // console.log('IndexedDBStorage.init: object store created with namespace index');
        } else {
          // console.log('IndexedDBStorage.init: object store already exists');
        }
      };
    });
  }

  /**
   * Create namespaced key
   */
  private createKey(key: string): string {
    return `${this.config.namespace}:${key}`;
  }

  /**
   * Get value by key
   */
  async getItem<T>(key: string): Promise<T | null> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.config.storeName], 'readonly');
      const store = transaction.objectStore(this.config.storeName);
      const request = store.get(this.createKey(key));

      request.onerror = () => {
        reject(new Error(`Failed to get item: ${request.error?.message}`));
      };

      request.onsuccess = () => {
        const result = request.result as { value: T } | undefined;
        resolve(result ? result.value : null);
      };
    });
  }

  /**
   * Set value by key
   */
  async setItem<T>(key: string, value: T): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.config.storeName], 'readwrite');
      const store = transaction.objectStore(this.config.storeName);
      const data = {
        key: this.createKey(key),
        namespace: this.config.namespace,
        value,
        timestamp: Date.now()
      };

      const request = store.put(data);

      request.onerror = () => {
        reject(new Error(`Failed to set item: ${request.error?.message}`));
      };

      request.onsuccess = () => {
        resolve();
      };
    });
  }

  /**
   * Remove item by key
   */
  async removeItem(key: string): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.config.storeName], 'readwrite');
      const store = transaction.objectStore(this.config.storeName);
      const request = store.delete(this.createKey(key));

      request.onerror = () => {
        reject(new Error(`Failed to remove item: ${request.error?.message}`));
      };

      request.onsuccess = () => {
        resolve();
      };
    });
  }

  /**
   * Get all keys in current namespace
   */
  async getKeys(): Promise<string[]> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.config.storeName], 'readonly');
      const store = transaction.objectStore(this.config.storeName);
      const index = store.index('namespace');
      const request = index.getAllKeys(this.config.namespace);

      request.onerror = () => {
        reject(new Error(`Failed to get keys: ${request.error?.message}`));
      };

      request.onsuccess = () => {
        const namespacedKeys = request.result as string[];
        // Remove namespace prefix from keys
        const keys = namespacedKeys.map(key => key.replace(`${this.config.namespace}:`, ''));
        resolve(keys);
      };
    });
  }

  /**
   * Clear all items in current namespace
   */
  async clear(): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    const keys = await this.getKeys();
    const promises = keys.map(key => this.removeItem(key));
    await Promise.all(promises);
  }

  /**
   * Check if IndexedDB is available
   */
  static isSupported(): boolean {
    return typeof window !== 'undefined' && 'indexedDB' in window;
  }

  /**
   * Close database connection
   */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}

/**
 * Storage migration utility
 */
export class StorageMigration {
  /**
   * Migrate data from localStorage to IndexedDB
   */
  static async migrateFromLocalStorage(
    storage: IndexedDBStorage,
    keyPatterns: string[]
  ): Promise<{ migrated: number; errors: string[] }> {
    if (
      typeof window === 'undefined' ||
      window.localStorage === undefined ||
      window.localStorage === null
    ) {
      return { migrated: 0, errors: ['localStorage not available'] };
    }

    const migrated: string[] = [];
    const errors: string[] = [];

    for (const pattern of keyPatterns) {
      try {
        // Find matching keys in localStorage
        const matchingKeys = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key !== null && (key.startsWith(pattern) || key === pattern)) {
            matchingKeys.push(key);
          }
        }

        // Migrate each matching key
        for (const key of matchingKeys) {
          try {
            const value = localStorage.getItem(key);
            if (value !== null) {
              let parsedValue: unknown;
              try {
                parsedValue = JSON.parse(value);
              } catch {
                parsedValue = value; // Store as string if not JSON
              }

              await storage.setItem(key, parsedValue);
              migrated.push(key);
            }
          } catch (error) {
            errors.push(`Failed to migrate ${key}: ${error}`);
          }
        }
      } catch (error) {
        errors.push(`Failed to process pattern ${pattern}: ${error}`);
      }
    }

    return { migrated: migrated.length, errors };
  }

  /**
   * Clear migrated data from localStorage
   */
  static clearLocalStorageKeys(keyPatterns: string[]): { cleared: number; errors: string[] } {
    if (
      typeof window === 'undefined' ||
      window.localStorage === undefined ||
      window.localStorage === null
    ) {
      return { cleared: 0, errors: ['localStorage not available'] };
    }

    const cleared: string[] = [];
    const errors: string[] = [];

    for (const pattern of keyPatterns) {
      try {
        // Find matching keys
        const matchingKeys = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key !== null && (key.startsWith(pattern) || key === pattern)) {
            matchingKeys.push(key);
          }
        }

        // Remove each matching key
        for (const key of matchingKeys) {
          try {
            localStorage.removeItem(key);
            cleared.push(key);
          } catch (error) {
            errors.push(`Failed to clear ${key}: ${error}`);
          }
        }
      } catch (error) {
        errors.push(`Failed to process pattern ${pattern}: ${error}`);
      }
    }

    return { cleared: cleared.length, errors };
  }
}
