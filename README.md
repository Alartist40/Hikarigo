# HikariGo (光り語)

**Light Language Learning for Japanese Speakers**

HikariGo is a privacy-first, offline-native Progressive Web App (PWA) designed to help Japanese speakers learn English through wholesome, secular-free educational content.

## Core Features (Phase 1)
- **Offline-Native:** Works completely offline using Service Workers and IndexedDB.
- **Privacy-First:** Zero data collection, no trackers, no external analytics.
- **Tap-to-Translate Reader:** Interactive reading interface for English text with instant Japanese glosses.
- **SRS Engine:** SM-2 algorithm integration for efficient vocabulary retention and daily reviews.
- **Lightweight Stack:** Built with Lit (Web Components), TypeScript, Dexie.js, and Go for build tools.

## Technical Stack
- **UI:** [Lit](https://lit.dev/) (Web Components)
- **State:** Custom Observable Store
- **Database:** IndexedDB (via [Dexie.js](https://dexie.org/))
- **Build Tools:** [Vite](https://vitejs.dev/) + [Go](https://go.dev/)
- **PWA:** [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+)
- [Go](https://go.dev/) (v1.24+)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Build Tools (Go)
To run the production release tool:
```bash
go run tools/cmd/release/main.go build
```

## Project Structure
- `src/`: Frontend source code (TypeScript/Lit)
- `static/`: Static assets and PWA manifest
- `tools/`: Go-based CLI tools for content and dictionary processing
- `dist/`: Compiled production build (generated)

## Philosophy
HikariGo is designed for simplicity and reliability. It follows a "local-first" architecture, meaning all data stays on the user's device. The "Dawn" color palette provides a soft, focused environment for daily learning.
