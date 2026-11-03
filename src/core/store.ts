import { LevelId } from '../data/types';

export type Listener<T> = (state: T) => void;

export class Store<T> {
  private state: T;
  private listeners: Set<Listener<T>> = new Set();

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState(): T {
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
  theme: 'light' | 'dark';
  currentRoute: string;
  activeLevel: LevelId;
  points: number;
  streak: number;
  completedLessons: string[];
  bookmarks: string[];
  cardsMastered: number;
  dailyGoal: number;
  dailyProgress: number;
}

const STORAGE_KEY = 'hikarigo_app_state_v1';

function loadPersistedState(): Partial<AppState> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    // ignore
  }
  return {};
}

const saved = loadPersistedState();
const initialTheme = (saved.theme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) as 'light' | 'dark';

if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', initialTheme);
}

const initialAppState: AppState = {
  theme: initialTheme,
  currentRoute: typeof window !== 'undefined' ? (window.location.hash || '#home') : '#home',
  activeLevel: (saved.activeLevel || 'a1') as LevelId,
  points: saved.points !== undefined ? saved.points : 120,
  streak: saved.streak !== undefined ? saved.streak : 3,
  completedLessons: saved.completedLessons || [],
  bookmarks: saved.bookmarks || [],
  cardsMastered: saved.cardsMastered !== undefined ? saved.cardsMastered : 18,
  dailyGoal: saved.dailyGoal || 10,
  dailyProgress: saved.dailyProgress || 4
};

export const store = new Store<AppState>(initialAppState);

// Auto-save to localStorage on any state change
store.subscribe((state) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }
});

export function setActiveLevel(level: LevelId) {
  store.setState({ activeLevel: level });
}

export function toggleTheme() {
  const current = store.getState().theme;
  const next = current === 'dark' ? 'light' : 'dark';
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', next);
  }
  store.setState({ theme: next });
}

export function addPoints(amount: number) {
  const current = store.getState().points;
  store.setState({ points: current + amount });
}

export function markLessonCompleted(lessonId: string) {
  const state = store.getState();
  if (!state.completedLessons.includes(lessonId)) {
    store.setState({
      completedLessons: [...state.completedLessons, lessonId],
      points: state.points + 25,
      dailyProgress: state.dailyProgress + 1
    });
  }
}

export function toggleBookmark(id: string) {
  const state = store.getState();
  const exists = state.bookmarks.includes(id);
  const updated = exists ? state.bookmarks.filter(b => b !== id) : [...state.bookmarks, id];
  store.setState({ bookmarks: updated });
}

export function exportProgressData(): string {
  const state = store.getState();
  const payload = {
    app: 'HikariGo',
    version: '1.2.0',
    exportedAt: new Date().toISOString(),
    state
  };
  return JSON.stringify(payload, null, 2);
}

export function importProgressData(jsonStr: string): boolean {
  try {
    const data = JSON.parse(jsonStr);
    if (data && data.state) {
      store.setState(data.state);
      if (data.state.theme && typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', data.state.theme);
      }
      return true;
    }
  } catch (e) {
    console.error('Invalid import data', e);
  }
  return false;
}
