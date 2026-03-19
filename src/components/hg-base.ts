import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hg-button')
export class HGButton extends LitElement {
  @property({ type: Boolean })
  primary = false;

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  secondary = false;

  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      background-color: var(--hg-card-bg);
      border: 1px solid var(--hg-border-color);
      border-radius: var(--hg-radius-inner);
      padding: 0.75rem 1.25rem;
      font-family: inherit;
      font-weight: 600;
      color: var(--hg-text-primary);
      cursor: pointer;
      box-shadow: var(--hg-shadow-sm);
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      outline: none;
      width: 100%;
      -webkit-tap-highlight-color: transparent;
    }
    button:hover {
      background-color: var(--hg-bg-base);
      border-color: var(--hg-text-secondary);
      box-shadow: var(--hg-shadow);
    }
    button:active {
      transform: translateY(1px);
    }
    button.primary {
      color: white;
      background-color: var(--hg-primary);
      border-color: var(--hg-primary);
    }
    button.primary:hover {
      background-color: #2563EB; /* Darker blue */
      border-color: #2563EB;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    button.secondary {
      background-color: var(--hg-primary-light);
      color: var(--hg-primary);
      border-color: transparent;
    }
    button.secondary:hover {
      background-color: #DBEAFE;
    }
  `;

  render() {
    return html`
      <button class="${this.primary ? 'primary' : ''} ${this.active ? 'active' : ''} ${this.secondary ? 'secondary' : ''}">
        <slot></slot>
      </button>
    `;
  }
}

@customElement('hg-card')
export class HGCard extends LitElement {
  @property({ type: Boolean })
  interactive = false;

  @property({ type: Boolean })
  bento = false;

  static styles = css`
    :host {
      display: block;
      background-color: var(--hg-card-bg);
      border-radius: var(--hg-radius-card);
      padding: 1.5rem;
      box-shadow: var(--hg-shadow);
      border: 1px solid var(--hg-border-color);
      transition: all 0.25s ease;
      overflow: hidden;
      position: relative;
    }
    :host([interactive]:hover) {
      transform: translateY(-4px);
      box-shadow: var(--hg-shadow-lg);
      border-color: var(--hg-primary);
    }
    :host([bento]) {
      height: 100%;
      margin-bottom: 0;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
