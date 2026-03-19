import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../components/hg-base';
import { store, updatePoints } from '../../core/store';

interface Question {
  id: string;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  japanese?: string;
}

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

@customElement('hg-quiz-view')
export class HGQuizView extends LitElement {
  @state()
  private _quizzes: Quiz[] = [];

  @state()
  private _currentQuiz: Quiz | null = null;

  @state()
  private _currentQuestionIndex = 0;

  @state()
  private _selectedOption: string | null = null;

  @state()
  private _showExplanation = false;

  @state()
  private _score = 0;

  @state()
  private _finished = false;

  @property({ type: String })
  level: 'a1' | 'a2' | 'b1' = 'a1';

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .quiz-selection {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin: 1.5rem 0;
    }
    .option {
      padding: 1rem 1.5rem;
      border-radius: var(--hg-radius-inner);
      border: 1px solid var(--hg-border-color);
      cursor: pointer;
      transition: all 0.2s;
      background: var(--hg-card-bg);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .option:hover:not(.disabled) {
      border-color: var(--hg-primary);
      background-color: var(--hg-primary-light);
    }
    .option.selected {
      border-color: var(--hg-primary);
      background-color: var(--hg-primary-light);
      color: var(--hg-primary);
    }
    .option.correct {
      background-color: #ECFDF5;
      border-color: var(--hg-success);
      color: var(--hg-success);
    }
    .option.wrong {
      background-color: #FEF2F2;
      border-color: #EF4444;
      color: #EF4444;
    }
    .explanation {
      padding: 1.25rem;
      border-radius: var(--hg-radius-inner);
      background: var(--hg-primary-light);
      border-left: 4px solid var(--hg-primary);
      margin-top: 1.5rem;
      font-size: 0.95rem;
      line-height: 1.5;
      color: var(--hg-text-primary);
    }
    .score-view {
       text-align: center;
       padding: 2rem;
    }
    .score-circle {
       width: 120px;
       height: 120px;
       border-radius: 50%;
       background-color: var(--hg-primary-light);
       display: flex;
       align-items: center;
       justify-content: center;
       margin: 0 auto 2rem;
       font-size: 2.5rem;
       font-weight: 800;
       color: var(--hg-primary);
       border: 4px solid var(--hg-primary);
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    await this._loadQuizzes();
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('level')) {
      this._loadQuizzes();
    }
  }

  private async _loadQuizzes() {
    try {
      const response = await fetch(`./content/levels/${this.level}/quizzes.json`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch quizzes`);
      }
      this._quizzes = await response.json();
      this._currentQuiz = null;
    } catch (e) {
      console.error(`Failed to load quizzes for level ${this.level}`, e);
      this._quizzes = [];
    }
  }

  render() {
    if (!this._currentQuiz) {
      return html`
        <div class="quiz-selection">
          <div style="font-size: 0.8rem; color: var(--hg-primary); font-weight: 700; margin-bottom: 0.5rem">LEVEL ${this.level.toUpperCase()} CHALLENGES</div>
          ${this._quizzes.map(quiz => html`
            <hg-card @click=${() => this._startQuiz(quiz)} interactive style="cursor: pointer; padding: 1.25rem">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <div>
                  <div style="font-weight: 700; font-size: 1.1rem">${quiz.title}</div>
                  <div style="font-size: 0.85rem; color: var(--hg-text-secondary); margin-top: 0.25rem">${quiz.questions.length} Questions</div>
                </div>
                <div style="color: var(--hg-primary)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </hg-card>
          `)}
        </div>
      `;
    }

    if (this._finished) {
        const total = this._currentQuiz.questions.length;
        const percentage = total > 0 ? Math.round((this._score / total) * 100) : 0;
        return html`
            <div class="score-view">
                <div class="score-circle">
                    ${percentage}%
                </div>
                <h2 style="margin: 0 0 0.5rem">Quiz Complete!</h2>
                <p style="color: var(--hg-text-secondary)">You scored ${this._score} / ${this._currentQuiz.questions.length} correct.</p>
                <hg-button primary active @click=${this._reset} style="margin-top: 2rem; width: auto; padding: 0.75rem 2rem">Return to Arena</hg-button>
            </div>
        `;
    }

    const question = this._currentQuiz.questions[this._currentQuestionIndex];

    return html`
      <div class="question-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem">
            <span style="font-weight: 700; font-size: 0.9rem; color: var(--hg-text-secondary)">QUESTION ${this._currentQuestionIndex + 1} OF ${this._currentQuiz.questions.length}</span>
            <div style="background: var(--hg-primary-light); color: var(--hg-primary); padding: 0.25rem 0.75rem; border-radius: var(--hg-radius-pill); font-size: 0.8rem; font-weight: 800">
               SCORE: ${this._score}
            </div>
        </div>

        <div style="font-size: 1.25rem; font-weight: 700; line-height: 1.5; color: var(--hg-text-primary); margin-bottom: 2rem">
           ${question.question}
        </div>

        <div class="options">
          ${question.options?.map(opt => html`
            <div class="option ${this._getOptionClass(opt)} ${this._showExplanation ? 'disabled' : ''}" @click=${() => this._handleOptionClick(opt)}>
              <div style="width: 24px; height: 24px; border-radius: 50%; border: 2px solid currentColor; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800; flex-shrink: 0">
                 ${this._getOptionIndicator(opt)}
              </div>
              ${opt}
            </div>
          `)}
        </div>

        ${this._showExplanation ? html`
          <div class="explanation">
            <div style="font-weight: 800; text-transform: uppercase; font-size: 0.75rem; margin-bottom: 0.5rem; letter-spacing: 0.05rem">Explanation</div>
            ${question.explanation}
            ${question.japanese ? html`<div style="margin-top: 0.75rem; font-style: italic; opacity: 0.8; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 0.75rem">${question.japanese}</div>` : ''}
          </div>
          <div style="margin-top: 2rem; display: flex; justify-content: flex-end">
             <hg-button primary active @click=${this._nextQuestion} style="width: auto; padding: 0.75rem 2rem">Next Question</hg-button>
          </div>
        ` : ''}
      </div>
    `;
  }

  private _getOptionIndicator(opt: string) {
    if (!this._showExplanation) return '';
    const correct = this._currentQuiz?.questions[this._currentQuestionIndex].correctAnswer;
    if (opt === correct) return html`✓`;
    if (this._selectedOption === opt) return html`✕`;
    return '';
  }

  private _startQuiz(quiz: Quiz) {
    this._currentQuiz = quiz;
    this._currentQuestionIndex = 0;
    this._score = 0;
    this._finished = false;
    this._selectedOption = null;
    this._showExplanation = false;
  }

  private _handleOptionClick(opt: string) {
    if (this._showExplanation) return;
    this._selectedOption = opt;
    this._showExplanation = true;

    const correct = this._currentQuiz?.questions[this._currentQuestionIndex].correctAnswer;
    if (opt === correct) {
      this._score++;
      // Award session points
      updatePoints(10);
    }
  }

  private _getOptionClass(opt: string) {
    if (!this._showExplanation) {
      return this._selectedOption === opt ? 'selected' : '';
    }
    const correct = this._currentQuiz?.questions[this._currentQuestionIndex].correctAnswer;
    if (opt === correct) return 'correct';
    if (this._selectedOption === opt) return 'wrong';
    return '';
  }

  private _nextQuestion() {
    this._selectedOption = null;
    this._showExplanation = false;
    if (this._currentQuestionIndex < (this._currentQuiz?.questions.length || 0) - 1) {
      this._currentQuestionIndex++;
    } else {
      this._finished = true;
    }
  }

  private _reset() {
    this._currentQuiz = null;
    this._finished = false;
  }
}
