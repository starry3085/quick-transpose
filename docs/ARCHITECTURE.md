# 架构与目录说明

本项目是跨平台的和弦转调小工具，平台覆盖 Web 与微信小程序。采用“渐进式优化”策略，保持现有可工作的构建系统，并进行结构与文档优化。

## 目录结构（核心）

- /shared
  - 跨平台共享逻辑（TypeScript）：和弦数据、转调算法、字典、校验、状态管理、存储、同步等
  - 通过 `npm run build:shared` 编译产物供 Web 与小程序复用
- /web
  - React + Vite 的前端应用
  - 使用 shadcn 组件与 Tailwind（详见 web/package.json 与 src/）
- /miniprogram
  - 原生微信小程序目录，符合官方规范
  - app.(js/json/wxss)、pages、components、utils 结构完整
  - 共享逻辑编译后复制到 `miniprogram/utils/shared/`
- /build-tools
  - 小程序构建辅助脚本（例如 `build-miniprogram.js`）
- /scripts
  - 跨平台脚本与辅助工具（如测试、重构脚本）
- /docs
  - 文档目录（本文件）
  - /docs/archive：历史方案/评审类文档的归档区

## 构建与运行

- 构建共享逻辑：`npm run build:shared`
- Web 开发：`npm run dev:web`
- 构建 Web：`npm run build:web`
- 构建小程序：`npm run build:miniprogram`
  - 会将 `shared` 的编译产物复制到 `miniprogram/utils/shared/`

## 代码共享策略

- 单一真源：所有与平台无关的业务逻辑集中在 `/shared`，由 Web 与小程序共同依赖
- 平台适配：平台相关的 UI、交互与配置保持在各自包内（/web、/miniprogram）
- 约束：`/shared` 不应引入 DOM 或平台特有 API，保持纯 TypeScript/逻辑层

## 小程序合规要点

- 目录与配置符合：https://developers.weixin.qq.com/miniprogram/dev/framework/
- 入口与全局：`app.js/app.json/app.wxss`
- 页面：`pages/**` 每个页面包含 `.js/.json/.wxml/.wxss`
- 组件：`components/**`
- 工具与共享：`utils/**` 以及 `utils/shared/**`（共享逻辑编译产物）

## 渐进式优化路线（摘要）

1) 清理冗余目录（已完成）  
2) 文档结构标准化（进行中/本次提交完成）  
3) Workspace/脚本优化（待办）  
4) 小程序配置与构建校验（待办）  
5) README 与开发指南持续完善（待办）