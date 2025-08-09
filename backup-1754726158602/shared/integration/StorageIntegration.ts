/**
 * 存储集成示例
 * 展示如何在Web和小程序中使用跨平台存储和同步功能
 */

import { createCrossPlatformStorage, STORAGE_KEYS } from '../storage/CrossPlatformStorage';
import { createDataSyncService } from '../sync/DataSyncService';
import { AppState } from '../state/AppStateManager';

// 应用数据接口
export interface TransposeHistoryItem {
  original: string;
  transposed: string;
  key: number;
  timestamp: number;
}

export interface UserPreferences {
  defaultKey: number;
  showHistory: boolean;
  maxHistoryItems: number;
  autoSave: boolean;
  theme: 'light' | 'dark';
}

export interface ChordProgression {
  id: string;
  name: string;
  chords: string[];
  key: string;
  isFavorite: boolean;
  createdAt: number;
}

/**
 * 应用存储管理器
 * 封装所有存储操作的高级接口
 */
export class AppStorageManager {
  private storage: ReturnType<typeof createCrossPlatformStorage>;
  private syncService: ReturnType<typeof createDataSyncService>;
  private platform: 'web' | 'miniprogram';

  constructor(platform: 'web' | 'miniprogram') {
    this.platform = platform;
    
    // 创建存储实例
    this.storage = createCrossPlatformStorage(platform, {
      enableSync: true,
      syncInterval: 60000, // 1分钟同步一次
      maxRetries: 3,
      conflictResolution: 'timestamp'
    });

    // 创建同步服务
    this.syncService = createDataSyncService(this.storage, {
      syncEndpoint: 'https://api.quick-transpose.com/sync',
      userId: this.getUserId()
    });

    console.log(`[存储管理器] 已初始化 ${platform} 平台存储`);
  }

  /**
   * 转调历史记录管理
   */
  async getTransposeHistory(): Promise<TransposeHistoryItem[]> {
    const history = await this.storage.getItem<TransposeHistoryItem[]>(STORAGE_KEYS.TRANSPOSE_HISTORY);
    return history || [];
  }

  async addTransposeHistory(item: Omit<TransposeHistoryItem, 'timestamp'>): Promise<void> {
    const history = await this.getTransposeHistory();
    const newItem: TransposeHistoryItem = {
      ...item,
      timestamp: Date.now()
    };

    // 添加到历史记录开头
    const updatedHistory = [newItem, ...history];
    
    // 限制历史记录数量
    const preferences = await this.getUserPreferences();
    const maxItems = preferences.maxHistoryItems;
    
    if (updatedHistory.length > maxItems) {
      updatedHistory.splice(maxItems);
    }

    await this.storage.setItem(STORAGE_KEYS.TRANSPOSE_HISTORY, updatedHistory);
    console.log('[存储管理器] 已添加转调历史记录');
  }

  async clearTransposeHistory(): Promise<void> {
    await this.storage.setItem(STORAGE_KEYS.TRANSPOSE_HISTORY, []);
    console.log('[存储管理器] 已清空转调历史记录');
  }

  /**
   * 字典收藏管理
   */
  async getDictionaryFavorites(): Promise<string[]> {
    const favorites = await this.storage.getItem<string[]>(STORAGE_KEYS.DICTIONARY_FAVORITES);
    return favorites || [];
  }

  async addToFavorites(chord: string): Promise<void> {
    const favorites = await this.getDictionaryFavorites();
    if (!favorites.includes(chord)) {
      favorites.push(chord);
      await this.storage.setItem(STORAGE_KEYS.DICTIONARY_FAVORITES, favorites);
      console.log(`[存储管理器] 已添加收藏: ${chord}`);
    }
  }

  async removeFromFavorites(chord: string): Promise<void> {
    const favorites = await this.getDictionaryFavorites();
    const updatedFavorites = favorites.filter(c => c !== chord);
    await this.storage.setItem(STORAGE_KEYS.DICTIONARY_FAVORITES, updatedFavorites);
    console.log(`[存储管理器] 已移除收藏: ${chord}`);
  }

  async toggleFavorite(chord: string): Promise<boolean> {
    const favorites = await this.getDictionaryFavorites();
    const isFavorite = favorites.includes(chord);
    
    if (isFavorite) {
      await this.removeFromFavorites(chord);
      return false;
    } else {
      await this.addToFavorites(chord);
      return true;
    }
  }

  /**
   * 用户偏好设置管理
   */
  async getUserPreferences(): Promise<UserPreferences> {
    const preferences = await this.storage.getItem<UserPreferences>(STORAGE_KEYS.USER_PREFERENCES);
    
    // 返回默认设置
    return {
      defaultKey: 0,
      showHistory: true,
      maxHistoryItems: 50,
      autoSave: true,
      theme: 'light',
      ...preferences
    };
  }

  async updateUserPreferences(updates: Partial<UserPreferences>): Promise<void> {
    const currentPreferences = await this.getUserPreferences();
    const updatedPreferences = { ...currentPreferences, ...updates };
    
    await this.storage.setItem(STORAGE_KEYS.USER_PREFERENCES, updatedPreferences);
    console.log('[存储管理器] 已更新用户偏好设置');
  }

  /**
   * 和弦进行管理
   */
  async getChordProgressions(): Promise<ChordProgression[]> {
    const progressions = await this.storage.getItem<ChordProgression[]>(STORAGE_KEYS.CHORD_PROGRESSIONS);
    return progressions || [];
  }

  async saveChordProgression(progression: Omit<ChordProgression, 'id' | 'createdAt'>): Promise<string> {
    const progressions = await this.getChordProgressions();
    const newProgression: ChordProgression = {
      ...progression,
      id: this.generateId(),
      createdAt: Date.now()
    };

    progressions.push(newProgression);
    await this.storage.setItem(STORAGE_KEYS.CHORD_PROGRESSIONS, progressions);
    
    console.log(`[存储管理器] 已保存和弦进行: ${newProgression.name}`);
    return newProgression.id;
  }

  async deleteChordProgression(id: string): Promise<void> {
    const progressions = await this.getChordProgressions();
    const updatedProgressions = progressions.filter(p => p.id !== id);
    
    await this.storage.setItem(STORAGE_KEYS.CHORD_PROGRESSIONS, updatedProgressions);
    console.log(`[存储管理器] 已删除和弦进行: ${id}`);
  }

  /**
   * 最近搜索管理
   */
  async getRecentSearches(): Promise<string[]> {
    const searches = await this.storage.getItem<string[]>(STORAGE_KEYS.RECENT_SEARCHES);
    return searches || [];
  }

  async addRecentSearch(query: string): Promise<void> {
    const searches = await this.getRecentSearches();
    
    // 移除重复项
    const filteredSearches = searches.filter(s => s !== query);
    
    // 添加到开头
    const updatedSearches = [query, ...filteredSearches];
    
    // 限制数量
    if (updatedSearches.length > 10) {
      updatedSearches.splice(10);
    }

    await this.storage.setItem(STORAGE_KEYS.RECENT_SEARCHES, updatedSearches);
  }

  async clearRecentSearches(): Promise<void> {
    await this.storage.setItem(STORAGE_KEYS.RECENT_SEARCHES, []);
    console.log('[存储管理器] 已清空最近搜索');
  }

  /**
   * 应用状态管理
   */
  async saveAppState(state: Partial<AppState>): Promise<void> {
    await this.storage.setItem(STORAGE_KEYS.APP_STATE, state);
    console.log('[存储管理器] 已保存应用状态');
  }

  async loadAppState(): Promise<Partial<AppState> | null> {
    return await this.storage.getItem<Partial<AppState>>(STORAGE_KEYS.APP_STATE);
  }

  /**
   * 数据同步操作
   */
  async performSync(): Promise<void> {
    try {
      console.log('[存储管理器] 开始数据同步...');
      const result = await this.syncService.performFullSync();
      
      if (result.success) {
        console.log(`[存储管理器] 同步成功: ${result.synced.length} 项`);
      } else {
        console.warn(`[存储管理器] 同步部分失败: ${result.errors.length} 个错误`);
      }
      
      if (result.conflicts.length > 0) {
        console.warn(`[存储管理器] 发现 ${result.conflicts.length} 个冲突`);
      }
    } catch (error) {
      console.error('[存储管理器] 同步失败:', error);
    }
  }

  async getSyncStatus() {
    return await this.syncService.getSyncStatus();
  }

  /**
   * 存储统计信息
   */
  async getStorageStats() {
    const stats = await this.storage.getStorageStats();
    const syncStatus = await this.getSyncStatus();
    
    return {
      ...stats,
      syncStatus
    };
  }

  /**
   * 数据导出和导入
   */
  async exportData(): Promise<{
    transposeHistory: TransposeHistoryItem[];
    dictionaryFavorites: string[];
    userPreferences: UserPreferences;
    chordProgressions: ChordProgression[];
    recentSearches: string[];
    exportTime: number;
    platform: string;
  }> {
    const [
      transposeHistory,
      dictionaryFavorites,
      userPreferences,
      chordProgressions,
      recentSearches
    ] = await Promise.all([
      this.getTransposeHistory(),
      this.getDictionaryFavorites(),
      this.getUserPreferences(),
      this.getChordProgressions(),
      this.getRecentSearches()
    ]);

    return {
      transposeHistory,
      dictionaryFavorites,
      userPreferences,
      chordProgressions,
      recentSearches,
      exportTime: Date.now(),
      platform: this.platform
    };
  }

  async importData(data: Awaited<ReturnType<AppStorageManager['exportData']>>): Promise<void> {
    console.log('[存储管理器] 开始导入数据...');
    
    await Promise.all([
      this.storage.setItem(STORAGE_KEYS.TRANSPOSE_HISTORY, data.transposeHistory),
      this.storage.setItem(STORAGE_KEYS.DICTIONARY_FAVORITES, data.dictionaryFavorites),
      this.storage.setItem(STORAGE_KEYS.USER_PREFERENCES, data.userPreferences),
      this.storage.setItem(STORAGE_KEYS.CHORD_PROGRESSIONS, data.chordProgressions),
      this.storage.setItem(STORAGE_KEYS.RECENT_SEARCHES, data.recentSearches)
    ]);

    console.log('[存储管理器] 数据导入完成');
  }

  /**
   * 清理和维护
   */
  async cleanup(): Promise<void> {
    console.log('[存储管理器] 开始数据清理...');
    
    // 清理过期的历史记录
    const history = await this.getTransposeHistory();
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    const filteredHistory = history.filter(item => item.timestamp > thirtyDaysAgo);
    
    if (filteredHistory.length !== history.length) {
      await this.storage.setItem(STORAGE_KEYS.TRANSPOSE_HISTORY, filteredHistory);
      console.log(`[存储管理器] 已清理 ${history.length - filteredHistory.length} 条过期历史记录`);
    }

    // 停止同步
    this.storage.stopSync();
  }

  /**
   * 工具方法
   */
  private getUserId(): string {
    // 这里应该实现实际的用户ID获取逻辑
    return 'anonymous_user';
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// 工厂函数
export function createAppStorageManager(platform: 'web' | 'miniprogram'): AppStorageManager {
  return new AppStorageManager(platform);
}

// 平台特定的实例创建
export function createWebStorageManager(): AppStorageManager {
  return createAppStorageManager('web');
}

export function createMiniprogramStorageManager(): AppStorageManager {
  return createAppStorageManager('miniprogram');
}