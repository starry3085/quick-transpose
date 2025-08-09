/**
 * 统一错误处理系统
 * 提供跨平台一致的错误消息和处理机制
 */
export interface ErrorInfo {
    code: string;
    message: string;
    type: 'validation' | 'system' | 'network' | 'user';
    severity: 'low' | 'medium' | 'high' | 'critical';
}
/**
 * 错误代码常量
 */
export declare const ERROR_CODES: {
    readonly EMPTY_PROGRESSION: "EMPTY_PROGRESSION";
    readonly INVALID_PROGRESSION: "INVALID_PROGRESSION";
    readonly INVALID_KEY: "INVALID_KEY";
    readonly INVALID_CHORD: "INVALID_CHORD";
    readonly INVALID_DEGREE: "INVALID_DEGREE";
    readonly TRANSPOSE_FAILED: "TRANSPOSE_FAILED";
    readonly STORAGE_ERROR: "STORAGE_ERROR";
    readonly PARSE_ERROR: "PARSE_ERROR";
    readonly SYNC_FAILED: "SYNC_FAILED";
    readonly CONNECTION_ERROR: "CONNECTION_ERROR";
    readonly OPERATION_CANCELLED: "OPERATION_CANCELLED";
    readonly PERMISSION_DENIED: "PERMISSION_DENIED";
};
/**
 * 统一错误消息映射
 */
export declare const ERROR_MESSAGES: Record<string, ErrorInfo>;
/**
 * 统一错误处理器
 */
export declare class ErrorHandler {
    private static platform;
    private static errorLog;
    /**
     * 设置平台类型
     */
    static setPlatform(platform: 'web' | 'miniprogram'): void;
    /**
     * 创建标准化错误
     */
    static createError(code: string, customMessage?: string, context?: any): ErrorInfo;
    /**
     * 处理验证错误
     */
    static handleValidationError(code: string, details?: string): ErrorInfo;
    /**
     * 处理系统错误
     */
    static handleSystemError(error: Error, code?: string): ErrorInfo;
    /**
     * 显示错误消息
     */
    static showError(error: ErrorInfo): void;
    /**
     * 记录错误日志
     */
    private static logError;
    /**
     * 获取错误日志
     */
    static getErrorLog(): Array<{
        timestamp: number;
        error: ErrorInfo;
        context?: any;
    }>;
    /**
     * 清空错误日志
     */
    static clearErrorLog(): void;
    /**
     * 获取错误统计
     */
    static getErrorStats(): {
        total: number;
        byType: Record<string, number>;
        bySeverity: Record<string, number>;
        recent: number;
    };
}
/**
 * 便捷的错误创建函数
 */
export declare const createValidationError: (code: string, details?: string) => ErrorInfo;
export declare const createSystemError: (error: Error, code?: string) => ErrorInfo;
export declare const showError: (error: ErrorInfo) => void;
/**
 * 错误边界装饰器（用于类方法）
 */
export declare function withErrorHandling(errorCode?: string): (target: any, propertyName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
//# sourceMappingURL=error-handler.d.ts.map