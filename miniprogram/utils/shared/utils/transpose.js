"use strict";
/**
 * 和弦移调核心算法
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransposeEngine = void 0;
var chord_data_1 = require("../constants/chord-data");
/**
 * 移调核心函数
 */
var TransposeEngine = /** @class */ (function () {
    function TransposeEngine() {
    }
    /**
     * 执行和弦移调
     * @param params 移调参数
     * @returns 移调结果
     */
    TransposeEngine.transpose = function (params) {
        var progression = params.progression, sourceKey = params.sourceKey, targetKey = params.targetKey, isMinor = params.isMinor, _a = params.useSeventhChords, useSeventhChords = _a === void 0 ? false : _a;
        // 输入验证
        if (!progression || !progression.trim()) {
            return {
                success: false,
                data: [],
                error: '和弦进行不能为空'
            };
        }
        try {
            var chordType = isMinor ? 'minor' : 'major';
            var sourceChords_1 = chord_data_1.CHORD_MAPS[chordType][sourceKey];
            var targetChords_1 = chord_data_1.CHORD_MAPS[chordType][targetKey];
            var romanNumerals_1 = chord_data_1.ROMAN_NUMERALS[chordType];
            if (!sourceChords_1 || !targetChords_1) {
                return {
                    success: false,
                    data: [],
                    error: '不支持的调性'
                };
            }
            // 解析和弦进行
            var numbers = progression.split(/[\s,]+/).filter(function (n) { return n.trim(); });
            var result = numbers.map(function (num) {
                var index = parseInt(num) - 1;
                if (index >= 0 && index < 7) {
                    var targetChord = targetChords_1[index];
                    // 添加七和弦（除了减七和弦）
                    if (useSeventhChords && index !== 6) {
                        targetChord += '7';
                    }
                    return {
                        chord: targetChord,
                        roman: romanNumerals_1[index],
                        original: sourceChords_1[index],
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
    };
    /**
     * 获取指定调性的和弦列表
     * @param key 调性
     * @param isMinor 是否为小调
     * @returns 和弦列表
     */
    TransposeEngine.getChordsByKey = function (key, isMinor) {
        if (isMinor === void 0) { isMinor = false; }
        var chordType = isMinor ? 'minor' : 'major';
        return __spreadArray([], (chord_data_1.CHORD_MAPS[chordType][key] || []), true);
    };
    /**
     * 获取罗马数字标记
     * @param isMinor 是否为小调
     * @returns 罗马数字列表
     */
    TransposeEngine.getRomanNumerals = function (isMinor) {
        if (isMinor === void 0) { isMinor = false; }
        return __spreadArray([], chord_data_1.ROMAN_NUMERALS[isMinor ? 'minor' : 'major'], true);
    };
    /**
     * 获取和弦的详细信息
     * @param chordName 和弦名称
     * @returns 和弦信息
     */
    TransposeEngine.getChordInfo = function (chordName) {
        // 解析和弦名称，提取根音、品质等信息
        var root = chordName.replace(/[^A-G#b]/g, '');
        var quality = chordName.replace(/^[A-G#b]+/, '');
        return {
            root: root,
            quality: quality,
            fullName: chordName,
            type: this.getChordType(quality)
        };
    };
    /**
     * 判断和弦类型
     * @param quality 和弦品质标记
     * @returns 和弦类型
     */
    TransposeEngine.getChordType = function (quality) {
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
    };
    /**
     * 批量移调多个进行
     * @param progressions 多个和弦进行
     * @param sourceKey 源调
     * @param targetKey 目标调
     * @param isMinor 是否为小调
     * @returns 移调结果数组
     */
    TransposeEngine.batchTranspose = function (progressions, sourceKey, targetKey, isMinor) {
        var _this = this;
        if (isMinor === void 0) { isMinor = false; }
        return progressions.map(function (progression) {
            return _this.transpose({ progression: progression, sourceKey: sourceKey, targetKey: targetKey, isMinor: isMinor });
        });
    };
    return TransposeEngine;
}());
exports.TransposeEngine = TransposeEngine;
//# sourceMappingURL=transpose.js.map