import React from 'react';
import { Tabs } from 'tdesign-react';
import { MusicIcon, BookOpenIcon } from 'tdesign-icons-react';
import { useAppContext } from '../App';
import { AdaptiveLayout, ResponsiveContainer, usePlatform } from './adaptive';
import TransposeTab from './TransposeTab';
import DictionaryTab from './DictionaryTab';
import './TransposeApp.less';

const { TabPanel } = Tabs;

const TransposeApp: React.FC = () => {
  const { activeTab, setActiveTab } = useAppContext();
  const platform = usePlatform();

  const handleTabChange = (value: string | number) => {
    setActiveTab(String(value));
  };

  // Adaptive header content
  const headerContent = (
    <div className="header-content" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      width: '100%'
    }}>
      <div className="logo" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: platform.isMobile ? '8px' : '12px'
      }}>
        <MusicIcon size={platform.isMobile ? "20px" : "24px"} />
        <span className="logo-text" style={{
          fontSize: platform.isMobile ? '18px' : platform.isTablet ? '20px' : '24px',
          fontWeight: '600'
        }}>
          Quick Transpose
        </span>
      </div>
      {!platform.isMobile && (
        <div className="subtitle" style={{
          fontSize: platform.isTablet ? '14px' : '16px',
          color: '#666'
        }}>
          和弦转调工具
        </div>
      )}
    </div>
  );

  // Adaptive tab size
  const tabSize = platform.isMobile ? 'medium' : 'large';

  return (
    <div className="transpose-app">
      <AdaptiveLayout header={headerContent}>
        <ResponsiveContainer>
          <div className="main-card" style={{
            backgroundColor: 'white',
            borderRadius: platform.isMobile ? '8px' : '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              placement="top"
              size={tabSize}
            >
              <TabPanel 
                value="transpose" 
                label={
                  <div className="tab-label" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: platform.isMobile ? '4px' : '8px'
                  }}>
                    <MusicIcon size={platform.isMobile ? "14px" : "16px"} />
                    <span style={{ fontSize: platform.isMobile ? '14px' : '16px' }}>
                      {platform.isMobile ? '转调' : '转调工具'}
                    </span>
                  </div>
                }
              >
                <TransposeTab />
              </TabPanel>
              
              <TabPanel 
                value="dictionary" 
                label={
                  <div className="tab-label" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: platform.isMobile ? '4px' : '8px'
                  }}>
                    <BookOpenIcon size={platform.isMobile ? "14px" : "16px"} />
                    <span style={{ fontSize: platform.isMobile ? '14px' : '16px' }}>
                      {platform.isMobile ? '字典' : '和弦字典'}
                    </span>
                  </div>
                }
              >
                <DictionaryTab />
              </TabPanel>
            </Tabs>
          </div>
        </ResponsiveContainer>
      </AdaptiveLayout>
    </div>
  );
};

export default TransposeApp;
