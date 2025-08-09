/**
 * 跨平台存储抽象层
 */

import type { StorageAdapter, TransposeSettings } from '../types/chord';

/**
 * Web平台存储适配器
 */
export class WebStorageAdapter implements StorageAdapter {
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
      if (item === null) {
        return defaultValue || null;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error('Storage get error:', error);
      return defaultValue || null;
    }
  }

  set<T>(key: string, value: T): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Storage set error:', error);
    }
  }

  remove(key: string): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('Storage remove error:', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Storage clear error:', error);
    }
  }
}

/**
 * 小程序存储适配器
 */
export class MiniprogramStorageAdapter implements StorageAdapter {
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      // @ts-ignore - wx is available in miniprogram environment
      const value = (globalThis as any).wx?.getStorageSync(key);
      return value || defaultValue || null;
    } catch (error) {
      console.error('Miniprogram storage get error:', error);
      return defaultValue || null;
    }
  }

  set<T>(key: string, value: T): void {
    try {
      // @ts-ignore - wx is available in miniprogram environment
      (globalThis as any).wx?.setStorageSync(key, value);
    } catch (error) {
      console.error('Miniprogram storage set error:', error);
    }
  }

  remove(key: string): void {
    try {
      // @ts-ignore - wx is available in miniprogram environment
      (globalThis as any).wx?.removeStorageSync(key);
    } catch (error) {
      console.error('Miniprogram storage remove error:', error);
    }
  }

  clear(): void {
    try {
      // @ts-ignore - wx is available in miniprogram environment
      (globalThis as any).wx?.clearStorageSync();
    } catch (error) {
      console.error('Miniprogram storage clear error:', error);
    }
  }
}

/**
 * 存储管理器
 */
export class StorageManager {
  private adapter: StorageAdapter;

  constructor(adapter: StorageAdapter) {
    this.adapter = adapter;
  }

  /**
   * 保存移调设置
   */
  saveTransposeSettings(settings: TransposeSettings): void {
    this.adapter.set('transpose_settings', settings);
  }

  /**
   * 获取移调设置
   */
  getTransposeSettings(): TransposeSettings | null {
    return this.adapter.get('transpose_settings', {
      sourceKey: 'C',
      targetKey: 'G',
      isMinor: false,
      useSeventhChords: false
    });
  }

  /**
   * 保存最近使用的进行
   */
  saveRecentProgressions(progressions: string[]): void {
    // 限制最多保存10个
    const limited = progressions.slice(0, 10);
    this.adapter.set('recent_progressions', limited);
  }

  /**
   * 获取最近使用的进行
   */
  getRecentProgressions(): string[] {
    return this.adapter.get('recent_progressions', []) || [];
  }

  /**
   * 添加到最近使用
   */
  addRecentProgression(progression: string): void {
    const recent = this.getRecentProgressions();
    const filtered = recent.filter(p => p !== progression);
    filtered.unshift(progression);
    this.saveRecentProgressions(filtered);
  }

  /**
   * 保存收藏的进行
   */
  saveFavoriteProgressions(progressions: string[]): void {
    this.adapter.set('favorite_progressions', progressions);
  }

  /**
   * 获取收藏的进行
   */
  getFavoriteProgressions(): string[] {
    return this.adapter.get('favorite_progressions', []) || [];
  }

  /**
   * 切换收藏状态
   */
  toggleFavoriteProgression(progression: string): boolean {
    const favorites = this.getFavoriteProgressions();
    const index = favorites.indexOf(progression);
    
    if (index >= 0) {
      favorites.splice(index, 1);
      this.saveFavoriteProgressions(favorites);
      return false; // 已取消收藏
    } else {
      favorites.push(progression);
      this.saveFavoriteProgressions(favorites);
      return true; // 已添加收藏
    }
  }
}

/**
 * 创建平台适配的存储管理器
 */
export function createStorageManager(): StorageManager {
  // 检测运行环境
  const wx = (globalThis as any).wx;
  if (typeof wx !== 'undefined' && wx.getStorageSync) {
    // 小程序环境
    return new StorageManager(new MiniprogramStorageAdapter());
  } else if (typeof localStorage !== 'undefined') {
    // Web环境
    return new StorageManager(new WebStorageAdapter());
  } else {
    // 降级处理，使用内存存储
    console.warn('No storage available, using memory storage');
    return new StorageManager(new MemoryStorageAdapter());
  }
}

/**
 * 内存存储适配器（降级方案）
 */
class MemoryStorageAdapter implements StorageAdapter {
  private storage: Map<string, any> = new Map();

  get<T>(key: string, defaultValue?: T): T | null {
    return this.storage.get(key) || defaultValue || null;
  }

  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }

  remove(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }
}