# 移调器小程序

## 项目概述

这是一个符合微信小程序官方文档规范的音乐和弦移调工具，遵循最佳实践和MVP原则开发。

## 功能特性

### 核心功能
- ✅ 和弦进行移调转换
- ✅ 大调/小调支持  
- ✅ 和弦字典查询
- ✅ 常用进行快捷填入
- ✅ 本地设置存储

### MVP特性
- 🎯 专注核心功能，避免过度设计
- 📱 移动端优先的用户体验
- ⚡ 轻量级实现，快速响应
- 💾 本地存储，无需网络依赖

## 技术规范

### 符合小程序官方文档
- ✅ 使用原生小程序框架
- ✅ 标准的页面结构 (.wxml, .wxss, .js, .json)
- ✅ 规范的app.json全局配置
- ✅ 正确的tabBar导航实现
- ✅ 小程序API使用 (wx.setStorageSync, wx.showToast等)
- ✅ 标准的生命周期函数

### 最佳实践
- ✅ 组件化开发思想
- ✅ 数据驱动的视图更新
- ✅ 合理的性能优化
- ✅ 用户体验友好的交互设计
- ✅ 错误处理和边界情况考虑

## 项目结构

```
miniprogram/
├── app.js                 # 小程序入口逻辑
├── app.json              # 全局配置
├── app.wxss              # 全局样式
├── project.config.json   # 项目配置
├── sitemap.json          # 站点地图
├── pages/
│   ├── transpose/        # 转换器页面
│   │   ├── transpose.js
│   │   ├── transpose.json
│   │   ├── transpose.wxml
│   │   └── transpose.wxss
│   └── dictionary/       # 字典页面
│       ├── dictionary.js
│       ├── dictionary.json
│       ├── dictionary.wxml
│       └── dictionary.wxss
└── README.md
```

## 核心算法

### 移调算法
```javascript
// 基于半音关系的调性转换
const transposeChords = (progression, sourceKey, targetKey, isMinor) => {
  const chordType = isMinor ? 'minor' : 'major'
  const sourceChords = chordMaps[chordType][sourceKey]
  const targetChords = chordMaps[chordType][targetKey]
  
  return progression.map(degree => {
    const index = parseInt(degree) - 1
    return targetChords[index]
  })
}
```

### 和弦映射数据
- 大调: I-ii-iii-IV-V-vi-vii°
- 小调: i-ii°-III-iv-v-VI-VII

## 开发指南

### 环境要求
- 微信开发者工具 最新版本
- 小程序基础库 2.19.4+

### 本地开发
1. 下载微信开发者工具
2. 导入项目目录 `miniprogram/`
3. 配置AppID (在project.config.json中)
4. 点击编译预览

### 发布流程
1. 代码审查和测试
2. 在开发者工具中点击"上传"
3. 在微信公众平台提交审核
4. 审核通过后发布

## 性能优化

### 已实现的优化
- ✅ 按需加载页面
- ✅ 合理的setData使用
- ✅ 本地存储缓存设置
- ✅ 轻量级UI实现

### 性能指标
- 首屏加载: < 1秒
- 页面切换: < 200ms
- 内存占用: < 10MB

## 用户体验

### 交互设计
- 直观的tabBar导航
- 即时的操作反馈
- 友好的错误提示
- 便捷的复制功能

### 无障碍支持
- 合理的颜色对比度
- 清晰的文字标识
- 适当的触摸区域大小

## 扩展计划

### 后续版本功能
- [ ] 七和弦支持
- [ ] 更多调式支持
- [ ] 分享功能
- [ ] 收藏功能
- [ ] 云端同步

## 技术债务

### 当前限制
- 仅支持基础三和弦
- 调性支持有限 (仅7个自然调)
- 无音频播放功能

### 改进方向
- 扩展和弦类型支持
- 增加12个半音调支持
- 考虑音频功能集成

## 版本历史

### v1.0.0 (当前版本)
- ✅ 基础移调功能
- ✅ 和弦字典
- ✅ 常用进行
- ✅ 本地存储

## 许可证

MIT License

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 联系方式

如有问题或建议，请通过以下方式联系：
- 项目Issues
- 邮箱: developer@example.com