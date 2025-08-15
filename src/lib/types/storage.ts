// Storage-related type definitions

export interface StorageOptions {
  prefix?: string;
  version?: number;
  ttl?: number; // Time to live in milliseconds
}

export interface StorageItem<T> {
  value: T;
  timestamp: number;
  version?: number;
  ttl?: number;
}

export interface StorageAdapter {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  has(key: string): Promise<boolean>;
  keys(): Promise<string[]>;
}

export interface CacheEntry<T> {
  data: T;
  expiry: number;
  key: string;
}

export interface PersistenceManager {
  save<T>(key: string, data: T): Promise<void>;
  load<T>(key: string): Promise<T | null>;
  delete(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
}

// Storage events
export interface StorageEvent<T = unknown> {
  key: string;
  oldValue?: T;
  newValue?: T;
  timestamp: number;
}

// Storage state
export interface StorageState {
  isAvailable: boolean;
  hasIndexedDB: boolean;
  hasLocalStorage: boolean;
  hasSessionStorage: boolean;
  quota?: StorageEstimate;
}

// Type guards
export function isStorageItem<T>(value: unknown): value is StorageItem<T> {
  return typeof value === 'object' && value !== null && 'value' in value && 'timestamp' in value;
}

export function isValidStorageKey(key: unknown): key is string {
  return typeof key === 'string' && key.length > 0;
}
