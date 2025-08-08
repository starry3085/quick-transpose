#!/usr/bin/env node

/**
 * Cross-Platform Build Script
 * Builds both web and miniprogram versions simultaneously
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build configuration
const BUILD_CONFIG = {
  web: {
    name: 'Web Platform',
    buildCommand: 'npm run build:web',
    outputDir: 'platforms/web/dist',
    requiredFiles: ['index.html', 'assets']
  },
  miniprogram: {
    name: 'WeChat Miniprogram',
    buildCommand: 'npm run build:miniprogram',
    outputDir: 'platforms/miniprogram',
    requiredFiles: ['app.json', 'app.js', 'pages']
  },
  shared: {
    name: 'Shared Modules',
    buildCommand: 'npm run build:shared',
    outputDir: 'shared/dist',
    requiredFiles: ['index.js', 'types']
  }
};

// Utility functions
const log = (message, type = 'info') => {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : type === 'warn' ? '⚠️' : 'ℹ️';
  console.log(`[${timestamp}] ${prefix} ${message}`);
};

const executeCommand = (command, cwd = process.cwd()) => {
  return new Promise((resolve, reject) => {
    log(`Executing: ${command}`);
    
    const child = spawn(command, [], {
      shell: true,
      cwd,
      stdio: 'pipe'
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
      process.stdout.write(data);
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
      process.stderr.write(data);
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`Command failed with code ${code}: ${stderr}`));
      }
    });
  });
};

const checkFileExists = (filePath) => {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
};

const validateBuildOutput = (platform) => {
  const config = BUILD_CONFIG[platform];
  const outputDir = path.resolve(config.outputDir);
  
  log(`Validating ${config.name} build output...`);
  
  if (!checkFileExists(outputDir)) {
    throw new Error(`Output directory not found: ${outputDir}`);
  }

  const missingFiles = config.requiredFiles.filter(file => {
    const filePath = path.join(outputDir, file);
    return !checkFileExists(filePath);
  });

  if (missingFiles.length > 0) {
    throw new Error(`Missing required files in ${config.name}: ${missingFiles.join(', ')}`);
  }

  log(`${config.name} build validation passed`, 'success');
};

const getBuildStats = (platform) => {
  const config = BUILD_CONFIG[platform];
  const outputDir = path.resolve(config.outputDir);
  
  try {
    const stats = fs.statSync(outputDir);
    const files = fs.readdirSync(outputDir, { recursive: true });
    
    return {
      platform: config.name,
      outputDir,
      fileCount: files.length,
      lastModified: stats.mtime,
      size: getDirectorySize(outputDir)
    };
  } catch (error) {
    return {
      platform: config.name,
      error: error.message
    };
  }
};

const getDirectorySize = (dirPath) => {
  let totalSize = 0;
  
  try {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(dirPath, file.name);
      
      if (file.isDirectory()) {
        totalSize += getDirectorySize(filePath);
      } else {
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
      }
    }
  } catch (error) {
    // Ignore errors for inaccessible files
  }
  
  return totalSize;
};

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Main build function
const buildAll = async () => {
  const startTime = Date.now();
  log('🚀 Starting cross-platform build process...');
  
  try {
    // Step 1: Clean previous builds
    log('🧹 Cleaning previous builds...');
    try {
      if (checkFileExists('platforms/web/dist')) {
        execSync('rm -rf platforms/web/dist', { stdio: 'inherit' });
      }
      if (checkFileExists('shared/dist')) {
        execSync('rm -rf shared/dist', { stdio: 'inherit' });
      }
    } catch (error) {
      log('Clean step failed, continuing...', 'warn');
    }

    // Step 2: Install dependencies
    log('📦 Installing dependencies...');
    await executeCommand('npm install');

    // Step 3: Build shared modules first
    log('🔧 Building shared modules...');
    try {
      await executeCommand('npm run build:shared');
      validateBuildOutput('shared');
    } catch (error) {
      log('Shared modules build failed, but continuing...', 'warn');
    }

    // Step 4: Build web platform
    log('🌐 Building web platform...');
    await executeCommand('npm run build:web');
    validateBuildOutput('web');

    // Step 5: Prepare miniprogram (no build needed, just validation)
    log('📱 Validating miniprogram platform...');
    validateBuildOutput('miniprogram');

    // Step 6: Generate build report
    log('📊 Generating build report...');
    const buildStats = [
      getBuildStats('shared'),
      getBuildStats('web'),
      getBuildStats('miniprogram')
    ];

    const buildTime = Date.now() - startTime;
    
    // Create build report
    const report = {
      timestamp: new Date().toISOString(),
      buildTime: `${(buildTime / 1000).toFixed(2)}s`,
      platforms: buildStats,
      success: true
    };

    fs.writeFileSync('build-report.json', JSON.stringify(report, null, 2));

    // Display summary
    log('📋 Build Summary:', 'success');
    buildStats.forEach(stat => {
      if (stat.error) {
        log(`  ${stat.platform}: ❌ ${stat.error}`, 'error');
      } else {
        log(`  ${stat.platform}: ✅ ${stat.fileCount} files, ${formatBytes(stat.size)}`, 'success');
      }
    });

    log(`🎉 Cross-platform build completed successfully in ${(buildTime / 1000).toFixed(2)}s`, 'success');
    
  } catch (error) {
    log(`❌ Build failed: ${error.message}`, 'error');
    process.exit(1);
  }
};

// CLI interface
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'web':
    log('Building web platform only...');
    executeCommand('npm run build:web').then(() => {
      validateBuildOutput('web');
      log('Web build completed', 'success');
    }).catch(error => {
      log(`Web build failed: ${error.message}`, 'error');
      process.exit(1);
    });
    break;
    
  case 'miniprogram':
    log('Validating miniprogram platform...');
    try {
      validateBuildOutput('miniprogram');
      log('Miniprogram validation completed', 'success');
    } catch (error) {
      log(`Miniprogram validation failed: ${error.message}`, 'error');
      process.exit(1);
    }
    break;
    
  case 'shared':
    log('Building shared modules only...');
    executeCommand('npm run build:shared').then(() => {
      validateBuildOutput('shared');
      log('Shared modules build completed', 'success');
    }).catch(error => {
      log(`Shared modules build failed: ${error.message}`, 'error');
      process.exit(1);
    });
    break;
    
  default:
    buildAll();
}