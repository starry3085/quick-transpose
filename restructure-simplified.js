#!/usr/bin/env node

/**
 * Quick Transpose - Simplified Project Restructure
 * 
 * Single repository approach for multi-platform deployment
 * Following WeChat Mini Program best practices
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SimplifiedRestructure {
  constructor() {
    this.backupDir = `backup-${Date.now()}`;
    this.newStructure = {
      'shared/types': [],
      'shared/utils': [],
      'shared/constants': [],
      'shared/storage': [],
      'web/src/components': [],
      'web/src/hooks': [],
      'web/src/styles': [],
      'web/public': [],
      'miniprogram/pages/transpose': [],
      'miniprogram/pages/dictionary': [],
      'miniprogram/components': [],
      'miniprogram/utils': [],
      'miniprogram/images': [],
      'build-tools': [],
      'docs': []
    };
  }

  async execute() {
    console.log('🚀 Starting simplified project restructure...\n');
    
    try {
      await this.createBackup();
      await this.createNewStructure();
      await this.migrateSharedCode();
      await this.setupWebPlatform();
      await this.setupMiniProgram();
      await this.createBuildSystem();
      await this.updateDocumentation();
      await this.validateStructure();
      
      console.log('\n✅ Simplified restructure completed!');
      console.log('\n📋 Next steps:');
      console.log('1. Run: npm install');
      console.log('2. Run: npm run build:web');
      console.log('3. Run: npm run build:miniprogram');
      console.log('4. Test both platforms');
      
    } catch (error) {
      console.error('\n❌ Restructure failed:', error.message);
      await this.restoreBackup();
      process.exit(1);
    }
  }

  async createBackup() {
    console.log('📦 Creating backup...');
    
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir);
    }
    
    const backupItems = ['shared', 'platforms', 'src', 'docs', 'scripts'];
    backupItems.forEach(item => {
      if (fs.existsSync(item)) {
        execSync(`cp -r ${item} ${this.backupDir}/`, { stdio: 'inherit' });
      }
    });
    
    console.log('✅ Backup created');
  }

  async createNewStructure() {
    console.log('🏗️  Creating simplified structure...');
    
    Object.keys(this.newStructure).forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    console.log('✅ New structure created');
  }

  async migrateSharedCode() {
    console.log('🔄 Migrating shared utilities...');
    
    // Migrate existing shared code
    if (fs.existsSync('shared')) {
      execSync('cp -r shared/* shared/', { stdio: 'inherit' });
    }
    
    // Create shared index file
    const sharedIndex = `// Shared utilities for cross-platform use
export * from './types';
export * from './utils';
export * from './constants';
export * from './storage';
`;
    
    fs.writeFileSync('shared/index.ts', sharedIndex);
    
    // Create TypeScript config for shared code
    const tsConfig = {
      compilerOptions: {
        target: 'ES2020',
        module: 'CommonJS',
        lib: ['ES2020'],
        outDir: './dist',
        rootDir: './',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        declaration: true,
        sourceMap: true
      },
      include: ['**/*.ts'],
      exclude: ['node_modules', 'dist']
    };
    
    fs.writeFileSync('shared/tsconfig.json', JSON.stringify(tsConfig, null, 2));
    
    console.log('✅ Shared code migrated');
  }

  async setupWebPlatform() {
    console.log('🌐 Setting up web platform...');
    
    // Migrate web code
    if (fs.existsSync('src')) {
      execSync('cp -r src/* web/src/', { stdio: 'inherit' });
    }
    if (fs.existsSync('platforms/web/src')) {
      execSync('cp -r platforms/web/src/* web/src/', { stdio: 'inherit' });
    }
    
    // Copy web assets
    if (fs.existsSync('index.html')) {
      execSync('cp index.html web/', { stdio: 'inherit' });
    }
    if (fs.existsSync('public')) {
      execSync('cp -r public/* web/public/', { stdio: 'inherit' });
    }
    
    // Create web package.json
    const webPackage = {
      name: 'chord-transpose-web',
      version: '1.0.0',
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'tsc && vite build',
        preview: 'vite preview'
      },
      dependencies: {
        react: '^18.2.0',
        'react-dom': '^18.2.0'
      },
      devDependencies: {
        '@types/react': '^18.2.0',
        '@types/react-dom': '^18.2.0',
        '@vitejs/plugin-react': '^4.0.0',
        vite: '^5.0.0',
        typescript: '^5.0.0'
      }
    };
    
    fs.writeFileSync('web/package.json', JSON.stringify(webPackage, null, 2));
    
    // Create Vite config
    const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared')
    }
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})`;
    
    fs.writeFileSync('web/vite.config.ts', viteConfig);
    
    console.log('✅ Web platform setup complete');
  }

  async setupMiniProgram() {
    console.log('📱 Setting up WeChat Mini Program...');
    
    // Find and migrate miniprogram code
    const miniprogramSources = ['platforms/miniprogram', 'quick-transpose/miniprogram'];
    let sourceFound = false;
    
    for (const source of miniprogramSources) {
      if (fs.existsSync(source)) {
        execSync(`cp -r ${source}/* miniprogram/`, { stdio: 'inherit' });
        sourceFound = true;
        break;
      }
    }
    
    if (!sourceFound) {
      // Create basic miniprogram structure
      this.createBasicMiniProgram();
    }
    
    // Fix app.json for compliance
    this.fixMiniProgramConfig();
    
    console.log('✅ Mini Program setup complete');
  }

  createBasicMiniProgram() {
    // Create app.js
    const appJs = `App({
  onLaunch() {
    console.log('Chord Transpose Mini Program launched');
  },
  globalData: {
    userInfo: null
  }
});`;
    
    fs.writeFileSync('miniprogram/app.js', appJs);
    
    // Create app.json
    const appJson = {
      pages: [
        'pages/transpose/transpose',
        'pages/dictionary/dictionary'
      ],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'Chord Transpose',
        navigationBarTextStyle: 'black'
      },
      style: 'v2',
      sitemapLocation: 'sitemap.json'
    };
    
    fs.writeFileSync('miniprogram/app.json', JSON.stringify(appJson, null, 2));
    
    // Create app.wxss
    fs.writeFileSync('miniprogram/app.wxss', '/* Global styles */\n');
    
    // Create project.config.json
    const projectConfig = {
      description: 'Chord Transposition Tool',
      packOptions: {
        ignore: []
      },
      setting: {
        bundle: false,
        userConfirmedBundleSwitch: false,
        urlCheck: true,
        scopeDataCheck: false,
        coverView: true,
        es6: true,
        postcss: true,
        compileHotReLoad: false,
        lazyloadPlaceholderEnable: false,
        preloadBackgroundData: false,
        minified: true,
        autoAudits: false,
        newFeature: false,
        uglifyFileName: false,
        uploadWithSourceMap: true,
        useIsolateContext: true,
        nodeModules: false,
        enhance: true,
        useMultiFrameRuntime: true,
        useApiHook: true,
        useApiHostProcess: true,
        showShadowRootInWxmlPanel: true,
        packNpmManually: false,
        enableEngineNative: false,
        packNpmRelationList: [],
        minifyWXSS: true,
        showES6CompileOption: false,
        minifyWXML: true
      },
      compileType: 'miniprogram',
      libVersion: '2.19.4',
      appid: 'your-app-id',
      projectname: 'chord-transpose',
      debugOptions: {
        hidedInDevtools: []
      },
      scripts: {},
      staticServerOptions: {
        baseURL: '',
        servePath: ''
      },
      isGameTourist: false,
      condition: {
        search: {
          list: []
        },
        conversation: {
          list: []
        },
        game: {
          list: []
        },
        plugin: {
          list: []
        },
        gamePlugin: {
          list: []
        },
        miniprogram: {
          list: []
        }
      }
    };
    
    fs.writeFileSync('miniprogram/project.config.json', JSON.stringify(projectConfig, null, 2));
    
    // Create sitemap.json
    const sitemap = {
      desc: 'Chord Transpose sitemap',
      rules: [{
        action: 'allow',
        page: '*'
      }]
    };
    
    fs.writeFileSync('miniprogram/sitemap.json', JSON.stringify(sitemap, null, 2));
  }

  fixMiniProgramConfig() {
    const appJsonPath = 'miniprogram/app.json';
    if (fs.existsSync(appJsonPath)) {
      const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
      
      // Remove non-existent pages
      if (appJson.pages) {
        appJson.pages = appJson.pages.filter(page => {
          const pagePath = `miniprogram/${page}.js`;
          return fs.existsSync(pagePath);
        });
      }
      
      // Ensure compliance settings
      appJson.style = 'v2';
      appJson.lazyCodeLoading = 'requiredComponents';
      
      fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
    }
  }

  async createBuildSystem() {
    console.log('🔧 Creating build system...');
    
    // Root package.json
    const rootPackage = {
      name: 'chord-transpose-tool',
      version: '1.0.0',
      private: true,
      scripts: {
        'build:shared': 'cd shared && tsc',
        'build:web': 'npm run build:shared && cd web && npm run build',
        'build:miniprogram': 'npm run build:shared && node build-tools/build-miniprogram.js',
        'dev:web': 'cd web && npm run dev',
        'dev:shared': 'cd shared && tsc --watch',
        'install:all': 'npm install && cd web && npm install',
        'clean': 'rm -rf shared/dist web/dist miniprogram/utils/shared'
      },
      devDependencies: {
        typescript: '^5.0.0'
      }
    };
    
    fs.writeFileSync('package.json', JSON.stringify(rootPackage, null, 2));
    
    // Create miniprogram build tool
    const buildMiniProgram = `const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function buildMiniProgram() {
  console.log('🚀 Building WeChat Mini Program...');
  
  try {
    // Compile shared code for miniprogram
    console.log('📦 Compiling shared code...');
    execSync('cd shared && tsc --target ES5 --module CommonJS --outDir ../miniprogram/utils/shared', { stdio: 'inherit' });
    
    // Validate miniprogram structure
    validateStructure();
    
    console.log('✅ Mini Program build completed');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

function validateStructure() {
  const required = [
    'miniprogram/app.js',
    'miniprogram/app.json',
    'miniprogram/project.config.json'
  ];
  
  const missing = required.filter(file => !fs.existsSync(file));
  if (missing.length > 0) {
    throw new Error(\`Missing files: \${missing.join(', ')}\`);
  }
}

if (require.main === module) {
  buildMiniProgram();
}

module.exports = buildMiniProgram;`;
    
    fs.writeFileSync('build-tools/build-miniprogram.js', buildMiniProgram);
    
    console.log('✅ Build system created');
  }

  async updateDocumentation() {
    console.log('📚 Updating documentation...');
    
    const readme = `# Chord Transposition Tool

Cross-platform chord transposition application for web and WeChat Mini Program.

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm run install:all

# Development
npm run dev:web          # Web development server
npm run dev:shared       # Watch shared code changes

# Build
npm run build:web        # Build web version
npm run build:miniprogram # Build mini program version
\`\`\`

## 📁 Project Structure

\`\`\`
chord-transpose-tool/
├── shared/              # Shared utilities (TypeScript)
├── web/                 # React web application
├── miniprogram/         # WeChat Mini Program
├── build-tools/         # Build scripts
└── docs/               # Documentation
\`\`\`

## 🛠️ Development

### Web Platform
- React + TypeScript + Vite
- Development server: \`npm run dev:web\`
- Build: \`npm run build:web\`

### WeChat Mini Program
- Native WeChat Mini Program framework
- Uses compiled shared utilities
- Build: \`npm run build:miniprogram\`
- Open in WeChat Developer Tools

## 📖 Documentation

- [Development Guide](docs/DEVELOPMENT.md)
- [API Reference](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
`;
    
    fs.writeFileSync('README.md', readme);
    
    console.log('✅ Documentation updated');
  }

  async validateStructure() {
    console.log('✅ Validating structure...');
    
    const required = [
      'shared',
      'web',
      'miniprogram',
      'build-tools',
      'package.json'
    ];
    
    const missing = required.filter(item => !fs.existsSync(item));
    if (missing.length > 0) {
      throw new Error(`Missing: ${missing.join(', ')}`);
    }
    
    console.log('✅ Structure validation passed');
  }

  async restoreBackup() {
    if (fs.existsSync(this.backupDir)) {
      execSync(`cp -r ${this.backupDir}/* ./`, { stdio: 'inherit' });
      execSync(`rm -rf ${this.backupDir}`, { stdio: 'inherit' });
    }
  }
}

if (require.main === module) {
  const restructure = new SimplifiedRestructure();
  restructure.execute().catch(console.error);
}

module.exports = SimplifiedRestructure;