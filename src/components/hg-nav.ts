import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const ICONS = {
  home: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  learn: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  review: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  dict: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  settings: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
};

@customElement('hg-nav')
export class HGNav extends LitElement {
  @property({ type: String })
  currentRoute: string = '#home';

  static styles = css`
    :host {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 500px;
      height: 4.5rem;
      background-color: var(--hg-bg-base);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 1rem;
      border-radius: var(--hg-radius-pill);
      box-shadow: var(--hg-shadow-outer);
      z-index: 1000;
    }
    nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      opacity: 0.6;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      width: 4.5rem;
      height: 4.5rem;
      justify-content: center;
      border-radius: 50%;
    }
    nav-item.active {
      opacity: 1;
      font-weight: bold;
      box-shadow: var(--hg-shadow-active);
      background-color: var(--hg-bg-base);
      transform: translateY(-4px);
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2px;
    }
    .label {
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.08rem;
      color: var(--hg-text-secondary);
    }
    .nav-link {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: center;
    }
    nav-item.active .nav-link .icon {
      color: var(--hg-primary);
      filter: drop-shadow(0 0 8px rgba(107, 142, 159, 0.4));
    }
    nav-item.active .nav-link .label {
      color: var(--hg-primary);
    }
  `;

  render() {
    const navItems = [
      { id: '#home', label: 'Home', icon: ICONS.home },
      { id: '#learn', label: 'Learn', icon: ICONS.learn },
      { id: '#dictionary', label: 'Dict', icon: ICONS.dict },
      { id: '#settings', label: 'Settings', icon: ICONS.settings },
    ];

    return html`
      ${navItems.map(
        (item) => html`
          <nav-item class=${this.currentRoute === item.id ? 'active' : ''}>
            <a href=${item.id} class="nav-link">
              <span class="icon">${item.icon}</span>
              <span class="label">${item.label}</span>
            </a>
          </nav-item>
        `
      )}
    `;
  }
}
