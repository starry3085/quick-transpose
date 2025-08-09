/**
 * 跨平台数据持久化和同步
 * 支持Web端localStorage和小程序端wx.storage
 */

// WeChat miniprogram global types
declare global {
  const wx: {
    getStorageSync: (key: string) => any;
    setStorageSync: (key: string, data: any) => void;
    removeStorageSync: (key: string) => void;
    getStorage: (options: {
      key: string;
      success: (res: { data: any }) => void;
      fail: (error: any) => void;
    }) => void;
    setStorage: (options: {
      key: string;
      data: any;
      success: () => void;
      fail: (error: any) => void;
    }) => void;
    removeStorage: (options: {
      key: string;
      success: () => void;
      fail: (error: any) => void;
    }) => void;
    clearStorage: (options: {
      success: () => void;
      fail: (error: any) => void;
    }) => void;
    getStorageInfo: (options: {
      success: (res: { keys: string[] }) => void;
      fail: () => void;
    }) => void;
  };
}

export interface StorageAdapter {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
  getAllKeys(): Promise<string[]>;
}

export interface SyncOptions {
  enableSync: boolean;
  syncInterval: number; // 同步间隔（毫秒）
  maxRetries: number;
  conflictResolution: 'local' | 'remote' | 'merge' | 'timestamp';
}

export interface StorageItem<T = any> {
  data: T;
  timestamp: number;
  version: number;
  platform: 'web' | 'miniprogram';
  checksum?: string;
}

// Web端存储适配器
export class WebStorageAdapter implements StorageAdapter {
  async getItem(key: string): Promise<string | null> {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Web存储读取失败:', error);
      return null;
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Web存储写入失败:', error);
      throw error;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Web存储删除失败:', error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Web存储清空失败:', error);
      throw error;
    }
  }

  async getAllKeys(): Promise<string[]> {
    try {
      return Object.keys(localStorage);
    } catch (error) {
      console.error('Web存储获取键列表失败:', error);
      return [];
    }
  }
}

// 小程序端存储适配器
export class MiniprogramStorageAdapter implements StorageAdapter {
  async getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      try {
        if (typeof wx !== 'undefined') {
          wx.getStorage({
            key,
            success: (res: { data: any }) => resolve(res.data),
            fail: () => resolve(null)
          });
        } else {
          resolve(null);
        }
      } catch (error) {
        console.error('小程序存储读取失败:', error);
        resolve(null);
      }
    });
  }

  async setItem(key: string, value: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        if (typeof wx !== 'undefined') {
          wx.setStorage({
            key,
            data: value,
            success: () => resolve(),
            fail: (error: any) => reject(error)
          });
        } else {
          reject(new Error('微信环境不可用'));
        }
      } catch (error) {
        console.error('小程序存储写入失败:', error);
        reject(error);
      }
    });
  }

  async removeItem(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        if (typeof wx !== 'undefined') {
          wx.removeStorage({
            key,
            success: () => resolve(),
            fail: (error: any) => reject(error)
          });
        } else {
          reject(new Error('微信环境不可用'));
        }
      } catch (error) {
        console.error('小程序存储删除失败:', error);
        reject(error);
      }
    });
  }

  async clear(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        if (typeof wx !== 'undefined') {
          wx.clearStorage({
            success: () => resolve(),
            fail: (error: any) => reject(error)
          });
        } else {
          reject(new Error('微信环境不可用'));
        }
      } catch (error) {
        console.error('小程序存储清空失败:', error);
        reject(error);
      }
    });
  }

  async getAllKeys(): Promise<string[]> {
    return new Promise((resolve) => {
      try {
        if (typeof wx !== 'undefined') {
          wx.getStorageInfo({
            success: (res: { keys: string[] }) => resolve(res.keys),
            fail: () => resolve([])
          });
        } else {
          resolve([]);
        }
      } catch (error) {
        console.error('小程序存储获取键列表失败:', error);
        resolve([]);
      }
    });
  }
}

// 跨平台存储管理器
export class CrossPlatformStorage {
  private adapter: StorageAdapter;
  private platform: 'web' | 'miniprogram';
  private syncOptions: SyncOptions;
  private syncTimer?: NodeJS.Timeout;

  constructor(platform: 'web' | 'miniprogram', syncOptions?: Partial<SyncOptions>) {
    this.platform = platform;
    this.adapter = platform === 'web' 
      ? new WebStorageAdapter() 
      : new MiniprogramStorageAdapter();
    
    this.syncOptions = {
      enableSync: false,
      syncInterval: 30000, // 30秒
      maxRetries: 3,
      conflictResolution: 'timestamp',
      ...syncOptions
    };

    if (this.syncOptions.enableSync) {
      this.startSync();
    }
  }

  /**
   * 存储数据
   */
  async setItem<T>(key: string, data: T): Promise<void> {
    const storageItem: StorageItem<T> = {
      data,
      timestamp: Date.now(),
      version: 1,
      platform: this.platform,
      checksum: this.generateChecksum(data)
    };

    const serializedData = JSON.stringify(storageItem);
    await this.adapter.setItem(key, serializedData);
    
    console.log(`[存储] 已保存数据: ${key} (${this.platform})`);
  }

  /**
   * 读取数据
   */
  async getItem<T>(key: string): Promise<T | null> {
    try {
      const serializedData = await this.adapter.getItem(key);
      if (!serializedData) {
        return null;
      }

      const storageItem: StorageItem<T> = JSON.parse(serializedData);
      
      // 验证数据完整性
      if (this.validateChecksum(storageItem.data, storageItem.checksum)) {
        console.log(`[存储] 已读取数据: ${key} (${this.platform})`);
        return storageItem.data;
      } else {
        console.warn(`[存储] 数据校验失败: ${key}`);
        return null;
      }
    } catch (error) {
      console.error(`[存储] 读取数据失败: ${key}`, error);
      return null;
    }
  }

  /**
   * 删除数据
   */
  async removeItem(key: string): Promise<void> {
    await this.adapter.removeItem(key);
    console.log(`[存储] 已删除数据: ${key} (${this.platform})`);
  }

  /**
   * 清空所有数据
   */
  async clear(): Promise<void> {
    await this.adapter.clear();
    console.log(`[存储] 已清空所有数据 (${this.platform})`);
  }

  /**
   * 获取所有键
   */
  async getAllKeys(): Promise<string[]> {
    return await this.adapter.getAllKeys();
  }

  /**
   * 批量操作
   */
  async batchSet<T>(items: Record<string, T>): Promise<void> {
    const promises = Object.entries(items).map(([key, value]) => 
      this.setItem(key, value)
    );
    await Promise.all(promises);
    console.log(`[存储] 批量保存完成: ${Object.keys(items).length} 项`);
  }

  async batchGet<T>(keys: string[]): Promise<Record<string, T | null>> {
    const promises = keys.map(async (key) => ({
      key,
      value: await this.getItem<T>(key)
    }));
    
    const results = await Promise.all(promises);
    const batchResult: Record<string, T | null> = {};
    
    results.forEach(({ key, value }) => {
      batchResult[key] = value;
    });
    
    console.log(`[存储] 批量读取完成: ${keys.length} 项`);
    return batchResult;
  }

  /**
   * 数据同步功能
   */
  private startSync(): void {
    if (this.syncTimer) {
      clearInterval(this.syncTimer);
    }

    this.syncTimer = setInterval(() => {
      this.performSync().catch(error => {
        console.error('[同步] 数据同步失败:', error);
      });
    }, this.syncOptions.syncInterval);

    console.log(`[同步] 数据同步已启动，间隔: ${this.syncOptions.syncInterval}ms`);
  }

  private async performSync(): Promise<void> {
    // 这里可以实现与服务器的数据同步逻辑
    console.log('[同步] 执行数据同步...');
    
    try {
      const keys = await this.getAllKeys();
      const localData = await this.batchGet(keys);
      
      console.log(`[同步] 本地数据项数: ${keys.length}`);
      
    } catch (error) {
      console.error('[同步] 同步过程出错:', error);
    }
  }

  /**
   * 停止同步
   */
  stopSync(): void {
    if (this.syncTimer) {
      clearInterval(this.syncTimer);
      this.syncTimer = undefined;
      console.log('[同步] 数据同步已停止');
    }
  }

  /**
   * 生成数据校验和
   */
  private generateChecksum<T>(data: T): string {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 转换为32位整数
    }
    return hash.toString(16);
  }

  /**
   * 验证数据校验和
   */
  private validateChecksum<T>(data: T, checksum?: string): boolean {
    if (!checksum) return true; // 如果没有校验和，认为有效
    return this.generateChecksum(data) === checksum;
  }

  /**
   * 获取存储统计信息
   */
  async getStorageStats(): Promise<{
    totalKeys: number;
    totalSize: number;
    platform: string;
    lastSync?: number;
  }> {
    const keys = await this.getAllKeys();
    let totalSize = 0;
    
    for (const key of keys) {
      const data = await this.adapter.getItem(key);
      if (data) {
        totalSize += data.length;
      }
    }

    return {
      totalKeys: keys.length,
      totalSize,
      platform: this.platform,
      lastSync: this.syncTimer ? Date.now() : undefined
    };
  }
}

// 工厂函数
export function createCrossPlatformStorage(
  platform: 'web' | 'miniprogram',
  syncOptions?: Partial<SyncOptions>
): CrossPlatformStorage {
  return new CrossPlatformStorage(platform, syncOptions);
}

// 预定义的存储键常量
export const STORAGE_KEYS = {
  TRANSPOSE_HISTORY: 'transpose_history',
  DICTIONARY_FAVORITES: 'dictionary_favorites',
  USER_PREFERENCES: 'user_preferences',
  APP_STATE: 'app_state',
  CHORD_PROGRESSIONS: 'chord_progressions',
  RECENT_SEARCHES: 'recent_searches'
} as const;