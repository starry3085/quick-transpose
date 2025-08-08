// utils/chord.js - 和弦工具函数

/**
 * 和弦数据映射
 */
const CHORD_MAPS = {
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
}

/**
 * 罗马数字标记
 */
const ROMAN_NUMERALS = {
  major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
  minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']
}

/**
 * 移调函数
 * @param {string} progression - 和弦进行 "1 4 5 1"
 * @param {string} sourceKey - 源调
 * @param {string} targetKey - 目标调
 * @param {boolean} isMinor - 是否为小调
 * @returns {Array} 转换结果
 */
function transposeChords(progression, sourceKey, targetKey, isMinor) {
  if (!progression || !progression.trim()) {
    return []
  }

  const chordType = isMinor ? 'minor' : 'major'
  const sourceChords = CHORD_MAPS[chordType][sourceKey]
  const targetChords = CHORD_MAPS[chordType][targetKey]
  const romanNumerals = ROMAN_NUMERALS[chordType]

  if (!sourceChords || !targetChords) {
    return []
  }

  const numbers = progression.split(/[\s,]+/).filter(n => n.trim())
  
  return numbers.map(num => {
    const index = parseInt(num) - 1
    if (index >= 0 && index < 7) {
      return {
        chord: targetChords[index],
        roman: romanNumerals[index],
        original: sourceChords[index],
        degree: index + 1
      }
    }
    return { 
      chord: num, 
      roman: '', 
      original: num,
      degree: num
    }
  })
}

/**
 * 获取调性的和弦列表
 * @param {string} key - 调性
 * @param {boolean} isMinor - 是否为小调
 * @returns {Array} 和弦列表
 */
function getChordsByKey(key, isMinor) {
  const chordType = isMinor ? 'minor' : 'major'
  return CHORD_MAPS[chordType][key] || []
}

/**
 * 获取罗马数字标记
 * @param {boolean} isMinor - 是否为小调
 * @returns {Array} 罗马数字列表
 */
function getRomanNumerals(isMinor) {
  return ROMAN_NUMERALS[isMinor ? 'minor' : 'major']
}

/**
 * 验证和弦进行输入
 * @param {string} progression - 和弦进行
 * @returns {boolean} 是否有效
 */
function validateProgression(progression) {
  if (!progression || !progression.trim()) {
    return false
  }
  
  const numbers = progression.split(/[\s,]+/).filter(n => n.trim())
  return numbers.every(num => {
    const n = parseInt(num)
    return !isNaN(n) && n >= 1 && n <= 7
  })
}

module.exports = {
  CHORD_MAPS,
  ROMAN_NUMERALS,
  transposeChords,
  getChordsByKey,
  getRomanNumerals,
  validateProgression
}