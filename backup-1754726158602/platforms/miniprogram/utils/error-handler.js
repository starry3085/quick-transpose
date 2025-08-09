// utils/error-handler.js
// 统一错误处理系统 - 小程序版本
// 基于 shared/utils/error-handler.ts 的逻辑实现

/**
 * 错误代码常量
 */
const ERROR_CODES = {
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
}

/**
 * 统一错误消息映射
 */
const ERROR_MESSAGES = {
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
}

/**
 * 统一错误处理器
 */
class ErrorHandler {
  constructor() {
    this.platform = 'miniprogram'
    this.errorLog = []
  }

  /**
   * 创建标准化错误
   */
  createError(code, customMessage, context) {
    const baseError = ERROR_MESSAGES[code]
    if (!baseError) {
      return {
        code: 'UNKNOWN_ERROR',
        message: customMessage || '未知错误',
        type: 'system',
        severity: 'medium'
      }
    }

    const error = {
      ...baseError,
      message: customMessage || baseError.message
    }

    // 记录错误日志
    this.logError(error, context)

    return error
  }

  /**
   * 处理验证错误
   */
  handleValidationError(code, details) {
    let message = ERROR_MESSAGES[code]?.message || '验证失败'
    
    if (details && code === ERROR_CODES.INVALID_DEGREE) {
      message = `无效的度数: ${details}，请输入1-7之间的数字`
    }

    return this.createError(code, message)
  }

  /**
   * 处理系统错误
   */
  handleSystemError(error, code = ERROR_CODES.TRANSPOSE_FAILED) {
    const errorInfo = this.createError(code, error.message, {
      stack: error.stack,
      name: error.name
    })

    // 输出详细错误信息
    console.error(`[${this.platform}] 系统错误:`, error)

    return errorInfo
  }

  /**
   * 显示错误消息
   */
  showError(error) {
    console.error(`[错误] ${error.message}`, error)
    
    // 小程序平台错误显示
    if (typeof wx !== 'undefined') {
      wx.showToast({
        title: error.message,
        icon: 'none',
        duration: 2000
      })
    }
  }

  /**
   * 记录错误日志
   */
  logError(error, context) {
    const logEntry = {
      timestamp: Date.now(),
      error,
      context,
      platform: this.platform
    }

    this.errorLog.push(logEntry)

    // 限制日志数量
    if (this.errorLog.length > 100) {
      this.errorLog = this.errorLog.slice(-50)
    }

    // 输出日志
    console.log(`[${this.platform}] 错误日志:`, logEntry)
  }

  /**
   * 获取错误日志
   */
  getErrorLog() {
    return [...this.errorLog]
  }

  /**
   * 清空错误日志
   */
  clearErrorLog() {
    this.errorLog = []
  }

  /**
   * 获取错误统计
   */
  getErrorStats() {
    const now = Date.now()
    const oneHourAgo = now - 60 * 60 * 1000

    const byType = {}
    const bySeverity = {}
    let recent = 0

    this.errorLog.forEach(entry => {
      // 按类型统计
      byType[entry.error.type] = (byType[entry.error.type] || 0) + 1
      
      // 按严重程度统计
      bySeverity[entry.error.severity] = (bySeverity[entry.error.severity] || 0) + 1
      
      // 最近一小时的错误
      if (entry.timestamp > oneHourAgo) {
        recent++
      }
    })

    return {
      total: this.errorLog.length,
      byType,
      bySeverity,
      recent
    }
  }
}

// 创建全局错误处理器实例
const errorHandler = new ErrorHandler()

/**
 * 便捷的错误创建函数
 */
const createValidationError = (code, details) => 
  errorHandler.handleValidationError(code, details)

const createSystemError = (error, code) => 
  errorHandler.handleSystemError(error, code)

const showError = (error) => 
  errorHandler.showError(error)

module.exports = {
  ERROR_CODES,
  ERROR_MESSAGES,
  ErrorHandler,
  errorHandler,
  createValidationError,
  createSystemError,
  showError
}