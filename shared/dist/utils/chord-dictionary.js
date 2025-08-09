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
const chord_data_1 = require("../constants/chord-data");
/**
 * 获取指定调性的和弦字典数据
 */
function getChordDictionary(key, isMinor = false) {
    const chordType = isMinor ? 'minor' : 'major';
    const chords = chord_data_1.CHORD_MAPS[chordType][key] || [];
    const romanNumerals = chord_data_1.ROMAN_NUMERALS[chordType];
    const chordInfos = chords.map((chord, index) => ({
        chord,
        degree: index + 1,
        romanNumeral: romanNumerals[index],
        degreeName: chord_data_1.DEGREE_NAMES[index]
    }));
    return {
        key,
        isMinor,
        chords: chordInfos
    };
}
/**
 * 搜索和弦
 */
function searchChords(query, key, isMinor) {
    const results = [];
    if (key !== undefined && isMinor !== undefined) {
        // 在指定调性中搜索
        const dictionary = getChordDictionary(key, isMinor);
        return dictionary.chords.filter(chord => chord.chord.toLowerCase().includes(query.toLowerCase()) ||
            chord.romanNumeral.toLowerCase().includes(query.toLowerCase()) ||
            chord.degreeName.includes(query));
    }
    else {
        // 在所有调性中搜索
        chord_data_1.ALL_KEYS.forEach(k => {
            [false, true].forEach(minor => {
                const dictionary = getChordDictionary(k, minor);
                const matches = dictionary.chords.filter(chord => chord.chord.toLowerCase().includes(query.toLowerCase()) ||
                    chord.romanNumeral.toLowerCase().includes(query.toLowerCase()) ||
                    chord.degreeName.includes(query));
                results.push(...matches);
            });
        });
    }
    return results;
}
/**
 * 根据级数获取和弦
 */
function getChordByDegree(key, degree, isMinor = false) {
    const chordType = isMinor ? 'minor' : 'major';
    const chords = chord_data_1.CHORD_MAPS[chordType][key];
    if (!chords || degree < 1 || degree > chords.length) {
        return null;
    }
    return chords[degree - 1];
}
/**
 * 获取和弦的级数信息
 */
function getChordDegreeInfo(chord, key, isMinor = false) {
    const dictionary = getChordDictionary(key, isMinor);
    return dictionary.chords.find(c => c.chord === chord) || null;
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
        const minorIndex = chord_data_1.ALL_KEYS.indexOf(key);
        const majorIndex = (minorIndex + 3) % 12;
        return { key: chord_data_1.ALL_KEYS[majorIndex], isMinor: false };
    }
    else {
        // 大调转小调：向下小三度
        const majorIndex = chord_data_1.ALL_KEYS.indexOf(key);
        const minorIndex = (majorIndex - 3 + 12) % 12;
        return { key: chord_data_1.ALL_KEYS[minorIndex], isMinor: true };
    }
}
//# sourceMappingURL=chord-dictionary.js.map