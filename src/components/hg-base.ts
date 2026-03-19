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
    button:focus-visible {
      outline: 2px solid var(--hg-primary);
      outline-offset: 2px;
      box-shadow: 0 0 0 4px var(--hg-primary-light);
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
  @property({ type: Boolean, reflect: true })
  interactive = false;

  @property({ type: Boolean, reflect: true })
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
    :host([interactive]) {
      cursor: pointer;
      outline: none;
    }
    :host([interactive]:hover), :host([interactive]:focus-visible) {
      transform: translateY(-4px);
      box-shadow: var(--hg-shadow-lg);
      border-color: var(--hg-primary);
    }
    :host([interactive]:focus-visible) {
      outline: 2px solid var(--hg-primary);
      outline-offset: 4px;
    }
    :host([bento]) {
      height: 100%;
      margin-bottom: 0;
    }
  `;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('interactive')) {
      if (this.interactive) {
        this.tabIndex = 0;
        this.role = 'button';
      } else {
        this.removeAttribute('tabindex');
        this.removeAttribute('role');
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeyDown);
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (!this.interactive) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
