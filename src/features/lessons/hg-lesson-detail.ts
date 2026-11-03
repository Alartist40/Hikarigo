import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { LevelId, LevelData } from '../../data/types';
import { allLevelsData } from '../../data';
import { audioEngine } from '../../core/audio';
import { markLessonCompleted, toggleBookmark, store } from '../../core/store';
import { Router } from '../../core/router';
import { celebrate } from '../../core/confetti';

@customElement('hg-lesson-detail')
export class HGLessonDetail extends LitElement {
  static override properties = {
    lessonId: { type: String },
    levelId: { type: String },
    _quizAnswers: { state: true },
    _quizSubmitted: { state: true }
  };

  @property({ type: String })
  lessonId: string = '';

  @property({ type: String })
  levelId: string = 'a1';

  @state()
  private _quizAnswers: Record<number, number> = {};

  @state()
  private _quizSubmitted: boolean = false;

  private _selectOption(qIdx: number, optIdx: number) {
    if (this._quizSubmitted) return;
    this._quizAnswers = {
      ...this._quizAnswers,
      [qIdx]: optIdx
    };
    this.requestUpdate();
  }

  private _submitQuiz(lesson: any) {
    this._quizSubmitted = true;
    let correctCount = 0;
    lesson.miniQuiz.forEach((q: any, idx: number) => {
      if (this._quizAnswers[idx] === q.answerIndex) {
        correctCount++;
      }
    });
    if (correctCount === lesson.miniQuiz.length) {
      celebrate();
    }
    markLessonCompleted(lesson.id);
    this.requestUpdate();
  }

  private _retryQuiz() {
    this._quizSubmitted = false;
    this._quizAnswers = {};
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.86rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
      margin-bottom: 1.75rem;
    }
    .breadcrumbs a {
      color: var(--theme-lavender, #7C66DC);
      text-decoration: none;
      cursor: pointer;
    }
    .breadcrumbs a:hover {
      text-decoration: underline;
    }
    .lesson-header-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.5rem 2.5rem;
      margin-bottom: 2rem;
    }
    .header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .level-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.25rem 0.85rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      border: 1.5px solid var(--card-border, #DDD6F7);
    }
    h1 {
      font-size: 1.85rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      line-height: 1.35;
      margin-bottom: 0.75rem;
      letter-spacing: -0.02em;
    }
    .meaning-strip {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--theme-lavender-deep, #4E3E96);
    }
    .section-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2rem 2.25rem;
      margin-bottom: 1.75rem;
    }
    .section-title {
      font-size: 1.05rem;
      font-weight: 800;
      margin-bottom: 1.1rem;
      color: var(--ink, #231C38);
      letter-spacing: 0.02em;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .formula-box {
      background: var(--card-subtle, #F4F1FD);
      border: 1.5px solid var(--theme-lavender-light, #ECE7FB);
      border-left: 4px solid var(--theme-lavender, #7C66DC);
      border-radius: var(--radius-md, 20px);
      padding: 1.25rem 1.5rem;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--ink, #231C38);
      margin-bottom: 0.75rem;
    }
    .explanation-body {
      font-size: 1rem;
      line-height: 1.85;
      color: var(--ink-secondary, #564F70);
    }
    .examples-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .example-item {
      background: var(--card-subtle, #F4F1FD);
      border-radius: var(--radius-md, 20px);
      padding: 1.25rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
    }
    .example-en {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--ink, #231C38);
      margin-bottom: 0.35rem;
      line-height: 1.5;
    }
    .example-ja {
      font-size: 0.92rem;
      color: var(--ink-secondary, #564F70);
      margin-bottom: 0.4rem;
    }
    .example-ref {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
    }
    .btn-audio {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--theme-lavender, #7C66DC);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.12s ease;
      flex-shrink: 0;
    }
    .btn-audio:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-1px);
    }
    .btn-audio svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    /* Mini Quiz */
    .quiz-item {
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--card-subtle, #F4F1FD);
    }
    .quiz-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .quiz-q {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      margin-bottom: 1rem;
    }
    .options-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    .option-btn {
      padding: 0.85rem 1.25rem;
      border-radius: var(--radius-md, 20px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      text-align: left;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--ink, #231C38);
      cursor: pointer;
      transition: all 0.12s ease;
    }
    .option-btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
    }
    .option-btn.selected {
      background: var(--theme-lavender-light, #ECE7FB);
      border-color: var(--theme-lavender, #7C66DC);
      color: var(--theme-lavender-deep, #4E3E96);
    }
    .option-btn.correct {
      background: #ECFDF5;
      border-color: #A7F3D0;
      color: #047857;
    }
    .option-btn.wrong {
      background: #FEF2F2;
      border-color: #FECACA;
      color: #B91C1C;
    }
    .quiz-feedback {
      background: var(--card-subtle, #F4F1FD);
      border-radius: var(--radius-sm, 14px);
      padding: 0.85rem 1.1rem;
      font-size: 0.9rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.6;
    }
    .actions-bar {
      margin-top: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.75rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 0.95rem;
      font-weight: 800;
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--ink, #231C38);
      box-shadow: 0 3px 0 var(--card-border, #DDD6F7);
      cursor: pointer;
      transition: all 0.14s ease;
    }
    .btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
    }
    .btn-lavender {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 4px 0 var(--theme-lavender-deep, #4E3E96);
    }
    .btn-lavender:hover {
      background: var(--theme-lavender-hover, #6D54CD);
    }
    @media (max-width: 640px) {
      .options-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  override render() {
    let currentLesson: any = null;
    let foundLevel: LevelData | null = null;

    for (const lvlKey of Object.keys(allLevelsData) as LevelId[]) {
      const lData = allLevelsData[lvlKey];
      const match = lData.grammar.find(g => g.id === this.lessonId);
      if (match) {
        currentLesson = match;
        foundLevel = lData;
        break;
      }
    }

    if (!currentLesson || !foundLevel) {
      return html`
        <div style="background: #FFFFFF; border-radius: 28px; padding: 3rem; text-align: center; border: 1.5px solid var(--card-border);">
          <p style="font-size: 1.2rem; font-weight: 800; margin-bottom: 1.5rem;">レッスンが見つかりません。</p>
          <button class="btn btn-lavender" @click=${() => Router.navigate('#lessons')}>文法カリキュラム一覧に戻る</button>
        </div>
      `;
    }

    return html`
      <div class="breadcrumbs">
        <a @click=${() => Router.navigate('#home')}>ホーム</a>
        <span>/</span>
        <a @click=${() => Router.navigate('#lessons')}>文法カリキュラム</a>
        <span>/</span>
        <span>${foundLevel.meta.name}</span>
      </div>

      <div class="lesson-header-card">
        <div class="header-top">
          <span class="level-badge">${foundLevel.meta.name} ・ ${foundLevel.meta.ielts}</span>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <button class="btn-audio" @click=${() => { toggleBookmark(currentLesson.id); this.requestUpdate(); }} title="しおり・お気に入り">
              <svg viewBox="0 0 24 24" fill="${store.getState().bookmarks.includes(currentLesson.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </button>
            <button class="btn-audio" @click=${() => audioEngine.speak(currentLesson.examples[0]?.english || '')} title="代表例文を発音">
              <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            </button>
          </div>
        </div>
        <h1>${currentLesson.title}</h1>
        <div class="meaning-strip">意味・機能: ${currentLesson.japaneseMeaning}</div>
      </div>

      <!-- 接続公式 -->
      <div class="section-card">
        <div class="section-title">構文公式 (Formula)</div>
        <div class="formula-box">${currentLesson.structureFormula}</div>
        <p class="explanation-body">${currentLesson.explanationJa}</p>
      </div>

      <!-- 例文集 -->
      <div class="section-card">
        <div class="section-title">典礼・正典 例文集 (Examples)</div>
        <div class="examples-list">
          ${currentLesson.examples.map((ex: any) => html`
            <div class="example-item">
              <div>
                <div class="example-en">${ex.english}</div>
                <div class="example-ja">${ex.japanese}</div>
                ${ex.scriptureRef ? html`<div class="example-ref">出典: ${ex.scriptureRef}</div>` : ''}
              </div>
              <button class="btn-audio" @click=${() => audioEngine.speak(ex.english)} title="発音を聞く">
                <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
              </button>
            </div>
          `)}
        </div>
      </div>

      <!-- 解説と注意点 -->
      <div class="section-card">
        <div class="section-title">解説と運用上の留意点 (Grammar Notes)</div>
        <p class="explanation-body">${currentLesson.notesJa}</p>
      </div>

      <!-- 確認ミニクイズ -->
      <div class="section-card">
        <div class="section-title">定着確認クイズ (Practice Check)</div>
        ${currentLesson.miniQuiz.map((q: any, qIdx: number) => {
          const userAns = this._quizAnswers[qIdx];
          return html`
            <div class="quiz-item">
              <div class="quiz-q">${qIdx + 1}. ${q.question}</div>
              <div class="options-grid">
                ${q.options.map((opt: string, optIdx: number) => {
                  let cls = '';
                  if (userAns === optIdx) cls = 'selected';
                  if (this._quizSubmitted) {
                    if (optIdx === q.answerIndex) cls = 'correct';
                    else if (userAns === optIdx) cls = 'wrong';
                  }
                  return html`
                    <button class="option-btn ${cls}" @click=${() => this._selectOption(qIdx, optIdx)}>
                      ${opt}
                    </button>
                  `;
                })}
              </div>

              ${this._quizSubmitted ? html`
                <div class="quiz-feedback">
                  ${userAns === q.answerIndex ? '正解です！' : '不正解です。'} ${q.explanationJa}
                </div>
              ` : ''}
            </div>
          `;
        })}

        <div style="margin-top: 1.5rem; text-align: right;">
          ${!this._quizSubmitted ? html`
            <button class="btn btn-lavender" @click=${() => this._submitQuiz(currentLesson)}>
              回答を送信
            </button>
          ` : html`
            <button class="btn" @click=${() => this._retryQuiz()}>再挑戦する</button>
          `}
        </div>
      </div>

      <div class="actions-bar">
        <button class="btn" @click=${() => Router.navigate('#lessons')}>
          カリキュラム一覧に戻る
        </button>
      </div>
    `;
  }
}
