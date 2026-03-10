import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hg-reader-view')
export class HGReaderView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .passage {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    h2 {
      margin-top: 0;
      color: var(--hg-primary);
    }
    .word {
      cursor: pointer;
      padding: 2px 4px;
      border-bottom: 1px dotted transparent;
      transition: background 0.2s;
    }
    .word:hover {
      background: var(--hg-bg-base);
      border-bottom-color: var(--hg-accent);
    }
  `;

  @property({ type: String })
  content = "Welcome to HikariGo. This is a special project for learning English. Tap on any word to see its translation.";

  render() {
    const words = this.content.split(' ');
    return html`
      <div class="passage">
        <h2>Daily Reading</h2>
        <div class="text">
          ${words.map(word => html`<span class="word" @click=${() => this._handleWordClick(word)}>${word}</span> `)}
        </div>
      </div>
    `;
  }

  private _handleWordClick(word: string) {
    alert(`You clicked on: ${word.replace(/[^a-zA-Z]/g, '')}`);
  }
}
