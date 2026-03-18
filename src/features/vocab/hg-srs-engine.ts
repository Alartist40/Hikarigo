import { SRSCard } from '../../core/db';

/**
 * SM-2 Algorithm implementation for Spaced Repetition.
 */
export function updateSRSCard(card: SRSCard, quality: number): SRSCard {
  let { repetition, interval, easeFactor } = card;

  if (quality >= 3) {
    if (repetition === 0) {
      interval = 1;
    } else if (repetition === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetition++;
  } else {
    repetition = 0;
    interval = 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }

  const now = new Date();
  const nextReview = new Date();
  nextReview.setDate(now.getDate() + interval);
  nextReview.setHours(0, 0, 0, 0);

  return {
    ...card,
    repetition,
    interval,
    easeFactor,
    lastReviewed: now,
    nextReview,
  };
}

export function createNewCard(wordId: string, level: string): SRSCard {
  const now = new Date();
  const nextReview = new Date();
  nextReview.setHours(0, 0, 0, 0);

  return {
    wordId,
    level,
    repetition: 0,
    interval: 0,
    easeFactor: 2.5,
    lastReviewed: now,
    nextReview: nextReview,
  };
}
