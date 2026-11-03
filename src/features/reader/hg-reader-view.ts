import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { PassageReading, LevelId, LevelData } from '../../data/types';
import { allLevelsData, levelOrder } from '../../data';
import { audioEngine } from '../../core/audio';
import { bibleDictionary } from '../../data/dictionary';

@customElement('hg-reader-view')
export class HGReaderView extends LitElement {
  static override properties = {
    activeLevel: { type: String },
    _selectedPassage: { state: true },
    _showTranslation: { state: true },
    _inspectedWord: { state: true },
    _isClozeMode: { state: true },
    _revealedClozeIndices: { state: true },
    _hoveredSentenceIdx: { state: true },
    _filterLevel: { state: true }
  };

  @property({ type: String })
  activeLevel: string = 'a1';

  @state()
  private _selectedPassage: PassageReading | null = null;

  @state()
  private _showTranslation: boolean = true;

  @state()
  private _inspectedWord: { word: string; meaningJa: string; ipa?: string } | null = null;

  @state()
  private _isClozeMode: boolean = false;

  @state()
  private _revealedClozeIndices: Set<number> = new Set();

  @state()
  private _hoveredSentenceIdx: number = -1;

  @state()
  private _filterLevel: string = 'all';

  private _handleWindowClick = (e: MouseEvent) => {
    if (this._inspectedWord) {
      const path = e.composedPath();
      const isInsidePopup = path.some(el => (el as HTMLElement).classList?.contains('word-popup'));
      const isWordClick = path.some(el => (el as HTMLElement).classList?.contains('reading-token'));
      if (!isInsidePopup && !isWordClick) {
        this._inspectedWord = null;
        this.requestUpdate();
      }
    }
  };

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this._inspectedWord = null;
      this.requestUpdate();
    }
  };

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._handleWindowClick);
    window.addEventListener('keydown', this._handleKeyDown);
    this._selectInitialPassage();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('click', this._handleWindowClick);
    window.removeEventListener('keydown', this._handleKeyDown);
  }

  override willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('activeLevel') && this.activeLevel) {
      this._filterLevel = this.activeLevel;
      this._selectInitialPassage();
    }
  }

  private _selectInitialPassage() {
    const data: LevelData = allLevelsData[this.activeLevel as LevelId] || allLevelsData.a1;
    if (data.readings && data.readings.length > 0) {
      this._selectedPassage = data.readings[0];
    }
    this._inspectedWord = null;
    this._revealedClozeIndices.clear();
    this.requestUpdate();
  }

  private _selectPassage(r: PassageReading) {
    this._selectedPassage = r;
    this._inspectedWord = null;
    this._revealedClozeIndices.clear();
    this.requestUpdate();
  }

  private _toggleTranslation() {
    this._showTranslation = !this._showTranslation;
    this.requestUpdate();
  }

  private _toggleClozeMode() {
    this._isClozeMode = !this._isClozeMode;
    this._revealedClozeIndices.clear();
    this.requestUpdate();
  }

  private _revealCloze(idx: number, word: string) {
    this._revealedClozeIndices.add(idx);
    audioEngine.speak(word);
    this.requestUpdate();
  }

  private _onWordClick(rawWord: string) {
    const cleaned = rawWord.replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '').trim().toLowerCase();
    if (!cleaned) return;

    const dictMatch = bibleDictionary.find(d => d.word.toLowerCase() === cleaned);
    if (dictMatch) {
      this._inspectedWord = {
        word: dictMatch.word,
        meaningJa: dictMatch.japaneseMeaning,
        ipa: dictMatch.phoneticIpa
      };
    } else {
      this._inspectedWord = {
        word: rawWord.replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '').trim(),
        meaningJa: 'タップして発音を確認できます。'
      };
    }
    this.requestUpdate();
  }

  private _closeWordInspection() {
    this._inspectedWord = null;
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 1040px;
      margin: 0 auto;
    }
    .reader-header {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.75rem 2.5rem;
      margin-bottom: 2.5rem;
    }
    .reader-badge {
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
    .reader-sub {
      font-size: 1rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.7;
    }
    /* Filter Bar */
    .filter-row {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1.5px solid var(--theme-lavender-light, #ECE7FB);
    }
    .filter-btn {
      padding: 0.4rem 0.95rem;
      border-radius: var(--radius-pill, 9999px);
      font-weight: 800;
      font-size: 0.82rem;
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--ink-secondary, #564F70);
      cursor: pointer;
      transition: all 0.14s ease;
    }
    .filter-btn:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
    }
    .filter-btn.active {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
    }
    /* Passage Picker */
    .passage-picker {
      display: flex;
      gap: 0.65rem;
      flex-wrap: wrap;
      margin-top: 1.25rem;
    }
    .picker-btn {
      padding: 0.55rem 1.15rem;
      border-radius: var(--radius-pill, 9999px);
      font-weight: 800;
      font-size: 0.86rem;
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      color: var(--ink, #231C38);
      cursor: pointer;
      transition: all 0.16s var(--ease-spring);
    }
    .picker-btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-2px);
    }
    .picker-btn.active {
      border-color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      box-shadow: 0 3px 0 var(--theme-lavender-deep, #4E3E96);
    }
    .reading-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2.75rem 3rem;
      margin-bottom: 2rem;
    }
    .reading-title-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.75rem;
      border-bottom: 1.5px solid var(--theme-lavender-light, #ECE7FB);
      padding-bottom: 1.25rem;
      gap: 1rem;
    }
    .reading-h2 {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      line-height: 1.3;
    }
    .source-tag {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      padding: 0.3rem 0.8rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1px solid var(--card-border, #DDD6F7);
      white-space: nowrap;
    }
    .btn-audio {
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1.5px solid var(--card-border, #DDD6F7);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--theme-lavender-deep, #4E3E96);
      transition: all 0.15s var(--ease-spring);
      flex-shrink: 0;
    }
    .btn-audio:hover {
      transform: scale(1.1);
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
    }
    .btn-audio svg {
      width: 18px;
      height: 18px;
      stroke: currentColor;
      fill: none;
      stroke-width: 2.5;
    }
    .text-body {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.25rem;
      line-height: 2.1;
      color: var(--ink, #231C38);
      margin-bottom: 2rem;
    }
    /* Sentence-level illumination */
    .sentence-span {
      padding: 0.2rem 0.45rem;
      border-radius: 8px;
      transition: all 0.18s ease;
      cursor: pointer;
      display: inline;
    }
    .sentence-span:hover,
    .sentence-span.focused {
      background: #ECE7FB;
      box-shadow: 0 0 0 2px #7C66DC;
      color: #231C38;
    }
    :host-context([data-theme="dark"]) .sentence-span:hover,
    :host-context([data-theme="dark"]) .sentence-span.focused {
      background: rgba(124, 102, 220, 0.32);
      box-shadow: 0 0 0 2px #9A86F0;
      color: #F8F7FD;
    }
    .reading-token {
      cursor: pointer;
      transition: color 0.14s ease;
      display: inline;
    }
    .reading-token:hover {
      color: var(--theme-lavender, #7C66DC);
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    .cloze-blank {
      display: inline-block;
      padding: 0.15rem 0.65rem;
      border-radius: var(--radius-pill, 9999px);
      background: var(--card-subtle, #F4F1FD);
      border: 1.5px dashed var(--theme-lavender, #7C66DC);
      color: var(--theme-lavender-deep, #4E3E96);
      font-family: var(--font-body);
      font-size: 0.88rem;
      font-weight: 800;
      cursor: pointer;
      user-select: none;
      transition: all 0.15s ease;
      margin: 0 0.2rem;
    }
    .cloze-blank:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      transform: translateY(-1px);
    }
    .translation-box {
      background: var(--card-subtle, #F4F1FD);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      padding: 2rem 2.25rem;
      font-size: 1rem;
      line-height: 1.9;
      color: var(--ink-secondary, #564F70);
      margin-top: 1.5rem;
    }
    .translation-sentence {
      padding: 0.25rem 0.45rem;
      border-radius: 8px;
      transition: all 0.18s ease;
      display: inline;
    }
    .translation-sentence:hover,
    .translation-sentence.focused {
      background: #DDD6F7;
      color: #231C38;
      box-shadow: 0 0 0 2px #7C66DC;
      font-weight: 700;
    }
    :host-context([data-theme="dark"]) .translation-sentence:hover,
    :host-context([data-theme="dark"]) .translation-sentence.focused {
      background: rgba(124, 102, 220, 0.4);
      color: #FFFFFF;
      box-shadow: 0 0 0 2px #9A86F0;
    }
    .action-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 2rem;
      border-top: 1.5px solid var(--theme-lavender-light, #ECE7FB);
      padding-top: 1.5rem;
    }
    .btn-toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 1.15rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 0.86rem;
      font-weight: 800;
      cursor: pointer;
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--ink, #231C38);
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: all 0.14s var(--ease-spring);
    }
    .btn-toggle:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
    }
    .btn-toggle.active {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 3px 0 var(--theme-lavender-deep, #4E3E96);
    }
    .word-popup {
      position: sticky;
      top: 80px;
      z-index: 80;
      background: var(--card-bg, #FFFFFF);
      border: 2px solid var(--theme-lavender, #7C66DC);
      border-radius: var(--radius-md, 20px);
      padding: 1.25rem 1.75rem;
      box-shadow: 0 12px 32px rgba(124, 102, 220, 0.22);
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      animation: popIn 0.2s var(--ease-spring);
    }
    @keyframes popIn {
      from { opacity: 0; transform: translateY(-8px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .word-popup-head {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.3rem;
    }
    .word-popup-word {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--ink, #231C38);
    }
    .word-popup-ipa {
      font-family: monospace;
      color: var(--muted, #847C9F);
      font-size: 0.9rem;
    }
    .word-popup-meaning {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--theme-lavender-deep, #4E3E96);
    }
    @media (max-width: 640px) {
      .reading-card {
        padding: 2rem 1.5rem;
      }
      .text-body {
        font-size: 1.1rem;
        line-height: 1.9;
      }
    }
  `;

  override render() {
    const allReadings: PassageReading[] = [];
    for (const lvl of levelOrder) {
      const data = allLevelsData[lvl];
      if (data && data.readings) {
        allReadings.push(...data.readings);
      }
    }

    const displayedReadings = this._filterLevel === 'all'
      ? allReadings
      : allReadings.filter(r => r.level === this._filterLevel);

    const current = this._selectedPassage || displayedReadings[0] || allReadings[0];

    // Build sentence pairs (use 1:1 paired definitions if available)
    const sentencePairs: { english: string; japanese: string }[] = current?.sentencePairs || (() => {
      const en = current ? current.passage.match(/[^.!?]+[.!?]+(\s+|$)/g) || [current.passage] : [];
      const ja = current ? current.passageJapanese.split(/(?<=[。！？])\s*/).filter(Boolean) : [];
      return en.map((sent, i) => ({ english: sent, japanese: ja[i] || '' }));
    })();

    return html`
      <div class="reader-header">
        <span class="reader-badge">対読講読システム</span>
        <h1>正典原典読解 (Sacred Scripture Reader)</h1>
        <p class="reader-sub">
          一文にカーソルを合わせると、日英の対照文が連動してハイライトされます。
          単語をタップすると即座に発音と語義を確認可能。直読直解の確かな力を養います。
        </p>

        <!-- Level Filter Tabs -->
        <div class="filter-row">
          <button class="filter-btn ${this._filterLevel === 'all' ? 'active' : ''}" 
                  @click=${() => { this._filterLevel = 'all'; this.requestUpdate(); }}>
            すべて (${allReadings.length})
          </button>
          ${levelOrder.map(lvl => {
            const count = allReadings.filter(r => r.level === lvl).length;
            return html`
              <button class="filter-btn ${this._filterLevel === lvl ? 'active' : ''}" 
                      @click=${() => { this._filterLevel = lvl; this.requestUpdate(); }}>
                ${lvl.toUpperCase()} (${count})
              </button>
            `;
          })}
        </div>

        <!-- Passage Buttons for the selected level -->
        <div class="passage-picker">
          ${displayedReadings.map(r => html`
            <button class="picker-btn ${current?.id === r.id ? 'active' : ''}" 
                    @click=${() => this._selectPassage(r)}>
              ${r.title}
            </button>
          `)}
        </div>
      </div>

      ${this._inspectedWord ? html`
        <div class="word-popup">
          <div>
            <div class="word-popup-head">
              <span class="word-popup-word">${this._inspectedWord.word}</span>
              ${this._inspectedWord.ipa ? html`<span class="word-popup-ipa">${this._inspectedWord.ipa}</span>` : ''}
            </div>
            <div class="word-popup-meaning">${this._inspectedWord.meaningJa}</div>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <button class="btn-audio" @click=${() => audioEngine.speak(this._inspectedWord?.word || '')} title="発音を聞く">
              <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
            <button class="btn-toggle" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" @click=${() => this._closeWordInspection()}>
              閉じる
            </button>
          </div>
        </div>
      ` : ''}

      ${current ? html`
        <div class="reading-card">
          <div class="reading-title-row">
            <div>
              <div class="reading-h2">${current.title}</div>
            </div>
            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <span class="source-tag">${current.source}</span>
              <button class="btn-audio" @click=${() => audioEngine.speak(current.passage)} title="全文を朗読">
                <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </button>
            </div>
          </div>

          <!-- English Passage Body with Sentence Spotlight -->
          <div class="text-body">
            ${sentencePairs.map((pair, sentIdx) => {
              const tokens = pair.english.trim().split(/\s+/);
              const isFocused = this._hoveredSentenceIdx === sentIdx;

              return html`
                <span class="sentence-span ${isFocused ? 'focused' : ''}"
                      @mouseenter=${() => { this._hoveredSentenceIdx = sentIdx; this.requestUpdate(); }}
                      @mouseleave=${() => { this._hoveredSentenceIdx = -1; this.requestUpdate(); }}>
                  ${tokens.map((token, tokIdx) => {
                    const globalIdx = sentIdx * 100 + tokIdx;
                    const isMasked = this._isClozeMode && (globalIdx % 5 === 2) && token.length > 3;

                    if (isMasked && !this._revealedClozeIndices.has(globalIdx)) {
                      return html`
                        <span class="cloze-blank" 
                              @click=${(e: Event) => { e.stopPropagation(); this._revealCloze(globalIdx, token); }}
                              title="タップして表示">
                          [ ? ]
                        </span>
                      `;
                    }

                    return html`
                      <span class="reading-token" 
                            @click=${(e: Event) => { e.stopPropagation(); this._onWordClick(token); }}>
                        ${token}${' '}
                      </span>
                    `;
                  })}
                </span>
              `;
            })}
          </div>

          <!-- Controls: Translation toggle and Cloze challenge -->
          <div class="action-row">
            <div style="display: flex; gap: 0.75rem;">
              <button class="btn-toggle ${this._showTranslation ? 'active' : ''}" @click=${this._toggleTranslation}>
                ${this._showTranslation ? '日本語対訳を隠す' : '日本語対訳を表示'}
              </button>
              <button class="btn-toggle ${this._isClozeMode ? 'active' : ''}" @click=${this._toggleClozeMode}>
                ${this._isClozeMode ? '穴埋めモード終了' : '穴埋め想起チャレンジ'}
              </button>
            </div>
            <div style="font-size: 0.8rem; color: var(--muted); font-weight: 700;">
              単語タップで辞書表示 ・ 文ホバーで日英対訳連動
            </div>
          </div>

          <!-- Synchronized Japanese Translation Box -->
          ${this._showTranslation ? html`
            <div class="translation-box">
              ${sentencePairs.map((pair, sentIdx) => {
                const isFocused = this._hoveredSentenceIdx === sentIdx;
                return html`
                  <span class="translation-sentence ${isFocused ? 'focused' : ''}"
                        @mouseenter=${() => { this._hoveredSentenceIdx = sentIdx; this.requestUpdate(); }}
                        @mouseleave=${() => { this._hoveredSentenceIdx = -1; this.requestUpdate(); }}>
                    ${pair.japanese}
                  </span>
                `;
              })}
            </div>
          ` : ''}
        </div>
      ` : ''}
    `;
  }
}
