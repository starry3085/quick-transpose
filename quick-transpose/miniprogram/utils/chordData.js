// 完整的12调和弦数据
const chordMaps = {
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
}

const keys = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B']

const commonProgressions = [
  { label: '4536251', value: '4 5 3 6 2 5 1' },
  { label: '1625', value: '1 6 2 5' },
  { label: '251', value: '2 5 1' },
  { label: '6415', value: '6 4 1 5' },
  { label: '1564', value: '1 5 6 4' }
]

module.exports = {
  chordMaps,
  keys,
  commonProgressions
}