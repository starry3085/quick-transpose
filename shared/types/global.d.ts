// Global type declarations for cross-platform compatibility

// Browser APIs
declare global {
  interface Window {
    localStorage: Storage;
  }
  
  var localStorage: Storage | undefined;
}

// WeChat Mini Program APIs
declare global {
  interface WxStorageOptions {
    key: string;
    success?: (res: any) => void;
    fail?: (error: any) => void;
  }

  interface WxGetStorageOptions extends WxStorageOptions {
    success: (res: { data: any }) => void;
  }

  interface WxSetStorageOptions extends WxStorageOptions {
    data: any;
    success?: () => void;
  }

  interface WxStorageInfoOptions {
    success: (res: { keys: string[] }) => void;
    fail?: () => void;
  }

  interface WxToastOptions {
    title: string;
    icon?: 'success' | 'error' | 'loading' | 'none';
    duration?: number;
    success?: () => void;
    fail?: () => void;
  }

  const wx: {
    // Sync storage methods
    getStorageSync: (key: string) => any;
    setStorageSync: (key: string, data: any) => void;
    removeStorageSync: (key: string) => void;
    clearStorageSync: () => void;
    getStorageInfoSync: () => { keys: string[] };
    
    // Async storage methods
    getStorage: (options: WxGetStorageOptions) => void;
    setStorage: (options: WxSetStorageOptions) => void;
    removeStorage: (options: WxStorageOptions) => void;
    clearStorage: (options: { success?: () => void; fail?: (error: any) => void }) => void;
    getStorageInfo: (options: WxStorageInfoOptions) => void;
    
    // UI methods
    showToast: (options: WxToastOptions) => void;
  } | undefined;
}

export {};