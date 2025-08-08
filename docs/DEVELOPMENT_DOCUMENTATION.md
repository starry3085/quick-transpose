# Quick Transpose - 开发文档

## 📖 项目概述

Quick Transpose 是一个跨平台和弦转调应用，支持Web端和微信小程序端。采用monorepo架构，实现了核心业务逻辑的跨平台共享。

### 核心功能
- 🎵 和弦转调工具 - 支持各种调性的和弦转换
- 📚 和弦字典 - 完整的和弦查询和浏览功能
- 🔄 跨平台支持 - Web端和微信小程序端
- 📱 响应式设计 - 适配桌面、平板、手机等设备
- 💾 数据同步 - 跨平台数据持久化和同步

### 技术架构
```
quick-transpose/
├── shared/                    # 共享业务逻辑层
│   ├── types/                # TypeScript类型定义
│   ├── constants/            # 常量和配置
│   ├── utils/               # 工具函数
│   ├── state/               # 状态管理
│   ├── storage/             # 跨平台存储
│   ├── sync/                # 数据同步
│   └── integration/         # 集成模块
├── platforms/
│   ├── web/                 # Web端 (React + TDesign)
│   └── miniprogram/         # 微信小程序端
├── scripts/                 # 构建脚本
├── docs/                    # 文档
└── deploy.config.js         # 部署配置
```

## 🛠️ 开发环境搭建

### 系统要求
- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **微信开发者工具**: 最新版本（小程序开发）
- **Git**: 版本控制

### 环境安装

1. **克隆项目**
```bash
git clone https://github.com/your-username/quick-transpose.git
cd quick-transpose
```

2. **安装依赖**
```bash
# 安装所有平台依赖
npm run install:all

# 或者分别安装
npm install                    # 根目录依赖
cd shared && npm install       # 共享模块依赖
cd ../platforms/web && npm install  # Web端依赖
```

3. **环境配置**
```bash
# 复制环境配置文件
cp .env.example .env

# 编辑配置文件
# 设置API端点、数据库连接等
```

### IDE配置

#### VS Code 推荐插件
```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

#### TypeScript配置
项目使用严格的TypeScript配置，确保类型安全：
- 启用严格模式
- 禁止隐式any类型
- 要求显式返回类型
- 启用未使用变量检查

## 🚀 开发流程

### 开发模式启动

#### Web端开发
```bash
# 启动Web端开发服务器
npm run dev:web

# 或者同时启动共享模块监听
npm run dev
```
访问: http://localhost:3000

#### 小程序开发
```bash
# 编译共享模块
npm run build:shared

# 使用微信开发者工具打开
# 项目路径: platforms/miniprogram
# AppID: touristappid (测试用)
```

### 代码结构说明

#### 共享模块 (shared/)
```typescript
// 类型定义
shared/types/
├── chord.ts          # 和弦相关类型
├── app.ts           # 应用状态类型
└── storage.ts       # 存储相关类型

// 业务逻辑
shared/utils/
├── transpose.ts     # 转调算法
├── validation.ts    # 数据验证
└── constants.ts     # 常量定义

// 状态管理
shared/state/
├── StateManager.ts     # 跨平台状态管理器
└── AppStateManager.ts  # 应用状态管理

// 存储系统
shared/storage/
├── CrossPlatformStorage.ts  # 跨平台存储适配器
└── StorageIntegration.ts    # 存储集成接口

// 数据同步
shared/sync/
└── DataSyncService.ts      # 数据同步服务
```

#### Web端 (platforms/web/)
```typescript
// 组件结构
src/components/
├── TransposeApp.tsx        # 主应用组件
├── TransposeTab.tsx        # 转调页面
├── DictionaryTab.tsx       # 字典页面
└── adaptive/              # 自适应组件
    ├── ResponsiveGrid.tsx
    ├── AdaptiveCard.tsx
    └── AdaptiveLayout.tsx

// 工具函数
src/utils/
├── platform-detection.ts  # 平台检测
└── shared-import.ts       # 共享模块导入

// Hooks
src/hooks/
└── usePlatform.ts         # 平台检测Hook
```

#### 小程序端 (platforms/miniprogram/)
```javascript
// 页面结构
pages/
├── transpose/             # 转调页面
│   ├── transpose.wxml
│   ├── transpose.wxss
│   ├── transpose.js
│   └── transpose.json
└── dictionary/            # 字典页面
    ├── dictionary.wxml
    ├── dictionary.wxss
    ├── dictionary.js
    └── dictionary.json

// 工具函数
utils/
├── constants.js           # 常量定义
├── storage.js            # 存储工具
├── transpose-engine.js   # 转调引擎
└── platform-detection.js # 平台检测
```

### 开发规范

#### 代码风格
- 使用TypeScript进行类型安全开发
- 遵循ESLint和Prettier配置
- 组件命名使用PascalCase
- 函数命名使用camelCase
- 常量命名使用UPPER_SNAKE_CASE

#### Git工作流
```bash
# 创建功能分支
git checkout -b feature/new-feature

# 提交更改
git add .
git commit -m "feat: 添加新功能描述"

# 推送到远程
git push origin feature/new-feature

# 创建Pull Request
```

#### 提交信息规范
```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

## 🔧 构建和部署

### 构建命令

#### 全平台构建
```bash
# 构建所有平台
npm run build

# 构建特定平台
npm run build:web          # 仅构建Web端
npm run build:miniprogram  # 验证小程序
npm run build:shared       # 仅构建共享模块
```

#### 构建输出
```
platforms/web/dist/        # Web端构建输出
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
└── ...

platforms/miniprogram/     # 小程序源码（无需构建）
├── app.json
├── app.js
├── pages/
└── utils/
```

### 部署流程

#### Web端部署

1. **CloudStudio部署**（已配置）
```bash
# 构建生产版本
npm run build:web

# 部署到CloudStudio（自动）
# 访问: https://your-cloudstudio-url.com
```

2. **其他平台部署**
```bash
# 构建
npm run build:web

# 部署到静态服务器
# 将 platforms/web/dist 目录上传到服务器
```

#### 小程序部署

1. **开发版本**
```bash
# 使用微信开发者工具
# 1. 打开项目: platforms/miniprogram
# 2. 点击"预览"生成二维码
# 3. 微信扫码预览
```

2. **生产版本**
```bash
# 1. 更新project.config.json中的AppID
# 2. 在微信开发者工具中点击"上传"
# 3. 在微信公众平台提交审核
# 4. 审核通过后发布
```

### 环境配置

#### 开发环境
```javascript
// .env.development
NODE_ENV=development
API_BASE_URL=http://localhost:3001
ENABLE_SYNC=false
DEBUG_MODE=true
```

#### 生产环境
```javascript
// .env.production
NODE_ENV=production
API_BASE_URL=https://api.quick-transpose.com
ENABLE_SYNC=true
DEBUG_MODE=false
```

## 🧪 测试

### 测试策略

#### 单元测试
```bash
# 运行测试
npm run test

# 测试覆盖率
npm run test:coverage
```

#### 功能测试
```bash
# 小程序功能测试
npm run test:miniprogram

# 运行测试清单
node platforms/miniprogram/test-checklist.js
```

#### 性能测试
```bash
# 性能优化检查
npm run optimize

# 运行性能监控
node platforms/miniprogram/optimize.js
```

### 测试清单

#### Web端测试
- [ ] 页面加载正常
- [ ] 转调功能正确
- [ ] 字典搜索正常
- [ ] 响应式布局适配
- [ ] 数据持久化正常
- [ ] 跨浏览器兼容性

#### 小程序测试
- [ ] 页面渲染正常
- [ ] TabBar导航正常
- [ ] 转调计算准确
- [ ] 数据存储正常
- [ ] 页面间数据传递
- [ ] 不同设备适配

## 📊 性能优化

### Web端优化
- 代码分割和懒加载
- 静态资源压缩
- CDN加速
- 缓存策略
- Bundle分析和优化

### 小程序优化
- 分包加载
- 图片压缩
- 代码压缩
- 请求优化
- 内存管理

### 监控指标
- 页面加载时间
- 首屏渲染时间
- 交互响应时间
- 内存使用情况
- 错误率统计

## 🔍 调试指南

### Web端调试
```bash
# 开发模式启动
npm run dev:web

# 浏览器开发者工具
# - Console: 查看日志和错误
# - Network: 监控网络请求
# - Application: 检查本地存储
# - Performance: 性能分析
```

### 小程序调试
```bash
# 微信开发者工具调试
# 1. 打开调试器
# 2. Console面板查看日志
# 3. Network面板监控请求
# 4. Storage面板检查存储
# 5. Performance面板性能分析
```

### 常见问题排查

#### 构建问题
```bash
# 清理缓存
npm run clean

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

#### 类型错误
```bash
# 检查TypeScript配置
npx tsc --noEmit

# 更新类型定义
npm update @types/*
```

#### 小程序问题
- 检查AppID配置
- 验证页面路径
- 确认权限设置
- 查看错误日志

## 📚 API文档

### 共享模块API

#### 转调引擎
```typescript
import { transposeChord, transposeProgression } from 'shared/utils/transpose';

// 单个和弦转调
const result = transposeChord('C', 2); // 返回 'D'

// 和弦进行转调
const progression = ['C', 'Am', 'F', 'G'];
const transposed = transposeProgression(progression, 2);
// 返回 ['D', 'Bm', 'G', 'A']
```

#### 状态管理
```typescript
import { createWebStateManager } from 'shared/state/AppStateManager';

const stateManager = createWebStateManager();

// 订阅状态变化
const unsubscribe = stateManager.subscribe('transpose', (newState) => {
  console.log('转调状态更新:', newState);
});

// 更新状态
stateManager.setState({
  transpose: {
    currentChord: 'C',
    targetKey: 2,
    transposedChord: 'D'
  }
});
```

#### 存储系统
```typescript
import { createWebStorageManager } from 'shared/integration/StorageIntegration';

const storageManager = createWebStorageManager();

// 保存转调历史
await storageManager.addTransposeHistory({
  original: 'C',
  transposed: 'D',
  key: 2
});

// 获取历史记录
const history = await storageManager.getTransposeHistory();
```

### 平台特定API

#### Web端组件
```typescript
import { ResponsiveGrid, AdaptiveCard } from 'components/adaptive';

// 响应式网格
<ResponsiveGrid cols={{ mobile: 1, tablet: 2, desktop: 3 }}>
  <AdaptiveCard title="和弦" size="medium">
    {/* 内容 */}
  </AdaptiveCard>
</ResponsiveGrid>
```

#### 小程序工具
```javascript
const { transposeChord } = require('./utils/transpose-engine');
const { saveData, loadData } = require('./utils/storage');

// 转调计算
const result = transposeChord('C', 2);

// 数据存储
saveData('history', historyData);
const data = loadData('history');
```

## 🔐 安全考虑

### 数据安全
- 本地数据加密存储
- 传输数据HTTPS加密
- 用户隐私保护
- 敏感信息脱敏

### 代码安全
- 依赖包安全扫描
- XSS防护
- CSRF防护
- 输入验证和过滤

## 📈 监控和日志

### 错误监控
- 前端错误收集
- 性能监控
- 用户行为分析
- 崩溃报告

### 日志系统
- 分级日志记录
- 结构化日志格式
- 日志轮转和清理
- 敏感信息过滤

## 🤝 贡献指南

### 开发流程
1. Fork项目
2. 创建功能分支
3. 编写代码和测试
4. 提交Pull Request
5. 代码审查
6. 合并到主分支

### 代码审查清单
- [ ] 代码符合规范
- [ ] 测试覆盖充分
- [ ] 文档更新完整
- [ ] 性能影响评估
- [ ] 安全风险评估

## 📞 支持和联系

### 技术支持
- GitHub Issues: 报告bug和功能请求
- 文档Wiki: 详细技术文档
- 社区论坛: 技术讨论和交流

### 联系方式
- 项目维护者: [your-email@example.com]
- 技术交流群: [QQ群号或微信群]
- 官方网站: [https://quick-transpose.com]

---

**最后更新**: 2025年1月8日
**文档版本**: v1.0.0