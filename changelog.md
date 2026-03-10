# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-03-10

### Added
- **Initial Project Structure:** Foundation for Phase 1 (Foundation).
- **Core Infrastructure:**
  - Observable state store (`src/core/store.ts`).
  - Hash-based router (`src/core/router.ts`).
  - IndexedDB schema with Dexie (`src/core/db.ts`).
- **Web Components:**
  - Root app shell (`hg-app`).
  - Navigation bar (`hg-nav`) with Home, Learn, Review, Dict, and Profile routes.
  - Basic Reader view (`hg-reader-view`) with word-tap interaction placeholder.
- **PWA & Build Pipeline:**
  - Vite + `vite-plugin-pwa` integration.
  - Service Worker (`src/sw.ts`) with precaching.
  - Go-based release tool (`tools/cmd/release/main.go`).
- **Styling:** "Dawn" color palette and core CSS tokens (`src/styles/tokens.css`).
- **Documentation:** Initial `README.md` and `changelog.md`.
