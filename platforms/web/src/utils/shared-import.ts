// 使用相对路径导入共享模块文件
export * from '@shared/types/chord';
export * from '@shared/constants/chord-data';
export * from '@shared/utils/transpose';
export * from '@shared/utils/validator';
export * from '@shared/utils/storage';
export * from '@shared/utils/debounce';
export * from '@shared/utils/chord-dictionary';
export * from '@shared/state/StateManager';
export * from '@shared/storage/CrossPlatformStorage';
export * from '@shared/sync/DataSyncService';

// 确保关键导出可用
export { TransposeEngine } from '@shared/utils/transpose';
export { SIMPLE_KEYS, COMMON_PROGRESSIONS, CHORD_MAPS, ROMAN_NUMERALS } from '@shared/constants/chord-data';
export { createStorageManager, StorageManager } from '@shared/utils/storage';
export { debounce } from '@shared/utils/debounce';
