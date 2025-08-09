#!/usr/bin/env node

/**
 * Automated Documentation Generation Script
 * Generates documentation from code comments, API definitions, and project structure
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DocumentationGenerator {
  constructor() {
    this.rootDir = process.cwd();
    this.docsDir = path.join(this.rootDir, 'docs');
    this.outputDir = path.join(this.docsDir, 'generated');
    
    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  /**
   * Main generation process
   */
  async generate() {
    console.log('🚀 Starting automated documentation generation...');
    
    try {
      await this.generateAPIDocumentation();
      await this.generateComponentDocumentation();
      await this.generateProjectStructure();
      await this.generateChangeLog();
      await this.updateMainDocumentation();
      
      console.log('✅ Documentation generation completed successfully!');
    } catch (error) {
      console.error('❌ Documentation generation failed:', error.message);
      process.exit(1);
    }
  }

  /**
   * Generate API documentation from TypeScript interfaces and JSDoc comments
   */
  async generateAPIDocumentation() {
    console.log('📝 Generating API documentation...');
    
    const apiFiles = this.findFiles(['shared/types', 'shared/core'], /\.(ts|js)$/);
    const apiDocs = [];

    for (const file of apiFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const interfaces = this.extractInterfaces(content);
      const functions = this.extractFunctions(content);
      
      if (interfaces.length > 0 || functions.length > 0) {
        apiDocs.push({
          file: path.relative(this.rootDir, file),
          interfaces,
          functions
        });
      }
    }

    const apiDocContent = this.generateAPIMarkdown(apiDocs);
    fs.writeFileSync(path.join(this.outputDir, 'API_AUTO_GENERATED.md'), apiDocContent);
    
    console.log(`   Generated API documentation for ${apiFiles.length} files`);
  }

  /**
   * Generate component documentation from React components
   */
  async generateComponentDocumentation() {
    console.log('🧩 Generating component documentation...');
    
    const componentFiles = this.findFiles(['src', 'web/src'], /\.(tsx|jsx)$/);
    const components = [];

    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const componentInfo = this.extractComponentInfo(content);
      
      if (componentInfo) {
        components.push({
          file: path.relative(this.rootDir, file),
          ...componentInfo
        });
      }
    }

    const componentDocContent = this.generateComponentMarkdown(components);
    fs.writeFileSync(path.join(this.outputDir, 'COMPONENTS_AUTO_GENERATED.md'), componentDocContent);
    
    console.log(`   Generated component documentation for ${components.length} components`);
  }

  /**
   * Generate project structure documentation
   */
  async generateProjectStructure() {
    console.log('📁 Generating project structure documentation...');
    
    const structure = this.generateDirectoryTree(this.rootDir, {
      ignore: ['node_modules', '.git', 'dist', 'build', '.next'],
      maxDepth: 4
    });

    const structureContent = `# Project Structure (Auto-Generated)

\`\`\`
${structure}
\`\`\`

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

*Last Updated: ${new Date().toISOString().split('T')[0]}*
`;

    fs.writeFileSync(path.join(this.outputDir, 'PROJECT_STRUCTURE_AUTO_GENERATED.md'), structureContent);
    console.log('   Generated project structure documentation');
  }

  /**
   * Generate changelog from git commits
   */
  async generateChangeLog() {
    console.log('📋 Generating changelog...');
    
    try {
      const gitLog = execSync('git log --oneline --decorate --graph -20', { encoding: 'utf8' });
      const changelogContent = `# Recent Changes (Auto-Generated)

## Git History (Last 20 commits)

\`\`\`
${gitLog}
\`\`\`

*Generated on: ${new Date().toISOString()}*
`;

      fs.writeFileSync(path.join(this.outputDir, 'CHANGELOG_AUTO_GENERATED.md'), changelogContent);
      console.log('   Generated changelog from git history');
    } catch (error) {
      console.log('   Skipped changelog generation (git not available)');
    }
  }

  /**
   * Update main documentation with generated content references
   */
  async updateMainDocumentation() {
    console.log('🔄 Updating main documentation references...');
    
    const generatedDocsIndex = `# Auto-Generated Documentation

This directory contains automatically generated documentation that is updated during the build process.

## Generated Files

- **[API Documentation](API_AUTO_GENERATED.md)** - Auto-generated from TypeScript interfaces and JSDoc comments
- **[Component Documentation](COMPONENTS_AUTO_GENERATED.md)** - Auto-generated from React component definitions
- **[Project Structure](PROJECT_STRUCTURE_AUTO_GENERATED.md)** - Auto-generated directory tree and descriptions
- **[Recent Changes](CHANGELOG_AUTO_GENERATED.md)** - Auto-generated from git commit history

## Generation Process

These files are automatically generated by the \`scripts/generate-docs.js\` script and should not be manually edited.

To regenerate documentation:
\`\`\`bash
npm run docs:generate
\`\`\`

*Last Generated: ${new Date().toISOString()}*
`;

    fs.writeFileSync(path.join(this.outputDir, 'README.md'), generatedDocsIndex);
    console.log('   Updated generated documentation index');
  }

  /**
   * Find files matching pattern in directories
   */
  findFiles(directories, pattern) {
    const files = [];
    
    for (const dir of directories) {
      const fullPath = path.join(this.rootDir, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, (file) => {
          if (pattern.test(file)) {
            files.push(file);
          }
        });
      }
    }
    
    return files;
  }

  /**
   * Walk directory recursively
   */
  walkDirectory(dir, callback) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        this.walkDirectory(fullPath, callback);
      } else if (stat.isFile()) {
        callback(fullPath);
      }
    }
  }

  /**
   * Extract TypeScript interfaces from file content
   */
  extractInterfaces(content) {
    const interfaces = [];
    const interfaceRegex = /export\s+interface\s+(\w+)\s*{([^}]*)}/g;
    let match;
    
    while ((match = interfaceRegex.exec(content)) !== null) {
      interfaces.push({
        name: match[1],
        definition: match[2].trim()
      });
    }
    
    return interfaces;
  }

  /**
   * Extract functions with JSDoc comments
   */
  extractFunctions(content) {
    const functions = [];
    const functionRegex = /\/\*\*([\s\S]*?)\*\/\s*export\s+(?:async\s+)?function\s+(\w+)/g;
    let match;
    
    while ((match = functionRegex.exec(content)) !== null) {
      functions.push({
        name: match[2],
        documentation: match[1].trim()
      });
    }
    
    return functions;
  }

  /**
   * Extract React component information
   */
  extractComponentInfo(content) {
    const componentMatch = content.match(/(?:export\s+(?:default\s+)?(?:const|function)\s+(\w+)|const\s+(\w+):\s*React\.FC)/);
    if (!componentMatch) return null;
    
    const componentName = componentMatch[1] || componentMatch[2];
    const propsMatch = content.match(/interface\s+(\w+Props)\s*{([^}]*)}/);
    
    return {
      name: componentName,
      props: propsMatch ? {
        interface: propsMatch[1],
        definition: propsMatch[2].trim()
      } : null
    };
  }

  /**
   * Generate API documentation markdown
   */
  generateAPIMarkdown(apiDocs) {
    let markdown = `# API Documentation (Auto-Generated)

*This documentation is automatically generated from TypeScript interfaces and JSDoc comments.*

`;

    for (const doc of apiDocs) {
      markdown += `## ${doc.file}\n\n`;
      
      if (doc.interfaces.length > 0) {
        markdown += `### Interfaces\n\n`;
        for (const iface of doc.interfaces) {
          markdown += `#### ${iface.name}\n\n\`\`\`typescript\n${iface.definition}\n\`\`\`\n\n`;
        }
      }
      
      if (doc.functions.length > 0) {
        markdown += `### Functions\n\n`;
        for (const func of doc.functions) {
          markdown += `#### ${func.name}\n\n${func.documentation}\n\n`;
        }
      }
    }

    markdown += `\n*Generated on: ${new Date().toISOString()}*\n`;
    return markdown;
  }

  /**
   * Generate component documentation markdown
   */
  generateComponentMarkdown(components) {
    let markdown = `# Component Documentation (Auto-Generated)

*This documentation is automatically generated from React component definitions.*

`;

    for (const component of components) {
      markdown += `## ${component.name}\n\n`;
      markdown += `**File**: \`${component.file}\`\n\n`;
      
      if (component.props) {
        markdown += `### Props\n\n\`\`\`typescript\n${component.props.definition}\n\`\`\`\n\n`;
      }
    }

    markdown += `\n*Generated on: ${new Date().toISOString()}*\n`;
    return markdown;
  }

  /**
   * Generate directory tree structure
   */
  generateDirectoryTree(dir, options = {}) {
    const { ignore = [], maxDepth = 3 } = options;
    
    const generateTree = (currentDir, depth = 0, prefix = '') => {
      if (depth > maxDepth) return '';
      
      const items = fs.readdirSync(currentDir).filter(item => 
        !ignore.includes(item) && !item.startsWith('.')
      );
      
      let tree = '';
      
      items.forEach((item, index) => {
        const isLast = index === items.length - 1;
        const itemPath = path.join(currentDir, item);
        const stat = fs.statSync(itemPath);
        
        tree += `${prefix}${isLast ? '└── ' : '├── '}${item}\n`;
        
        if (stat.isDirectory() && depth < maxDepth) {
          const newPrefix = prefix + (isLast ? '    ' : '│   ');
          tree += generateTree(itemPath, depth + 1, newPrefix);
        }
      });
      
      return tree;
    };
    
    return generateTree(dir);
  }
}

// Run the documentation generator
if (require.main === module) {
  const generator = new DocumentationGenerator();
  generator.generate();
}

module.exports = DocumentationGenerator;