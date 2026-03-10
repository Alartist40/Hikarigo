import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { store, AppState } from './core/store';
import './components/hg-nav';
import './features/reader/hg-reader-view';

@customElement('hg-app')
export class HGApp extends LitElement {
  @property({ type: Object })
  state: AppState = store.getState();

  connectedCallback() {
    super.connectedCallback();
    this._unsubscribe = store.subscribe((newState) => {
      this.state = newState;
      this.requestUpdate();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubscribe) this._unsubscribe();
  }

  private _unsubscribe?: () => void;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      font-family: var(--hg-font-main);
      background-color: var(--hg-bg-base);
      color: var(--hg-text-primary);
    }
    main {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      padding-bottom: 5rem; /* Space for bottom nav */
    }
  `;

  render() {
    return html`
      <main>
        ${this._renderRoute()}
      </main>
      <hg-nav .currentRoute=${this.state.currentRoute}></hg-nav>
    `;
  }

  private _renderRoute() {
    switch (this.state.currentRoute) {
      case '#home':
        return html`<h1>Home</h1><p>Welcome to HikariGo!</p>`;
      case '#learn':
        return html`<h1>Learn</h1><p>Start a new lesson.</p><hg-reader-view></hg-reader-view>`;
      case '#review':
        return html`<h1>Review</h1><p>Daily SRS reviews.</p>`;
      case '#dictionary':
        return html`<h1>Dictionary</h1><p>Search words.</p>`;
      case '#profile':
        return html`<h1>Profile</h1><p>Your progress.</p>`;
      default:
        return html`<h1>404</h1><p>Route not found.</p>`;
    }
  }
}
