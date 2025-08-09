# 和弦转调工具（Web + 微信小程序）

跨平台和弦转调小工具。采用“渐进式优化”策略：在不破坏现有可运行的前提下，持续优化结构、文档与构建流程，遵循 MVP 与微信官方规范。

## 环境要求
- Node >= 16（推荐 18+）
- npm >= 7（已在根 package.json 配置 workspaces，但当前未初始化）

## 快速开始

```bash
# 安装依赖（现状：分别安装）
npm run install:all

# 开发（共享逻辑 + Web）
npm run dev:shared       # 监听 shared 变化
npm run dev:web          # 启动 Web 开发服务器（Vite）

# 构建
npm run build:shared     # 编译 shared 到 dist（供 Web 端使用）
npm run build:web        # 构建 Web（自动先构建 shared）
npm run build:miniprogram # 构建小程序（编译 shared 到 miniprogram/utils/shared 并校验结构）

# 可选：一次性构建全部（新增聚合脚本）
npm run build:all

# 可选：启用 npm workspaces（未初始化，按需使用）
# 注意：若要启用，请先与团队确认，再执行以下命令做一次干净安装
npm run install:workspaces
```

## 目录结构（核心）

```
chord-transpose-tool/
├─ shared/                 # 跨平台共享逻辑（TypeScript：和弦数据、转调算法、状态、存储、同步等）
│  ├─ constants/           # 常量与和弦数据
│  ├─ state/               # 状态管理
│  ├─ storage/             # 跨平台存储适配
│  ├─ sync/                # 同步服务
│  ├─ types/               # 类型定义
│  └─ utils/               # 字典、校验、工具方法
├─ web/                    # React + Vite Web 应用
│  ├─ src/                 # 源码（使用 shadcn 组件库）
│  └─ public/              # 静态资源
├─ miniprogram/            # 原生微信小程序（符合官方规范）
│  ├─ app.js|app.json|app.wxss
│  ├─ pages/               # 页面（.js/.json/.wxml/.wxss）
│  ├─ components/          # 自定义组件
│  ├─ utils/               # 工具（含 utils/shared 为编译产物）
│  └─ project.config.json  # 小程序项目配置
├─ build-tools/            # 构建脚本（含 build-miniprogram.js）
├─ docs/                   # 文档
│  ├─ ARCHITECTURE.md      # 架构与目录说明
│  └─ archive/             # 历史重构/评审类文档归档
└─ （根）README.md、DEVELOPMENT_GUIDE.md、Cross-PlatformToolProgressiveOptimizationPlan.md
```

## 构建流程说明

- Web：
  - 依赖 shared 编译产物（已串行触发：build:web 会先 build:shared）
  - 使用 Vite 构建，shadcn 组件与 Tailwind 已集成在 web 包内
- 小程序：
  - 执行 `npm run build:miniprogram`：
    - 先运行 `build:shared`（shared 使用 tsconfig 编译到 dist）
    - 再执行 `build-tools/build-miniprogram.js`：
      - 将 shared 以 ES5 + CommonJS 编译到 `miniprogram/utils/shared/`
      - 校验小程序关键文件是否存在（app.js/app.json/project.config.json）

## 微信小程序合规清单（要点）
- 目录规范：app.(js/json/wxss)、pages/**、components/**、utils/**
- 配置文件：project.config.json、sitemap.json（按需）
- 代码规范：不使用 DOM API；平台差异通过适配层处理（shared 保持纯逻辑）
- 提交审核：确保权限声明、法务合规、性能与包体积符合要求  
参考：https://developers.weixin.qq.com/miniprogram/dev/framework/

## 文档导航
- 开发指南：DEVELOPMENT_GUIDE.md
- 架构与目录说明：docs/ARCHITECTURE.md
- 当前优化计划：Cross-PlatformToolProgressiveOptimizationPlan.md
- 历史方案/评审归档：docs/archive/

## 常见问题（FAQ）

- 问：小程序构建时报 shared 的 TypeScript 错误怎么办？  
  答：`build:miniprogram` 会先执行 `build:shared`。若 shared 含测试用例或平台类型冲突，请先清理/隔离测试类型，或在 tsconfig 中将测试排除，再重试构建。也可直接运行 `node build-tools/build-miniprogram.js` 触发 ES5/CJS 编译与校验。

- 问：npm workspaces 为什么有告警？  
  答：我们在根 package.json 添加了 `"workspaces"` 但尚未初始化。继续使用现有脚本不受影响；若要启用 workspaces，需要一次“干净安装”（清理各包 node_modules 与 lock 文件后执行 `npm run install:workspaces`）。

## 原则
- MVP 优先：先保证“能用且稳定”，再做结构/体验优化
- 单一真源：平台无关逻辑集中在 shared，Web/小程序仅做 UI 与平台适配
- 渐进式演进：小步迭代，避免大规模重构带来的风险