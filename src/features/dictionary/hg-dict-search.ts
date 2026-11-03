import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { bibleDictionary } from '../../data/dictionary';
import { audioEngine } from '../../core/audio';

@customElement('hg-dict-search')
export class HGDictSearch extends LitElement {
  static override properties = {
    _query: { state: true },
    _selectedLevel: { state: true }
  };

  @state()
  private _query: string = '';

  @state()
  private _selectedLevel: string = 'all';

  private _onSearchInput(e: Event) {
    this._query = (e.target as HTMLInputElement).value;
    this.requestUpdate();
  }

  private _onLevelChange(e: Event) {
    this._selectedLevel = (e.target as HTMLSelectElement).value;
    this.requestUpdate();
  }

  private _clearSearch() {
    this._query = '';
    this.requestUpdate();
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
    .dict-badge {
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
    .search-bar-wrap {
      display: flex;
      gap: 0.85rem;
      margin-top: 1.5rem;
      flex-wrap: wrap;
    }
    .search-input-wrap {
      flex: 1;
      min-width: 240px;
      position: relative;
      display: flex;
      align-items: center;
    }
    .search-input {
      width: 100%;
      padding: 0.85rem 1.5rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      font-size: 1rem;
      font-weight: 600;
      color: var(--ink, #231C38);
      outline: none;
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: border-color 0.15s ease;
      box-sizing: border-box;
    }
    .search-input:focus {
      border-color: var(--theme-lavender, #7C66DC);
    }
    .btn-clear {
      position: absolute;
      right: 1rem;
      background: var(--theme-lavender-light, #ECE7FB);
      border: none;
      border-radius: 9999px;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--theme-lavender-deep, #4E3E96);
      font-size: 0.8rem;
      font-weight: 800;
    }
    .level-select {
      padding: 0.85rem 1.5rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      font-size: 0.92rem;
      font-weight: 800;
      background: var(--card-bg, #FFFFFF);
      color: var(--ink, #231C38);
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      cursor: pointer;
      outline: none;
    }
    .results-count {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
      margin-bottom: 1.5rem;
    }
    .dict-grid {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .dict-bubble-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      box-shadow: var(--bubble-tactile-card);
      padding: 1.75rem 2rem;
    }
    .dict-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.75rem;
    }
    .word-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      display: flex;
      align-items: baseline;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .word-ipa {
      font-family: var(--font-serif);
      font-size: 1rem;
      color: var(--muted, #847C9F);
      font-weight: 600;
    }
    .word-pos {
      font-size: 0.74rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      padding: 0.2rem 0.65rem;
      border-radius: var(--radius-pill, 9999px);
      text-transform: uppercase;
    }
    .word-level {
      font-size: 0.72rem;
      font-weight: 800;
      color: #FFFFFF;
      background: var(--theme-lavender, #7C66DC);
      padding: 0.15rem 0.6rem;
      border-radius: var(--radius-pill, 9999px);
      text-transform: uppercase;
    }
    .meaning-line {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--ink, #231C38);
      margin-bottom: 0.75rem;
    }
    .example-wrap {
      background: var(--card-subtle, #F4F1FD);
      border-radius: var(--radius-md, 20px);
      padding: 1.1rem 1.4rem;
      margin-bottom: 0.85rem;
    }
    .example-en {
      font-weight: 700;
      font-size: 0.98rem;
      color: var(--ink, #231C38);
      line-height: 1.5;
      margin-bottom: 0.35rem;
    }
    .example-ja {
      font-size: 0.88rem;
      color: var(--ink-secondary, #564F70);
    }
    .scripture-citation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
    }
    .btn-audio {
      width: 38px;
      height: 38px;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--theme-lavender, #7C66DC);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: all 0.12s ease;
    }
    .btn-audio:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      transform: translateY(-1px);
    }
    .btn-audio svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
  `;

  override render() {
    const q = this._query.trim().toLowerCase();
    const filtered = bibleDictionary.filter(entry => {
      const matchQuery = !q ||
        entry.word.toLowerCase().includes(q) ||
        entry.japaneseMeaning.toLowerCase().includes(q) ||
        entry.exampleSentence.toLowerCase().includes(q);
      const matchLevel = this._selectedLevel === 'all' || entry.level === this._selectedLevel;
      return matchQuery && matchLevel;
    });

    return html`
      <div class="header-banner">
        <span class="dict-badge">正典古典語彙集</span>
        <h1>典礼・聖書英語辞典 (Sacred English Lexicon)</h1>
        <p class="header-desc">
          聖書および高位古典文学における重要語彙を精選。
          発音記号（IPA）、品詞、典礼文脈、日本語精密定義、例文を収録しています。
        </p>

        <div class="search-bar-wrap">
          <div class="search-input-wrap">
            <input 
              class="search-input" 
              type="text" 
              placeholder="英単語または日本語の意味で検索..."
              .value=${this._query}
              @input=${this._onSearchInput}
            />
            ${this._query ? html`
              <button class="btn-clear" @click=${this._clearSearch} title="クリア">×</button>
            ` : ''}
          </div>
          <select 
            class="level-select"
            .value=${this._selectedLevel} 
            @change=${this._onLevelChange}>
            <option value="all">全レベル (A1–C2)</option>
            <option value="a1">A1 (入門)</option>
            <option value="a2">A2 (初級)</option>
            <option value="b1">B1 (中級)</option>
            <option value="b2">B2 (中上級)</option>
            <option value="c1">C1 (上級)</option>
            <option value="c2">C2 (最上級・達人)</option>
          </select>
        </div>
      </div>

      <div class="results-count">
        検索結果: ${filtered.length} 語
      </div>

      <div class="dict-grid">
        ${filtered.map(entry => html`
          <div class="dict-bubble-card">
            <div class="dict-head">
              <div class="word-title">
                <span>${entry.word}</span>
                <span class="word-ipa">${entry.phoneticIpa}</span>
                <span class="word-pos">${entry.partOfSpeech}</span>
                <span class="word-level">${entry.level.toUpperCase()}</span>
              </div>
              <button class="btn-audio" @click=${() => audioEngine.speak(entry.word)} title="発音を聞く">
                <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
            </div>

            <div class="meaning-line">${entry.japaneseMeaning}</div>

            <div class="example-wrap">
              <div class="example-en">"${entry.exampleSentence}"</div>
              <div class="example-ja">${entry.exampleJapanese}</div>
            </div>

            <div class="scripture-citation">
              <span>典拠: ${entry.scriptureCitation}</span>
              <button class="btn-audio" style="width: 28px; height: 28px;" @click=${() => audioEngine.speak(entry.exampleSentence)} title="例文を発音">
                <svg viewBox="0 0 24 24" style="width: 13px; height: 13px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}
