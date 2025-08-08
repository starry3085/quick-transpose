// utils/transpose-engine.js
// 和弦转调引擎 - 小程序版本

const { SIMPLE_KEYS, ROMAN_NUMERALS_MAJOR, ROMAN_NUMERALS_MINOR } = require('./constants.js')

class TransposeEngine {
  // 获取调性索引
  static getKeyIndex(key) {
    return SIMPLE_KEYS.indexOf(key)
  }

  // 转调主函数
  static transpose({ progression, sourceKey, targetKey, isMinor = false, useSeventhChords = false }) {
    try {
      if (!progression || !progression.trim()) {
        return {
          success: false,
          data: [],
          error: '请输入和弦进行'
        }
      }

      const sourceIndex = this.getKeyIndex(sourceKey)
      const targetIndex = this.getKeyIndex(targetKey)

      if (sourceIndex === -1 || targetIndex === -1) {
        return {
          success: false,
          data: [],
          error: '无效的调性'
        }
      }

      // 计算半音差
      const semitones = (targetIndex - sourceIndex + 12) % 12

      // 解析和弦进行
      const chords = progression.trim().split(/[\s,]+/).filter(chord => chord)
      const result = []

      for (let chord of chords) {
        const transposed = this.transposeChord(chord, sourceIndex, semitones, isMinor, useSeventhChords)
        if (transposed) {
          result.push(transposed)
        } else {
          return {
            success: false,
            data: [],
            error: `无法识别和弦: ${chord}`
          }
        }
      }

      return {
        success: true,
        data: result,
        error: ''
      }
    } catch (error) {
      console.error('转调错误:', error)
      return {
        success: false,
        data: [],
        error: '转调过程中发生错误'
      }
    }
  }

  // 转调单个和弦
  static transposeChord(chord, sourceIndex, semitones, isMinor, useSeventhChords) {
    // 处理数字和弦（级数）
    if (/^\d+$/.test(chord)) {
      const degree = parseInt(chord)
      if (degree < 1 || degree > 7) {
        return null
      }

      // 计算和弦根音
      const intervals = isMinor 
        ? [0, 2, 3, 5, 7, 8, 10] // 自然小调音阶
        : [0, 2, 4, 5, 7, 9, 11] // 自然大调音阶

      const chordIndex = (sourceIndex + intervals[degree - 1] + semitones) % 12
      const chordName = SIMPLE_KEYS[chordIndex]

      // 添加和弦类型后缀
      let finalChord = chordName
      if (isMinor) {
        // 小调和弦类型
        const minorTypes = ['m', 'dim', '', 'm', 'm', '', '']
        finalChord += minorTypes[degree - 1]
      } else {
        // 大调和弦类型
        const majorTypes = ['', 'm', 'm', '', '', 'm', 'dim']
        finalChord += majorTypes[degree - 1]
      }

      // 添加七和弦
      if (useSeventhChords) {
        if (isMinor) {
          const minorSevenths = ['7', 'm7b5', 'maj7', 'm7', 'm7', 'maj7', '7']
          finalChord += minorSevenths[degree - 1]
        } else {
          const majorSevenths = ['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7b5']
          finalChord += majorSevenths[degree - 1]
        }
      }

      // 获取罗马数字
      const romanNumerals = isMinor ? ROMAN_NUMERALS_MINOR : ROMAN_NUMERALS_MAJOR
      const roman = romanNumerals[degree - 1] || chord

      return {
        original: chord,
        chord: finalChord,
        roman: roman,
        degree: degree
      }
    }

    // 处理字母和弦名
    const chordMatch = chord.match(/^([A-G][#b]?)(.*)$/)
    if (chordMatch) {
      const [, root, suffix] = chordMatch
      const rootIndex = this.getKeyIndex(root)
      
      if (rootIndex === -1) {
        return null
      }

      const newRootIndex = (rootIndex + semitones) % 12
      const newRoot = SIMPLE_KEYS[newRootIndex]
      const newChord = newRoot + suffix

      return {
        original: chord,
        chord: newChord,
        roman: chord,
        degree: 0
      }
    }

    return null
  }

  // 获取指定调性的和弦
  static getChordsByKey(key, isMinor = false) {
    const keyIndex = this.getKeyIndex(key)
    if (keyIndex === -1) return []

    const intervals = isMinor 
      ? [0, 2, 3, 5, 7, 8, 10] // 自然小调音阶
      : [0, 2, 4, 5, 7, 9, 11] // 自然大调音阶

    const chords = []
    for (let i = 0; i < 7; i++) {
      const chordIndex = (keyIndex + intervals[i]) % 12
      let chordName = SIMPLE_KEYS[chordIndex]

      // 添加和弦类型
      if (isMinor) {
        const minorTypes = ['m', 'dim', '', 'm', 'm', '', '']
        chordName += minorTypes[i]
      } else {
        const majorTypes = ['', 'm', 'm', '', '', 'm', 'dim']
        chordName += majorTypes[i]
      }

      chords.push(chordName)
    }

    return chords
  }

  // 获取罗马数字
  static getRomanNumerals(isMinor = false) {
    return isMinor ? ROMAN_NUMERALS_MINOR : ROMAN_NUMERALS_MAJOR
  }

  // 验证和弦进行格式
  static validateProgression(progression) {
    if (!progression || typeof progression !== 'string') {
      return { valid: false, error: '请输入和弦进行' }
    }

    const trimmed = progression.trim()
    if (!trimmed) {
      return { valid: false, error: '请输入和弦进行' }
    }

    // 检查是否包含有效字符
    const validPattern = /^[1-7A-Gb#m\s,dim7maj9sus2456+-]+$/i
    if (!validPattern.test(trimmed)) {
      return { valid: false, error: '包含无效字符，请检查输入格式' }
    }

    return { valid: true, error: '' }
  }
}

module.exports = TransposeEngine