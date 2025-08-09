/**
 * 和弦相关的TypeScript类型定义
 */

// 和弦数据接口
export interface ChordData {
  chord: string;
  roman: string;
  original: string;
  degree?: number;
}

// 调性类型
export type KeyType = 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A' | 'A#' | 'Bb' | 'B';

// 和弦类型
export type ChordType = 'major' | 'minor';

// 和弦映射接口
export interface ChordMaps {
  major: Record<KeyType, string[]>;
  minor: Record<KeyType, string[]>;
}

// 罗马数字映射接口
export interface RomanNumerals {
  major: string[];
  minor: string[];
}

// 常用进行接口
export interface CommonProgression {
  label: string;
  value: string;
}

// 移调参数接口
export interface TransposeParams {
  progression: string;
  sourceKey: KeyType;
  targetKey: KeyType;
  isMinor: boolean;
  useSeventhChords?: boolean;
}

// 移调结果接口
export interface TransposeResult {
  success: boolean;
  data: ChordData[];
  error?: string;
}

// 验证结果接口
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// 存储接口
export interface StorageAdapter {
  get<T>(key: string, defaultValue?: T): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
}

// 设置数据接口
export interface TransposeSettings {
  sourceKey: KeyType;
  targetKey: KeyType;
  isMinor: boolean;
  useSeventhChords?: boolean;
}