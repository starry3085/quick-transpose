import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const KEYS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const MAJOR_CHORDS = {
  'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
  'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'],
  'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
  'D#': ['D#', 'E#m', 'F##m', 'G#', 'A#', 'B#m', 'C##dim'],
  'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
  'F': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
  'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'],
  'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
  'G#': ['G#', 'A#m', 'B#m', 'C#', 'D#', 'E#m', 'F##dim'],
  'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
  'A#': ['A#', 'B#m', 'C##m', 'D#', 'E#', 'F##m', 'G##dim'],
  'B': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim']
}

const MINOR_CHORDS = {
  'C': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
  'C#': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],
  'D': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
  'D#': ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'],
  'E': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
  'F': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
  'F#': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
  'G': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
  'G#': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'],
  'A': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
  'A#': ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'],
  'B': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
}

const ROMAN_NUMERALS = {
  major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
  minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']
}

const DEGREE_NAMES = ['一度', '二度', '三度', '四度', '五度', '六度', '七度']

export default function DictionaryTab() {
  const [selectedKey, setSelectedKey] = useState('C')
  const [isMinor, setIsMinor] = useState(false)

  const chordMap = isMinor ? MINOR_CHORDS : MAJOR_CHORDS
  const chords = chordMap[selectedKey as keyof typeof chordMap]
  const romanNumerals = ROMAN_NUMERALS[isMinor ? 'minor' : 'major']

  const fillToTransposer = (progression: string) => {
    // 这里可以通过状态管理或者事件来传递给转换器页面
    console.log('Fill to transposer:', progression)
  }

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      {/* 筛选卡片 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">调式选择</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>调</Label>
              <Select value={selectedKey} onValueChange={setSelectedKey}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {KEYS.map(key => (
                    <SelectItem key={key} value={key}>{key}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2 pt-6">
              <Switch
                id="minor-dict"
                checked={isMinor}
                onCheckedChange={setIsMinor}
              />
              <Label htmlFor="minor-dict">小调</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 度数表 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {selectedKey}{isMinor ? '小调' : '大调'} 和弦表
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {chords.map((chord, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="w-8 text-center">
                    {index + 1}
                  </Badge>
                  <div>
                    <div className="font-medium">{chord}</div>
                    <div className="text-xs text-gray-500">
                      {romanNumerals[index]} · {DEGREE_NAMES[index]}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fillToTransposer((index + 1).toString())}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 说明块 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">和弦标记说明</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>大三和弦</span>
              <span>C, F, G</span>
            </div>
            <div className="flex justify-between">
              <span>小三和弦</span>
              <span>Dm, Em, Am</span>
            </div>
            <div className="flex justify-between">
              <span>减三和弦</span>
              <span>Bdim</span>
            </div>
            <div className="flex justify-between">
              <span>七和弦</span>
              <span>C7, Dm7, G7</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 快捷操作 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">快捷填入</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fillToTransposer('1 4 5 1')}
            >
              I-IV-V-I
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fillToTransposer('6 4 1 5')}
            >
              vi-IV-I-V
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fillToTransposer('1 6 2 5')}
            >
              I-vi-ii-V
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fillToTransposer('4 5 3 6 2 5 1')}
            >
              卡农进行
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}