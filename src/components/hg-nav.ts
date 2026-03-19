import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const ICONS = {
  home: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  study: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  train: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M18.4 4.6a10 10 0 1 1-12.8 0"/></svg>`,
  dict: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  settings: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
};

@customElement('hg-nav')
export class HGNav extends LitElement {
  @property({ type: String })
  currentRoute: string = '#home';

  static styles = css`
    :host {
      width: var(--hg-sidebar-width);
      height: 100vh;
      background-color: var(--hg-card-bg);
      border-right: 1px solid var(--hg-border-color);
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      flex-shrink: 0;
      z-index: 100;
    }
    .brand {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--hg-primary);
      letter-spacing: 0.1rem;
      margin-bottom: 2.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .nav-section {
      margin-bottom: 2rem;
    }
    .nav-section-title {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--hg-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      margin-bottom: 1rem;
      padding-left: 0.75rem;
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-radius: var(--hg-radius-inner);
      text-decoration: none;
      color: var(--hg-text-secondary);
      font-weight: 600;
      transition: all 0.2s ease;
      margin-bottom: 0.25rem;
    }
    .nav-item:hover {
      background-color: var(--hg-bg-base);
      color: var(--hg-text-primary);
    }
    .nav-item.active {
      background-color: var(--hg-primary-light);
      color: var(--hg-primary);
    }
    .nav-item .icon {
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      :host {
        width: 100%;
        height: auto;
        position: fixed;
        bottom: 0;
        left: 0;
        border-right: none;
        border-top: 1px solid var(--hg-border-color);
        flex-direction: row;
        padding: 0.5rem;
        justify-content: space-around;
      }
      .brand, .nav-section-title {
        display: none;
      }
      .nav-section {
        margin-bottom: 0;
        display: flex;
        width: 100%;
        justify-content: space-around;
      }
      .nav-item {
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.5rem;
        font-size: 0.7rem;
        margin-bottom: 0;
      }
    }
  `;

  render() {
    return html`
      <div class="brand">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        HikariGo
      </div>

      <div class="nav-section">
        <div class="nav-section-title">Home</div>
        <a href="#home" class="nav-item ${this.currentRoute === '#home' ? 'active' : ''}">
          <span class="icon">${ICONS.home}</span> Home
        </a>
      </div>

      <div class="nav-section">
        <div class="nav-section-title">Study</div>
        <a href="#study" class="nav-item ${this.currentRoute === '#study' ? 'active' : ''}">
          <span class="icon">${ICONS.study}</span> Lessons
        </a>
        <a href="#dictionary" class="nav-item ${this.currentRoute === '#dictionary' ? 'active' : ''}">
          <span class="icon">${ICONS.dict}</span> Dictionary
        </a>
      </div>

      <div class="nav-section">
        <div class="nav-section-title">Train Yourself</div>
        <a href="#train" class="nav-item ${this.currentRoute === '#train' ? 'active' : ''}">
          <span class="icon">${ICONS.train}</span> Practice
        </a>
      </div>

      <div style="flex-grow: 1"></div>

      <div class="nav-section" style="margin-bottom: 0">
        <a href="#settings" class="nav-item ${this.currentRoute === '#settings' ? 'active' : ''}">
          <span class="icon">${ICONS.settings}</span> Settings
        </a>
      </div>
    `;
  }
}
