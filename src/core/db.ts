import Dexie, { Table } from 'dexie';
import { LevelId } from '../data/types';

export interface SRSCard {
  id?: number;
  itemId?: string;
  wordId?: string;
  level: LevelId | string;
  type?: 'vocab' | 'grammar';
  front?: string;
  back?: string;
  hint?: string;
  interval: number; // days
  repetition: number;
  easeFactor: number;
  nextReview: Date;
  lastReviewed: Date;
}

export interface ExamRecord {
  id?: number;
  examId: string;
  levelTarget: LevelId;
  score: number;
  totalQuestions: number;
  percentage: number;
  cefrAchieved: string;
  ieltsBand: string;
  completedAt: Date;
}

export class HikariDB extends Dexie {
  srsCards!: Table<SRSCard>;
  examRecords!: Table<ExamRecord>;

  constructor() {
    super('HikariGoDB');
    this.version(1).stores({
      srsCards: '++id, itemId, level, type, nextReview',
      examRecords: '++id, examId, levelTarget, completedAt'
    });
  }
}

export const db = new HikariDB();
