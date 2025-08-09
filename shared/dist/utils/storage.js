"use strict";
/**
 * 跨平台存储抽象层
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageManager = exports.MiniprogramStorageAdapter = exports.WebStorageAdapter = void 0;
exports.createStorageManager = createStorageManager;
/**
 * Web平台存储适配器
 */
class WebStorageAdapter {
    get(key, defaultValue) {
        try {
            const item = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
            if (item === null) {
                return defaultValue || null;
            }
            return JSON.parse(item);
        }
        catch (error) {
            console.error('Storage get error:', error);
            return defaultValue || null;
        }
    }
    set(key, value) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(value));
            }
        }
        catch (error) {
            console.error('Storage set error:', error);
        }
    }
    remove(key) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem(key);
            }
        }
        catch (error) {
            console.error('Storage remove error:', error);
        }
    }
    clear() {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error('Storage clear error:', error);
        }
    }
}
exports.WebStorageAdapter = WebStorageAdapter;
/**
 * 小程序存储适配器
 */
class MiniprogramStorageAdapter {
    get(key, defaultValue) {
        try {
            // @ts-ignore - wx is available in miniprogram environment
            const value = globalThis.wx?.getStorageSync(key);
            return value || defaultValue || null;
        }
        catch (error) {
            console.error('Miniprogram storage get error:', error);
            return defaultValue || null;
        }
    }
    set(key, value) {
        try {
            // @ts-ignore - wx is available in miniprogram environment
            globalThis.wx?.setStorageSync(key, value);
        }
        catch (error) {
            console.error('Miniprogram storage set error:', error);
        }
    }
    remove(key) {
        try {
            // @ts-ignore - wx is available in miniprogram environment
            globalThis.wx?.removeStorageSync(key);
        }
        catch (error) {
            console.error('Miniprogram storage remove error:', error);
        }
    }
    clear() {
        try {
            // @ts-ignore - wx is available in miniprogram environment
            globalThis.wx?.clearStorageSync();
        }
        catch (error) {
            console.error('Miniprogram storage clear error:', error);
        }
    }
}
exports.MiniprogramStorageAdapter = MiniprogramStorageAdapter;
/**
 * 存储管理器
 */
class StorageManager {
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * 保存移调设置
     */
    saveTransposeSettings(settings) {
        this.adapter.set('transpose_settings', settings);
    }
    /**
     * 获取移调设置
     */
    getTransposeSettings() {
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
    saveRecentProgressions(progressions) {
        // 限制最多保存10个
        const limited = progressions.slice(0, 10);
        this.adapter.set('recent_progressions', limited);
    }
    /**
     * 获取最近使用的进行
     */
    getRecentProgressions() {
        return this.adapter.get('recent_progressions', []) || [];
    }
    /**
     * 添加到最近使用
     */
    addRecentProgression(progression) {
        const recent = this.getRecentProgressions();
        const filtered = recent.filter(p => p !== progression);
        filtered.unshift(progression);
        this.saveRecentProgressions(filtered);
    }
    /**
     * 保存收藏的进行
     */
    saveFavoriteProgressions(progressions) {
        this.adapter.set('favorite_progressions', progressions);
    }
    /**
     * 获取收藏的进行
     */
    getFavoriteProgressions() {
        return this.adapter.get('favorite_progressions', []) || [];
    }
    /**
     * 切换收藏状态
     */
    toggleFavoriteProgression(progression) {
        const favorites = this.getFavoriteProgressions();
        const index = favorites.indexOf(progression);
        if (index >= 0) {
            favorites.splice(index, 1);
            this.saveFavoriteProgressions(favorites);
            return false; // 已取消收藏
        }
        else {
            favorites.push(progression);
            this.saveFavoriteProgressions(favorites);
            return true; // 已添加收藏
        }
    }
}
exports.StorageManager = StorageManager;
/**
 * 创建平台适配的存储管理器
 */
function createStorageManager() {
    // 检测运行环境
    const wx = globalThis.wx;
    if (typeof wx !== 'undefined' && wx.getStorageSync) {
        // 小程序环境
        return new StorageManager(new MiniprogramStorageAdapter());
    }
    else if (typeof localStorage !== 'undefined') {
        // Web环境
        return new StorageManager(new WebStorageAdapter());
    }
    else {
        // 降级处理，使用内存存储
        console.warn('No storage available, using memory storage');
        return new StorageManager(new MemoryStorageAdapter());
    }
}
/**
 * 内存存储适配器（降级方案）
 */
class MemoryStorageAdapter {
    constructor() {
        this.storage = new Map();
    }
    get(key, defaultValue) {
        return this.storage.get(key) || defaultValue || null;
    }
    set(key, value) {
        this.storage.set(key, value);
    }
    remove(key) {
        this.storage.delete(key);
    }
    clear() {
        this.storage.clear();
    }
}
//# sourceMappingURL=storage.js.map