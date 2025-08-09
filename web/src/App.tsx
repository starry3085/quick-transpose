import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Settings } from 'lucide-react'
import TransposeTab from './components/transpose-tab'
import DictionaryTab from './components/dictionary-tab'
import SettingsPanel from './components/settings-panel'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  const [activeTab, setActiveTab] = useState('transpose')

  return (
    <ThemeProvider defaultTheme="light" storageKey="transpose-theme">
      <div className="min-h-screen bg-white">
        {/* 顶部栏 */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <h1 className="text-lg font-semibold text-gray-900">移调器</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>设置</SheetTitle>
                </SheetHeader>
                <SettingsPanel />
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* 主内容区 */}
        <main className="pb-20">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="transpose" className="mt-0">
              <TransposeTab />
            </TabsContent>
            <TabsContent value="dictionary" className="mt-0">
              <DictionaryTab />
            </TabsContent>
          </Tabs>
        </main>

        {/* 底部导航 */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 h-16 bg-transparent">
                <TabsTrigger 
                  value="transpose" 
                  className="flex flex-col gap-1 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                >
                  <span className="text-xs">转换器</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="dictionary"
                  className="flex flex-col gap-1 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600"
                >
                  <span className="text-xs">字典</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </nav>
      </div>
    </ThemeProvider>
  )
}

export default App