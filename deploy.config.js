/**
 * Deployment Configuration
 * Defines deployment settings for different platforms and environments
 */

module.exports = {
  // Web platform deployment configurations
  web: {
    development: {
      name: 'Development Environment',
      buildCommand: 'npm run build:web',
      outputDir: 'platforms/web/dist',
      deployCommand: 'echo "Deploy to development server"',
      env: {
        NODE_ENV: 'development',
        API_BASE_URL: 'http://localhost:3001'
      }
    },
    
    staging: {
      name: 'Staging Environment',
      buildCommand: 'npm run build:web',
      outputDir: 'platforms/web/dist',
      deployCommand: 'echo "Deploy to staging server"',
      env: {
        NODE_ENV: 'staging',
        API_BASE_URL: 'https://staging-api.quick-transpose.com'
      }
    },
    
    production: {
      name: 'Production Environment',
      buildCommand: 'npm run build:web',
      outputDir: 'platforms/web/dist',
      deployCommand: 'echo "Deploy to production server"',
      env: {
        NODE_ENV: 'production',
        API_BASE_URL: 'https://api.quick-transpose.com'
      }
    },
    
    cloudstudio: {
      name: 'CloudStudio Deployment',
      buildCommand: 'npm run build:web',
      outputDir: 'platforms/web/dist',
      deployCommand: 'echo "Already deployed to CloudStudio"',
      env: {
        NODE_ENV: 'production',
        API_BASE_URL: 'https://api.quick-transpose.com'
      }
    }
  },
  
  // Miniprogram deployment configurations
  miniprogram: {
    development: {
      name: 'Miniprogram Development',
      appId: 'touristappid',
      version: '1.0.0',
      description: 'Development version for testing',
      uploadCommand: 'echo "Use WeChat Developer Tools to upload"',
      env: {
        NODE_ENV: 'development'
      }
    },
    
    production: {
      name: 'Miniprogram Production',
      appId: 'your-production-appid',
      version: '1.0.0',
      description: 'Production version for release',
      uploadCommand: 'echo "Use WeChat Developer Tools to upload to production"',
      env: {
        NODE_ENV: 'production'
      }
    }
  },
  
  // Shared deployment settings
  shared: {
    buildTimeout: 300000, // 5 minutes
    retryAttempts: 3,
    cleanBeforeBuild: true,
    generateSourceMaps: true,
    
    // Pre-deployment checks
    preDeployChecks: [
      'lint',
      'test',
      'build-validation'
    ],
    
    // Post-deployment actions
    postDeployActions: [
      'generate-report',
      'notify-team',
      'update-documentation'
    ]
  },
  
  // CI/CD pipeline configurations
  cicd: {
    github: {
      name: 'GitHub Actions',
      configFile: '.github/workflows/deploy.yml',
      triggers: ['push', 'pull_request'],
      environments: ['development', 'staging', 'production']
    },
    
    gitee: {
      name: 'Gitee Go',
      configFile: '.gitee/workflows/deploy.yml',
      triggers: ['push', 'merge_request'],
      environments: ['development', 'production']
    }
  }
};