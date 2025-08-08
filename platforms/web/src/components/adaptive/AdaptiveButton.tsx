/**
 * Adaptive Button Component
 * Adjusts button size and spacing based on screen size
 */

import React from 'react';
import { Button } from 'tdesign-react';
import { usePlatform } from '../../hooks/usePlatform';
import { getResponsiveButtonSize } from '../../utils/platform-detection';

interface AdaptiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'base' | 'outline' | 'dashed' | 'text';
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  block?: boolean;
}

export const AdaptiveButton: React.FC<AdaptiveButtonProps> = ({
  children,
  onClick,
  variant = 'base',
  theme = 'default',
  disabled = false,
  loading = false,
  icon,
  className = '',
  block = false
}) => {
  const platform = usePlatform();
  const size = getResponsiveButtonSize(platform.deviceType);
  
  const buttonStyle: React.CSSProperties = {
    minHeight: platform.isMobile ? '40px' : platform.isTablet ? '44px' : '48px',
    fontSize: platform.isMobile ? '14px' : '16px',
    borderRadius: platform.isMobile ? '6px' : '8px'
  };

  return (
    <Button
      size={size}
      variant={variant}
      theme={theme}
      disabled={disabled}
      loading={loading}
      icon={icon}
      onClick={onClick}
      className={`adaptive-button ${className}`}
      style={buttonStyle}
      block={block}
    >
      {children}
    </Button>
  );
};

export default AdaptiveButton;