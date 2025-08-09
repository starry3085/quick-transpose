/**
 * React hook for platform detection and responsive design
 */

import { useState, useEffect } from 'react';
import { getPlatformInfo, type PlatformInfo } from '../utils/platform-detection';

/**
 * Hook to get current platform information with reactive updates
 */
export function usePlatform(): PlatformInfo {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>(() => getPlatformInfo());

  useEffect(() => {
    const handleResize = () => {
      setPlatformInfo(getPlatformInfo());
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Also listen for orientation change on mobile devices
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return platformInfo;
}

/**
 * Hook to check if current device is mobile
 */
export function useIsMobile(): boolean {
  const { isMobile } = usePlatform();
  return isMobile;
}

/**
 * Hook to check if current device is tablet
 */
export function useIsTablet(): boolean {
  const { isTablet } = usePlatform();
  return isTablet;
}

/**
 * Hook to check if current device is desktop
 */
export function useIsDesktop(): boolean {
  const { isDesktop } = usePlatform();
  return isDesktop;
}

/**
 * Hook to get device type
 */
export function useDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const { deviceType } = usePlatform();
  return deviceType;
}

/**
 * Hook to get screen orientation
 */
export function useOrientation(): 'portrait' | 'landscape' {
  const { orientation } = usePlatform();
  return orientation;
}