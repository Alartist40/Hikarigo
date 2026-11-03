import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { audioEngine } from '../../core/audio';
import { addPoints } from '../../core/store';
import { celebrate } from '../../core/confetti';

interface TypingVerse {
  id: string;
  reference: string;
  level: string;
  text: string;
  japanese: string;
}

const typingVerses: TypingVerse[] = [
  {
    id: 'type-1',
    reference: 'Genesis 1:3',
    level: 'A1',
    text: 'And God said, Let there be light, and there was light.',
    japanese: '神は言われた。「光あれ。」こうして光があった。'
  },
  {
    id: 'type-2',
    reference: 'Psalm 23:1',
    level: 'A1',
    text: 'The Lord is my shepherd; I shall not want.',
    japanese: '主は私の羊飼い。私には乏しいことがありません。'
  },
  {
    id: 'type-3',
    reference: 'Matthew 6:33',
    level: 'A2',
    text: 'Seek first the kingdom of God and His righteousness.',
    japanese: 'まず神の国と神の義を求めなさい。'
  },
  {
    id: 'type-4',
    reference: 'John 14:6',
    level: 'B1',
    text: 'I am the way, and the truth, and the life.',
    japanese: 'わたしが道であり、真理であり、いのちなのです。'
  },
  {
    id: 'type-5',
    reference: 'Romans 8:28',
    level: 'B2',
    text: 'All things work together for good to them that love God.',
    japanese: '神を愛する人々のためには、すべてのことがともに働いて益となる。'
  },
  {
    id: 'type-6',
    reference: 'Isaiah 40:8',
    level: 'C1',
    text: 'The grass withers, the flower fades, but the word of our God will stand forever.',
    japanese: '草は枯れ、花はしぼむ。だが、私たちの神の言葉はとこしえに立つ。'
  }
];

@customElement('hg-typing-practice')
export class HGTypingPractice extends LitElement {
  static override properties = {
    _verseIndex: { state: true },
    _userInput: { state: true },
    _startTime: { state: true },
    _wpm: { state: true },
    _accuracy: { state: true },
    _isFinished: { state: true }
  };

  @state()
  private _verseIndex: number = 0;

  @state()
  private _userInput: string = '';

  @state()
  private _startTime: number = 0;

  @state()
  private _wpm: number = 0;

  @state()
  private _accuracy: number = 100;

  @state()
  private _isFinished: boolean = false;

  private _onInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    if (this._startTime === 0 && val.length > 0) {
      this._startTime = Date.now();
    }
    this._userInput = val;

    const target = typingVerses[this._verseIndex].text;

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === target[i]) {
        correctChars++;
      }
    }
    this._accuracy = val.length > 0 ? Math.round((correctChars / val.length) * 100) : 100;

    // Calculate WPM
    if (this._startTime > 0) {
      const minutes = (Date.now() - this._startTime) / 60000;
      const words = val.trim().split(/\s+/).length;
      this._wpm = minutes > 0 ? Math.round(words / minutes) : 0;
    }

    // Check completion
    if (val === target) {
      this._isFinished = true;
      celebrate();
      addPoints(20);
      audioEngine.speak(target);
    }
    this.requestUpdate();
  }

  private _nextVerse() {
    this._verseIndex = (this._verseIndex + 1) % typingVerses.length;
    this._userInput = '';
    this._startTime = 0;
    this._wpm = 0;
    this._accuracy = 100;
    this._isFinished = false;
    this.requestUpdate();
  }

  private _resetCurrent() {
    this._userInput = '';
    this._startTime = 0;
    this._wpm = 0;
    this._accuracy = 100;
    this._isFinished = false;
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .header-banner {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.5rem 2.5rem;
      margin-bottom: 2rem;
    }
    .badge {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1.5px solid var(--card-border, #DDD6F7);
      padding: 0.3rem 0.85rem;
      border-radius: var(--radius-pill, 9999px);
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.85rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      margin-bottom: 0.5rem;
    }
    .stats-row {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .stat-card {
      flex: 1;
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-md, 20px);
      padding: 1.1rem;
      text-align: center;
      box-shadow: var(--bubble-shadow-sm);
    }
    .stat-val {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
    }
    .stat-lbl {
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
      margin-top: 0.2rem;
    }
    .target-display {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2rem 2.5rem;
      margin-bottom: 1.5rem;
    }
    .char-correct {
      color: var(--theme-lavender-deep, #4E3E96);
      font-weight: 700;
    }
    .char-wrong {
      color: #DC2626;
      background: #FEE2E2;
      border-radius: 3px;
    }
    .char-current {
      border-bottom: 2px solid var(--theme-lavender, #7C66DC);
    }
    .target-text {
      font-family: var(--font-serif);
      font-size: 1.4rem;
      line-height: 1.9;
      letter-spacing: 0.02em;
      color: var(--muted, #847C9F);
      margin-bottom: 1.25rem;
    }
    .target-ja {
      font-size: 0.95rem;
      color: var(--ink-secondary, #564F70);
      background: var(--card-subtle, #F4F1FD);
      padding: 0.75rem 1.25rem;
      border-radius: var(--radius-md, 20px);
      border-left: 3px solid var(--theme-lavender, #7C66DC);
    }
    .input-box {
      width: 100%;
      padding: 1.2rem 1.6rem;
      font-size: 1.2rem;
      font-family: var(--font-serif);
      border-radius: var(--radius-lg, 28px);
      border: 2px solid var(--theme-lavender, #7C66DC);
      background: var(--card-bg, #FFFFFF);
      color: var(--ink, #231C38);
      outline: none;
      box-shadow: 0 4px 14px rgba(124, 102, 220, 0.12);
      box-sizing: border-box;
      margin-bottom: 1.5rem;
      transition: border-color 0.2s ease;
    }
    .input-box:focus {
      border-color: var(--theme-lavender-deep, #4E3E96);
    }
    .actions-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      padding: 0.75rem 1.6rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      font-size: 0.95rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.16s var(--ease-spring);
    }
    .btn-lavender {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 3px 0 var(--theme-lavender-deep, #4E3E96);
    }
  `;

  override render() {
    const v = typingVerses[this._verseIndex];
    const target = v.text;

    return html`
      <div class="header-banner">
        <span class="badge">聖書英文タイピング (Scripture Typing)</span>
        <h1>名句タイピング・綴り定着演習</h1>
        <p style="color: var(--ink-secondary); font-size: 1rem;">
          聖書と古典の名文をタイピングしながら、英単語の綴り・大文字小文字・構文のリズムを体得します。
        </p>
      </div>

      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-val">${this._wpm}</div>
          <div class="stat-lbl">速度 (WPM)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${this._accuracy}%</div>
          <div class="stat-lbl">正確性 (Accuracy)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${v.level}</div>
          <div class="stat-lbl">${v.reference}</div>
        </div>
      </div>

      <div class="target-display">
        <div class="target-text">
          ${target.split('').map((char, i) => {
            let cls = '';
            if (i < this._userInput.length) {
              cls = this._userInput[i] === char ? 'char-correct' : 'char-wrong';
            } else if (i === this._userInput.length) {
              cls = 'char-current';
            }
            return html`<span class="${cls}">${char}</span>`;
          })}
        </div>
        <div class="target-ja">${v.japanese}</div>
      </div>

      <input 
        class="input-box" 
        type="text" 
        placeholder="上の英文をそのまま入力してください..." 
        .value=${this._userInput}
        @input=${this._onInput}
        ?disabled=${this._isFinished}
        autofocus
      />

      <div class="actions-bar">
        <button class="btn" @click=${() => this._resetCurrent()}>やり直す</button>
        ${this._isFinished ? html`
          <button class="btn btn-lavender" @click=${() => this._nextVerse()}>
            合格！次の節へ進む (+20pt)
          </button>
        ` : ''}
      </div>
    `;
  }
}
