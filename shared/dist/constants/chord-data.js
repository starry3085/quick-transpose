/**
 * 和弦数据常量定义
 */
// 所有调性
export const KEYS = [
    'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'
];
// 简化调性（用于UI显示）
export const SIMPLE_KEYS = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
];
// 完整的12调和弦映射
export const CHORD_MAPS = {
    major: {
        'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
        'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'],
        'Db': ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'],
        'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
        'D#': ['D#', 'E#m', 'F##m', 'G#', 'A#', 'B#m', 'C##dim'],
        'Eb': ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'],
        'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
        'F': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
        'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'],
        'Gb': ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fdim'],
        'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
        'G#': ['G#', 'A#m', 'B#m', 'C#', 'D#', 'E#m', 'F##dim'],
        'Ab': ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'],
        'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
        'A#': ['A#', 'B#m', 'C##m', 'D#', 'E#', 'F##m', 'G##dim'],
        'Bb': ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'],
        'B': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim']
    },
    minor: {
        'C': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
        'C#': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],
        'Db': ['Dbm', 'Ebdim', 'Fb', 'Gbm', 'Abm', 'Bbb', 'Cb'],
        'D': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
        'D#': ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'],
        'Eb': ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db'],
        'E': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
        'F': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
        'F#': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
        'Gb': ['Gbm', 'Abdim', 'Bbb', 'Cbm', 'Dbm', 'Ebb', 'Fb'],
        'G': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
        'G#': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'],
        'Ab': ['Abm', 'Bbdim', 'Cb', 'Dbm', 'Ebm', 'Fb', 'Gb'],
        'A': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
        'A#': ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'],
        'Bb': ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab'],
        'B': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
    }
};
// 罗马数字标记
export const ROMAN_NUMERALS = {
    major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
    minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']
};
// 度数名称
export const DEGREE_NAMES = ['一度', '二度', '三度', '四度', '五度', '六度', '七度'];
// 常用和弦进行
export const COMMON_PROGRESSIONS = [
    { label: '4536251', value: '4 5 3 6 2 5 1' },
    { label: '1625', value: '1 6 2 5' },
    { label: '251', value: '2 5 1' },
    { label: '6415', value: '6 4 1 5' },
    { label: '1564', value: '1 5 6 4' },
    { label: '1456', value: '1 4 5 6' },
    { label: '卡农进行', value: '1 5 6 3 4 1 4 5' }
];
// 和弦类型说明
export const CHORD_TYPE_DESCRIPTIONS = {
    major: '大三和弦',
    minor: '小三和弦',
    diminished: '减三和弦',
    seventh: '七和弦',
    majorSeventh: '大七和弦',
    minorSeventh: '小七和弦'
};
