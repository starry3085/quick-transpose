// utils/constants.js
// 和弦数据常量 - 与shared模块保持一致

// 简化的调性列表（用于快速选择）
const SIMPLE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

// 完整的调性列表（包含升降号）
const ALL_KEYS = [
  'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 
  'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'
]

// 完整的12调和弦数据 - 与shared/constants/chord-data.ts保持一致
const CHORD_MAPS = {
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
    'C': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
    'C#': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],
    'Db': ['Dbm', 'Ebdim', 'Fb', 'Gbm', 'Abm', 'Bbb', 'Cb'],
    'D': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
    'D#': ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'],
    'Eb': ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db'],
    'E': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
    'F': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
    'F#': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
    'Gb': ['Gbm', 'Abdim', 'Bbb', 'Cbm', 'Dbm', 'Ebb', 'Fb'],
    'G': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
    'G#': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'],
    'Ab': ['Abm', 'Bbdim', 'Cb', 'Dbm', 'Ebm', 'Fb', 'Gb'],
    'A': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
    'A#': ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'],
    'Bb': ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab'],
    'B': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
  }
}

// 罗马数字标记
const ROMAN_NUMERALS = {
  major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
  minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']
}

// 级数名称
const DEGREE_NAMES = ['一度', '二度', '三度', '四度', '五度', '六度', '七度']

// 常用和弦进行
const COMMON_PROGRESSIONS = [
  { label: '4536251', value: '4 5 3 6 2 5 1', description: '卡农进行' },
  { label: '1625', value: '1 6 2 5', description: '圆周进行' },
  { label: '251', value: '2 5 1', description: '爵士基础进行' },
  { label: '6415', value: '6 4 1 5', description: '抒情进行' },
  { label: '1564', value: '1 5 6 4', description: '流行进行' },
  { label: '1451', value: '1 4 5 1', description: '古典终止式' }
]

// 和弦类型说明
const CHORD_TYPE_LEGENDS = [
  { label: '大三和弦', example: 'C, F, G', description: '明亮、稳定的和弦' },
  { label: '小三和弦', example: 'Dm, Em, Am', description: '柔和、忧郁的和弦' },
  { label: '减三和弦', example: 'Bdim', description: '紧张、不稳定的和弦' }
]

// 存储键常量 - 与shared模块保持一致
const STORAGE_KEYS = {
  TRANSPOSE_HISTORY: 'transpose_history',
  DICTIONARY_FAVORITES: 'dictionary_favorites',
  USER_PREFERENCES: 'user_preferences',
  APP_STATE: 'app_state',
  CHORD_PROGRESSIONS: 'chord_progressions',
  RECENT_SEARCHES: 'recent_searches'
}

module.exports = {
  SIMPLE_KEYS,
  ALL_KEYS,
  CHORD_MAPS,
  ROMAN_NUMERALS,
  DEGREE_NAMES,
  COMMON_PROGRESSIONS,
  CHORD_TYPE_LEGENDS,
  STORAGE_KEYS
}
