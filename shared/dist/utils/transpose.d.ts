/**
 * 和弦移调核心算法
 */
import type { TransposeParams, TransposeResult, KeyType } from '../types/chord';
/**
 * 移调核心函数
 */
export declare class TransposeEngine {
    /**
     * 执行和弦移调
     * @param params 移调参数
     * @returns 移调结果
     */
    static transpose(params: TransposeParams): TransposeResult;
    /**
     * 获取指定调性的和弦列表
     * @param key 调性
     * @param isMinor 是否为小调
     * @returns 和弦列表
     */
    static getChordsByKey(key: KeyType, isMinor?: boolean): string[];
    /**
     * 获取罗马数字标记
     * @param isMinor 是否为小调
     * @returns 罗马数字列表
     */
    static getRomanNumerals(isMinor?: boolean): string[];
    /**
     * 获取和弦的详细信息
     * @param chordName 和弦名称
     * @returns 和弦信息
     */
    static getChordInfo(chordName: string): {
        root: string;
        quality: string;
        fullName: string;
        type: string;
    };
    /**
     * 判断和弦类型
     * @param quality 和弦品质标记
     * @returns 和弦类型
     */
    private static getChordType;
    /**
     * 批量移调多个进行
     * @param progressions 多个和弦进行
     * @param sourceKey 源调
     * @param targetKey 目标调
     * @param isMinor 是否为小调
     * @returns 移调结果数组
     */
    static batchTranspose(progressions: string[], sourceKey: KeyType, targetKey: KeyType, isMinor?: boolean): TransposeResult[];
}
//# sourceMappingURL=transpose.d.ts.map