"use strict";
/**
 * 输入验证工具函数
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    /**
     * 验证和弦进行输入
     * @param progression 和弦进行字符串
     * @returns 验证结果
     */
    Validator.validateProgression = function (progression) {
        if (!progression || !progression.trim()) {
            return {
                isValid: false,
                error: '和弦进行不能为空'
            };
        }
        var numbers = progression.split(/[\s,]+/).filter(function (n) { return n.trim(); });
        if (numbers.length === 0) {
            return {
                isValid: false,
                error: '请输入有效的和弦进行'
            };
        }
        // 检查每个数字是否在1-7范围内
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var num = numbers_1[_i];
            var n = parseInt(num);
            if (isNaN(n) || n < 1 || n > 7) {
                return {
                    isValid: false,
                    error: "\u65E0\u6548\u7684\u5EA6\u6570: ".concat(num, "\uFF0C\u8BF7\u8F93\u51651-7\u4E4B\u95F4\u7684\u6570\u5B57")
                };
            }
        }
        return {
            isValid: true
        };
    };
    /**
     * 验证调性
     * @param key 调性字符串
     * @returns 是否有效
     */
    Validator.validateKey = function (key) {
        var validKeys = [
            'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F',
            'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'
        ];
        return validKeys.includes(key);
    };
    /**
     * 验证和弦名称
     * @param chord 和弦名称
     * @returns 是否有效
     */
    Validator.validateChord = function (chord) {
        if (!chord || chord.trim().length === 0) {
            return false;
        }
        // 基本的和弦名称格式验证
        var chordPattern = /^[A-G][#b]?(m|dim|aug|maj|M)?[0-9]*(\+|-|sus|add)?[0-9]*$/;
        return chordPattern.test(chord.trim());
    };
    /**
     * 清理和弦进行输入
     * @param progression 原始输入
     * @returns 清理后的字符串
     */
    Validator.cleanProgression = function (progression) {
        return progression
            .replace(/[^\d\s,]/g, '') // 只保留数字、空格和逗号
            .replace(/\s+/g, ' ') // 多个空格合并为一个
            .replace(/,+/g, ' ') // 逗号替换为空格
            .trim();
    };
    /**
     * 格式化和弦进行显示
     * @param progression 和弦进行
     * @returns 格式化后的字符串
     */
    Validator.formatProgression = function (progression) {
        var cleaned = this.cleanProgression(progression);
        return cleaned.split(/\s+/).join(' ');
    };
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map