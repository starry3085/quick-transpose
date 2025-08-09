/**
 * 数据同步服务
 * 处理跨平台数据同步和冲突解决
 */
import { CrossPlatformStorage } from '../storage/CrossPlatformStorage';
export interface SyncData {
    key: string;
    data: any;
    timestamp: number;
    platform: 'web' | 'miniprogram';
    version: number;
    hash: string;
}
export interface SyncConflict {
    key: string;
    localData: SyncData;
    remoteData: SyncData;
    conflictType: 'version' | 'timestamp' | 'content';
}
export interface SyncResult {
    success: boolean;
    synced: string[];
    conflicts: SyncConflict[];
    errors: Array<{
        key: string;
        error: string;
    }>;
    timestamp: number;
}
export declare class DataSyncService {
    private storage;
    private syncEndpoint?;
    private userId?;
    constructor(storage: CrossPlatformStorage, options?: {
        syncEndpoint?: string;
        userId?: string;
    });
    /**
     * 执行完整数据同步
     */
    performFullSync(): Promise<SyncResult>;
    /**
     * 增量数据同步
     */
    performIncrementalSync(lastSyncTime: number): Promise<SyncResult>;
    /**
     * 获取所有本地数据
     */
    private getAllLocalData;
    /**
     * 获取所有远程数据（模拟实现）
     */
    private getAllRemoteData;
    /**
     * 获取本地更改
     */
    private getLocalChanges;
    /**
     * 获取远程更改（模拟实现）
     */
    private getRemoteChanges;
    /**
     * 比较数据并确定同步操作
     */
    private compareData;
    /**
     * 比较更改
     */
    private compareChanges;
    /**
     * 解决冲突
     */
    private resolveConflicts;
    /**
     * 上传数据（模拟实现）
     */
    private uploadData;
    /**
     * 生成数据哈希
     */
    private generateHash;
    /**
     * 获取同步状态
     */
    getSyncStatus(): Promise<{
        lastSync: number | null;
        pendingUploads: number;
        pendingDownloads: number;
        conflicts: number;
    }>;
}
export declare function createDataSyncService(storage: CrossPlatformStorage, options?: {
    syncEndpoint?: string;
    userId?: string;
}): DataSyncService;
//# sourceMappingURL=DataSyncService.d.ts.map