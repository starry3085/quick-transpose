/**
 * Application-specific State Management
 * Defines the global state structure for the chord transposition app
 */
import { StateManager } from './StateManager';
export interface AppState {
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
    dictionary: {
        selectedChord: string | null;
        searchQuery: string;
        filteredChords: string[];
        favorites: string[];
    };
    ui: {
        activeTab: 'transpose' | 'dictionary';
        isLoading: boolean;
        deviceType: 'mobile' | 'tablet' | 'desktop';
        theme: 'light' | 'dark';
    };
    preferences: {
        defaultKey: number;
        showHistory: boolean;
        maxHistoryItems: number;
        autoSave: boolean;
    };
}
export declare function createWebStateManager(): StateManager<AppState>;
export declare function createMiniprogramStateManager(): StateManager<AppState>;
export declare class AppStateActions {
    private stateManager;
    constructor(stateManager: StateManager<AppState>);
    setCurrentChord(chord: string): void;
    setTargetKey(key: number): void;
    setTransposedChord(chord: string): void;
    addToHistory(original: string, transposed: string, key: number): void;
    clearHistory(): void;
    setSelectedChord(chord: string | null): void;
    setSearchQuery(query: string): void;
    setFilteredChords(chords: string[]): void;
    toggleFavorite(chord: string): void;
    setActiveTab(tab: 'transpose' | 'dictionary'): void;
    setLoading(isLoading: boolean): void;
    setDeviceType(deviceType: 'mobile' | 'tablet' | 'desktop'): void;
    setTheme(theme: 'light' | 'dark'): void;
    updatePreferences(preferences: Partial<AppState['preferences']>): void;
    getState(): AppState;
    subscribe<K extends keyof AppState>(key: K, listener: (newValue: AppState[K], oldValue: AppState[K]) => void): () => void;
    subscribeGlobal(listener: (newState: AppState, oldState: AppState) => void): () => void;
}
export declare function getWebStateManager(): StateManager<AppState>;
export declare function getMiniprogramStateManager(): StateManager<AppState>;
export declare function createWebAppActions(): AppStateActions;
export declare function createMiniprogramAppActions(): AppStateActions;
//# sourceMappingURL=AppStateManager.d.ts.map