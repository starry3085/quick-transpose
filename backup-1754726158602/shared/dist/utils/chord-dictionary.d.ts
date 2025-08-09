/**
 * 和弦字典工具函数
 */
import type { KeyType } from '../types/chord';
export interface ChordInfo {
    chord: string;
    degree: number;
    romanNumeral: string;
    degreeName: string;
}
export interface ChordDictionaryData {
    key: KeyType;
    isMinor: boolean;
    chords: ChordInfo[];
}
/**
 * 获取指定调性的和弦字典数据
 */
export declare function getChordDictionary(key: KeyType, isMinor?: boolean): ChordDictionaryData;
/**
 * 搜索和弦
 */
export declare function searchChords(query: string, key?: KeyType, isMinor?: boolean): ChordInfo[];
/**
 * 根据级数获取和弦
 */
export declare function getChordByDegree(key: KeyType, degree: number, isMinor?: boolean): string | null;
/**
 * 获取和弦的级数信息
 */
export declare function getChordDegreeInfo(chord: string, key: KeyType, isMinor?: boolean): ChordInfo | null;
/**
 * 验证调性是否有效
 */
export declare function isValidKey(key: string): key is KeyType;
/**
 * 获取相对大小调
 */
export declare function getRelativeKey(key: KeyType, isMinor: boolean): {
    key: KeyType;
    isMinor: boolean;
};
//# sourceMappingURL=chord-dictionary.d.ts.map