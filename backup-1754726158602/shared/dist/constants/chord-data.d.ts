/**
 * 和弦数据常量
 */
import type { KeyType } from '../types/chord';
export declare const SIMPLE_KEYS: KeyType[];
export declare const ALL_KEYS: KeyType[];
export declare const CHORD_MAPS: {
    readonly major: {
        readonly C: readonly ["C", "Dm", "Em", "F", "G", "Am", "Bdim"];
        readonly 'C#': readonly ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"];
        readonly Db: readonly ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"];
        readonly D: readonly ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"];
        readonly 'D#': readonly ["D#", "E#m", "F##m", "G#", "A#", "B#m", "C##dim"];
        readonly Eb: readonly ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"];
        readonly E: readonly ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"];
        readonly F: readonly ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"];
        readonly 'F#': readonly ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"];
        readonly Gb: readonly ["Gb", "Abm", "Bbm", "Cb", "Db", "Ebm", "Fdim"];
        readonly G: readonly ["G", "Am", "Bm", "C", "D", "Em", "F#dim"];
        readonly 'G#': readonly ["G#", "A#m", "B#m", "C#", "D#", "E#m", "F##dim"];
        readonly Ab: readonly ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"];
        readonly A: readonly ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"];
        readonly 'A#': readonly ["A#", "B#m", "C##m", "D#", "E#", "F##m", "G##dim"];
        readonly Bb: readonly ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"];
        readonly B: readonly ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"];
    };
    readonly minor: {
        readonly C: readonly ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"];
        readonly 'C#': readonly ["C#m", "D#dim", "E", "F#m", "G#m", "A", "B"];
        readonly Db: readonly ["Dbm", "Ebdim", "Fb", "Gbm", "Abm", "Bbb", "Cb"];
        readonly D: readonly ["Dm", "Edim", "F", "Gm", "Am", "Bb", "C"];
        readonly 'D#': readonly ["D#m", "E#dim", "F#", "G#m", "A#m", "B", "C#"];
        readonly Eb: readonly ["Ebm", "Fdim", "Gb", "Abm", "Bbm", "Cb", "Db"];
        readonly E: readonly ["Em", "F#dim", "G", "Am", "Bm", "C", "D"];
        readonly F: readonly ["Fm", "Gdim", "Ab", "Bbm", "Cm", "Db", "Eb"];
        readonly 'F#': readonly ["F#m", "G#dim", "A", "Bm", "C#m", "D", "E"];
        readonly Gb: readonly ["Gbm", "Abdim", "Bbb", "Cbm", "Dbm", "Ebb", "Fb"];
        readonly G: readonly ["Gm", "Adim", "Bb", "Cm", "Dm", "Eb", "F"];
        readonly 'G#': readonly ["G#m", "A#dim", "B", "C#m", "D#m", "E", "F#"];
        readonly Ab: readonly ["Abm", "Bbdim", "Cb", "Dbm", "Ebm", "Fb", "Gb"];
        readonly A: readonly ["Am", "Bdim", "C", "Dm", "Em", "F", "G"];
        readonly 'A#': readonly ["A#m", "B#dim", "C#", "D#m", "E#m", "F#", "G#"];
        readonly Bb: readonly ["Bbm", "Cdim", "Db", "Ebm", "Fm", "Gb", "Ab"];
        readonly B: readonly ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"];
    };
};
export declare const ROMAN_NUMERALS: {
    readonly major: readonly ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
    readonly minor: readonly ["i", "ii°", "III", "iv", "v", "VI", "VII"];
};
export declare const DEGREE_NAMES: readonly ["一度", "二度", "三度", "四度", "五度", "六度", "七度"];
export declare const COMMON_PROGRESSIONS: {
    label: string;
    value: string;
    description: string;
}[];
export declare const CHORD_TYPE_LEGENDS: readonly [{
    readonly label: "大三和弦";
    readonly example: "C, F, G";
    readonly description: "明亮、稳定的和弦";
}, {
    readonly label: "小三和弦";
    readonly example: "Dm, Em, Am";
    readonly description: "柔和、忧郁的和弦";
}, {
    readonly label: "减三和弦";
    readonly example: "Bdim";
    readonly description: "紧张、不稳定的和弦";
}];
//# sourceMappingURL=chord-data.d.ts.map