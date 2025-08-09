"use strict";
/**
 * Application-specific State Management
 * Defines the global state structure for the chord transposition app
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStateActions = void 0;
exports.createWebStateManager = createWebStateManager;
exports.createMiniprogramStateManager = createMiniprogramStateManager;
exports.getWebStateManager = getWebStateManager;
exports.getMiniprogramStateManager = getMiniprogramStateManager;
exports.createWebAppActions = createWebAppActions;
exports.createMiniprogramAppActions = createMiniprogramAppActions;
const StateManager_1 = require("./StateManager");
// Initial state
const initialAppState = {
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
function createWebStateManager() {
    return (0, StateManager_1.createStateManager)(initialAppState, {
        platform: 'web',
        enablePersistence: true,
        persistKey: 'quick-transpose-state'
    });
}
function createMiniprogramStateManager() {
    return (0, StateManager_1.createStateManager)(initialAppState, {
        platform: 'miniprogram',
        enablePersistence: true,
        persistKey: 'quick-transpose-state'
    });
}
// State action creators for common operations
class AppStateActions {
    constructor(stateManager) {
        this.stateManager = stateManager;
    }
    // Transpose actions
    setCurrentChord(chord) {
        this.stateManager.setState({
            transpose: {
                ...this.stateManager.getStateProperty('transpose'),
                currentChord: chord
            }
        });
    }
    setTargetKey(key) {
        this.stateManager.setState({
            transpose: {
                ...this.stateManager.getStateProperty('transpose'),
                targetKey: key
            }
        });
    }
    setTransposedChord(chord) {
        const transposeState = this.stateManager.getStateProperty('transpose');
        this.stateManager.setState({
            transpose: {
                ...transposeState,
                transposedChord: chord
            }
        });
    }
    addToHistory(original, transposed, key) {
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
    setSelectedChord(chord) {
        this.stateManager.setState({
            dictionary: {
                ...this.stateManager.getStateProperty('dictionary'),
                selectedChord: chord
            }
        });
    }
    setSearchQuery(query) {
        this.stateManager.setState({
            dictionary: {
                ...this.stateManager.getStateProperty('dictionary'),
                searchQuery: query
            }
        });
    }
    setFilteredChords(chords) {
        this.stateManager.setState({
            dictionary: {
                ...this.stateManager.getStateProperty('dictionary'),
                filteredChords: chords
            }
        });
    }
    toggleFavorite(chord) {
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
    setActiveTab(tab) {
        this.stateManager.setState({
            ui: {
                ...this.stateManager.getStateProperty('ui'),
                activeTab: tab
            }
        });
    }
    setLoading(isLoading) {
        this.stateManager.setState({
            ui: {
                ...this.stateManager.getStateProperty('ui'),
                isLoading
            }
        });
    }
    setDeviceType(deviceType) {
        this.stateManager.setState({
            ui: {
                ...this.stateManager.getStateProperty('ui'),
                deviceType
            }
        });
    }
    setTheme(theme) {
        this.stateManager.setState({
            ui: {
                ...this.stateManager.getStateProperty('ui'),
                theme
            }
        });
    }
    // Preferences actions
    updatePreferences(preferences) {
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
    subscribe(key, listener) {
        return this.stateManager.subscribe(key, listener);
    }
    subscribeGlobal(listener) {
        return this.stateManager.subscribeGlobal(listener);
    }
}
exports.AppStateActions = AppStateActions;
// Export singleton instances (to be initialized by each platform)
let webStateManager = null;
let miniprogramStateManager = null;
function getWebStateManager() {
    if (!webStateManager) {
        webStateManager = createWebStateManager();
    }
    return webStateManager;
}
function getMiniprogramStateManager() {
    if (!miniprogramStateManager) {
        miniprogramStateManager = createMiniprogramStateManager();
    }
    return miniprogramStateManager;
}
// Create action creators for each platform
function createWebAppActions() {
    return new AppStateActions(getWebStateManager());
}
function createMiniprogramAppActions() {
    return new AppStateActions(getMiniprogramStateManager());
}
//# sourceMappingURL=AppStateManager.js.map