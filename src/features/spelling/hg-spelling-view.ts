import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../components/hg-base';
import { store, updatePoints } from '../../core/store';

@customElement('hg-spelling-view')
export class HGSpellingView extends LitElement {
  private _words = ["faith", "grace", "mercy", "peace", "truth", "light", "hope", "love", "spirit", "prayer"];

  @state()
  private _word = "faith";

  @state()
  private _userInput = "";

  @state()
  private _feedback = "";

  @state()
  private _status: 'idle' | 'correct' | 'wrong' = 'idle';

  @state()
  private _isCorrectForCurrentWord = false;

  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
    .input-wrapper {
      width: 100%;
      position: relative;
    }
    input {
      width: 100%;
      padding: 1.25rem;
      border-radius: var(--hg-radius-inner);
      border: 2px solid var(--hg-border-color);
      background-color: var(--hg-bg-base);
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.75rem;
      text-align: center;
      letter-spacing: 0.3rem;
      outline: none;
      transition: all 0.2s ease;
      text-transform: lowercase;
    }
    input:focus {
      border-color: var(--hg-primary);
      background-color: white;
      box-shadow: 0 0 0 4px var(--hg-primary-light);
    }
    input.correct {
      border-color: var(--hg-success);
      background-color: #ECFDF5;
      color: var(--hg-success);
    }
    input.wrong {
      border-color: #EF4444;
      background-color: #FEF2F2;
      color: #EF4444;
    }
    .feedback {
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 0.9rem;
      min-height: 1.5rem;
    }
    .success { color: var(--hg-success); }
    .error { color: #EF4444; }

    .instruction {
      font-size: 0.85rem;
      color: var(--hg-text-secondary);
      text-align: center;
      margin-bottom: 0.5rem;
    }
  `;

  render() {
    return html`
      <hg-card>
        <div style="font-size: 0.8rem; color: var(--hg-primary); font-weight: 700; margin-bottom: 1rem">SPELLING CHALLENGE</div>
        <div class="container">
          <div style="width: 100%">
            <div class="instruction">Listen to the word and type it below</div>
            <hg-button @click=${this._playAudio} primary active style="width: 100%; padding: 1rem">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              Play Audio
            </hg-button>
          </div>

          <div class="input-wrapper">
            <input
              type="text"
              class="${this._status}"
              aria-label="Type the word you hear"
              .value=${this._userInput}
              @input=${this._handleInput}
              @keyup=${this._handleKeyUp}
              placeholder="••••••"
              spellcheck="false"
              autocomplete="off"
            />
          </div>

          <div class="feedback ${this._status === 'correct' ? 'success' : 'error'}">
            ${this._feedback}
          </div>

          <hg-button @click=${this._checkSpelling} secondary style="width: 100%; padding: 0.8rem">
            Verify Answer
          </hg-button>
        </div>
      </hg-card>
    `;
  }

  private _playAudio() {
    const utterance = new SpeechSynthesisUtterance(this._word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  }

  private _handleInput(e: Event) {
    this._userInput = (e.target as HTMLInputElement).value.toLowerCase();
    if (this._status !== 'correct') {
      this._status = 'idle';
      this._feedback = "";
    }
  }

  private _handleKeyUp(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this._checkSpelling();
    }
  }

  private _checkSpelling() {
    if (!this._userInput || this._isCorrectForCurrentWord) return;

    if (this._userInput.trim() === this._word.toLowerCase()) {
      this._feedback = "Excellent! +5 pts";
      this._status = 'correct';
      this._isCorrectForCurrentWord = true;

      // Award session points
      updatePoints(5);

      // Change word after a delay
      setTimeout(() => {
        const currentIndex = this._words.indexOf(this._word);
        const nextIndex = (currentIndex + 1) % this._words.length;
        this._word = this._words[nextIndex];
        this._userInput = "";
        this._status = 'idle';
        this._feedback = "";
        this._isCorrectForCurrentWord = false;
      }, 2000);

    } else {
      this._feedback = "Not quite, try again!";
      this._status = 'wrong';
    }
  }
}
