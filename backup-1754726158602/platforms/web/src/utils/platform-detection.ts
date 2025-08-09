/**
 * Platform detection utilities for responsive design
 */

export interface PlatformInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
}

// Breakpoints following common responsive design standards
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
} as const;

/**
 * Get current platform information
 */
export function getPlatformInfo(): PlatformInfo {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  const isMobile = screenWidth < BREAKPOINTS.mobile;
  const isTablet = screenWidth >= BREAKPOINTS.mobile && screenWidth < BREAKPOINTS.tablet;
  const isDesktop = screenWidth >= BREAKPOINTS.tablet;
  
  let deviceType: 'mobile' | 'tablet' | 'desktop';
  if (isMobile) {
    deviceType = 'mobile';
  } else if (isTablet) {
    deviceType = 'tablet';
  } else {
    deviceType = 'desktop';
  }
  
  const orientation = screenWidth > screenHeight ? 'landscape' : 'portrait';
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    deviceType,
    orientation
  };
}

/**
 * Check if current device is mobile
 */
export function isMobileDevice(): boolean {
  return window.innerWidth < BREAKPOINTS.mobile;
}

/**
 * Check if current device is tablet
 */
export function isTabletDevice(): boolean {
  const width = window.innerWidth;
  return width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet;
}

/**
 * Check if current device is desktop
 */
export function isDesktopDevice(): boolean {
  return window.innerWidth >= BREAKPOINTS.tablet;
}

/**
 * Get responsive grid columns based on screen size
 */
export function getResponsiveColumns(deviceType?: 'mobile' | 'tablet' | 'desktop'): number {
  const type = deviceType || getPlatformInfo().deviceType;
  
  switch (type) {
    case 'mobile':
      return 1;
    case 'tablet':
      return 2;
    case 'desktop':
      return 3;
    default:
      return 2;
  }
}

/**
 * Get responsive card size based on screen size
 */
export function getResponsiveCardSize(deviceType?: 'mobile' | 'tablet' | 'desktop'): 'small' | 'medium' | 'large' {
  const type = deviceType || getPlatformInfo().deviceType;
  
  switch (type) {
    case 'mobile':
      return 'small';
    case 'tablet':
      return 'medium';
    case 'desktop':
      return 'large';
    default:
      return 'medium';
  }
}

/**
 * Get responsive button size based on screen size
 */
export function getResponsiveButtonSize(deviceType?: 'mobile' | 'tablet' | 'desktop'): 'small' | 'medium' | 'large' {
  const type = deviceType || getPlatformInfo().deviceType;
  
  switch (type) {
    case 'mobile':
      return 'medium';
    case 'tablet':
      return 'medium';
    case 'desktop':
      return 'large';
    default:
      return 'medium';
  }
}

/**
 * Get responsive spacing based on screen size
 */
export function getResponsiveSpacing(deviceType?: 'mobile' | 'tablet' | 'desktop'): {
  padding: string;
  margin: string;
  gap: string;
} {
  const type = deviceType || getPlatformInfo().deviceType;
  
  switch (type) {
    case 'mobile':
      return {
        padding: '12px',
        margin: '8px',
        gap: '8px'
      };
    case 'tablet':
      return {
        padding: '16px',
        margin: '12px',
        gap: '12px'
      };
    case 'desktop':
      return {
        padding: '24px',
        margin: '16px',
        gap: '16px'
      };
    default:
      return {
        padding: '16px',
        margin: '12px',
        gap: '12px'
      };
  }
}