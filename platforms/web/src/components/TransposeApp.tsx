import React from 'react';
import { Layout, Tabs } from 'tdesign-react';
import { MusicIcon, BookOpenIcon } from 'tdesign-icons-react';
import { useAppContext } from '../App';
import TransposeTab from './TransposeTab';
import DictionaryTab from './DictionaryTab';
import './TransposeApp.less';

const { Header, Content } = Layout;
const { TabPanel } = Tabs;

const TransposeApp: React.FC = () => {
  const { activeTab, setActiveTab } = useAppContext();

  const handleTabChange = (value: string | number) => {
    setActiveTab(String(value));
  };

  return (
    <div className="transpose-app">
      <Layout>
        <Header className="app-header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <MusicIcon size="24px" />
                <span className="logo-text">Quick Transpose</span>
              </div>
              <div className="subtitle">和弦转调工具</div>
            </div>
          </div>
        </Header>
        
        <Content className="app-content">
          <div className="container">
            <div className="main-card">
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                placement="top"
                size="large"
              >
                <TabPanel 
                  value="transpose" 
                  label={
                    <div className="tab-label">
                      <MusicIcon size="16px" />
                      <span>转调工具</span>
                    </div>
                  }
                >
                  <TransposeTab />
                </TabPanel>
                
                <TabPanel 
                  value="dictionary" 
                  label={
                    <div className="tab-label">
                      <BookOpenIcon size="16px" />
                      <span>和弦字典</span>
                    </div>
                  }
                >
                  <DictionaryTab />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default TransposeApp;
