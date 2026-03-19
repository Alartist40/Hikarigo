import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { AppState } from './core/store';
import { store } from './core/store';
import './components/hg-nav';
import './features/reader/hg-reader-view';
import './features/dictionary/hg-dict-search';
import './features/spelling/hg-spelling-view';
import './features/quiz/hg-quiz-view';
import './components/hg-base';
import './styles/tokens.css';

@customElement('hg-app')
export class HGApp extends LitElement {
  @property({ type: Object })
  state: AppState = store.getState();

  @state()
  private _selectedLevel: 'a1' | 'a2' | 'b1' = 'a1';

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
      height: 100vh;
      width: 100vw;
      background-color: var(--hg-bg-base);
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
    .content-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
    }
    header {
      height: var(--hg-header-height);
      background-color: var(--hg-card-bg);
      border-bottom: 1px solid var(--hg-border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      flex-shrink: 0;
    }
    .user-stats {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    .stat-pill {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--hg-primary-light);
      padding: 0.4rem 1rem;
      border-radius: var(--hg-radius-pill);
      color: var(--hg-primary);
      font-weight: 700;
      font-size: 0.9rem;
    }
    .level-badge {
      background-color: var(--hg-accent);
      color: white;
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
      font-size: 0.7rem;
      text-transform: uppercase;
      margin-left: 0.5rem;
    }
    main {
      flex: 1;
      overflow-y: auto;
      padding: 2rem;
    }
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-auto-rows: minmax(160px, auto);
      gap: 1.5rem;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
    .bento-item-large {
      grid-column: span 2;
      grid-row: span 2;
    }
    .bento-item-wide {
      grid-column: span 2;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      margin: 0 0 1.5rem;
      color: var(--hg-text-primary);
    }
    .route-container {
      width: 100%;
    }

    @media (max-width: 768px) {
      :host {
        flex-direction: column;
      }
      .content-area {
        height: calc(100vh - 70px);
      }
      header {
        padding: 0 1rem;
      }
      main {
        padding: 1rem;
        padding-bottom: 5rem;
      }
      .bento-grid {
        grid-template-columns: 1fr;
      }
      .bento-item-large, .bento-item-wide {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  `;

  render() {
    return html`
      <hg-nav .currentRoute=${this.state.currentRoute}></hg-nav>
      <div class="content-area">
        <header>
          <div style="font-weight: 600; color: var(--hg-text-secondary); text-transform: uppercase; letter-spacing: 0.05rem; font-size: 0.8rem">
             ${this._getRouteTitle()}
          </div>
          <div class="user-stats">
            <div class="stat-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${this.state.points} pts
            </div>
            <div style="font-weight: 700; color: var(--hg-text-primary); display: flex; align-items: center">
              LEVEL ${this.state.level}
              <div class="level-badge">Explorer</div>
            </div>
          </div>
        </header>
        <main>
          <div class="route-container">
            ${this._renderRoute()}
          </div>
        </main>
      </div>
    `;
  }

  private _getRouteTitle() {
    const route = this.state.currentRoute;
    if (route === '#home') return 'Dashboard';
    if (route === '#study') return 'Study Center';
    if (route === '#dictionary') return 'Vocabulary Reference';
    if (route === '#train') return 'Practice Arena';
    if (route === '#settings') return 'Preferences';
    return 'HikariGo';
  }

  private _renderRoute() {
    switch (this.state.currentRoute) {
      case '#home':
        return html`
          <h1>Welcome to HikariGo</h1>
          <div class="bento-grid">
            <hg-card bento class="bento-item-large" interactive @click=${() => window.location.hash = '#study'}>
              <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between">
                <div>
                   <div style="color: var(--hg-primary); margin-bottom: 1rem">
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                   </div>
                   <h2 style="margin: 0 0 0.5rem">Start Studying</h2>
                   <p style="color: var(--hg-text-secondary); margin: 0">Explore reading passages and grammar guides organized by levels.</p>
                </div>
                <hg-button primary style="width: fit-content">Resume Level 1</hg-button>
              </div>
            </hg-card>

            <hg-card bento interactive @click=${() => window.location.hash = '#train'}>
              <h3 style="margin: 0 0 0.5rem">Daily Drill</h3>
              <p style="color: var(--hg-text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem">Test your spelling and grammar knowledge.</p>
              <hg-button secondary>Start Training</hg-button>
            </hg-card>

            <hg-card bento>
               <h3 style="margin: 0 0 0.5rem">Your Progress</h3>
               <div style="margin: 1rem 0">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.5rem">
                    <span>Next Level</span>
                    <span>${this.state.points}/100</span>
                  </div>
                  <div style="width: 100%; height: 8px; background-color: var(--hg-primary-light); border-radius: 4px; overflow: hidden">
                    <div style="width: ${this.state.points}%; height: 100%; background-color: var(--hg-primary)"></div>
                  </div>
               </div>
               <p style="font-size: 0.8rem; color: var(--hg-text-secondary)">Earn points by completing quizzes and reading new texts.</p>
            </hg-card>

            <hg-card bento class="bento-item-wide" interactive @click=${() => window.location.hash = '#dictionary'}>
               <div style="display: flex; align-items: center; gap: 1.5rem">
                  <div style="color: var(--hg-accent)">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <div>
                    <h3 style="margin: 0">Quick Dictionary</h3>
                    <p style="color: var(--hg-text-secondary); font-size: 0.9rem; margin: 0">Search over 2,000 common English words.</p>
                  </div>
               </div>
            </hg-card>
          </div>
        `;
      case '#study':
        return html`
          <h1>Study Lessons</h1>
          <div style="margin-bottom: 2rem">
             <hg-card>
                <div style="font-size: 0.8rem; color: var(--hg-primary); font-weight: 700; margin-bottom: 0.75rem">CHOOSE YOUR LEVEL</div>
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem">
                   <hg-button .primary=${this._selectedLevel === 'a1'} .active=${this._selectedLevel === 'a1'} .secondary=${this._selectedLevel !== 'a1'} @click=${() => this._selectedLevel = 'a1'}>Level A1</hg-button>
                   <hg-button .primary=${this._selectedLevel === 'a2'} .active=${this._selectedLevel === 'a2'} .secondary=${this._selectedLevel !== 'a2'} @click=${() => this._selectedLevel = 'a2'}>Level A2</hg-button>
                   <hg-button .primary=${this._selectedLevel === 'b1'} .active=${this._selectedLevel === 'b1'} .secondary=${this._selectedLevel !== 'b1'} @click=${() => this._selectedLevel = 'b1'}>Level B1</hg-button>
                </div>
                <p style="color: var(--hg-text-secondary); font-size: 0.9rem">Currently viewing lessons for level ${this._selectedLevel.toUpperCase()}.</p>
             </hg-card>
          </div>
          <hg-reader-view .level=${this._selectedLevel}></hg-reader-view>
        `;
      case '#train':
        return html`
          <h1>Training Arena</h1>
          <div style="margin-bottom: 2rem">
             <hg-card>
                <div style="font-size: 0.8rem; color: var(--hg-primary); font-weight: 700; margin-bottom: 0.75rem">CHOOSE YOUR LEVEL</div>
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem">
                   <hg-button .primary=${this._selectedLevel === 'a1'} .active=${this._selectedLevel === 'a1'} .secondary=${this._selectedLevel !== 'a1'} @click=${() => this._selectedLevel = 'a1'}>Level A1</hg-button>
                   <hg-button .primary=${this._selectedLevel === 'a2'} .active=${this._selectedLevel === 'a2'} .secondary=${this._selectedLevel !== 'a2'} @click=${() => this._selectedLevel = 'a2'}>Level A2</hg-button>
                   <hg-button .primary=${this._selectedLevel === 'b1'} .active=${this._selectedLevel === 'b1'} .secondary=${this._selectedLevel !== 'b1'} @click=${() => this._selectedLevel = 'b1'}>Level B1</hg-button>
                </div>
                <p style="color: var(--hg-text-secondary); font-size: 0.9rem">Currently practicing at level ${this._selectedLevel.toUpperCase()}.</p>
             </hg-card>
          </div>
          <div class="bento-grid">
             <div class="bento-item-wide">
                <hg-quiz-view .level=${this._selectedLevel}></hg-quiz-view>
             </div>
             <div class="bento-item-wide">
                <hg-spelling-view></hg-spelling-view>
             </div>
          </div>
        `;
      case '#dictionary':
        return html`
          <h1>Dictionary Search</h1>
          <hg-dict-search></hg-dict-search>
        `;
      case '#settings':
        return html`
          <h1>Preferences</h1>
          <div class="bento-grid">
            <hg-card bento>
               <h3 style="margin: 0 0 1rem">App Settings</h3>
               <div style="display: flex; flex-direction: column; gap: 1rem">
                  <div style="display: flex; justify-content: space-between">
                     <span>Theme</span>
                     <span style="font-weight: 700; color: var(--hg-primary)">Light (Flat)</span>
                  </div>
                  <div style="display: flex; justify-content: space-between">
                     <span>Language</span>
                     <span style="font-weight: 700; color: var(--hg-primary)">English / Japanese</span>
                  </div>
               </div>
            </hg-card>
            <hg-card bento>
               <h3 style="margin: 0 0 1rem">About HikariGo</h3>
               <p style="font-size: 0.9rem; color: var(--hg-text-secondary); line-height: 1.5">
                  HikariGo is an open-source platform for learning English through Biblical content.
                  Designed for distraction-free study.
               </p>
               <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--hg-text-secondary)">Version 0.2.0 (Bento)</div>
            </hg-card>
          </div>
        `;
      default:
        window.location.hash = '#home';
        return html``;
    }
  }
}
