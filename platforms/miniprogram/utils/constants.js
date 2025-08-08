// utils/constants.js
// 简单调性列表
const SIMPLE_KEYS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

// 常用和弦进行
const COMMON_PROGRESSIONS = [
  { label: 'I-V-vi-IV', value: '1 5 6 4' },
  { label: 'vi-IV-I-V', value: '6 4 1 5' },
  { label: 'I-vi-ii-V', value: '1 6 2 5' },
  { label: 'I-IV-V-I', value: '1 4 5 1' },
  { label: '卡农进行', value: '4 5 3 6 2 5 1' },
  { label: 'ii-V-I', value: '2 5 1' },
  { label: 'I-iii-vi-IV', value: '1 3 6 4' },
  { label: 'vi-ii-V-I', value: '6 2 5 1' }
]

// 度数名称
const DEGREE_NAMES = [
  '主音', '上主音', '中音', '下属音', '属音', '下中音', '导音'
]

// 罗马数字（大调）
const ROMAN_NUMERALS_MAJOR = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']

// 罗马数字（小调）
const ROMAN_NUMERALS_MINOR = ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']

module.exports = {
  SIMPLE_KEYS,
  COMMON_PROGRESSIONS,
  DEGREE_NAMES,
  ROMAN_NUMERALS_MAJOR,
  ROMAN_NUMERALS_MINOR
}