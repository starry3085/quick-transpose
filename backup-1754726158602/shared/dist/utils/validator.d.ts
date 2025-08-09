/**
 * 输入验证工具函数
 */
import type { ValidationResult } from '../types/chord';
export declare class Validator {
    /**
     * 验证和弦进行输入
     * @param progression 和弦进行字符串
     * @returns 验证结果
     */
    static validateProgression(progression: string): ValidationResult;
    /**
     * 验证调性
     * @param key 调性字符串
     * @returns 是否有效
     */
    static validateKey(key: string): boolean;
    /**
     * 验证和弦名称
     * @param chord 和弦名称
     * @returns 是否有效
     */
    static validateChord(chord: string): boolean;
    /**
     * 清理和弦进行输入
     * @param progression 原始输入
     * @returns 清理后的字符串
     */
    static cleanProgression(progression: string): string;
    /**
     * 格式化和弦进行显示
     * @param progression 和弦进行
     * @returns 格式化后的字符串
     */
    static formatProgression(progression: string): string;
}
//# sourceMappingURL=validator.d.ts.map