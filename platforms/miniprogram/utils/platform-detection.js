/**
 * Platform detection utility for WeChat Miniprogram
 * Provides device type detection and responsive breakpoints
 */

// Device type constants
const DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
};

// Breakpoints for responsive design (in px)
const BREAKPOINTS = {
  MOBILE_MAX: 768,
  TABLET_MIN: 769,
  TABLET_MAX: 1024,
  DESKTOP_MIN: 1025
};

/**
 * Get system information and determine device type
 * @returns {Object} System info with device type and responsive data
 */
function getSystemInfo() {
  try {
    const systemInfo = wx.getSystemInfoSync();
    const screenWidth = systemInfo.screenWidth;
    const screenHeight = systemInfo.screenHeight;
    
    // Determine device type based on screen width
    let deviceType = DEVICE_TYPES.MOBILE;
    if (screenWidth >= BREAKPOINTS.DESKTOP_MIN) {
      deviceType = DEVICE_TYPES.DESKTOP;
    } else if (screenWidth >= BREAKPOINTS.TABLET_MIN) {
      deviceType = DEVICE_TYPES.TABLET;
    }
    
    // Calculate responsive properties
    const isLandscape = screenWidth > screenHeight;
    const pixelRatio = systemInfo.pixelRatio || 1;
    const safeArea = systemInfo.safeArea || {};
    
    return {
      // Original system info
      ...systemInfo,
      
      // Enhanced properties
      deviceType,
      isLandscape,
      isMobile: deviceType === DEVICE_TYPES.MOBILE,
      isTablet: deviceType === DEVICE_TYPES.TABLET,
      isDesktop: deviceType === DEVICE_TYPES.DESKTOP,
      
      // Responsive breakpoints
      breakpoints: BREAKPOINTS,
      
      // Layout helpers
      containerWidth: Math.min(screenWidth, 1200), // Max container width
      gridCols: deviceType === DEVICE_TYPES.MOBILE ? 1 : 
                deviceType === DEVICE_TYPES.TABLET ? 2 : 3,
      
      // Safe area for iPhone X and similar devices
      safeAreaTop: safeArea.top || 0,
      safeAreaBottom: safeArea.bottom || screenHeight,
      safeAreaHeight: (safeArea.bottom || screenHeight) - (safeArea.top || 0),
      
      // Status bar and navigation
      statusBarHeight: systemInfo.statusBarHeight || 0,
      navigationBarHeight: 44, // Standard miniprogram navigation height
      
      // Platform info
      platform: systemInfo.platform,
      version: systemInfo.version,
      SDKVersion: systemInfo.SDKVersion
    };
  } catch (error) {
    console.error('Failed to get system info:', error);
    
    // Fallback values
    return {
      screenWidth: 375,
      screenHeight: 667,
      deviceType: DEVICE_TYPES.MOBILE,
      isLandscape: false,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      breakpoints: BREAKPOINTS,
      containerWidth: 375,
      gridCols: 1,
      safeAreaTop: 0,
      safeAreaBottom: 667,
      safeAreaHeight: 667,
      statusBarHeight: 20,
      navigationBarHeight: 44,
      platform: 'unknown',
      pixelRatio: 2
    };
  }
}

/**
 * Get responsive class names based on device type
 * @param {string} baseClass - Base CSS class name
 * @returns {string} Responsive class names
 */
function getResponsiveClass(baseClass = '') {
  const systemInfo = getSystemInfo();
  const deviceClass = `${baseClass}-${systemInfo.deviceType}`;
  const orientationClass = systemInfo.isLandscape ? `${baseClass}-landscape` : `${baseClass}-portrait`;
  
  return `${baseClass} ${deviceClass} ${orientationClass}`.trim();
}

/**
 * Check if current device matches specified type
 * @param {string} type - Device type to check
 * @returns {boolean} Whether device matches type
 */
function isDeviceType(type) {
  const systemInfo = getSystemInfo();
  return systemInfo.deviceType === type;
}

/**
 * Get grid configuration for current device
 * @returns {Object} Grid configuration
 */
function getGridConfig() {
  const systemInfo = getSystemInfo();
  
  return {
    cols: systemInfo.gridCols,
    gap: systemInfo.isMobile ? 16 : 24,
    padding: systemInfo.isMobile ? 16 : 24,
    maxWidth: systemInfo.containerWidth
  };
}

/**
 * Calculate responsive font size
 * @param {number} baseSize - Base font size in px
 * @returns {number} Responsive font size
 */
function getResponsiveFontSize(baseSize = 14) {
  const systemInfo = getSystemInfo();
  const scale = systemInfo.isMobile ? 1 : 
               systemInfo.isTablet ? 1.1 : 1.2;
  
  return Math.round(baseSize * scale);
}

/**
 * Get layout margins for current device
 * @returns {Object} Layout margins
 */
function getLayoutMargins() {
  const systemInfo = getSystemInfo();
  
  return {
    horizontal: systemInfo.isMobile ? 16 : 24,
    vertical: systemInfo.isMobile ? 12 : 16,
    section: systemInfo.isMobile ? 24 : 32
  };
}

module.exports = {
  DEVICE_TYPES,
  BREAKPOINTS,
  getSystemInfo,
  getResponsiveClass,
  isDeviceType,
  getGridConfig,
  getResponsiveFontSize,
  getLayoutMargins
};