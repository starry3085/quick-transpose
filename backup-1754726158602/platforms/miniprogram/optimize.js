/**
 * 微信小程序性能优化脚本
 * 提供性能监控和优化建议
 */

const PerformanceOptimizer = {
  // 页面性能监控
  monitorPagePerformance: (pageName) => {
    const startTime = Date.now();
    
    return {
      // 记录页面加载完成时间
      onLoadComplete: () => {
        const loadTime = Date.now() - startTime;
        console.log(`[性能] ${pageName} 页面加载时间: ${loadTime}ms`);
        
        if (loadTime > 1000) {
          console.warn(`[性能警告] ${pageName} 页面加载时间过长，建议优化`);
        }
        
        return loadTime;
      },
      
      // 记录数据渲染时间
      onDataRender: (dataSize) => {
        const renderTime = Date.now() - startTime;
        console.log(`[性能] ${pageName} 数据渲染时间: ${renderTime}ms (数据量: ${dataSize})`);
        
        return renderTime;
      }
    };
  },
  
  // 内存使用监控
  monitorMemoryUsage: () => {
    try {
      const memoryInfo = wx.getSystemInfoSync();
      console.log(`[内存] 设备内存信息:`, {
        platform: memoryInfo.platform,
        system: memoryInfo.system,
        version: memoryInfo.version
      });
    } catch (error) {
      console.error('[内存] 无法获取内存信息:', error);
    }
  },
  
  // 存储优化建议
  optimizeStorage: () => {
    try {
      const storageInfo = wx.getStorageInfoSync();
      const usedSize = storageInfo.currentSize;
      const limitSize = storageInfo.limitSize;
      const usagePercent = (usedSize / limitSize * 100).toFixed(2);
      
      console.log(`[存储] 当前使用: ${usedSize}KB / ${limitSize}KB (${usagePercent}%)`);
      
      if (usagePercent > 80) {
        console.warn('[存储警告] 存储空间使用率过高，建议清理历史数据');
        
        // 提供清理建议
        const keys = storageInfo.keys;
        console.log('[存储] 当前存储的键:', keys);
        
        // 检查是否有过期数据
        keys.forEach(key => {
          try {
            const data = wx.getStorageSync(key);
            if (data && data.timestamp) {
              const age = Date.now() - data.timestamp;
              const days = Math.floor(age / (1000 * 60 * 60 * 24));
              
              if (days > 30) {
                console.log(`[存储] 建议清理过期数据: ${key} (${days}天前)`);
              }
            }
          } catch (error) {
            console.error(`[存储] 检查键 ${key} 时出错:`, error);
          }
        });
      }
      
    } catch (error) {
      console.error('[存储] 无法获取存储信息:', error);
    }
  },
  
  // 网络请求优化
  optimizeNetworkRequests: () => {
    const originalRequest = wx.request;
    let requestCount = 0;
    let totalRequestTime = 0;
    
    // 包装wx.request以监控网络请求
    wx.request = function(options) {
      const startTime = Date.now();
      requestCount++;
      
      const originalSuccess = options.success || (() => {});
      const originalFail = options.fail || (() => {});
      
      options.success = function(res) {
        const requestTime = Date.now() - startTime;
        totalRequestTime += requestTime;
        
        console.log(`[网络] 请求完成: ${options.url} (${requestTime}ms)`);
        
        if (requestTime > 3000) {
          console.warn(`[网络警告] 请求时间过长: ${options.url}`);
        }
        
        originalSuccess(res);
      };
      
      options.fail = function(error) {
        const requestTime = Date.now() - startTime;
        console.error(`[网络] 请求失败: ${options.url} (${requestTime}ms)`, error);
        originalFail(error);
      };
      
      return originalRequest.call(this, options);
    };
    
    // 返回网络统计信息
    return {
      getStats: () => ({
        requestCount,
        averageTime: requestCount > 0 ? (totalRequestTime / requestCount).toFixed(2) : 0,
        totalTime: totalRequestTime
      })
    };
  },
  
  // 图片资源优化检查
  checkImageOptimization: () => {
    console.log('[图片] 检查图片资源优化...');
    
    // 检查TabBar图标
    const tabBarIcons = [
      'images/transpose.png',
      'images/transpose-active.png',
      'images/dictionary.png',
      'images/dictionary-active.png'
    ];
    
    tabBarIcons.forEach(iconPath => {
      // 这里只能提供优化建议，无法直接检查文件大小
      console.log(`[图片] 请确保 ${iconPath} 已优化 (建议大小: 81x81px, <10KB)`);
    });
    
    console.log('[图片] 优化建议:');
    console.log('- 使用压缩工具减小图片文件大小');
    console.log('- 考虑使用WebP格式（如果支持）');
    console.log('- 避免使用过大的图片资源');
  },
  
  // 代码分包建议
  suggestCodeSplitting: () => {
    console.log('[分包] 代码分包建议:');
    console.log('- 当前项目较小，暂不需要分包');
    console.log('- 如果后续添加更多功能，考虑按功能模块分包');
    console.log('- 将不常用的页面放入分包中');
    console.log('- 共享的工具函数保留在主包中');
  },
  
  // 运行完整的性能检查
  runFullCheck: () => {
    console.log('=== 开始性能优化检查 ===');
    
    PerformanceOptimizer.monitorMemoryUsage();
    PerformanceOptimizer.optimizeStorage();
    PerformanceOptimizer.checkImageOptimization();
    PerformanceOptimizer.suggestCodeSplitting();
    
    const networkMonitor = PerformanceOptimizer.optimizeNetworkRequests();
    
    console.log('=== 性能优化检查完成 ===');
    console.log('网络监控已启用，可通过 networkMonitor.getStats() 查看统计信息');
    
    return {
      networkMonitor,
      pageMonitor: PerformanceOptimizer.monitorPagePerformance
    };
  }
};

// 导出优化器
module.exports = PerformanceOptimizer;

// 页面性能监控混入
const PagePerformanceMixin = {
  onLoad: function(options) {
    this.performanceMonitor = PerformanceOptimizer.monitorPagePerformance(this.route || 'unknown');
    
    // 调用原始的onLoad方法
    if (this._originalOnLoad) {
      this._originalOnLoad.call(this, options);
    }
  },
  
  onReady: function() {
    if (this.performanceMonitor) {
      this.performanceMonitor.onLoadComplete();
    }
    
    // 调用原始的onReady方法
    if (this._originalOnReady) {
      this._originalOnReady.call(this);
    }
  }
};

// 导出性能监控混入
PerformanceOptimizer.PagePerformanceMixin = PagePerformanceMixin;