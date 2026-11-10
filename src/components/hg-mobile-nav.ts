import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router } from '../core/router';

@customElement('hg-mobile-nav')
export class HGMobileNav extends LitElement {
  @property({ type: String })
  activeRoute: string = '#home';

  static styles = css`
    :host {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-top: 1.5px solid var(--card-border, #DDD6F7);
      box-shadow: 0 -4px 20px rgba(124, 102, 220, 0.08);
      padding: 0.5rem 0.5rem max(0.5rem, env(safe-area-inset-bottom));
    }
    @media (max-width: 860px) {
      :host {
        display: block;
      }
    }
    .nav-bar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;
    }
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      padding: 0.4rem 0.6rem;
      border-radius: var(--radius-md, 20px);
      color: var(--muted, #847C9F);
      text-decoration: none;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.12s ease;
      min-width: 54px;
    }
    .nav-item:hover {
      color: var(--theme-lavender, #7C66DC);
    }
    .nav-item.active {
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
    }
    .nav-icon {
      width: 22px;
      height: 22px;
    }
    .nav-icon svg {
      width: 100%;
      height: 100%;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `;

  render() {
    return html`
      <nav class="nav-bar">
        <a class="nav-item ${this.activeRoute === '#home' ? 'active' : ''}" 
           @click=${() => Router.navigate('#home')}>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <span>ホーム</span>
        </a>

        <a class="nav-item ${this.activeRoute.startsWith('#lesson') ? 'active' : ''}" 
           @click=${() => Router.navigate('#lessons')}>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <span>文法</span>
        </a>

        <a class="nav-item ${this.activeRoute.startsWith('#flashcards') ? 'active' : ''}" 
           @click=${() => Router.navigate('#flashcards')}>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <span>暗記</span>
        </a>

        <a class="nav-item ${this.activeRoute.startsWith('#reader') ? 'active' : ''}" 
           @click=${() => Router.navigate('#reader')}>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <span>読解</span>
        </a>

        <a class="nav-item ${this.activeRoute.startsWith('#practice') || this.activeRoute.startsWith('#scramble') || this.activeRoute.startsWith('#typing') || this.activeRoute.startsWith('#diagnostic') ? 'active' : ''}" 
           @click=${() => Router.navigate('#practice')}>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
          </div>
          <span>演習</span>
        </a>

        <a class="nav-item ${this.activeRoute.startsWith('#simulations') ? 'active' : ''}" 
           @click=${() => Router.navigate('#simulations')}>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
          </div>
          <span>模試</span>
        </a>

        <a class="nav-item ${this.activeRoute.startsWith('#dictionary') ? 'active' : ''}" 
           @click=${() => Router.navigate('#dictionary')}>
          <div class="nav-icon">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <span>辞典</span>
        </a>
      </nav>
    `;
  }
}
