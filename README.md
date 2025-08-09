# Chord Transposition Tool

Cross-platform chord transposition application for web and WeChat Mini Program.

## 🚀 Quick Start

```bash
# Install dependencies
npm run install:all

# Development
npm run dev:web          # Web development server
npm run dev:shared       # Watch shared code changes

# Build
npm run build:web        # Build web version
npm run build:miniprogram # Build mini program version
```

## 📁 Project Structure

```
chord-transpose-tool/
├── shared/              # Shared utilities (TypeScript)
│   ├── types/           # Type definitions
│   ├── utils/           # Core utilities
│   ├── constants/       # Application constants
│   └── storage/         # Cross-platform storage
├── web/                 # React web application
│   ├── src/             # Web source code
│   ├── public/          # Static assets
│   └── dist/            # Build output
├── miniprogram/         # WeChat Mini Program
│   ├── pages/           # Mini program pages
│   ├── utils/           # Platform utilities
│   └── images/          # Image assets
├── build-tools/         # Build scripts
└── docs/               # Documentation
```

## 🛠️ Development

### Web Platform
- React + TypeScript + Vite
- Development server: `npm run dev:web`
- Build: `npm run build:web`

### WeChat Mini Program
- Native WeChat Mini Program framework
- Uses compiled shared utilities
- Build: `npm run build:miniprogram`
- Open in WeChat Developer Tools

### Shared Utilities
- TypeScript-based shared code
- Compiled for both platforms
- Watch mode: `npm run dev:shared`

## 🔧 Build System

The build system compiles shared TypeScript utilities for both platforms:

1. **Shared Code**: TypeScript utilities compiled to CommonJS for mini program
2. **Web Build**: Vite builds React app with shared utilities
3. **Mini Program Build**: Custom build script compiles shared code and validates structure

## 📖 Documentation

- [Development Guide](docs/DEVELOPMENT.md)
- [API Reference](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 🎯 Features

- **Cross-Platform**: Single codebase for web and WeChat Mini Program
- **Shared Utilities**: Common chord transposition logic
- **TypeScript**: Type-safe development
- **Modern Build System**: Vite for web, custom build for mini program
- **WeChat Compliant**: Follows WeChat Mini Program standards

## 🚀 Deployment

### Web Deployment
```bash
npm run build:web
# Deploy web/dist/ to your web server
```

### Mini Program Deployment
```bash
npm run build:miniprogram
# Open miniprogram/ in WeChat Developer Tools
# Upload to WeChat Mini Program platform