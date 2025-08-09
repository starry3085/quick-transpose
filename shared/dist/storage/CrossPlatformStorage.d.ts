/**
 * 跨平台数据持久化和同步
 * 支持Web端localStorage和小程序端wx.storage
 */
declare global {
    const wx: {
        getStorageSync: (key: string) => any;
        setStorageSync: (key: string, data: any) => void;
        removeStorageSync: (key: string) => void;
        getStorage: (options: {
            key: string;
            success: (res: {
                data: any;
            }) => void;
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
            success: (res: {
                keys: string[];
            }) => void;
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
    syncInterval: number;
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
export declare class WebStorageAdapter implements StorageAdapter {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    getAllKeys(): Promise<string[]>;
}
export declare class MiniprogramStorageAdapter implements StorageAdapter {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    getAllKeys(): Promise<string[]>;
}
export declare class CrossPlatformStorage {
    private adapter;
    private platform;
    private syncOptions;
    private syncTimer?;
    constructor(platform: 'web' | 'miniprogram', syncOptions?: Partial<SyncOptions>);
    /**
     * 存储数据
     */
    setItem<T>(key: string, data: T): Promise<void>;
    /**
     * 读取数据
     */
    getItem<T>(key: string): Promise<T | null>;
    /**
     * 删除数据
     */
    removeItem(key: string): Promise<void>;
    /**
     * 清空所有数据
     */
    clear(): Promise<void>;
    /**
     * 获取所有键
     */
    getAllKeys(): Promise<string[]>;
    /**
     * 批量操作
     */
    batchSet<T>(items: Record<string, T>): Promise<void>;
    batchGet<T>(keys: string[]): Promise<Record<string, T | null>>;
    /**
     * 数据同步功能
     */
    private startSync;
    private performSync;
    /**
     * 停止同步
     */
    stopSync(): void;
    /**
     * 生成数据校验和
     */
    private generateChecksum;
    /**
     * 验证数据校验和
     */
    private validateChecksum;
    /**
     * 获取存储统计信息
     */
    getStorageStats(): Promise<{
        totalKeys: number;
        totalSize: number;
        platform: string;
        lastSync?: number;
    }>;
}
export declare function createCrossPlatformStorage(platform: 'web' | 'miniprogram', syncOptions?: Partial<SyncOptions>): CrossPlatformStorage;
export declare const STORAGE_KEYS: {
    readonly TRANSPOSE_HISTORY: "transpose_history";
    readonly DICTIONARY_FAVORITES: "dictionary_favorites";
    readonly USER_PREFERENCES: "user_preferences";
    readonly APP_STATE: "app_state";
    readonly CHORD_PROGRESSIONS: "chord_progressions";
    readonly RECENT_SEARCHES: "recent_searches";
};
//# sourceMappingURL=CrossPlatformStorage.d.ts.map