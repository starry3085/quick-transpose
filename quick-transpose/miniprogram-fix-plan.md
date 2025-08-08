# 微信小程序规范合规性修复计划

## 修复策略概述

基于 MVP 原则和微信小程序官方规范，将修复工作分为三个阶段，确保小程序能够正常运行、通过审核，并逐步提升用户体验。

## 第一阶段：核心功能修复（必须完成）

### 1.1 图标资源补充
**优先级：🔴 极高**
- **问题**：缺少 tabBar 所需的图标文件
- **影响**：小程序无法正常显示底部导航栏
- **修复步骤**：
  ```bash
  # 创建图标目录
  mkdir -p miniprogram/images
  
  # 需要添加的图标文件（81x81px）：
  # - images/transpose.png
  # - images/transpose-active.png  
  # - images/dictionary.png
  # - images/dictionary-active.png
  ```
- **验收标准**：底部导航栏图标正常显示

### 1.2 项目配置修复
**优先级：🔴 极高**
- **问题**：`project.config.json` 中使用占位符 AppID
- **影响**：无法编译和上传小程序
- **修复步骤**：
  ```json
  {
    "appid": "实际的小程序AppID",
    // 其他配置保持不变
  }
  ```
- **验收标准**：能够正常编译和预览小程序

### 1.3 登录逻辑清理
**优先级：🔴 高**
- **问题**：`app.js` 中无用的 `wx.login()` 调用
- **影响**：可能导致审核问题
- **修复步骤**：
  ```javascript
  // 方案1：完全移除登录逻辑
  onLaunch() {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 移除 wx.login() 相关代码
  }
  
  // 方案2：实现完整登录流程（如果需要用户信息）
  wx.login({
    success: res => {
      if (res.code) {
        // 发送到后端服务器
        this.getUserInfo(res.code)
      }
    }
  })
  ```
- **验收标准**：不影响小程序正常运行，符合审核要求

## 第二阶段：功能完善（重要优化）

### 2.1 和弦数据补充
**优先级：🟡 中高**
- **问题**：只支持7个自然调，缺少升降号调性
- **影响**：功能受限，用户体验不佳
- **修复步骤**：
  ```javascript
  // 在 app.js 中补充完整的12调数据
  chordMaps: {
    major: {
      'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'],
      'Db': ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'],
      // ... 补充所有12个调性
    },
    minor: {
      // 对应的小调数据
    }
  }
  ```
- **验收标准**：支持所有12个调性的转换

### 2.2 页面间数据传递优化
**优先级：🟡 中**
- **问题**：使用全局变量传递数据，容易造成状态污染
- **影响**：代码维护性差，可能出现数据异常
- **修复步骤**：
  ```javascript
  // 方案1：使用页面参数传递
  wx.navigateTo({
    url: '/pages/transpose/transpose?progression=4536251'
  })
  
  // 方案2：使用事件总线
  // utils/eventBus.js
  class EventBus {
    constructor() {
      this.events = {}
    }
    
    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = []
      }
      this.events[event].push(callback)
    }
    
    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach(callback => callback(data))
      }
    }
  }
  ```
- **验收标准**：数据传递稳定可靠，无状态污染

### 2.3 本地存储错误处理
**优先级：🟡 中**
- **问题**：缺少异常处理，可能导致程序崩溃
- **影响**：用户体验差，程序稳定性低
- **修复步骤**：
  ```javascript
  // 封装安全的存储方法
  const storage = {
    get(key, defaultValue = null) {
      try {
        return wx.getStorageSync(key) || defaultValue
      } catch (error) {
        console.error('Storage get error:', error)
        return defaultValue
      }
    },
    
    set(key, value) {
      try {
        wx.setStorageSync(key, value)
        return true
      } catch (error) {
        console.error('Storage set error:', error)
        return false
      }
    }
  }
  ```
- **验收标准**：存储操作有完善的错误处理

### 2.4 sitemap.json 配置
**优先级：🟡 中低**
- **问题**：sitemap 配置可能不完整
- **影响**：搜索优化效果差
- **修复步骤**：
  ```json
  {
    "desc": "关于本小程序的索引情况，可在上方的搜索框中输入页面路径查看",
    "rules": [{
      "action": "allow",
      "page": "pages/transpose/transpose"
    }, {
      "action": "allow", 
      "page": "pages/dictionary/dictionary"
    }]
  }
  ```
- **验收标准**：搜索功能正常，符合SEO要求

## 第三阶段：体验优化（性能提升）

### 3.1 样式组件化
**优先级：🟢 低**
- **问题**：样式代码重复，维护性差
- **修复步骤**：
  ```css
  /* app.wxss - 提取公共样式 */
  .container {
    padding: 30rpx;
    background: #f5f5f5;
    min-height: 100vh;
  }
  
  .card {
    background: white;
    border-radius: 16rpx;
    margin-bottom: 30rpx;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.1);
  }
  ```

### 3.2 输入验证增强
**优先级：🟢 低**
- **问题**：用户输入缺少验证
- **修复步骤**：
  ```javascript
  validateProgression(input) {
    const pattern = /^[1-7\s,]+$/
    if (!pattern.test(input)) {
      wx.showToast({
        title: '请输入1-7的数字',
        icon: 'none'
      })
      return false
    }
    return true
  }
  ```

### 3.3 性能优化
**优先级：🟢 低**
- **问题**：频繁计算影响性能
- **修复步骤**：
  ```javascript
  // 添加防抖处理
  const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  // 使用防抖优化输入处理
  this.debouncedTranspose = debounce(this.transposeChords.bind(this), 300)
  ```

## 实施时间表

| 阶段 | 预计时间 | 关键里程碑 |
|------|----------|------------|
| 第一阶段 | 1-2天 | 小程序能正常运行和预览 |
| 第二阶段 | 3-5天 | 功能完整，用户体验良好 |
| 第三阶段 | 2-3天 | 性能优化，代码规范 |

## 验收标准

### 功能验收
- [ ] 底部导航栏正常显示
- [ ] 所有页面能正常跳转
- [ ] 和弦转换功能正常
- [ ] 数据持久化正常
- [ ] 支持所有12个调性

### 性能验收
- [ ] 页面加载时间 < 2秒
- [ ] 操作响应时间 < 500ms
- [ ] 内存使用稳定

### 规范验收
- [ ] 通过微信开发者工具检查
- [ ] 符合小程序审核规范
- [ ] 代码结构清晰，注释完整

## 风险评估

### 高风险项
1. **图标设计**：需要专业设计，可能影响进度
2. **AppID 获取**：需要完成小程序注册流程

### 中风险项
1. **数据结构调整**：可能影响现有功能
2. **页面重构**：需要充分测试

### 低风险项
1. **样式优化**：不影响核心功能
2. **性能优化**：渐进式改进

## 后续维护建议

1. **建立代码规范**：使用 ESLint 和 Prettier
2. **完善测试用例**：确保功能稳定性
3. **性能监控**：定期检查小程序性能指标
4. **用户反馈收集**：持续优化用户体验

---

*本修复计划基于微信小程序官方文档和最佳实践制定，确保小程序符合规范要求并提供良好的用户体验。*