import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../components/hg-base';

@customElement('hg-reader-view')
export class HGReaderView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.8;
      font-size: 1.1rem;
    }
    .text {
      color: var(--hg-text-primary);
      text-align: justify;
    }
    h2 {
      margin-top: 0;
      color: var(--hg-primary);
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }
    .word {
      cursor: pointer;
      padding: 2px 6px;
      border-radius: 4px;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1px solid transparent;
      display: inline-block;
      margin: 1px 0;
    }
    .word:hover {
      background-color: var(--hg-bg-base);
      box-shadow: var(--hg-shadow-outer);
      color: var(--hg-accent);
      transform: scale(1.05) translateY(-2px);
    }
    .controls {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      justify-content: center;
    }
  `;

  @property({ type: String })
  content = "Welcome to HikariGo. This is a special project for learning English. Tap on any word to see its translation.";

  render() {
    const words = this.content.split(' ');
    return html`
      <hg-card>
        <h2>Daily Reading</h2>
        <div class="text">
          ${words.map(word => html`<span class="word" @click=${() => this._handleWordClick(word)}>${word}</span> `)}
        </div>
        <div class="controls">
          <hg-button primary active .glow=${true}>Add to SRS</hg-button>
          <hg-button>Listen</hg-button>
        </div>
      </hg-card>
    `;
  }

  private _handleWordClick(word: string) {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '');
    console.log(`Translate: ${cleanWord}`);
  }
}
