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
var WebStorageAdapter = /** @class */ (function () {
    function WebStorageAdapter() {
    }
    WebStorageAdapter.prototype.get = function (key, defaultValue) {
        try {
            var item = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
            if (item === null) {
                return defaultValue || null;
            }
            return JSON.parse(item);
        }
        catch (error) {
            console.error('Storage get error:', error);
            return defaultValue || null;
        }
    };
    WebStorageAdapter.prototype.set = function (key, value) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(value));
            }
        }
        catch (error) {
            console.error('Storage set error:', error);
        }
    };
    WebStorageAdapter.prototype.remove = function (key) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem(key);
            }
        }
        catch (error) {
            console.error('Storage remove error:', error);
        }
    };
    WebStorageAdapter.prototype.clear = function () {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error('Storage clear error:', error);
        }
    };
    return WebStorageAdapter;
}());
exports.WebStorageAdapter = WebStorageAdapter;
/**
 * 小程序存储适配器
 */
var MiniprogramStorageAdapter = /** @class */ (function () {
    function MiniprogramStorageAdapter() {
    }
    MiniprogramStorageAdapter.prototype.get = function (key, defaultValue) {
        var _a;
        try {
            // @ts-ignore - wx is available in miniprogram environment
            var value = (_a = globalThis.wx) === null || _a === void 0 ? void 0 : _a.getStorageSync(key);
            return value || defaultValue || null;
        }
        catch (error) {
            console.error('Miniprogram storage get error:', error);
            return defaultValue || null;
        }
    };
    MiniprogramStorageAdapter.prototype.set = function (key, value) {
        var _a;
        try {
            // @ts-ignore - wx is available in miniprogram environment
            (_a = globalThis.wx) === null || _a === void 0 ? void 0 : _a.setStorageSync(key, value);
        }
        catch (error) {
            console.error('Miniprogram storage set error:', error);
        }
    };
    MiniprogramStorageAdapter.prototype.remove = function (key) {
        var _a;
        try {
            // @ts-ignore - wx is available in miniprogram environment
            (_a = globalThis.wx) === null || _a === void 0 ? void 0 : _a.removeStorageSync(key);
        }
        catch (error) {
            console.error('Miniprogram storage remove error:', error);
        }
    };
    MiniprogramStorageAdapter.prototype.clear = function () {
        var _a;
        try {
            // @ts-ignore - wx is available in miniprogram environment
            (_a = globalThis.wx) === null || _a === void 0 ? void 0 : _a.clearStorageSync();
        }
        catch (error) {
            console.error('Miniprogram storage clear error:', error);
        }
    };
    return MiniprogramStorageAdapter;
}());
exports.MiniprogramStorageAdapter = MiniprogramStorageAdapter;
/**
 * 存储管理器
 */
var StorageManager = /** @class */ (function () {
    function StorageManager(adapter) {
        this.adapter = adapter;
    }
    /**
     * 保存移调设置
     */
    StorageManager.prototype.saveTransposeSettings = function (settings) {
        this.adapter.set('transpose_settings', settings);
    };
    /**
     * 获取移调设置
     */
    StorageManager.prototype.getTransposeSettings = function () {
        return this.adapter.get('transpose_settings', {
            sourceKey: 'C',
            targetKey: 'G',
            isMinor: false,
            useSeventhChords: false
        });
    };
    /**
     * 保存最近使用的进行
     */
    StorageManager.prototype.saveRecentProgressions = function (progressions) {
        // 限制最多保存10个
        var limited = progressions.slice(0, 10);
        this.adapter.set('recent_progressions', limited);
    };
    /**
     * 获取最近使用的进行
     */
    StorageManager.prototype.getRecentProgressions = function () {
        return this.adapter.get('recent_progressions', []) || [];
    };
    /**
     * 添加到最近使用
     */
    StorageManager.prototype.addRecentProgression = function (progression) {
        var recent = this.getRecentProgressions();
        var filtered = recent.filter(function (p) { return p !== progression; });
        filtered.unshift(progression);
        this.saveRecentProgressions(filtered);
    };
    /**
     * 保存收藏的进行
     */
    StorageManager.prototype.saveFavoriteProgressions = function (progressions) {
        this.adapter.set('favorite_progressions', progressions);
    };
    /**
     * 获取收藏的进行
     */
    StorageManager.prototype.getFavoriteProgressions = function () {
        return this.adapter.get('favorite_progressions', []) || [];
    };
    /**
     * 切换收藏状态
     */
    StorageManager.prototype.toggleFavoriteProgression = function (progression) {
        var favorites = this.getFavoriteProgressions();
        var index = favorites.indexOf(progression);
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
    };
    return StorageManager;
}());
exports.StorageManager = StorageManager;
/**
 * 创建平台适配的存储管理器
 */
function createStorageManager() {
    // 检测运行环境
    var wx = globalThis.wx;
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
var MemoryStorageAdapter = /** @class */ (function () {
    function MemoryStorageAdapter() {
        this.storage = new Map();
    }
    MemoryStorageAdapter.prototype.get = function (key, defaultValue) {
        return this.storage.get(key) || defaultValue || null;
    };
    MemoryStorageAdapter.prototype.set = function (key, value) {
        this.storage.set(key, value);
    };
    MemoryStorageAdapter.prototype.remove = function (key) {
        this.storage.delete(key);
    };
    MemoryStorageAdapter.prototype.clear = function () {
        this.storage.clear();
    };
    return MemoryStorageAdapter;
}());
//# sourceMappingURL=storage.js.map