/**
 * 微信小程序功能测试清单
 * 在微信开发者工具的控制台中运行此脚本进行自动化测试
 */

// 测试工具函数
const TestUtils = {
  log: (message, type = 'info') => {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [测试] ${message}`);
  },
  
  assert: (condition, message) => {
    if (condition) {
      TestUtils.log(message, 'success');
      return true;
    } else {
      TestUtils.log(message, 'error');
      return false;
    }
  }
};

// 测试套件
const TestSuite = {
  // 测试存储功能
  testStorage: () => {
    TestUtils.log('开始测试存储功能...');
    
    try {
      // 测试存储和读取
      const testData = { test: 'data', timestamp: Date.now() };
      wx.setStorageSync('test_key', testData);
      const retrieved = wx.getStorageSync('test_key');
      
      TestUtils.assert(
        JSON.stringify(retrieved) === JSON.stringify(testData),
        '存储和读取功能正常'
      );
      
      // 清理测试数据
      wx.removeStorageSync('test_key');
      TestUtils.log('存储功能测试完成');
      
    } catch (error) {
      TestUtils.log(`存储功能测试失败: ${error.message}`, 'error');
    }
  },
  
  // 测试转调引擎
  testTransposeEngine: () => {
    TestUtils.log('开始测试转调引擎...');
    
    try {
      // 引入转调引擎
      const transposeEngine = require('./utils/transpose-engine.js');
      
      // 测试基本转调
      const result1 = transposeEngine.transposeChord('C', 2);
      TestUtils.assert(result1 === 'D', '基本转调功能正常 (C -> D)');
      
      const result2 = transposeEngine.transposeChord('Am', -3);
      TestUtils.assert(result2 === 'F#m', '小调转调功能正常 (Am -> F#m)');
      
      // 测试和弦进行转调
      const progression = ['C', 'Am', 'F', 'G'];
      const transposed = transposeEngine.transposeProgression(progression, 2);
      const expected = ['D', 'Bm', 'G', 'A'];
      
      TestUtils.assert(
        JSON.stringify(transposed) === JSON.stringify(expected),
        '和弦进行转调功能正常'
      );
      
      TestUtils.log('转调引擎测试完成');
      
    } catch (error) {
      TestUtils.log(`转调引擎测试失败: ${error.message}`, 'error');
    }
  },
  
  // 测试平台检测
  testPlatformDetection: () => {
    TestUtils.log('开始测试平台检测...');
    
    try {
      const platformDetection = require('./utils/platform-detection.js');
      const systemInfo = platformDetection.getSystemInfo();
      
      TestUtils.assert(
        systemInfo && typeof systemInfo === 'object',
        '系统信息获取正常'
      );
      
      TestUtils.assert(
        ['mobile', 'tablet', 'desktop'].includes(systemInfo.deviceType),
        `设备类型识别正常: ${systemInfo.deviceType}`
      );
      
      TestUtils.assert(
        typeof systemInfo.screenWidth === 'number' && systemInfo.screenWidth > 0,
        `屏幕宽度获取正常: ${systemInfo.screenWidth}px`
      );
      
      TestUtils.log('平台检测测试完成');
      
    } catch (error) {
      TestUtils.log(`平台检测测试失败: ${error.message}`, 'error');
    }
  },
  
  // 测试常量定义
  testConstants: () => {
    TestUtils.log('开始测试常量定义...');
    
    try {
      const constants = require('./utils/constants.js');
      
      TestUtils.assert(
        constants.SIMPLE_KEYS && Array.isArray(constants.SIMPLE_KEYS),
        '简单调性常量定义正常'
      );
      
      TestUtils.assert(
        constants.COMMON_PROGRESSIONS && Array.isArray(constants.COMMON_PROGRESSIONS),
        '常用和弦进行常量定义正常'
      );
      
      TestUtils.assert(
        constants.CHORD_TYPES && Array.isArray(constants.CHORD_TYPES),
        '和弦类型常量定义正常'
      );
      
      TestUtils.log('常量定义测试完成');
      
    } catch (error) {
      TestUtils.log(`常量定义测试失败: ${error.message}`, 'error');
    }
  },
  
  // 运行所有测试
  runAll: () => {
    TestUtils.log('=== 开始微信小程序功能测试 ===');
    
    TestSuite.testStorage();
    TestSuite.testTransposeEngine();
    TestSuite.testPlatformDetection();
    TestSuite.testConstants();
    
    TestUtils.log('=== 功能测试完成 ===');
    TestUtils.log('请手动测试页面交互功能：');
    TestUtils.log('1. 转调页面的和弦输入和转调功能');
    TestUtils.log('2. 字典页面的和弦浏览和搜索功能');
    TestUtils.log('3. TabBar导航切换功能');
    TestUtils.log('4. 页面间数据传递功能');
  }
};

// 导出测试套件
module.exports = TestSuite;

// 如果在控制台中直接运行，自动执行所有测试
if (typeof console !== 'undefined') {
  TestSuite.runAll();
}