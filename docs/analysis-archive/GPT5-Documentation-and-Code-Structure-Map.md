# GPT5 文档结构与代码结构地图（只读盘点）

- 生成时间：2025-08-10 01:00 CST
- 范围：当前仓库 e:/quick-transpose 全量目录的只读盘点，不做任何修改
- 目标：为后续文档整合与代码收敛提供统一视图与清单基础

## 一、Documentation Map（文档结构地图）

### 1. 根级文档
- README.md（项目入口与概览）
- DEVELOPMENT_GUIDE.md（开发指南）
- Cross-PlatformToolProgressiveOptimizationPlan-Documentation&CodeAudit.md（文档与代码审计计划）
- Cross-PlatformToolProgressiveOptimizationPlan.md（优化计划）
- index.html（根级独立静态页，用于简单预览或占位）
- 其他：deploy.config.js、restructure-implementation.js、restructure-simplified.js（与重构/部署相关的脚本或方案）

初步提示（不落地）：
- 多份“Plan/Optimization/Restructuring”主题文档存在重叠，建议统一“现行蓝本”一份，其余归档。

### 2. docs/ 权威目录（建议作为主文档中心）
- docs/ARCHITECTURE.md（架构说明）
- docs/API_REFERENCE.md（API 参考）
- docs/DEVELOPMENT_DOCUMENTATION.md（开发文档/指南）
- docs/DEPLOYMENT_GUIDE.md（部署指南）
- docs/TESTING_GUIDE.md（测试指南）
- docs/CODE_REVIEW_AND_FIX_PRIORITY.md（代码评审与修复优先级）
- docs/archive/ 历史归档：
  - Cross-platformChordTranspositionApplication*.md（多版方案/评审/重构计划）
  - PROJECT_RESTRUCTURE_PLAN.md、final-test-report.md、test-execution-plan.md、git-push-commands.md 等

初步提示（不落地）：
- 建议以 docs/ 作为“权威目录”；根 README 只做导航与索引。
- 将根级 DEVELOPMENT_GUIDE.md 与 docs/DEVELOPMENT_DOCUMENTATION.md 合并保留一份。

### 3. 业务子目录内文档
- miniprogram/icon-requirements.md（小程序图标规范与要求）

### 4. 报告与检查结果
- compatibility-test-report.json（兼容性测试结果）
- test-results-web.json（web 测试输出）
- docs/archive/final-test-report.md（历史最终测试报告）

---

## 二、Code Structure Map（代码结构地图）

### 1. 根级配置与工具
- 配置：vite.config.ts、tailwind.config.ts、postcss.config.js、tsconfig.json / tsconfig.app.json / tsconfig.node.json、components.json（shadcn）
- 包管理：package.json、package-lock.json
- 测试与脚本：test-web-platform.js、cross-platform-compatibility-test.js
- 脚本/工具：scripts/、build-tools/

### 2. 应用 A：web/（React + Vite）
- web/index.html、web/vite.config.ts、web/package.json
- web/public/
- web/src/
  - App.tsx、layout.tsx、theme-provider.tsx、settings-panel.tsx
  - dictionary-tab.tsx、transpose-tab.tsx、globals.css
  - 目录：components/、hooks/、lib/、styles/、ui/
说明：完整的 Web 前端应用，页面与组件结构齐备。

### 3. 应用 B：根级 src/（React + Vite）
- src/App.tsx、layout.tsx、theme-provider.tsx、settings-panel.tsx
- src/components/
  - dictionary-tab.tsx、transpose-tab.tsx、ui/（包含大量 shadcn 组件封装）
- src/hooks/、src/lib/、src/globals.css、src/main.tsx
说明：与 web/ 存在高度同构的页面/组件/布局，功能大范围重叠。

### 4. 跨端共享包：shared/（TypeScript）
- shared/constants/（chord-data.ts、index.ts）
- shared/utils/（transpose.ts、chord-dictionary.ts、validator.ts、storage.ts、debounce.ts、error-handler.ts、index.ts）
- shared/state/（AppStateManager.ts、StateManager.ts）
- shared/storage/（CrossPlatformStorage.ts）
- shared/sync/（DataSyncService.ts）
- shared/types/（chord.ts、global.d.ts、index.ts）
- shared/tests/（transpose-consistency.test.ts）
说明：共享契约与工具的核心所在，建议将其作为统一的“契约层”。

### 5. 小程序：miniprogram/（原生微信小程序）
- pages/{dictionary, transpose}/（页面 wxml/wxss/js/json）
- utils/：
  - transpose-engine.js、storage.js、constants.js、error-handler.js、platform-detection.js
  - utils/shared/（index.js 及映射目录：constants/integration/state/storage/sync/types/utils）
- 根配置：app.{js/json/wxss}、project.config.json、sitemap.json、tsconfig.json、package.json
说明：存在与 shared 对齐的“共享”产物（utils/shared），可进一步标准化复用路径与接口。

### 6. 构建与脚本
- scripts/build-all.js（可能串联多端构建）
- build-tools/build-miniprogram.js（小程序构建辅助）

---

## 三、初步观察与风险提示（不做修改）
- 重复与维护成本：
  - web/ 与根级 src/ 两套 React 应用页面/组件高度重复，带来双份维护与行为漂移风险。
- 契约与边界：
  - shared/ 是跨端稳定契约关键点。建议优先稳定其 API/类型，并推动 Web 与小程序统一依赖模式。
- 小程序复用：
  - miniprogram/utils/shared 与 shared 存在映射关系，但耦合方式欠统一，可通过打包/发布策略统一入口。
- 配置多套：
  - tsconfig/vite/tailwind 多处存在，需确认主应用与权威配置，避免“配置漂移”。

---

## 四、后续计划锚点（对齐项目计划）
- 已完成（本次交付）：
  - Documentation Map：统一视图
  - Code Structure Map：应用/包/小程序分层与要点
- 下一步（不落地，仅行动方向）：
  - 识别“重复与耦合热点”：聚焦 web vs src 的页面/组件重复清单；shared 的 API/类型边界与依赖方向；miniprogram 与 shared 的差异映射
  - 输出问题清单（含优先级）与无破坏性收敛选项