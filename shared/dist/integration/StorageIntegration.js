"use strict";
/**
 * 存储集成示例
 * 展示如何在Web和小程序中使用跨平台存储和同步功能
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStorageManager = void 0;
exports.createAppStorageManager = createAppStorageManager;
exports.createWebStorageManager = createWebStorageManager;
exports.createMiniprogramStorageManager = createMiniprogramStorageManager;
const CrossPlatformStorage_1 = require("../storage/CrossPlatformStorage");
const DataSyncService_1 = require("../sync/DataSyncService");
/**
 * 应用存储管理器
 * 封装所有存储操作的高级接口
 */
class AppStorageManager {
    constructor(platform) {
        this.platform = platform;
        // 创建存储实例
        this.storage = (0, CrossPlatformStorage_1.createCrossPlatformStorage)(platform, {
            enableSync: true,
            syncInterval: 60000, // 1分钟同步一次
            maxRetries: 3,
            conflictResolution: 'timestamp'
        });
        // 创建同步服务
        this.syncService = (0, DataSyncService_1.createDataSyncService)(this.storage, {
            syncEndpoint: 'https://api.quick-transpose.com/sync',
            userId: this.getUserId()
        });
        console.log(`[存储管理器] 已初始化 ${platform} 平台存储`);
    }
    /**
     * 转调历史记录管理
     */
    async getTransposeHistory() {
        const history = await this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY);
        return history || [];
    }
    async addTransposeHistory(item) {
        const history = await this.getTransposeHistory();
        const newItem = {
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
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, updatedHistory);
        console.log('[存储管理器] 已添加转调历史记录');
    }
    async clearTransposeHistory() {
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, []);
        console.log('[存储管理器] 已清空转调历史记录');
    }
    /**
     * 字典收藏管理
     */
    async getDictionaryFavorites() {
        const favorites = await this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES);
        return favorites || [];
    }
    async addToFavorites(chord) {
        const favorites = await this.getDictionaryFavorites();
        if (!favorites.includes(chord)) {
            favorites.push(chord);
            await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES, favorites);
            console.log(`[存储管理器] 已添加收藏: ${chord}`);
        }
    }
    async removeFromFavorites(chord) {
        const favorites = await this.getDictionaryFavorites();
        const updatedFavorites = favorites.filter(c => c !== chord);
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES, updatedFavorites);
        console.log(`[存储管理器] 已移除收藏: ${chord}`);
    }
    async toggleFavorite(chord) {
        const favorites = await this.getDictionaryFavorites();
        const isFavorite = favorites.includes(chord);
        if (isFavorite) {
            await this.removeFromFavorites(chord);
            return false;
        }
        else {
            await this.addToFavorites(chord);
            return true;
        }
    }
    /**
     * 用户偏好设置管理
     */
    async getUserPreferences() {
        const preferences = await this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.USER_PREFERENCES);
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
    async updateUserPreferences(updates) {
        const currentPreferences = await this.getUserPreferences();
        const updatedPreferences = { ...currentPreferences, ...updates };
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.USER_PREFERENCES, updatedPreferences);
        console.log('[存储管理器] 已更新用户偏好设置');
    }
    /**
     * 和弦进行管理
     */
    async getChordProgressions() {
        const progressions = await this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS);
        return progressions || [];
    }
    async saveChordProgression(progression) {
        const progressions = await this.getChordProgressions();
        const newProgression = {
            ...progression,
            id: this.generateId(),
            createdAt: Date.now()
        };
        progressions.push(newProgression);
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS, progressions);
        console.log(`[存储管理器] 已保存和弦进行: ${newProgression.name}`);
        return newProgression.id;
    }
    async deleteChordProgression(id) {
        const progressions = await this.getChordProgressions();
        const updatedProgressions = progressions.filter(p => p.id !== id);
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS, updatedProgressions);
        console.log(`[存储管理器] 已删除和弦进行: ${id}`);
    }
    /**
     * 最近搜索管理
     */
    async getRecentSearches() {
        const searches = await this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES);
        return searches || [];
    }
    async addRecentSearch(query) {
        const searches = await this.getRecentSearches();
        // 移除重复项
        const filteredSearches = searches.filter(s => s !== query);
        // 添加到开头
        const updatedSearches = [query, ...filteredSearches];
        // 限制数量
        if (updatedSearches.length > 10) {
            updatedSearches.splice(10);
        }
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES, updatedSearches);
    }
    async clearRecentSearches() {
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES, []);
        console.log('[存储管理器] 已清空最近搜索');
    }
    /**
     * 应用状态管理
     */
    async saveAppState(state) {
        await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.APP_STATE, state);
        console.log('[存储管理器] 已保存应用状态');
    }
    async loadAppState() {
        return await this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.APP_STATE);
    }
    /**
     * 数据同步操作
     */
    async performSync() {
        try {
            console.log('[存储管理器] 开始数据同步...');
            const result = await this.syncService.performFullSync();
            if (result.success) {
                console.log(`[存储管理器] 同步成功: ${result.synced.length} 项`);
            }
            else {
                console.warn(`[存储管理器] 同步部分失败: ${result.errors.length} 个错误`);
            }
            if (result.conflicts.length > 0) {
                console.warn(`[存储管理器] 发现 ${result.conflicts.length} 个冲突`);
            }
        }
        catch (error) {
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
    async exportData() {
        const [transposeHistory, dictionaryFavorites, userPreferences, chordProgressions, recentSearches] = await Promise.all([
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
    async importData(data) {
        console.log('[存储管理器] 开始导入数据...');
        await Promise.all([
            this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, data.transposeHistory),
            this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES, data.dictionaryFavorites),
            this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.USER_PREFERENCES, data.userPreferences),
            this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS, data.chordProgressions),
            this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES, data.recentSearches)
        ]);
        console.log('[存储管理器] 数据导入完成');
    }
    /**
     * 清理和维护
     */
    async cleanup() {
        console.log('[存储管理器] 开始数据清理...');
        // 清理过期的历史记录
        const history = await this.getTransposeHistory();
        const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        const filteredHistory = history.filter(item => item.timestamp > thirtyDaysAgo);
        if (filteredHistory.length !== history.length) {
            await this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, filteredHistory);
            console.log(`[存储管理器] 已清理 ${history.length - filteredHistory.length} 条过期历史记录`);
        }
        // 停止同步
        this.storage.stopSync();
    }
    /**
     * 工具方法
     */
    getUserId() {
        // 这里应该实现实际的用户ID获取逻辑
        return 'anonymous_user';
    }
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
}
exports.AppStorageManager = AppStorageManager;
// 工厂函数
function createAppStorageManager(platform) {
    return new AppStorageManager(platform);
}
// 平台特定的实例创建
function createWebStorageManager() {
    return createAppStorageManager('web');
}
function createMiniprogramStorageManager() {
    return createAppStorageManager('miniprogram');
}
//# sourceMappingURL=StorageIntegration.js.map