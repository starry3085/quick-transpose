/**
 * 统一错误处理系统
 * 提供跨平台一致的错误消息和处理机制
 */

/**
 * 错误代码常量
 */
export const ERROR_CODES = {
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
} as const;

/**
 * 统一错误消息映射
 */
export const ERROR_MESSAGES: Record<string, ErrorInfo> = {
  [ERROR_CODES.EMPTY_PROGRESSION]: {
    code: ERROR_CODES.EMPTY_PROGRESSION,
    message: '和弦进行不能为空',
    type: 'validation',
    severity: 'medium'
  },
  [ERROR_CODES.INVALID_PROGRESSION]: {
    code: ERROR_CODES.INVALID_PROGRESSION,
    message: '请输入有效的和弦进行',
    type: 'validation',
    severity: 'medium'
  },
  [ERROR_CODES.INVALID_KEY]: {
    code: ERROR_CODES.INVALID_KEY,
    message: '不支持的调性',
    type: 'validation',
    severity: 'medium'
  },
  [ERROR_CODES.INVALID_CHORD]: {
    code: ERROR_CODES.INVALID_CHORD,
    message: '无效的和弦格式',
    type: 'validation',
    severity: 'medium'
  },
  [ERROR_CODES.INVALID_DEGREE]: {
    code: ERROR_CODES.INVALID_DEGREE,
    message: '无效的度数，请输入1-7之间的数字',
    type: 'validation',
    severity: 'medium'
  },
  [ERROR_CODES.TRANSPOSE_FAILED]: {
    code: ERROR_CODES.TRANSPOSE_FAILED,
    message: '移调失败',
    type: 'system',
    severity: 'high'
  },
  [ERROR_CODES.STORAGE_ERROR]: {
    code: ERROR_CODES.STORAGE_ERROR,
    message: '数据存储失败',
    type: 'system',
    severity: 'high'
  },
  [ERROR_CODES.PARSE_ERROR]: {
    code: ERROR_CODES.PARSE_ERROR,
    message: '数据解析失败',
    type: 'system',
    severity: 'high'
  },
  [ERROR_CODES.SYNC_FAILED]: {
    code: ERROR_CODES.SYNC_FAILED,
    message: '数据同步失败',
    type: 'network',
    severity: 'medium'
  },
  [ERROR_CODES.CONNECTION_ERROR]: {
    code: ERROR_CODES.CONNECTION_ERROR,
    message: '网络连接失败',
    type: 'network',
    severity: 'high'
  },
  [ERROR_CODES.OPERATION_CANCELLED]: {
    code: ERROR_CODES.OPERATION_CANCELLED,
    message: '操作已取消',
    type: 'user',
    severity: 'low'
  },
  [ERROR_CODES.PERMISSION_DENIED]: {
    code: ERROR_CODES.PERMISSION_DENIED,
    message: '权限不足',
    type: 'user',
    severity: 'high'
  }
};

/**
 * 统一错误处理器
 */
export class ErrorHandler {
  private static platform: 'web' | 'miniprogram' = 'web';
  private static errorLog: Array<{ timestamp: number; error: ErrorInfo; context?: any }> = [];

  /**
   * 设置平台类型
   */
  static setPlatform(platform: 'web' | 'miniprogram'): void {
    this.platform = platform;
  }

  /**
   * 创建标准化错误
   * @param {string} code 错误代码
   * @param {string} customMessage 自定义消息
   * @param {any} context 上下文信息
   * @returns {Object} 错误信息
   */
  static createError(code, customMessage, context) {
    const baseError = ERROR_MESSAGES[code];
    if (!baseError) {
      return {
        code: 'UNKNOWN_ERROR',
        message: customMessage || '未知错误',
        type: 'system',
        severity: 'medium'
      };
    }

    const error: ErrorInfo = {
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
  static handleValidationError(code: string, details?: string): ErrorInfo {
    let message = ERROR_MESSAGES[code]?.message || '验证失败';
    
    if (details && code === ERROR_CODES.INVALID_DEGREE) {
      message = `无效的度数: ${details}，请输入1-7之间的数字`;
    }

    return this.createError(code, message);
  }

  /**
   * 处理系统错误
   * @param {Error} error 错误对象
   * @param {string} code 错误代码
   * @returns {Object} 错误信息
   */
  static handleSystemError(error, code = ERROR_CODES.TRANSPOSE_FAILED) {
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
  static showError(error: ErrorInfo): void {
    if (this.platform === 'web') {
      // Web平台错误显示
      console.error(`[错误] ${error.message}`, error);
      // 这里可以集成具体的UI错误显示组件
    } else {
      // 小程序平台错误显示
      console.error(`[错误] ${error.message}`, error);
      if (typeof wx !== 'undefined') {
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
  private static logError(error: ErrorInfo, context?: any): void {
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
   * @returns {Array} 错误日志数组
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
   * @returns {Object} 错误统计信息
   */
  static getErrorStats() {
    const now = Date.now();
    const oneHourAgo = now - 60 * 60 * 1000;

    const byType: Record<string, number> = {};
    const bySeverity: Record<string, number> = {};
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

/**
 * 便捷的错误创建函数
 */
export const createValidationError = (code: string, details?: string) => 
  ErrorHandler.handleValidationError(code, details);

export const createSystemError = (error: Error, code?: string) => 
  ErrorHandler.handleSystemError(error, code);

export const showError = (error: ErrorInfo) => 
  ErrorHandler.showError(error);

/**
 * 错误边界装饰器（用于类方法）
 */
export function withErrorHandling(errorCode: string = ERROR_CODES.TRANSPOSE_FAILED) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
      } catch (error) {
        const errorInfo = ErrorHandler.handleSystemError(error, errorCode);
        throw errorInfo;
      }
    };

    return descriptor;
  };
}