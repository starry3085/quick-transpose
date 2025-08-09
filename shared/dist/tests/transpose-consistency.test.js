/**
 * 跨平台转调一致性测试
 * 确保Web端和小程序端产生相同的转调结果
 */
import { TransposeEngine } from '../utils/transpose';
import { ErrorHandler } from '../utils/error-handler';
import { CHORD_MAPS, ROMAN_NUMERALS } from '../constants/chord-data';
// 设置错误处理器平台
ErrorHandler.setPlatform('web');
describe('Cross-platform Transpose Consistency Tests', () => {
    describe('Basic Transpose Functionality', () => {
        test('should transpose simple progression correctly', () => {
            const params = {
                progression: '1 4 5 1',
                sourceKey: 'C',
                targetKey: 'G',
                isMinor: false
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(true);
            expect(result.data).toHaveLength(4);
            expect(result.data[0].chord).toBe('G');
            expect(result.data[1].chord).toBe('C');
            expect(result.data[2].chord).toBe('D');
            expect(result.data[3].chord).toBe('G');
        });
        test('should handle minor key transposition', () => {
            const params = {
                progression: '1 4 5 1',
                sourceKey: 'A',
                targetKey: 'D',
                isMinor: true
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(true);
            expect(result.data[0].chord).toBe('Dm');
            expect(result.data[1].chord).toBe('Gm');
            expect(result.data[2].chord).toBe('Am');
            expect(result.data[3].chord).toBe('Dm');
        });
        test('should add seventh chords when requested', () => {
            const params = {
                progression: '1 2 5',
                sourceKey: 'C',
                targetKey: 'F',
                isMinor: false,
                useSeventhChords: true
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(true);
            expect(result.data[0].chord).toBe('F7');
            expect(result.data[1].chord).toBe('Gm7');
            expect(result.data[2].chord).toBe('C7');
        });
    });
    describe('Error Handling Consistency', () => {
        test('should return consistent error for empty progression', () => {
            const params = {
                progression: '',
                sourceKey: 'C',
                targetKey: 'G',
                isMinor: false
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(false);
            expect(result.error).toBe('和弦进行不能为空');
        });
        test('should return consistent error for invalid key', () => {
            const params = {
                progression: '1 4 5',
                sourceKey: 'X',
                targetKey: 'G',
                isMinor: false
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(false);
            expect(result.error).toBe('不支持的调性');
        });
    });
    describe('Complex Progressions', () => {
        test('should handle canon progression (4536251)', () => {
            const params = {
                progression: '4 5 3 6 2 5 1',
                sourceKey: 'C',
                targetKey: 'D',
                isMinor: false
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(true);
            expect(result.data).toHaveLength(7);
            expect(result.data.map(d => d.chord)).toEqual([
                'G', 'A', 'F#m', 'Bm', 'Em', 'A', 'D'
            ]);
        });
        test('should handle jazz progression (251)', () => {
            const params = {
                progression: '2 5 1',
                sourceKey: 'C',
                targetKey: 'Bb',
                isMinor: false
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(true);
            expect(result.data.map(d => d.chord)).toEqual(['Cm', 'F', 'Bb']);
        });
    });
    describe('All Keys Consistency', () => {
        const testKeys = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
        test('should work with all major keys', () => {
            testKeys.forEach(sourceKey => {
                testKeys.forEach(targetKey => {
                    const params = {
                        progression: '1 4 5 1',
                        sourceKey,
                        targetKey,
                        isMinor: false
                    };
                    const result = TransposeEngine.transpose(params);
                    expect(result.success).toBe(true);
                    expect(result.data).toHaveLength(4);
                });
            });
        });
        test('should work with all minor keys', () => {
            testKeys.forEach(sourceKey => {
                testKeys.forEach(targetKey => {
                    const params = {
                        progression: '1 4 5 1',
                        sourceKey,
                        targetKey,
                        isMinor: true
                    };
                    const result = TransposeEngine.transpose(params);
                    expect(result.success).toBe(true);
                    expect(result.data).toHaveLength(4);
                });
            });
        });
    });
    describe('Utility Functions', () => {
        test('getChordsByKey should return correct chords', () => {
            const cMajorChords = TransposeEngine.getChordsByKey('C', false);
            expect(cMajorChords).toEqual(['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim']);
            const aMinorChords = TransposeEngine.getChordsByKey('A', true);
            expect(aMinorChords).toEqual(['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']);
        });
        test('getRomanNumerals should return correct numerals', () => {
            const majorNumerals = TransposeEngine.getRomanNumerals(false);
            expect(majorNumerals).toEqual(['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']);
            const minorNumerals = TransposeEngine.getRomanNumerals(true);
            expect(minorNumerals).toEqual(['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']);
        });
        test('batchTranspose should handle multiple progressions', () => {
            const progressions = ['1 4 5 1', '2 5 1', '6 4 1 5'];
            const results = TransposeEngine.batchTranspose(progressions, 'C', 'G', false);
            expect(results).toHaveLength(3);
            results.forEach(result => {
                expect(result.success).toBe(true);
            });
        });
    });
    describe('Edge Cases', () => {
        test('should handle invalid degree numbers gracefully', () => {
            const params = {
                progression: '1 8 5 0',
                sourceKey: 'C',
                targetKey: 'G',
                isMinor: false
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(true);
            expect(result.data).toHaveLength(4);
            expect(result.data[0].chord).toBe('G'); // Valid degree 1
            expect(result.data[1].chord).toBe('8'); // Invalid degree, kept as-is
            expect(result.data[2].chord).toBe('D'); // Valid degree 5
            expect(result.data[3].chord).toBe('0'); // Invalid degree, kept as-is
        });
        test('should handle mixed valid/invalid input', () => {
            const params = {
                progression: '1 abc 4 xyz 5',
                sourceKey: 'C',
                targetKey: 'F',
                isMinor: false
            };
            const result = TransposeEngine.transpose(params);
            expect(result.success).toBe(true);
            expect(result.data).toHaveLength(5);
            expect(result.data[0].chord).toBe('F'); // Valid
            expect(result.data[1].chord).toBe('abc'); // Invalid, kept as-is
            expect(result.data[2].chord).toBe('Bb'); // Valid
            expect(result.data[3].chord).toBe('xyz'); // Invalid, kept as-is
            expect(result.data[4].chord).toBe('C'); // Valid
        });
    });
    describe('Data Integrity', () => {
        test('should maintain chord data consistency', () => {
            // Verify that CHORD_MAPS has all required keys
            const expectedKeys = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
            expectedKeys.forEach(key => {
                expect(CHORD_MAPS.major[key]).toBeDefined();
                expect(CHORD_MAPS.minor[key]).toBeDefined();
                expect(CHORD_MAPS.major[key]).toHaveLength(7);
                expect(CHORD_MAPS.minor[key]).toHaveLength(7);
            });
        });
        test('should maintain roman numerals consistency', () => {
            expect(ROMAN_NUMERALS.major).toHaveLength(7);
            expect(ROMAN_NUMERALS.minor).toHaveLength(7);
            expect(ROMAN_NUMERALS.major).toEqual(['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']);
            expect(ROMAN_NUMERALS.minor).toEqual(['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']);
        });
    });
});
/**
 * 性能测试
 */
describe('Performance Tests', () => {
    test('should handle large batch operations efficiently', () => {
        const progressions = Array(100).fill('1 4 5 1');
        const startTime = Date.now();
        const results = TransposeEngine.batchTranspose(progressions, 'C', 'G', false);
        const endTime = Date.now();
        const duration = endTime - startTime;
        expect(results).toHaveLength(100);
        expect(duration).toBeLessThan(1000); // Should complete within 1 second
        results.forEach(result => {
            expect(result.success).toBe(true);
        });
    });
    test('should handle complex progressions efficiently', () => {
        const complexProgression = '1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7';
        const startTime = Date.now();
        const result = TransposeEngine.transpose({
            progression: complexProgression,
            sourceKey: 'C',
            targetKey: 'F#',
            isMinor: false
        });
        const endTime = Date.now();
        const duration = endTime - startTime;
        expect(result.success).toBe(true);
        expect(result.data).toHaveLength(21);
        expect(duration).toBeLessThan(100); // Should complete within 100ms
    });
});
