"use strict";
/**
 * 和弦字典工具函数
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChordDictionary = getChordDictionary;
exports.searchChords = searchChords;
exports.getChordByDegree = getChordByDegree;
exports.getChordDegreeInfo = getChordDegreeInfo;
exports.isValidKey = isValidKey;
exports.getRelativeKey = getRelativeKey;
var chord_data_1 = require("../constants/chord-data");
/**
 * 获取指定调性的和弦字典数据
 */
function getChordDictionary(key, isMinor) {
    if (isMinor === void 0) { isMinor = false; }
    var chordType = isMinor ? 'minor' : 'major';
    var chords = chord_data_1.CHORD_MAPS[chordType][key] || [];
    var romanNumerals = chord_data_1.ROMAN_NUMERALS[chordType];
    var chordInfos = chords.map(function (chord, index) { return ({
        chord: chord,
        degree: index + 1,
        romanNumeral: romanNumerals[index],
        degreeName: chord_data_1.DEGREE_NAMES[index]
    }); });
    return {
        key: key,
        isMinor: isMinor,
        chords: chordInfos
    };
}
/**
 * 搜索和弦
 */
function searchChords(query, key, isMinor) {
    var results = [];
    if (key !== undefined && isMinor !== undefined) {
        // 在指定调性中搜索
        var dictionary = getChordDictionary(key, isMinor);
        return dictionary.chords.filter(function (chord) {
            return chord.chord.toLowerCase().includes(query.toLowerCase()) ||
                chord.romanNumeral.toLowerCase().includes(query.toLowerCase()) ||
                chord.degreeName.includes(query);
        });
    }
    else {
        // 在所有调性中搜索
        chord_data_1.ALL_KEYS.forEach(function (k) {
            [false, true].forEach(function (minor) {
                var dictionary = getChordDictionary(k, minor);
                var matches = dictionary.chords.filter(function (chord) {
                    return chord.chord.toLowerCase().includes(query.toLowerCase()) ||
                        chord.romanNumeral.toLowerCase().includes(query.toLowerCase()) ||
                        chord.degreeName.includes(query);
                });
                results.push.apply(results, matches);
            });
        });
    }
    return results;
}
/**
 * 根据级数获取和弦
 */
function getChordByDegree(key, degree, isMinor) {
    if (isMinor === void 0) { isMinor = false; }
    var chordType = isMinor ? 'minor' : 'major';
    var chords = chord_data_1.CHORD_MAPS[chordType][key];
    if (!chords || degree < 1 || degree > chords.length) {
        return null;
    }
    return chords[degree - 1];
}
/**
 * 获取和弦的级数信息
 */
function getChordDegreeInfo(chord, key, isMinor) {
    if (isMinor === void 0) { isMinor = false; }
    var dictionary = getChordDictionary(key, isMinor);
    return dictionary.chords.find(function (c) { return c.chord === chord; }) || null;
}
/**
 * 验证调性是否有效
 */
function isValidKey(key) {
    return chord_data_1.ALL_KEYS.includes(key);
}
/**
 * 获取相对大小调
 */
function getRelativeKey(key, isMinor) {
    if (isMinor) {
        // 小调转大调：向上小三度
        var minorIndex = chord_data_1.ALL_KEYS.indexOf(key);
        var majorIndex = (minorIndex + 3) % 12;
        return { key: chord_data_1.ALL_KEYS[majorIndex], isMinor: false };
    }
    else {
        // 大调转小调：向下小三度
        var majorIndex = chord_data_1.ALL_KEYS.indexOf(key);
        var minorIndex = (majorIndex - 3 + 12) % 12;
        return { key: chord_data_1.ALL_KEYS[minorIndex], isMinor: true };
    }
}
//# sourceMappingURL=chord-dictionary.js.map