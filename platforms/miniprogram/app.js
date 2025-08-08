// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取系统信息
    wx.getSystemInfo({
      success: res => {
        console.log('系统信息', res)
        // 存储系统信息供全局使用
        this.globalData.systemInfo = res
        this.globalData.isIPhoneX = this.checkIsIPhoneX(res)
        this.globalData.deviceType = this.getDeviceType(res)
      }
    })
  },

  // 检查是否为iPhone X系列
  checkIsIPhoneX(systemInfo) {
    const { model, screenHeight, screenWidth } = systemInfo
    return (
      model.includes('iPhone X') ||
      model.includes('iPhone 11') ||
      model.includes('iPhone 12') ||
      model.includes('iPhone 13') ||
      model.includes('iPhone 14') ||
      (screenHeight === 812 && screenWidth === 375) ||
      (screenHeight === 896 && screenWidth === 414) ||
      (screenHeight === 844 && screenWidth === 390) ||
      (screenHeight === 926 && screenWidth === 428)
    )
  },

  // 获取设备类型
  getDeviceType(systemInfo) {
    const { windowWidth } = systemInfo
    if (windowWidth < 768) return 'mobile'
    if (windowWidth < 1024) return 'tablet'
    return 'desktop'
  },

  globalData: {
    userInfo: null,
    systemInfo: null,
    isIPhoneX: false,
    deviceType: 'mobile',
    // 和弦数据
    chordMaps: {
      major: {
        'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
        'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'],
        'Db': ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'],
        'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
        'D#': ['D#', 'E#m', 'F##m', 'G#', 'A#', 'B#m', 'C##dim'],
        'Eb': ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'],
        'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
        'F': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
        'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'],
        'Gb': ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fdim'],
        'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
        'G#': ['G#', 'A#m', 'B#m', 'C#', 'D#', 'E#m', 'F##dim'],
        'Ab': ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'],
        'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
        'A#': ['A#', 'B#m', 'C##m', 'D#', 'E#', 'F##m', 'G##dim'],
        'Bb': ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'],
        'B': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim']
      },
      minor: {
        'Cm': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
        'C#m': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],
        'Dm': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
        'D#m': ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'],
        'Ebm': ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db'],
        'Em': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
        'Fm': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
        'F#m': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
        'Gm': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
        'G#m': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'],
        'Abm': ['Abm', 'Bbdim', 'Cb', 'Dbm', 'Ebm', 'Fb', 'Gb'],
        'Am': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
        'A#m': ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'],
        'Bbm': ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab'],
        'Bm': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
      }
    }
  }
})