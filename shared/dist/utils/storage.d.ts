/**
 * 跨平台存储抽象层
 */
import type { StorageAdapter, TransposeSettings } from '../types/chord';
/**
 * Web平台存储适配器
 */
export declare class WebStorageAdapter implements StorageAdapter {
    get<T>(key: string, defaultValue?: T): T | null;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}
/**
 * 小程序存储适配器
 */
export declare class MiniprogramStorageAdapter implements StorageAdapter {
    get<T>(key: string, defaultValue?: T): T | null;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}
/**
 * 存储管理器
 */
export declare class StorageManager {
    private adapter;
    constructor(adapter: StorageAdapter);
    /**
     * 保存移调设置
     */
    saveTransposeSettings(settings: TransposeSettings): void;
    /**
     * 获取移调设置
     */
    getTransposeSettings(): TransposeSettings | null;
    /**
     * 保存最近使用的进行
     */
    saveRecentProgressions(progressions: string[]): void;
    /**
     * 获取最近使用的进行
     */
    getRecentProgressions(): string[];
    /**
     * 添加到最近使用
     */
    addRecentProgression(progression: string): void;
    /**
     * 保存收藏的进行
     */
    saveFavoriteProgressions(progressions: string[]): void;
    /**
     * 获取收藏的进行
     */
    getFavoriteProgressions(): string[];
    /**
     * 切换收藏状态
     */
    toggleFavoriteProgression(progression: string): boolean;
}
/**
 * 创建平台适配的存储管理器
 */
export declare function createStorageManager(): StorageManager;
//# sourceMappingURL=storage.d.ts.map