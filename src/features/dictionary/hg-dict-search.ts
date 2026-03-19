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
      position: relative;
    }
    .search-icon {
      position: absolute;
      left: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--hg-text-secondary);
      pointer-events: none;
    }
    input {
      width: 100%;
      padding: 1rem 1.5rem 1rem 3.5rem;
      border-radius: var(--hg-radius-inner);
      border: 1px solid var(--hg-border-color);
      background-color: var(--hg-card-bg);
      box-shadow: var(--hg-shadow-sm);
      font-family: inherit;
      font-size: 1rem;
      color: var(--hg-text-primary);
      outline: none;
      transition: all 0.2s ease;
    }
    input:focus {
      border-color: var(--hg-primary);
      box-shadow: 0 0 0 4px var(--hg-primary-light);
    }
    .results {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .entry-word {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--hg-primary);
      margin-bottom: 0.25rem;
    }
    .entry-reading {
      display: inline-block;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--hg-text-secondary);
      background: var(--hg-bg-base);
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    .entry-meaning {
      line-height: 1.6;
      color: var(--hg-text-primary);
    }
  `;

  render() {
    return html`
      <div class="search-box">
        <div class="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <input
          type="text"
          placeholder="Search for a word (e.g. 'God', 'Peace')..."
          aria-label="Search for a word..."
          .value=${this._query}
          @input=${this._handleInput}
        />
      </div>

      <div class="results">
        ${this._loading ? html`<p style="text-align: center; color: var(--hg-text-secondary)">Searching the scriptures...</p>` : ''}
        ${this._results.length === 0 && this._query && !this._loading ?
          html`<p style="text-align: center; color: var(--hg-text-secondary)">No results found.</p>` : ''}
        ${this._results.map(entry => html`
          <hg-card interactive>
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
