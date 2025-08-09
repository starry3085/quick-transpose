const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function buildMiniProgram() {
  console.log('🚀 Building WeChat Mini Program...');
  
  try {
    // Ensure output directory exists
    const sharedOutputDir = 'miniprogram/utils/shared';
    if (!fs.existsSync(sharedOutputDir)) {
      fs.mkdirSync(sharedOutputDir, { recursive: true });
    }
    
    // Compile shared code for miniprogram
    console.log('📦 Compiling shared TypeScript code...');
    execSync('cd shared && npx tsc --target ES5 --module CommonJS --outDir ../miniprogram/utils/shared --declaration false', { stdio: 'inherit' });
    
    // Validate miniprogram structure
    validateStructure();
    
    console.log('✅ Mini Program build completed successfully');
    
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
    throw new Error(`Missing required files: ${missing.join(', ')}`);
  }
  
  console.log('✅ Mini Program structure validation passed');
}

if (require.main === module) {
  buildMiniProgram();
}

module.exports = buildMiniProgram;