import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../components/hg-base';

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
    .question-box {
      margin-bottom: 2rem;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin: 1.5rem 0;
    }
    .option {
      padding: 1rem;
      border-radius: var(--hg-radius-pill);
      box-shadow: var(--hg-shadow-outer);
      cursor: pointer;
      transition: all 0.2s;
      background: var(--hg-bg-base);
      text-align: center;
      font-weight: 500;
    }
    .option.selected {
      box-shadow: var(--hg-shadow-active);
      color: var(--hg-primary);
    }
    .option.correct {
      background-color: #d4edda;
      color: #155724;
    }
    .option.wrong {
      background-color: #f8d7da;
      color: #721c24;
    }
    .explanation {
      padding: 1rem;
      border-radius: 12px;
      background: rgba(107, 142, 159, 0.1);
      margin-top: 1rem;
      font-size: 0.9rem;
      line-height: 1.4;
    }
    .score-view {
       text-align: center;
       padding: 2rem;
    }
    .score-circle {
       width: 120px;
       height: 120px;
       border-radius: 50%;
       box-shadow: var(--hg-shadow-outer);
       display: flex;
       align-items: center;
       justify-content: center;
       margin: 0 auto 2rem;
       font-size: 2rem;
       font-weight: 800;
       color: var(--hg-primary);
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    await this._loadQuizzes();
  }

  private async _loadQuizzes() {
    try {
      const response = await fetch('./content/levels/a1/quizzes.json');
      this._quizzes = await response.json();
    } catch (e) {
      console.error("Failed to load quizzes", e);
    }
  }

  render() {
    if (!this._currentQuiz) {
      return html`
        <div class="quiz-selection">
          ${this._quizzes.map(quiz => html`
            <hg-card @click=${() => this._startQuiz(quiz)} style="cursor: pointer">
              <div style="font-weight: bold; font-size: 1.1rem">${quiz.title}</div>
              <div style="font-size: 0.8rem; color: var(--hg-text-secondary); margin-top: 0.5rem">${quiz.questions.length} Questions</div>
            </hg-card>
          `)}
        </div>
      `;
    }

    if (this._finished) {
        return html`
            <div class="score-view">
                <div class="score-circle">
                    ${Math.round((this._score / this._currentQuiz.questions.length) * 100)}%
                </div>
                <h2>Quiz Complete!</h2>
                <p>You got ${this._score} out of ${this._currentQuiz.questions.length} correct.</p>
                <hg-button primary active .glow=${true} @click=${this._reset} style="margin-top: 2rem">Back to Quizzes</hg-button>
            </div>
        `;
    }

    const question = this._currentQuiz.questions[this._currentQuestionIndex];

    return html`
      <div class="question-container">
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 0.8rem; color: var(--hg-text-secondary)">
            <span>Question ${this._currentQuestionIndex + 1}/${this._currentQuiz.questions.length}</span>
            <span>Score: ${this._score}</span>
        </div>
        <hg-card>
          <div style="font-size: 1.1rem; font-weight: 600; line-height: 1.5">${question.question}</div>

          <div class="options">
            ${question.options?.map(opt => html`
              <div class="option ${this._getOptionClass(opt)}" @click=${() => this._handleOptionClick(opt)}>
                ${opt}
              </div>
            `)}
          </div>

          ${this._showExplanation ? html`
            <div class="explanation">
              <strong>Explanation:</strong> ${question.explanation}
              ${question.japanese ? html`<div style="margin-top: 0.5rem; font-style: italic">${question.japanese}</div>` : ''}
            </div>
            <hg-button primary active .glow=${true} @click=${this._nextQuestion} style="width: 100%; justify-content: center; margin-top: 1.5rem">Next Question</hg-button>
          ` : ''}
        </hg-card>
      </div>
    `;
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
    if (opt === this._currentQuiz?.questions[this._currentQuestionIndex].correctAnswer) {
      this._score++;
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
