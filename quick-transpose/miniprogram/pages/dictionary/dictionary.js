// pages/dictionary/dictionary.js
const app = getApp()
const storage = require('../../utils/storage.js')

Page({
  data: {
    selectedKey: 'C',
    selectedKeyIndex: 0,
    isMinor: false,
    chords: [],
    keys: [],
    romanNumerals: [],
    degreeNames: ['一度', '二度', '三度', '四度', '五度', '六度', '七度']
  },

  onLoad() {
    // 初始化数据
    this.setData({
      keys: app.globalData.keys
    })
    this.updateChords()
  },

  onShow() {
    // 页面显示时更新数据
    this.updateChords()
  },

  // 选择调性
  onKeyChange(e) {
    const index = parseInt(e.detail.value)
    const key = this.data.keys[index]
    this.setData({
      selectedKey: key,
      selectedKeyIndex: index
    })
    this.updateChords()
  },

  // 切换大小调
  onMinorToggle(e) {
    this.setData({
      isMinor: e.detail.value
    })
    this.updateChords()
  },

  // 更新和弦数据
  updateChords() {
    const { selectedKey, isMinor } = this.data
    const chordType = isMinor ? 'minor' : 'major'
    const chords = app.globalData.chordMaps[chordType][selectedKey] || []
    const romanNumerals = isMinor ? 
      ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'] :
      ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']

    this.setData({
      chords,
      romanNumerals
    })
  },

  // 填入到转换器
  fillToTransposer(e) {
    const degree = e.currentTarget.dataset.degree
    
    // 切换到转换器页面并传递数据
    wx.switchTab({
      url: '/pages/transpose/transpose',
      success: () => {
        // 通过全局数据传递
        app.globalData.fillProgression = degree.toString()
      }
    })
  },

  // 快捷填入常用进行
  fillProgression(e) {
    const progression = e.currentTarget.dataset.progression
    
    wx.switchTab({
      url: '/pages/transpose/transpose',
      success: () => {
        app.globalData.fillProgression = progression
      }
    })
  }
})