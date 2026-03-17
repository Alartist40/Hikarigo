import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { db, SRSCard } from '../../core/db';
import { updateSRSCard } from './hg-srs-engine';
import '../../components/hg-base';

@customElement('hg-review-view')
export class HGReviewView extends LitElement {
  @state()
  private _cards: SRSCard[] = [];

  @state()
  private _currentIndex = 0;

  @state()
  private _showAnswer = false;

  @state()
  private _loading = true;

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .review-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .flashcard {
      width: 100%;
      min-height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      perspective: 1000px;
    }
    .word-main {
      font-size: 3rem;
      font-weight: 800;
      color: var(--hg-primary);
      margin-bottom: 1rem;
    }
    .word-sub {
      font-size: 1.5rem;
      color: var(--hg-text-secondary);
      opacity: 0.8;
    }
    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      width: 100%;
    }
    .quality-buttons {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      justify-content: space-between;
    }
    .progress {
      width: 100%;
      height: 6px;
      background: var(--hg-shadow-inner);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 2rem;
    }
    .progress-bar {
      height: 100%;
      background: var(--hg-primary);
      transition: width 0.3s ease;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    await this._loadCards();
  }

  private async _loadCards() {
    this._loading = true;
    const now = new Date();
    this._cards = await db.srsCards
      .where('nextReview')
      .below(now)
      .toArray();
    this._loading = false;
  }

  render() {
    if (this._loading) return html`<p>Loading reviews...</p>`;
    if (this._cards.length === 0) return html`
      <hg-card>
        <p style="text-align: center">All caught up! No reviews due right now.</p>
      </hg-card>
    `;

    const card = this._cards[this._currentIndex];
    const progress = ((this._currentIndex) / this._cards.length) * 100;

    return html`
      <div class="review-container">
        <div class="progress">
          <div class="progress-bar" style="width: ${progress}%"></div>
        </div>

        <hg-card class="flashcard">
          <div class="word-main">${card.wordId}</div>
          ${this._showAnswer ? html`<div class="word-sub">Meaning goes here...</div>` : ''}
        </hg-card>

        <div class="controls">
          ${!this._showAnswer ?
            html`<hg-button primary active .glow=${true} @click=${() => this._showAnswer = true} style="width: 100%; justify-content: center">Show Answer</hg-button>` :
            html`
              <div class="quality-buttons">
                <hg-button @click=${() => this._rate(1)}>Again</hg-button>
                <hg-button @click=${() => this._rate(3)}>Hard</hg-button>
                <hg-button @click=${() => this._rate(4)}>Good</hg-button>
                <hg-button @click=${() => this._rate(5)}>Easy</hg-button>
              </div>
            `
          }
        </div>

        <p style="color: var(--hg-text-secondary); font-size: 0.8rem">${this._currentIndex + 1} of ${this._cards.length} cards</p>
      </div>
    `;
  }

  private async _rate(quality: number) {
    const card = this._cards[this._currentIndex];
    const updated = updateSRSCard(card, quality);
    await db.srsCards.put(updated);

    this._showAnswer = false;
    if (this._currentIndex < this._cards.length - 1) {
      this._currentIndex++;
    } else {
      await this._loadCards();
      this._currentIndex = 0;
    }
  }
}

@customElement('hg-vocab-view')
export class HGVocabView extends LitElement {
  @state()
  private _cards: SRSCard[] = [];

  static styles = css`
    .vocab-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .vocab-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .word {
      font-weight: 700;
      color: var(--hg-primary);
    }
    .meta {
      font-size: 0.8rem;
      color: var(--hg-text-secondary);
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    this._cards = await db.srsCards.toArray();
  }

  render() {
    return html`
      <div class="vocab-list">
        ${this._cards.length === 0 ? html`<p>No words in your collection yet. Start reading and add some!</p>` : ''}
        ${this._cards.map(card => html`
          <hg-card>
            <div class="vocab-item">
              <div>
                <div class="word">${card.wordId}</div>
                <div class="meta">Level: ${card.level.toUpperCase()}</div>
              </div>
              <div class="meta" style="text-align: right">
                Next: ${card.nextReview.toLocaleDateString()}<br>
                Ease: ${card.easeFactor.toFixed(2)}
              </div>
            </div>
          </hg-card>
        `)}
      </div>
    `;
  }
}
