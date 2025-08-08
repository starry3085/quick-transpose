// 使用本地共享模块文件 - 统一导出接口
export * from '@shared/types';
export * from '@shared/constants';
export * from '@shared/utils';
export * from '@shared/state/StateManager';
export * from '@shared/storage/CrossPlatformStorage';
export * from '@shared/sync/DataSyncService';

// 确保关键导出可用
export { TransposeEngine } from '@shared/utils/transpose';
export { SIMPLE_KEYS, COMMON_PROGRESSIONS, CHORD_MAPS, ROMAN_NUMERALS } from '@shared/constants/chord-data';
export { createStorageManager, StorageManager } from '@shared/utils/storage';
export { debounce } from '@shared/utils/debounce';
