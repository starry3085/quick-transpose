import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { RotateCcw } from 'lucide-react'

export default function SettingsPanel() {
  const [inputMode, setInputMode] = useState('number')
  const [romanCase, setRomanCase] = useState('mixed')
  const [showFunctional, setShowFunctional] = useState(false)
  const [accidentalPreference, setAccidentalPreference] = useState('sharp')

  const resetSettings = () => {
    setInputMode('number')
    setRomanCase('mixed')
    setShowFunctional(false)
    setAccidentalPreference('sharp')
  }

  return (
    <div className="space-y-6 pt-6">
      {/* 输入偏好 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">输入偏好</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>默认输入模式</Label>
            <Select value={inputMode} onValueChange={setInputMode}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="number">数字 (1, 2, 3...)</SelectItem>
                <SelectItem value="roman">罗马数字 (I, ii, iii...)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 标记偏好 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">标记偏好</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>罗马数字大小写</Label>
            <Select value={romanCase} onValueChange={setRomanCase}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mixed">混合 (I, ii, iii...)</SelectItem>
                <SelectItem value="upper">全大写 (I, II, III...)</SelectItem>
                <SelectItem value="lower">全小写 (i, ii, iii...)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="functional">显示功能和声记号</Label>
            <Switch
              id="functional"
              checked={showFunctional}
              onCheckedChange={setShowFunctional}
            />
          </div>
        </CardContent>
      </Card>

      {/* 音名偏好 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">音名偏好</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label>升降号倾向</Label>
            <Select value={accidentalPreference} onValueChange={setAccidentalPreference}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sharp">优先升号 (#)</SelectItem>
                <SelectItem value="flat">优先降号 (♭)</SelectItem>
                <SelectItem value="context">根据调性自动</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* 重置按钮 */}
      <div className="flex justify-center">
        <Button variant="outline" onClick={resetSettings}>
          <RotateCcw className="h-4 w-4 mr-2" />
          恢复默认设置
        </Button>
      </div>

      {/* 版本信息 */}
      <div className="text-center text-xs text-gray-500 pt-4">
        移调器 v1.0.0
        <br />
        支持大调/自然小调，三/七和弦
      </div>
    </div>
  )
}