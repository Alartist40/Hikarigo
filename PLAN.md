# Plan: HikariGo Bubbly Lavender Redesign & Deep CEFR Content Architecture

## Boundaries
- In-Scope:
  - Eliminate all emoji clutter, childish speech bubbles, and overstimulating visual slop.
  - Implement tactile Bubbly Lavender design system: soothing lavender palette (`#7C66DC`, `#F8F7FD`, `#ECE7FB`), generous whitespace, pill buttons (`border-radius: 9999px`), rounded tactile cards (`28px–36px`), and clean minimalist vector SVGs.
  - Massively expand educational curriculum across all CEFR/IELTS levels (A1, A2, B1, B2, C1, C2) with 60+ in-depth grammar lessons, 180+ vocabulary terms with IPA, 18 classical scripture reading passages, and rich simulation exams.
- Out-of-Scope: Secular slang, external server dependencies (pure local-first PWA).

## Stages
- [x] Stage 1: Design Purification (Lavender Bubbly Design Tokens & Tactile UI Helpers)
  - OWNS: `src/styles/tokens.css`, `src/styles/bubble-theme.css`
  - GATES: G1
- [x] Stage 2: Massively Expanded Biblical English Content (A1 to C2)
  - OWNS: `src/data/levels/a1.ts`, `src/data/levels/a2.ts`, `src/data/levels/b1.ts`, `src/data/levels/b2.ts`, `src/data/levels/c1.ts`, `src/data/levels/c2.ts`, `src/data/dictionary.ts`, `src/data/simulations.ts`
  - GATES: G2
- [x] Stage 3: Calm & Elegant Component Architecture (No Emojis, Clean SVGs, Bubbly Pills)
  - OWNS: `src/components/hg-header.ts`, `src/components/hg-mobile-nav.ts`, `src/hg-app.ts`, `index.html`
  - GATES: G3
- [x] Stage 4: Feature View Overhauls (Bubbly Lavender Layouts with Generous Whitespace)
  - OWNS: `src/features/lessons/hg-lessons-view.ts`, `src/features/lessons/hg-lesson-detail.ts`, `src/features/flashcards/hg-flashcards-view.ts`, `src/features/simulations/hg-simulations-view.ts`, `src/features/reader/hg-reader-view.ts`, `src/features/dictionary/hg-dict-search.ts`
  - GATES: G4
- [x] Stage 5: Verification, Production Compilation & Documentation Update
  - OWNS: `README.md`, `PLAN.md`, `IMPLEMENT.md`, `GATES.md`
  - GATES: G5
