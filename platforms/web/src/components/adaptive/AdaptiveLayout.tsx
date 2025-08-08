/**
 * Adaptive Layout Component
 * Provides responsive layout structure based on screen size
 */

import React from 'react';
import { Layout } from 'tdesign-react';
import { usePlatform } from '../../hooks/usePlatform';
import ResponsiveContainer from './ResponsiveContainer';

const { Header, Content } = Layout;

interface AdaptiveLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AdaptiveLayout: React.FC<AdaptiveLayoutProps> = ({
  header,
  children,
  className = ''
}) => {
  const platform = usePlatform();
  
  const headerStyle: React.CSSProperties = {
    height: platform.isMobile ? '56px' : platform.isTablet ? '64px' : '72px',
    padding: platform.isMobile ? '0 16px' : '0 24px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e7e7e7'
  };

  const contentStyle: React.CSSProperties = {
    minHeight: `calc(100vh - ${platform.isMobile ? '56px' : platform.isTablet ? '64px' : '72px'})`,
    backgroundColor: '#f5f5f5'
  };

  return (
    <div className={`adaptive-layout ${className}`}>
      <Layout>
        {header && (
          <Header style={headerStyle}>
            <ResponsiveContainer>
              {header}
            </ResponsiveContainer>
          </Header>
        )}
        
        <Content style={contentStyle}>
          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default AdaptiveLayout;