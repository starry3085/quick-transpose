/**
 * 跨平台存储管理器
 * 提供统一的存储接口，支持 Web localStorage 和微信小程序存储
 */

import type { TransposeSettings } from '../types/chord';

// 存储键名常量
const STORAGE_KEYS = {
  TRANSPOSE_SETTINGS: 'transpose_settings',
  RECENT_PROGRESSIONS: 'recent_progressions',
  USER_PREFERENCES: 'user_preferences'
} as const;

/**
 * 存储管理器接口
 */
export interface StorageManager {
  // 基础存储操作
  setItem(key: string, value: string): void;
  getItem(key: string): string | null;
  removeItem(key: string): void;
  clear(): void;
  
  // 业务相关存储操作
  saveTransposeSettings(settings: TransposeSettings): void;
  getTransposeSettings(): TransposeSettings | null;
  addRecentProgression(progression: string): void;
  getRecentProgressions(): string[];
  clearRecentProgressions(): void;
}

/**
 * Web 平台存储实现
 */
class WebStorageManager implements StorageManager {
  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  }

  getItem(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  }

  saveTransposeSettings(settings: TransposeSettings): void {
    this.setItem(STORAGE_KEYS.TRANSPOSE_SETTINGS, JSON.stringify(settings));
  }

  getTransposeSettings(): TransposeSettings | null {
    const data = this.getItem(STORAGE_KEYS.TRANSPOSE_SETTINGS);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.warn('Failed to parse transpose settings:', error);
      }
    }
    return null;
  }

  addRecentProgression(progression: string): void {
    const recent = this.getRecentProgressions();
    const filtered = recent.filter(p => p !== progression);
    const updated = [progression, ...filtered].slice(0, 10); // 保留最近10个
    this.setItem(STORAGE_KEYS.RECENT_PROGRESSIONS, JSON.stringify(updated));
  }

  getRecentProgressions(): string[] {
    const data = this.getItem(STORAGE_KEYS.RECENT_PROGRESSIONS);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.warn('Failed to parse recent progressions:', error);
      }
    }
    return [];
  }

  clearRecentProgressions(): void {
    this.removeItem(STORAGE_KEYS.RECENT_PROGRESSIONS);
  }
}

/**
 * 微信小程序存储实现
 */
class WxStorageManager implements StorageManager {
  setItem(key: string, value: string): void {
    try {
      (wx as any).setStorageSync(key, value);
    } catch (error) {
      console.warn('Failed to save to wx storage:', error);
    }
  }

  getItem(key: string): string | null {
    try {
      return (wx as any).getStorageSync(key) || null;
    } catch (error) {
      console.warn('Failed to read from wx storage:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      (wx as any).removeStorageSync(key);
    } catch (error) {
      console.warn('Failed to remove from wx storage:', error);
    }
  }

  clear(): void {
    try {
      (wx as any).clearStorageSync();
    } catch (error) {
      console.warn('Failed to clear wx storage:', error);
    }
  }

  saveTransposeSettings(settings: TransposeSettings): void {
    this.setItem(STORAGE_KEYS.TRANSPOSE_SETTINGS, JSON.stringify(settings));
  }

  getTransposeSettings(): TransposeSettings | null {
    const data = this.getItem(STORAGE_KEYS.TRANSPOSE_SETTINGS);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.warn('Failed to parse transpose settings:', error);
      }
    }
    return null;
  }

  addRecentProgression(progression: string): void {
    const recent = this.getRecentProgressions();
    const filtered = recent.filter(p => p !== progression);
    const updated = [progression, ...filtered].slice(0, 10);
    this.setItem(STORAGE_KEYS.RECENT_PROGRESSIONS, JSON.stringify(updated));
  }

  getRecentProgressions(): string[] {
    const data = this.getItem(STORAGE_KEYS.RECENT_PROGRESSIONS);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.warn('Failed to parse recent progressions:', error);
      }
    }
    return [];
  }

  clearRecentProgressions(): void {
    this.removeItem(STORAGE_KEYS.RECENT_PROGRESSIONS);
  }
}

/**
 * 创建存储管理器实例
 * 根据运行环境自动选择合适的实现
 */
export function createStorageManager(): StorageManager {
  // 检测是否在微信小程序环境
  if (typeof wx !== 'undefined' && (wx as any).getStorageSync) {
    return new WxStorageManager();
  }
  
  // 默认使用 Web 存储
  return new WebStorageManager();
}

// 导出默认实例
export const storageManager = createStorageManager();