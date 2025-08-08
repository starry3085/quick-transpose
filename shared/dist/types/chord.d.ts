/**
 * 和弦相关的TypeScript类型定义
 */
export interface ChordData {
    chord: string;
    roman: string;
    original: string;
    degree?: number;
}
export type KeyType = 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A' | 'A#' | 'Bb' | 'B';
export type ChordType = 'major' | 'minor';
export interface ChordMaps {
    major: Record<KeyType, string[]>;
    minor: Record<KeyType, string[]>;
}
export interface RomanNumerals {
    major: string[];
    minor: string[];
}
export interface CommonProgression {
    label: string;
    value: string;
}
export interface TransposeParams {
    progression: string;
    sourceKey: KeyType;
    targetKey: KeyType;
    isMinor: boolean;
    useSeventhChords?: boolean;
}
export interface TransposeResult {
    success: boolean;
    data: ChordData[];
    error?: string;
}
export interface ValidationResult {
    isValid: boolean;
    error?: string;
}
export interface StorageAdapter {
    get<T>(key: string, defaultValue?: T): T | null;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}
export interface TransposeSettings {
    sourceKey: KeyType;
    targetKey: KeyType;
    isMinor: boolean;
    useSeventhChords?: boolean;
}
//# sourceMappingURL=chord.d.ts.map