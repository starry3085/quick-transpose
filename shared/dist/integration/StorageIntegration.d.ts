/**
 * 存储集成示例
 * 展示如何在Web和小程序中使用跨平台存储和同步功能
 */
import { AppState } from '../state/AppStateManager';
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
export declare class AppStorageManager {
    private storage;
    private syncService;
    private platform;
    constructor(platform: 'web' | 'miniprogram');
    /**
     * 转调历史记录管理
     */
    getTransposeHistory(): Promise<TransposeHistoryItem[]>;
    addTransposeHistory(item: Omit<TransposeHistoryItem, 'timestamp'>): Promise<void>;
    clearTransposeHistory(): Promise<void>;
    /**
     * 字典收藏管理
     */
    getDictionaryFavorites(): Promise<string[]>;
    addToFavorites(chord: string): Promise<void>;
    removeFromFavorites(chord: string): Promise<void>;
    toggleFavorite(chord: string): Promise<boolean>;
    /**
     * 用户偏好设置管理
     */
    getUserPreferences(): Promise<UserPreferences>;
    updateUserPreferences(updates: Partial<UserPreferences>): Promise<void>;
    /**
     * 和弦进行管理
     */
    getChordProgressions(): Promise<ChordProgression[]>;
    saveChordProgression(progression: Omit<ChordProgression, 'id' | 'createdAt'>): Promise<string>;
    deleteChordProgression(id: string): Promise<void>;
    /**
     * 最近搜索管理
     */
    getRecentSearches(): Promise<string[]>;
    addRecentSearch(query: string): Promise<void>;
    clearRecentSearches(): Promise<void>;
    /**
     * 应用状态管理
     */
    saveAppState(state: Partial<AppState>): Promise<void>;
    loadAppState(): Promise<Partial<AppState> | null>;
    /**
     * 数据同步操作
     */
    performSync(): Promise<void>;
    getSyncStatus(): Promise<{
        lastSync: number | null;
        pendingUploads: number;
        pendingDownloads: number;
        conflicts: number;
    }>;
    /**
     * 存储统计信息
     */
    getStorageStats(): Promise<{
        syncStatus: {
            lastSync: number | null;
            pendingUploads: number;
            pendingDownloads: number;
            conflicts: number;
        };
        totalKeys: number;
        totalSize: number;
        platform: string;
        lastSync?: number;
    }>;
    /**
     * 数据导出和导入
     */
    exportData(): Promise<{
        transposeHistory: TransposeHistoryItem[];
        dictionaryFavorites: string[];
        userPreferences: UserPreferences;
        chordProgressions: ChordProgression[];
        recentSearches: string[];
        exportTime: number;
        platform: string;
    }>;
    importData(data: Awaited<ReturnType<AppStorageManager['exportData']>>): Promise<void>;
    /**
     * 清理和维护
     */
    cleanup(): Promise<void>;
    /**
     * 工具方法
     */
    private getUserId;
    private generateId;
}
export declare function createAppStorageManager(platform: 'web' | 'miniprogram'): AppStorageManager;
export declare function createWebStorageManager(): AppStorageManager;
export declare function createMiniprogramStorageManager(): AppStorageManager;
//# sourceMappingURL=StorageIntegration.d.ts.map