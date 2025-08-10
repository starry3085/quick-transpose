/**
 * 跨平台存储抽象层
 */

/**
 * Web平台存储适配器
 */
export class WebStorageAdapter {
  /**
   * 获取存储值
   * @param {string} key 键名
   * @param {any} defaultValue 默认值
   * @returns {any} 存储值
   */
  get(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return defaultValue || null;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error('Storage get error:', error);
      return defaultValue || null;
    }
  }

  /**
   * 设置存储值
   * @param {string} key 键名
   * @param {any} value 值
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage set error:', error);
    }
  }

  /**
   * 删除存储值
   * @param {string} key 键名
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Storage remove error:', error);
    }
  }

  /**
   * 清空存储
   */
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Storage clear error:', error);
    }
  }
}

/**
 * 小程序存储适配器
 */
export class MiniprogramStorageAdapter {
  /**
   * 获取存储值
   * @param {string} key 键名
   * @param {any} defaultValue 默认值
   * @returns {any} 存储值
   */
  get(key, defaultValue) {
    try {
      const value = globalThis.wx?.getStorageSync(key);
      return value || defaultValue || null;
    } catch (error) {
      console.error('Miniprogram storage get error:', error);
      return defaultValue || null;
    }
  }

  /**
   * 设置存储值
   * @param {string} key 键名
   * @param {any} value 值
   */
  set(key, value) {
    try {
      globalThis.wx?.setStorageSync(key, value);
    } catch (error) {
      console.error('Miniprogram storage set error:', error);
    }
  }

  /**
   * 删除存储值
   * @param {string} key 键名
   */
  remove(key) {
    try {
      globalThis.wx?.removeStorageSync(key);
    } catch (error) {
      console.error('Miniprogram storage remove error:', error);
    }
  }

  /**
   * 清空存储
   */
  clear() {
    try {
      globalThis.wx?.clearStorageSync();
    } catch (error) {
      console.error('Miniprogram storage clear error:', error);
    }
  }
}

/**
 * 存储管理器
 */
export class StorageManager {
  /**
   * 构造函数
   * @param {Object} adapter 存储适配器
   */
  constructor(adapter) {
    this.adapter = adapter;
  }

  /**
   * 保存移调设置
   * @param {Object} settings 设置对象
   */
  saveTransposeSettings(settings) {
    this.adapter.set('transpose_settings', settings);
  }

  /**
   * 获取移调设置
   * @returns {Object|null} 设置对象
   */
  getTransposeSettings() {
    return this.adapter.get('transpose_settings', {
      sourceKey: 'C',
      targetKey: 'G',
      isMinor: false,
      useSeventhChords: false
    });
  }

  /**
   * 保存最近使用的进行
   * @param {string[]} progressions 进行数组
   */
  saveRecentProgressions(progressions) {
    // 限制最多保存10个
    const limited = progressions.slice(0, 10);
    this.adapter.set('recent_progressions', limited);
  }

  /**
   * 获取最近使用的进行
   * @returns {string[]} 进行数组
   */
  getRecentProgressions() {
    return this.adapter.get('recent_progressions', []) || [];
  }

  /**
   * 添加到最近使用
   * @param {string} progression 进行字符串
   */
  addRecentProgression(progression) {
    const recent = this.getRecentProgressions();
    const filtered = recent.filter(p => p !== progression);
    filtered.unshift(progression);
    this.saveRecentProgressions(filtered);
  }

  /**
   * 保存收藏的进行
   * @param {string[]} progressions 进行数组
   */
  saveFavoriteProgressions(progressions) {
    this.adapter.set('favorite_progressions', progressions);
  }

  /**
   * 获取收藏的进行
   * @returns {string[]} 进行数组
   */
  getFavoriteProgressions() {
    return this.adapter.get('favorite_progressions', []) || [];
  }

  /**
   * 切换收藏状态
   * @param {string} progression 进行字符串
   * @returns {boolean} 是否已收藏
   */
  toggleFavoriteProgression(progression) {
    const favorites = this.getFavoriteProgressions();
    const index = favorites.indexOf(progression);
    
    if (index >= 0) {
      favorites.splice(index, 1);
      this.saveFavoriteProgressions(favorites);
      return false; // 已取消收藏
    } else {
      favorites.push(progression);
      this.saveFavoriteProgressions(favorites);
      return true; // 已添加收藏
    }
  }
}

/**
 * 创建平台适配的存储管理器
 * @returns {StorageManager} 存储管理器实例
 */
export function createStorageManager() {
  // 检测运行环境
  const wx = globalThis.wx;
  if (typeof wx !== 'undefined' && wx.getStorageSync) {
    // 小程序环境
    return new StorageManager(new MiniprogramStorageAdapter());
  } else if (typeof localStorage !== 'undefined') {
    // Web环境
    return new StorageManager(new WebStorageAdapter());
  } else {
    // 降级处理，使用内存存储
    console.warn('No storage available, using memory storage');
    return new StorageManager(new MemoryStorageAdapter());
  }
}

/**
 * 内存存储适配器（降级方案）
 */
class MemoryStorageAdapter {
  constructor() {
    this.storage = new Map();
  }

  /**
   * 获取存储值
   * @param {string} key 键名
   * @param {any} defaultValue 默认值
   * @returns {any} 存储值
   */
  get(key, defaultValue) {
    return this.storage.get(key) || defaultValue || null;
  }

  /**
   * 设置存储值
   * @param {string} key 键名
   * @param {any} value 值
   */
  set(key, value) {
    this.storage.set(key, value);
  }

  /**
   * 删除存储值
   * @param {string} key 键名
   */
  remove(key) {
    this.storage.delete(key);
  }

  /**
   * 清空存储
   */
  clear() {
    this.storage.clear();
  }
}