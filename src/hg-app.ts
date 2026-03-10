import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { store, AppState } from './core/store';
import './components/hg-nav';
import './features/reader/hg-reader-view';
import './components/hg-base';

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
    header {
      padding: 2rem 1rem 1rem;
      text-align: center;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: 0.2rem;
      color: var(--hg-primary);
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      text-shadow: var(--hg-shadow-outer);
    }
    .tagline {
      font-size: 0.8rem;
      color: var(--hg-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05rem;
    }
    main {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      padding-bottom: 8rem; /* Extended space for floating nav */
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      color: var(--hg-text-secondary);
    }
  `;

  render() {
    return html`
      <header>
        <div class="logo">HikariGo</div>
        <div class="tagline">Light Language Learning</div>
      </header>
      <main>
        <div class="container">
          ${this._renderRoute()}
        </div>
      </main>
      <hg-nav .currentRoute=${this.state.currentRoute}></hg-nav>
    `;
  }

  private _renderRoute() {
    switch (this.state.currentRoute) {
      case '#home':
        return html`
          <h1>Home</h1>
          <hg-card>
            <p>Welcome to HikariGo! Glide through your language learning journey.</p>
            <hg-button primary active .glow=${true} style="margin-top: 1rem">Get Started</hg-button>
          </hg-card>
        `;
      case '#learn':
        return html`<h1>Learn</h1><hg-reader-view></hg-reader-view>`;
      case '#review':
        return html`
          <h1>Review</h1>
          <hg-card>
            <p>You have 15 words due for review today.</p>
            <hg-button primary style="margin-top: 1rem">Start Review</hg-button>
          </hg-card>
        `;
      case '#dictionary':
        return html`
          <h1>Dictionary</h1>
          <hg-card class="inner">
            <p style="color: var(--hg-text-secondary)">Search thousands of words instantly...</p>
          </hg-card>
        `;
      case '#profile':
        return html`
          <h1>Profile</h1>
          <hg-card>
            <div style="display: flex; gap: 1rem; align-items: center">
              <div style="width: 4rem; height: 4rem; border-radius: 50%; box-shadow: var(--hg-shadow-inner); display: flex; align-items: center; justify-content: center; font-size: 2rem">👤</div>
              <div>
                <div style="font-weight: bold">Learner Hika</div>
                <div style="font-size: 0.8rem; color: var(--hg-text-secondary)">Level 5 · 2,450 XP</div>
              </div>
            </div>
          </hg-card>
        `;
      default:
        return html`<h1>404</h1><p>Route not found.</p>`;
    }
  }
}
