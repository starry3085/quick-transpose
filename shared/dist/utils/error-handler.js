"use strict";
/**
 * 统一错误处理系统
 * 提供跨平台一致的错误消息和处理机制
 */
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
exports.ERROR_MESSAGES = {
    [exports.ERROR_CODES.EMPTY_PROGRESSION]: {
        code: exports.ERROR_CODES.EMPTY_PROGRESSION,
        message: '和弦进行不能为空',
        type: 'validation',
        severity: 'medium'
    },
    [exports.ERROR_CODES.INVALID_PROGRESSION]: {
        code: exports.ERROR_CODES.INVALID_PROGRESSION,
        message: '请输入有效的和弦进行',
        type: 'validation',
        severity: 'medium'
    },
    [exports.ERROR_CODES.INVALID_KEY]: {
        code: exports.ERROR_CODES.INVALID_KEY,
        message: '不支持的调性',
        type: 'validation',
        severity: 'medium'
    },
    [exports.ERROR_CODES.INVALID_CHORD]: {
        code: exports.ERROR_CODES.INVALID_CHORD,
        message: '无效的和弦格式',
        type: 'validation',
        severity: 'medium'
    },
    [exports.ERROR_CODES.INVALID_DEGREE]: {
        code: exports.ERROR_CODES.INVALID_DEGREE,
        message: '无效的度数，请输入1-7之间的数字',
        type: 'validation',
        severity: 'medium'
    },
    [exports.ERROR_CODES.TRANSPOSE_FAILED]: {
        code: exports.ERROR_CODES.TRANSPOSE_FAILED,
        message: '移调失败',
        type: 'system',
        severity: 'high'
    },
    [exports.ERROR_CODES.STORAGE_ERROR]: {
        code: exports.ERROR_CODES.STORAGE_ERROR,
        message: '数据存储失败',
        type: 'system',
        severity: 'high'
    },
    [exports.ERROR_CODES.PARSE_ERROR]: {
        code: exports.ERROR_CODES.PARSE_ERROR,
        message: '数据解析失败',
        type: 'system',
        severity: 'high'
    },
    [exports.ERROR_CODES.SYNC_FAILED]: {
        code: exports.ERROR_CODES.SYNC_FAILED,
        message: '数据同步失败',
        type: 'network',
        severity: 'medium'
    },
    [exports.ERROR_CODES.CONNECTION_ERROR]: {
        code: exports.ERROR_CODES.CONNECTION_ERROR,
        message: '网络连接失败',
        type: 'network',
        severity: 'high'
    },
    [exports.ERROR_CODES.OPERATION_CANCELLED]: {
        code: exports.ERROR_CODES.OPERATION_CANCELLED,
        message: '操作已取消',
        type: 'user',
        severity: 'low'
    },
    [exports.ERROR_CODES.PERMISSION_DENIED]: {
        code: exports.ERROR_CODES.PERMISSION_DENIED,
        message: '权限不足',
        type: 'user',
        severity: 'high'
    }
};
/**
 * 统一错误处理器
 */
class ErrorHandler {
    /**
     * 设置平台类型
     */
    static setPlatform(platform) {
        this.platform = platform;
    }
    /**
     * 创建标准化错误
     */
    static createError(code, customMessage, context) {
        const baseError = exports.ERROR_MESSAGES[code];
        if (!baseError) {
            return {
                code: 'UNKNOWN_ERROR',
                message: customMessage || '未知错误',
                type: 'system',
                severity: 'medium'
            };
        }
        const error = {
            ...baseError,
            message: customMessage || baseError.message
        };
        // 记录错误日志
        this.logError(error, context);
        return error;
    }
    /**
     * 处理验证错误
     */
    static handleValidationError(code, details) {
        let message = exports.ERROR_MESSAGES[code]?.message || '验证失败';
        if (details && code === exports.ERROR_CODES.INVALID_DEGREE) {
            message = `无效的度数: ${details}，请输入1-7之间的数字`;
        }
        return this.createError(code, message);
    }
    /**
     * 处理系统错误
     */
    static handleSystemError(error, code = exports.ERROR_CODES.TRANSPOSE_FAILED) {
        const errorInfo = this.createError(code, error.message, {
            stack: error.stack,
            name: error.name
        });
        // 在开发环境下输出详细错误信息
        if (process.env.NODE_ENV === 'development') {
            console.error(`[${this.platform}] 系统错误:`, error);
        }
        return errorInfo;
    }
    /**
     * 显示错误消息
     */
    static showError(error) {
        if (this.platform === 'web') {
            // Web平台错误显示
            console.error(`[错误] ${error.message}`, error);
            // 这里可以集成具体的UI错误显示组件
        }
        else {
            // 小程序平台错误显示
            console.error(`[错误] ${error.message}`, error);
            if (typeof wx !== 'undefined' && wx) {
                wx.showToast({
                    title: error.message,
                    icon: 'none',
                    duration: 2000
                });
            }
        }
    }
    /**
     * 记录错误日志
     */
    static logError(error, context) {
        const logEntry = {
            timestamp: Date.now(),
            error,
            context,
            platform: this.platform
        };
        this.errorLog.push(logEntry);
        // 限制日志数量
        if (this.errorLog.length > 100) {
            this.errorLog = this.errorLog.slice(-50);
        }
        // 在开发环境下输出日志
        if (process.env.NODE_ENV === 'development') {
            console.log(`[${this.platform}] 错误日志:`, logEntry);
        }
    }
    /**
     * 获取错误日志
     */
    static getErrorLog() {
        return [...this.errorLog];
    }
    /**
     * 清空错误日志
     */
    static clearErrorLog() {
        this.errorLog = [];
    }
    /**
     * 获取错误统计
     */
    static getErrorStats() {
        const now = Date.now();
        const oneHourAgo = now - 60 * 60 * 1000;
        const byType = {};
        const bySeverity = {};
        let recent = 0;
        this.errorLog.forEach(entry => {
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
            byType,
            bySeverity,
            recent
        };
    }
}
exports.ErrorHandler = ErrorHandler;
ErrorHandler.platform = 'web';
ErrorHandler.errorLog = [];
/**
 * 便捷的错误创建函数
 */
const createValidationError = (code, details) => ErrorHandler.handleValidationError(code, details);
exports.createValidationError = createValidationError;
const createSystemError = (error, code) => ErrorHandler.handleSystemError(error, code);
exports.createSystemError = createSystemError;
const showError = (error) => ErrorHandler.showError(error);
exports.showError = showError;
/**
 * 错误边界装饰器（用于类方法）
 */
function withErrorHandling(errorCode = exports.ERROR_CODES.TRANSPOSE_FAILED) {
    return function (target, propertyName, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            try {
                const result = method.apply(this, args);
                // 处理Promise返回值
                if (result && typeof result.then === 'function') {
                    return result.catch((error) => {
                        const errorInfo = ErrorHandler.handleSystemError(error, errorCode);
                        throw errorInfo;
                    });
                }
                return result;
            }
            catch (error) {
                const errorInfo = ErrorHandler.handleSystemError(error, errorCode);
                throw errorInfo;
            }
        };
        return descriptor;
    };
}
//# sourceMappingURL=error-handler.js.map