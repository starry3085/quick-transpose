"use strict";
/**
 * 跨平台数据持久化和同步
 * 支持Web端localStorage和小程序端wx.storage
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEYS = exports.CrossPlatformStorage = exports.MiniprogramStorageAdapter = exports.WebStorageAdapter = void 0;
exports.createCrossPlatformStorage = createCrossPlatformStorage;
require("../types/global");
// Web端存储适配器
var WebStorageAdapter = /** @class */ (function () {
    function WebStorageAdapter() {
    }
    WebStorageAdapter.prototype.getItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, localStorage.getItem(key)];
                }
                catch (error) {
                    console.error('Web存储读取失败:', error);
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    WebStorageAdapter.prototype.setItem = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    localStorage.setItem(key, value);
                }
                catch (error) {
                    console.error('Web存储写入失败:', error);
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    WebStorageAdapter.prototype.removeItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    localStorage.removeItem(key);
                }
                catch (error) {
                    console.error('Web存储删除失败:', error);
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    WebStorageAdapter.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    localStorage.clear();
                }
                catch (error) {
                    console.error('Web存储清空失败:', error);
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    WebStorageAdapter.prototype.getAllKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, Object.keys(localStorage)];
                }
                catch (error) {
                    console.error('Web存储获取键列表失败:', error);
                    return [2 /*return*/, []];
                }
                return [2 /*return*/];
            });
        });
    };
    return WebStorageAdapter;
}());
exports.WebStorageAdapter = WebStorageAdapter;
// 小程序端存储适配器
var MiniprogramStorageAdapter = /** @class */ (function () {
    function MiniprogramStorageAdapter() {
    }
    MiniprogramStorageAdapter.prototype.getItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        try {
                            if (typeof wx !== 'undefined') {
                                wx.getStorage({
                                    key: key,
                                    success: function (res) { return resolve(res.data); },
                                    fail: function () { return resolve(null); }
                                });
                            }
                            else {
                                resolve(null);
                            }
                        }
                        catch (error) {
                            console.error('小程序存储读取失败:', error);
                            resolve(null);
                        }
                    })];
            });
        });
    };
    MiniprogramStorageAdapter.prototype.setItem = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            if (typeof wx !== 'undefined') {
                                wx.setStorage({
                                    key: key,
                                    data: value,
                                    success: function () { return resolve(); },
                                    fail: function () { return reject(new Error('Clear storage failed')); }
                                });
                            }
                            else {
                                reject(new Error('微信环境不可用'));
                            }
                        }
                        catch (error) {
                            console.error('小程序存储写入失败:', error);
                            reject(error);
                        }
                    })];
            });
        });
    };
    MiniprogramStorageAdapter.prototype.removeItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            if (typeof wx !== 'undefined') {
                                wx.removeStorage({
                                    key: key,
                                    success: function () { return resolve(); },
                                    fail: function (error) { return reject(error); }
                                });
                            }
                            else {
                                reject(new Error('微信环境不可用'));
                            }
                        }
                        catch (error) {
                            console.error('小程序存储删除失败:', error);
                            reject(error);
                        }
                    })];
            });
        });
    };
    MiniprogramStorageAdapter.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            if (typeof wx !== 'undefined') {
                                wx.clearStorage({
                                    success: function () { return resolve(); },
                                    fail: function (error) { return reject(error); }
                                });
                            }
                            else {
                                reject(new Error('微信环境不可用'));
                            }
                        }
                        catch (error) {
                            console.error('小程序存储清空失败:', error);
                            reject(error);
                        }
                    })];
            });
        });
    };
    MiniprogramStorageAdapter.prototype.getAllKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        try {
                            if (typeof wx !== 'undefined') {
                                wx.getStorageInfo({
                                    success: function (res) { return resolve(res.keys); },
                                    fail: function () { return resolve([]); }
                                });
                            }
                            else {
                                resolve([]);
                            }
                        }
                        catch (error) {
                            console.error('小程序存储获取键列表失败:', error);
                            resolve([]);
                        }
                    })];
            });
        });
    };
    return MiniprogramStorageAdapter;
}());
exports.MiniprogramStorageAdapter = MiniprogramStorageAdapter;
// 跨平台存储管理器
var CrossPlatformStorage = /** @class */ (function () {
    function CrossPlatformStorage(platform, syncOptions) {
        this.platform = platform;
        this.adapter = platform === 'web'
            ? new WebStorageAdapter()
            : new MiniprogramStorageAdapter();
        this.syncOptions = __assign({ enableSync: false, syncInterval: 30000, maxRetries: 3, conflictResolution: 'timestamp' }, syncOptions);
        if (this.syncOptions.enableSync) {
            this.startSync();
        }
    }
    /**
     * 存储数据
     */
    CrossPlatformStorage.prototype.setItem = function (key, data) {
        return __awaiter(this, void 0, void 0, function () {
            var storageItem, serializedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageItem = {
                            data: data,
                            timestamp: Date.now(),
                            version: 1,
                            platform: this.platform,
                            checksum: this.generateChecksum(data)
                        };
                        serializedData = JSON.stringify(storageItem);
                        return [4 /*yield*/, this.adapter.setItem(key, serializedData)];
                    case 1:
                        _a.sent();
                        console.log("[\u5B58\u50A8] \u5DF2\u4FDD\u5B58\u6570\u636E: ".concat(key, " (").concat(this.platform, ")"));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 读取数据
     */
    CrossPlatformStorage.prototype.getItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var serializedData, storageItem, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.adapter.getItem(key)];
                    case 1:
                        serializedData = _a.sent();
                        if (!serializedData) {
                            return [2 /*return*/, null];
                        }
                        storageItem = JSON.parse(serializedData);
                        // 验证数据完整性
                        if (this.validateChecksum(storageItem.data, storageItem.checksum)) {
                            console.log("[\u5B58\u50A8] \u5DF2\u8BFB\u53D6\u6570\u636E: ".concat(key, " (").concat(this.platform, ")"));
                            return [2 /*return*/, storageItem.data];
                        }
                        else {
                            console.warn("[\u5B58\u50A8] \u6570\u636E\u6821\u9A8C\u5931\u8D25: ".concat(key));
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("[\u5B58\u50A8] \u8BFB\u53D6\u6570\u636E\u5931\u8D25: ".concat(key), error_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 删除数据
     */
    CrossPlatformStorage.prototype.removeItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.removeItem(key)];
                    case 1:
                        _a.sent();
                        console.log("[\u5B58\u50A8] \u5DF2\u5220\u9664\u6570\u636E: ".concat(key, " (").concat(this.platform, ")"));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 清空所有数据
     */
    CrossPlatformStorage.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.clear()];
                    case 1:
                        _a.sent();
                        console.log("[\u5B58\u50A8] \u5DF2\u6E05\u7A7A\u6240\u6709\u6570\u636E (".concat(this.platform, ")"));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取所有键
     */
    CrossPlatformStorage.prototype.getAllKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.getAllKeys()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 批量操作
     */
    CrossPlatformStorage.prototype.batchSet = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = Object.entries(items).map(function (_a) {
                            var key = _a[0], value = _a[1];
                            return _this.setItem(key, value);
                        });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        console.log("[\u5B58\u50A8] \u6279\u91CF\u4FDD\u5B58\u5B8C\u6210: ".concat(Object.keys(items).length, " \u9879"));
                        return [2 /*return*/];
                }
            });
        });
    };
    CrossPlatformStorage.prototype.batchGet = function (keys) {
        return __awaiter(this, void 0, void 0, function () {
            var promises, results, batchResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = {
                                            key: key
                                        };
                                        return [4 /*yield*/, this.getItem(key)];
                                    case 1: return [2 /*return*/, (_a.value = _b.sent(),
                                            _a)];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        results = _a.sent();
                        batchResult = {};
                        results.forEach(function (_a) {
                            var key = _a.key, value = _a.value;
                            batchResult[key] = value;
                        });
                        console.log("[\u5B58\u50A8] \u6279\u91CF\u8BFB\u53D6\u5B8C\u6210: ".concat(keys.length, " \u9879"));
                        return [2 /*return*/, batchResult];
                }
            });
        });
    };
    /**
     * 数据同步功能
     */
    CrossPlatformStorage.prototype.startSync = function () {
        var _this = this;
        if (this.syncTimer) {
            clearInterval(this.syncTimer);
        }
        this.syncTimer = setInterval(function () {
            _this.performSync().catch(function (error) {
                console.error('[同步] 数据同步失败:', error);
            });
        }, this.syncOptions.syncInterval);
        console.log("[\u540C\u6B65] \u6570\u636E\u540C\u6B65\u5DF2\u542F\u52A8\uFF0C\u95F4\u9694: ".concat(this.syncOptions.syncInterval, "ms"));
    };
    CrossPlatformStorage.prototype.performSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys, localData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 这里可以实现与服务器的数据同步逻辑
                        console.log('[同步] 执行数据同步...');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.getAllKeys()];
                    case 2:
                        keys = _a.sent();
                        return [4 /*yield*/, this.batchGet(keys)];
                    case 3:
                        localData = _a.sent();
                        console.log("[\u540C\u6B65] \u672C\u5730\u6570\u636E\u9879\u6570: ".concat(keys.length));
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error('[同步] 同步过程出错:', error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 停止同步
     */
    CrossPlatformStorage.prototype.stopSync = function () {
        if (this.syncTimer) {
            clearInterval(this.syncTimer);
            this.syncTimer = undefined;
            console.log('[同步] 数据同步已停止');
        }
    };
    /**
     * 生成数据校验和
     */
    CrossPlatformStorage.prototype.generateChecksum = function (data) {
        var str = JSON.stringify(data);
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 转换为32位整数
        }
        return hash.toString(16);
    };
    /**
     * 验证数据校验和
     */
    CrossPlatformStorage.prototype.validateChecksum = function (data, checksum) {
        if (!checksum)
            return true; // 如果没有校验和，认为有效
        return this.generateChecksum(data) === checksum;
    };
    /**
     * 获取存储统计信息
     */
    CrossPlatformStorage.prototype.getStorageStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys, totalSize, _i, keys_1, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllKeys()];
                    case 1:
                        keys = _a.sent();
                        totalSize = 0;
                        _i = 0, keys_1 = keys;
                        _a.label = 2;
                    case 2:
                        if (!(_i < keys_1.length)) return [3 /*break*/, 5];
                        key = keys_1[_i];
                        return [4 /*yield*/, this.adapter.getItem(key)];
                    case 3:
                        data = _a.sent();
                        if (data) {
                            totalSize += data.length;
                        }
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, {
                            totalKeys: keys.length,
                            totalSize: totalSize,
                            platform: this.platform,
                            lastSync: this.syncTimer ? Date.now() : undefined
                        }];
                }
            });
        });
    };
    return CrossPlatformStorage;
}());
exports.CrossPlatformStorage = CrossPlatformStorage;
// 工厂函数
function createCrossPlatformStorage(platform, syncOptions) {
    return new CrossPlatformStorage(platform, syncOptions);
}
// 预定义的存储键常量
exports.STORAGE_KEYS = {
    TRANSPOSE_HISTORY: 'transpose_history',
    DICTIONARY_FAVORITES: 'dictionary_favorites',
    USER_PREFERENCES: 'user_preferences',
    APP_STATE: 'app_state',
    CHORD_PROGRESSIONS: 'chord_progressions',
    RECENT_SEARCHES: 'recent_searches'
};
//# sourceMappingURL=CrossPlatformStorage.js.map