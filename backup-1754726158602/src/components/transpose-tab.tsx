import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown, Copy } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const COMMON_PROGRESSIONS = [
  { label: '4536251', value: '4 5 3 6 2 5 1' },
  { label: '1625', value: '1 6 2 5' },
  { label: '251', value: '2 5 1' },
  { label: '6415', value: '6 4 1 5' }
]

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

export default function TransposeTab() {
  const [progression, setProgression] = useState('')
  const [sourceKey, setSourceKey] = useState('C')
  const [targetKey, setTargetKey] = useState('G')
  const [isMinor, setIsMinor] = useState(false)
  const [useSeventhChords, setUseSeventhChords] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const { toast } = useToast()

  const transposeChords = () => {
    if (!progression.trim()) return []
    
    const chordMap = isMinor ? MINOR_CHORDS : MAJOR_CHORDS
    const sourceChords = chordMap[sourceKey as keyof typeof chordMap]
    const targetChords = chordMap[targetKey as keyof typeof chordMap]
    const romanNumerals = ROMAN_NUMERALS[isMinor ? 'minor' : 'major']
    
    const numbers = progression.split(/[\s,]+/).filter(n => n.trim())
    
    return numbers.map(num => {
      const index = parseInt(num) - 1
      if (index >= 0 && index < 7) {
        const targetChord = targetChords[index]
        const roman = romanNumerals[index]
        const finalChord = useSeventhChords && index !== 6 ? targetChord + '7' : targetChord
        return { chord: finalChord, roman, original: sourceChords[index] }
      }
      return { chord: num, roman: '', original: num }
    })
  }

  const result = transposeChords()

  const copyResult = () => {
    const chordString = result.map(r => r.chord).join(' ')
    navigator.clipboard.writeText(chordString)
    toast({ title: '已复制到剪贴板' })
  }

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      {/* 输入卡片 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">和弦进行输入</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="progression">和弦进行（数字）</Label>
            <Input
              id="progression"
              placeholder="例如：4 5 3 6 2 5 1"
              value={progression}
              onChange={(e) => setProgression(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>源调</Label>
              <Select value={sourceKey} onValueChange={setSourceKey}>
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
            
            <div>
              <Label>目标调</Label>
              <Select value={targetKey} onValueChange={setTargetKey}>
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
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="minor"
                checked={isMinor}
                onCheckedChange={setIsMinor}
              />
              <Label htmlFor="minor">小调</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="seventh"
                checked={useSeventhChords}
                onCheckedChange={setUseSeventhChords}
              />
              <Label htmlFor="seventh">七和弦</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 快捷键区 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">常用走向</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {COMMON_PROGRESSIONS.map(prog => (
              <Badge
                key={prog.label}
                variant="outline"
                className="cursor-pointer hover:bg-emerald-50"
                onClick={() => setProgression(prog.value)}
              >
                {prog.label}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 结果卡片 */}
      {result.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">转换结果</CardTitle>
              <Button variant="outline" size="sm" onClick={copyResult}>
                <Copy className="h-4 w-4 mr-1" />
                复制
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {result.map((item, index) => (
                  <div key={index} className="text-center">
                    <Badge variant="secondary" className="mb-1">
                      {item.chord}
                    </Badge>
                    <div className="text-xs text-gray-500">{item.roman}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 对照折叠 */}
      {result.length > 0 && (
        <Collapsible open={showComparison} onOpenChange={setShowComparison}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full">
              <ChevronDown className="h-4 w-4 mr-2" />
              原调→目标调对照
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2">
              <CardContent className="pt-4">
                <div className="space-y-2">
                  {result.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span>{item.original}</span>
                      <span>→</span>
                      <span className="font-medium">{item.chord}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  )
}