# Quick Transpose Architecture Guide

## Overview

Quick Transpose is a cross-platform music chord transposition tool designed with a **multi-platform strategy** that balances code reuse with platform-specific optimization. The architecture follows the "**Adaptive Architecture**" philosophy, prioritizing business value and user experience over theoretical code purity.

## Architecture Principles

### 1. Platform-Specific + Shared Core Pattern
- **Shared Business Logic**: Common chord transposition algorithms and core utilities
- **Platform Adaptation**: Each platform implements its own UI and system integration
- **Independent Deployment**: Platforms can be deployed and versioned independently

### 2. Separation of Concerns
- **Business Logic** (`shared/`): Platform-agnostic core functionality
- **Platform Implementation**: Platform-specific UI, storage, and system integration
- **Build Systems**: Independent build configurations for each platform

## Project Structure

```
quick-transpose/
├── src/                 # Desktop Application (Electron-based)
│   ├── main/           # Main process code
│   ├── renderer/       # Renderer process code
│   └── shared/         # Desktop-specific utilities
├── web/                # Web Application (Browser-based)
│   ├── src/           # React application source
│   ├── public/        # Static assets
│   └── dist/          # Build output
├── miniprogram/        # WeChat Mini Program
│   ├── pages/         # Mini program pages
│   ├── components/    # Custom components
│   └── utils/         # Mini program utilities
├── shared/             # Cross-Platform Core Logic
│   ├── core/          # Business logic
│   ├── types/         # TypeScript definitions
│   └── utils/         # Common utilities
└── docs/              # Documentation
```

## Platform Implementations

### Desktop Application (`src/`)
**Target**: Professional users requiring offline functionality and system integration

**Key Features**:
- File system access for chord sheet management
- System tray integration
- Offline-first operation
- Native OS integration

**Technology Stack**:
- Electron for cross-platform desktop deployment
- React for UI components
- Node.js for system integration

### Web Application (`web/`)
**Target**: General users needing convenient online access

**Key Features**:
- Browser-based accessibility
- Cloud synchronization
- Cross-device compatibility
- Social sharing capabilities

**Technology Stack**:
- React with TypeScript
- Modern web APIs
- Progressive Web App (PWA) capabilities

### WeChat Mini Program (`miniprogram/`)
**Target**: Mobile users in the WeChat ecosystem

**Key Features**:
- Lightweight and fast startup
- WeChat social integration
- Mobile-optimized interface
- Offline capability within WeChat

**Technology Stack**:
- WeChat Mini Program framework
- Custom component system
- WeChat APIs for social features

## Shared Core Architecture

### Design Pattern: Adapter Pattern

```typescript
// Platform Adapter Interface
interface PlatformAdapter {
  storage: StorageInterface;
  ui: UIInterface;
  audio?: AudioInterface;
}

// Core Engine
class TransposeEngine {
  private adapter: PlatformAdapter;
  
  constructor(adapter: PlatformAdapter) {
    this.adapter = adapter;
  }
  
  // Platform-agnostic business logic
  transpose(chord: Chord, steps: number): Chord {
    // Chord transposition algorithm
  }
  
  // Platform-specific persistence
  async saveState(): Promise<void> {
    await this.adapter.storage.save(this.state);
  }
}
```

### Core Modules

#### 1. Chord Processing (`shared/core/`)
- Chord parsing and validation
- Transposition algorithms
- Music theory utilities
- Scale and key management

#### 2. State Management (`shared/state/`)
- Application state definitions
- State persistence interfaces
- Cross-platform state synchronization

#### 3. Utilities (`shared/utils/`)
- Common helper functions
- Data validation
- Error handling
- Logging utilities

## Build and Deployment Strategy

### Independent Build Systems
Each platform maintains its own build configuration:

```json
{
  "desktop": "Electron Builder → Native installers",
  "web": "Vite → Static files → CDN deployment",
  "miniprogram": "WeChat DevTools → Mini Program package"
}
```

### Dependency Management
- **Shared Dependencies**: Managed in root `package.json`
- **Platform Dependencies**: Managed in platform-specific `package.json`
- **Version Synchronization**: Automated dependency updates across platforms

## Data Flow Architecture

### 1. User Input Processing
```
User Input → Platform UI → Shared Core → Business Logic → State Update
```

### 2. State Persistence
```
State Change → Platform Adapter → Storage Interface → Platform-Specific Storage
```

### 3. Cross-Platform Synchronization
```
Local State → Sync Service → Cloud Storage → Other Platform Instances
```

## Performance Considerations

### Desktop Application
- **Memory Management**: Efficient Electron process management
- **File I/O**: Optimized file system operations
- **Startup Time**: Lazy loading of non-critical components

### Web Application
- **Bundle Size**: Code splitting and lazy loading
- **Caching**: Service worker for offline functionality
- **Rendering**: Virtual DOM optimization

### Mini Program
- **Package Size**: 2MB main package limit optimization
- **Startup Performance**: Minimal initial load
- **Memory Usage**: Efficient component lifecycle management

## Security Architecture

### Data Protection
- **Local Storage**: Encrypted sensitive data storage
- **Network Communication**: HTTPS/WSS for all external communication
- **User Privacy**: Minimal data collection, user consent management

### Platform-Specific Security
- **Desktop**: Code signing and secure auto-updates
- **Web**: Content Security Policy (CSP) and HTTPS enforcement
- **Mini Program**: WeChat security sandbox compliance

## Testing Strategy

### Unit Testing
- **Shared Core**: Comprehensive test coverage for business logic
- **Platform Adapters**: Mock-based testing for platform interfaces
- **Integration**: Cross-platform integration test suite

### End-to-End Testing
- **Desktop**: Electron testing with Spectron
- **Web**: Browser automation with Playwright
- **Mini Program**: WeChat DevTools testing framework

## Monitoring and Analytics

### Error Tracking
- **Centralized Logging**: Unified error reporting across platforms
- **Performance Monitoring**: Real-time performance metrics
- **User Analytics**: Privacy-compliant usage analytics

### Platform-Specific Monitoring
- **Desktop**: Crash reporting and performance profiling
- **Web**: Browser compatibility and performance tracking
- **Mini Program**: WeChat-specific analytics and performance metrics

## Future Architecture Considerations

### Scalability
- **Micro-frontend Architecture**: Further platform decoupling
- **Serverless Backend**: Cloud functions for shared services
- **Real-time Collaboration**: WebSocket-based collaborative features

### Platform Expansion
- **Mobile Apps**: Native iOS and Android applications
- **Browser Extensions**: Chrome/Firefox extension versions
- **Voice Assistants**: Alexa/Google Assistant integration

---

*Architecture Guide - Last Updated: January 2025*