/**
 * 和弦相关类型定义
 */

// 调性类型
export type KeyType = 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A' | 'A#' | 'Bb' | 'B';

// 和弦类型
export type ChordType = 'major' | 'minor';

// 和弦数据
export interface ChordData {
  chord: string;      // 和弦名称
  roman: string;      // 罗马数字标记
  original: string;   // 原始和弦
  degree: number;     // 级数
}

// 移调参数
export interface TransposeParams {
  progression: string;    // 和弦进行
  sourceKey: KeyType;     // 源调
  targetKey: KeyType;     // 目标调
  isMinor?: boolean;      // 是否为小调
  useSeventhChords?: boolean; // 是否使用七和弦
}

// 移调结果
export interface TransposeResult {
  success: boolean;
  data: ChordData[];
  error?: string;
}

// 移调设置
export interface TransposeSettings {
  sourceKey: KeyType;
  targetKey: KeyType;
  isMinor: boolean;
  useSeventhChords?: boolean;
}

// 和弦字典项
export interface ChordDictionaryItem {
  chord: string;
  roman: string;
  degree: number;
  degreeName: string;
  key: KeyType;
  isMinor: boolean;
}

// 和弦搜索结果
export interface ChordSearchResult {
  chord: string;
  keys: Array<{
    key: KeyType;
    isMinor: boolean;
    degree: number;
    roman: string;
    degreeName: string;
  }>;
}