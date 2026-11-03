import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { audioEngine } from '../../core/audio';
import { addPoints } from '../../core/store';
import { celebrate } from '../../core/confetti';

interface ScrambleVerse {
  id: string;
  level: string;
  reference: string;
  japanese: string;
  words: string[];
}

const scrambleLibrary: ScrambleVerse[] = [
  {
    id: 'scramble-1',
    level: 'A1',
    reference: '1 John 1:5',
    japanese: '神は光であり、神にはいかなる暗やみもありません。',
    words: ['God', 'is', 'light,', 'and', 'in', 'Him', 'is', 'no', 'darkness', 'at', 'all.']
  },
  {
    id: 'scramble-2',
    level: 'A1',
    reference: 'Psalm 23:1',
    japanese: '主は私の羊飼い。私には乏しいことがありません。',
    words: ['The', 'Lord', 'is', 'my', 'shepherd;', 'I', 'shall', 'not', 'want.']
  },
  {
    id: 'scramble-3',
    level: 'A2',
    reference: 'Matthew 5:14',
    japanese: 'あなたがたは世の光です。山の上にある町は隠れることができません。',
    words: ['You', 'are', 'the', 'light', 'of', 'the', 'world.', 'A', 'city', 'set', 'on', 'a', 'hill', 'cannot', 'be', 'hidden.']
  },
  {
    id: 'scramble-4',
    level: 'B1',
    reference: 'John 1:1',
    japanese: '初めに言葉があった。言葉は神とともにあった。言葉は神であった。',
    words: ['In', 'the', 'beginning', 'was', 'the', 'Word,', 'and', 'the', 'Word', 'was', 'with', 'God.']
  },
  {
    id: 'scramble-5',
    level: 'B2',
    reference: '1 Corinthians 13:13',
    japanese: '信仰と希望と愛、これら三つはいつまでも残る。その中で最も大いなるものは愛である。',
    words: ['Now', 'faith,', 'hope,', 'and', 'love', 'abide,', 'these', 'three;', 'but', 'the', 'greatest', 'of', 'these', 'is', 'love.']
  },
  {
    id: 'scramble-6',
    level: 'C1',
    reference: 'Isaiah 40:31',
    japanese: 'しかし主を待ち望む者は新しく力を得、鷲のように翼をかって上ることができる。',
    words: ['They', 'who', 'wait', 'for', 'the', 'Lord', 'shall', 'renew', 'their', 'strength;', 'they', 'shall', 'mount', 'up', 'with', 'wings', 'like', 'eagles.']
  }
];

@customElement('hg-sentence-scramble')
export class HGSentenceScramble extends LitElement {
  static override properties = {
    _verseIndex: { state: true },
    _availablePills: { state: true },
    _selectedPills: { state: true },
    _isCompleted: { state: true }
  };

  @state()
  private _verseIndex: number = 0;

  @state()
  private _availablePills: Array<{ id: number; text: string }> = [];

  @state()
  private _selectedPills: Array<{ id: number; text: string }> = [];

  @state()
  private _isCompleted: boolean = false;

  override connectedCallback() {
    super.connectedCallback();
    this._loadVerse(0);
  }

  private _loadVerse(idx: number) {
    this._verseIndex = idx;
    const v = scrambleLibrary[idx];
    const pills = v.words.map((w, i) => ({ id: i, text: w }));
    // Shuffle
    this._availablePills = pills.sort(() => Math.random() - 0.5);
    this._selectedPills = [];
    this._isCompleted = false;
    this.requestUpdate();
  }

  private _selectWord(pill: { id: number; text: string }) {
    if (this._isCompleted) return;
    audioEngine.speak(pill.text);
    this._availablePills = this._availablePills.filter(p => p.id !== pill.id);
    this._selectedPills = [...this._selectedPills, pill];

    const currentVerse = scrambleLibrary[this._verseIndex];
    if (this._selectedPills.length === currentVerse.words.length) {
      const formed = this._selectedPills.map(p => p.text).join(' ');
      const target = currentVerse.words.join(' ');
      if (formed === target) {
        this._isCompleted = true;
        celebrate();
        addPoints(15);
        audioEngine.speak(target);
      }
    }
    this.requestUpdate();
  }

  private _unselectWord(pill: { id: number; text: string }) {
    if (this._isCompleted) return;
    this._selectedPills = this._selectedPills.filter(p => p.id !== pill.id);
    this._availablePills = [...this._availablePills, pill];
    this.requestUpdate();
  }

  private _resetCurrent() {
    this._loadVerse(this._verseIndex);
  }

  private _nextVerse() {
    const next = (this._verseIndex + 1) % scrambleLibrary.length;
    this._loadVerse(next);
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
    .target-box {
      background: var(--card-subtle, #F4F1FD);
      border-radius: var(--radius-lg, 28px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      padding: 1.75rem 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    .target-ja {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      margin-bottom: 0.4rem;
    }
    .target-ref {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--theme-lavender-deep, #4E3E96);
    }
    .drop-zone {
      min-height: 120px;
      background: var(--card-bg, #FFFFFF);
      border: 2px dashed var(--theme-lavender, #7C66DC);
      border-radius: var(--radius-lg, 28px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }
    .drop-zone.completed {
      border-style: solid;
      border-color: #10B981;
      background: #ECFDF5;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      padding: 0.65rem 1.25rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      font-size: 1rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      cursor: pointer;
      box-shadow: 0 3px 0 var(--card-border, #DDD6F7);
      transition: all 0.16s var(--ease-spring);
      user-select: none;
    }
    .pill:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-2px);
    }
    .pill:active {
      transform: translateY(2px) scale(0.96);
      box-shadow: 0 0 0 transparent;
    }
    .pill-selected {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 3px 0 var(--theme-lavender-deep, #4E3E96);
    }
    .pills-pool {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 2rem;
      min-height: 80px;
    }
    .actions-row {
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
    const v = scrambleLibrary[this._verseIndex];

    return html`
      <div class="header-banner">
        <span class="badge">語順並べ替えパズル (Sentence Scramble)</span>
        <h1>聖書英文・語順構築演習</h1>
        <p style="color: var(--ink-secondary); font-size: 1rem;">
          下の単語ブロックを正しい語順でタップし、格調高い英文を完成させてください。
        </p>
      </div>

      <div class="target-box">
        <div class="target-ja">${v.japanese}</div>
        <div class="target-ref">${v.reference} (${v.level})</div>
      </div>

      <div class="drop-zone ${this._isCompleted ? 'completed' : ''}">
        ${this._selectedPills.length === 0 ? html`
          <span style="color: var(--muted); font-weight: 700;">下の単語をタップして文章を組み立ててください</span>
        ` : this._selectedPills.map(p => html`
          <div class="pill pill-selected" @click=${() => this._unselectWord(p)}>
            ${p.text}
          </div>
        `)}
      </div>

      <div class="pills-pool">
        ${this._availablePills.map(p => html`
          <div class="pill" @click=${() => this._selectWord(p)}>
            ${p.text}
          </div>
        `)}
      </div>

      <div class="actions-row">
        <button class="btn" @click=${() => this._resetCurrent()}>最初からやり直す</button>
        ${this._isCompleted ? html`
          <button class="btn btn-lavender" @click=${() => this._nextVerse()}>次の問題へ進む (正解！+15pt)</button>
        ` : ''}
      </div>
    `;
  }
}
