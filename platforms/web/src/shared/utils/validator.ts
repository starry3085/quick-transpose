/**
 * 输入验证工具函数
 */

import { SIMPLE_KEYS } from '../constants/chord-data';
import type { KeyType } from '../types/chord';

/**
 * 验证和弦进行输入
 * @param progression 和弦进行字符串
 * @returns 验证结果
 */
export function validateProgression(progression: string): {
  isValid: boolean;
  error?: string;
  normalizedProgression?: string;
} {
  if (!progression || !progression.trim()) {
    return {
      isValid: false,
      error: '和弦进行不能为空'
    };
  }

  const trimmed = progression.trim();
  
  // 检查是否只包含数字、空格和逗号
  if (!/^[1-7\s,]+$/.test(trimmed)) {
    return {
      isValid: false,
      error: '和弦进行只能包含数字1-7、空格和逗号'
    };
  }

  // 提取数字
  const numbers = trimmed.split(/[\s,]+/).filter(n => n.trim());
  
  if (numbers.length === 0) {
    return {
      isValid: false,
      error: '和弦进行不能为空'
    };
  }

  // 验证每个数字是否在1-7范围内
  for (const num of numbers) {
    const degree = parseInt(num);
    if (isNaN(degree) || degree < 1 || degree > 7) {
      return {
        isValid: false,
        error: `无效的级数: ${num}，请使用1-7之间的数字`
      };
    }
  }

  return {
    isValid: true,
    normalizedProgression: numbers.join(' ')
  };
}

/**
 * 验证调性
 * @param key 调性字符串
 * @returns 是否为有效调性
 */
export function validateKey(key: string): key is KeyType {
  return SIMPLE_KEYS.includes(key as KeyType);
}

/**
 * 验证级数
 * @param degree 级数
 * @returns 是否为有效级数
 */
export function validateDegree(degree: number): boolean {
  return Number.isInteger(degree) && degree >= 1 && degree <= 7;
}

/**
 * 清理和标准化和弦进行输入
 * @param progression 原始输入
 * @returns 清理后的字符串
 */
export function sanitizeProgression(progression: string): string {
  return progression
    .trim()
    .replace(/[^\d\s,]/g, '') // 移除非数字、空格、逗号的字符
    .replace(/\s+/g, ' ')     // 合并多个空格
    .replace(/,+/g, ',')      // 合并多个逗号
    .replace(/,\s*,/g, ',')   // 移除重复逗号
    .replace(/^\s*,|,\s*$/g, ''); // 移除开头和结尾的逗号
}

/**
 * 验证和弦名称格式
 * @param chordName 和弦名称
 * @returns 验证结果
 */
export function validateChordName(chordName: string): {
  isValid: boolean;
  error?: string;
} {
  if (!chordName || !chordName.trim()) {
    return {
      isValid: false,
      error: '和弦名称不能为空'
    };
  }

  const trimmed = chordName.trim();
  
  // 基本的和弦名称格式检查
  // 允许: C, Cm, C7, Cmaj7, Cdim, C#, Bb, F#m7 等
  const chordPattern = /^[A-G][#b]?(m|maj|dim|aug|sus|add)?[0-9]*$/;
  
  if (!chordPattern.test(trimmed)) {
    return {
      isValid: false,
      error: '无效的和弦名称格式'
    };
  }

  return {
    isValid: true
  };
}

/**
 * 验证搜索查询
 * @param query 搜索查询字符串
 * @returns 验证结果
 */
export function validateSearchQuery(query: string): {
  isValid: boolean;
  error?: string;
  sanitizedQuery?: string;
} {
  if (!query || !query.trim()) {
    return {
      isValid: false,
      error: '搜索内容不能为空'
    };
  }

  const trimmed = query.trim();
  
  if (trimmed.length < 1) {
    return {
      isValid: false,
      error: '搜索内容至少需要1个字符'
    };
  }

  if (trimmed.length > 20) {
    return {
      isValid: false,
      error: '搜索内容不能超过20个字符'
    };
  }

  return {
    isValid: true,
    sanitizedQuery: trimmed
  };
}