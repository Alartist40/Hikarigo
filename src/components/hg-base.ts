import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hg-button')
export class HGButton extends LitElement {
  @property({ type: Boolean })
  primary = false;

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  glow = false;

  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      background-color: var(--hg-bg-base);
      border: none;
      border-radius: var(--hg-radius-pill);
      padding: 0.75rem 1.5rem;
      font-family: inherit;
      font-weight: 700;
      color: var(--hg-text-secondary);
      cursor: pointer;
      box-shadow: var(--hg-shadow-outer);
      transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }
    button:hover {
      box-shadow: 12px 12px 20px #BABECC, -12px -12px 20px #FFFFFF;
      color: var(--hg-text-primary);
    }
    button:active, button.active {
      box-shadow: var(--hg-shadow-active);
      color: var(--hg-primary);
    }
    button.primary {
      color: white;
      background-color: var(--hg-primary);
      box-shadow: 6px 6px 12px rgba(107, 142, 159, 0.4), -6px -6px 12px #FFFFFF;
    }
    button.primary:hover {
      box-shadow: 0 0 20px rgba(107, 142, 159, 0.5), 8px 8px 16px rgba(107, 142, 159, 0.3), -8px -8px 16px #FFFFFF;
    }
    button.glow {
      box-shadow: var(--hg-glow), 6px 6px 12px rgba(232, 165, 152, 0.4);
      background-color: var(--hg-accent);
      color: white;
    }
    button.glow:hover {
      box-shadow: var(--hg-glow), 0 0 25px rgba(232, 165, 152, 0.6), 8px 8px 16px rgba(232, 165, 152, 0.4);
    }
  `;

  render() {
    return html`
      <button class="${this.primary ? 'primary' : ''} ${this.active ? 'active' : ''} ${this.glow ? 'glow' : ''}">
        <slot></slot>
      </button>
    `;
  }
}

@customElement('hg-card')
export class HGCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--hg-bg-base);
      border-radius: var(--hg-radius-card);
      padding: 1.5rem;
      box-shadow: var(--hg-shadow-outer);
      margin-bottom: 1.5rem;
    }
    :host(.inner) {
      box-shadow: var(--hg-shadow-inner);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
