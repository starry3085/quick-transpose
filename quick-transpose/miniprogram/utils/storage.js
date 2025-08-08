// 安全的本地存储工具
const storage = {
  /**
   * 安全获取存储数据
   * @param {string} key 存储键名
   * @param {any} defaultValue 默认值
   * @returns {any} 存储的数据或默认值
   */
  get(key, defaultValue = null) {
    try {
      const value = wx.getStorageSync(key)
      return value !== '' ? value : defaultValue
    } catch (error) {
      console.error('Storage get error:', error)
      wx.showToast({
        title: '数据读取失败',
        icon: 'none',
        duration: 2000
      })
      return defaultValue
    }
  },

  /**
   * 安全设置存储数据
   * @param {string} key 存储键名
   * @param {any} value 要存储的数据
   * @returns {boolean} 是否存储成功
   */
  set(key, value) {
    try {
      wx.setStorageSync(key, value)
      return true
    } catch (error) {
      console.error('Storage set error:', error)
      wx.showToast({
        title: '数据保存失败',
        icon: 'none',
        duration: 2000
      })
      return false
    }
  },

  /**
   * 安全删除存储数据
   * @param {string} key 存储键名
   * @returns {boolean} 是否删除成功
   */
  remove(key) {
    try {
      wx.removeStorageSync(key)
      return true
    } catch (error) {
      console.error('Storage remove error:', error)
      return false
    }
  },

  /**
   * 清空所有存储数据
   * @returns {boolean} 是否清空成功
   */
  clear() {
    try {
      wx.clearStorageSync()
      return true
    } catch (error) {
      console.error('Storage clear error:', error)
      return false
    }
  }
}

module.exports = storage