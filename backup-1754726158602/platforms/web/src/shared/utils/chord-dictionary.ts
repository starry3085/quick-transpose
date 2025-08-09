/**
 * 和弦字典工具函数
 * 提供和弦查询、搜索等功能
 */

import { CHORD_MAPS, ROMAN_NUMERALS, DEGREE_NAMES, SIMPLE_KEYS } from '../constants/chord-data';
import type { KeyType, ChordType, ChordDictionaryItem, ChordSearchResult } from '../types/chord';

/**
 * 获取指定调性的完整和弦字典数据
 * @param key 调性
 * @param isMinor 是否为小调
 * @returns 和弦字典项数组
 */
export function getChordDictionary(key: KeyType, isMinor: boolean = false): ChordDictionaryItem[] {
  const chordType: ChordType = isMinor ? 'minor' : 'major';
  const chords = CHORD_MAPS[chordType][key];
  const romanNumerals = ROMAN_NUMERALS[chordType];
  
  if (!chords) {
    return [];
  }
  
  return chords.map((chord, index) => ({
    chord,
    roman: romanNumerals[index],
    degree: index + 1,
    degreeName: DEGREE_NAMES[index],
    key,
    isMinor
  }));
}

/**
 * 在所有调性中搜索包含指定和弦的调性
 * @param chordName 要搜索的和弦名称
 * @returns 搜索结果数组
 */
export function searchChords(chordName: string): ChordSearchResult[] {
  if (!chordName || !chordName.trim()) {
    return [];
  }
  
  const searchTerm = chordName.trim();
  const results: ChordSearchResult[] = [];
  
  // 遍历所有调性和模式
  for (const key of SIMPLE_KEYS) {
    for (const chordType of ['major', 'minor'] as ChordType[]) {
      const chords = CHORD_MAPS[chordType][key];
      const romanNumerals = ROMAN_NUMERALS[chordType];
      const isMinor = chordType === 'minor';
      
      // 查找匹配的和弦
      chords.forEach((chord, index) => {
        if (chord.toLowerCase().includes(searchTerm.toLowerCase())) {
          // 查找是否已存在该和弦的结果
          let existingResult = results.find(r => r.chord === chord);
          
          if (!existingResult) {
            existingResult = {
              chord,
              keys: []
            };
            results.push(existingResult);
          }
          
          // 添加调性信息
          existingResult.keys.push({
            key,
            isMinor,
            degree: index + 1,
            roman: romanNumerals[index],
            degreeName: DEGREE_NAMES[index]
          });
        }
      });
    }
  }
  
  return results;
}

/**
 * 根据级数获取和弦
 * @param key 调性
 * @param degree 级数 (1-7)
 * @param isMinor 是否为小调
 * @returns 和弦信息，如果级数无效则返回 null
 */
export function getChordByDegree(key: KeyType, degree: number, isMinor: boolean = false): ChordDictionaryItem | null {
  if (degree < 1 || degree > 7) {
    return null;
  }
  
  const chordType: ChordType = isMinor ? 'minor' : 'major';
  const chords = CHORD_MAPS[chordType][key];
  const romanNumerals = ROMAN_NUMERALS[chordType];
  
  if (!chords) {
    return null;
  }
  
  const index = degree - 1;
  return {
    chord: chords[index],
    roman: romanNumerals[index],
    degree,
    degreeName: DEGREE_NAMES[index],
    key,
    isMinor
  };
}

/**
 * 验证调性是否有效
 * @param key 调性字符串
 * @returns 是否为有效调性
 */
export function isValidKey(key: string): key is KeyType {
  return SIMPLE_KEYS.includes(key as KeyType);
}

/**
 * 获取相对大小调
 * @param key 调性
 * @param isMinor 当前是否为小调
 * @returns 相对调性信息
 */
export function getRelativeKey(key: KeyType, isMinor: boolean): { key: KeyType; isMinor: boolean } {
  // 简化的相对调转换逻辑
  // 实际应用中可能需要更复杂的转换表
  if (isMinor) {
    // 小调转大调：小调的三度音
    const minorToMajor: Record<KeyType, KeyType> = {
      'C': 'Eb', 'C#': 'E', 'Db': 'E', 'D': 'F', 'D#': 'F#', 'Eb': 'Gb',
      'E': 'G', 'F': 'Ab', 'F#': 'A', 'Gb': 'A', 'G': 'Bb', 'G#': 'B',
      'Ab': 'B', 'A': 'C', 'A#': 'C#', 'Bb': 'Db', 'B': 'D'
    };
    return { key: minorToMajor[key] || key, isMinor: false };
  } else {
    // 大调转小调：大调的六度音
    const majorToMinor: Record<KeyType, KeyType> = {
      'C': 'A', 'C#': 'A#', 'Db': 'Bb', 'D': 'B', 'D#': 'C', 'Eb': 'C',
      'E': 'C#', 'F': 'D', 'F#': 'D#', 'Gb': 'Eb', 'G': 'E', 'G#': 'F',
      'Ab': 'F', 'A': 'F#', 'A#': 'G', 'Bb': 'G', 'B': 'G#'
    };
    return { key: majorToMinor[key] || key, isMinor: true };
  }
}

/**
 * 获取所有可用的调性列表
 * @returns 调性数组
 */
export function getAllKeys(): KeyType[] {
  return [...SIMPLE_KEYS];
}

/**
 * 获取调性的中文名称
 * @param key 调性
 * @param isMinor 是否为小调
 * @returns 中文调性名称
 */
export function getKeyDisplayName(key: KeyType, isMinor: boolean): string {
  const suffix = isMinor ? '小调' : '大调';
  return `${key}${suffix}`;
}