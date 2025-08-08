// app.js
const { chordMaps, keys, commonProgressions } = require('./utils/chordData.js')

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    // 初始化应用
    console.log('小程序启动')
  },
  globalData: {
    userInfo: null,
    // 使用完整的和弦数据
    chordMaps,
    keys,
    commonProgressions
  }
})