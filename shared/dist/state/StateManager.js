"use strict";
/**
 * Cross-Platform State Management
 * Compatible with both React and WeChat Miniprogram
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManager = void 0;
exports.createStateManager = createStateManager;
exports.useStateManager = useStateManager;
exports.createMiniprogramStateMixin = createMiniprogramStateMixin;
require("../types/global");
class StateManager {
    constructor(initialState, options = {}) {
        this.listeners = new Map();
        this.globalListeners = new Set();
        this.state = { ...initialState };
        this.options = {
            enablePersistence: false,
            platform: 'web',
            ...options
        };
        // Load persisted state if enabled
        if (this.options.enablePersistence && this.options.persistKey) {
            this.loadPersistedState();
        }
    }
    /**
     * Get current state
     */
    getState() {
        return { ...this.state };
    }
    /**
     * Get specific state property
     */
    getStateProperty(key) {
        return this.state[key];
    }
    /**
     * Set state (partial update)
     */
    setState(partialState) {
        const oldState = { ...this.state };
        this.state = { ...this.state, ...partialState };
        // Notify property-specific listeners
        Object.keys(partialState).forEach(key => {
            const listeners = this.listeners.get(key);
            if (listeners) {
                listeners.forEach(listener => {
                    listener(this.state[key], oldState[key]);
                });
            }
        });
        // Notify global listeners
        this.globalListeners.forEach(listener => {
            listener(this.state, oldState);
        });
        // Persist state if enabled
        if (this.options.enablePersistence) {
            this.persistState();
        }
    }
    /**
     * Subscribe to state changes for a specific property
     */
    subscribe(key, listener) {
        const keyStr = String(key);
        if (!this.listeners.has(keyStr)) {
            this.listeners.set(keyStr, new Set());
        }
        const listeners = this.listeners.get(keyStr);
        listeners.add(listener);
        // Return unsubscribe function
        return () => {
            listeners.delete(listener);
            if (listeners.size === 0) {
                this.listeners.delete(keyStr);
            }
        };
    }
    /**
     * Subscribe to all state changes
     */
    subscribeGlobal(listener) {
        this.globalListeners.add(listener);
        // Return unsubscribe function
        return () => {
            this.globalListeners.delete(listener);
        };
    }
    /**
     * Reset state to initial values
     */
    reset(newInitialState) {
        const oldState = { ...this.state };
        if (newInitialState) {
            this.state = { ...this.state, ...newInitialState };
        }
        else {
            // Reset to empty state (you might want to store initial state)
            this.state = {};
        }
        // Notify all listeners
        this.globalListeners.forEach(listener => {
            listener(this.state, oldState);
        });
        // Clear persistence
        if (this.options.enablePersistence) {
            this.clearPersistedState();
        }
    }
    /**
     * Load persisted state from storage
     */
    loadPersistedState() {
        try {
            const persistedData = this.getStorageItem(this.options.persistKey);
            if (persistedData) {
                const parsedData = JSON.parse(persistedData);
                this.state = { ...this.state, ...parsedData };
            }
        }
        catch (error) {
            console.warn('Failed to load persisted state:', error);
        }
    }
    /**
     * Persist current state to storage
     */
    persistState() {
        try {
            const dataToStore = JSON.stringify(this.state);
            this.setStorageItem(this.options.persistKey, dataToStore);
        }
        catch (error) {
            console.warn('Failed to persist state:', error);
        }
    }
    /**
     * Clear persisted state from storage
     */
    clearPersistedState() {
        try {
            this.removeStorageItem(this.options.persistKey);
        }
        catch (error) {
            console.warn('Failed to clear persisted state:', error);
        }
    }
    /**
     * Platform-specific storage operations
     */
    getStorageItem(key) {
        if (this.options.platform === 'miniprogram') {
            try {
                return wx.getStorageSync(key) || null;
            }
            catch {
                return null;
            }
        }
        else {
            return localStorage.getItem(key);
        }
    }
    setStorageItem(key, value) {
        if (this.options.platform === 'miniprogram') {
            wx.setStorageSync(key, value);
        }
        else {
            localStorage.setItem(key, value);
        }
    }
    removeStorageItem(key) {
        if (this.options.platform === 'miniprogram') {
            wx.removeStorageSync(key);
        }
        else {
            localStorage.removeItem(key);
        }
    }
}
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
    const state = stateManager.getState();
    const setState = (partialState) => stateManager.setState(partialState);
    return [state, setState];
}
/**
 * Miniprogram mixin for using state manager
 */
function createMiniprogramStateMixin(stateManager) {
    return {
        onLoad() {
            // Subscribe to state changes and update page data
            this.unsubscribeState = stateManager.subscribeGlobal((newState) => {
                this.setData(newState);
            });
            // Initialize page data with current state
            this.setData(stateManager.getState());
        },
        onUnload() {
            // Clean up subscription
            if (this.unsubscribeState) {
                this.unsubscribeState();
            }
        },
        // Helper method to update state
        updateState(partialState) {
            stateManager.setState(partialState);
        },
        // Helper method to get current state
        getCurrentState() {
            return stateManager.getState();
        }
    };
}
//# sourceMappingURL=StateManager.js.map