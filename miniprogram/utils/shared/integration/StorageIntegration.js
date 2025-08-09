"use strict";
/**
 * 存储集成示例
 * 展示如何在Web和小程序中使用跨平台存储和同步功能
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStorageManager = void 0;
exports.createAppStorageManager = createAppStorageManager;
exports.createWebStorageManager = createWebStorageManager;
exports.createMiniprogramStorageManager = createMiniprogramStorageManager;
var CrossPlatformStorage_1 = require("../storage/CrossPlatformStorage");
var DataSyncService_1 = require("../sync/DataSyncService");
/**
 * 应用存储管理器
 * 封装所有存储操作的高级接口
 */
var AppStorageManager = /** @class */ (function () {
    function AppStorageManager(platform) {
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
        console.log("[\u5B58\u50A8\u7BA1\u7406\u5668] \u5DF2\u521D\u59CB\u5316 ".concat(platform, " \u5E73\u53F0\u5B58\u50A8"));
    }
    /**
     * 转调历史记录管理
     */
    AppStorageManager.prototype.getTransposeHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var history;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY)];
                    case 1:
                        history = _a.sent();
                        return [2 /*return*/, history || []];
                }
            });
        });
    };
    AppStorageManager.prototype.addTransposeHistory = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var history, newItem, updatedHistory, preferences, maxItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTransposeHistory()];
                    case 1:
                        history = _a.sent();
                        newItem = __assign(__assign({}, item), { timestamp: Date.now() });
                        updatedHistory = __spreadArray([newItem], history, true);
                        return [4 /*yield*/, this.getUserPreferences()];
                    case 2:
                        preferences = _a.sent();
                        maxItems = preferences.maxHistoryItems;
                        if (updatedHistory.length > maxItems) {
                            updatedHistory.splice(maxItems);
                        }
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, updatedHistory)];
                    case 3:
                        _a.sent();
                        console.log('[存储管理器] 已添加转调历史记录');
                        return [2 /*return*/];
                }
            });
        });
    };
    AppStorageManager.prototype.clearTransposeHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, [])];
                    case 1:
                        _a.sent();
                        console.log('[存储管理器] 已清空转调历史记录');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 字典收藏管理
     */
    AppStorageManager.prototype.getDictionaryFavorites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var favorites;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES)];
                    case 1:
                        favorites = _a.sent();
                        return [2 /*return*/, favorites || []];
                }
            });
        });
    };
    AppStorageManager.prototype.addToFavorites = function (chord) {
        return __awaiter(this, void 0, void 0, function () {
            var favorites;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDictionaryFavorites()];
                    case 1:
                        favorites = _a.sent();
                        if (!!favorites.includes(chord)) return [3 /*break*/, 3];
                        favorites.push(chord);
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES, favorites)];
                    case 2:
                        _a.sent();
                        console.log("[\u5B58\u50A8\u7BA1\u7406\u5668] \u5DF2\u6DFB\u52A0\u6536\u85CF: ".concat(chord));
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppStorageManager.prototype.removeFromFavorites = function (chord) {
        return __awaiter(this, void 0, void 0, function () {
            var favorites, updatedFavorites;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDictionaryFavorites()];
                    case 1:
                        favorites = _a.sent();
                        updatedFavorites = favorites.filter(function (c) { return c !== chord; });
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES, updatedFavorites)];
                    case 2:
                        _a.sent();
                        console.log("[\u5B58\u50A8\u7BA1\u7406\u5668] \u5DF2\u79FB\u9664\u6536\u85CF: ".concat(chord));
                        return [2 /*return*/];
                }
            });
        });
    };
    AppStorageManager.prototype.toggleFavorite = function (chord) {
        return __awaiter(this, void 0, void 0, function () {
            var favorites, isFavorite;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDictionaryFavorites()];
                    case 1:
                        favorites = _a.sent();
                        isFavorite = favorites.includes(chord);
                        if (!isFavorite) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.removeFromFavorites(chord)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [4 /*yield*/, this.addToFavorites(chord)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * 用户偏好设置管理
     */
    AppStorageManager.prototype.getUserPreferences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var preferences;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.USER_PREFERENCES)];
                    case 1:
                        preferences = _a.sent();
                        // 返回默认设置
                        return [2 /*return*/, __assign({ defaultKey: 0, showHistory: true, maxHistoryItems: 50, autoSave: true, theme: 'light' }, preferences)];
                }
            });
        });
    };
    AppStorageManager.prototype.updateUserPreferences = function (updates) {
        return __awaiter(this, void 0, void 0, function () {
            var currentPreferences, updatedPreferences;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserPreferences()];
                    case 1:
                        currentPreferences = _a.sent();
                        updatedPreferences = __assign(__assign({}, currentPreferences), updates);
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.USER_PREFERENCES, updatedPreferences)];
                    case 2:
                        _a.sent();
                        console.log('[存储管理器] 已更新用户偏好设置');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 和弦进行管理
     */
    AppStorageManager.prototype.getChordProgressions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var progressions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS)];
                    case 1:
                        progressions = _a.sent();
                        return [2 /*return*/, progressions || []];
                }
            });
        });
    };
    AppStorageManager.prototype.saveChordProgression = function (progression) {
        return __awaiter(this, void 0, void 0, function () {
            var progressions, newProgression;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getChordProgressions()];
                    case 1:
                        progressions = _a.sent();
                        newProgression = __assign(__assign({}, progression), { id: this.generateId(), createdAt: Date.now() });
                        progressions.push(newProgression);
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS, progressions)];
                    case 2:
                        _a.sent();
                        console.log("[\u5B58\u50A8\u7BA1\u7406\u5668] \u5DF2\u4FDD\u5B58\u548C\u5F26\u8FDB\u884C: ".concat(newProgression.name));
                        return [2 /*return*/, newProgression.id];
                }
            });
        });
    };
    AppStorageManager.prototype.deleteChordProgression = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var progressions, updatedProgressions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getChordProgressions()];
                    case 1:
                        progressions = _a.sent();
                        updatedProgressions = progressions.filter(function (p) { return p.id !== id; });
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS, updatedProgressions)];
                    case 2:
                        _a.sent();
                        console.log("[\u5B58\u50A8\u7BA1\u7406\u5668] \u5DF2\u5220\u9664\u548C\u5F26\u8FDB\u884C: ".concat(id));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 最近搜索管理
     */
    AppStorageManager.prototype.getRecentSearches = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES)];
                    case 1:
                        searches = _a.sent();
                        return [2 /*return*/, searches || []];
                }
            });
        });
    };
    AppStorageManager.prototype.addRecentSearch = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var searches, filteredSearches, updatedSearches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecentSearches()];
                    case 1:
                        searches = _a.sent();
                        filteredSearches = searches.filter(function (s) { return s !== query; });
                        updatedSearches = __spreadArray([query], filteredSearches, true);
                        // 限制数量
                        if (updatedSearches.length > 10) {
                            updatedSearches.splice(10);
                        }
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES, updatedSearches)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppStorageManager.prototype.clearRecentSearches = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES, [])];
                    case 1:
                        _a.sent();
                        console.log('[存储管理器] 已清空最近搜索');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 应用状态管理
     */
    AppStorageManager.prototype.saveAppState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.APP_STATE, state)];
                    case 1:
                        _a.sent();
                        console.log('[存储管理器] 已保存应用状态');
                        return [2 /*return*/];
                }
            });
        });
    };
    AppStorageManager.prototype.loadAppState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem(CrossPlatformStorage_1.STORAGE_KEYS.APP_STATE)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 数据同步操作
     */
    AppStorageManager.prototype.performSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('[存储管理器] 开始数据同步...');
                        return [4 /*yield*/, this.syncService.performFullSync()];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            console.log("[\u5B58\u50A8\u7BA1\u7406\u5668] \u540C\u6B65\u6210\u529F: ".concat(result.synced.length, " \u9879"));
                        }
                        else {
                            console.warn("[\u5B58\u50A8\u7BA1\u7406\u5668] \u540C\u6B65\u90E8\u5206\u5931\u8D25: ".concat(result.errors.length, " \u4E2A\u9519\u8BEF"));
                        }
                        if (result.conflicts.length > 0) {
                            console.warn("[\u5B58\u50A8\u7BA1\u7406\u5668] \u53D1\u73B0 ".concat(result.conflicts.length, " \u4E2A\u51B2\u7A81"));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('[存储管理器] 同步失败:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppStorageManager.prototype.getSyncStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.syncService.getSyncStatus()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 存储统计信息
     */
    AppStorageManager.prototype.getStorageStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stats, syncStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getStorageStats()];
                    case 1:
                        stats = _a.sent();
                        return [4 /*yield*/, this.getSyncStatus()];
                    case 2:
                        syncStatus = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, stats), { syncStatus: syncStatus })];
                }
            });
        });
    };
    /**
     * 数据导出和导入
     */
    AppStorageManager.prototype.exportData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, transposeHistory, dictionaryFavorites, userPreferences, chordProgressions, recentSearches;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getTransposeHistory(),
                            this.getDictionaryFavorites(),
                            this.getUserPreferences(),
                            this.getChordProgressions(),
                            this.getRecentSearches()
                        ])];
                    case 1:
                        _a = _b.sent(), transposeHistory = _a[0], dictionaryFavorites = _a[1], userPreferences = _a[2], chordProgressions = _a[3], recentSearches = _a[4];
                        return [2 /*return*/, {
                                transposeHistory: transposeHistory,
                                dictionaryFavorites: dictionaryFavorites,
                                userPreferences: userPreferences,
                                chordProgressions: chordProgressions,
                                recentSearches: recentSearches,
                                exportTime: Date.now(),
                                platform: this.platform
                            }];
                }
            });
        });
    };
    AppStorageManager.prototype.importData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[存储管理器] 开始导入数据...');
                        return [4 /*yield*/, Promise.all([
                                this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, data.transposeHistory),
                                this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.DICTIONARY_FAVORITES, data.dictionaryFavorites),
                                this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.USER_PREFERENCES, data.userPreferences),
                                this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.CHORD_PROGRESSIONS, data.chordProgressions),
                                this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.RECENT_SEARCHES, data.recentSearches)
                            ])];
                    case 1:
                        _a.sent();
                        console.log('[存储管理器] 数据导入完成');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 清理和维护
     */
    AppStorageManager.prototype.cleanup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var history, thirtyDaysAgo, filteredHistory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[存储管理器] 开始数据清理...');
                        return [4 /*yield*/, this.getTransposeHistory()];
                    case 1:
                        history = _a.sent();
                        thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
                        filteredHistory = history.filter(function (item) { return item.timestamp > thirtyDaysAgo; });
                        if (!(filteredHistory.length !== history.length)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.setItem(CrossPlatformStorage_1.STORAGE_KEYS.TRANSPOSE_HISTORY, filteredHistory)];
                    case 2:
                        _a.sent();
                        console.log("[\u5B58\u50A8\u7BA1\u7406\u5668] \u5DF2\u6E05\u7406 ".concat(history.length - filteredHistory.length, " \u6761\u8FC7\u671F\u5386\u53F2\u8BB0\u5F55"));
                        _a.label = 3;
                    case 3:
                        // 停止同步
                        this.storage.stopSync();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 工具方法
     */
    AppStorageManager.prototype.getUserId = function () {
        // 这里应该实现实际的用户ID获取逻辑
        return 'anonymous_user';
    };
    AppStorageManager.prototype.generateId = function () {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };
    return AppStorageManager;
}());
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