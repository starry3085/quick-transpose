"use strict";
/**
 * Cross-Platform State Management
 * Compatible with both React and WeChat Miniprogram
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManager = void 0;
exports.createStateManager = createStateManager;
exports.useStateManager = useStateManager;
exports.createMiniprogramStateMixin = createMiniprogramStateMixin;
require("../types/global");
var StateManager = /** @class */ (function () {
    function StateManager(initialState, options) {
        if (options === void 0) { options = {}; }
        this.listeners = new Map();
        this.globalListeners = new Set();
        this.state = __assign({}, initialState);
        this.options = __assign({ enablePersistence: false, platform: 'web' }, options);
        // Load persisted state if enabled
        if (this.options.enablePersistence && this.options.persistKey) {
            this.loadPersistedState();
        }
    }
    /**
     * Get current state
     */
    StateManager.prototype.getState = function () {
        return __assign({}, this.state);
    };
    /**
     * Get specific state property
     */
    StateManager.prototype.getStateProperty = function (key) {
        return this.state[key];
    };
    /**
     * Set state (partial update)
     */
    StateManager.prototype.setState = function (partialState) {
        var _this = this;
        var oldState = __assign({}, this.state);
        this.state = __assign(__assign({}, this.state), partialState);
        // Notify property-specific listeners
        Object.keys(partialState).forEach(function (key) {
            var listeners = _this.listeners.get(key);
            if (listeners) {
                listeners.forEach(function (listener) {
                    listener(_this.state[key], oldState[key]);
                });
            }
        });
        // Notify global listeners
        this.globalListeners.forEach(function (listener) {
            listener(_this.state, oldState);
        });
        // Persist state if enabled
        if (this.options.enablePersistence) {
            this.persistState();
        }
    };
    /**
     * Subscribe to state changes for a specific property
     */
    StateManager.prototype.subscribe = function (key, listener) {
        var _this = this;
        var keyStr = String(key);
        if (!this.listeners.has(keyStr)) {
            this.listeners.set(keyStr, new Set());
        }
        var listeners = this.listeners.get(keyStr);
        listeners.add(listener);
        // Return unsubscribe function
        return function () {
            listeners.delete(listener);
            if (listeners.size === 0) {
                _this.listeners.delete(keyStr);
            }
        };
    };
    /**
     * Subscribe to all state changes
     */
    StateManager.prototype.subscribeGlobal = function (listener) {
        var _this = this;
        this.globalListeners.add(listener);
        // Return unsubscribe function
        return function () {
            _this.globalListeners.delete(listener);
        };
    };
    /**
     * Reset state to initial values
     */
    StateManager.prototype.reset = function (newInitialState) {
        var _this = this;
        var oldState = __assign({}, this.state);
        if (newInitialState) {
            this.state = __assign(__assign({}, this.state), newInitialState);
        }
        else {
            // Reset to empty state (you might want to store initial state)
            this.state = {};
        }
        // Notify all listeners
        this.globalListeners.forEach(function (listener) {
            listener(_this.state, oldState);
        });
        // Clear persistence
        if (this.options.enablePersistence) {
            this.clearPersistedState();
        }
    };
    /**
     * Load persisted state from storage
     */
    StateManager.prototype.loadPersistedState = function () {
        try {
            var persistedData = this.getStorageItem(this.options.persistKey);
            if (persistedData) {
                var parsedData = JSON.parse(persistedData);
                this.state = __assign(__assign({}, this.state), parsedData);
            }
        }
        catch (error) {
            console.warn('Failed to load persisted state:', error);
        }
    };
    /**
     * Persist current state to storage
     */
    StateManager.prototype.persistState = function () {
        try {
            var dataToStore = JSON.stringify(this.state);
            this.setStorageItem(this.options.persistKey, dataToStore);
        }
        catch (error) {
            console.warn('Failed to persist state:', error);
        }
    };
    /**
     * Clear persisted state from storage
     */
    StateManager.prototype.clearPersistedState = function () {
        try {
            this.removeStorageItem(this.options.persistKey);
        }
        catch (error) {
            console.warn('Failed to clear persisted state:', error);
        }
    };
    /**
     * Platform-specific storage operations
     */
    StateManager.prototype.getStorageItem = function (key) {
        if (this.options.platform === 'miniprogram') {
            try {
                return wx.getStorageSync(key) || null;
            }
            catch (_a) {
                return null;
            }
        }
        else {
            return localStorage.getItem(key);
        }
    };
    StateManager.prototype.setStorageItem = function (key, value) {
        if (this.options.platform === 'miniprogram') {
            wx.setStorageSync(key, value);
        }
        else {
            localStorage.setItem(key, value);
        }
    };
    StateManager.prototype.removeStorageItem = function (key) {
        if (this.options.platform === 'miniprogram') {
            wx.removeStorageSync(key);
        }
        else {
            localStorage.removeItem(key);
        }
    };
    return StateManager;
}());
exports.StateManager = StateManager;
/**
 * Create a state manager instance
 */
function createStateManager(initialState, options) {
    return new StateManager(initialState, options);
}
/**
 * React hook for using state manager
 */
function useStateManager(stateManager) {
    // This would need React imports in actual implementation
    // For now, providing the interface
    var state = stateManager.getState();
    var setState = function (partialState) { return stateManager.setState(partialState); };
    return [state, setState];
}
/**
 * Miniprogram mixin for using state manager
 */
function createMiniprogramStateMixin(stateManager) {
    return {
        onLoad: function () {
            var _this = this;
            // Subscribe to state changes and update page data
            this.unsubscribeState = stateManager.subscribeGlobal(function (newState) {
                _this.setData(newState);
            });
            // Initialize page data with current state
            this.setData(stateManager.getState());
        },
        onUnload: function () {
            // Clean up subscription
            if (this.unsubscribeState) {
                this.unsubscribeState();
            }
        },
        // Helper method to update state
        updateState: function (partialState) {
            stateManager.setState(partialState);
        },
        // Helper method to get current state
        getCurrentState: function () {
            return stateManager.getState();
        }
    };
}
//# sourceMappingURL=StateManager.js.map