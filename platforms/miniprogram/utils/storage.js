// utils/storage.js
// 跨平台存储系统 - 小程序版本
// 基于 shared/storage/CrossPlatformStorage.ts 的逻辑实现

const { STORAGE_KEYS } = require('./constants.js')

/**
 * 小程序存储适配器 - 与shared模块保持一致的接口
 */
class MiniprogramStorageAdapter {
  async getItem(key) {
    return new Promise((resolve) => {
      try {
        wx.getStorage({
          key,
          success: (res) => resolve(res.data),
          fail: () => resolve(null)
        })
      } catch (error) {
        console.error('小程序存储读取失败:', error)
        resolve(null)
      }
    })
  }

  async setItem(key, value) {
    return new Promise((resolve, reject) => {
      try {
        wx.setStorage({
          key,
          data: value,
          success: () => resolve(),
          fail: (error) => reject(error)
        })
      } catch (error) {
        console.error('小程序存储写入失败:', error)
        reject(error)
      }
    })
  }

  async removeItem(key) {
    return new Promise((resolve, reject) => {
      try {
        wx.removeStorage({
          key,
          success: () => resolve(),
          fail: (error) => reject(error)
        })
      } catch (error) {
        console.error('小程序存储删除失败:', error)
        reject(error)
      }
    })
  }

  async clear() {
    return new Promise((resolve, reject) => {
      try {
        wx.clearStorage({
          success: () => resolve(),
          fail: (error) => reject(error)
        })
      } catch (error) {
        console.error('小程序存储清空失败:', error)
        reject(error)
      }
    })
  }

  async getAllKeys() {
    return new Promise((resolve) => {
      try {
        wx.getStorageInfo({
          success: (res) => resolve(res.keys),
          fail: () => resolve([])
        })
      } catch (error) {
        console.error('小程序存储获取键列表失败:', error)
        resolve([])
      }
    })
  }
}

/**
 * 跨平台存储管理器 - 小程序版本
 * 与 shared/storage/CrossPlatformStorage.ts 保持一致的API
 */
class CrossPlatformStorage {
  constructor(syncOptions = {}) {
    this.adapter = new MiniprogramStorageAdapter()
    this.platform = 'miniprogram'
    this.syncOptions = {
      enableSync: false,
      syncInterval: 30000, // 30秒
      maxRetries: 3,
      conflictResolution: 'timestamp',
      ...syncOptions
    }
  }

  /**
   * 存储数据
   */
  async setItem(key, data) {
    const storageItem = {
      data,
      timestamp: Date.now(),
      version: 1,
      platform: this.platform,
      checksum: this.generateChecksum(data)
    }

    const serializedData = JSON.stringify(storageItem)
    await this.adapter.setItem(key, serializedData)
    
    console.log(`[存储] 已保存数据: ${key} (${this.platform})`)
  }

  /**
   * 读取数据
   */
  async getItem(key) {
    try {
      const serializedData = await this.adapter.getItem(key)
      if (!serializedData) {
        return null
      }

      const storageItem = JSON.parse(serializedData)
      
      // 验证数据完整性
      if (this.validateChecksum(storageItem.data, storageItem.checksum)) {
        console.log(`[存储] 已读取数据: ${key} (${this.platform})`)
        return storageItem.data
      } else {
        console.warn(`[存储] 数据校验失败: ${key}`)
        return null
      }
    } catch (error) {
      console.error(`[存储] 读取数据失败: ${key}`, error)
      return null
    }
  }

  /**
   * 删除数据
   */
  async removeItem(key) {
    await this.adapter.removeItem(key)
    console.log(`[存储] 已删除数据: ${key} (${this.platform})`)
  }

  /**
   * 清空所有数据
   */
  async clear() {
    await this.adapter.clear()
    console.log(`[存储] 已清空所有数据 (${this.platform})`)
  }

  /**
   * 获取所有键
   */
  async getAllKeys() {
    return await this.adapter.getAllKeys()
  }

  /**
   * 批量操作
   */
  async batchSet(items) {
    const promises = Object.entries(items).map(([key, value]) => 
      this.setItem(key, value)
    )
    await Promise.all(promises)
    console.log(`[存储] 批量保存完成: ${Object.keys(items).length} 项`)
  }

  async batchGet(keys) {
    const promises = keys.map(async (key) => ({
      key,
      value: await this.getItem(key)
    }))
    
    const results = await Promise.all(promises)
    const batchResult = {}
    
    results.forEach(({ key, value }) => {
      batchResult[key] = value
    })
    
    console.log(`[存储] 批量读取完成: ${keys.length} 项`)
    return batchResult
  }

  /**
   * 生成数据校验和
   */
  generateChecksum(data) {
    const str = JSON.stringify(data)
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // 转换为32位整数
    }
    return hash.toString(16)
  }

  /**
   * 验证数据校验和
   */
  validateChecksum(data, checksum) {
    if (!checksum) return true // 如果没有校验和，认为有效
    return this.generateChecksum(data) === checksum
  }

  /**
   * 获取存储统计信息
   */
  async getStorageStats() {
    const keys = await this.getAllKeys()
    let totalSize = 0
    
    for (const key of keys) {
      const data = await this.adapter.getItem(key)
      if (data) {
        totalSize += data.length
      }
    }

    return {
      totalKeys: keys.length,
      totalSize,
      platform: this.platform
    }
  }
}

// 创建全局存储实例
const storage = new CrossPlatformStorage()

// 兼容旧API的简化接口
const legacyStorage = {
  // 获取存储数据 - 兼容旧版本同步API
  get(key, defaultValue = null) {
    try {
      const value = wx.getStorageSync(key)
      if (value !== '') {
        // 尝试解析新格式数据
        try {
          const parsed = JSON.parse(value)
          if (parsed && typeof parsed === 'object' && parsed.data !== undefined) {
            return parsed.data
          }
          return value
        } catch {
          return value
        }
      }
      return defaultValue
    } catch (error) {
      console.error('Storage get error:', error)
      return defaultValue
    }
  },

  // 设置存储数据 - 兼容旧版本同步API
  set(key, value) {
    try {
      wx.setStorageSync(key, value)
      return true
    } catch (error) {
      console.error('Storage set error:', error)
      return false
    }
  },

  // 删除存储数据
  remove(key) {
    try {
      wx.removeStorageSync(key)
      return true
    } catch (error) {
      console.error('Storage remove error:', error)
      return false
    }
  },

  // 清空所有存储数据
  clear() {
    try {
      wx.clearStorageSync()
      return true
    } catch (error) {
      console.error('Storage clear error:', error)
      return false
    }
  },

  // 获取存储信息
  getInfo() {
    try {
      return wx.getStorageInfoSync()
    } catch (error) {
      console.error('Storage getInfo error:', error)
      return {
        keys: [],
        currentSize: 0,
        limitSize: 0
      }
    }
  }
}

// 导出新的跨平台存储和兼容的旧接口
module.exports = {
  // 新的跨平台存储系统
  CrossPlatformStorage,
  storage,
  STORAGE_KEYS,
  
  // 兼容旧版本的简化接口
  ...legacyStorage
}