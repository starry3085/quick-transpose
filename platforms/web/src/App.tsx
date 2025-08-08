import React from 'react';
import { ConfigProvider } from 'tdesign-react';
import 'tdesign-react/esm/style/index.js';
import TransposeApp from './components/TransposeApp';
import './App.less';

function App() {
  return (
    <ConfigProvider>
      <div className="app">
        <TransposeApp />
      </div>
    </ConfigProvider>
  );
}

export default App;