#!/usr/bin/env node

/**
 * Documentation Watcher
 * Watches for changes in source files and automatically regenerates documentation
 */

const chokidar = require('chokidar');
const { execSync } = require('child_process');
const path = require('path');

class DocumentationWatcher {
  constructor() {
    this.isGenerating = false;
    this.debounceTimeout = null;
    this.watchPaths = [
      'src/**/*.{ts,tsx,js,jsx}',
      'web/src/**/*.{ts,tsx,js,jsx}',
      'shared/**/*.{ts,js}',
      'miniprogram/**/*.{js,json}',
      'package.json',
      'README.md'
    ];
  }

  start() {
    console.log('👀 Starting documentation watcher...');
    console.log('Watching paths:', this.watchPaths);

    const watcher = chokidar.watch(this.watchPaths, {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.git/**',
        '**/docs/generated/**'
      ],
      persistent: true,
      ignoreInitial: true
    });

    watcher
      .on('change', (filePath) => this.handleChange('changed', filePath))
      .on('add', (filePath) => this.handleChange('added', filePath))
      .on('unlink', (filePath) => this.handleChange('removed', filePath))
      .on('ready', () => {
        console.log('✅ Documentation watcher is ready');
        console.log('📝 Documentation will be regenerated when source files change');
      })
      .on('error', (error) => {
        console.error('❌ Watcher error:', error);
      });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Stopping documentation watcher...');
      watcher.close();
      process.exit(0);
    });
  }

  handleChange(event, filePath) {
    console.log(`📄 File ${event}: ${filePath}`);
    
    // Debounce rapid changes
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      this.regenerateDocumentation();
    }, 1000); // Wait 1 second after last change
  }

  async regenerateDocumentation() {
    if (this.isGenerating) {
      console.log('⏳ Documentation generation already in progress, skipping...');
      return;
    }

    this.isGenerating = true;
    console.log('🔄 Regenerating documentation...');

    try {
      execSync('node scripts/generate-docs.js', { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      console.log('✅ Documentation regenerated successfully');
    } catch (error) {
      console.error('❌ Failed to regenerate documentation:', error.message);
    } finally {
      this.isGenerating = false;
    }
  }
}

// Start the watcher if this script is run directly
if (require.main === module) {
  const watcher = new DocumentationWatcher();
  watcher.start();
}

module.exports = DocumentationWatcher;