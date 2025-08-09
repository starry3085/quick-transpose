"use strict";
/**
 * Application-specific State Management
 * Defines the global state structure for the chord transposition app
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStateActions = void 0;
exports.createWebStateManager = createWebStateManager;
exports.createMiniprogramStateManager = createMiniprogramStateManager;
exports.getWebStateManager = getWebStateManager;
exports.getMiniprogramStateManager = getMiniprogramStateManager;
exports.createWebAppActions = createWebAppActions;
exports.createMiniprogramAppActions = createMiniprogramAppActions;
var StateManager_1 = require("./StateManager");
// Initial state
var initialAppState = {
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
var AppStateActions = /** @class */ (function () {
    function AppStateActions(stateManager) {
        this.stateManager = stateManager;
    }
    // Transpose actions
    AppStateActions.prototype.setCurrentChord = function (chord) {
        this.stateManager.setState({
            transpose: __assign(__assign({}, this.stateManager.getStateProperty('transpose')), { currentChord: chord })
        });
    };
    AppStateActions.prototype.setTargetKey = function (key) {
        this.stateManager.setState({
            transpose: __assign(__assign({}, this.stateManager.getStateProperty('transpose')), { targetKey: key })
        });
    };
    AppStateActions.prototype.setTransposedChord = function (chord) {
        var transposeState = this.stateManager.getStateProperty('transpose');
        this.stateManager.setState({
            transpose: __assign(__assign({}, transposeState), { transposedChord: chord })
        });
    };
    AppStateActions.prototype.addToHistory = function (original, transposed, key) {
        var transposeState = this.stateManager.getStateProperty('transpose');
        var preferences = this.stateManager.getStateProperty('preferences');
        var newHistoryItem = {
            original: original,
            transposed: transposed,
            key: key,
            timestamp: Date.now()
        };
        var newHistory = __spreadArray([newHistoryItem], transposeState.history, true);
        // Limit history size
        if (newHistory.length > preferences.maxHistoryItems) {
            newHistory = newHistory.slice(0, preferences.maxHistoryItems);
        }
        this.stateManager.setState({
            transpose: __assign(__assign({}, transposeState), { history: newHistory })
        });
    };
    AppStateActions.prototype.clearHistory = function () {
        var transposeState = this.stateManager.getStateProperty('transpose');
        this.stateManager.setState({
            transpose: __assign(__assign({}, transposeState), { history: [] })
        });
    };
    // Dictionary actions
    AppStateActions.prototype.setSelectedChord = function (chord) {
        this.stateManager.setState({
            dictionary: __assign(__assign({}, this.stateManager.getStateProperty('dictionary')), { selectedChord: chord })
        });
    };
    AppStateActions.prototype.setSearchQuery = function (query) {
        this.stateManager.setState({
            dictionary: __assign(__assign({}, this.stateManager.getStateProperty('dictionary')), { searchQuery: query })
        });
    };
    AppStateActions.prototype.setFilteredChords = function (chords) {
        this.stateManager.setState({
            dictionary: __assign(__assign({}, this.stateManager.getStateProperty('dictionary')), { filteredChords: chords })
        });
    };
    AppStateActions.prototype.toggleFavorite = function (chord) {
        var dictionaryState = this.stateManager.getStateProperty('dictionary');
        var favorites = dictionaryState.favorites;
        var newFavorites = favorites.includes(chord)
            ? favorites.filter(function (c) { return c !== chord; })
            : __spreadArray(__spreadArray([], favorites, true), [chord], false);
        this.stateManager.setState({
            dictionary: __assign(__assign({}, dictionaryState), { favorites: newFavorites })
        });
    };
    // UI actions
    AppStateActions.prototype.setActiveTab = function (tab) {
        this.stateManager.setState({
            ui: __assign(__assign({}, this.stateManager.getStateProperty('ui')), { activeTab: tab })
        });
    };
    AppStateActions.prototype.setLoading = function (isLoading) {
        this.stateManager.setState({
            ui: __assign(__assign({}, this.stateManager.getStateProperty('ui')), { isLoading: isLoading })
        });
    };
    AppStateActions.prototype.setDeviceType = function (deviceType) {
        this.stateManager.setState({
            ui: __assign(__assign({}, this.stateManager.getStateProperty('ui')), { deviceType: deviceType })
        });
    };
    AppStateActions.prototype.setTheme = function (theme) {
        this.stateManager.setState({
            ui: __assign(__assign({}, this.stateManager.getStateProperty('ui')), { theme: theme })
        });
    };
    // Preferences actions
    AppStateActions.prototype.updatePreferences = function (preferences) {
        this.stateManager.setState({
            preferences: __assign(__assign({}, this.stateManager.getStateProperty('preferences')), preferences)
        });
    };
    // Utility methods
    AppStateActions.prototype.getState = function () {
        return this.stateManager.getState();
    };
    AppStateActions.prototype.subscribe = function (key, listener) {
        return this.stateManager.subscribe(key, listener);
    };
    AppStateActions.prototype.subscribeGlobal = function (listener) {
        return this.stateManager.subscribeGlobal(listener);
    };
    return AppStateActions;
}());
exports.AppStateActions = AppStateActions;
// Export singleton instances (to be initialized by each platform)
var webStateManager = null;
var miniprogramStateManager = null;
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