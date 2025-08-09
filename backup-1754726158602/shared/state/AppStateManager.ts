/**
 * Application-specific State Management
 * Defines the global state structure for the chord transposition app
 */

import { createStateManager, StateManager } from './StateManager';

// Application state interface
export interface AppState {
  // Transpose functionality state
  transpose: {
    currentChord: string;
    targetKey: number;
    transposedChord: string;
    history: Array<{
      original: string;
      transposed: string;
      key: number;
      timestamp: number;
    }>;
  };
  
  // Dictionary functionality state
  dictionary: {
    selectedChord: string | null;
    searchQuery: string;
    filteredChords: string[];
    favorites: string[];
  };
  
  // UI state
  ui: {
    activeTab: 'transpose' | 'dictionary';
    isLoading: boolean;
    deviceType: 'mobile' | 'tablet' | 'desktop';
    theme: 'light' | 'dark';
  };
  
  // User preferences
  preferences: {
    defaultKey: number;
    showHistory: boolean;
    maxHistoryItems: number;
    autoSave: boolean;
  };
}

// Initial state
const initialAppState: AppState = {
  transpose: {
    currentChord: '',
    targetKey: 0,
    transposedChord: '',
    history: []
  },
  dictionary: {
    selectedChord: null,
    searchQuery: '',
    filteredChords: [],
    favorites: []
  },
  ui: {
    activeTab: 'transpose',
    isLoading: false,
    deviceType: 'mobile',
    theme: 'light'
  },
  preferences: {
    defaultKey: 0,
    showHistory: true,
    maxHistoryItems: 50,
    autoSave: true
  }
};

// Create platform-specific state managers
export function createWebStateManager(): StateManager<AppState> {
  return createStateManager(initialAppState, {
    platform: 'web',
    enablePersistence: true,
    persistKey: 'quick-transpose-state'
  });
}

export function createMiniprogramStateManager(): StateManager<AppState> {
  return createStateManager(initialAppState, {
    platform: 'miniprogram',
    enablePersistence: true,
    persistKey: 'quick-transpose-state'
  });
}

// State action creators for common operations
export class AppStateActions {
  constructor(private stateManager: StateManager<AppState>) {}

  // Transpose actions
  setCurrentChord(chord: string) {
    this.stateManager.setState({
      transpose: {
        ...this.stateManager.getStateProperty('transpose'),
        currentChord: chord
      }
    });
  }

  setTargetKey(key: number) {
    this.stateManager.setState({
      transpose: {
        ...this.stateManager.getStateProperty('transpose'),
        targetKey: key
      }
    });
  }

  setTransposedChord(chord: string) {
    const transposeState = this.stateManager.getStateProperty('transpose');
    this.stateManager.setState({
      transpose: {
        ...transposeState,
        transposedChord: chord
      }
    });
  }

  addToHistory(original: string, transposed: string, key: number) {
    const transposeState = this.stateManager.getStateProperty('transpose');
    const preferences = this.stateManager.getStateProperty('preferences');
    
    const newHistoryItem = {
      original,
      transposed,
      key,
      timestamp: Date.now()
    };

    let newHistory = [newHistoryItem, ...transposeState.history];
    
    // Limit history size
    if (newHistory.length > preferences.maxHistoryItems) {
      newHistory = newHistory.slice(0, preferences.maxHistoryItems);
    }

    this.stateManager.setState({
      transpose: {
        ...transposeState,
        history: newHistory
      }
    });
  }

  clearHistory() {
    const transposeState = this.stateManager.getStateProperty('transpose');
    this.stateManager.setState({
      transpose: {
        ...transposeState,
        history: []
      }
    });
  }

  // Dictionary actions
  setSelectedChord(chord: string | null) {
    this.stateManager.setState({
      dictionary: {
        ...this.stateManager.getStateProperty('dictionary'),
        selectedChord: chord
      }
    });
  }

  setSearchQuery(query: string) {
    this.stateManager.setState({
      dictionary: {
        ...this.stateManager.getStateProperty('dictionary'),
        searchQuery: query
      }
    });
  }

  setFilteredChords(chords: string[]) {
    this.stateManager.setState({
      dictionary: {
        ...this.stateManager.getStateProperty('dictionary'),
        filteredChords: chords
      }
    });
  }

  toggleFavorite(chord: string) {
    const dictionaryState = this.stateManager.getStateProperty('dictionary');
    const favorites = dictionaryState.favorites;
    
    const newFavorites = favorites.includes(chord)
      ? favorites.filter(c => c !== chord)
      : [...favorites, chord];

    this.stateManager.setState({
      dictionary: {
        ...dictionaryState,
        favorites: newFavorites
      }
    });
  }

  // UI actions
  setActiveTab(tab: 'transpose' | 'dictionary') {
    this.stateManager.setState({
      ui: {
        ...this.stateManager.getStateProperty('ui'),
        activeTab: tab
      }
    });
  }

  setLoading(isLoading: boolean) {
    this.stateManager.setState({
      ui: {
        ...this.stateManager.getStateProperty('ui'),
        isLoading
      }
    });
  }

  setDeviceType(deviceType: 'mobile' | 'tablet' | 'desktop') {
    this.stateManager.setState({
      ui: {
        ...this.stateManager.getStateProperty('ui'),
        deviceType
      }
    });
  }

  setTheme(theme: 'light' | 'dark') {
    this.stateManager.setState({
      ui: {
        ...this.stateManager.getStateProperty('ui'),
        theme
      }
    });
  }

  // Preferences actions
  updatePreferences(preferences: Partial<AppState['preferences']>) {
    this.stateManager.setState({
      preferences: {
        ...this.stateManager.getStateProperty('preferences'),
        ...preferences
      }
    });
  }

  // Utility methods
  getState() {
    return this.stateManager.getState();
  }

  subscribe<K extends keyof AppState>(key: K, listener: (newValue: AppState[K], oldValue: AppState[K]) => void) {
    return this.stateManager.subscribe(key, listener);
  }

  subscribeGlobal(listener: (newState: AppState, oldState: AppState) => void) {
    return this.stateManager.subscribeGlobal(listener);
  }
}

// Export singleton instances (to be initialized by each platform)
let webStateManager: StateManager<AppState> | null = null;
let miniprogramStateManager: StateManager<AppState> | null = null;

export function getWebStateManager(): StateManager<AppState> {
  if (!webStateManager) {
    webStateManager = createWebStateManager();
  }
  return webStateManager;
}

export function getMiniprogramStateManager(): StateManager<AppState> {
  if (!miniprogramStateManager) {
    miniprogramStateManager = createMiniprogramStateManager();
  }
  return miniprogramStateManager;
}

// Create action creators for each platform
export function createWebAppActions(): AppStateActions {
  return new AppStateActions(getWebStateManager());
}

export function createMiniprogramAppActions(): AppStateActions {
  return new AppStateActions(getMiniprogramStateManager());
}