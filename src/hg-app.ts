import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { store, AppState } from './core/store';
import './components/hg-nav';
import './features/reader/hg-reader-view';
import './components/hg-base';

const USER_ICON = html`<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--hg-primary)"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

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
      padding: 2.5rem 1rem 1.5rem;
      text-align: center;
    }
    .logo {
      font-size: 1.75rem;
      font-weight: 800;
      letter-spacing: 0.25rem;
      color: var(--hg-primary);
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 4px #D1D9E6, -1px -1px 2px #FFFFFF;
    }
    .tagline {
      font-size: 0.75rem;
      color: var(--hg-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.12rem;
      opacity: 0.8;
    }
    main {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      padding-bottom: 9rem; /* Extended space for floating nav */
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.1rem;
      margin-bottom: 1.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      color: var(--hg-text-secondary);
      opacity: 0.9;
    }
    .profile-card-content {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    .profile-avatar {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      box-shadow: var(--hg-shadow-inner);
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--hg-bg-base);
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
            <p>Welcome back! Ready to continue your journey through the light?</p>
            <hg-button primary active .glow=${true} style="margin-top: 1.5rem">Continue Learning</hg-button>
          </hg-card>
        `;
      case '#learn':
        return html`<h1>Learn</h1><hg-reader-view></hg-reader-view>`;
      case '#review':
        return html`
          <h1>Review</h1>
          <hg-card>
            <p>You have 15 words due for review today. Consistency is key to mastery.</p>
            <hg-button primary style="margin-top: 1.5rem">Start Daily Review</hg-button>
          </hg-card>
        `;
      case '#dictionary':
        return html`
          <h1>Dictionary</h1>
          <hg-card class="inner">
            <p style="color: var(--hg-text-secondary); font-style: italic">Type a word to search the Core 2k dictionary...</p>
          </hg-card>
        `;
      case '#profile':
        return html`
          <h1>Profile</h1>
          <hg-card>
            <div class="profile-card-content">
              <div class="profile-avatar">
                ${USER_ICON}
              </div>
              <div>
                <div style="font-weight: 700; font-size: 1.2rem; margin-bottom: 0.2rem">Learner Hika</div>
                <div style="font-size: 0.85rem; color: var(--hg-text-secondary); letter-spacing: 0.05rem">LEVEL 5 · 2,450 XP</div>
              </div>
            </div>
          </hg-card>
        `;
      default:
        return html`<h1>404</h1><p>Route not found.</p>`;
    }
  }
}
