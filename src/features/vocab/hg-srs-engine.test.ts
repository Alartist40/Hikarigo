import { createNewCard, updateSRSCard } from './hg-srs-engine.js';

export function testSRS() {
    console.log("Testing SRS Engine...");

    const card = createNewCard("test-word", "a1");
    if (card.wordId !== "test-word") throw new Error("wordId mismatch");

    const q5_1 = updateSRSCard(card, 5);
    if (q5_1.repetition !== 1 || q5_1.interval !== 1) throw new Error("Q5-1 failed");

    const q5_2 = updateSRSCard(q5_1, 5);
    if (q5_2.repetition !== 2 || q5_2.interval !== 6) throw new Error("Q5-2 failed");

    const q1 = updateSRSCard(q5_2, 1);
    if (q1.repetition !== 0 || q1.interval !== 1) throw new Error("Q1-fail failed");

    console.log("All SRS tests passed successfully!");
}

testSRS();
