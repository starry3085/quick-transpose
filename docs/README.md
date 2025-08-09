# Quick Transpose Documentation

Welcome to the Quick Transpose project documentation. This guide will help you understand the project architecture, development workflow, and deployment processes.

## 📚 Documentation Structure

### Core Documentation
- **[Architecture Guide](ARCHITECTURE.md)** - Comprehensive project architecture overview
- **[Cross-Platform Development Guide](CROSS_PLATFORM_DEVELOPMENT_GUIDE.md)** - Complete setup and workflow for all platforms
- **[Development Guide](DEVELOPMENT_DOCUMENTATION.md)** - General development setup and workflow
- **[API Reference](API_REFERENCE.md)** - API documentation and usage
- **[Testing Guide](TESTING_GUIDE.md)** - Testing strategies and procedures
- **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - Deployment instructions for all platforms

### Analysis Archive
Historical AI analysis and insights are preserved in the [analysis-archive](analysis-archive/) directory for reference.

### Architecture Decision Records
Important architectural decisions and their rationale are documented in the [ADR directory](adr/) following industry best practices.

## 🚀 Quick Start

1. **New Developers**: Start with the [Development Guide](DEVELOPMENT_DOCUMENTATION.md)
2. **Architecture Overview**: Read the [Architecture Guide](ARCHITECTURE.md)
3. **API Integration**: Check the [API Reference](API_REFERENCE.md)
4. **Deployment**: Follow the [Deployment Guide](DEPLOYMENT_GUIDE.md)

## 📋 Project Overview

Quick Transpose is a cross-platform music chord transposition tool with implementations for:
- **Desktop Application** (`src/`) - Electron-based desktop app
- **Web Application** (`web/`) - Browser-based version
- **WeChat Mini Program** (`miniprogram/`) - Mobile-optimized version
- **Shared Core** (`shared/`) - Common business logic and utilities

## 🏗️ Architecture Highlights

- **Multi-platform Strategy**: Platform-specific implementations with shared core logic
- **Modular Design**: Clear separation between business logic and platform-specific code
- **Cross-platform Compatibility**: Unified API across all platforms
- **Performance Optimized**: Platform-specific optimizations while maintaining consistency

## 📖 Documentation Maintenance

This documentation is actively maintained and updated. For the most current information, always refer to the main documentation files rather than archived analysis.

---

*Last Updated: January 2025*