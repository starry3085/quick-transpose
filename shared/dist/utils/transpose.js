/**
 * 和弦移调核心算法
 */
import { CHORD_MAPS, ROMAN_NUMERALS } from '../constants/chord-data';
/**
 * 移调核心函数
 */
export class TransposeEngine {
    /**
     * 执行和弦移调
     * @param params 移调参数
     * @returns 移调结果
     */
    static transpose(params) {
        const { progression, sourceKey, targetKey, isMinor, useSeventhChords = false } = params;
        // 输入验证
        if (!progression || !progression.trim()) {
            return {
                success: false,
                data: [],
                error: '和弦进行不能为空'
            };
        }
        try {
            const chordType = isMinor ? 'minor' : 'major';
            const sourceChords = CHORD_MAPS[chordType][sourceKey];
            const targetChords = CHORD_MAPS[chordType][targetKey];
            const romanNumerals = ROMAN_NUMERALS[chordType];
            if (!sourceChords || !targetChords) {
                return {
                    success: false,
                    data: [],
                    error: '不支持的调性'
                };
            }
            // 解析和弦进行
            const numbers = progression.split(/[\s,]+/).filter(n => n.trim());
            const result = numbers.map(num => {
                const index = parseInt(num) - 1;
                if (index >= 0 && index < 7) {
                    let targetChord = targetChords[index];
                    // 添加七和弦（除了减七和弦）
                    if (useSeventhChords && index !== 6) {
                        targetChord += '7';
                    }
                    return {
                        chord: targetChord,
                        roman: romanNumerals[index],
                        original: sourceChords[index],
                        degree: index + 1
                    };
                }
                // 无效的度数，保持原样
                return {
                    chord: num,
                    roman: '',
                    original: num,
                    degree: parseInt(num) || 0
                };
            });
            return {
                success: true,
                data: result
            };
        }
        catch (error) {
            return {
                success: false,
                data: [],
                error: error instanceof Error ? error.message : '移调失败'
            };
        }
    }
    /**
     * 获取指定调性的和弦列表
     * @param key 调性
     * @param isMinor 是否为小调
     * @returns 和弦列表
     */
    static getChordsByKey(key, isMinor = false) {
        const chordType = isMinor ? 'minor' : 'major';
        return CHORD_MAPS[chordType][key] || [];
    }
    /**
     * 获取罗马数字标记
     * @param isMinor 是否为小调
     * @returns 罗马数字列表
     */
    static getRomanNumerals(isMinor = false) {
        return ROMAN_NUMERALS[isMinor ? 'minor' : 'major'];
    }
    /**
     * 获取和弦的详细信息
     * @param chordName 和弦名称
     * @returns 和弦信息
     */
    static getChordInfo(chordName) {
        // 解析和弦名称，提取根音、品质等信息
        const root = chordName.replace(/[^A-G#b]/g, '');
        const quality = chordName.replace(/^[A-G#b]+/, '');
        return {
            root,
            quality,
            fullName: chordName,
            type: this.getChordType(quality)
        };
    }
    /**
     * 判断和弦类型
     * @param quality 和弦品质标记
     * @returns 和弦类型
     */
    static getChordType(quality) {
        if (!quality || quality === '')
            return 'major';
        if (quality === 'm')
            return 'minor';
        if (quality === 'dim')
            return 'diminished';
        if (quality === '7')
            return 'seventh';
        if (quality === 'M7' || quality === 'maj7')
            return 'majorSeventh';
        if (quality === 'm7')
            return 'minorSeventh';
        return 'unknown';
    }
    /**
     * 批量移调多个进行
     * @param progressions 多个和弦进行
     * @param sourceKey 源调
     * @param targetKey 目标调
     * @param isMinor 是否为小调
     * @returns 移调结果数组
     */
    static batchTranspose(progressions, sourceKey, targetKey, isMinor = false) {
        return progressions.map(progression => this.transpose({ progression, sourceKey, targetKey, isMinor }));
    }
}
