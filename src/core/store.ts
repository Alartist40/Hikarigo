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
  points: number;
  level: number;
}

const initialState: AppState = {
  theme: 'auto',
  language: 'ja',
  currentRoute: window.location.hash || '#home',
  points: 0,
  level: 1,
};

export const store = new Store<AppState>(initialState);

export const updatePoints = (pointsToAdd: number) => {
  const currentState = store.getState();
  let newPoints = currentState.points + pointsToAdd;
  let newLevel = currentState.level;

  if (newPoints >= 100) {
    newLevel += 1;
    newPoints -= 100;
    console.log(`Level Up! Now at level ${newLevel}`);
  }

  store.setState({ points: newPoints, level: newLevel });
};
