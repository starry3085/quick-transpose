# ADR-0002: Shared Core Module Design

## Status

Accepted

## Context

With the multi-platform architecture decision (ADR-0001), we need to design the shared core module that will contain business logic used across all platforms. The key challenges are:

1. **Platform Abstraction**: How to write platform-agnostic code while allowing platform-specific implementations
2. **Interface Design**: How to define clean interfaces between shared code and platform code
3. **Dependency Management**: How to handle dependencies that may not be available on all platforms
4. **Testing Strategy**: How to test shared code independently of platform implementations

We considered several patterns:
- Direct platform detection and conditional code
- Dependency injection with platform-specific implementations
- Adapter pattern with well-defined interfaces
- Plugin architecture with dynamic loading

## Decision

We will implement the **Adapter Pattern** for the shared core module design:

```typescript
// Core business logic remains platform-agnostic
class TransposeEngine {
  private adapter: PlatformAdapter;
  
  constructor(adapter: PlatformAdapter) {
    this.adapter = adapter;
  }
  
  // Platform-agnostic business logic
  transpose(chord: Chord, steps: number): Chord {
    // Implementation uses only shared types and utilities
  }
}

// Platform-specific implementations
interface PlatformAdapter {
  storage: StorageInterface;
  ui: UIInterface;
  audio?: AudioInterface;
}
```

Each platform provides its own adapter implementation:
- **Desktop**: ElectronAdapter with file system storage and native UI
- **Web**: WebAdapter with localStorage and DOM manipulation
- **Mini Program**: WechatAdapter with WeChat APIs and custom components

## Consequences

### Positive
- **Clean Separation**: Clear boundary between platform-agnostic and platform-specific code
- **Testability**: Core logic can be tested with mock adapters
- **Flexibility**: Easy to add new platforms by implementing the adapter interface
- **Maintainability**: Business logic changes only affect the shared module
- **Type Safety**: TypeScript interfaces ensure consistent platform implementations

### Negative
- **Abstraction Overhead**: Additional layer of abstraction may impact performance slightly
- **Interface Maintenance**: Changes to adapter interfaces require updates across all platforms
- **Learning Curve**: Developers need to understand the adapter pattern

### Neutral
- **Code Organization**: Requires disciplined separation of concerns
- **Documentation**: Adapter interfaces need comprehensive documentation

## Implementation Notes

1. **Interface Definition**: All adapter interfaces defined in `shared/types/`
2. **Core Logic**: Business logic in `shared/core/` uses only adapter interfaces
3. **Platform Implementation**: Each platform implements adapters in their respective directories
4. **Dependency Injection**: Adapters injected at application startup
5. **Error Handling**: Consistent error handling across all adapter implementations

## Related Decisions

- [ADR-0001: Multi-Platform Architecture Strategy](0001-multi-platform-architecture.md)
- [ADR-0003: Platform-Specific Implementation Strategy](0003-platform-specific-implementations.md)

---

**Date**: 2025-01-08  
**Author(s)**: Architecture Team  
**Reviewers**: Development Team