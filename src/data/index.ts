import { LevelId, LevelData } from './types';
import { a1Data } from './levels/a1';
import { a2Data } from './levels/a2';
import { b1Data } from './levels/b1';
import { b2Data } from './levels/b2';
import { c1Data } from './levels/c1';
import { c2Data } from './levels/c2';

export * from './types';
export * from './dictionary';

export const allLevelsData: Record<LevelId, LevelData> = {
  a1: a1Data,
  a2: a2Data,
  b1: b1Data,
  b2: b2Data,
  c1: c1Data,
  c2: c2Data
};

export const levelOrder: LevelId[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

export function getLevelData(level: LevelId): LevelData {
  return allLevelsData[level] || allLevelsData.a1;
}
