// 主入口文件，导出所有共享模块
export * from './types';
export * from './constants';
export * from './utils';
export * from './state/StateManager';
export * from './sync/DataSyncService';
// Export storage separately to avoid conflicts
export { 
  CrossPlatformStorage, 
  createCrossPlatformStorage, 
  STORAGE_KEYS 
} from './storage/CrossPlatformStorage';
