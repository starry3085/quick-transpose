# Quick Transpose - 测试指南

## 🧪 测试概述

本指南详细介绍了Quick Transpose应用的测试策略、测试方法和测试工具。

### 测试层级
- **单元测试**: 测试独立的函数和组件
- **集成测试**: 测试模块间的交互
- **端到端测试**: 测试完整的用户流程
- **跨平台测试**: 测试Web端和小程序端的一致性

## 🔧 测试环境搭建

### 测试工具安装
```bash
# 安装测试依赖
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm install --save-dev @testing-library/user-event msw
```

### 测试配置

#### Jest配置
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^shared/(.*)$': '<rootDir>/shared/$1',
    '^components/(.*)$': '<rootDir>/platforms/web/src/components/$1'
  },
  collectCoverageFrom: [
    'shared/**/*.{ts,tsx}',
    'platforms/web/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

## 🧪 单元测试

### 共享模块测试

#### 转调引擎测试
```typescript
// shared/utils/__tests__/transpose.test.ts
import { transposeChord, transposeProgression, validateChord } from '../transpose';

describe('转调引擎', () => {
  describe('transposeChord', () => {
    test('应该正确转调大调和弦', () => {
      expect(transposeChord('C', 2)).toBe('D');
      expect(transposeChord('F', 5)).toBe('A');
      expect(transposeChord('G', -2)).toBe('F');
    });

    test('应该正确转调小调和弦', () => {
      expect(transposeChord('Am', 3)).toBe('Cm');
      expect(transposeChord('Dm', -1)).toBe('C#m');
    });

    test('应该处理复杂和弦', () => {
      expect(transposeChord('Cmaj7', 2)).toBe('Dmaj7');
      expect(transposeChord('F#dim', 1)).toBe('Gdim');
    });
  });

  describe('transposeProgression', () => {
    test('应该正确转调和弦进行', () => {
      const progression = ['C', 'Am', 'F', 'G'];
      const expected = ['D', 'Bm', 'G', 'A'];
      expect(transposeProgression(progression, 2)).toEqual(expected);
    });
  });

  describe('validateChord', () => {
    test('应该验证有效和弦', () => {
      expect(validateChord('C')).toBe(true);
      expect(validateChord('Am')).toBe(true);
      expect(validateChord('F#maj7')).toBe(true);
    });

    test('应该拒绝无效和弦', () => {
      expect(validateChord('')).toBe(false);
      expect(validateChord('X')).toBe(false);
      expect(validateChord('123')).toBe(false);
    });
  });
});
```

## 🌐 Web端测试

### React组件测试
```typescript
// platforms/web/src/components/__tests__/TransposeTab.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { TransposeTab } from '../TransposeTab';

describe('TransposeTab', () => {
  test('应该渲染转调界面', () => {
    render(<TransposeTab />);
    
    expect(screen.getByLabelText('当前和弦')).toBeInTheDocument();
    expect(screen.getByLabelText('目标调性')).toBeInTheDocument();
    expect(screen.getByText('转调')).toBeInTheDocument();
  });

  test('应该执行转调操作', async () => {
    render(<TransposeTab />);
    
    const chordInput = screen.getByLabelText('当前和弦');
    const keySelect = screen.getByLabelText('目标调性');
    const transposeButton = screen.getByText('转调');
    
    fireEvent.change(chordInput, { target: { value: 'C' } });
    fireEvent.change(keySelect, { target: { value: '2' } });
    fireEvent.click(transposeButton);
    
    expect(await screen.findByText('D')).toBeInTheDocument();
  });
});
```

## 📱 小程序测试

### 功能测试清单

#### 转调页面测试
- [ ] 页面正常加载和显示
- [ ] 和弦输入功能正常
- [ ] 转调功能正确执行
- [ ] 结果显示准确
- [ ] 历史记录保存和加载
- [ ] 响应式布局在不同设备上正常

#### 字典页面测试
- [ ] 页面正常加载
- [ ] 和弦列表显示完整
- [ ] 搜索功能正常
- [ ] 和弦详情显示正确
- [ ] 页面间数据传递正常

### 自动化测试脚本
```javascript
// platforms/miniprogram/test-checklist.js
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

const TestSuite = {
  testStorage: () => {
    TestUtils.log('开始测试存储功能...');
    
    try {
      const testData = { test: 'data', timestamp: Date.now() };
      wx.setStorageSync('test_key', testData);
      const retrieved = wx.getStorageSync('test_key');
      
      TestUtils.assert(
        JSON.stringify(retrieved) === JSON.stringify(testData),
        '存储和读取功能正常'
      );
      
      wx.removeStorageSync('test_key');
      TestUtils.log('存储功能测试完成');
      
    } catch (error) {
      TestUtils.log(`存储功能测试失败: ${error.message}`, 'error');
    }
  },
  
  testTransposeEngine: () => {
    TestUtils.log('开始测试转调引擎...');
    
    try {
      const transposeEngine = require('./utils/transpose-engine.js');
      
      const result1 = transposeEngine.transposeChord('C', 2);
      TestUtils.assert(result1 === 'D', '基本转调功能正常 (C -> D)');
      
      const result2 = transposeEngine.transposeChord('Am', -3);
      TestUtils.assert(result2 === 'F#m', '小调转调功能正常 (Am -> F#m)');
      
      TestUtils.log('转调引擎测试完成');
      
    } catch (error) {
      TestUtils.log(`转调引擎测试失败: ${error.message}`, 'error');
    }
  },
  
  runAll: () => {
    TestUtils.log('=== 开始微信小程序功能测试 ===');
    
    TestSuite.testStorage();
    TestSuite.testTransposeEngine();
    
    TestUtils.log('=== 功能测试完成 ===');
  }
};

module.exports = TestSuite;
```

## 🔄 集成测试

### 跨平台一致性测试
```typescript
// tests/integration/cross-platform.test.ts
describe('跨平台一致性测试', () => {
  test('Web端和小程序端转调结果应该一致', () => {
    // Web端转调
    const webResult = webTransposeChord('C', 2);
    
    // 小程序端转调
    const miniprogramResult = miniprogramTransposeChord('C', 2);
    
    expect(webResult).toBe(miniprogramResult);
  });

  test('状态管理在两个平台应该表现一致', () => {
    // 测试状态管理的一致性
    const webStateManager = createWebStateManager();
    const miniprogramStateManager = createMiniprogramStateManager();
    
    webStateManager.setState({ currentChord: 'C' });
    miniprogramStateManager.setState({ currentChord: 'C' });
    
    expect(webStateManager.getState().currentChord)
      .toBe(miniprogramStateManager.getState().currentChord);
  });
});
```

## 🎯 端到端测试

### 用户流程测试
```typescript
// tests/e2e/user-flows.test.ts
import { test, expect } from '@playwright/test';

test('完整的转调流程', async ({ page }) => {
  await page.goto('/');
  
  // 输入和弦
  await page.fill('[data-testid="chord-input"]', 'C');
  
  // 选择目标调性
  await page.selectOption('[data-testid="key-select"]', '2');
  
  // 点击转调按钮
  await page.click('[data-testid="transpose-button"]');
  
  // 验证结果
  await expect(page.locator('[data-testid="result"]')).toHaveText('D');
  
  // 验证历史记录
  await expect(page.locator('[data-testid="history"]')).toContainText('C → D');
});

test('字典搜索流程', async ({ page }) => {
  await page.goto('/');
  
  // 切换到字典页面
  await page.click('[data-testid="dictionary-tab"]');
  
  // 搜索和弦
  await page.fill('[data-testid="search-input"]', 'Am');
  
  // 验证搜索结果
  await expect(page.locator('[data-testid="chord-list"]')).toContainText('Am');
  
  // 点击和弦
  await page.click('[data-testid="chord-Am"]');
  
  // 验证详情显示
  await expect(page.locator('[data-testid="chord-details"]')).toBeVisible();
});
```

## 📊 性能测试

### 性能基准测试
```typescript
// tests/performance/benchmarks.test.ts
describe('性能基准测试', () => {
  test('转调操作应该在10ms内完成', () => {
    const start = performance.now();
    
    for (let i = 0; i < 1000; i++) {
      transposeChord('C', 2);
    }
    
    const end = performance.now();
    const averageTime = (end - start) / 1000;
    
    expect(averageTime).toBeLessThan(10);
  });

  test('状态更新应该在5ms内完成', () => {
    const stateManager = createStateManager({ count: 0 });
    
    const start = performance.now();
    
    for (let i = 0; i < 100; i++) {
      stateManager.setState({ count: i });
    }
    
    const end = performance.now();
    const averageTime = (end - start) / 100;
    
    expect(averageTime).toBeLessThan(5);
  });
});
```

## 🔍 测试覆盖率

### 覆盖率报告
```bash
# 生成覆盖率报告
npm run test:coverage

# 查看覆盖率报告
open coverage/lcov-report/index.html
```

### 覆盖率目标
- **语句覆盖率**: >= 80%
- **分支覆盖率**: >= 80%
- **函数覆盖率**: >= 80%
- **行覆盖率**: >= 80%

## 🚨 测试最佳实践

### 测试命名规范
- 使用描述性的测试名称
- 遵循"应该...当...时"的格式
- 使用中文描述业务逻辑

### 测试组织
- 按功能模块组织测试文件
- 使用describe块分组相关测试
- 保持测试的独立性和可重复性

### Mock和Stub
```typescript
// 模拟外部依赖
jest.mock('shared/utils/api', () => ({
  fetchChordData: jest.fn().mockResolvedValue({
    chords: ['C', 'Am', 'F', 'G']
  })
}));

// 模拟小程序API
global.wx = {
  getStorageSync: jest.fn(),
  setStorageSync: jest.fn(),
  removeStorageSync: jest.fn()
};
```

## 📋 测试检查清单

### 开发阶段
- [ ] 编写单元测试覆盖新功能
- [ ] 运行测试确保通过
- [ ] 检查测试覆盖率达标
- [ ] 更新相关文档

### 发布前
- [ ] 运行完整测试套件
- [ ] 执行跨平台测试
- [ ] 进行性能测试
- [ ] 验证端到端流程

### 生产环境
- [ ] 监控错误率
- [ ] 跟踪性能指标
- [ ] 收集用户反馈
- [ ] 定期回归测试

## 🛠️ 测试工具

### 推荐工具
- **Jest**: 单元测试框架
- **React Testing Library**: React组件测试
- **Playwright**: 端到端测试
- **MSW**: API模拟
- **Istanbul**: 代码覆盖率

### 测试命令
```bash
# 运行所有测试
npm test

# 运行特定测试文件
npm test -- transpose.test.ts

# 监听模式运行测试
npm test -- --watch

# 生成覆盖率报告
npm run test:coverage

# 运行小程序测试
npm run test:miniprogram
```

---

**最后更新**: 2025年1月8日
**测试版本**: v1.0.0