import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../components/hg-base';

interface DictEntry {
  word: string;
  reading: string;
  meaning: string;
}

@customElement('hg-dict-search')
export class HGDictSearch extends LitElement {
  @state()
  private _query = "";

  @state()
  private _results: DictEntry[] = [];

  @state()
  private _loading = false;

  private _searchSeq = 0;

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .search-box {
      margin-bottom: 2rem;
    }
    input {
      width: 100%;
      padding: 1rem 1.5rem;
      border-radius: var(--hg-radius-pill);
      border: none;
      background-color: var(--hg-bg-base);
      box-shadow: var(--hg-shadow-inner);
      font-family: inherit;
      font-size: 1rem;
      color: var(--hg-text-primary);
      outline: none;
    }
    .results {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .entry-word {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--hg-primary);
    }
    .entry-reading {
      font-size: 0.9rem;
      color: var(--hg-text-secondary);
      margin-bottom: 0.5rem;
    }
    .entry-meaning {
      line-height: 1.5;
    }
  `;

  render() {
    return html`
      <div class="search-box">
        <input
          type="text"
          placeholder="Search for a word..."
          aria-label="Search for a word..."
          .value=${this._query}
          @input=${this._handleInput}
        />
      </div>

      <div class="results">
        ${this._loading ? html`<p>Searching...</p>` : ''}
        ${this._results.length === 0 && this._query && !this._loading ?
          html`<p style="text-align: center; color: var(--hg-text-secondary)">No results found.</p>` : ''}
        ${this._results.map(entry => html`
          <hg-card>
            <div class="entry-word">${entry.word}</div>
            <div class="entry-reading">${entry.reading}</div>
            <div class="entry-meaning">${entry.meaning}</div>
          </hg-card>
        `)}
      </div>
    `;
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this._query = input.value;
    this._search();
  }

  private _dictCache: DictEntry[] | null = null;

  private async _search() {
    const seq = ++this._searchSeq;
    const query = this._query.trim().toLowerCase();

    if (query.length < 2) {
      this._results = [];
      this.requestUpdate();
      return;
    }

    this._loading = true;
    this.requestUpdate();

    try {
      if (!this._dictCache) {
        const response = await fetch('./assets/dict/core-2k.json');
        this._dictCache = await response.json();
      }

      if (seq !== this._searchSeq) return;

      if (this._dictCache) {
        this._results = [...this._dictCache.filter(e =>
          e.word.toLowerCase().includes(query) ||
          e.meaning.toLowerCase().includes(query)
        )];
        this.requestUpdate();
      }
    } catch (error) {
      console.error("Failed to load dictionary:", error);
    } finally {
      if (seq === this._searchSeq) {
        this._loading = false;
      }
    }
  }
}
