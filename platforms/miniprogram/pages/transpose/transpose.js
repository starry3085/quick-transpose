// pages/transpose/transpose.js
const app = getApp()

// 导入共享的转调逻辑
const TransposeEngine = require('../../utils/transpose-engine.js')
const { SIMPLE_KEYS, COMMON_PROGRESSIONS } = require('../../utils/constants.js')
const storage = require('../../utils/storage.js')

Page({
  data: {
    // 系统信息
    systemInfo: {},
    buttonSize: 'medium',
    
    // 表单数据
    progression: '',
    sourceKeyIndex: 6, // G
    targetKeyIndex: 0, // C
    isMinor: false,
    useSeventhChords: false,
    
    // 选项数据
    keys: SIMPLE_KEYS,
    commonProgressions: COMMON_PROGRESSIONS,
    
    // 结果数据
    result: { success: true, data: [], error: '' },
    showComparison: false,
    recentProgressions: []
  },

  onLoad(options) {
    // 获取系统信息
    const systemInfo = app.globalData.systemInfo || {}
    const deviceType = app.globalData.deviceType || 'mobile'
    
    this.setData({
      systemInfo: {
        ...systemInfo,
        isIPhoneX: app.globalData.isIPhoneX
      },
      buttonSize: deviceType === 'mobile' ? 'small' : deviceType === 'tablet' ? 'medium' : 'large'
    })

    // 加载保存的设置
    this.loadSettings()
    
    // 加载最近使用的进行
    this.loadRecentProgressions()

    // 处理从其他页面传入的数据
    if (options.progression) {
      this.setData({
        progression: decodeURIComponent(options.progression)
      })
      this.transposeChords()
    }
  },

  onShow() {
    // 页面显示时重新加载最近使用
    this.loadRecentProgressions()
  },

  // 加载设置
  loadSettings() {
    const settings = storage.get('transposeSettings', {})
    if (settings.sourceKey) {
      const sourceIndex = SIMPLE_KEYS.indexOf(settings.sourceKey)
      if (sourceIndex !== -1) {
        this.setData({ sourceKeyIndex: sourceIndex })
      }
    }
    if (settings.targetKey) {
      const targetIndex = SIMPLE_KEYS.indexOf(settings.targetKey)
      if (targetIndex !== -1) {
        this.setData({ targetKeyIndex: targetIndex })
      }
    }
    if (typeof settings.isMinor === 'boolean') {
      this.setData({ isMinor: settings.isMinor })
    }
    if (typeof settings.useSeventhChords === 'boolean') {
      this.setData({ useSeventhChords: settings.useSeventhChords })
    }
  },

  // 保存设置
  saveSettings() {
    const { sourceKeyIndex, targetKeyIndex, isMinor, useSeventhChords, keys } = this.data
    const settings = {
      sourceKey: keys[sourceKeyIndex],
      targetKey: keys[targetKeyIndex],
      isMinor,
      useSeventhChords
    }
    storage.set('transposeSettings', settings)
  },

  // 加载最近使用的进行
  loadRecentProgressions() {
    const recent = storage.get('recentProgressions', [])
    this.setData({
      recentProgressions: recent.slice(0, 5)
    })
  },

  // 添加到最近使用
  addToRecentProgressions(progression) {
    let recent = storage.get('recentProgressions', [])
    
    // 移除重复项
    recent = recent.filter(item => item !== progression)
    
    // 添加到开头
    recent.unshift(progression)
    
    // 限制数量
    recent = recent.slice(0, 10)
    
    storage.set('recentProgressions', recent)
    this.loadRecentProgressions()
  },

  // 输入事件处理
  onProgressionInput(e) {
    this.setData({
      progression: e.detail.value
    })
    
    // 实时转调（防抖处理）
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer)
    }
    this.debounceTimer = setTimeout(() => {
      if (this.data.progression.trim()) {
        this.transposeChords()
      }
    }, 500)
  },

  // 源调选择
  onSourceKeyChange(e) {
    const index = parseInt(e.detail.value)
    this.setData({
      sourceKeyIndex: index
    })
    this.saveSettings()
    
    if (this.data.progression.trim()) {
      this.transposeChords()
    }
  },

  // 目标调选择
  onTargetKeyChange(e) {
    const index = parseInt(e.detail.value)
    this.setData({
      targetKeyIndex: index
    })
    this.saveSettings()
    
    if (this.data.progression.trim()) {
      this.transposeChords()
    }
  },

  // 小调切换
  onMinorChange(e) {
    this.setData({
      isMinor: e.detail.value
    })
    this.saveSettings()
    
    if (this.data.progression.trim()) {
      this.transposeChords()
    }
  },

  // 七和弦切换
  onSeventhChange(e) {
    this.setData({
      useSeventhChords: e.detail.value
    })
    this.saveSettings()
    
    if (this.data.progression.trim()) {
      this.transposeChords()
    }
  },

  // 执行转调
  transposeChords() {
    const { progression, sourceKeyIndex, targetKeyIndex, isMinor, useSeventhChords, keys } = this.data
    
    if (!progression.trim()) {
      this.setData({
        result: { success: true, data: [], error: '' }
      })
      return
    }

    try {
      const result = TransposeEngine.transpose({
        progression: progression.trim(),
        sourceKey: keys[sourceKeyIndex],
        targetKey: keys[targetKeyIndex],
        isMinor,
        useSeventhChords
      })

      this.setData({
        result
      })

      // 如果转调成功，添加到最近使用
      if (result.success && result.data.length > 0) {
        this.addToRecentProgressions(progression.trim())
      }
    } catch (error) {
      console.error('转调错误:', error)
      this.setData({
        result: {
          success: false,
          data: [],
          error: '转调过程中发生错误，请检查输入格式'
        }
      })
    }
  },

  // 清空输入
  clearInput() {
    this.setData({
      progression: '',
      result: { success: true, data: [], error: '' },
      showComparison: false
    })
  },

  // 填入常用进行
  fillProgression(e) {
    const value = e.currentTarget.dataset.value
    this.setData({
      progression: value
    })
    this.transposeChords()
    
    wx.showToast({
      title: '已填入进行',
      icon: 'success',
      duration: 1500
    })
  },

  // 复制结果
  copyResult() {
    const { result } = this.data
    if (result.success && result.data.length > 0) {
      const chordString = result.data.map(item => item.chord).join(' ')
      
      wx.setClipboardData({
        data: chordString,
        success: () => {
          wx.showToast({
            title: '已复制到剪贴板',
            icon: 'success',
            duration: 1500
          })
        },
        fail: () => {
          wx.showToast({
            title: '复制失败',
            icon: 'none',
            duration: 1500
          })
        }
      })
    }
  },

  // 切换对照显示
  toggleComparison() {
    this.setData({
      showComparison: !this.data.showComparison
    })
  },

  // 交换调性
  swapKeys() {
    const { sourceKeyIndex, targetKeyIndex } = this.data
    this.setData({
      sourceKeyIndex: targetKeyIndex,
      targetKeyIndex: sourceKeyIndex
    })
    this.saveSettings()
    
    if (this.data.progression.trim()) {
      this.transposeChords()
    }
  },

  // 页面卸载时清理定时器
  onUnload() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer)
    }
  }
})