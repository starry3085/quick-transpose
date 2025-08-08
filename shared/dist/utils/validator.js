/**
 * 输入验证工具函数
 */
export class Validator {
    /**
     * 验证和弦进行输入
     * @param progression 和弦进行字符串
     * @returns 验证结果
     */
    static validateProgression(progression) {
        if (!progression || !progression.trim()) {
            return {
                isValid: false,
                error: '和弦进行不能为空'
            };
        }
        const numbers = progression.split(/[\s,]+/).filter(n => n.trim());
        if (numbers.length === 0) {
            return {
                isValid: false,
                error: '请输入有效的和弦进行'
            };
        }
        // 检查每个数字是否在1-7范围内
        for (const num of numbers) {
            const n = parseInt(num);
            if (isNaN(n) || n < 1 || n > 7) {
                return {
                    isValid: false,
                    error: `无效的度数: ${num}，请输入1-7之间的数字`
                };
            }
        }
        return {
            isValid: true
        };
    }
    /**
     * 验证调性
     * @param key 调性字符串
     * @returns 是否有效
     */
    static validateKey(key) {
        const validKeys = [
            'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F',
            'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'
        ];
        return validKeys.includes(key);
    }
    /**
     * 验证和弦名称
     * @param chord 和弦名称
     * @returns 是否有效
     */
    static validateChord(chord) {
        if (!chord || chord.trim().length === 0) {
            return false;
        }
        // 基本的和弦名称格式验证
        const chordPattern = /^[A-G][#b]?(m|dim|aug|maj|M)?[0-9]*(\+|-|sus|add)?[0-9]*$/;
        return chordPattern.test(chord.trim());
    }
    /**
     * 清理和弦进行输入
     * @param progression 原始输入
     * @returns 清理后的字符串
     */
    static cleanProgression(progression) {
        return progression
            .replace(/[^\d\s,]/g, '') // 只保留数字、空格和逗号
            .replace(/\s+/g, ' ') // 多个空格合并为一个
            .replace(/,+/g, ' ') // 逗号替换为空格
            .trim();
    }
    /**
     * 格式化和弦进行显示
     * @param progression 和弦进行
     * @returns 格式化后的字符串
     */
    static formatProgression(progression) {
        const cleaned = this.cleanProgression(progression);
        return cleaned.split(/\s+/).join(' ');
    }
}
