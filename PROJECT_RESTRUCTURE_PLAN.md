# Quick Transpose - Complete Project Restructure Plan

## 🎯 Restructure Objectives

Based on the comprehensive audit, this plan redesigns the entire project structure to:
- Eliminate duplicate implementations
- Ensure WeChat Mini Program compliance
- Implement proper cross-platform code sharing
- Follow monorepo best practices
- Maintain MVP principles

## 📁 New Project Structure

```
quick-transpose/
├── README.md                          # Main project documentation
├── package.json                       # Root package configuration
├── .gitignore                         # Git ignore rules
├── .env.example                       # Environment template
├── lerna.json                         # Monorepo configuration
├── tsconfig.json                      # Root TypeScript configuration
├── eslint.config.js                   # ESLint configuration
├── prettier.config.js                 # Prettier configuration
│
├── packages/                          # Monorepo packages
│   ├── shared/                        # Shared business logic
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── index.ts               # Main exports
│   │   │   ├── types/                 # TypeScript definitions
│   │   │   │   ├── chord.ts
│   │   │   │   ├── app.ts
│   │   │   │   └── index.ts
│   │   │   ├── constants/             # Application constants
│   │   │   │   ├── chord-data.ts
│   │   │   │   ├── keys.ts
│   │   │   │   └── index.ts
│   │   │   ├── utils/                 # Core utilities
│   │   │   │   ├── transpose.ts
│   │   │   │   ├── validator.ts
│   │   │   │   ├── chord-dictionary.ts
│   │   │   │   └── index.ts
│   │   │   ├── storage/               # Cross-platform storage
│   │   │   │   ├── base.ts
│   │   │   │   ├── web.ts
│   │   │   │   ├── miniprogram.ts
│   │   │   │   └── index.ts
│   │   │   └── state/                 # State management
│   │   │       ├── manager.ts
│   │   │       └── index.ts
│   │   ├── dist/                      # Compiled output
│   │   └── tests/                     # Unit tests
│   │
│   ├── web/                           # Web platform
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── index.html
│   │   ├── public/                    # Static assets
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── components/            # React components
│   │   │   │   ├── transpose/
│   │   │   │   │   ├── TransposeTab.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── dictionary/
│   │   │   │   │   ├── DictionaryTab.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── ui/                # UI components
│   │   │   │   └── layout/            # Layout components
│   │   │   ├── hooks/                 # React hooks
│   │   │   ├── utils/                 # Web-specific utilities
│   │   │   └── styles/                # Styling files
│   │   ├── dist/                      # Build output
│   │   └── tests/                     # Web-specific tests
│   │
│   └── miniprogram/                   # WeChat Mini Program
│       ├── package.json               # Mini Program package config
│       ├── project.config.json        # WeChat project config
│       ├── project.private.config.json
│       ├── sitemap.json               # Sitemap configuration
│       ├── app.js                     # App entry point
│       ├── app.json                   # App configuration
│       ├── app.wxss                   # Global styles
│       ├── pages/                     # Mini Program pages
│       │   ├── transpose/
│       │   │   ├── transpose.js
│       │   │   ├── transpose.json
│       │   │   ├── transpose.wxml
│       │   │   └── transpose.wxss
│       │   └── dictionary/
│       │       ├── dictionary.js
│       │       ├── dictionary.json
│       │       ├── dictionary.wxml
│       │       └── dictionary.wxss
│       ├── components/                # Reusable components
│       ├── utils/                     # Mini Program utilities
│       │   ├── shared/                # Compiled shared code
│       │   ├── platform.js            # Platform-specific code
│       │   └── index.js
│       ├── images/                    # Image assets
│       └── tests/                     # Mini Program tests
│
├── tools/                             # Build and development tools
│   ├── build/                         # Build scripts
│   │   ├── build-all.js
│   │   ├── build-web.js
│   │   ├── build-miniprogram.js
│   │   └── shared-compiler.js         # TypeScript to JS compiler
│   ├── deploy/                        # Deployment scripts
│   │   ├── deploy-web.js
│   │   └── deploy-miniprogram.js
│   └── dev/                           # Development utilities
│       ├── dev-server.js
│       └── watch.js
│
├── docs/                              # Consolidated documentation
│   ├── README.md                      # Documentation index
│   ├── DEVELOPMENT.md                 # Development guide
│   ├── DEPLOYMENT.md                  # Deployment guide
│   ├── API.md                         # API reference
│   ├── ARCHITECTURE.md                # Architecture documentation
│   └── CONTRIBUTING.md                # Contribution guidelines
│
├── tests/                             # Cross-platform tests
│   ├── integration/                   # Integration tests
│   ├── e2e/                          # End-to-end tests
│   └── shared/                        # Shared test utilities
│
└── .github/                           # GitHub workflows
    └── workflows/
        ├── ci.yml                     # Continuous integration
        ├── deploy-web.yml             # Web deployment
        └── test.yml                   # Testing workflow
```

## 🔧 Key Improvements

### 1. Monorepo Architecture
- **Lerna-based monorepo** for better dependency management
- **Shared package** with proper TypeScript compilation
- **Platform-specific packages** with clear boundaries
- **Unified tooling** across all packages

### 2. WeChat Mini Program Compliance
- **Proper directory structure** following official guidelines
- **Correct configuration files** with updated settings
- **Compliant page structure** without missing index page
- **Optimized build process** for mini program deployment

### 3. Cross-Platform Code Sharing
- **TypeScript-first shared package** with proper compilation
- **Platform-specific adapters** for storage and APIs
- **Automated build pipeline** to compile shared code for mini program
- **Type safety** across all platforms

### 4. Build System Redesign
- **Unified build commands** at root level
- **Platform-specific build scripts** in tools directory
- **Shared code compilation** with TypeScript compiler
- **Optimized output** for each platform

## 📦 Package Configuration

### Root package.json
```json
{
  "name": "quick-transpose",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "bootstrap": "lerna bootstrap",
    "build": "lerna run build",
    "build:shared": "lerna run build --scope=@quick-transpose/shared",
    "build:web": "npm run build:shared && lerna run build --scope=@quick-transpose/web",
    "build:miniprogram": "npm run build:shared && node tools/build/build-miniprogram.js",
    "dev": "lerna run dev --parallel",
    "dev:web": "lerna run dev --scope=@quick-transpose/web",
    "test": "lerna run test",
    "lint": "lerna run lint",
    "clean": "lerna run clean && lerna clean",
    "deploy:web": "node tools/deploy/deploy-web.js",
    "deploy:miniprogram": "node tools/deploy/deploy-miniprogram.js"
  },
  "devDependencies": {
    "lerna": "^8.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

### Shared Package Configuration
```json
{
  "name": "@quick-transpose/shared",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "clean": "rimraf dist",
    "test": "jest"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.0.0",
    "rimraf": "^5.0.0",
    "jest": "^29.0.0"
  }
}
```

### Web Package Configuration
```json
{
  "name": "@quick-transpose/web",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "test": "vitest"
  },
  "dependencies": {
    "@quick-transpose/shared": "workspace:*",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0",
    "vitest": "^1.0.0"
  }
}
```

### Mini Program Package Configuration
```json
{
  "name": "@quick-transpose/miniprogram",
  "version": "1.0.0",
  "scripts": {
    "build": "node ../../tools/build/build-miniprogram.js",
    "test": "node tests/test-runner.js"
  },
  "dependencies": {
    "@quick-transpose/shared": "workspace:*"
  }
}
```

## 🛠️ Build System Implementation

### Shared Code Compiler (tools/build/shared-compiler.js)
```javascript
const typescript = require('typescript');
const fs = require('fs');
const path = require('path');

class SharedCodeCompiler {
  constructor(options = {}) {
    this.sourceDir = options.sourceDir || 'packages/shared/src';
    this.outputDir = options.outputDir || 'packages/miniprogram/utils/shared';
    this.tsConfig = options.tsConfig || {
      target: typescript.ScriptTarget.ES5,
      module: typescript.ModuleKind.CommonJS,
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true
    };
  }

  compile() {
    console.log('🔧 Compiling shared TypeScript code for Mini Program...');
    
    // Get all TypeScript files
    const tsFiles = this.getTsFiles(this.sourceDir);
    
    // Compile each file
    tsFiles.forEach(file => {
      this.compileFile(file);
    });
    
    console.log('✅ Shared code compilation completed');
  }

  getTsFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getTsFiles(fullPath));
      } else if (item.endsWith('.ts')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  compileFile(filePath) {
    const sourceCode = fs.readFileSync(filePath, 'utf8');
    const result = typescript.transpile(sourceCode, this.tsConfig);
    
    // Calculate output path
    const relativePath = path.relative(this.sourceDir, filePath);
    const outputPath = path.join(this.outputDir, relativePath.replace('.ts', '.js'));
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write compiled JavaScript
    fs.writeFileSync(outputPath, result);
  }
}

module.exports = SharedCodeCompiler;
```

### Mini Program Build Script (tools/build/build-miniprogram.js)
```javascript
const SharedCodeCompiler = require('./shared-compiler');
const fs = require('fs');
const path = require('path');

async function buildMiniProgram() {
  console.log('🚀 Building WeChat Mini Program...');
  
  try {
    // Step 1: Compile shared code
    const compiler = new SharedCodeCompiler({
      sourceDir: 'packages/shared/src',
      outputDir: 'packages/miniprogram/utils/shared'
    });
    compiler.compile();
    
    // Step 2: Validate Mini Program structure
    validateMiniProgramStructure();
    
    // Step 3: Optimize assets
    optimizeAssets();
    
    console.log('✅ Mini Program build completed successfully');
    
  } catch (error) {
    console.error('❌ Mini Program build failed:', error.message);
    process.exit(1);
  }
}

function validateMiniProgramStructure() {
  const requiredFiles = [
    'packages/miniprogram/app.js',
    'packages/miniprogram/app.json',
    'packages/miniprogram/app.wxss',
    'packages/miniprogram/project.config.json'
  ];
  
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
  
  if (missingFiles.length > 0) {
    throw new Error(`Missing required files: ${missingFiles.join(', ')}`);
  }
  
  console.log('✅ Mini Program structure validation passed');
}

function optimizeAssets() {
  // Optimize images, compress code, etc.
  console.log('🎨 Optimizing assets...');
  // Implementation details...
}

if (require.main === module) {
  buildMiniProgram();
}

module.exports = buildMiniProgram;
```

## 🔄 Migration Steps

### Phase 1: Structure Setup (Day 1)
1. **Create new directory structure**
2. **Set up monorepo configuration**
3. **Initialize package configurations**
4. **Set up build tools**

### Phase 2: Code Migration (Day 2-3)
1. **Migrate shared code to packages/shared**
2. **Migrate web code to packages/web**
3. **Consolidate mini program code to packages/miniprogram**
4. **Update import paths and dependencies**

### Phase 3: Build System (Day 4)
1. **Implement shared code compiler**
2. **Set up build scripts**
3. **Configure development workflows**
4. **Test cross-platform builds**

### Phase 4: Documentation & Testing (Day 5)
1. **Consolidate documentation**
2. **Set up testing infrastructure**
3. **Validate all functionality**
4. **Deploy and test**

## 🎯 Expected Benefits

### Immediate Benefits
- ✅ **WeChat Mini Program compliance** - App will launch successfully
- ✅ **Eliminated duplicates** - Single source of truth for all code
- ✅ **Proper code sharing** - TypeScript shared code compiled for mini program
- ✅ **Clean structure** - Easy to navigate and maintain

### Long-term Benefits
- 🚀 **Scalability** - Easy to add new platforms
- 🔧 **Maintainability** - Clear separation of concerns
- 🧪 **Testability** - Proper testing infrastructure
- 📦 **Deployability** - Automated build and deployment

## 📋 Migration Checklist

### Pre-Migration
- [ ] Backup current project
- [ ] Document current functionality
- [ ] Identify critical dependencies
- [ ] Plan rollback strategy

### During Migration
- [ ] Create new structure
- [ ] Migrate shared code
- [ ] Migrate platform code
- [ ] Update configurations
- [ ] Test functionality

### Post-Migration
- [ ] Validate all features work
- [ ] Update documentation
- [ ] Deploy to staging
- [ ] Performance testing
- [ ] Production deployment

---

This restructure plan addresses all identified issues while maintaining MVP principles and ensuring long-term maintainability. The new structure follows industry best practices and provides a solid foundation for future development.