# Quick Transpose - 跨平台和弦转调应用

一个支持微信小程序和网页版的和弦转调工具，采用monorepo架构实现代码共享。

## 🚀 功能特性

- **和弦转调工具**: 支持大小调和弦进行转调
- **和弦字典**: 完整的和弦查询和浏览功能
- **跨平台支持**: 同时支持网页版和微信小程序
- **响应式设计**: 适配桌面、平板、手机等多种设备
- **代码共享**: 核心业务逻辑在多平台间复用

## 🏗️ 项目结构

```
quick-transpose/
├── shared/                    # 共享业务逻辑
│   ├── types/                # TypeScript类型定义
│   ├── constants/            # 常量和配置
│   ├── utils/               # 工具函数
│   └── index.ts             # 统一导出
├── platforms/
│   ├── web/                 # 网页版 (React + TDesign)
│   │   ├── src/
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── tsconfig.json
│   └── miniprogram/         # 微信小程序版
│       ├── pages/
│       ├── utils/
│       ├── app.js
│       └── package.json
├── package.json             # 根目录配置
└── README.md
```

## 🛠️ 技术栈

### 共享层
- **TypeScript**: 类型安全的业务逻辑
- **核心算法**: 和弦转调、验证、存储抽象

### 网页版
- **React 18**: 现代化前端框架
- **TDesign**: 企业级UI组件库
- **Vite**: 快速构建工具
- **TypeScript**: 类型安全开发

### 小程序版
- **微信小程序**: 原生小程序开发
- **TypeScript**: 类型安全支持
- **共享业务逻辑**: 复用核心算法

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0
- 微信开发者工具 (小程序开发)

### 项目状态
- ✅ **Web版本**: 已完成开发并部署到CloudStudio
- ✅ **小程序版本**: 基础架构完成，可进行测试
- ✅ **跨平台共享**: 核心业务逻辑已实现代码复用

### 快速体验

#### 网页版 (已部署)
直接访问已部署的网页版本进行体验

#### 小程序版 (开发测试)
```bash
# 1. 下载并安装微信开发者工具
# 2. 打开微信开发者工具
# 3. 选择"导入项目"
# 4. 项目目录: platforms/miniprogram
# 5. AppID: touristappid (测试用)
```

### 开发模式

#### 网页版开发
```bash
# 启动开发服务器
npm run dev
# 访问 http://localhost:3000
```

#### 小程序开发
```bash
# 使用微信开发者工具打开 platforms/miniprogram 目录
# 项目已配置完成，可直接预览和调试
```

### 构建生产版本
```bash
# 构建所有平台
npm run build

# 或者分别构建
npm run build:shared      # 构建共享模块
npm run build:web         # 构建网页版
npm run build:miniprogram # 构建小程序版
```

## 📱 平台特性

### 网页版特性
- 响应式设计，支持桌面/平板/手机
- TDesign组件库，统一的视觉体验
- PWA支持（计划中）
- 现代浏览器兼容

### 小程序版特性
- 微信生态集成
- 原生性能体验
- 小程序特有功能支持
- 微信用户数据同步（计划中）

## 🔧 开发指南

### 添加新功能
1. 在 `shared/` 中实现核心业务逻辑
2. 在各平台的适配层中实现UI和平台特定功能
3. 更新类型定义和导出

### 代码规范
- 使用TypeScript进行类型安全开发
- 遵循ESLint配置的代码规范
- 共享逻辑必须平台无关
- 平台特定代码放在对应的platforms目录

### 测试
```bash
npm run test  # 运行测试 (待实现)
npm run lint  # 代码规范检查
```

## 📦 部署

### 网页版部署
```bash
npm run build:web
# 将 platforms/web/dist 目录部署到静态服务器
```

### 小程序发布
1. 使用微信开发者工具打开 `platforms/miniprogram`
2. 点击"上传"按钮上传代码
3. 在微信公众平台提交审核

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [TDesign](https://tdesign.tencent.com/) - 企业级设计语言和组件库
- [React](https://reactjs.org/) - 用户界面构建库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript的超集