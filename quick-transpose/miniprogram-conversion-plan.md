# 移调器小程序转换方案

## 1. 项目结构重构

### 1.1 创建小程序基础结构
```
miniprogram/
├── app.js                 # 小程序入口
├── app.json              # 全局配置
├── app.wxss              # 全局样式
├── pages/
│   ├── transpose/        # 移调页面
│   │   ├── transpose.wxml
│   │   ├── transpose.wxss
│   │   ├── transpose.js
│   │   └── transpose.json
│   └── dictionary/       # 字典页面
│       ├── dictionary.wxml
│       ├── dictionary.wxss
│       ├── dictionary.js
│       └── dictionary.json
├── components/           # 自定义组件
├── utils/               # 工具函数
└── data/               # 静态数据
```

### 1.2 app.json 配置
```json
{
  "pages": [
    "pages/transpose/transpose",
    "pages/dictionary/dictionary"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "移调器",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#10B981",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/transpose/transpose",
        "iconPath": "images/transpose.png",
        "selectedIconPath": "images/transpose-active.png",
        "text": "转换器"
      },
      {
        "pagePath": "pages/dictionary/dictionary",
        "iconPath": "images/dictionary.png",
        "selectedIconPath": "images/dictionary-active.png",
        "text": "字典"
      }
    ]
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

## 2. 核心功能转换

### 2.1 移调功能 (transpose.js)
```javascript
Page({
  data: {
    progression: '',
    sourceKey: 'C',
    targetKey: 'G',
    isMinor: false,
    useSeventhChords: false,
    result: [],
    keys: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    commonProgressions: [
      { label: '4536251', value: '4 5 3 6 2 5 1' },
      { label: '1625', value: '1 6 2 5' },
      { label: '251', value: '2 5 1' },
      { label: '6415', value: '6 4 1 5' }
    ]
  },

  onLoad() {
    // 页面加载时的初始化
  },

  onProgressionInput(e) {
    this.setData({
      progression: e.detail.value
    });
    this.transposeChords();
  },

  onSourceKeyChange(e) {
    this.setData({
      sourceKey: this.data.keys[e.detail.value]
    });
    this.transposeChords();
  },

  onTargetKeyChange(e) {
    this.setData({
      targetKey: this.data.keys[e.detail.value]
    });
    this.transposeChords();
  },

  onMinorToggle(e) {
    this.setData({
      isMinor: e.detail.value
    });
    this.transposeChords();
  },

  transposeChords() {
    // 移调算法实现
    const { progression, sourceKey, targetKey, isMinor } = this.data;
    if (!progression.trim()) {
      this.setData({ result: [] });
      return;
    }

    // 实现移调逻辑...
    const result = this.calculateTransposition();
    this.setData({ result });
  },

  copyResult() {
    const chordString = this.data.result.map(r => r.chord).join(' ');
    wx.setClipboardData({
      data: chordString,
      success: () => {
        wx.showToast({
          title: '已复制到剪贴板',
          icon: 'success'
        });
      }
    });
  }
});
```

### 2.2 移调页面模板 (transpose.wxml)
```xml
<view class="container">
  <!-- 输入卡片 -->
  <view class="card">
    <view class="card-header">
      <text class="card-title">和弦进行输入</text>
    </view>
    <view class="card-content">
      <view class="input-group">
        <text class="label">和弦进行（数字）</text>
        <input 
          class="input" 
          placeholder="例如：4 5 3 6 2 5 1"
          value="{{progression}}"
          bindinput="onProgressionInput"
        />
      </view>
      
      <view class="row">
        <view class="col">
          <text class="label">源调</text>
          <picker 
            range="{{keys}}" 
            value="{{sourceKeyIndex}}"
            bindchange="onSourceKeyChange"
          >
            <view class="picker">{{sourceKey}}</view>
          </picker>
        </view>
        
        <view class="col">
          <text class="label">目标调</text>
          <picker 
            range="{{keys}}" 
            value="{{targetKeyIndex}}"
            bindchange="onTargetKeyChange"
          >
            <view class="picker">{{targetKey}}</view>
          </picker>
        </view>
      </view>
      
      <view class="switch-group">
        <switch checked="{{isMinor}}" bindchange="onMinorToggle" />
        <text class="switch-label">小调</text>
      </view>
    </view>
  </view>

  <!-- 常用走向 -->
  <view class="card">
    <view class="card-header">
      <text class="card-title">常用走向</text>
    </view>
    <view class="card-content">
      <view class="progression-buttons">
        <block wx:for="{{commonProgressions}}" wx:key="label">
          <button 
            class="progression-btn" 
            size="mini"
            bindtap="fillProgression"
            data-value="{{item.value}}"
          >
            {{item.label}}
          </button>
        </block>
      </view>
    </view>
  </view>

  <!-- 结果显示 -->
  <view class="card" wx:if="{{result.length > 0}}">
    <view class="card-header">
      <text class="card-title">转换结果</text>
      <button class="copy-btn" size="mini" bindtap="copyResult">复制</button>
    </view>
    <view class="card-content">
      <view class="result-chords">
        <block wx:for="{{result}}" wx:key="index">
          <view class="chord-item">
            <view class="chord-badge">{{item.chord}}</view>
            <text class="roman-text">{{item.roman}}</text>
          </view>
        </block>
      </view>
    </view>
  </view>
</view>
```

## 3. 样式适配

### 3.1 全局样式 (app.wxss)
```css
/* 全局样式 */
page {
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  padding: 20rpx;
  max-width: 750rpx;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 16rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 30rpx 30rpx 20rpx;
  border-bottom: 1rpx solid #f0f0f0;
}

.card-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}

.card-content {
  padding: 30rpx;
}
```

## 4. 数据管理

### 4.1 本地存储适配
```javascript
// utils/storage.js
const storage = {
  set(key, value) {
    try {
      wx.setStorageSync(key, value);
    } catch (e) {
      console.error('Storage set error:', e);
    }
  },

  get(key, defaultValue = null) {
    try {
      return wx.getStorageSync(key) || defaultValue;
    } catch (e) {
      console.error('Storage get error:', e);
      return defaultValue;
    }
  },

  remove(key) {
    try {
      wx.removeStorageSync(key);
    } catch (e) {
      console.error('Storage remove error:', e);
    }
  }
};

module.exports = storage;
```

## 5. 性能优化

### 5.1 小程序性能最佳实践
- 使用 `setData` 进行数据更新，避免频繁调用
- 合理使用 `wx:if` 和 `hidden` 控制渲染
- 图片资源优化，使用适当尺寸
- 避免在 `onLoad` 中执行耗时操作

### 5.2 代码分包
```json
{
  "subpackages": [
    {
      "root": "pages/advanced",
      "pages": [
        "settings/settings"
      ]
    }
  ]
}
```

## 6. 测试和发布

### 6.1 开发测试
- 使用微信开发者工具进行调试
- 真机预览测试各项功能
- 性能分析和优化

### 6.2 发布流程
- 代码审查和测试
- 提交审核
- 发布上线

## 7. 后续扩展

### 7.1 小程序特有功能
- 分享功能
- 收藏功能
- 用户反馈
- 数据统计

### 7.2 云开发集成
- 云函数
- 云数据库
- 云存储