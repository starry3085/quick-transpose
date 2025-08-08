import React, { createContext, useContext, useState } from 'react';
import { ConfigProvider } from 'tdesign-react';
import 'tdesign-react/esm/style/index.js';
import TransposeApp from './components/TransposeApp';
import './App.less';

// 创建应用上下文用于组件间通信
interface AppContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  fillProgression: (progression: string) => void;
  fillProgressionData: string | null;
  clearFillData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

function App() {
  const [activeTab, setActiveTab] = useState('transpose');
  const [fillProgressionData, setFillProgressionData] = useState<string | null>(null);

  const fillProgression = (progression: string) => {
    setFillProgressionData(progression);
    setActiveTab('transpose'); // 自动切换到转调工具页面
  };

  const clearFillData = () => {
    setFillProgressionData(null);
  };

  const contextValue: AppContextType = {
    activeTab,
    setActiveTab,
    fillProgression,
    fillProgressionData,
    clearFillData
  };

  return (
      <ConfigProvider globalConfig={{}}>
      <AppContext.Provider value={contextValue}>
        <div className="app">
          <TransposeApp />
        </div>
      </AppContext.Provider>
    </ConfigProvider>
  );
}

export default App;
