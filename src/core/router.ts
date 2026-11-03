import { store } from './store';

export interface ParsedRoute {
  raw: string;
  view: string;
  path: string;
  params: Record<string, string>;
  level?: string;
  category?: string;
  itemId?: string;
}

export class Router {
  constructor() {
    window.addEventListener('hashchange', () => {
      this.handleRouteChange();
    });
    this.handleRouteChange();
  }

  private handleRouteChange() {
    const raw = window.location.hash || '#home';
    store.setState({ currentRoute: raw });
  }

  static navigate(hash: string, params?: Record<string, string>) {
    if (!hash.startsWith('#')) {
      hash = '#' + hash;
    }
    if (params) {
      if (params.id) {
        hash = hash + '/' + params.id;
      } else {
        const query = new URLSearchParams(params).toString();
        hash = hash + '?' + query;
      }
    }
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    store.setState({ currentRoute: hash });
  }

  static parse(hash: string): ParsedRoute {
    const raw = hash || '#home';
    const clean = raw.replace(/^#\/?/, '');
    const [pathPart, queryPart] = clean.split('?');
    const parts = (pathPart || 'home').split('/').filter(Boolean);
    const view = parts[0] || 'home';

    const params: Record<string, string> = {};
    if (parts[1]) {
      params.id = parts[1];
    }
    if (queryPart) {
      const qParams = new URLSearchParams(queryPart);
      qParams.forEach((val, key) => {
        params[key] = val;
      });
    }

    return {
      raw,
      view,
      path: view,
      params,
      level: parts[1],
      category: parts[2],
      itemId: parts[3]
    };
  }
}

export const router = new Router();
