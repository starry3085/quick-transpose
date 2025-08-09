# API Documentation (Auto-Generated)

*This documentation is automatically generated from TypeScript interfaces and JSDoc comments.*

## shared\types\chord.ts

### Interfaces

#### ChordData

```typescript
chord: string;
  roman: string;
  original: string;
  degree?: number;
```

#### ChordMaps

```typescript
major: Record<KeyType, string[]>;
  minor: Record<KeyType, string[]>;
```

#### RomanNumerals

```typescript
major: string[];
  minor: string[];
```

#### CommonProgression

```typescript
label: string;
  value: string;
```

#### TransposeParams

```typescript
progression: string;
  sourceKey: KeyType;
  targetKey: KeyType;
  isMinor: boolean;
  useSeventhChords?: boolean;
```

#### TransposeResult

```typescript
success: boolean;
  data: ChordData[];
  error?: string;
```

#### ValidationResult

```typescript
isValid: boolean;
  error?: string;
```

#### StorageAdapter

```typescript
get<T>(key: string, defaultValue?: T): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
```

#### TransposeSettings

```typescript
sourceKey: KeyType;
  targetKey: KeyType;
  isMinor: boolean;
  useSeventhChords?: boolean;
```


*Generated on: 2025-08-09T17:47:59.366Z*
