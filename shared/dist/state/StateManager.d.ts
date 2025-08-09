/**
 * Cross-Platform State Management
 * Compatible with both React and WeChat Miniprogram
 */
import '../types/global';
export interface StateListener<T = any> {
    (newState: T, oldState: T): void;
}
export interface StateManagerOptions {
    persistKey?: string;
    enablePersistence?: boolean;
    platform?: 'web' | 'miniprogram';
}
interface MiniprogramPage {
    setData: (data: any) => void;
    unsubscribeState?: () => void;
}
export declare class StateManager<T extends Record<string, any>> {
    private state;
    private listeners;
    private globalListeners;
    private options;
    constructor(initialState: T, options?: StateManagerOptions);
    /**
     * Get current state
     */
    getState(): T;
    /**
     * Get specific state property
     */
    getStateProperty<K extends keyof T>(key: K): T[K];
    /**
     * Set state (partial update)
     */
    setState(partialState: Partial<T>): void;
    /**
     * Subscribe to state changes for a specific property
     */
    subscribe<K extends keyof T>(key: K, listener: StateListener<T[K]>): () => void;
    /**
     * Subscribe to all state changes
     */
    subscribeGlobal(listener: StateListener<T>): () => void;
    /**
     * Reset state to initial values
     */
    reset(newInitialState?: Partial<T>): void;
    /**
     * Load persisted state from storage
     */
    private loadPersistedState;
    /**
     * Persist current state to storage
     */
    private persistState;
    /**
     * Clear persisted state from storage
     */
    private clearPersistedState;
    /**
     * Platform-specific storage operations
     */
    private getStorageItem;
    private setStorageItem;
    private removeStorageItem;
}
/**
 * Create a state manager instance
 */
export declare function createStateManager<T extends Record<string, any>>(initialState: T, options?: StateManagerOptions): StateManager<T>;
/**
 * React hook for using state manager
 */
export declare function useStateManager<T extends Record<string, any>>(stateManager: StateManager<T>): [T, (partialState: Partial<T>) => void];
/**
 * Miniprogram mixin for using state manager
 */
export declare function createMiniprogramStateMixin<T extends Record<string, any>>(stateManager: StateManager<T>): {
    onLoad(this: MiniprogramPage): void;
    onUnload(this: MiniprogramPage): void;
    updateState(partialState: Partial<T>): void;
    getCurrentState(): T;
};
export {};
//# sourceMappingURL=StateManager.d.ts.map