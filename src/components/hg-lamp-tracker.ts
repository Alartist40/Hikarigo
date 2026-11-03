import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('hg-lamp-tracker')
export class HGLampTracker extends LitElement {
  static override properties = {
    streak: { type: Number },
    points: { type: Number },
    _showPopover: { state: true }
  };

  @property({ type: Number })
  streak: number = 3;

  @property({ type: Number })
  points: number = 120;

  @state()
  private _showPopover: boolean = false;

  private _handleWindowClick = (e: MouseEvent) => {
    if (this._showPopover) {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._showPopover = false;
        this.requestUpdate();
      }
    }
  };

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._showPopover) {
      this._showPopover = false;
      this.requestUpdate();
    }
  };

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._handleWindowClick);
    window.addEventListener('keydown', this._handleKeyDown);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('click', this._handleWindowClick);
    window.removeEventListener('keydown', this._handleKeyDown);
  }

  private _togglePopover(e: Event) {
    e.stopPropagation();
    this._showPopover = !this._showPopover;
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      flex-shrink: 0;
      white-space: nowrap;
    }
    .lamp-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-pill, 9999px);
      background: var(--theme-lavender-tint, #F7F5FE);
      border: 1.5px solid var(--card-border, #DDD6F7);
      cursor: pointer;
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 2px 0 var(--card-border, #DDD6F7);
      transition: all 0.16s var(--ease-spring);
      user-select: none;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .lamp-btn:hover {
      transform: translateY(-1px) scale(1.02);
      border-color: var(--theme-lavender, #7C66DC);
    }
    .lamp-btn:active {
      transform: translateY(1px);
    }
    .lamp-glow {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #FDE047;
      box-shadow: 0 0 8px #FACC15, 0 0 14px rgba(250, 204, 21, 0.6);
      flex-shrink: 0;
      animation: gentleFloat 2.5s ease-in-out infinite;
    }
    @keyframes gentleFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-2px); }
    }
    .popover {
      position: absolute;
      top: calc(100% + 12px);
      right: 0;
      width: 290px;
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 24px);
      box-shadow: 0 16px 36px rgba(124, 102, 220, 0.22);
      padding: 1.35rem;
      z-index: 500;
      animation: popIn 0.18s var(--ease-spring);
      white-space: normal;
    }
    @keyframes popIn {
      from { opacity: 0; transform: translateY(-8px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .pop-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
    }
    .pop-title {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      display: flex;
      align-items: center;
      gap: 0.45rem;
    }
    .pop-close {
      background: none;
      border: none;
      color: var(--muted, #847C9F);
      font-size: 1rem;
      cursor: pointer;
      padding: 0.2rem 0.4rem;
      border-radius: 50%;
      line-height: 1;
      transition: color 0.15s ease;
    }
    .pop-close:hover {
      color: var(--ink, #231C38);
    }
    .pop-body {
      font-size: 0.8rem;
      line-height: 1.6;
      color: var(--ink-secondary, #564F70);
      margin-bottom: 0.9rem;
    }
    .pop-stat {
      background: var(--card-subtle, #F4F1FD);
      padding: 0.55rem 0.85rem;
      border-radius: var(--radius-sm, 14px);
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--theme-lavender-deep, #4E3E96);
    }
  `;

  override render() {
    return html`
      <button class="lamp-btn" @click=${this._togglePopover} title="光の灯火 (Habit Lamp)">
        <span class="lamp-glow"></span>
        <span>${this.streak}日灯火</span>
      </button>

      ${this._showPopover ? html`
        <div class="popover">
          <div class="pop-header">
            <div class="pop-title">
              <span class="lamp-glow" style="width: 11px; height: 11px;"></span>
              光の灯火 (Lamp of Light)
            </div>
            <button class="pop-close" @click=${() => { this._showPopover = false; this.requestUpdate(); }} title="閉じる">✕</button>
          </div>
          <div class="pop-body">
            毎日の学習と復習を続けることで、灯火が温かく輝きます。
            すべての進捗はお使いのブラウザ（IndexedDB）に安全に保存され、外部サーバーへの通信は一切ありません。
          </div>
          <div class="pop-stat">
            連続学習: ${this.streak}日目 ・ 累計獲得: ${this.points}pt
          </div>
        </div>
      ` : ''}
    `;
  }
}
