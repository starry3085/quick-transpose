/**
 * Adaptive Card Component
 * Adjusts card size and spacing based on screen size
 */

import React from 'react';
import { Card } from 'tdesign-react';
import { usePlatform } from '../../hooks/usePlatform';
import { getResponsiveSpacing } from '../../utils/platform-detection';

interface AdaptiveCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
  bordered?: boolean;
}

export const AdaptiveCard: React.FC<AdaptiveCardProps> = ({
  title,
  children,
  className = '',
  actions,
  bordered = true
}) => {
  const platform = usePlatform();
  const spacing = getResponsiveSpacing(platform.deviceType);
  
  const cardStyle: React.CSSProperties = {
    marginBottom: spacing.margin,
    borderRadius: platform.isMobile ? '8px' : '12px'
  };

  const headerStyle: React.CSSProperties = {
    fontSize: platform.isMobile ? '16px' : platform.isTablet ? '18px' : '20px',
    fontWeight: '600'
  };

  return (
    <Card
      title={title}
      className={`adaptive-card ${className}`}
      style={cardStyle}
      actions={actions}
      bordered={bordered}
    >
      <div style={{ padding: platform.isMobile ? '8px' : '12px' }}>
        {children}
      </div>
    </Card>
  );
};

export default AdaptiveCard;