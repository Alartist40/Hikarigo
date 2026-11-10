import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { LevelId, LevelData } from '../../data/types';
import { allLevelsData } from '../../data';
import { audioEngine } from '../../core/audio';
import { toggleLessonCompleted, markLessonCompleted, toggleBookmark, store, setActiveLevel } from '../../core/store';
import { Router } from '../../core/router';
import { celebrate } from '../../core/confetti';

@customElement('hg-lesson-detail')
export class HGLessonDetail extends LitElement {
  static override properties = {
    lessonId: { type: String },
    levelId: { type: String },
    _quizAnswers: { state: true },
    _quizSubmitted: { state: true },
    _unansweredWarning: { state: true },
    _playingAudioKey: { state: true }
  };

  @property({ type: String })
  lessonId: string = '';

  @property({ type: String })
  levelId: string = 'a1';

  @state()
  private _quizAnswers: Record<number, number> = {};

  @state()
  private _quizSubmitted: boolean = false;

  @state()
  private _unansweredWarning: boolean = false;

  @state()
  private _playingAudioKey: string | null = null;

  private _unsubscribe?: () => void;

  override connectedCallback() {
    super.connectedCallback();
    this._unsubscribe = store.subscribe(() => {
      this.requestUpdate();
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubscribe) this._unsubscribe();
  }

  override willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('lessonId')) {
      this._quizAnswers = {};
      this._quizSubmitted = false;
      this._unansweredWarning = false;
      this._playingAudioKey = null;
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  private _selectOption(qIdx: number, optIdx: number) {
    if (this._quizSubmitted) return;
    this._quizAnswers = {
      ...this._quizAnswers,
      [qIdx]: optIdx
    };
    this._unansweredWarning = false;
    this.requestUpdate();
  }

  private _submitQuiz(lesson: any) {
    this._quizSubmitted = true;
    this._unansweredWarning = false;
    let correctCount = 0;
    const totalQ = lesson.miniQuiz.length;
    lesson.miniQuiz.forEach((q: any, idx: number) => {
      if (this._quizAnswers[idx] === q.answerIndex) {
        correctCount++;
      }
    });
    if (correctCount === totalQ && totalQ > 0) {
      celebrate();
    }
    markLessonCompleted(lesson.id);
    this.requestUpdate();
  }

  private _retryQuiz() {
    this._quizSubmitted = false;
    this._quizAnswers = {};
    this._unansweredWarning = false;
    this.requestUpdate();
  }

  private _playAudio(key: string, text: string) {
    this._playingAudioKey = key;
    this.requestUpdate();
    audioEngine.speak(text, undefined, () => {
      this._playingAudioKey = null;
      this.requestUpdate();
    });
    setTimeout(() => {
      if (this._playingAudioKey === key) {
        this._playingAudioKey = null;
        this.requestUpdate();
      }
    }, 2200);
  }

  private _handleToggleBookmark(id: string) {
    toggleBookmark(id);
    this.requestUpdate();
  }

  private _handleToggleComplete(id: string) {
    toggleLessonCompleted(id);
    const isNowCompleted = store.getState().completedLessons.includes(id);
    if (isNowCompleted) {
      celebrate();
    }
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 920px;
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
      flex-wrap: wrap;
    }
    .breadcrumbs a {
      color: var(--theme-lavender, #7C66DC);
      text-decoration: none;
      cursor: pointer;
      transition: color 0.12s ease;
    }
    .breadcrumbs a:hover {
      text-decoration: underline;
      color: var(--theme-lavender-deep, #4E3E96);
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
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }
    .level-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.28rem 0.85rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      border: 1.5px solid var(--card-border, #DDD6F7);
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-wrap: wrap;
    }
    .btn-action-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--ink-secondary, #564F70);
      font-size: 0.82rem;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: all 0.16s var(--ease-spring);
      font-family: inherit;
      user-select: none;
    }
    .btn-action-pill:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-1px);
    }
    .btn-action-pill:active {
      transform: translateY(1px);
    }
    .btn-action-pill.bookmarked {
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      border-color: var(--theme-lavender, #7C66DC);
    }
    .btn-action-pill.completed {
      background: #ECFDF5;
      color: #047857;
      border-color: #A7F3D0;
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
      transition: all 0.14s ease;
      flex-shrink: 0;
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
    }
    .btn-audio:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      border-color: var(--theme-lavender, #7C66DC);
      transform: scale(1.08);
    }
    .btn-audio.playing {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
      animation: bubblePulse 1s infinite;
    }
    .btn-audio svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    h1 {
      font-size: 1.9rem;
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
      padding: 2.25rem 2.5rem;
      margin-bottom: 2rem;
    }
    .section-title {
      font-size: 1.05rem;
      font-weight: 800;
      margin-bottom: 1.15rem;
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
      margin-bottom: 1rem;
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
      border: 1px solid var(--theme-lavender-light, #ECE7FB);
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
    /* Mini Quiz */
    .quiz-item {
      margin-bottom: 1.75rem;
      padding-bottom: 1.75rem;
      border-bottom: 1px solid var(--theme-lavender-light, #ECE7FB);
    }
    .quiz-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .quiz-q {
      font-size: 1.1rem;
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
      padding: 0.95rem 1.35rem;
      border-radius: var(--radius-md, 20px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      text-align: left;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--ink, #231C38);
      cursor: pointer;
      transition: all 0.14s var(--ease-spring);
      font-family: inherit;
    }
    .option-btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-1px);
    }
    .option-btn:active {
      transform: translateY(1px);
    }
    .option-btn.selected {
      background: var(--theme-lavender-light, #ECE7FB);
      border-color: var(--theme-lavender, #7C66DC);
      color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 0 0 2px var(--theme-lavender, #7C66DC);
    }
    .option-btn.correct {
      background: #ECFDF5;
      border-color: #10B981;
      color: #047857;
      font-weight: 800;
      box-shadow: 0 0 0 2px #10B981;
    }
    .option-btn.wrong {
      background: #FEF2F2;
      border-color: #EF4444;
      color: #B91C1C;
    }
    .quiz-feedback {
      background: var(--card-subtle, #F4F1FD);
      border-radius: var(--radius-sm, 14px);
      padding: 1rem 1.25rem;
      font-size: 0.92rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.65;
      border-left: 3px solid var(--theme-lavender, #7C66DC);
    }
    .warning-box {
      background: #FFFBEB;
      border: 1.5px solid #FCD34D;
      color: #B45309;
      padding: 0.75rem 1.25rem;
      border-radius: var(--radius-sm, 14px);
      font-size: 0.88rem;
      font-weight: 700;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: popIn 0.2s ease;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      padding: 0.75rem 1.75rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 0.95rem;
      font-weight: 800;
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--ink, #231C38);
      box-shadow: 0 3px 0 var(--card-border, #DDD6F7);
      cursor: pointer;
      transition: all 0.16s var(--ease-spring);
      font-family: inherit;
    }
    .btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-2px);
    }
    .btn:active {
      transform: translateY(1px);
    }
    .btn-lavender {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 4px 0 var(--theme-lavender-deep, #4E3E96);
    }
    .btn-lavender:hover {
      background: var(--theme-lavender-hover, #6D54CD);
      color: #FFFFFF;
    }
    /* Navigation Bar at bottom */
    .lesson-nav-bar {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      padding-top: 1.5rem;
      border-top: 1.5px solid var(--theme-lavender-light, #ECE7FB);
    }
    @media (max-width: 640px) {
      .options-grid {
        grid-template-columns: 1fr;
      }
      .lesson-header-card {
        padding: 2rem 1.5rem;
      }
      .section-card {
        padding: 1.75rem 1.5rem;
      }
    }
  `;

  override render() {
    let currentLesson: any = null;
    let foundLevel: LevelData | null = null;
    let lessonIndex = -1;

    for (const lvlKey of Object.keys(allLevelsData) as LevelId[]) {
      const lData = allLevelsData[lvlKey];
      const idx = lData.grammar.findIndex(g => g.id === this.lessonId);
      if (idx !== -1) {
        currentLesson = lData.grammar[idx];
        foundLevel = lData;
        lessonIndex = idx;
        break;
      }
    }

    if (!currentLesson || !foundLevel) {
      return html`
        <div style="background: #FFFFFF; border-radius: 28px; padding: 3.5rem 2rem; text-align: center; border: 1.5px solid var(--card-border);">
          <p style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.5rem; color: var(--ink);">指定されたレッスンが見つかりません。</p>
          <button type="button" class="btn btn-lavender" @click=${() => Router.navigate('#lessons')}>文法カリキュラム一覧に戻る</button>
        </div>
      `;
    }

    const prevLesson = lessonIndex > 0 ? foundLevel.grammar[lessonIndex - 1] : null;
    const nextLesson = lessonIndex < foundLevel.grammar.length - 1 ? foundLevel.grammar[lessonIndex + 1] : null;

    const isCompleted = store.getState().completedLessons.includes(currentLesson.id);
    const isBookmarked = store.getState().bookmarks.includes(currentLesson.id);
    const isPlayingMain = this._playingAudioKey === 'main';

    return html`
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a @click=${() => Router.navigate('#home')}>ホーム</a>
        <span>/</span>
        <a @click=${() => { setActiveLevel(foundLevel.meta.id as LevelId); Router.navigate('#lessons'); }}>文法体系</a>
        <span>/</span>
        <a @click=${() => { setActiveLevel(foundLevel.meta.id as LevelId); Router.navigate('#lessons'); }}>${foundLevel.meta.name}</a>
        <span>/</span>
        <span style="color: var(--ink);">${currentLesson.title.split('—')[0].trim()}</span>
      </div>

      <!-- Header Card -->
      <div class="lesson-header-card">
        <div class="header-top">
          <span class="level-badge">${foundLevel.meta.name} ・ ${foundLevel.meta.ielts}</span>

          <div class="header-actions">
            <!-- Mark Complete Button -->
            <button type="button" 
                    class="btn-action-pill ${isCompleted ? 'completed' : ''}" 
                    @click=${() => this._handleToggleComplete(currentLesson.id)} 
                    title="このレッスンを修了にする">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${isCompleted ? '修了済み ✓' : '修了にする'}</span>
            </button>

            <!-- Bookmark Button -->
            <button type="button" 
                    class="btn-action-pill ${isBookmarked ? 'bookmarked' : ''}" 
                    @click=${() => this._handleToggleBookmark(currentLesson.id)} 
                    title="しおりに保存">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              <span>${isBookmarked ? 'しおり保存' : 'しおり'}</span>
            </button>

            <!-- Main Audio Button -->
            <button type="button" 
                    class="btn-audio ${isPlayingMain ? 'playing' : ''}" 
                    @click=${() => this._playAudio('main', currentLesson.examples[0]?.english || '')} 
                    title="代表例文を発音">
              <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            </button>
          </div>
        </div>

        <h1>${currentLesson.title}</h1>
        <div class="meaning-strip">意味・機能: ${currentLesson.japaneseMeaning}</div>
      </div>

      <!-- 構文公式 -->
      <div class="section-card">
        <div class="section-title">構文公式 (Formula)</div>
        <div class="formula-box">${currentLesson.structureFormula}</div>
        <p class="explanation-body">${currentLesson.explanationJa}</p>
      </div>

      <!-- 例文集 -->
      <div class="section-card">
        <div class="section-title">典礼・正典 例文集 (Examples)</div>
        <div class="examples-list">
          ${currentLesson.examples.map((ex: any, idx: number) => {
            const isPlayingEx = this._playingAudioKey === `ex-${idx}`;
            return html`
              <div class="example-item">
                <div style="flex: 1;">
                  <div class="example-en">${ex.english}</div>
                  <div class="example-ja">${ex.japanese}</div>
                  ${ex.scriptureRef ? html`<div class="example-ref">出典: ${ex.scriptureRef}</div>` : ''}
                </div>
                <button type="button" 
                        class="btn-audio ${isPlayingEx ? 'playing' : ''}" 
                        @click=${() => this._playAudio(`ex-${idx}`, ex.english)} 
                        title="発音を聞く">
                  <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
                </button>
              </div>
            `;
          })}
        </div>
      </div>

      <!-- 解説と留意点 -->
      <div class="section-card">
        <div class="section-title">解説と運用上の留意点 (Grammar Notes)</div>
        <p class="explanation-body">${currentLesson.notesJa}</p>
      </div>

      <!-- 定着確認クイズ -->
      <div class="section-card">
        <div class="section-title">定着確認クイズ (Practice Check)</div>

        ${this._unansweredWarning ? html`
          <div class="warning-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            すべての問題に回答を選択してから送信してください。
          </div>
        ` : ''}

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
                    <button type="button" class="option-btn ${cls}" @click=${() => this._selectOption(qIdx, optIdx)}>
                      ${opt}
                    </button>
                  `;
                })}
              </div>

              ${this._quizSubmitted ? html`
                <div class="quiz-feedback">
                  ${userAns === undefined ? html`
                    <strong style="color: #D97706;">⚠️ 未回答</strong> 正解は「${q.options[q.answerIndex]}」です。
                  ` : userAns === q.answerIndex ? html`
                    <strong style="color: #047857;">✓ 正解です！</strong>
                  ` : html`
                    <strong style="color: #B91C1C;">✕ 不正解です。</strong> 正解は「${q.options[q.answerIndex]}」です。
                  `}
                  <div style="margin-top: 0.35rem;">${q.explanationJa}</div>
                </div>
              ` : ''}
            </div>
          `;
        })}

        <div style="margin-top: 1.75rem; display: flex; justify-content: flex-end; gap: 0.75rem; flex-wrap: wrap;">
          ${!this._quizSubmitted ? html`
            <button type="button" class="btn btn-lavender" @click=${() => this._submitQuiz(currentLesson)}>
              回答を判定する
            </button>
          ` : html`
            <button type="button" class="btn" @click=${() => this._retryQuiz()}>
              クイズを再挑戦
            </button>
            ${nextLesson ? html`
              <button type="button" class="btn btn-lavender" @click=${() => Router.navigate('#lesson', { id: nextLesson.id })}>
                次のレッスンへ進む →
              </button>
            ` : html`
              <button type="button" class="btn btn-lavender" @click=${() => { setActiveLevel(foundLevel.meta.id as LevelId); Router.navigate('#lessons'); }}>
                全項目修了！一覧へ 🎉
              </button>
            `}
          `}
        </div>
      </div>

      <!-- Navigation Between Lessons -->
      <div class="lesson-nav-bar">
        ${prevLesson ? html`
          <button type="button" class="btn" @click=${() => Router.navigate('#lesson', { id: prevLesson.id })}>
            ← 前のレッスン (${prevLesson.title.split('—')[0].trim()})
          </button>
        ` : html`<div></div>`}

        <button type="button" class="btn" @click=${() => { setActiveLevel(foundLevel.meta.id as LevelId); Router.navigate('#lessons'); }}>
          カリキュラム一覧に戻る
        </button>

        ${nextLesson ? html`
          <button type="button" class="btn btn-lavender" @click=${() => Router.navigate('#lesson', { id: nextLesson.id })}>
            次のレッスン (${nextLesson.title.split('—')[0].trim()}) →
          </button>
        ` : html`
          <button type="button" class="btn btn-lavender" @click=${() => { setActiveLevel(foundLevel.meta.id as LevelId); Router.navigate('#lessons'); }}>
            修了！一覧へ 🎉
          </button>
        `}
      </div>
    `;
  }
}
