import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { LevelId, LevelData } from '../../data/types';
import { allLevelsData, levelOrder } from '../../data';
import { Router } from '../../core/router';
import { audioEngine } from '../../core/audio';
import { setActiveLevel, store } from '../../core/store';

@customElement('hg-lessons-view')
export class HGLessonsView extends LitElement {
  static override properties = {
    activeLevel: { type: String },
    _activeTab: { state: true },
    _playingAudioKey: { state: true }
  };

  @property({ type: String })
  activeLevel: string = 'a1';

  @state()
  private _activeTab: 'grammar' | 'vocab' | 'readings' = 'grammar';

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

  private get _currentLevel(): LevelId {
    const lvl = (this.activeLevel || 'a1') as LevelId;
    return (allLevelsData[lvl] ? lvl : 'a1') as LevelId;
  }

  private _onLevelClick(lvlId: LevelId) {
    this.activeLevel = lvlId;
    setActiveLevel(lvlId);
    this.requestUpdate();
  }

  private _setTab(tab: 'grammar' | 'vocab' | 'readings') {
    this._activeTab = tab;
    this.requestUpdate();
  }

  private _playAudio(key: string, text: string, e: Event) {
    e.stopPropagation();
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

  private _openLesson(id: string) {
    Router.navigate('#lesson', { id });
  }

  static styles = css`
    :host {
      display: block;
      padding: 3rem 1.5rem 5rem;
      max-width: 1060px;
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
    .banner-title {
      font-size: 1.95rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
    }
    .banner-desc {
      font-size: 1.05rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.7;
    }
    /* Level Selector Pills */
    .level-selector-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      overflow-x: auto;
      padding: 0.4rem 0.2rem 0.6rem;
      margin-bottom: 2rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .level-selector-row::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    @media (min-width: 820px) {
      .level-selector-row {
        flex-wrap: wrap;
        overflow-x: visible;
      }
    }
    .level-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.75rem 1.25rem;
      border-radius: var(--radius-md, 20px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      box-shadow: 0 3px 0 var(--card-border, #DDD6F7), var(--bubble-shadow-sm);
      cursor: pointer;
      user-select: none;
      min-width: 125px;
      transition: all 0.16s var(--ease-spring);
      text-align: left;
      font-family: inherit;
    }
    .level-btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-2px);
    }
    .level-btn:active {
      transform: translateY(1px);
    }
    .level-btn.active {
      background: var(--theme-lavender, #7C66DC);
      border-color: var(--theme-lavender-deep, #4E3E96);
      color: #FFFFFF;
      box-shadow: 0 4px 0 var(--theme-lavender-deep, #4E3E96);
    }
    .level-btn.active .level-btn-ielts {
      color: rgba(255, 255, 255, 0.85);
    }
    .level-btn-tag {
      font-size: 1.05rem;
      font-weight: 800;
    }
    .level-btn-ielts {
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--muted, #847C9F);
      margin-top: 0.15rem;
    }
    /* Category Tabs */
    .tabs-bar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--theme-lavender-light, #ECE7FB);
      padding: 0.4rem;
      border-radius: var(--radius-pill, 9999px);
      width: fit-content;
      margin-bottom: 2.25rem;
    }
    .tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 1.4rem;
      font-size: 0.92rem;
      font-weight: 800;
      border: none;
      background: transparent;
      color: var(--ink-secondary, #564F70);
      border-radius: var(--radius-pill, 9999px);
      cursor: pointer;
      transition: all 0.14s ease;
      font-family: inherit;
    }
    .tab-btn:hover {
      color: var(--theme-lavender-deep, #4E3E96);
    }
    .tab-btn.active {
      background: var(--card-bg, #FFFFFF);
      color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 2px 8px rgba(124, 102, 220, 0.12);
    }
    /* Grammar List */
    .grammar-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .grammar-item-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      box-shadow: var(--bubble-tactile-card);
      padding: 1.75rem 2rem;
      cursor: pointer;
      transition: all 0.16s var(--ease-spring);
      position: relative;
    }
    .grammar-item-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(124, 102, 220, 0.15);
      border-color: var(--theme-lavender, #7C66DC);
    }
    .grammar-item-card:active {
      transform: translateY(1px);
    }
    .item-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      gap: 1rem;
    }
    .item-title {
      font-size: 1.2rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .badge-completed {
      font-size: 0.72rem;
      font-weight: 800;
      color: #047857;
      background: #ECFDF5;
      border: 1px solid #A7F3D0;
      padding: 0.15rem 0.55rem;
      border-radius: var(--radius-pill, 9999px);
    }
    .badge-bookmarked {
      font-size: 0.72rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1px solid var(--card-border, #DDD6F7);
      padding: 0.15rem 0.55rem;
      border-radius: var(--radius-pill, 9999px);
    }
    .item-meaning {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--theme-lavender-deep, #4E3E96);
      margin-top: 0.3rem;
      margin-bottom: 0.6rem;
    }
    .item-formula {
      font-family: var(--font-sans);
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--ink-secondary, #564F70);
      background: var(--card-subtle, #F4F1FD);
      padding: 0.45rem 0.9rem;
      border-radius: var(--radius-sm, 14px);
      border-left: 3px solid var(--theme-lavender, #7C66DC);
      margin-bottom: 0.75rem;
    }
    .item-preview {
      font-size: 0.9rem;
      color: var(--muted, #847C9F);
      font-style: italic;
      margin-bottom: 1.1rem;
    }
    .item-bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--card-subtle, #F4F1FD);
      padding-top: 0.9rem;
    }
    .btn-open-lesson {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 1.1rem;
      border-radius: var(--radius-pill, 9999px);
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      border: 1.5px solid var(--card-border, #DDD6F7);
      font-size: 0.86rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.14s ease;
      font-family: inherit;
    }
    .grammar-item-card:hover .btn-open-lesson {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
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
    /* Vocab Grid */
    .vocab-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
      gap: 1.25rem;
    }
    .vocab-bubble-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-md, 20px);
      box-shadow: var(--bubble-tactile-card);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
    }
    .vocab-card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .vocab-word {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      letter-spacing: -0.01em;
    }
    .vocab-ipa {
      font-size: 0.82rem;
      color: var(--muted, #847C9F);
      font-family: var(--font-serif);
    }
    .vocab-pos {
      font-size: 0.72rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      padding: 0.15rem 0.55rem;
      border-radius: var(--radius-pill, 9999px);
      text-transform: uppercase;
    }
    .vocab-meaning {
      font-size: 1rem;
      font-weight: 700;
      color: var(--ink, #231C38);
      margin-bottom: 0.35rem;
    }
    .vocab-example {
      font-size: 0.88rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.5;
    }
    .vocab-example-ja {
      font-size: 0.82rem;
      color: var(--muted, #847C9F);
      margin-top: 0.2rem;
    }
    .vocab-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--card-subtle, #F4F1FD);
      padding-top: 0.75rem;
      font-size: 0.76rem;
      color: var(--muted, #847C9F);
    }
    .vocab-btn-action {
      background: none;
      border: none;
      color: var(--theme-lavender-deep, #4E3E96);
      font-size: 0.8rem;
      font-weight: 800;
      cursor: pointer;
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-pill, 9999px);
      transition: all 0.12s ease;
    }
    .vocab-btn-action:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      text-decoration: underline;
    }
    /* Readings */
    .readings-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .reading-bubble-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      box-shadow: var(--bubble-tactile-card);
      padding: 2rem 2.25rem;
    }
    .reading-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.75rem;
    }
    .reading-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--ink, #231C38);
    }
    .reading-source {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      padding: 0.2rem 0.65rem;
      border-radius: var(--radius-pill, 9999px);
    }
    .reading-text {
      font-family: var(--font-serif);
      font-size: 1.05rem;
      line-height: 1.85;
      color: var(--ink, #231C38);
      margin-bottom: 1.25rem;
    }
    .reading-ja {
      font-size: 0.92rem;
      line-height: 1.7;
      color: var(--ink-secondary, #564F70);
      background: var(--card-subtle, #F4F1FD);
      padding: 1.1rem 1.35rem;
      border-radius: var(--radius-md, 20px);
      margin-bottom: 1.25rem;
    }
    .reading-footer-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--theme-lavender-light, #ECE7FB);
      padding-top: 1rem;
    }
    .reading-btn-action {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 1.1rem;
      border-radius: var(--radius-pill, 9999px);
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border: 1px solid var(--theme-lavender-deep, #4E3E96);
      font-size: 0.84rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.14s ease;
      font-family: inherit;
    }
    .reading-btn-action:hover {
      background: var(--theme-lavender-hover, #6D54CD);
      transform: translateY(-1px);
    }
  `;

  override render() {
    const data: LevelData = allLevelsData[this._currentLevel] || allLevelsData.a1;
    const completedList = store.getState().completedLessons;
    const bookmarksList = store.getState().bookmarks;

    return html`
      <div class="header-banner">
        <span class="banner-badge">${data.meta.name} — ${data.meta.ielts}</span>
        <h1 class="banner-title">${data.meta.japaneseName}</h1>
        <p class="banner-desc">${data.meta.descriptionJa}（典礼主題：${data.meta.scriptureThemeJa}）</p>
      </div>

      <!-- Level Pills -->
      <div class="level-selector-row">
        ${levelOrder.map(lvl => {
          const lData = allLevelsData[lvl];
          const isActive = this._currentLevel === lvl;
          return html`
            <button type="button" class="level-btn ${isActive ? 'active' : ''}" @click=${() => this._onLevelClick(lvl)}>
              <span class="level-btn-tag">${lvl.toUpperCase()}</span>
              <span class="level-btn-ielts">${lData.meta.ielts.replace('IELTS ', '')}</span>
            </button>
          `;
        })}
      </div>

      <!-- Category Tabs -->
      <div class="tabs-bar">
        <button class="tab-btn ${this._activeTab === 'grammar' ? 'active' : ''}" 
                @click=${() => this._setTab('grammar')}>
          文法体系 (${data.grammar.length})
        </button>
        <button class="tab-btn ${this._activeTab === 'vocab' ? 'active' : ''}" 
                @click=${() => this._setTab('vocab')}>
          語彙一覧 (${data.vocabulary.length})
        </button>
        <button class="tab-btn ${this._activeTab === 'readings' ? 'active' : ''}" 
                @click=${() => this._setTab('readings')}>
          原典講読 (${data.readings.length})
        </button>
      </div>

      <!-- Content Views -->
      ${this._activeTab === 'grammar' ? html`
        <div class="grammar-list">
          ${data.grammar.map(item => {
            const isCompleted = completedList.includes(item.id);
            const isBookmarked = bookmarksList.includes(item.id);
            const isPlaying = this._playingAudioKey === `grammar-${item.id}`;

            return html`
              <div class="grammar-item-card" 
                   role="button" 
                   tabindex="0" 
                   @click=${() => this._openLesson(item.id)}
                   @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this._openLesson(item.id)}>
                <div class="item-top">
                  <div>
                    <div class="item-title">
                      ${item.title}
                      ${isCompleted ? html`<span class="badge-completed">修了 ✓</span>` : ''}
                      ${isBookmarked ? html`<span class="badge-bookmarked">★ 保存中</span>` : ''}
                    </div>
                    <div class="item-meaning">意味・機能: ${item.japaneseMeaning}</div>
                  </div>
                  <button type="button" 
                          class="btn-audio ${isPlaying ? 'playing' : ''}" 
                          @click=${(e: Event) => this._playAudio(`grammar-${item.id}`, item.examples[0]?.english || '', e)} 
                          title="例文を発音">
                    <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                  </button>
                </div>
                <div class="item-formula">${item.structureFormula}</div>
                <div class="item-preview">例: "${item.examples[0]?.english}"</div>

                <div class="item-bottom-row">
                  <span style="font-size: 0.8rem; color: var(--muted); font-weight: 700;">
                    ${item.miniQuiz.length}問の確認クイズあり
                  </span>
                  <button type="button" class="btn-open-lesson" @click=${(e: Event) => { e.stopPropagation(); this._openLesson(item.id); }}>
                    解説・クイズを始める →
                  </button>
                </div>
              </div>
            `;
          })}
        </div>
      ` : ''}

      ${this._activeTab === 'vocab' ? html`
        <div class="vocab-grid">
          ${data.vocabulary.map(word => {
            const isPlaying = this._playingAudioKey === `vocab-${word.id}`;
            return html`
              <div class="vocab-bubble-card">
                <div>
                  <div class="vocab-card-header">
                    <div class="vocab-word">${word.word}</div>
                    <div class="vocab-ipa">${word.phoneticIpa}</div>
                  </div>
                  <div style="margin-top: 0.35rem; margin-bottom: 0.6rem;">
                    <span class="vocab-pos">${word.partOfSpeech}</span>
                  </div>
                  <div class="vocab-meaning">${word.japaneseMeaning}</div>
                  <div class="vocab-example">"${word.exampleSentence}"</div>
                  <div class="vocab-example-ja">${word.exampleJapanese}</div>
                </div>

                <div class="vocab-footer">
                  <span>${word.scriptureReference}</span>
                  <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <button class="vocab-btn-action" @click=${(e: Event) => { e.stopPropagation(); Router.navigate('#flashcards'); }}>
                      単語帳へ →
                    </button>
                    <button type="button" 
                            class="btn-audio ${isPlaying ? 'playing' : ''}" 
                            @click=${(e: Event) => this._playAudio(`vocab-${word.id}`, word.word, e)} 
                            title="発音を聞く">
                      <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            `;
          })}
        </div>
      ` : ''}

      ${this._activeTab === 'readings' ? html`
        <div class="readings-list">
          ${data.readings.map(reading => {
            const isPlaying = this._playingAudioKey === `reading-${reading.id}`;
            return html`
              <div class="reading-bubble-card">
                <div class="reading-top">
                  <div class="reading-title">${reading.title}</div>
                  <span class="reading-source">${reading.source}</span>
                </div>
                <div class="reading-text">${reading.passage}</div>
                <div class="reading-ja">${reading.passageJapanese}</div>

                <div class="reading-footer-row">
                  <button type="button" 
                          class="btn-audio ${isPlaying ? 'playing' : ''}" 
                          @click=${(e: Event) => this._playAudio(`reading-${reading.id}`, reading.passage, e)} 
                          title="全文を朗読">
                    <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                  </button>
                  <button type="button" 
                          class="reading-btn-action" 
                          @click=${() => Router.navigate('#reader')}>
                    対読リーダーで精読・穴埋め →
                  </button>
                </div>
              </div>
            `;
          })}
        </div>
      ` : ''}
    `;
  }
}
