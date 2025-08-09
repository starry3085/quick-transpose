"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEYS = exports.createCrossPlatformStorage = exports.CrossPlatformStorage = void 0;
// 主入口文件，导出所有共享模块
__exportStar(require("./types"), exports);
__exportStar(require("./constants"), exports);
__exportStar(require("./utils"), exports);
__exportStar(require("./state/StateManager"), exports);
__exportStar(require("./sync/DataSyncService"), exports);
// Export storage separately to avoid conflicts
var CrossPlatformStorage_1 = require("./storage/CrossPlatformStorage");
Object.defineProperty(exports, "CrossPlatformStorage", { enumerable: true, get: function () { return CrossPlatformStorage_1.CrossPlatformStorage; } });
Object.defineProperty(exports, "createCrossPlatformStorage", { enumerable: true, get: function () { return CrossPlatformStorage_1.createCrossPlatformStorage; } });
Object.defineProperty(exports, "STORAGE_KEYS", { enumerable: true, get: function () { return CrossPlatformStorage_1.STORAGE_KEYS; } });
//# sourceMappingURL=index.js.map