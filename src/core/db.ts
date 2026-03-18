import Dexie, { Table } from 'dexie';

export interface SRSCard {
  id?: number;
  wordId: string;
  level: string;
  interval: number;
  repetition: number;
  easeFactor: number;
  nextReview: Date;
  lastReviewed: Date;
}

export interface QuizResult {
  id?: number;
  quizId: string;
  score: number;
  completedAt: Date;
}

export class HikariDB extends Dexie {
  srsCards!: Table<SRSCard>;
  quizResults!: Table<QuizResult>;

  constructor() {
    super('HikariDB');
    this.version(1).stores({
      srsCards: '++id, wordId, level, nextReview',
      quizResults: '++id, quizId, completedAt',
    });
  }
}

export const db = new HikariDB();
