import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { LevelId } from '../../data/types';
import { allLevelsData, levelOrder } from '../../data';
import { audioEngine } from '../../core/audio';
import { db } from '../../core/db';
import { addPoints } from '../../core/store';
import { celebrate } from '../../core/confetti';

interface FlashcardItem {
  id: string;
  word: string;
  level: LevelId;
  phoneticIpa: string;
  partOfSpeech: string;
  japaneseMeaning: string;
  exampleSentence: string;
  exampleJapanese: string;
  scriptureReference: string;
}

@customElement('hg-flashcards-view')
export class HGFlashcardsView extends LitElement {
  static override properties = {
    activeLevel: { type: String },
    selectedLevel: { type: String },
    _cards: { state: true },
    _currentIndex: { state: true },
    _isFlipped: { state: true },
    _reviewedCount: { state: true },
    _sessionFinished: { state: true }
  };

  @property({ type: String })
  activeLevel: string = 'all';

  @property({ type: String })
  selectedLevel: string = 'all';

  @state()
  private _cards: FlashcardItem[] = [];

  @state()
  private _currentIndex: number = 0;

  @state()
  private _isFlipped: boolean = false;

  @state()
  private _reviewedCount: number = 0;

  @state()
  private _sessionFinished: boolean = false;

  private _handleKey = (e: KeyboardEvent) => {
    // Avoid capturing inside inputs
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
    if (e.code === 'Space') {
      e.preventDefault();
      this._flip();
    } else if (e.key === '1') {
      this._answerSRS('again');
    } else if (e.key === '2') {
      this._answerSRS('hard');
    } else if (e.key === '3') {
      this._answerSRS('good');
    } else if (e.key === '4') {
      this._answerSRS('easy');
    }
  };

  override connectedCallback() {
    super.connectedCallback();
    if (this.activeLevel && this.activeLevel !== 'all') {
      this.selectedLevel = this.activeLevel;
    }
    this._loadCards();
    window.addEventListener('keydown', this._handleKey);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._handleKey);
  }

  override willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('activeLevel') && this.activeLevel) {
      if (this.activeLevel !== this.selectedLevel) {
        this.selectedLevel = this.activeLevel;
        this._loadCards();
      }
    }
  }

  private _loadCards() {
    const list: FlashcardItem[] = [];
    const levelsToInclude: LevelId[] = (this.selectedLevel === 'all' || !this.selectedLevel)
      ? levelOrder
      : [this.selectedLevel as LevelId];

    for (const lvl of levelsToInclude) {
      const data = allLevelsData[lvl];
      if (data) {
        for (const v of data.vocabulary) {
          list.push({ ...v });
        }
      }
    }

    this._cards = list.sort(() => Math.random() - 0.5);
    this._currentIndex = 0;
    this._isFlipped = false;
    this._reviewedCount = 0;
    this._sessionFinished = false;
    this.requestUpdate();
  }

  private _flip() {
    this._isFlipped = !this._isFlipped;
    this.requestUpdate();
  }

  private async _answerSRS(quality: 'again' | 'hard' | 'good' | 'easy') {
    const card = this._cards[this._currentIndex];
    if (!card) return;

    let interval = 1;
    if (quality === 'again') interval = 1;
    else if (quality === 'hard') interval = 2;
    else if (quality === 'good') interval = 4;
    else if (quality === 'easy') interval = 7;

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + interval);

    try {
      await db.srsCards.add({
        itemId: card.id,
        level: card.level,
        type: 'vocab',
        front: card.word,
        back: card.japaneseMeaning,
        interval,
        repetition: 1,
        easeFactor: 2.5,
        nextReview: nextDate,
        lastReviewed: new Date()
      });
    } catch (e) {
      // ignore db errors
    }

    addPoints(quality === 'easy' ? 10 : quality === 'good' ? 5 : 2);
    this._reviewedCount++;

    if (this._currentIndex + 1 < this._cards.length) {
      this._isFlipped = false;
      this._currentIndex++;
    } else {
      this._sessionFinished = true;
      celebrate();
    }
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 840px;
      margin: 0 auto;
    }
    .flashcard-header {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.25rem 2.5rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.25rem;
    }
    .header-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    h1 {
      font-size: 1.85rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      letter-spacing: -0.02em;
    }
    .header-sub {
      font-size: 0.95rem;
      color: var(--ink-secondary, #564F70);
    }
    .level-select-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-pill, 9999px);
      padding: 0.45rem 1rem;
    }
    .level-select-pill select {
      background: transparent;
      border: none;
      font-weight: 800;
      font-size: 0.88rem;
      color: var(--theme-lavender-deep, #4E3E96);
      outline: none;
      cursor: pointer;
    }
    /* Progress Bar */
    .progress-bar-wrap {
      width: 100%;
      height: 8px;
      background: var(--card-subtle, #F4F1FD);
      border-radius: 9999px;
      margin-bottom: 2.25rem;
      overflow: hidden;
      border: 1px solid var(--card-border, #DDD6F7);
    }
    .progress-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--theme-lavender, #7C66DC), #9F8BF0);
      border-radius: 9999px;
      transition: width 0.3s ease;
    }
    /* 3D Flip Card */
    .card-scene {
      perspective: 1200px;
      width: 100%;
      min-height: 380px;
      margin-bottom: 2rem;
      cursor: pointer;
    }
    .card-inner {
      width: 100%;
      height: 100%;
      min-height: 380px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-inner.flipped {
      transform: rotateY(180deg);
    }
    .card-face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border-radius: var(--radius-xl, 36px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      box-shadow: var(--bubble-tactile-card);
      background: var(--card-bg, #FFFFFF);
      padding: 2.5rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card-back {
      transform: rotateY(180deg);
      background: #FAF8FF;
    }
    .card-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .level-tag {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1.5px solid var(--card-border, #DDD6F7);
      padding: 0.25rem 0.8rem;
      border-radius: var(--radius-pill, 9999px);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .card-center {
      text-align: center;
      margin: auto 0;
    }
    .big-word {
      font-size: 2.8rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }
    .ipa-sub {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      color: var(--muted, #847C9F);
      font-weight: 600;
    }
    .tap-hint {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--subtle, #B5AED0);
      margin-top: 1rem;
    }
    .meaning-big {
      font-size: 1.85rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      margin-bottom: 1rem;
    }
    .ex-box {
      background: var(--card-subtle, #F4F1FD);
      border: 1px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-md, 20px);
      padding: 1.1rem 1.4rem;
      text-align: left;
    }
    .ex-en {
      font-weight: 700;
      font-size: 0.98rem;
      color: var(--ink, #231C38);
      margin-bottom: 0.35rem;
      line-height: 1.5;
    }
    .ex-ja {
      color: var(--ink-secondary, #564F70);
      font-size: 0.88rem;
    }
    .card-bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
    }
    /* SRS Action Buttons */
    .srs-buttons-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
    .srs-btn {
      padding: 1rem 0.75rem;
      border-radius: var(--radius-md, 20px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      font-size: 0.95rem;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      transition: all 0.12s ease;
      user-select: none;
    }
    .srs-btn:hover {
      transform: translateY(-2px);
    }
    .srs-btn-time {
      font-size: 0.74rem;
      font-weight: 600;
      opacity: 0.85;
    }
    .srs-btn-again {
      background: #FEF2F2;
      border-color: #FECACA;
      color: #DC2626;
      box-shadow: 0 3px 0 #FCA5A5;
    }
    .srs-btn-hard {
      background: #FFFBEB;
      border-color: #FDE68A;
      color: #D97706;
      box-shadow: 0 3px 0 #FCD34D;
    }
    .srs-btn-good {
      background: #EFF6FF;
      border-color: #BFDBFE;
      color: #1D4ED8;
      box-shadow: 0 3px 0 #93C5FD;
    }
    .srs-btn-easy {
      background: #ECFDF5;
      border-color: #A7F3D0;
      color: #047857;
      box-shadow: 0 3px 0 #6EE7B7;
    }
    .btn-audio {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--theme-lavender, #7C66DC);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: all 0.12s ease;
    }
    .btn-audio:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      transform: translateY(-1px);
    }
    .btn-audio svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
    .finished-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 3.5rem 2.5rem;
      text-align: center;
    }
    .finished-icon {
      width: 64px;
      height: 64px;
      border-radius: 20px;
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender, #7C66DC);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }
    .finished-icon svg {
      width: 32px;
      height: 32px;
      stroke: currentColor;
      fill: none;
      stroke-width: 2.5;
    }
    @media (max-width: 640px) {
      .card-face {
        padding: 2rem 1.5rem;
      }
      .big-word {
        font-size: 2.2rem;
      }
      .srs-buttons-row {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  override render() {
    if (this._cards.length === 0) {
      return html`
        <div style="background: #FFFFFF; border-radius: 28px; padding: 3rem; text-align: center; border: 1.5px solid var(--card-border);">
          <p style="font-size: 1.1rem; font-weight: 700; color: var(--ink);">該当レベルの単語を読み込んでいます...</p>
        </div>
      `;
    }

    if (this._sessionFinished) {
      return html`
        <div class="finished-card">
          <div class="finished-icon">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style="font-size: 1.9rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--ink);">
            本セッション完了
          </h2>
          <p style="font-size: 1.05rem; color: var(--ink-secondary); margin-bottom: 2rem;">
            ${this._reviewedCount}語の復習を完了し、習得ポイントが加算されました。
          </p>
          <button class="srs-btn srs-btn-good" style="margin: 0 auto; min-width: 180px; padding: 0.85rem 1.75rem;" @click=${() => this._loadCards()}>
            もう一度学習する
          </button>
        </div>
      `;
    }

    const currentCard = this._cards[this._currentIndex];
    const progressPercent = ((this._currentIndex) / this._cards.length) * 100;

    return html`
      <div class="flashcard-header">
        <div class="header-info">
          <h1>語彙フラッシュカード (SRS)</h1>
          <div class="header-sub">カードをタップして裏返し、記憶定着度を選択してください</div>
        </div>

        <div class="level-select-pill">
          <span style="font-size: 0.84rem; font-weight: 700; color: var(--muted);">範囲:</span>
          <select .value=${this.selectedLevel} @change=${(e: Event) => {
            this.selectedLevel = (e.target as HTMLSelectElement).value;
            this._loadCards();
          }}>
            <option value="all">全レベル (A1–C2)</option>
            <option value="a1">A1 (IELTS 3.0–3.5)</option>
            <option value="a2">A2 (IELTS 3.5–4.0)</option>
            <option value="b1">B1 (IELTS 4.0–5.0)</option>
            <option value="b2">B2 (IELTS 5.5–6.5)</option>
            <option value="c1">C1 (IELTS 7.0–8.0)</option>
            <option value="c2">C2 (IELTS 8.5–9.0)</option>
          </select>
        </div>
      </div>

      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="card-scene" @click=${this._flip}>
        <div class="card-inner ${this._isFlipped ? 'flipped' : ''}">
          <!-- FRONT -->
          <div class="card-face card-front">
            <div class="card-top-bar">
              <span class="level-tag">${currentCard.level.toUpperCase()}</span>
              <button class="btn-audio" @click=${(e: Event) => {
                e.stopPropagation();
                audioEngine.speak(currentCard.word);
              }} title="音声読み上げ">
                <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </button>
            </div>

            <div class="card-center">
              <div class="big-word">${currentCard.word}</div>
              <div class="ipa-sub">${currentCard.phoneticIpa}</div>
              <div class="tap-hint">タップで和訳を表示</div>
            </div>

            <div class="card-bottom-bar">
              <span>進捗: ${this._currentIndex + 1} / ${this._cards.length}</span>
              <span>${currentCard.partOfSpeech}</span>
            </div>
          </div>

          <!-- BACK -->
          <div class="card-face card-back">
            <div class="card-top-bar">
              <span class="level-tag">${currentCard.level.toUpperCase()}</span>
              <button class="btn-audio" @click=${(e: Event) => {
                e.stopPropagation();
                audioEngine.speak(currentCard.exampleSentence);
              }} title="例文の音声読み上げ">
                <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </button>
            </div>

            <div class="card-center">
              <div class="meaning-big">${currentCard.japaneseMeaning}</div>
              <div class="ex-box">
                <div class="ex-en">"${currentCard.exampleSentence}"</div>
                <div class="ex-ja">${currentCard.exampleJapanese}</div>
              </div>
            </div>

            <div class="card-bottom-bar">
              <span>出典: ${currentCard.scriptureReference}</span>
              <span style="color: var(--theme-lavender); font-weight: 800;">記憶度を選択 ▼</span>
            </div>
          </div>
        </div>
      </div>

      <!-- SRS RATING BUTTONS -->
      <div class="srs-buttons-row">
        <button class="srs-btn srs-btn-again" @click=${() => this._answerSRS('again')}>
          <span>もう一度</span>
          <span class="srs-btn-time">1日後</span>
        </button>
        <button class="srs-btn srs-btn-hard" @click=${() => this._answerSRS('hard')}>
          <span>難しい</span>
          <span class="srs-btn-time">2日後</span>
        </button>
        <button class="srs-btn srs-btn-good" @click=${() => this._answerSRS('good')}>
          <span>普通</span>
          <span class="srs-btn-time">4日後</span>
        </button>
        <button class="srs-btn srs-btn-easy" @click=${() => this._answerSRS('easy')}>
          <span>簡単</span>
          <span class="srs-btn-time">7日後</span>
        </button>
      </div>
    `;
  }
}
