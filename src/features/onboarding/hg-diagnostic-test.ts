import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { setActiveLevel, addPoints } from '../../core/store';
import { celebrate } from '../../core/confetti';
import { Router } from '../../core/router';
import type { LevelId } from '../../data/types';

interface DiagnosticQ {
  id: number;
  level: LevelId;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanationJa: string;
}

const diagnosticQuestions: DiagnosticQ[] = [
  {
    id: 1,
    level: 'a1',
    prompt: 'The Lord _____ my rock and my fortress.',
    options: ['am', 'is', 'are', 'be'],
    correctIndex: 1,
    explanationJa: '主語「The Lord」は三人称単数のため、現在形のbe動詞は「is」が適切です（詩篇18:2）。'
  },
  {
    id: 2,
    level: 'a2',
    prompt: 'Moses led the people through the desert, and they _____ water from the rock.',
    options: ['drank', 'drinking', 'drinks', 'drunk'],
    correctIndex: 0,
    explanationJa: '過去の一回的な出来事を表すため、動詞drinkの過去形「drank」が入ります。'
  },
  {
    id: 3,
    level: 'b1',
    prompt: 'Blessed are those _____ hunger and thirst for righteousness.',
    options: ['which', 'who', 'whose', 'whom'],
    correctIndex: 1,
    explanationJa: '先行詞「those」（人々）を受ける関係代名詞主格は「who」です（マタイ5:6）。'
  },
  {
    id: 4,
    level: 'b2',
    prompt: 'Hardly _____ the dawn appeared when the believers gathered to pray.',
    options: ['had', 'did', 'was', 'has'],
    correctIndex: 0,
    explanationJa: '否定副詞「Hardly」が文頭に置かれた場合の倒置構文「Hardly had + S + p.p. when...」です。'
  },
  {
    id: 5,
    level: 'c1',
    prompt: 'Take heed _____ any root of bitterness spring up and cause trouble.',
    options: ['lest', 'unless', 'though', 'whereas'],
    correctIndex: 0,
    explanationJa: '「〜しないように」を表す古格の接続詞「lest + S + (should) 原形」です（ヘブル12:15）。'
  },
  {
    id: 6,
    level: 'c2',
    prompt: 'Such was his wisdom that even kings marvelled, _____ they heard his counsel.',
    options: ['whensoever', 'howsoever', 'whatsoever', 'whosoever'],
    correctIndex: 0,
    explanationJa: '「〜するときはいつでも」を表す格調高い古典複合副詞「whensoever」が適切です。'
  }
];

@customElement('hg-diagnostic-test')
export class HGDiagnosticTest extends LitElement {
  static override properties = {
    _currentIdx: { state: true },
    _answers: { state: true },
    _isFinished: { state: true },
    _recommendedLevel: { state: true }
  };

  @state()
  private _currentIdx: number = 0;

  @state()
  private _answers: Record<number, number> = {};

  @state()
  private _isFinished: boolean = false;

  @state()
  private _recommendedLevel: LevelId = 'a1';

  private _selectAnswer(optIdx: number) {
    this._answers = { ...this._answers, [this._currentIdx]: optIdx };
    if (this._currentIdx + 1 < diagnosticQuestions.length) {
      this._currentIdx++;
    } else {
      this._finishTest();
    }
    this.requestUpdate();
  }

  private _finishTest() {
    let score = 0;
    diagnosticQuestions.forEach((q, idx) => {
      if (this._answers[idx] === q.correctIndex) {
        score++;
      }
    });

    if (score <= 1) this._recommendedLevel = 'a1';
    else if (score === 2) this._recommendedLevel = 'a2';
    else if (score === 3) this._recommendedLevel = 'b1';
    else if (score === 4) this._recommendedLevel = 'b2';
    else if (score === 5) this._recommendedLevel = 'c1';
    else this._recommendedLevel = 'c2';

    this._isFinished = true;
    celebrate();
    addPoints(score * 15);
    setActiveLevel(this._recommendedLevel);
    this.requestUpdate();
  }

  private _startCurriculum() {
    setActiveLevel(this._recommendedLevel);
    Router.navigate('#lessons');
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 860px;
      margin: 0 auto;
    }
    .header-banner {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.75rem 2.5rem;
      margin-bottom: 2.5rem;
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
      font-size: 1.95rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      margin-bottom: 0.75rem;
    }
    .q-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.5rem 3rem;
    }
    .q-meta {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--muted, #847C9F);
      margin-bottom: 1rem;
    }
    .q-prompt {
      font-size: 1.3rem;
      font-weight: 800;
      line-height: 1.6;
      color: var(--ink, #231C38);
      margin-bottom: 2rem;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.85rem;
    }
    .opt-btn {
      padding: 1.1rem 1.5rem;
      border-radius: var(--radius-md, 20px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--ink, #231C38);
      cursor: pointer;
      text-align: left;
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: all 0.16s var(--ease-spring);
    }
    .opt-btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-2px);
    }
    .result-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 3.5rem 2.5rem;
      text-align: center;
    }
    .level-badge-big {
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      margin: 1.5rem 0;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      padding: 0.85rem 2rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 1rem;
      font-weight: 800;
      cursor: pointer;
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      box-shadow: 0 4px 0 var(--theme-lavender-deep, #4E3E96);
      transition: all 0.16s var(--ease-spring);
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 0 var(--theme-lavender-deep, #4E3E96);
    }
  `;

  override render() {
    if (this._isFinished) {
      return html`
        <div class="result-card">
          <span class="badge">診断完了</span>
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--ink);">
            おすすめの学習開始レベル
          </h2>
          <div class="level-badge-big">
            Level ${this._recommendedLevel.toUpperCase()}
          </div>
          <p style="color: var(--ink-secondary); font-size: 1.05rem; max-width: 500px; margin: 0 auto 2.5rem;">
            あなたの回答傾向に基づき、最適なシラバスを設定しました。ここから段階的に実力を伸ばしていきましょう。
          </p>
          <button class="btn" @click=${() => this._startCurriculum()}>
            Level ${this._recommendedLevel.toUpperCase()} の学習を開始する
          </button>
        </div>
      `;
    }

    const q = diagnosticQuestions[this._currentIdx];

    return html`
      <div class="header-banner">
        <span class="badge">5分間クイック診断 (Diagnostic Level Finder)</span>
        <h1>スタートレベル診断テスト</h1>
        <p style="color: var(--ink-secondary); font-size: 1rem;">
          A1からC2までの代表的な文法項目全6問に解答することで、あなたに最適な学習レベルを判定します。
        </p>
      </div>

      <div class="q-card">
        <div class="q-meta">質問 ${this._currentIdx + 1} / ${diagnosticQuestions.length}</div>
        <div class="q-prompt">${q.prompt}</div>

        <div class="options-grid">
          ${q.options.map((opt, optIdx) => html`
            <button class="opt-btn" @click=${() => this._selectAnswer(optIdx)}>
              ${opt}
            </button>
          `)}
        </div>
      </div>
    `;
  }
}
