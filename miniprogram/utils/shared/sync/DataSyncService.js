"use strict";
/**
 * 数据同步服务
 * 处理跨平台数据同步和冲突解决
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
exports.DataSyncService = void 0;
exports.createDataSyncService = createDataSyncService;
var CrossPlatformStorage_1 = require("../storage/CrossPlatformStorage");
var DataSyncService = /** @class */ (function () {
    function DataSyncService(storage, options) {
        this.storage = storage;
        this.syncEndpoint = options === null || options === void 0 ? void 0 : options.syncEndpoint;
        this.userId = options === null || options === void 0 ? void 0 : options.userId;
    }
    /**
     * 执行完整数据同步
     */
    DataSyncService.prototype.performFullSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, localData, remoteData, _a, toUpload, toDownload, conflicts, resolvedConflicts, _i, toUpload_1, item, error_1, _b, toDownload_1, item, error_2, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('[同步服务] 开始完整数据同步...');
                        result = {
                            success: false,
                            synced: [],
                            conflicts: [],
                            errors: [],
                            timestamp: Date.now()
                        };
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 17, , 18]);
                        return [4 /*yield*/, this.getAllLocalData()];
                    case 2:
                        localData = _c.sent();
                        return [4 /*yield*/, this.getAllRemoteData()];
                    case 3:
                        remoteData = _c.sent();
                        _a = this.compareData(localData, remoteData), toUpload = _a.toUpload, toDownload = _a.toDownload, conflicts = _a.conflicts;
                        return [4 /*yield*/, this.resolveConflicts(conflicts)];
                    case 4:
                        resolvedConflicts = _c.sent();
                        result.conflicts = resolvedConflicts.filter(function (c) { return !c.resolved; });
                        _i = 0, toUpload_1 = toUpload;
                        _c.label = 5;
                    case 5:
                        if (!(_i < toUpload_1.length)) return [3 /*break*/, 10];
                        item = toUpload_1[_i];
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.uploadData(item)];
                    case 7:
                        _c.sent();
                        result.synced.push(item.key);
                        return [3 /*break*/, 9];
                    case 8:
                        error_1 = _c.sent();
                        result.errors.push({
                            key: item.key,
                            error: error_1 instanceof Error ? error_1.message : '上传失败'
                        });
                        return [3 /*break*/, 9];
                    case 9:
                        _i++;
                        return [3 /*break*/, 5];
                    case 10:
                        _b = 0, toDownload_1 = toDownload;
                        _c.label = 11;
                    case 11:
                        if (!(_b < toDownload_1.length)) return [3 /*break*/, 16];
                        item = toDownload_1[_b];
                        _c.label = 12;
                    case 12:
                        _c.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, this.storage.setItem(item.key, item.data)];
                    case 13:
                        _c.sent();
                        result.synced.push(item.key);
                        return [3 /*break*/, 15];
                    case 14:
                        error_2 = _c.sent();
                        result.errors.push({
                            key: item.key,
                            error: error_2 instanceof Error ? error_2.message : '下载失败'
                        });
                        return [3 /*break*/, 15];
                    case 15:
                        _b++;
                        return [3 /*break*/, 11];
                    case 16:
                        result.success = result.errors.length === 0;
                        console.log("[\u540C\u6B65\u670D\u52A1] \u540C\u6B65\u5B8C\u6210: ".concat(result.synced.length, " \u9879\u6210\u529F, ").concat(result.errors.length, " \u9879\u5931\u8D25"));
                        return [3 /*break*/, 18];
                    case 17:
                        error_3 = _c.sent();
                        console.error('[同步服务] 同步过程出错:', error_3);
                        result.errors.push({
                            key: 'SYNC_PROCESS',
                            error: error_3 instanceof Error ? error_3.message : '同步过程失败'
                        });
                        return [3 /*break*/, 18];
                    case 18: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 增量数据同步
     */
    DataSyncService.prototype.performIncrementalSync = function (lastSyncTime) {
        return __awaiter(this, void 0, void 0, function () {
            var result, localChanges, remoteChanges, _a, toUpload, toDownload, conflicts, resolvedConflicts, _i, toUpload_2, item, error_4, _b, toDownload_2, item, error_5, error_6;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("[\u540C\u6B65\u670D\u52A1] \u5F00\u59CB\u589E\u91CF\u540C\u6B65\uFF0C\u4E0A\u6B21\u540C\u6B65\u65F6\u95F4: ".concat(new Date(lastSyncTime).toLocaleString()));
                        result = {
                            success: false,
                            synced: [],
                            conflicts: [],
                            errors: [],
                            timestamp: Date.now()
                        };
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 17, , 18]);
                        return [4 /*yield*/, this.getLocalChanges(lastSyncTime)];
                    case 2:
                        localChanges = _c.sent();
                        return [4 /*yield*/, this.getRemoteChanges(lastSyncTime)];
                    case 3:
                        remoteChanges = _c.sent();
                        _a = this.compareChanges(localChanges, remoteChanges), toUpload = _a.toUpload, toDownload = _a.toDownload, conflicts = _a.conflicts;
                        return [4 /*yield*/, this.resolveConflicts(conflicts)];
                    case 4:
                        resolvedConflicts = _c.sent();
                        result.conflicts = resolvedConflicts.filter(function (c) { return !c.resolved; });
                        _i = 0, toUpload_2 = toUpload;
                        _c.label = 5;
                    case 5:
                        if (!(_i < toUpload_2.length)) return [3 /*break*/, 10];
                        item = toUpload_2[_i];
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.uploadData(item)];
                    case 7:
                        _c.sent();
                        result.synced.push(item.key);
                        return [3 /*break*/, 9];
                    case 8:
                        error_4 = _c.sent();
                        result.errors.push({
                            key: item.key,
                            error: error_4 instanceof Error ? error_4.message : '上传失败'
                        });
                        return [3 /*break*/, 9];
                    case 9:
                        _i++;
                        return [3 /*break*/, 5];
                    case 10:
                        _b = 0, toDownload_2 = toDownload;
                        _c.label = 11;
                    case 11:
                        if (!(_b < toDownload_2.length)) return [3 /*break*/, 16];
                        item = toDownload_2[_b];
                        _c.label = 12;
                    case 12:
                        _c.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, this.storage.setItem(item.key, item.data)];
                    case 13:
                        _c.sent();
                        result.synced.push(item.key);
                        return [3 /*break*/, 15];
                    case 14:
                        error_5 = _c.sent();
                        result.errors.push({
                            key: item.key,
                            error: error_5 instanceof Error ? error_5.message : '下载失败'
                        });
                        return [3 /*break*/, 15];
                    case 15:
                        _b++;
                        return [3 /*break*/, 11];
                    case 16:
                        result.success = result.errors.length === 0;
                        console.log("[\u540C\u6B65\u670D\u52A1] \u589E\u91CF\u540C\u6B65\u5B8C\u6210: ".concat(result.synced.length, " \u9879\u66F4\u65B0"));
                        return [3 /*break*/, 18];
                    case 17:
                        error_6 = _c.sent();
                        console.error('[同步服务] 增量同步出错:', error_6);
                        result.errors.push({
                            key: 'INCREMENTAL_SYNC',
                            error: error_6 instanceof Error ? error_6.message : '增量同步失败'
                        });
                        return [3 /*break*/, 18];
                    case 18: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取所有本地数据
     */
    DataSyncService.prototype.getAllLocalData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys, syncData, _i, keys_1, key, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = Object.values(CrossPlatformStorage_1.STORAGE_KEYS);
                        syncData = [];
                        _i = 0, keys_1 = keys;
                        _a.label = 1;
                    case 1:
                        if (!(_i < keys_1.length)) return [3 /*break*/, 6];
                        key = keys_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.storage.getItem(key)];
                    case 3:
                        data = _a.sent();
                        if (data !== null) {
                            syncData.push({
                                key: key,
                                data: data,
                                timestamp: Date.now(),
                                platform: 'web', // 这里应该从storage中获取实际平台信息
                                version: 1,
                                hash: this.generateHash(data)
                            });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_7 = _a.sent();
                        console.error("[\u540C\u6B65\u670D\u52A1] \u83B7\u53D6\u672C\u5730\u6570\u636E\u5931\u8D25: ".concat(key), error_7);
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, syncData];
                }
            });
        });
    };
    /**
     * 获取所有远程数据（模拟实现）
     */
    DataSyncService.prototype.getAllRemoteData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 这里应该实现实际的远程数据获取逻辑
                // 目前返回空数组作为模拟
                console.log('[同步服务] 获取远程数据（模拟）');
                return [2 /*return*/, []];
            });
        });
    };
    /**
     * 获取本地更改
     */
    DataSyncService.prototype.getLocalChanges = function (since) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 实际实现中，这里应该跟踪数据的修改时间
                // 目前简化为获取所有数据
                return [2 /*return*/, this.getAllLocalData()];
            });
        });
    };
    /**
     * 获取远程更改（模拟实现）
     */
    DataSyncService.prototype.getRemoteChanges = function (since) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 模拟远程更改
                console.log("[\u540C\u6B65\u670D\u52A1] \u83B7\u53D6\u8FDC\u7A0B\u66F4\u6539\uFF0C\u65F6\u95F4\u6233: ".concat(since));
                return [2 /*return*/, []];
            });
        });
    };
    /**
     * 比较数据并确定同步操作
     */
    DataSyncService.prototype.compareData = function (localData, remoteData) {
        var toUpload = [];
        var toDownload = [];
        var conflicts = [];
        var remoteMap = new Map(remoteData.map(function (item) { return [item.key, item]; }));
        var localMap = new Map(localData.map(function (item) { return [item.key, item]; }));
        // 检查本地数据
        for (var _i = 0, localData_1 = localData; _i < localData_1.length; _i++) {
            var localItem = localData_1[_i];
            var remoteItem = remoteMap.get(localItem.key);
            if (!remoteItem) {
                // 远程没有，需要上传
                toUpload.push(localItem);
            }
            else if (localItem.hash !== remoteItem.hash) {
                // 数据不同，检查是否有冲突
                if (localItem.timestamp > remoteItem.timestamp) {
                    toUpload.push(localItem);
                }
                else if (localItem.timestamp < remoteItem.timestamp) {
                    toDownload.push(remoteItem);
                }
                else {
                    // 时间戳相同但内容不同，产生冲突
                    conflicts.push({
                        key: localItem.key,
                        localData: localItem,
                        remoteData: remoteItem,
                        conflictType: 'content'
                    });
                }
            }
        }
        // 检查远程独有的数据
        for (var _a = 0, remoteData_1 = remoteData; _a < remoteData_1.length; _a++) {
            var remoteItem = remoteData_1[_a];
            if (!localMap.has(remoteItem.key)) {
                toDownload.push(remoteItem);
            }
        }
        return { toUpload: toUpload, toDownload: toDownload, conflicts: conflicts };
    };
    /**
     * 比较更改
     */
    DataSyncService.prototype.compareChanges = function (localChanges, remoteChanges) {
        // 简化实现，使用相同的比较逻辑
        return this.compareData(localChanges, remoteChanges);
    };
    /**
     * 解决冲突
     */
    DataSyncService.prototype.resolveConflicts = function (conflicts) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvedConflicts, _i, conflicts_1, conflict, resolution, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolvedConflicts = [];
                        _i = 0, conflicts_1 = conflicts;
                        _a.label = 1;
                    case 1:
                        if (!(_i < conflicts_1.length)) return [3 /*break*/, 6];
                        conflict = conflicts_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        resolution = conflict.localData.timestamp >= conflict.remoteData.timestamp
                            ? conflict.localData
                            : conflict.remoteData;
                        return [4 /*yield*/, this.storage.setItem(conflict.key, resolution.data)];
                    case 3:
                        _a.sent();
                        resolvedConflicts.push(__assign(__assign({}, conflict), { resolved: true }));
                        console.log("[\u540C\u6B65\u670D\u52A1] \u51B2\u7A81\u5DF2\u89E3\u51B3: ".concat(conflict.key));
                        return [3 /*break*/, 5];
                    case 4:
                        error_8 = _a.sent();
                        console.error("[\u540C\u6B65\u670D\u52A1] \u51B2\u7A81\u89E3\u51B3\u5931\u8D25: ".concat(conflict.key), error_8);
                        resolvedConflicts.push(__assign(__assign({}, conflict), { resolved: false }));
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, resolvedConflicts];
                }
            });
        });
    };
    /**
     * 上传数据（模拟实现）
     */
    DataSyncService.prototype.uploadData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 这里应该实现实际的数据上传逻辑
                        console.log("[\u540C\u6B65\u670D\u52A1] \u4E0A\u4F20\u6570\u636E: ".concat(data.key, " (\u6A21\u62DF)"));
                        // 模拟网络延迟
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                    case 1:
                        // 模拟网络延迟
                        _a.sent();
                        if (!this.syncEndpoint) {
                            console.warn('[同步服务] 未配置同步端点，跳过上传');
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 生成数据哈希
     */
    DataSyncService.prototype.generateHash = function (data) {
        var str = JSON.stringify(data);
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(16);
    };
    /**
     * 获取同步状态
     */
    DataSyncService.prototype.getSyncStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 这里应该实现实际的状态获取逻辑
                return [2 /*return*/, {
                        lastSync: Date.now() - 3600000, // 1小时前
                        pendingUploads: 0,
                        pendingDownloads: 0,
                        conflicts: 0
                    }];
            });
        });
    };
    return DataSyncService;
}());
exports.DataSyncService = DataSyncService;
// 工厂函数
function createDataSyncService(storage, options) {
    return new DataSyncService(storage, options);
}
//# sourceMappingURL=DataSyncService.js.map