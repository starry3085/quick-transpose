# Project Structure (Auto-Generated)

```
├── build-tools
│   └── build-miniprogram.js
├── compatibility-test-report.json
├── components.json
├── cross-platform-compatibility-test.js
├── Cross-PlatformToolProgressiveOptimizationPlan-Documentation&CodeAudit.md
├── Cross-PlatformToolProgressiveOptimizationPlan.md
├── deploy.config.js
├── DEVELOPMENT_GUIDE.md
├── docs
│   ├── analysis-archive
│   │   ├── AI-ANALYSIS-SUMMARY.md
│   │   ├── Claude4-Critical-Analysis-of-Project-Structure.md
│   │   ├── Claude4-Deep-Architecture-Analysis.md
│   │   ├── CODE_REVIEW_AND_FIX_PRIORITY.md
│   │   ├── GEMINI-Critique-of-GPT5-Analysis.md
│   │   └── GPT5-Documentation-and-Code-Structure-Map.md
│   ├── API_REFERENCE.md
│   ├── ARCHITECTURE.md
│   ├── archive
│   │   ├── Cross-platformChordTranspositionApplication-CriticalFixes.md
│   │   ├── Cross-PlatformChordTranspositionApplication.md
│   │   ├── Cross-platformChordTranspositionApplicationCodeReview.md
│   │   ├── Cross-platformChordTranspositionTool-ProjectAudit&Restructuring.md
│   │   ├── Cross-PlatformChordTranspositionToolRestructuring-SimplifiedApproach.md
│   │   ├── Cross-PlatformChordTranspositionToolRestructuring.md
│   │   ├── Cross-PlatformToolRefactoringPlan.md
│   │   ├── final-test-report.md
│   │   ├── git-push-commands.md
│   │   ├── PROJECT_RESTRUCTURE_PLAN.md
│   │   └── test-execution-plan.md
│   ├── CROSS_PLATFORM_DEVELOPMENT_GUIDE.md
│   ├── DEPLOYMENT_GUIDE.md
│   ├── DEVELOPMENT_DOCUMENTATION.md
│   ├── generated
│   │   ├── API_AUTO_GENERATED.md
│   │   └── COMPONENTS_AUTO_GENERATED.md
│   ├── README.md
│   └── TESTING_GUIDE.md
├── DocumentationStructureOptimization.md
├── index.html
├── miniprogram
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── components
│   ├── dictionary-active.png
│   ├── dictionary.png
│   ├── generate-icons.html
│   ├── icon-requirements.md
│   ├── images
│   ├── optimize.js
│   ├── package.json
│   ├── pages
│   │   ├── dictionary
│   │   │   ├── dictionary.js
│   │   │   ├── dictionary.json
│   │   │   ├── dictionary.wxml
│   │   │   └── dictionary.wxss
│   │   └── transpose
│   │       ├── transpose.js
│   │       ├── transpose.json
│   │       ├── transpose.wxml
│   │       └── transpose.wxss
│   ├── project.config.json
│   ├── sitemap.json
│   ├── test-checklist.js
│   ├── test-consistency.js
│   ├── transpose-active.png
│   ├── transpose.png
│   ├── tsconfig.json
│   └── utils
│       ├── constants.js
│       ├── error-handler.js
│       ├── platform-detection.js
│       ├── shared
│       │   ├── constants
│       │   │   ├── chord-data.js
│       │   │   ├── chord-data.js.map
│       │   │   ├── index.js
│       │   │   └── index.js.map
│       │   ├── index.js
│       │   ├── index.js.map
│       │   ├── integration
│       │   │   ├── StorageIntegration.js
│       │   │   └── StorageIntegration.js.map
│       │   ├── state
│       │   │   ├── AppStateManager.js
│       │   │   ├── AppStateManager.js.map
│       │   │   ├── StateManager.js
│       │   │   └── StateManager.js.map
│       │   ├── storage
│       │   │   ├── CrossPlatformStorage.js
│       │   │   └── CrossPlatformStorage.js.map
│       │   ├── sync
│       │   │   ├── DataSyncService.js
│       │   │   └── DataSyncService.js.map
│       │   ├── types
│       │   │   ├── chord.js
│       │   │   ├── chord.js.map
│       │   │   ├── index.js
│       │   │   └── index.js.map
│       │   └── utils
│       │       ├── chord-dictionary.js
│       │       ├── chord-dictionary.js.map
│       │       ├── debounce.js
│       │       ├── debounce.js.map
│       │       ├── error-handler.js
│       │       ├── error-handler.js.map
│       │       ├── index.js
│       │       ├── index.js.map
│       │       ├── storage.js
│       │       ├── storage.js.map
│       │       ├── transpose.js
│       │       ├── transpose.js.map
│       │       ├── validator.js
│       │       └── validator.js.map
│       ├── storage.js
│       └── transpose-engine.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── restructure-implementation.js
├── restructure-simplified.js
├── scripts
│   ├── build-all.js
│   ├── docs-watcher.js
│   └── generate-docs.js
├── shared
│   ├── constants
│   │   ├── chord-data.ts
│   │   └── index.ts
│   ├── index.ts
│   ├── integration
│   │   └── StorageIntegration.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── state
│   │   ├── AppStateManager.ts
│   │   └── StateManager.ts
│   ├── storage
│   │   └── CrossPlatformStorage.ts
│   ├── sync
│   │   └── DataSyncService.ts
│   ├── tests
│   │   └── transpose-consistency.test.ts
│   ├── tsconfig.json
│   ├── types
│   │   ├── chord.ts
│   │   ├── global.d.ts
│   │   └── index.ts
│   └── utils
│       ├── chord-dictionary.ts
│       ├── debounce.ts
│       ├── error-handler.ts
│       ├── index.ts
│       ├── storage.ts
│       ├── transpose.ts
│       └── validator.ts
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── dictionary-tab.tsx
│   │   ├── settings-panel.tsx
│   │   ├── theme-provider.tsx
│   │   ├── transpose-tab.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       ├── use-mobile.tsx
│   │       └── use-toast.ts
│   ├── globals.css
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── layout.tsx
│   ├── lib
│   │   └── utils.ts
│   └── main.tsx
├── tailwind.config.ts
├── test-results-web.json
├── test-web-platform.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── web
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src
    │   ├── App.tsx
    │   ├── components
    │   │   ├── dictionary-tab.tsx
    │   │   ├── settings-panel.tsx
    │   │   ├── theme-provider.tsx
    │   │   ├── transpose-tab.tsx
    │   │   └── ui
    │   │       ├── accordion.tsx
    │   │       ├── alert-dialog.tsx
    │   │       ├── alert.tsx
    │   │       ├── aspect-ratio.tsx
    │   │       ├── avatar.tsx
    │   │       ├── badge.tsx
    │   │       ├── breadcrumb.tsx
    │   │       ├── button.tsx
    │   │       ├── calendar.tsx
    │   │       ├── card.tsx
    │   │       ├── carousel.tsx
    │   │       ├── chart.tsx
    │   │       ├── checkbox.tsx
    │   │       ├── collapsible.tsx
    │   │       ├── command.tsx
    │   │       ├── context-menu.tsx
    │   │       ├── dialog.tsx
    │   │       ├── drawer.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── form.tsx
    │   │       ├── hover-card.tsx
    │   │       ├── input-otp.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── menubar.tsx
    │   │       ├── navigation-menu.tsx
    │   │       ├── pagination.tsx
    │   │       ├── popover.tsx
    │   │       ├── progress.tsx
    │   │       ├── radio-group.tsx
    │   │       ├── resizable.tsx
    │   │       ├── scroll-area.tsx
    │   │       ├── select.tsx
    │   │       ├── separator.tsx
    │   │       ├── sheet.tsx
    │   │       ├── sidebar.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── slider.tsx
    │   │       ├── sonner.tsx
    │   │       ├── switch.tsx
    │   │       ├── table.tsx
    │   │       ├── tabs.tsx
    │   │       ├── textarea.tsx
    │   │       ├── toast.tsx
    │   │       ├── toaster.tsx
    │   │       ├── toggle-group.tsx
    │   │       ├── toggle.tsx
    │   │       ├── tooltip.tsx
    │   │       ├── use-mobile.tsx
    │   │       └── use-toast.ts
    │   ├── dictionary-tab.tsx
    │   ├── globals.css
    │   ├── hooks
    │   │   ├── use-mobile.tsx
    │   │   └── use-toast.ts
    │   ├── layout.tsx
    │   ├── lib
    │   │   └── utils.ts
    │   ├── main.tsx
    │   ├── settings-panel.tsx
    │   ├── styles
    │   ├── theme-provider.tsx
    │   ├── transpose-tab.tsx
    │   └── ui
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       ├── tooltip.tsx
    │       ├── use-mobile.tsx
    │       └── use-toast.ts
    └── vite.config.ts

```

## Directory Descriptions

### Core Directories
- **src/**: Desktop application (Electron-based)
- **web/**: Web application (React-based)
- **miniprogram/**: WeChat Mini Program
- **shared/**: Cross-platform shared logic and utilities
- **docs/**: Project documentation
- **scripts/**: Build and utility scripts

### Platform-Specific Directories
- **src/main/**: Electron main process
- **src/renderer/**: Electron renderer process
- **web/src/**: React application source
- **miniprogram/pages/**: Mini program pages
- **miniprogram/components/**: Mini program components

*Last Updated: 2025-08-09*
