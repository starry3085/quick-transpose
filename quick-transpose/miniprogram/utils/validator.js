// 输入验证工具
const validator = {
  /**
   * 验证和弦进行输入格式
   * @param {string} input 用户输入的和弦进行
   * @returns {object} 验证结果 {isValid: boolean, message: string}
   */
  validateProgression(input) {
    if (!input || !input.trim()) {
      return {
        isValid: false,
        message: '请输入和弦进行'
      }
    }

    // 检查是否只包含数字、空格和逗号
    const pattern = /^[1-7\s,]+$/
    if (!pattern.test(input.trim())) {
      return {
        isValid: false,
        message: '请输入1-7的数字，用空格或逗号分隔'
      }
    }

    // 检查数字范围
    const numbers = input.split(/[\s,]+/).filter(n => n.trim())
    for (let num of numbers) {
      const n = parseInt(num)
      if (isNaN(n) || n < 1 || n > 7) {
        return {
          isValid: false,
          message: '数字必须在1-7范围内'
        }
      }
    }

    return {
      isValid: true,
      message: '格式正确'
    }
  },

  /**
   * 显示验证错误提示
   * @param {string} message 错误信息
   */
  showError(message) {
    wx.showToast({
      title: message,
      icon: 'none',
      duration: 2000
    })
  },

  /**
   * 显示成功提示
   * @param {string} message 成功信息
   */
  showSuccess(message) {
    wx.showToast({
      title: message,
      icon: 'success',
      duration: 1500
    })
  }
}

module.exports = validator