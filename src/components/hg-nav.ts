import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
      opacity: 0.7;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      width: 4rem;
      height: 4rem;
      justify-content: center;
      border-radius: 50%;
    }
    nav-item.active {
      opacity: 1;
      font-weight: bold;
      box-shadow: var(--hg-shadow-active);
      background-color: var(--hg-bg-base);
      transform: translateY(-2px);
    }
    .icon {
      font-size: 1.5rem;
    }
    .label {
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      margin-top: 0.2rem;
    }
    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    nav-item.active a .icon {
      color: var(--hg-primary);
      text-shadow: 0 0 10px rgba(107, 142, 159, 0.4);
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
