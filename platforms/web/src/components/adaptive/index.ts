/**
 * Adaptive UI Components
 * Export all adaptive components for easy importing
 */

export { default as ResponsiveGrid } from './ResponsiveGrid';
export { default as ResponsiveContainer } from './ResponsiveContainer';
export { default as AdaptiveCard } from './AdaptiveCard';
export { default as AdaptiveButton } from './AdaptiveButton';
export { default as AdaptiveLayout } from './AdaptiveLayout';

// Re-export hooks and utilities
export { usePlatform, useIsMobile, useIsTablet, useIsDesktop, useDeviceType, useOrientation } from '../../hooks/usePlatform';
export { 
  getPlatformInfo, 
  isMobileDevice, 
  isTabletDevice, 
  isDesktopDevice,
  getResponsiveColumns,
  getResponsiveCardSize,
  getResponsiveButtonSize,
  getResponsiveSpacing,
  BREAKPOINTS
} from '../../utils/platform-detection';