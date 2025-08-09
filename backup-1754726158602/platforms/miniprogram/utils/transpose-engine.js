// utils/transpose-engine.js
// 和弦转调引擎 - 小程序版本 (使用共享算法)

const { SIMPLE_KEYS, CHORD_MAPS, ROMAN_NUMERALS } = require('./constants.js')

/**
 * 小程序版本的转调引擎，使用与Web端一致的算法
 * 基于 shared/utils/transpose.ts 的逻辑实现
 */
class TransposeEngine {
  /**
   * 执行和弦移调 - 与shared模块保持一致的算法
   */
  static transpose({ progression, sourceKey, targetKey, isMinor = false, useSeventhChords = false }) {
    // 输入验证
    if (!progression || !progression.trim()) {
      return {
        success: false,
        data: [],
        error: '和弦进行不能为空'
      }
    }

    try {
      const chordType = isMinor ? 'minor' : 'major'
      const sourceChords = CHORD_MAPS[chordType] && CHORD_MAPS[chordType][sourceKey]
      const targetChords = CHORD_MAPS[chordType] && CHORD_MAPS[chordType][targetKey]
      const romanNumerals = ROMAN_NUMERALS[chordType]

      if (!sourceChords || !targetChords) {
        return {
          success: false,
          data: [],
          error: '不支持的调性'
        }
      }

      // 解析和弦进行
      const numbers = progression.split(/[\s,]+/).filter(n => n.trim())
      
      const result = numbers.map(num => {
        const index = parseInt(num) - 1
        
        if (index >= 0 && index < 7) {
          let targetChord = targetChords[index]
          
          // 添加七和弦（除了减七和弦）
          if (useSeventhChords && index !== 6) {
            targetChord += '7'
          }
          
          return {
            chord: targetChord,
            roman: romanNumerals[index],
            original: sourceChords[index],
            degree: index + 1
          }
        }
        
        // 无效的度数，保持原样
        return { 
          chord: num, 
          roman: '', 
          original: num,
          degree: parseInt(num) || 0
        }
      })

      return {
        success: true,
        data: result
      }
    } catch (error) {
      console.error('转调错误:', error)
      return {
        success: false,
        data: [],
        error: error.message || '移调失败'
      }
    }
  }

  /**
   * 获取指定调性的和弦列表
   */
  static getChordsByKey(key, isMinor = false) {
    const chordType = isMinor ? 'minor' : 'major'
    const chords = CHORD_MAPS[chordType] && CHORD_MAPS[chordType][key]
    return chords ? [...chords] : []
  }

  /**
   * 获取罗马数字标记
   */
  static getRomanNumerals(isMinor = false) {
    const chordType = isMinor ? 'minor' : 'major'
    return [...ROMAN_NUMERALS[chordType]]
  }

  /**
   * 验证和弦进行格式
   */
  static validateProgression(progression) {
    if (!progression || typeof progression !== 'string') {
      return { valid: false, error: '和弦进行不能为空' }
    }

    const trimmed = progression.trim()
    if (!trimmed) {
      return { valid: false, error: '和弦进行不能为空' }
    }

    // 检查是否包含有效字符
    const validPattern = /^[1-7\s,]+$/
    if (!validPattern.test(trimmed)) {
      return { valid: false, error: '包含无效字符，请检查输入格式' }
    }

    return { valid: true, error: '' }
  }

  /**
   * 批量移调多个进行
   */
  static batchTranspose(progressions, sourceKey, targetKey, isMinor = false) {
    return progressions.map(progression => 
      this.transpose({ progression, sourceKey, targetKey, isMinor })
    )
  }
}

module.exports = TransposeEngine
