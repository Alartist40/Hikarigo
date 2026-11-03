# Changelog

All notable changes to this project will be documented in this file.

## [1.3.1] - 2026-11-04

### Fixed
- **Nav Bar Layout & Whitespace Restoration**:
  - Eliminated text wrapping and flex squishing across navigation links and status badges with `white-space: nowrap` and `flex-shrink: 0`.
  - Grouped utility buttons (Audio rate, Backup export/import, PWA install) into a compact Settings & Backup popover, freeing over 150px of whitespace.
  - Resolved Lamp of Light Habit Tracker vertical text overflow.
- **Popover Dismissal & Auto-Close**:
  - Added click-outside listeners (`window.addEventListener('click')`), `Escape` key handlers, and explicit `✕` close buttons across `<hg-lamp-tracker>`, `<hg-header>`, and the word inspector in `<hg-reader-view>`.
  - Prevented any hover-based premature popover triggers.
- **Practice & Games Discoverability**:
  - Added a prominent `実践演習` (Practice & Games `#practice`) tab directly to the desktop navbar and mobile bottom navigation bar.
  - Created a dedicated Interactive Practice Hub featuring **聖書語順並べ替えパズル**, **聖書名句タイピング演習**, and **5分簡易実力診断テスト**.
  - Fixed HTML nesting on the Home page.
- **Flawless Sentence-by-Sentence Reader Synchronization**:
  - Implemented exact 1:1 `sentencePairs` across all curriculum levels (A1 through C2), eliminating regex misalignment.
  - Added a Level Filter bar (`すべて`, `A1`, `A2`, `B1`, `B2`, `C1`, `C2`) allowing learners to browse the expanded library of classical passages.
  - Enabled bidirectional sentence illumination between English and Japanese text.

## [1.3.0] - 2026-11-04

### Added
- **100% Client-Side Privacy Architecture**:
  - Zero external tracking, zero analytics cookies, zero third-party ads, zero cloud login requirements.
  - Complete local persistence powered by Dexie `IndexedDB` (`HikariGoDB`) and `localStorage`.
  - JSON Data Export & Import progress backup utility in application header.
  - Comprehensive privacy explanation card and popover in About view and Lamp Tracker.
- **Grand Sacred English Lexicon (250+ entries)**:
  - Expanded lexicon to over 250 curated entries covering biblical idioms ("apple of the eye", "salt of the earth", "pearl of great price", "skin of one's teeth"), theological concepts (atonement, sanctification, justification, incarnation, transfiguration), and liturgical terms with IPA phonetics and scripture references.
- **Interactive Practice Suite**:
  - **Scripture Sentence Scramble (`hg-sentence-scramble`)**: Tactile interactive word-pill reconstitution puzzle with spring animations, audio recitation, and victory celebration.
  - **Scripture Typing Practice (`hg-typing-practice`)**: Precision scripture typing tool with live Words Per Minute (WPM), accuracy percentage, letter-by-letter feedback, and instant audio recitation.
  - **5-Minute Quick Diagnostic Test (`hg-diagnostic-test`)**: Multi-level placement exam instantly analyzing proficiency across CEFR A1 to C2 and tailoring starting level.
- **Classical Scripture Reader Enhancements**:
  - Dual-language synchronized sentence illumination highlighting English and Japanese pairs in tandem.
  - Cloze Masking Mode for active recall practice with tap-to-reveal tokens.
- **Lamp of Light Habit Tracker (`hg-lamp-tracker`)**:
  - Ambient glowing lamp in header reflecting learner's daily streak and devotion.
- **Dark Mode & Accessibility**:
  - Midnight Lavender Dark Mode with instant toggle and persistent state.
  - Desktop keyboard shortcuts (`Space` to flip flashcards, `1`-`4` for self-rating, `Enter` to submit).
  - Audio speed cycler (`0.75x`, `1.0x`, `1.25x`) and pitch adjustment using Web Speech API.
  - High-fidelity print stylesheet (`@media print`) for clean paper study cheat sheets.
  - Canvas confetti micro-celebration burst upon quiz/game/exam completion.

## [1.2.0] - 2026-11-04

### Added
- **Lively Bubbly Lavender UI Animations**:
  - Spring-physics tactile interactions (`--ease-spring`: `cubic-bezier(0.34, 1.56, 0.64, 1)`) for buttons, cards, pills, and inputs.
  - Smooth 3D card flips with spring bounce on review flashcards.
  - Floating animations for badge elements and glowing subtle hover elevations.
- **Ultra-Lightweight Lazy Loading for Slow Internet**:
  - Dynamic code-splitting on route transitions: initial payload is strictly minimized so users with low bandwidth or mobile connections load the app instantly.
  - Prefetching on browser idle time (`requestIdleCallback`) ensuring instant transitions with zero network lag.
  - Full cache purge and build directory optimization.

### Changed
- Complete decoupling and removal of any external references, standardizing on HikariGo's independent brand identity.
- Database upgraded to `HikariGoDB`.
- Stylesheet standardized as `src/styles/bubble-theme.css`.

## [1.1.0] - 2026-11-04

### Fixed
- **Complete Interactivity & Reactivity Overhaul**:
  - Resolved Lit reactivity shadowing issue across all views by configuring `useDefineForClassFields: false` in `tsconfig.json` and `vite.config.ts`.
  - Added explicit Lit `static properties` and direct `this.requestUpdate()` invocations to all components (`hg-lessons-view`, `hg-lesson-detail`, `hg-flashcards-view`, `hg-simulations-view`, `hg-reader-view`, `hg-dict-search`, `hg-header`, `hg-app`).
  - Ensured every interactive control responds immediately to user clicks.
  - Enhanced `Router.navigate` to immediately synchronize application store state and trigger reactive route transitions.
  - Synchronized Dexie IndexedDB tables (`srsCards` and `examRecords`) with strict TypeScript types.

## [1.0.0] - 2026-11-03

### Added
- Comprehensive CEFR A1–C2 & IELTS (3.0–9.0) Bible-Based Curriculum.
- Core Educational Features: Lessons Hub, 3D Flashcards with SRS Engine, Timed English Simulations, Scripture Reader, Bible & Academic Dictionary.
