'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

process.on('uncaughtException', (err) => {
  console.error('❌ Build failed:', err && err.message ? err.message : err);
  process.exit(1);
});

function buildMiniProgram() {
  console.log('🚀 Building WeChat Mini Program...');

  const sharedOutputDir = path.join('miniprogram', 'utils', 'shared');

  // Clean output to avoid stale files
  if (fs.existsSync(sharedOutputDir)) {
    fs.rmSync(sharedOutputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(sharedOutputDir, { recursive: true });

  console.log('📦 Compiling shared TypeScript code...');
  // Compile shared using tsconfig, override for Mini Program runtime
  execSync(
    'npx tsc -p shared/tsconfig.json --target ES5 --module CommonJS --outDir miniprogram/utils/shared --declaration false',
    { stdio: 'inherit' }
  );

  validateStructure();
  validateOutput(sharedOutputDir);

  console.log('✅ Mini Program build completed successfully');
}

function validateStructure() {
  const required = [
    path.join('miniprogram', 'app.js'),
    path.join('miniprogram', 'app.json'),
    path.join('miniprogram', 'project.config.json'),
  ];

  const missing = required.filter((file) => !fs.existsSync(file));
  if (missing.length > 0) {
    throw new Error(`Missing required files: ${missing.join(', ')}`);
  }

  console.log('✅ Mini Program structure validation passed');
}

function validateOutput(sharedOutputDir) {
  const expected = path.join(sharedOutputDir, 'index.js');
  if (!fs.existsSync(expected)) {
    console.error(`❌ Expected compiled file not found: ${expected}`);
    process.exit(1);
  }
  console.log('✅ Compiled shared output validation passed');
}

if (require.main === module) {
  buildMiniProgram();
}

module.exports = buildMiniProgram;