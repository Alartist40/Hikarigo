import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../components/hg-base';

@customElement('hg-spelling-view')
export class HGSpellingView extends LitElement {
  @state()
  private _word = "curiosity";

  @state()
  private _userInput = "";

  @state()
  private _feedback = "";

  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    input {
      width: 100%;
      padding: 1rem;
      border-radius: var(--hg-radius-card);
      border: none;
      background-color: var(--hg-bg-base);
      box-shadow: var(--hg-shadow-inner);
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.5rem;
      text-align: center;
      letter-spacing: 0.5rem;
      outline: none;
    }
    .feedback {
      font-weight: 700;
      min-height: 1.5rem;
    }
    .success { color: var(--hg-primary); }
    .error { color: var(--hg-accent); }
  `;

  render() {
    return html`
      <hg-card>
        <div class="container">
          <hg-button @click=${this._playAudio} primary active .glow=${true} style="width: 100%; justify-content: center">
             Listen to Word
          </hg-button>

          <input
            type="text"
            .value=${this._userInput}
            @input=${this._handleInput}
            placeholder="Type word..."
          />

          <div class="feedback ${this._feedback === 'Correct!' ? 'success' : 'error'}">
            ${this._feedback}
          </div>

          <hg-button @click=${this._checkSpelling} style="width: 100%; justify-content: center">
            Check Spelling
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
  }

  private _checkSpelling() {
    if (this._userInput === this._word.toLowerCase()) {
      this._feedback = "Correct!";
    } else {
      this._feedback = "Try again!";
    }
  }
}
