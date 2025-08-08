/**
 * 和弦字典工具函数
 */
import { CHORD_MAPS, ROMAN_NUMERALS, DEGREE_NAMES, ALL_KEYS } from '../constants/chord-data';
/**
 * 获取指定调性的和弦字典数据
 */
export function getChordDictionary(key, isMinor = false) {
    const chordType = isMinor ? 'minor' : 'major';
    const chords = CHORD_MAPS[chordType][key] || [];
    const romanNumerals = ROMAN_NUMERALS[chordType];
    const chordInfos = chords.map((chord, index) => ({
        chord,
        degree: index + 1,
        romanNumeral: romanNumerals[index],
        degreeName: DEGREE_NAMES[index]
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
export function searchChords(query, key, isMinor) {
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
        ALL_KEYS.forEach(k => {
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
export function getChordByDegree(key, degree, isMinor = false) {
    const chordType = isMinor ? 'minor' : 'major';
    const chords = CHORD_MAPS[chordType][key];
    if (!chords || degree < 1 || degree > chords.length) {
        return null;
    }
    return chords[degree - 1];
}
/**
 * 获取和弦的级数信息
 */
export function getChordDegreeInfo(chord, key, isMinor = false) {
    const dictionary = getChordDictionary(key, isMinor);
    return dictionary.chords.find(c => c.chord === chord) || null;
}
/**
 * 验证调性是否有效
 */
export function isValidKey(key) {
    return ALL_KEYS.includes(key);
}
/**
 * 获取相对大小调
 */
export function getRelativeKey(key, isMinor) {
    if (isMinor) {
        // 小调转大调：向上小三度
        const minorIndex = ALL_KEYS.indexOf(key);
        const majorIndex = (minorIndex + 3) % 12;
        return { key: ALL_KEYS[majorIndex], isMinor: false };
    }
    else {
        // 大调转小调：向下小三度
        const majorIndex = ALL_KEYS.indexOf(key);
        const minorIndex = (majorIndex - 3 + 12) % 12;
        return { key: ALL_KEYS[minorIndex], isMinor: true };
    }
}
