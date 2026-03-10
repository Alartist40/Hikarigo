import { store } from './store';

export class Router {
  constructor() {
    window.addEventListener('hashchange', () => {
      this.handleRouteChange();
    });
    // Initial route
    this.handleRouteChange();
  }

  private handleRouteChange() {
    const hash = window.location.hash || '#home';
    store.setState({ currentRoute: hash });
  }

  static navigate(hash: string) {
    window.location.hash = hash;
  }
}

export const router = new Router();
