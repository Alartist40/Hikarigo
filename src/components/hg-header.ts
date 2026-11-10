import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Router } from '../core/router';
import { store, setActiveLevel, toggleTheme, exportProgressData, importProgressData } from '../core/store';
import { audioEngine } from '../core/audio';
import type { SpeechRate } from '../core/audio';
import type { LevelId } from '../data/types';
import './hg-lamp-tracker';

@customElement('hg-header')
export class HGHeader extends LitElement {
  static override properties = {
    activeRoute: { type: String },
    activeLevel: { type: String },
    points: { type: Number },
    streak: { type: Number },
    _audioRate: { state: true },
    _theme: { state: true },
    _canInstallPWA: { state: true },
    _showSettingsPopover: { state: true }
  };

  @property({ type: String })
  activeRoute: string = '#home';

  @property({ type: String })
  activeLevel: string = 'a1';

  @property({ type: Number })
  points: number = 0;

  @property({ type: Number })
  streak: number = 0;

  @state()
  private _audioRate: SpeechRate = audioEngine.rate;

  @state()
  private _theme: 'light' | 'dark' = store.getState().theme;

  @state()
  private _canInstallPWA: boolean = false;

  @state()
  private _showSettingsPopover: boolean = false;

  private _deferredPrompt: any = null;

  private _handleWindowClick = (e: MouseEvent) => {
    if (this._showSettingsPopover) {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._showSettingsPopover = false;
        this.requestUpdate();
      }
    }
  };

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._showSettingsPopover) {
      this._showSettingsPopover = false;
      this.requestUpdate();
    }
  };

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._handleWindowClick);
    window.addEventListener('keydown', this._handleKeyDown);
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this._deferredPrompt = e;
        this._canInstallPWA = true;
        this.requestUpdate();
      });
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('click', this._handleWindowClick);
    window.removeEventListener('keydown', this._handleKeyDown);
  }

  private _onLevelChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    setActiveLevel(target.value as LevelId);
    this.requestUpdate();
  }

  private _cycleAudioRate() {
    this._audioRate = audioEngine.cycleRate();
    this.requestUpdate();
  }

  private _toggleTheme() {
    toggleTheme();
    this._theme = store.getState().theme;
    this.requestUpdate();
  }

  private _toggleSettingsPopover(e: Event) {
    e.stopPropagation();
    this._showSettingsPopover = !this._showSettingsPopover;
    this.requestUpdate();
  }

  private async _promptInstall() {
    if (this._deferredPrompt) {
      this._deferredPrompt.prompt();
      const choiceResult = await this._deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        this._canInstallPWA = false;
      }
      this._deferredPrompt = null;
      this.requestUpdate();
    }
  }

  private _exportBackup() {
    const json = exportProgressData();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hikarigo-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private _triggerImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        const text = await file.text();
        const ok = importProgressData(text);
        if (ok) {
          alert('学習進捗を正常に復元しました。');
          window.location.reload();
        } else {
          alert('ファイルの読み込みに失敗しました。');
        }
      }
    };
    input.click();
  }

  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(14px);
      border-bottom: 1.5px solid var(--card-border, #DDD6F7);
      box-shadow: 0 2px 14px rgba(124, 102, 220, 0.06);
      transition: background 0.3s ease, border-color 0.3s ease;
    }
    :host-context([data-theme="dark"]), :host([data-theme="dark"]) {
      background: rgba(27, 21, 43, 0.95);
      border-bottom-color: #352B52;
    }
    .header-inner {
      max-width: 1240px;
      margin: 0 auto;
      height: 68px;
      padding: 0 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .brand-section {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      flex-shrink: 0;
    }
    .brand-logo-mark {
      width: 38px;
      height: 38px;
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: 14px;
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 0 var(--theme-lavender-deep, #4E3E96);
      transition: transform 0.16s var(--ease-spring);
    }
    .brand-section:hover .brand-logo-mark {
      transform: translateY(-2px) rotate(-3deg);
    }
    .brand-logo-mark svg {
      width: 20px;
      height: 20px;
      stroke: #FFFFFF;
    }
    .brand-title {
      font-size: 1.22rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 0.45rem;
      white-space: nowrap;
    }
    .brand-sub {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      padding: 0.18rem 0.6rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1px solid var(--card-border, #DDD6F7);
      letter-spacing: 0.02em;
      white-space: nowrap;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .nav-links::-webkit-scrollbar {
      display: none;
    }
    .nav-item {
      display: inline-flex;
      align-items: center;
      padding: 0.45rem 0.85rem;
      border-radius: var(--radius-pill, 9999px);
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--ink-secondary, #564F70);
      text-decoration: none;
      border: 1.5px solid transparent;
      cursor: pointer;
      transition: all 0.15s ease;
      user-select: none;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .nav-item:hover {
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      transform: translateY(-1px);
    }
    .nav-item.active {
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      border-color: var(--theme-lavender, #7C66DC);
      box-shadow: 0 2px 8px rgba(124, 102, 220, 0.1);
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }
    .btn-pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.35rem;
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-pill, 9999px);
      padding: 0.38rem 0.75rem;
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      cursor: pointer;
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: all 0.14s var(--ease-spring);
      user-select: none;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .btn-pill:hover {
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-1px);
      background: var(--card-subtle, #F4F1FD);
    }
    .btn-pill:active {
      transform: translateY(1px);
      box-shadow: 0 0 0 transparent;
    }
    .level-select-bubble {
      padding: 0.2rem 0.6rem;
    }
    .level-select-bubble select {
      background: transparent;
      border: none;
      font-size: 0.82rem;
      font-weight: 800;
      font-family: inherit;
      color: var(--ink, #231C38);
      outline: none;
      cursor: pointer;
    }
    .stat-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.38rem 0.75rem;
      border-radius: var(--radius-pill, 9999px);
      background: var(--theme-lavender-tint, #F7F5FE);
      border: 1.5px solid var(--card-border, #DDD6F7);
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      white-space: nowrap;
      flex-shrink: 0;
    }
    .stat-pill svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
    }
    /* Settings Popover */
    .settings-popover-wrap {
      position: relative;
      flex-shrink: 0;
    }
    .settings-popover {
      position: absolute;
      top: calc(100% + 12px);
      right: 0;
      width: 260px;
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 24px);
      box-shadow: 0 16px 36px rgba(124, 102, 220, 0.22);
      padding: 1.25rem;
      z-index: 500;
      animation: popIn 0.18s var(--ease-spring);
      white-space: normal;
    }
    @keyframes popIn {
      from { opacity: 0; transform: translateY(-8px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .pop-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.6rem 0;
      border-bottom: 1px solid var(--card-border, #DDD6F7);
    }
    .pop-row:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .pop-label {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--ink, #231C38);
    }
    .pop-action-btn {
      padding: 0.3rem 0.7rem;
      font-size: 0.78rem;
      font-weight: 800;
      border-radius: var(--radius-pill, 9999px);
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      border: 1px solid var(--card-border, #DDD6F7);
      cursor: pointer;
      transition: all 0.14s ease;
    }
    .pop-action-btn:hover {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
    }
    @media (max-width: 960px) {
      .nav-links {
        display: none;
      }
    }
  `;

  override render() {
    return html`
      <header class="header-inner">
        <div class="brand-section" @click=${() => Router.navigate('#home')}>
          <div class="brand-logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <div class="brand-title">
            HikariGo
            <span class="brand-sub">光語</span>
          </div>
        </div>

        <nav class="nav-links">
          <a class="nav-item ${this.activeRoute === '#home' ? 'active' : ''}" 
             @click=${() => Router.navigate('#home')}>ホーム</a>
          <a class="nav-item ${this.activeRoute.startsWith('#lesson') ? 'active' : ''}" 
             @click=${() => Router.navigate('#lessons')}>文法・体系</a>
          <a class="nav-item ${this.activeRoute.startsWith('#flashcards') ? 'active' : ''}" 
             @click=${() => Router.navigate('#flashcards')}>語彙暗記</a>
          <a class="nav-item ${this.activeRoute.startsWith('#reader') ? 'active' : ''}" 
             @click=${() => Router.navigate('#reader')}>読解・講読</a>
          <a class="nav-item ${this.activeRoute.startsWith('#practice') || this.activeRoute.startsWith('#scramble') || this.activeRoute.startsWith('#typing') || this.activeRoute.startsWith('#diagnostic') ? 'active' : ''}" 
             @click=${() => Router.navigate('#practice')}>実践演習</a>
          <a class="nav-item ${this.activeRoute.startsWith('#simulations') ? 'active' : ''}" 
             @click=${() => Router.navigate('#simulations')}>模擬試験</a>
          <a class="nav-item ${this.activeRoute.startsWith('#dictionary') ? 'active' : ''}" 
             @click=${() => Router.navigate('#dictionary')}>典礼辞典</a>
        </nav>

        <div class="header-right">
          <!-- Midnight Lavender Dark Mode Toggle -->
          <button class="btn-pill" @click=${this._toggleTheme} title="テーマ切り替え">
            ${this._theme === 'dark' ? html`
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ` : html`
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            `}
          </button>

          <!-- Level Selector -->
          <div class="btn-pill level-select-bubble">
            <select .value=${this.activeLevel} @change=${this._onLevelChange}>
              <option value="a1">A1 (3.0)</option>
              <option value="a2">A2 (4.0)</option>
              <option value="b1">B1 (5.0)</option>
              <option value="b2">B2 (6.5)</option>
              <option value="c1">C1 (7.5)</option>
              <option value="c2">C2 (9.0)</option>
            </select>
          </div>

          <!-- Lamp of Light Habit Tracker -->
          <hg-lamp-tracker .streak=${this.streak} .points=${this.points}></hg-lamp-tracker>

          <!-- Points Display -->
          <div class="stat-pill" title="獲得ポイント">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${this.points}
          </div>

          <!-- Settings & Tools Popover Trigger -->
          <div class="settings-popover-wrap">
            <button class="btn-pill" @click=${this._toggleSettingsPopover} title="各種設定・データ保存">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </button>

            ${this._showSettingsPopover ? html`
              <div class="settings-popover">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; font-weight: 800; font-size: 0.92rem; color: var(--ink);">
                  <span>環境設定 & バックアップ</span>
                  <button @click=${() => { this._showSettingsPopover = false; this.requestUpdate(); }} style="background: none; border: none; font-size: 1rem; cursor: pointer; color: var(--muted);">✕</button>
                </div>

                <div class="pop-row">
                  <span class="pop-label">朗読音声速度</span>
                  <button class="pop-action-btn" @click=${this._cycleAudioRate}>
                    ${this._audioRate}x
                  </button>
                </div>

                <div class="pop-row">
                  <span class="pop-label">進捗バックアップ</span>
                  <button class="pop-action-btn" @click=${this._exportBackup}>
                    JSON保存
                  </button>
                </div>

                <div class="pop-row">
                  <span class="pop-label">進捗データ復元</span>
                  <button class="pop-action-btn" @click=${this._triggerImport}>
                    読み込み
                  </button>
                </div>

                ${this._canInstallPWA ? html`
                  <div class="pop-row">
                    <span class="pop-label">ホームに追加</span>
                    <button class="pop-action-btn" style="background: var(--theme-lavender); color: #FFF;" @click=${this._promptInstall}>
                      PWAインストール
                    </button>
                  </div>
                ` : ''}
              </div>
            ` : ''}
          </div>
        </div>
      </header>
    `;
  }
}
