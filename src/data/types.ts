export type LevelId = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

export interface LevelMeta {
  id: LevelId;
  name: string;
  japaneseName: string;
  cefr: string;
  ielts: string;
  descriptionJa: string;
  scriptureThemeJa: string;
  badgeColor: string;
  depthColor: string;
}

export interface ExampleSentence {
  english: string;
  japanese: string;
  scriptureRef?: string;
}

export interface MiniQuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanationJa: string;
}

export interface GrammarLesson {
  id: string;
  level: LevelId;
  title: string;
  japaneseMeaning: string;
  structureFormula: string;
  explanationJa: string;
  scriptureCitation: string;
  examples: ExampleSentence[];
  notesJa: string;
  miniQuiz: MiniQuizQuestion[];
}

export interface VocabWord {
  id: string;
  word: string;
  level: LevelId;
  phoneticIpa: string;
  partOfSpeech: string;
  japaneseMeaning: string;
  exampleSentence: string;
  exampleJapanese: string;
  scriptureReference: string;
  // Aliases for compatibility
  ipa?: string;
  pos?: string;
  meaningJa?: string;
  exampleEn?: string;
  exampleJa?: string;
  scriptureRef?: string;
}

export interface SentencePair {
  english: string;
  japanese: string;
}

export interface PassageReading {
  id: string;
  level: LevelId;
  title: string;
  source: string;
  passage: string;
  passageJapanese: string;
  sentencePairs?: SentencePair[];
  comprehensionQuestions?: MiniQuizQuestion[];
  // Aliases for compatibility
  subtitleJa?: string;
  passageEn?: string;
  translationJa?: string;
  citation?: string;
  keyVocab?: { word: string; meaningJa: string }[];
}

export interface LevelData {
  meta: LevelMeta;
  grammar: GrammarLesson[];
  vocabulary: VocabWord[];
  readings: PassageReading[];
}
