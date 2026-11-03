import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ExamDef, examDefinitions } from '../../data/simulations';
import type { LevelId } from '../../data/types';
import { db } from '../../core/db';
import { addPoints } from '../../core/store';
import { Router } from '../../core/router';

@customElement('hg-simulations-view')
export class HGSimulationsView extends LitElement {
  static override properties = {
    activeLevel: { type: String },
    _activeExam: { state: true },
    _currentQIndex: { state: true },
    _answers: { state: true },
    _secondsRemaining: { state: true },
    _isCompleted: { state: true },
    _score: { state: true },
    _predictedIELTS: { state: true },
    _predictedCEFR: { state: true }
  };

  @property({ type: String })
  activeLevel: string = 'a1';

  @state()
  private _activeExam: ExamDef | null = null;

  @state()
  private _currentQIndex: number = 0;

  @state()
  private _answers: Record<string, number> = {};

  @state()
  private _secondsRemaining: number = 0;

  @state()
  private _timerInterval: any = null;

  @state()
  private _isCompleted: boolean = false;

  @state()
  private _score: number = 0;

  @state()
  private _predictedIELTS: string = '';

  @state()
  private _predictedCEFR: string = '';

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._stopTimer();
  }

  private _startTimer(minutes: number) {
    this._stopTimer();
    this._secondsRemaining = minutes * 60;
    this._timerInterval = setInterval(() => {
      if (this._secondsRemaining > 0) {
        this._secondsRemaining--;
        this.requestUpdate();
      } else {
        this._submitExam();
      }
    }, 1000);
  }

  private _stopTimer() {
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
      this._timerInterval = null;
    }
  }

  private _selectExam(exam: ExamDef) {
    this._activeExam = exam;
    this._currentQIndex = 0;
    this._answers = {};
    this._isCompleted = false;
    this._startTimer(exam.durationMinutes);
    this.requestUpdate();
  }

  private _selectAnswer(questionId: string, optionIndex: number) {
    if (this._isCompleted) return;
    this._answers = { ...this._answers, [questionId]: optionIndex };
    this.requestUpdate();
  }

  private _nextQuestion() {
    if (!this._activeExam) return;
    if (this._currentQIndex + 1 < this._activeExam.questions.length) {
      this._currentQIndex++;
      this.requestUpdate();
    }
  }

  private _prevQuestion() {
    if (this._currentQIndex > 0) {
      this._currentQIndex--;
      this.requestUpdate();
    }
  }

  private async _submitExam() {
    this._stopTimer();
    if (!this._activeExam) return;

    let score = 0;
    for (const q of this._activeExam.questions) {
      if (this._answers[q.id] === q.correctIndex) {
        score++;
      }
    }
    this._score = score;
    const total = this._activeExam.questions.length;
    const percent = (score / total) * 100;

    if (this._activeExam.id === 'sim-foundation') {
      this._predictedCEFR = percent >= 80 ? 'A2' : percent >= 50 ? 'A1' : 'Pre-A1';
      this._predictedIELTS = percent >= 80 ? '4.0' : percent >= 50 ? '3.5' : '3.0';
    } else if (this._activeExam.id === 'sim-intermediate') {
      this._predictedCEFR = percent >= 80 ? 'B2' : percent >= 60 ? 'B1' : 'A2';
      this._predictedIELTS = percent >= 80 ? '6.5' : percent >= 60 ? '5.5' : '4.5';
    } else {
      this._predictedCEFR = percent >= 80 ? 'C2' : percent >= 60 ? 'C1' : 'B2';
      this._predictedIELTS = percent >= 80 ? '8.5–9.0' : percent >= 60 ? '7.5' : '6.5';
    }

    this._isCompleted = true;

    try {
      await db.examRecords.add({
        examId: this._activeExam.id,
        levelTarget: this._activeExam.targetLevel as LevelId,
        score,
        totalQuestions: total,
        percentage: Math.round(percent),
        cefrAchieved: this._predictedCEFR,
        ieltsBand: this._predictedIELTS,
        completedAt: new Date()
      });
    } catch (e) {
      // ignore
    }

    addPoints(score * 10);
    this.requestUpdate();
  }

  private _resetExam() {
    this._stopTimer();
    this._activeExam = null;
    this._currentQIndex = 0;
    this._answers = {};
    this._isCompleted = false;
    this.requestUpdate();
  }

  private _formatTime(sec: number): string {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 960px;
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
    .banner-badge {
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
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
    }
    .header-desc {
      font-size: 1.05rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.7;
    }
    /* Exams Grid */
    .exams-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .exam-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2rem 2.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      transition: all 0.15s ease;
    }
    .exam-card:hover {
      transform: translateY(-2px);
      border-color: var(--theme-lavender, #7C66DC);
    }
    .exam-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.25rem 0.85rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 0.76rem;
      font-weight: 800;
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      border: 1px solid var(--card-border, #DDD6F7);
      margin-bottom: 0.75rem;
    }
    .exam-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      margin-bottom: 0.5rem;
    }
    .exam-desc {
      font-size: 0.92rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.6;
    }
    .exam-meta-row {
      display: flex;
      gap: 1rem;
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
      border-top: 1px solid var(--card-subtle, #F4F1FD);
      padding-top: 1rem;
    }
    /* In-Exam View */
    .exam-active-container {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.5rem 3rem;
    }
    .exam-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1.5rem;
      border-bottom: 1.5px solid var(--theme-lavender-light, #ECE7FB);
      margin-bottom: 2rem;
    }
    .timer-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 1rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1.5px solid var(--card-border, #DDD6F7);
      padding: 0.4rem 1.1rem;
      border-radius: var(--radius-pill, 9999px);
    }
    .q-number {
      font-size: 0.88rem;
      font-weight: 800;
      color: var(--muted, #847C9F);
    }
    .q-text {
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.6;
      color: var(--ink, #231C38);
      margin-bottom: 1.75rem;
    }
    .options-col {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-bottom: 2.25rem;
    }
    .option-btn {
      padding: 1rem 1.5rem;
      border-radius: var(--radius-md, 20px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      text-align: left;
      font-size: 1rem;
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
    .exam-nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1.5px solid var(--theme-lavender-light, #ECE7FB);
      padding-top: 1.5rem;
    }
    /* Results */
    .results-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 3.5rem 3rem;
      text-align: center;
    }
    .score-badge {
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      margin-bottom: 0.5rem;
    }
    .prediction-box {
      display: inline-flex;
      gap: 2rem;
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      padding: 1.5rem 2.5rem;
      margin: 1.5rem 0 2.5rem;
    }
    .pred-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .pred-label {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--muted, #847C9F);
    }
    .pred-val {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--ink, #231C38);
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
  `;

  override render() {
    if (!this._activeExam) {
      return html`
        <div class="header-banner">
          <span class="banner-badge">CEFR / IELTS 判定模試</span>
          <h1>英語力判定・模擬試験 (Exam Simulations)</h1>
          <p class="header-desc">
            実戦的なタイマー連動模試システムを英語CEFR基準に独自設計。
            制限時間付きの客観テストを通じて、文法・語彙の総合定着度を測定し、想定CEFRランクおよびIELTS推定バンドスコアを即時算出します。
          </p>
        </div>

        <div class="exams-grid">
          ${examDefinitions.map(exam => html`
            <div class="exam-card">
              <div>
                <span class="exam-badge">${exam.targetLevel.toUpperCase()} 対象</span>
                <div class="exam-title">${exam.title}</div>
                <div class="exam-desc">${exam.descriptionJa}</div>
              </div>

              <div>
                <div class="exam-meta-row">
                  <span>問題数: ${exam.questions.length}問</span>
                  <span>制限時間: ${exam.durationMinutes}分</span>
                </div>
                <div style="margin-top: 1.25rem;">
                  <button class="btn btn-lavender" style="width: 100%;" @click=${() => this._selectExam(exam)}>
                    試験を開始する
                  </button>
                </div>
              </div>
            </div>
          `)}
        </div>
      `;
    }

    if (this._isCompleted) {
      const total = this._activeExam.questions.length;
      return html`
        <div class="results-card">
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem;">
            試験終了・結果判定
          </h2>
          <p style="color: var(--ink-secondary); font-size: 1.05rem;">
            ${this._activeExam.title} の採点が完了しました。
          </p>

          <div class="score-badge">
            ${this._score} / ${total}
          </div>

          <div class="prediction-box">
            <div class="pred-item">
              <span class="pred-label">推定 CEFR レベル</span>
              <span class="pred-val">${this._predictedCEFR}</span>
            </div>
            <div class="pred-item">
              <span class="pred-label">推定 IELTS バンド</span>
              <span class="pred-val">${this._predictedIELTS}</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-lavender" @click=${() => this._resetExam()}>
              模試一覧に戻る
            </button>
            <button class="btn" @click=${() => Router.navigate('#lessons')}>
              カリキュラムで復習する
            </button>
          </div>
        </div>
      `;
    }

    const q = this._activeExam.questions[this._currentQIndex];
    const userSelected = this._answers[q.id];

    return html`
      <div class="exam-active-container">
        <div class="exam-top-bar">
          <div>
            <div style="font-size: 1.15rem; font-weight: 800; color: var(--ink);">${this._activeExam.title}</div>
            <div class="q-number">問題 ${this._currentQIndex + 1} / ${this._activeExam.questions.length}</div>
          </div>
          <div class="timer-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${this._formatTime(this._secondsRemaining)}
          </div>
        </div>

        <div class="q-text">
          ${this._currentQIndex + 1}. ${q.prompt}
        </div>

        <div class="options-col">
          ${q.options.map((opt, optIdx) => html`
            <button class="option-btn ${userSelected === optIdx ? 'selected' : ''}" 
                    @click=${() => this._selectAnswer(q.id, optIdx)}>
              ${opt}
            </button>
          `)}
        </div>

        <div class="exam-nav-bar">
          <button class="btn" ?disabled=${this._currentQIndex === 0} @click=${() => this._prevQuestion()}>
            前の問題
          </button>

          ${this._currentQIndex + 1 < this._activeExam.questions.length ? html`
            <button class="btn btn-lavender" @click=${() => this._nextQuestion()}>
              次の問題
            </button>
          ` : html`
            <button class="btn btn-lavender" @click=${() => this._submitExam()}>
              試験を提出する
            </button>
          `}
        </div>
      </div>
    `;
  }
}
