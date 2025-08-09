#!/usr/bin/env node

/**
 * Quick Transpose - Project Restructure Implementation Script
 * 
 * This script automates the complete project restructuring process
 * following the new architecture design.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ProjectRestructure {
  constructor() {
    this.backupDir = `backup-${Date.now()}`;
    this.newStructure = {
      'packages/shared/src/types': [],
      'packages/shared/src/constants': [],
      'packages/shared/src/utils': [],
      'packages/shared/src/storage': [],
      'packages/shared/src/state': [],
      'packages/shared/tests': [],
      'packages/web/src/components/transpose': [],
      'packages/web/src/components/dictionary': [],
      'packages/web/src/components/ui': [],
      'packages/web/src/hooks': [],
      'packages/web/src/utils': [],
      'packages/web/src/styles': [],
      'packages/web/public': [],
      'packages/web/tests': [],
      'packages/miniprogram/pages/transpose': [],
      'packages/miniprogram/pages/dictionary': [],
      'packages/miniprogram/components': [],
      'packages/miniprogram/utils': [],
      'packages/miniprogram/images': [],
      'packages/miniprogram/tests': [],
      'tools/build': [],
      'tools/deploy': [],
      'tools/dev': [],
      'docs': [],
      'tests/integration': [],
      'tests/e2e': [],
      'tests/shared': [],
      '.github/workflows': []
    };
  }

  async execute() {
    console.log('🚀 Starting Quick Transpose project restructure...\n');
    
    try {
      await this.createBackup();
      await this.createNewStructure();
      await this.migrateSharedCode();
      await this.migrateWebCode();
      await this.migrateMiniProgramCode();
      await this.createConfigFiles();
      await this.createBuildTools();
      await this.consolidateDocumentation();
      await this.cleanupOldStructure();
      await this.validateNewStructure();
      
      console.log('\n✅ Project restructure completed successfully!');
      console.log('\n📋 Next steps:');
      console.log('1. Run: npm install');
      console.log('2. Run: npm run bootstrap');
      console.log('3. Run: npm run build');
      console.log('4. Test both platforms');
      
    } catch (error) {
      console.error('\n❌ Restructure failed:', error.message);
      console.log('\n🔄 Restoring from backup...');
      await this.restoreBackup();
      process.exit(1);
    }
  }

  async createBackup() {
    console.log('📦 Creating backup...');
    
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir);
    }
    
    // Backup critical directories
    const backupItems = [
      'shared',
      'platforms',
      'src',
      'docs',
      'scripts',
      'package.json',
      'README.md'
    ];
    
    backupItems.forEach(item => {
      if (fs.existsSync(item)) {
        execSync(`cp -r ${item} ${this.backupDir}/`, { stdio: 'inherit' });
      }
    });
    
    console.log('✅ Backup created successfully');
  }

  async createNewStructure() {
    console.log('🏗️  Creating new directory structure...');
    
    Object.keys(this.newStructure).forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    console.log('✅ New structure created');
  }

  async migrateSharedCode() {
    console.log('🔄 Migrating shared code...');
    
    const migrations = [
      // Types
      { from: 'shared/types', to: 'packages/shared/src/types' },
      // Constants
      { from: 'shared/constants', to: 'packages/shared/src/constants' },
      // Utils
      { from: 'shared/utils', to: 'packages/shared/src/utils' },
      // Storage
      { from: 'shared/storage', to: 'packages/shared/src/storage' },
      // State
      { from: 'shared/state', to: 'packages/shared/src/state' },
      // Tests
      { from: 'shared/tests', to: 'packages/shared/tests' }
    ];
    
    migrations.forEach(({ from, to }) => {
      if (fs.existsSync(from)) {
        execSync(`cp -r ${from}/* ${to}/`, { stdio: 'inherit' });
      }
    });
    
    // Create main index file
    this.createSharedIndex();
    
    console.log('✅ Shared code migrated');
  }

  async migrateWebCode() {
    console.log('🌐 Migrating web code...');
    
    const migrations = [
      // Components
      { from: 'src/components', to: 'packages/web/src/components' },
      { from: 'platforms/web/src/components', to: 'packages/web/src/components' },
      // Hooks
      { from: 'src/hooks', to: 'packages/web/src/hooks' },
      { from: 'platforms/web/src/hooks', to: 'packages/web/src/hooks' },
      // Utils
      { from: 'platforms/web/src/utils', to: 'packages/web/src/utils' },
      // Styles
      { from: 'src/globals.css', to: 'packages/web/src/styles/globals.css' },
      { from: 'platforms/web/src/App.less', to: 'packages/web/src/styles/App.less' },
      // Main files
      { from: 'src/main.tsx', to: 'packages/web/src/main.tsx' },
      { from: 'src/App.tsx', to: 'packages/web/src/App.tsx' },
      { from: 'platforms/web/src/main.tsx', to: 'packages/web/src/main.tsx' },
      { from: 'platforms/web/src/App.tsx', to: 'packages/web/src/App.tsx' },
      // Config files
      { from: 'index.html', to: 'packages/web/index.html' },
      { from: 'platforms/web/index.html', to: 'packages/web/index.html' }
    ];
    
    migrations.forEach(({ from, to }) => {
      if (fs.existsSync(from)) {
        const toDir = path.dirname(to);
        if (!fs.existsSync(toDir)) {
          fs.mkdirSync(toDir, { recursive: true });
        }
        execSync(`cp -r ${from} ${to}`, { stdio: 'inherit' });
      }
    });
    
    console.log('✅ Web code migrated');
  }

  async migrateMiniProgramCode() {
    console.log('📱 Migrating mini program code...');
    
    // Choose the most complete miniprogram implementation
    const sourceDirs = [
      'platforms/miniprogram',
      'quick-transpose/miniprogram'
    ];
    
    let sourceDir = null;
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir) && fs.existsSync(path.join(dir, 'app.json'))) {
        sourceDir = dir;
        break;
      }
    }
    
    if (!sourceDir) {
      throw new Error('No valid miniprogram source found');
    }
    
    console.log(`Using miniprogram source: ${sourceDir}`);
    
    // Copy all miniprogram files
    execSync(`cp -r ${sourceDir}/* packages/miniprogram/`, { stdio: 'inherit' });
    
    // Fix app.json to remove missing index page
    this.fixMiniProgramConfig();
    
    console.log('✅ Mini program code migrated');
  }

  fixMiniProgramConfig() {
    const appJsonPath = 'packages/miniprogram/app.json';
    if (fs.existsSync(appJsonPath)) {
      const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
      
      // Remove index page if it doesn't exist
      if (appJson.pages && appJson.pages.includes('pages/index/index')) {
        if (!fs.existsSync('packages/miniprogram/pages/index/index.js')) {
          appJson.pages = appJson.pages.filter(page => page !== 'pages/index/index');
        }
      }
      
      // Update configuration for compliance
      appJson.style = 'v2';
      appJson.lazyCodeLoading = 'requiredComponents';
      
      fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
    }
  }

  async createConfigFiles() {
    console.log('⚙️  Creating configuration files...');
    
    // Root package.json
    const rootPackageJson = {
      name: 'quick-transpose',
      version: '1.0.0',
      private: true,
      workspaces: ['packages/*'],
      scripts: {
        bootstrap: 'lerna bootstrap',
        build: 'lerna run build',
        'build:shared': 'lerna run build --scope=@quick-transpose/shared',
        'build:web': 'npm run build:shared && lerna run build --scope=@quick-transpose/web',
        'build:miniprogram': 'npm run build:shared && node tools/build/build-miniprogram.js',
        dev: 'lerna run dev --parallel',
        'dev:web': 'lerna run dev --scope=@quick-transpose/web',
        test: 'lerna run test',
        lint: 'lerna run lint',
        clean: 'lerna run clean && lerna clean',
        'deploy:web': 'node tools/deploy/deploy-web.js',
        'deploy:miniprogram': 'node tools/deploy/deploy-miniprogram.js'
      },
      devDependencies: {
        lerna: '^8.0.0',
        '@typescript-eslint/eslint-plugin': '^6.0.0',
        '@typescript-eslint/parser': '^6.0.0',
        eslint: '^8.0.0',
        prettier: '^3.0.0',
        typescript: '^5.0.0'
      }
    };
    
    fs.writeFileSync('package.json', JSON.stringify(rootPackageJson, null, 2));
    
    // Lerna configuration
    const lernaConfig = {
      version: '1.0.0',
      npmClient: 'npm',
      command: {
        publish: {
          conventionalCommits: true
        },
        bootstrap: {
          ignore: 'component-*',
          npmClientArgs: ['--no-package-lock']
        }
      }
    };
    
    fs.writeFileSync('lerna.json', JSON.stringify(lernaConfig, null, 2));
    
    // Create package-specific configurations
    this.createSharedPackageConfig();
    this.createWebPackageConfig();
    this.createMiniProgramPackageConfig();
    
    console.log('✅ Configuration files created');
  }

  createSharedPackageConfig() {
    const packageJson = {
      name: '@quick-transpose/shared',
      version: '1.0.0',
      main: 'dist/index.js',
      types: 'dist/index.d.ts',
      scripts: {
        build: 'tsc',
        dev: 'tsc --watch',
        clean: 'rimraf dist',
        test: 'jest'
      },
      dependencies: {},
      devDependencies: {
        typescript: '^5.0.0',
        rimraf: '^5.0.0',
        jest: '^29.0.0',
        '@types/jest': '^29.0.0'
      }
    };
    
    fs.writeFileSync('packages/shared/package.json', JSON.stringify(packageJson, null, 2));
    
    // TypeScript config
    const tsConfig = {
      compilerOptions: {
        target: 'ES2020',
        module: 'CommonJS',
        lib: ['ES2020'],
        outDir: './dist',
        rootDir: './src',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
        declaration: true,
        declarationMap: true,
        sourceMap: true
      },
      include: ['src/**/*'],
      exclude: ['node_modules', 'dist', 'tests']
    };
    
    fs.writeFileSync('packages/shared/tsconfig.json', JSON.stringify(tsConfig, null, 2));
  }

  createWebPackageConfig() {
    const packageJson = {
      name: '@quick-transpose/web',
      version: '1.0.0',
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'tsc && vite build',
        preview: 'vite preview',
        lint: 'eslint src --ext ts,tsx',
        test: 'vitest'
      },
      dependencies: {
        '@quick-transpose/shared': 'workspace:*',
        react: '^18.2.0',
        'react-dom': '^18.2.0'
      },
      devDependencies: {
        '@types/react': '^18.2.0',
        '@types/react-dom': '^18.2.0',
        '@vitejs/plugin-react': '^4.0.0',
        vite: '^5.0.0',
        vitest: '^1.0.0',
        typescript: '^5.0.0'
      }
    };
    
    fs.writeFileSync('packages/web/package.json', JSON.stringify(packageJson, null, 2));
    
    // Vite config
    const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared/src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})`;
    
    fs.writeFileSync('packages/web/vite.config.ts', viteConfig);
  }

  createMiniProgramPackageConfig() {
    const packageJson = {
      name: '@quick-transpose/miniprogram',
      version: '1.0.0',
      scripts: {
        build: 'node ../../tools/build/build-miniprogram.js',
        test: 'node tests/test-runner.js'
      },
      dependencies: {
        '@quick-transpose/shared': 'workspace:*'
      }
    };
    
    fs.writeFileSync('packages/miniprogram/package.json', JSON.stringify(packageJson, null, 2));
  }

  createSharedIndex() {
    const indexContent = `// Quick Transpose Shared Library
export * from './types';
export * from './constants';
export * from './utils';
export * from './storage';
export * from './state';
`;
    
    fs.writeFileSync('packages/shared/src/index.ts', indexContent);
  }

  async createBuildTools() {
    console.log('🔧 Creating build tools...');
    
    // Shared compiler
    const sharedCompilerContent = `const typescript = require('typescript');
const fs = require('fs');
const path = require('path');

class SharedCodeCompiler {
  constructor(options = {}) {
    this.sourceDir = options.sourceDir || 'packages/shared/src';
    this.outputDir = options.outputDir || 'packages/miniprogram/utils/shared';
    this.tsConfig = {
      target: typescript.ScriptTarget.ES5,
      module: typescript.ModuleKind.CommonJS,
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true
    };
  }

  compile() {
    console.log('🔧 Compiling shared TypeScript code for Mini Program...');
    
    const tsFiles = this.getTsFiles(this.sourceDir);
    tsFiles.forEach(file => this.compileFile(file));
    
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
    
    const relativePath = path.relative(this.sourceDir, filePath);
    const outputPath = path.join(this.outputDir, relativePath.replace('.ts', '.js'));
    
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, result);
  }
}

module.exports = SharedCodeCompiler;`;
    
    fs.writeFileSync('tools/build/shared-compiler.js', sharedCompilerContent);
    
    // Mini program build script
    const buildMiniProgramContent = `const SharedCodeCompiler = require('./shared-compiler');
const fs = require('fs');

async function buildMiniProgram() {
  console.log('🚀 Building WeChat Mini Program...');
  
  try {
    const compiler = new SharedCodeCompiler();
    compiler.compile();
    
    validateMiniProgramStructure();
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
    'packages/miniprogram/project.config.json'
  ];
  
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
  
  if (missingFiles.length > 0) {
    throw new Error(\`Missing required files: \${missingFiles.join(', ')}\`);
  }
}

if (require.main === module) {
  buildMiniProgram();
}

module.exports = buildMiniProgram;`;
    
    fs.writeFileSync('tools/build/build-miniprogram.js', buildMiniProgramContent);
    
    console.log('✅ Build tools created');
  }

  async consolidateDocumentation() {
    console.log('📚 Consolidating documentation...');
    
    // Create main README
    const mainReadme = `# Quick Transpose - Cross-Platform Chord Transposition Tool

A modern cross-platform application for chord transposition, supporting both web browsers and WeChat Mini Program.

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install
npm run bootstrap

# Build all platforms
npm run build

# Development
npm run dev:web          # Web development
# Use WeChat Developer Tools for mini program development
\`\`\`

## 📁 Project Structure

- \`packages/shared/\` - Shared business logic and utilities
- \`packages/web/\` - React web application
- \`packages/miniprogram/\` - WeChat Mini Program
- \`tools/\` - Build and development tools
- \`docs/\` - Documentation

## 📖 Documentation

- [Development Guide](docs/DEVELOPMENT.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [API Reference](docs/API.md)
- [Architecture](docs/ARCHITECTURE.md)

## 🤝 Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for contribution guidelines.

## 📄 License

MIT License - see LICENSE file for details.
`;
    
    fs.writeFileSync('README.md', mainReadme);
    
    // Move existing documentation
    const docMigrations = [
      { from: 'docs/DEVELOPMENT_DOCUMENTATION.md', to: 'docs/DEVELOPMENT.md' },
      { from: 'docs/DEPLOYMENT_GUIDE.md', to: 'docs/DEPLOYMENT.md' },
      { from: 'docs/API_REFERENCE.md', to: 'docs/API.md' }
    ];
    
    docMigrations.forEach(({ from, to }) => {
      if (fs.existsSync(from)) {
        execSync(`mv ${from} ${to}`, { stdio: 'inherit' });
      }
    });
    
    console.log('✅ Documentation consolidated');
  }

  async cleanupOldStructure() {
    console.log('🧹 Cleaning up old structure...');
    
    const itemsToRemove = [
      'platforms',
      'quick-transpose',
      'src',
      'scripts',
      'shared'
    ];
    
    itemsToRemove.forEach(item => {
      if (fs.existsSync(item)) {
        execSync(`rm -rf ${item}`, { stdio: 'inherit' });
      }
    });
    
    // Remove old config files
    const oldConfigs = [
      'vite.config.ts',
      'tsconfig.app.json',
      'tsconfig.node.json',
      'tailwind.config.ts',
      'postcss.config.js',
      'components.json'
    ];
    
    oldConfigs.forEach(config => {
      if (fs.existsSync(config)) {
        fs.unlinkSync(config);
      }
    });
    
    console.log('✅ Old structure cleaned up');
  }

  async validateNewStructure() {
    console.log('✅ Validating new structure...');
    
    const requiredDirs = [
      'packages/shared/src',
      'packages/web/src',
      'packages/miniprogram',
      'tools/build',
      'docs'
    ];
    
    const requiredFiles = [
      'package.json',
      'lerna.json',
      'packages/shared/package.json',
      'packages/web/package.json',
      'packages/miniprogram/package.json',
      'tools/build/build-miniprogram.js'
    ];
    
    const missingDirs = requiredDirs.filter(dir => !fs.existsSync(dir));
    const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
    
    if (missingDirs.length > 0) {
      throw new Error(`Missing directories: ${missingDirs.join(', ')}`);
    }
    
    if (missingFiles.length > 0) {
      throw new Error(`Missing files: ${missingFiles.join(', ')}`);
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

// Execute if run directly
if (require.main === module) {
  const restructure = new ProjectRestructure();
  restructure.execute().catch(console.error);
}

module.exports = ProjectRestructure;
