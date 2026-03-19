import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../components/hg-base';
import { db } from '../../core/db';
import { createNewCard } from '../vocab/hg-srs-engine';

interface Reading {
  id: string;
  title: string;
  content: string;
}

@customElement('hg-reader-view')
export class HGReaderView extends LitElement {
  private _readingsRequestId = 0;

  @state()
  private _readings: Reading[] = [];

  @state()
  private _currentReading: Reading | null = null;

  @property({ type: String })
  level: 'a1' | 'a2' | 'b1' = 'a1';

  static styles = css`
    :host {
      display: block;
      line-height: 1.8;
      font-size: 1.1rem;
      width: 100%;
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
      padding: 2px 4px;
      border-radius: 4px;
      transition: all 0.2s ease;
      display: inline-block;
      margin: 1px 0;
    }
    .word:hover {
      background-color: var(--hg-primary-light);
      color: var(--hg-primary);
    }
    .controls {
      display: flex;
      gap: 1rem;
      margin-top: 2.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--hg-border-color);
      justify-content: flex-end;
    }
    .reading-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    await this._loadReadings();
  }

  // We need to reload when the level changes
  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('level')) {
      this._loadReadings();
    }
  }

  private async _loadReadings() {
    const requestId = ++this._readingsRequestId;
    this._readings = [];
    this._currentReading = null;

    try {
      const response = await fetch(`./content/levels/${this.level}/readings.json`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch readings`);
      }
      const readings = await response.json();
      if (requestId !== this._readingsRequestId) return;
      this._readings = readings;
    } catch (e) {
      if (requestId !== this._readingsRequestId) return;
      console.error(`Failed to load readings for level ${this.level}`, e);
      this._readings = [];
    }
  }

  render() {
    if (!this._currentReading) {
      return html`
        <div class="reading-list">
          <div style="font-size: 0.8rem; color: var(--hg-primary); font-weight: 700; margin-bottom: 0.5rem">SELECT A READING (${this.level.toUpperCase()})</div>
          ${this._readings.map(r => html`
            <hg-card interactive @click=${() => this._currentReading = r} style="cursor: pointer; padding: 1.25rem">
               <div style="display: flex; justify-content: space-between; align-items: center">
                  <div style="font-weight: 700">${r.title}</div>
                  <div style="color: var(--hg-primary)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
               </div>
            </hg-card>
          `)}
        </div>
      `;
    }

    const tokens = this._currentReading.content.match(/(\w+['']?\w*|[,.!?;:])/g) || [];
    return html`
      <hg-card>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem">
           <div style="font-size: 0.8rem; color: var(--hg-primary); font-weight: 700">LEVEL ${this.level.toUpperCase()} READING</div>
           <hg-button secondary style="width: auto; padding: 0.25rem 0.75rem; font-size: 0.75rem" @click=${() => this._currentReading = null}>Back to List</hg-button>
        </div>
        <h2>${this._currentReading.title}</h2>
        <div class="text">
          ${tokens.map(token => {
            const isWord = /\w/.test(token);
            return isWord
              ? html`<span class="word" @click=${() => this._handleWordClick(token)}>${token}</span> `
              : html`<span>${token} </span>`;
          })}
        </div>
        <div class="controls">
          <hg-button secondary style="width: auto" @click=${this._listen}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            Listen
          </hg-button>
          <!-- <hg-button primary active style="width: auto" @click=${this._addToSRS}>Add to Dictionary</hg-button> -->
        </div>
      </hg-card>
    `;
  }

  private _listen() {
    if (!this._currentReading) return;
    const utterance = new SpeechSynthesisUtterance(this._currentReading.content);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  }

  private _handleWordClick(word: string) {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '');
    this.selectedWord = cleanWord;
    console.log(`Translate: ${cleanWord}`);
  }

  @property({ type: String })
  selectedWord = "";

  private async _addToSRS() {
    if (!this.selectedWord) {
      if (!this._currentReading) return;
      this.selectedWord = this._currentReading.content.split(' ')[0].replace(/[^a-zA-Z]/g, '');
    }

    const card = createNewCard(this.selectedWord, this.level);
    await db.srsCards.add(card);
    alert(`Added "${this.selectedWord}" to your reviews!`);
  }
}
