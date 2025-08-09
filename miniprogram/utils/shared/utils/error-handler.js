"use strict";
/**
 * 统一错误处理系统
 * 提供跨平台一致的错误消息和处理机制
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.showError = exports.createSystemError = exports.createValidationError = exports.ErrorHandler = exports.ERROR_MESSAGES = exports.ERROR_CODES = void 0;
exports.withErrorHandling = withErrorHandling;
/**
 * 错误代码常量
 */
exports.ERROR_CODES = {
    // 输入验证错误
    EMPTY_PROGRESSION: 'EMPTY_PROGRESSION',
    INVALID_PROGRESSION: 'INVALID_PROGRESSION',
    INVALID_KEY: 'INVALID_KEY',
    INVALID_CHORD: 'INVALID_CHORD',
    INVALID_DEGREE: 'INVALID_DEGREE',
    // 系统错误
    TRANSPOSE_FAILED: 'TRANSPOSE_FAILED',
    STORAGE_ERROR: 'STORAGE_ERROR',
    PARSE_ERROR: 'PARSE_ERROR',
    // 网络错误
    SYNC_FAILED: 'SYNC_FAILED',
    CONNECTION_ERROR: 'CONNECTION_ERROR',
    // 用户操作错误
    OPERATION_CANCELLED: 'OPERATION_CANCELLED',
    PERMISSION_DENIED: 'PERMISSION_DENIED'
};
/**
 * 统一错误消息映射
 */
exports.ERROR_MESSAGES = (_a = {},
    _a[exports.ERROR_CODES.EMPTY_PROGRESSION] = {
        code: exports.ERROR_CODES.EMPTY_PROGRESSION,
        message: '和弦进行不能为空',
        type: 'validation',
        severity: 'medium'
    },
    _a[exports.ERROR_CODES.INVALID_PROGRESSION] = {
        code: exports.ERROR_CODES.INVALID_PROGRESSION,
        message: '请输入有效的和弦进行',
        type: 'validation',
        severity: 'medium'
    },
    _a[exports.ERROR_CODES.INVALID_KEY] = {
        code: exports.ERROR_CODES.INVALID_KEY,
        message: '不支持的调性',
        type: 'validation',
        severity: 'medium'
    },
    _a[exports.ERROR_CODES.INVALID_CHORD] = {
        code: exports.ERROR_CODES.INVALID_CHORD,
        message: '无效的和弦格式',
        type: 'validation',
        severity: 'medium'
    },
    _a[exports.ERROR_CODES.INVALID_DEGREE] = {
        code: exports.ERROR_CODES.INVALID_DEGREE,
        message: '无效的度数，请输入1-7之间的数字',
        type: 'validation',
        severity: 'medium'
    },
    _a[exports.ERROR_CODES.TRANSPOSE_FAILED] = {
        code: exports.ERROR_CODES.TRANSPOSE_FAILED,
        message: '移调失败',
        type: 'system',
        severity: 'high'
    },
    _a[exports.ERROR_CODES.STORAGE_ERROR] = {
        code: exports.ERROR_CODES.STORAGE_ERROR,
        message: '数据存储失败',
        type: 'system',
        severity: 'high'
    },
    _a[exports.ERROR_CODES.PARSE_ERROR] = {
        code: exports.ERROR_CODES.PARSE_ERROR,
        message: '数据解析失败',
        type: 'system',
        severity: 'high'
    },
    _a[exports.ERROR_CODES.SYNC_FAILED] = {
        code: exports.ERROR_CODES.SYNC_FAILED,
        message: '数据同步失败',
        type: 'network',
        severity: 'medium'
    },
    _a[exports.ERROR_CODES.CONNECTION_ERROR] = {
        code: exports.ERROR_CODES.CONNECTION_ERROR,
        message: '网络连接失败',
        type: 'network',
        severity: 'high'
    },
    _a[exports.ERROR_CODES.OPERATION_CANCELLED] = {
        code: exports.ERROR_CODES.OPERATION_CANCELLED,
        message: '操作已取消',
        type: 'user',
        severity: 'low'
    },
    _a[exports.ERROR_CODES.PERMISSION_DENIED] = {
        code: exports.ERROR_CODES.PERMISSION_DENIED,
        message: '权限不足',
        type: 'user',
        severity: 'high'
    },
    _a);
/**
 * 统一错误处理器
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    /**
     * 设置平台类型
     */
    ErrorHandler.setPlatform = function (platform) {
        this.platform = platform;
    };
    /**
     * 创建标准化错误
     */
    ErrorHandler.createError = function (code, customMessage, context) {
        var baseError = exports.ERROR_MESSAGES[code];
        if (!baseError) {
            return {
                code: 'UNKNOWN_ERROR',
                message: customMessage || '未知错误',
                type: 'system',
                severity: 'medium'
            };
        }
        var error = __assign(__assign({}, baseError), { message: customMessage || baseError.message });
        // 记录错误日志
        this.logError(error, context);
        return error;
    };
    /**
     * 处理验证错误
     */
    ErrorHandler.handleValidationError = function (code, details) {
        var _a;
        var message = ((_a = exports.ERROR_MESSAGES[code]) === null || _a === void 0 ? void 0 : _a.message) || '验证失败';
        if (details && code === exports.ERROR_CODES.INVALID_DEGREE) {
            message = "\u65E0\u6548\u7684\u5EA6\u6570: ".concat(details, "\uFF0C\u8BF7\u8F93\u51651-7\u4E4B\u95F4\u7684\u6570\u5B57");
        }
        return this.createError(code, message);
    };
    /**
     * 处理系统错误
     */
    ErrorHandler.handleSystemError = function (error, code) {
        if (code === void 0) { code = exports.ERROR_CODES.TRANSPOSE_FAILED; }
        var errorInfo = this.createError(code, error.message, {
            stack: error.stack,
            name: error.name
        });
        // 在开发环境下输出详细错误信息
        if (process.env.NODE_ENV === 'development') {
            console.error("[".concat(this.platform, "] \u7CFB\u7EDF\u9519\u8BEF:"), error);
        }
        return errorInfo;
    };
    /**
     * 显示错误消息
     */
    ErrorHandler.showError = function (error) {
        if (this.platform === 'web') {
            // Web平台错误显示
            console.error("[\u9519\u8BEF] ".concat(error.message), error);
            // 这里可以集成具体的UI错误显示组件
        }
        else {
            // 小程序平台错误显示
            console.error("[\u9519\u8BEF] ".concat(error.message), error);
            if (typeof wx !== 'undefined' && wx) {
                wx.showToast({
                    title: error.message,
                    icon: 'none',
                    duration: 2000
                });
            }
        }
    };
    /**
     * 记录错误日志
     */
    ErrorHandler.logError = function (error, context) {
        var logEntry = {
            timestamp: Date.now(),
            error: error,
            context: context,
            platform: this.platform
        };
        this.errorLog.push(logEntry);
        // 限制日志数量
        if (this.errorLog.length > 100) {
            this.errorLog = this.errorLog.slice(-50);
        }
        // 在开发环境下输出日志
        if (process.env.NODE_ENV === 'development') {
            console.log("[".concat(this.platform, "] \u9519\u8BEF\u65E5\u5FD7:"), logEntry);
        }
    };
    /**
     * 获取错误日志
     */
    ErrorHandler.getErrorLog = function () {
        return __spreadArray([], this.errorLog, true);
    };
    /**
     * 清空错误日志
     */
    ErrorHandler.clearErrorLog = function () {
        this.errorLog = [];
    };
    /**
     * 获取错误统计
     */
    ErrorHandler.getErrorStats = function () {
        var now = Date.now();
        var oneHourAgo = now - 60 * 60 * 1000;
        var byType = {};
        var bySeverity = {};
        var recent = 0;
        this.errorLog.forEach(function (entry) {
            // 按类型统计
            byType[entry.error.type] = (byType[entry.error.type] || 0) + 1;
            // 按严重程度统计
            bySeverity[entry.error.severity] = (bySeverity[entry.error.severity] || 0) + 1;
            // 最近一小时的错误
            if (entry.timestamp > oneHourAgo) {
                recent++;
            }
        });
        return {
            total: this.errorLog.length,
            byType: byType,
            bySeverity: bySeverity,
            recent: recent
        };
    };
    ErrorHandler.platform = 'web';
    ErrorHandler.errorLog = [];
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
/**
 * 便捷的错误创建函数
 */
var createValidationError = function (code, details) {
    return ErrorHandler.handleValidationError(code, details);
};
exports.createValidationError = createValidationError;
var createSystemError = function (error, code) {
    return ErrorHandler.handleSystemError(error, code);
};
exports.createSystemError = createSystemError;
var showError = function (error) {
    return ErrorHandler.showError(error);
};
exports.showError = showError;
/**
 * 错误边界装饰器（用于类方法）
 */
function withErrorHandling(errorCode) {
    if (errorCode === void 0) { errorCode = exports.ERROR_CODES.TRANSPOSE_FAILED; }
    return function (target, propertyName, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                var result = method.apply(this, args);
                // 处理Promise返回值
                if (result && typeof result.then === 'function') {
                    return result.catch(function (error) {
                        var errorInfo = ErrorHandler.handleSystemError(error, errorCode);
                        throw errorInfo;
                    });
                }
                return result;
            }
            catch (error) {
                var errorInfo = ErrorHandler.handleSystemError(error, errorCode);
                throw errorInfo;
            }
        };
        return descriptor;
    };
}
//# sourceMappingURL=error-handler.js.map