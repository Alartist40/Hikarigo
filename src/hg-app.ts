import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { AppState } from './core/store';
import { store } from './core/store';
import { Router } from './core/router';
import './components/hg-nav';
import './features/reader/hg-reader-view';
import './features/vocab/hg-vocab-view';
import './features/dictionary/hg-dict-search';
import './features/spelling/hg-spelling-view';
import './components/hg-base';
import './styles/tokens.css';

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
      width: 100%;
      font-family: var(--hg-font-main);
      background-color: var(--hg-bg-base);
      color: var(--hg-text-primary);
      overflow: hidden;
    }
    header {
      padding: 3rem 1rem 1.5rem;
      text-align: center;
      flex-shrink: 0;
    }
    .logo {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: 0.3rem;
      color: var(--hg-primary);
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 4px #BABECC, -1px -1px 2px #FFFFFF;
    }
    .tagline {
      font-size: 0.75rem;
      color: var(--hg-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      opacity: 0.7;
    }
    main {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      padding-bottom: 10rem; /* Space for the floating nav bar */
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container {
      width: 100%;
      max-width: 600px;
      padding: 0 1rem;
    }
    h1 {
      font-size: 1.1rem;
      margin: 1rem 0 2rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--hg-text-secondary);
      text-align: center;
      width: 100%;
    }
    .profile-card-content {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    .profile-avatar {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      box-shadow: var(--hg-shadow-inner);
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--hg-bg-base);
    }
    /* Simple fade-in animation for page transitions */
    .route-container {
      animation: fadeIn 0.4s ease-out;
      width: 100%;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
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
          <div class="route-container" key=${this.state.currentRoute}>
            ${this._renderRoute()}
          </div>
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
            <p style="line-height: 1.6">Welcome back to HikariGo! Continue your journey into the English language with our focused, light, and distraction-free environment.</p>
            <hg-button primary active .glow=${true} style="margin-top: 1.5rem; width: 100%; justify-content: center" @click=${() => Router.navigate('#learn')}>Continue Learning</hg-button>
          </hg-card>
          <h2 style="font-size: 0.9rem; text-transform: uppercase; margin: 2rem 0 1rem; text-align: center; opacity: 0.6">Quick Practice</h2>
          <hg-spelling-view></hg-spelling-view>
        `;
      case '#learn':
        return html`<h1>Learn</h1><hg-reader-view></hg-reader-view>`;
      case '#review':
        return html`
          <h1>Review</h1>
          <hg-review-view></hg-review-view>
          <h2 style="font-size: 0.9rem; text-transform: uppercase; margin: 2rem 0 1rem; text-align: center; opacity: 0.6">Collection</h2>
          <hg-vocab-view></hg-vocab-view>
        `;
      case '#dictionary':
        return html`
          <h1>Dictionary</h1>
          <hg-dict-search></hg-dict-search>
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
                <div style="font-weight: 700; font-size: 1.3rem; margin-bottom: 0.2rem">Learner Hika</div>
                <div style="font-size: 0.9rem; color: var(--hg-text-secondary); letter-spacing: 0.08rem">LEVEL 5 · 2,450 XP</div>
              </div>
            </div>
          </hg-card>
        `;
      default:
        // Default to home if route not found
        return html`
          <h1>Home</h1>
          <hg-card>
             <p>Returning home...</p>
          </hg-card>
        `;
    }
  }
}
