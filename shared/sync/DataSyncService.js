/**
 * 数据同步服务
 * 处理跨平台数据同步和冲突解决
 */

import { STORAGE_KEYS } from '../storage/CrossPlatformStorage.js';

export class DataSyncService {
  constructor(storage, options = {}) {
    this.storage = storage;
    this.syncEndpoint = options.syncEndpoint;
    this.userId = options.userId;
  }

  /**
   * 执行完整数据同步
   */
  async performFullSync() {
    console.log('[同步服务] 开始完整数据同步...');
    
    const result = {
      success: false,
      synced: [],
      conflicts: [],
      errors: [],
      timestamp: Date.now()
    };

    try {
      // 1. 获取本地所有数据
      const localData = await this.getAllLocalData();
      
      // 2. 获取远程数据（模拟）
      const remoteData = await this.getAllRemoteData();
      
      // 3. 比较和合并数据
      const { toUpload, toDownload, conflicts } = this.compareData(localData, remoteData);
      
      // 4. 处理冲突
      const resolvedConflicts = await this.resolveConflicts(conflicts);
      result.conflicts = resolvedConflicts.filter(c => !c.resolved);
      
      // 5. 上传本地更改
      for (const item of toUpload) {
        try {
          await this.uploadData(item);
          result.synced.push(item.key);
        } catch (error) {
          result.errors.push({
            key: item.key,
            error: error instanceof Error ? error.message : '上传失败'
          });
        }
      }
      
      // 6. 下载远程更改
      for (const item of toDownload) {
        try {
          await this.storage.setItem(item.key, item.data);
          result.synced.push(item.key);
        } catch (error) {
          result.errors.push({
            key: item.key,
            error: error instanceof Error ? error.message : '下载失败'
          });
        }
      }
      
      result.success = result.errors.length === 0;
      console.log(`[同步服务] 同步完成: ${result.synced.length} 项成功, ${result.errors.length} 项失败`);
      
    } catch (error) {
      console.error('[同步服务] 同步过程出错:', error);
      result.errors.push({
        key: 'SYNC_PROCESS',
        error: error instanceof Error ? error.message : '同步过程失败'
      });
    }

    return result;
  }

  /**
   * 增量数据同步
   */
  async performIncrementalSync(lastSyncTime) {
    console.log(`[同步服务] 开始增量同步，上次同步时间: ${new Date(lastSyncTime).toLocaleString()}`);
    
    const result = {
      success: false,
      synced: [],
      conflicts: [],
      errors: [],
      timestamp: Date.now()
    };

    try {
      // 获取自上次同步以来的更改
      const localChanges = await this.getLocalChanges(lastSyncTime);
      const remoteChanges = await this.getRemoteChanges(lastSyncTime);
      
      // 处理更改
      const { toUpload, toDownload, conflicts } = this.compareChanges(localChanges, remoteChanges);
      
      // 解决冲突
      const resolvedConflicts = await this.resolveConflicts(conflicts);
      result.conflicts = resolvedConflicts.filter(c => !c.resolved);
      
      // 同步更改
      for (const item of toUpload) {
        try {
          await this.uploadData(item);
          result.synced.push(item.key);
        } catch (error) {
          result.errors.push({
            key: item.key,
            error: error instanceof Error ? error.message : '上传失败'
          });
        }
      }
      
      for (const item of toDownload) {
        try {
          await this.storage.setItem(item.key, item.data);
          result.synced.push(item.key);
        } catch (error) {
          result.errors.push({
            key: item.key,
            error: error instanceof Error ? error.message : '下载失败'
          });
        }
      }
      
      result.success = result.errors.length === 0;
      console.log(`[同步服务] 增量同步完成: ${result.synced.length} 项更新`);
      
    } catch (error) {
      console.error('[同步服务] 增量同步出错:', error);
      result.errors.push({
        key: 'INCREMENTAL_SYNC',
        error: error instanceof Error ? error.message : '增量同步失败'
      });
    }

    return result;
  }

  /**
   * 获取所有本地数据
   */
  async getAllLocalData() {
    const keys = Object.values(STORAGE_KEYS);
    const syncData = [];
    
    for (const key of keys) {
      try {
        const data = await this.storage.getItem(key);
        if (data !== null) {
          syncData.push({
            key,
            data,
            timestamp: Date.now(),
            platform: 'web', // 这里应该从storage中获取实际平台信息
            version: 1,
            hash: this.generateHash(data)
          });
        }
      } catch (error) {
        console.error(`[同步服务] 获取本地数据失败: ${key}`, error);
      }
    }
    
    return syncData;
  }

  /**
   * 获取所有远程数据（模拟实现）
   */
  async getAllRemoteData() {
    // 这里应该实现实际的远程数据获取逻辑
    // 目前返回空数组作为模拟
    console.log('[同步服务] 获取远程数据（模拟）');
    return [];
  }

  /**
   * 获取本地更改
   */
  async getLocalChanges(since) {
    // 实际实现中，这里应该跟踪数据的修改时间
    // 目前简化为获取所有数据
    return this.getAllLocalData();
  }

  /**
   * 获取远程更改（模拟实现）
   */
  async getRemoteChanges(since) {
    // 模拟远程更改
    console.log(`[同步服务] 获取远程更改，时间戳: ${since}`);
    return [];
  }

  /**
   * 比较数据并确定同步操作
   */
  compareData(localData, remoteData) {
    const toUpload = [];
    const toDownload = [];
    const conflicts = [];
    
    const remoteMap = new Map(remoteData.map(item => [item.key, item]));
    const localMap = new Map(localData.map(item => [item.key, item]));
    
    // 检查本地数据
    for (const localItem of localData) {
      const remoteItem = remoteMap.get(localItem.key);
      
      if (!remoteItem) {
        // 远程没有，需要上传
        toUpload.push(localItem);
      } else if (localItem.hash !== remoteItem.hash) {
        // 数据不同，检查是否有冲突
        if (localItem.timestamp > remoteItem.timestamp) {
          toUpload.push(localItem);
        } else if (localItem.timestamp < remoteItem.timestamp) {
          toDownload.push(remoteItem);
        } else {
          // 时间戳相同但内容不同，产生冲突
          conflicts.push({
            key: localItem.key,
            localData: localItem,
            remoteData: remoteItem,
            conflictType: 'content'
          });
        }
      }
    }
    
    // 检查远程独有的数据
    for (const remoteItem of remoteData) {
      if (!localMap.has(remoteItem.key)) {
        toDownload.push(remoteItem);
      }
    }
    
    return { toUpload, toDownload, conflicts };
  }

  /**
   * 比较更改
   */
  compareChanges(localChanges, remoteChanges) {
    // 简化实现，使用相同的比较逻辑
    return this.compareData(localChanges, remoteChanges);
  }

  /**
   * 解决冲突
   */
  async resolveConflicts(conflicts) {
    const resolvedConflicts = [];
    
    for (const conflict of conflicts) {
      try {
        // 基于时间戳的冲突解决策略
        const resolution = conflict.localData.timestamp >= conflict.remoteData.timestamp 
          ? conflict.localData 
          : conflict.remoteData;
        
        await this.storage.setItem(conflict.key, resolution.data);
        
        resolvedConflicts.push({ ...conflict, resolved: true });
        console.log(`[同步服务] 冲突已解决: ${conflict.key}`);
        
      } catch (error) {
        console.error(`[同步服务] 冲突解决失败: ${conflict.key}`, error);
        resolvedConflicts.push({ ...conflict, resolved: false });
      }
    }
    
    return resolvedConflicts;
  }

  /**
   * 上传数据（模拟实现）
   */
  async uploadData(data) {
    // 这里应该实现实际的数据上传逻辑
    console.log(`[同步服务] 上传数据: ${data.key} (模拟)`);
    
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (!this.syncEndpoint) {
      console.warn('[同步服务] 未配置同步端点，跳过上传');
      return;
    }
    
    // 实际实现中，这里应该发送HTTP请求
    // fetch(this.syncEndpoint, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  }

  /**
   * 生成数据哈希
   */
  generateHash(data) {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(16);
  }

  /**
   * 获取同步状态
   */
  async getSyncStatus() {
    // 这里应该实现实际的状态获取逻辑
    return {
      lastSync: Date.now() - 3600000, // 1小时前
      pendingUploads: 0,
      pendingDownloads: 0,
      conflicts: 0
    };
  }
}

// 工厂函数
export function createDataSyncService(storage, options) {
  return new DataSyncService(storage, options);
}