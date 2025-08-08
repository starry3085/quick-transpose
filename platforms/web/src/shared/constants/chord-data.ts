/**
 * 和弦数据常量
 * 包含12个调的大调和小调和弦映射
 */

import type { KeyType, ChordType } from '../types/chord';

// 简化调性列表（用于UI选择）
export const SIMPLE_KEYS: KeyType[] = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

// 完整的和弦映射表
export const CHORD_MAPS: Record<ChordType, Record<KeyType, readonly string[]>> = {
  major: {
    'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'] as const,
    'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'] as const,
    'Db': ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'] as const,
    'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'] as const,
    'D#': ['D#', 'E#m', 'F##m', 'G#', 'A#', 'B#m', 'C##dim'] as const,
    'Eb': ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'] as const,
    'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'] as const,
    'F': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'] as const,
    'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'] as const,
    'Gb': ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fdim'] as const,
    'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'] as const,
    'G#': ['G#', 'A#m', 'B#m', 'C#', 'D#', 'E#m', 'F##dim'] as const,
    'Ab': ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'] as const,
    'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'] as const,
    'A#': ['A#', 'B#m', 'C##m', 'D#', 'E#', 'F##m', 'G##dim'] as const,
    'Bb': ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'] as const,
    'B': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'] as const
  },
  minor: {
    'C': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'] as const,
    'C#': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'] as const,
    'Db': ['Dbm', 'Ebdim', 'Fb', 'Gbm', 'Abm', 'Bbb', 'Cb'] as const,
    'D': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'] as const,
    'D#': ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'] as const,
    'Eb': ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db'] as const,
    'E': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'] as const,
    'F': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'] as const,
    'F#': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'] as const,
    'Gb': ['Gbm', 'Abdim', 'Bbb', 'Cbm', 'Dbm', 'Ebb', 'Fb'] as const,
    'G': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'] as const,
    'G#': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'] as const,
    'Ab': ['Abm', 'Bbdim', 'Cb', 'Dbm', 'Ebm', 'Fb', 'Gb'] as const,
    'A': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'] as const,
    'A#': ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'] as const,
    'Bb': ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab'] as const,
    'B': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A'] as const
  }
};

// 罗马数字标记
export const ROMAN_NUMERALS: Record<ChordType, readonly string[]> = {
  major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'] as const,
  minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'] as const
};

// 级数名称
export const DEGREE_NAMES: readonly string[] = [
  '主音', '上主音', '中音', '下属音', '属音', '下中音', '导音'
] as const;

// 常用和弦进行
export const COMMON_PROGRESSIONS = [
  { label: 'I-V-vi-IV', value: '1 5 6 4' },
  { label: 'vi-IV-I-V', value: '6 4 1 5' },
  { label: 'I-vi-ii-V', value: '1 6 2 5' },
  { label: 'I-IV-V-I', value: '1 4 5 1' },
  { label: 'ii-V-I', value: '2 5 1' },
  { label: '卡农进行', value: '1 5 6 3 4 1 4 5' },
  { label: '王道进行', value: '4 5 3 6' },
  { label: '小室进行', value: '6 4 5 1' }
] as const;