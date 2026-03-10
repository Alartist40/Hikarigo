import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hg-nav')
export class HGNav extends LitElement {
  @property({ type: String })
  currentRoute: string = '#home';

  static styles = css`
    :host {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4rem;
      background-color: var(--hg-primary);
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
    nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    nav-item.active {
      opacity: 1;
      font-weight: bold;
    }
    .icon {
      font-size: 1.5rem;
    }
    .label {
      font-size: 0.75rem;
    }
    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  render() {
    const navItems = [
      { id: '#home', label: 'Home', icon: '🏠' },
      { id: '#learn', label: 'Learn', icon: '📚' },
      { id: '#review', label: 'Review', icon: '🔁' },
      { id: '#dictionary', label: 'Dict', icon: '🔍' },
      { id: '#profile', label: 'Me', icon: '👤' },
    ];

    return html`
      ${navItems.map(
        (item) => html`
          <nav-item class=${this.currentRoute === item.id ? 'active' : ''}>
            <a href=${item.id}>
              <span class="icon">${item.icon}</span>
              <span class="label">${item.label}</span>
            </a>
          </nav-item>
        `
      )}
    `;
  }
}
