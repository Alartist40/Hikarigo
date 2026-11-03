import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { AppState } from './core/store';
import { store, setActiveLevel } from './core/store';
import type { ParsedRoute } from './core/router';
import { Router } from './core/router';
import { allLevelsData, levelOrder } from './data';

import './components/hg-header';
import './components/hg-mobile-nav';
import './styles/tokens.css';
import './styles/bubble-theme.css';

// Dynamic code-splitting for minimal initial bundle and ultra-fast loading
const componentLoaders: Record<string, () => Promise<unknown>> = {
  lessons: () => import('./features/lessons/hg-lessons-view'),
  lesson: () => import('./features/lessons/hg-lesson-detail'),
  flashcards: () => import('./features/flashcards/hg-flashcards-view'),
  simulations: () => import('./features/simulations/hg-simulations-view'),
  reader: () => import('./features/reader/hg-reader-view'),
  dictionary: () => import('./features/dictionary/hg-dict-search'),
  scramble: () => import('./features/games/hg-sentence-scramble'),
  typing: () => import('./features/games/hg-typing-practice'),
  diagnostic: () => import('./features/onboarding/hg-diagnostic-test')
};

const loadedComponents = new Set<string>();

function ensureComponentLoaded(route: string): Promise<unknown> {
  const loader = componentLoaders[route];
  if (!loader || loadedComponents.has(route)) {
    return Promise.resolve();
  }
  return loader().then(() => {
    loadedComponents.add(route);
  });
}

// Prefetch remaining routes during browser idle time for zero-latency transitions
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  (window as any).requestIdleCallback(() => {
    Object.keys(componentLoaders).forEach(r => ensureComponentLoaded(r));
  });
} else if (typeof window !== 'undefined') {
  setTimeout(() => {
    Object.keys(componentLoaders).forEach(r => ensureComponentLoaded(r));
  }, 1200);
}

@customElement('hg-app')
export class HGApp extends LitElement {
  static override properties = {
    state: { attribute: false },
    _parsedRoute: { state: true },
    _viewLoaded: { state: true }
  };

  @property({ attribute: false })
  state: AppState = store.getState();

  @state()
  private _parsedRoute: ParsedRoute = Router.parse(window.location.hash || '#home');

  @state()
  private _viewLoaded: boolean = true;

  private _unsubscribe?: () => void;

  override connectedCallback() {
    super.connectedCallback();
    this._unsubscribe = store.subscribe((newState) => {
      this.state = newState;
      this._parsedRoute = Router.parse(newState.currentRoute);
      this._handleRouteChange(this._parsedRoute.path);
      this.requestUpdate();
    });
    this._handleRouteChange(this._parsedRoute.path);
  }

  private _handleRouteChange(route: string) {
    if (componentLoaders[route] && !loadedComponents.has(route)) {
      this._viewLoaded = false;
      ensureComponentLoaded(route).then(() => {
        this._viewLoaded = true;
        this.requestUpdate();
      });
    } else {
      this._viewLoaded = true;
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubscribe) this._unsubscribe();
  }

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background-color: var(--bg-lavender, #F8F7FD);
      color: var(--ink, #231C38);
    }
    main {
      padding-bottom: 6rem;
    }
    .home-container {
      max-width: 1060px;
      margin: 0 auto;
      padding: 3.5rem 1.5rem 5rem;
    }
    .hero-banner {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-xl, 36px);
      box-shadow: var(--bubble-tactile-card);
      padding: 3.5rem 3rem;
      margin-bottom: 3.5rem;
      position: relative;
      overflow: hidden;
      animation: bubbleFloatIn 0.4s var(--ease-spring) both;
    }
    .hero-badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      color: var(--theme-lavender-deep, #4E3E96);
      background: var(--theme-lavender-light, #ECE7FB);
      border: 1.5px solid var(--card-border, #DDD6F7);
      padding: 0.4rem 1.1rem;
      border-radius: var(--radius-pill, 9999px);
      margin-bottom: 1.5rem;
      animation: gentleFloat 4s ease-in-out infinite;
      box-shadow: 0 2px 8px rgba(124, 102, 220, 0.1);
    }
    .hero-title {
      font-size: 2.6rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      line-height: 1.25;
      margin-bottom: 1.25rem;
      letter-spacing: -0.03em;
    }
    .hero-desc {
      font-size: 1.1rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.85;
      max-width: 760px;
      margin-bottom: 2.25rem;
    }
    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 0.8rem 1.85rem;
      font-weight: 700;
      font-size: 0.98rem;
      border-radius: var(--radius-pill, 9999px);
      border: 1.5px solid var(--card-border, #DDD6F7);
      background: var(--card-bg, #FFFFFF);
      color: var(--ink, #231C38);
      box-shadow: 0 3px 0 var(--card-border, #DDD6F7), var(--bubble-shadow-sm);
      cursor: pointer;
      user-select: none;
      transition: all 0.18s var(--ease-spring);
      text-decoration: none;
    }
    .btn:hover {
      background: var(--card-subtle, #F4F1FD);
      border-color: var(--theme-lavender, #7C66DC);
      transform: translateY(-2px);
      box-shadow: 0 5px 0 var(--card-border, #DDD6F7), 0 8px 18px rgba(124, 102, 220, 0.14);
    }
    .btn:active {
      transform: translateY(3px) scale(0.97);
      box-shadow: 0 0 0 transparent;
    }
    .btn-lavender {
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      border-color: var(--theme-lavender-deep, #4E3E96);
      box-shadow: 0 4px 0 var(--theme-lavender-deep, #4E3E96), var(--bubble-shadow-sm);
    }
    .btn-lavender:hover {
      background: var(--theme-lavender-hover, #6D54CD);
      color: #FFFFFF;
      box-shadow: 0 5px 0 var(--theme-lavender-deep, #4E3E96), 0 8px 20px rgba(124, 102, 220, 0.25);
    }
    .section-header {
      margin-bottom: 1.75rem;
      animation: bubbleFloatIn 0.45s var(--ease-spring) both;
    }
    .section-title {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--ink, #231C38);
      margin-bottom: 0.4rem;
    }
    .section-subtitle {
      font-size: 0.92rem;
      color: var(--muted, #847C9F);
    }
    .levels-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
    .level-bubble-card {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-lg, 28px);
      box-shadow: var(--bubble-tactile-card);
      padding: 1.85rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s var(--ease-spring);
      min-height: 200px;
      animation: bubbleFloatIn 0.5s var(--ease-spring) both;
    }
    .level-bubble-card:hover {
      transform: translateY(-4px) scale(1.01);
      border-color: var(--theme-lavender, #7C66DC);
      box-shadow: 0 6px 0 var(--theme-lavender, #7C66DC), 0 12px 28px rgba(124, 102, 220, 0.18);
    }
    .level-bubble-card:active {
      transform: translateY(2px) scale(0.98);
      box-shadow: 0 1px 0 var(--card-border, #DDD6F7);
    }
    .level-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .level-pill {
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      padding: 0.25rem 0.8rem;
      border-radius: var(--radius-pill, 9999px);
      background: var(--theme-lavender, #7C66DC);
      color: #FFFFFF;
      transition: transform 0.18s ease;
    }
    .level-bubble-card:hover .level-pill {
      transform: scale(1.06);
    }
    .level-ielts {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
    }
    .level-name {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--ink, #231C38);
      margin-bottom: 0.35rem;
    }
    .level-theme {
      font-size: 0.86rem;
      font-weight: 700;
      color: var(--theme-lavender, #7C66DC);
      margin-bottom: 0.65rem;
    }
    .level-desc {
      font-size: 0.92rem;
      color: var(--ink-secondary, #564F70);
      line-height: 1.6;
    }
    .level-card-bottom {
      border-top: 1.5px solid var(--theme-lavender-tint, #F7F5FE);
      padding-top: 1rem;
      margin-top: 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--muted, #847C9F);
    }
    .level-card-cta {
      color: var(--theme-lavender-deep, #4E3E96);
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      transition: transform 0.18s ease;
    }
    .level-bubble-card:hover .level-card-cta {
      transform: translateX(3px);
    }
    .features-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 1.5rem;
    }
    .feature-bubble-box {
      background: var(--card-bg, #FFFFFF);
      border: 1.5px solid var(--card-border, #DDD6F7);
      border-radius: var(--radius-md, 20px);
      padding: 1.6rem;
      box-shadow: var(--bubble-shadow-sm);
      cursor: pointer;
      transition: all 0.2s var(--ease-spring);
      animation: bubbleFloatIn 0.55s var(--ease-spring) both;
    }
    .feature-bubble-box:hover {
      transform: translateY(-3px) scale(1.015);
      border-color: var(--theme-lavender, #7C66DC);
      box-shadow: 0 8px 24px rgba(124, 102, 220, 0.14);
    }
    .feature-bubble-box:active {
      transform: translateY(2px) scale(0.98);
    }
    .feature-bubble-icon {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: var(--theme-lavender-light, #ECE7FB);
      color: var(--theme-lavender-deep, #4E3E96);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.1rem;
      transition: transform 0.2s var(--ease-spring);
    }
    .feature-bubble-box:hover .feature-bubble-icon {
      transform: scale(1.1) rotate(3deg);
    }
    .feature-bubble-icon svg {
      width: 22px;
      height: 22px;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
    }
    .feature-head {
      font-size: 1.05rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      color: var(--ink, #231C38);
    }
    .feature-body {
      font-size: 0.88rem;
      line-height: 1.65;
      color: var(--ink-secondary, #564F70);
    }
    .loading-spinner-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 350px;
    }
    .loading-pulse {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: var(--theme-lavender-light, #ECE7FB);
      border: 3px solid var(--theme-lavender, #7C66DC);
      animation: bubblePulse 1.2s infinite;
    }
    @media (max-width: 640px) {
      .hero-banner {
        padding: 2.25rem 1.5rem;
      }
      .hero-title {
        font-size: 1.9rem;
      }
    }
  `;

  private _navigateToLevel(lvlId: any) {
    setActiveLevel(lvlId);
    Router.navigate('#lessons');
  }

  private _renderHome() {
    return html`
      <div class="home-container">
        <div class="hero-banner">
          <div class="hero-badge-pill">
            <span>CEFR A1–C2 / IELTS 3.0–9.0 体系的シラバス</span>
          </div>
          <h1 class="hero-title">
            聖書と正典で学ぶ、品格ある英語
          </h1>
          <p class="hero-desc">
            光語（HikariGo）は、世俗の低俗な語彙やスラングを排し、聖書と格式ある古典英文から抽出した文法公式・精選語彙・読解演習を通じて、初歩（A1）から達人級（C2）までの堅固な英語運用能力を育む独自の学習プラットフォームです。
          </p>
          <div class="hero-actions">
            <button class="btn btn-lavender" @click=${() => Router.navigate('#lessons')}>
              学習カリキュラムを見る
            </button>
            <button class="btn" @click=${() => Router.navigate('#diagnostic')}>
              スタート診断テスト (5分)
            </button>
            <button class="btn" @click=${() => Router.navigate('#scramble')}>
              語順パズル
            </button>
            <button class="btn" @click=${() => Router.navigate('#typing')}>
              名句タイピング
            </button>
            <button class="btn" @click=${() => Router.navigate('#simulations')}>
              実力判定・模擬試験
            </button>
            <button class="btn" @click=${() => Router.navigate('#dictionary')}>
              典礼語彙辞典
            </button>
          </div>
        </div>

        <div class="section-header">
          <h2 class="section-title">習得レベル一覧（CEFR・IELTS対応）</h2>
          <p class="section-subtitle">基礎の存在宣言から、学術的・神学的論証まで段階的に深化します。</p>
        </div>

        <div class="levels-grid">
          ${levelOrder.map(lvlId => {
            const data = allLevelsData[lvlId];
            return html`
              <div class="level-bubble-card" @click=${() => this._navigateToLevel(lvlId)}>
                <div>
                  <div class="level-card-top">
                    <span class="level-pill" style="background: ${data.meta.badgeColor};">
                      ${data.meta.name}
                    </span>
                    <span class="level-ielts">${data.meta.ielts}</span>
                  </div>
                  <div class="level-name">${data.meta.japaneseName}</div>
                  <div class="level-theme">${data.meta.scriptureThemeJa}</div>
                  <div class="level-desc">${data.meta.descriptionJa}</div>
                </div>

                <div class="level-card-bottom">
                  <span>文法 ${data.grammar.length}項目 ・ 語彙 ${data.vocabulary.length}語</span>
                  <span class="level-card-cta">
                    詳細
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                </div>
              </div>
            `;
          })}
        </div>

        <div class="section-header">
          <h2 class="section-title">4つの学習ピラー</h2>
          <p class="section-subtitle">多角的かつ持続的な学習を実現する機能群</p>
        </div>

        <div class="features-row">
          <div class="feature-bubble-box" @click=${() => Router.navigate('#lessons')}>
            <div class="feature-bubble-icon">
              <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <div class="feature-head">文法公式と例文</div>
            <div class="feature-body">明快な接続公式、日本語精密解説、聖書・過去問由来の例文で文法体系を完全網羅。</div>
          </div>

          <div class="feature-bubble-box" @click=${() => Router.navigate('#flashcards')}>
            <div class="feature-bubble-icon">
              <svg viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div class="feature-head">間隔反復 (SRS) フラッシュカード</div>
            <div class="feature-body">科学的SM-2アルゴリズムを採用。忘却曲線に沿って最適な間隔で語彙と文法を定着させます。</div>
          </div>

          <div class="feature-bubble-box" @click=${() => Router.navigate('#reader')}>
            <div class="feature-bubble-icon">
              <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <div class="feature-head">タップ解説・対読リーダー</div>
            <div class="feature-body">一節ごとの日本語対訳と単語即時検索。聖書原典や古典英文を無理なく通読できます。</div>
          </div>

          <div class="feature-bubble-box" @click=${() => Router.navigate('#simulations')}>
            <div class="feature-bubble-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
            </div>
            <div class="feature-head">模擬試験・実力判定</div>
            <div class="feature-body">CEFR基準の客観テストで文法力・語彙力を測定。即時採点と解説で弱点を克服。</div>
          </div>
        </div>

        <div class="section-header" style="margin-top: 3.5rem;">
          <h2 class="section-title">実践演習 & アクティブ・ラーニング</h2>
          <p class="section-subtitle">能動的な出力（アウトプット）で構文と綴りを指先から定着させます。</p>
        </div>

        <div class="features-row" style="margin-bottom: 4rem;">
          <div class="feature-bubble-box" @click=${() => Router.navigate('#scramble')}>
            <div class="feature-bubble-icon">
              <svg viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
            </div>
            <div class="feature-head">語順並べ替えパズル</div>
            <div class="feature-body">バブル状の単語ブロックを正しい語順にタップ。統語構造をゲーム感覚で体得します。</div>
          </div>

          <div class="feature-bubble-box" @click=${() => Router.navigate('#typing')}>
            <div class="feature-bubble-icon">
              <svg viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/></svg>
            </div>
            <div class="feature-head">聖書名句タイピング演習</div>
            <div class="feature-body">格調高い英文をタイピングしながら、英単語の正確な綴りと句読点（Punctuation）を習得。</div>
          </div>

          <div class="feature-bubble-box" @click=${() => Router.navigate('#diagnostic')}>
            <div class="feature-bubble-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <div class="feature-head">スタートレベル診断テスト</div>
            <div class="feature-body">A1からC2まで全6問のクイックテストで、あなたに最適な学習レベルを瞬時に判定。</div>
          </div>
        </div>

        <!-- Privacy & Security Guarantee -->
        <div style="background: var(--card-bg); border: 1.5px solid var(--card-border); border-radius: var(--radius-xl); padding: 2.5rem 3rem; margin-bottom: 2rem; box-shadow: var(--bubble-shadow-sm);">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.78rem; font-weight: 800; color: var(--theme-lavender-deep); background: var(--theme-lavender-light); padding: 0.25rem 0.85rem; border-radius: 9999px; margin-bottom: 0.75rem;">
            <span>完全ローカル & プライバシー保護 (100% Client-Side Privacy)</span>
          </div>
          <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.6rem;">
            個人情報・学習履歴の収集は一切行いません
          </h3>
          <p style="font-size: 0.95rem; color: var(--ink-secondary); line-height: 1.8;">
            HikariGoはお客様のプライバシーを最優先に設計されています。アカウント登録やログイン、外部サーバーへのデータ送信は一切不要です。
            学習記録・SRS単語帳・模試の履歴はすべてお使いの端末（ブラウザのIndexedDB / localStorage）にのみ安全に保管されます。
            ヘッダーの「保存」ボタンから、いつでも学習進捗を1クリックでJSONバックアップとして書き出し・復元できます。
          </p>
        </div>
      </div>
    `;
  }

  private _renderPracticeHub() {
    return html`
      <div class="home-container">
        <div class="section-header" style="text-align: center; margin-bottom: 2.75rem;">
          <div class="hero-badge-pill" style="margin-bottom: 1rem;">
            <span>能動的アウトプット学習 (Active Learning)</span>
          </div>
          <h1 style="font-size: 2.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.6rem; letter-spacing: -0.02em;">
            実践演習・体感ゲームハブ
          </h1>
          <p style="color: var(--ink-secondary); font-size: 1.05rem; max-width: 620px; margin: 0 auto; line-height: 1.7;">
            知識を蓄えるだけでなく、パズル・タイピング・診断テストで「使える英語」を指先から定着させます。
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 1.75rem; margin-bottom: 4rem;">
          <!-- Scramble Card -->
          <div class="feature-bubble-box" style="padding: 2.75rem 2.25rem; cursor: pointer;" @click=${() => Router.navigate('#scramble')}>
            <div class="feature-bubble-icon" style="width: 54px; height: 54px; background: #ECE7FB;">
              <svg viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
            </div>
            <div style="display: inline-block; font-size: 0.78rem; font-weight: 800; color: var(--theme-lavender-deep); background: var(--theme-lavender-light); padding: 0.25rem 0.85rem; border-radius: 9999px; margin-bottom: 0.9rem;">
              🧩 構文パズル
            </div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.65rem;">
              聖書語順並べ替えパズル
            </div>
            <div style="font-size: 0.92rem; color: var(--ink-secondary); line-height: 1.7; margin-bottom: 1.75rem;">
              バラバラになったバブル状の単語ブロックを正しい語順にタップして復元。聖句完成時にネイティブ発音朗読と祝祭演出！
            </div>
            <button class="btn btn-lavender" style="width: 100%; justify-content: center;">
              パズルに挑戦する
            </button>
          </div>

          <!-- Typing Card -->
          <div class="feature-bubble-box" style="padding: 2.75rem 2.25rem; cursor: pointer;" @click=${() => Router.navigate('#typing')}>
            <div class="feature-bubble-icon" style="width: 54px; height: 54px; background: #ECE7FB;">
              <svg viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/></svg>
            </div>
            <div style="display: inline-block; font-size: 0.78rem; font-weight: 800; color: var(--theme-lavender-deep); background: var(--theme-lavender-light); padding: 0.25rem 0.85rem; border-radius: 9999px; margin-bottom: 0.9rem;">
              ⌨️ 速度 & 正確度
            </div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.65rem;">
              聖書名句タイピング演習
            </div>
            <div style="font-size: 0.92rem; color: var(--ink-secondary); line-height: 1.7; margin-bottom: 1.75rem;">
              正確性とタイピング速度（WPM）をリアルタイム測定しながら、聖書の生きた名文を指先の運動記憶で暗記します。
            </div>
            <button class="btn btn-lavender" style="width: 100%; justify-content: center;">
              タイピングを開始
            </button>
          </div>

          <!-- Diagnostic Card -->
          <div class="feature-bubble-box" style="padding: 2.75rem 2.25rem; cursor: pointer;" @click=${() => Router.navigate('#diagnostic')}>
            <div class="feature-bubble-icon" style="width: 54px; height: 54px; background: #ECE7FB;">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <div style="display: inline-block; font-size: 0.78rem; font-weight: 800; color: var(--theme-lavender-deep); background: var(--theme-lavender-light); padding: 0.25rem 0.85rem; border-radius: 9999px; margin-bottom: 0.9rem;">
              ⏱️ 約5分
            </div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.65rem;">
              5分簡易実力診断テスト
            </div>
            <div style="font-size: 0.92rem; color: var(--ink-secondary); line-height: 1.7; margin-bottom: 1.75rem;">
              A1からC2まで全6問の適応型テスト。あなたの現在の客観的なCEFR目安レベルと最適な学習開始シラバスを瞬時に診断。
            </div>
            <button class="btn btn-lavender" style="width: 100%; justify-content: center;">
              診断テストを受ける
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private _renderCurrentView() {
    const route = this._parsedRoute.path;
    const params = this._parsedRoute.params;

    if (!this._viewLoaded && route !== 'home') {
      return html`
        <div class="loading-spinner-wrap">
          <div class="loading-pulse"></div>
        </div>
      `;
    }

    switch (route) {
      case 'home':
        return this._renderHome();
      case 'lessons':
        return html`<hg-lessons-view .activeLevel=${this.state.activeLevel}></hg-lessons-view>`;
      case 'lesson':
        return html`<hg-lesson-detail .lessonId=${params.id || ''} .levelId=${this.state.activeLevel}></hg-lesson-detail>`;
      case 'flashcards':
        return html`<hg-flashcards-view .activeLevel=${this.state.activeLevel}></hg-flashcards-view>`;
      case 'simulations':
        return html`<hg-simulations-view .activeLevel=${this.state.activeLevel}></hg-simulations-view>`;
      case 'reader':
        return html`<hg-reader-view .activeLevel=${this.state.activeLevel}></hg-reader-view>`;
      case 'dictionary':
        return html`<hg-dict-search></hg-dict-search>`;
      case 'practice':
        return this._renderPracticeHub();
      case 'scramble':
        return html`<hg-sentence-scramble></hg-sentence-scramble>`;
      case 'typing':
        return html`<hg-typing-practice></hg-typing-practice>`;
      case 'diagnostic':
        return html`<hg-diagnostic-test></hg-diagnostic-test>`;
      default:
        return this._renderHome();
    }
  }

  override render() {
    return html`
      <hg-header 
        .activeRoute=${this.state.currentRoute} 
        .activeLevel=${this.state.activeLevel}
        .points=${this.state.points}
        .streak=${this.state.streak}>
      </hg-header>

      <main>
        ${this._renderCurrentView()}
      </main>

      <hg-mobile-nav .activeRoute=${this.state.currentRoute}></hg-mobile-nav>
    `;
  }
}
