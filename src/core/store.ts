export type Listener<T> = (state: T) => void;

export class Store<T> {
  private state: T;
  private listeners: Set<Listener<T>> = new Set();

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState(): T {
    // Return a shallow copy to prevent direct mutations of the state object
    return { ...this.state };
  }

  setState(newState: Partial<T>): void {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  subscribe(listener: Listener<T>): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      listener({ ...this.state });
    });
  }
}

export interface AppState {
  theme: 'light' | 'dark' | 'auto';
  language: 'ja' | 'en';
  currentRoute: string;
}

const initialState: AppState = {
  theme: 'auto',
  language: 'ja',
  currentRoute: window.location.hash || '#home',
};

export const store = new Store<AppState>(initialState);
