// pages/transpose/transpose.js
const app = getApp()
const storage = require('../../utils/storage.js')
const validator = require('../../utils/validator.js')

Page({
  data: {
    progression: '',
    sourceKey: 'C',
    targetKey: 'G',
    sourceKeyIndex: 0,
    targetKeyIndex: 4,
    isMinor: false,
    result: [],
    keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    commonProgressions: [
      { label: '4536251', value: '4 5 3 6 2 5 1' },
      { label: '1625', value: '1 6 2 5' },
      { label: '251', value: '2 5 1' }
    ]
  },

  onLoad() {
    // 初始化数据
    this.setData({
      keys: app.globalData.keys,
      commonProgressions: app.globalData.commonProgressions
    })
    
    // 从本地存储恢复设置
    const settings = storage.get('transpose_settings', {})
    if (settings.sourceKey) {
      const sourceIndex = app.globalData.keys.indexOf(settings.sourceKey)
      const targetIndex = app.globalData.keys.indexOf(settings.targetKey)
      
      this.setData({
        sourceKey: settings.sourceKey,
        targetKey: settings.targetKey || 'G',
        sourceKeyIndex: sourceIndex >= 0 ? sourceIndex : 0,
        targetKeyIndex: targetIndex >= 0 ? targetIndex : 6,
        isMinor: settings.isMinor || false
      })
    }
  },

  onShow() {
    // 检查是否有从字典页面传递的数据
    const app = getApp()
    if (app.globalData.fillProgression) {
      this.setData({
        progression: app.globalData.fillProgression
      })
      this.transposeChords()
      // 清除全局数据
      app.globalData.fillProgression = null
    }
  },

  // 输入和弦进行
  onProgressionInput(e) {
    const input = e.detail.value
    this.setData({
      progression: input
    })
    
    // 防抖处理
    if (this.inputTimer) {
      clearTimeout(this.inputTimer)
    }
    
    this.inputTimer = setTimeout(() => {
      if (input.trim()) {
        const validation = validator.validateProgression(input)
        if (validation.isValid) {
          this.transposeChords()
        } else {
          this.setData({ result: [] })
          // 不显示错误提示，避免输入时频繁弹窗
        }
      } else {
        this.setData({ result: [] })
      }
    }, 300)
  },

  // 选择源调
  onSourceKeyChange(e) {
    const index = parseInt(e.detail.value)
    const key = this.data.keys[index]
    this.setData({
      sourceKey: key,
      sourceKeyIndex: index
    })
    this.transposeChords()
    this.saveSettings()
  },

  // 选择目标调
  onTargetKeyChange(e) {
    const index = parseInt(e.detail.value)
    const key = this.data.keys[index]
    this.setData({
      targetKey: key,
      targetKeyIndex: index
    })
    this.transposeChords()
    this.saveSettings()
  },

  // 切换大小调
  onMinorToggle(e) {
    this.setData({
      isMinor: e.detail.value
    })
    this.transposeChords()
    this.saveSettings()
  },

  // 填入常用进行
  fillProgression(e) {
    const value = e.currentTarget.dataset.value
    this.setData({
      progression: value
    })
    this.transposeChords()
  },

  // 移调计算
  transposeChords() {
    const { progression, sourceKey, targetKey, isMinor } = this.data
    
    if (!progression.trim()) {
      this.setData({ result: [] })
      return
    }

    const chordType = isMinor ? 'minor' : 'major'
    const sourceChords = app.globalData.chordMaps[chordType][sourceKey]
    const targetChords = app.globalData.chordMaps[chordType][targetKey]
    
    if (!sourceChords || !targetChords) {
      this.setData({ result: [] })
      return
    }

    const numbers = progression.split(/[\s,]+/).filter(n => n.trim())
    const romanNumerals = isMinor ? 
      ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'] :
      ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']
    
    const result = numbers.map(num => {
      const index = parseInt(num) - 1
      if (index >= 0 && index < 7) {
        return {
          chord: targetChords[index],
          roman: romanNumerals[index],
          original: sourceChords[index]
        }
      }
      return { chord: num, roman: '', original: num }
    })

    this.setData({ result })
  },

  // 复制结果
  copyResult() {
    if (this.data.result.length === 0) {
      validator.showError('没有可复制的内容')
      return
    }
    
    const chordString = this.data.result.map(r => r.chord).join(' ')
    wx.setClipboardData({
      data: chordString,
      success: () => {
        validator.showSuccess('已复制到剪贴板')
      },
      fail: () => {
        validator.showError('复制失败')
      }
    })
  },

  // 保存设置
  saveSettings() {
    const { sourceKey, targetKey, isMinor } = this.data
    storage.set('transpose_settings', {
      sourceKey,
      targetKey,
      isMinor
    })
  }
})