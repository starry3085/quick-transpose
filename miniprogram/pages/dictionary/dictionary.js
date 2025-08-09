// pages/dictionary/dictionary.js
const app = getApp()

const TransposeEngine = require('../../utils/transpose-engine.js')
const { SIMPLE_KEYS, DEGREE_NAMES } = require('../../utils/constants.js')

Page({
  data: {
    // 系统信息
    systemInfo: {},
    buttonSize: 'medium',
    
    // 选择数据
    keys: SIMPLE_KEYS,
    selectedKeyIndex: 0, // C
    isMinor: false,
    
    // 和弦数据
    chords: [],
    romanNumerals: [],
    degreeNames: DEGREE_NAMES
  },

  onLoad() {
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

    // 初始化和弦数据
    this.updateChords()
  },

  // 更新和弦数据
  updateChords() {
    const { selectedKeyIndex, isMinor, keys } = this.data
    const selectedKey = keys[selectedKeyIndex]
    
    const chords = TransposeEngine.getChordsByKey(selectedKey, isMinor)
    const romanNumerals = TransposeEngine.getRomanNumerals(isMinor)
    
    this.setData({
      chords,
      romanNumerals
    })
  },

  // 调性选择
  onKeyChange(e) {
    const index = parseInt(e.detail.value)
    this.setData({
      selectedKeyIndex: index
    })
    this.updateChords()
  },

  // 大小调切换
  onMinorChange(e) {
    this.setData({
      isMinor: e.detail.value
    })
    this.updateChords()
  },

  // 填入到转调工具
  fillToTransposer(e) {
    const degree = e.currentTarget.dataset.degree
    
    // 跳转到转调页面并传递数据
    wx.switchTab({
      url: `/pages/transpose/transpose?progression=${degree}`,
      success: () => {
        wx.showToast({
          title: `已填入第${degree}级和弦`,
          icon: 'success',
          duration: 1500
        })
      }
    })
  },

  // 快捷填入
  quickFill(e) {
    const progression = e.currentTarget.dataset.progression
    
    // 跳转到转调页面并传递数据
    wx.switchTab({
      url: `/pages/transpose/transpose?progression=${encodeURIComponent(progression)}`,
      success: () => {
        wx.showToast({
          title: '已填入和弦进行',
          icon: 'success',
          duration: 1500
        })
      }
    })
  },

  // 分享功能
  onShareAppMessage() {
    const { selectedKeyIndex, isMinor, keys } = this.data
    const keyName = keys[selectedKeyIndex]
    const modeName = isMinor ? '小调' : '大调'
    
    return {
      title: `${keyName}${modeName}和弦表 - Quick Transpose`,
      path: `/pages/dictionary/dictionary?key=${selectedKeyIndex}&minor=${isMinor}`,
      imageUrl: '/images/share-dictionary.png' // 需要添加分享图片
    }
  },

  // 分享到朋友圈
  onShareTimeline() {
    const { selectedKeyIndex, isMinor, keys } = this.data
    const keyName = keys[selectedKeyIndex]
    const modeName = isMinor ? '小调' : '大调'
    
    return {
      title: `${keyName}${modeName}和弦表 - Quick Transpose 和弦转调工具`,
      query: `key=${selectedKeyIndex}&minor=${isMinor}`,
      imageUrl: '/images/share-dictionary.png'
    }
  }
})