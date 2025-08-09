/**
 * Responsive Container Component
 * Provides adaptive padding and layout based on screen size
 */

import React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { getResponsiveSpacing } from '../../utils/platform-detection';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: number;
  centerContent?: boolean;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth,
  centerContent = true
}) => {
  const platform = usePlatform();
  const spacing = getResponsiveSpacing(platform.deviceType);
  
  const containerStyle: React.CSSProperties = {
    padding: spacing.padding,
    margin: centerContent ? '0 auto' : '0',
    maxWidth: maxWidth || (platform.isMobile ? '100%' : platform.isTablet ? '768px' : '1200px'),
    width: '100%'
  };

  return (
    <div 
      className={`responsive-container ${className}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;