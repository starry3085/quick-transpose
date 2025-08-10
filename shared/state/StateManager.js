/**
 * Cross-Platform State Management
 * Compatible with both React and WeChat Miniprogram
 */

export class StateManager {
  /**
   * 构造函数
   * @param {Object} initialState 初始状态
   * @param {Object} options 配置选项
   */
  constructor(initialState, options = {}) {
    this.state = { ...initialState };
    this.listeners = new Map();
    this.globalListeners = new Set();
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
   * @returns {Object} 当前状态
   */
  getState() {
    return { ...this.state };
  }

  /**
   * Get specific state property
   * @param {string} key 属性键
   * @returns {any} 属性值
   */
  getStateProperty(key) {
    return this.state[key];
  }

  /**
   * Set state (partial update)
   * @param {Object} partialState 部分状态更新
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
   * @param {string} key 属性键
   * @param {Function} listener 监听器函数
   * @returns {Function} 取消订阅函数
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
   * @param {Function} listener 监听器函数
   * @returns {Function} 取消订阅函数
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
   * @param {Object} newInitialState 新的初始状态
   */
  reset(newInitialState) {
    const oldState = { ...this.state };
    
    if (newInitialState) {
      this.state = { ...this.state, ...newInitialState };
    } else {
      // Reset to empty state
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
    } catch (error) {
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
    } catch (error) {
      console.warn('Failed to persist state:', error);
    }
  }

  /**
   * Clear persisted state from storage
   */
  clearPersistedState() {
    try {
      this.removeStorageItem(this.options.persistKey);
    } catch (error) {
      console.warn('Failed to clear persisted state:', error);
    }
  }

  /**
   * Platform-specific storage operations
   */
  getStorageItem(key) {
    if (this.options.platform === 'miniprogram') {
      try {
        return globalThis.wx?.getStorageSync(key) || null;
      } catch {
        return null;
      }
    } else {
      return localStorage.getItem(key);
    }
  }

  setStorageItem(key, value) {
    if (this.options.platform === 'miniprogram') {
      globalThis.wx?.setStorageSync(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  removeStorageItem(key) {
    if (this.options.platform === 'miniprogram') {
      globalThis.wx?.removeStorageSync(key);
    } else {
      localStorage.removeItem(key);
    }
  }
}

/**
 * Create a state manager instance
 * @param {Object} initialState 初始状态
 * @param {Object} options 配置选项
 * @returns {StateManager} 状态管理器实例
 */
export function createStateManager(initialState, options) {
  return new StateManager(initialState, options);
}

/**
 * React hook for using state manager
 * @param {StateManager} stateManager 状态管理器
 * @returns {Array} [state, setState]
 */
export function useStateManager(stateManager) {
  const state = stateManager.getState();
  const setState = (partialState) => stateManager.setState(partialState);
  
  return [state, setState];
}

/**
 * Miniprogram mixin for using state manager
 * @param {StateManager} stateManager 状态管理器
 * @returns {Object} 小程序混入对象
 */
export function createMiniprogramStateMixin(stateManager) {
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