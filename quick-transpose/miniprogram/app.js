// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    // 全局和弦数据
    chordMaps: {
      major: {
        'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
        'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
        'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
        'F': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
        'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
        'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
        'B': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim']
      },
      minor: {
        'C': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
        'D': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
        'E': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
        'F': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
        'G': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
        'A': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
        'B': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
      }
    },
    keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    commonProgressions: [
      { label: '4536251', value: '4 5 3 6 2 5 1' },
      { label: '1625', value: '1 6 2 5' },
      { label: '251', value: '2 5 1' }
    ]
  }
})