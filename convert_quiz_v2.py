import re
import json
import sys

def parse_quiz(text):
    # Split by "**N." at the start of a line
    parts = re.split(r"\n(?=\*\*(\d+)\.)", text)
    blocks = []
    for i in range(1, len(parts), 2):
        blocks.append("**" + parts[i] + "." + parts[i+1])

    questions = []
    for block in blocks:
        # Match question text - stop at first **
        q_match = re.search(r"\*\*(\d+)\.\s*(.*?)\*\*", block)
        if not q_match: continue

        q_num = q_match.group(1)
        question_text = q_match.group(2).strip()

        options = []
        for letter in ['A', 'B', 'C', 'D']:
            # Match options - usually "A) text" at start of line
            opt_match = re.search(rf"\n{letter}\)\s*(.*?)(?:\n|\r|$)", block)
            if opt_match:
                options.append(opt_match.group(1).strip())

        # If we didn't find 4 options, try without the newline requirement
        if len(options) < 4:
            options = []
            for letter in ['A', 'B', 'C', 'D']:
                opt_match = re.search(rf"{letter}\)\s*(.*?)(?:\n|\r|$)", block)
                if opt_match:
                    options.append(opt_match.group(1).strip())

        ans_match = re.search(r"Answer:\s*([A-D])", block)
        correct_answer = ""
        if ans_match:
            answer_letter = ans_match.group(1)
            idx = ord(answer_letter) - ord('A')
            if idx < len(options):
                correct_answer = options[idx]
            elif answer_letter == 'D' and "All options" in block:
                # Handle cases where D is "All options are correct"
                for opt in options:
                    if "All options" in opt:
                        correct_answer = opt
                        break

        gp = re.search(r"\*Grammar Point:\*\s*(.*)", block)
        ex = re.search(r"\*Explanation:\*\s*(.*)", block)
        jp = re.search(r"\*Japanese:\*\s*(.*)", block)

        questions.append({
            "id": f"q{q_num}",
            "type": "multiple-choice",
            "question": question_text,
            "options": options,
            "correctAnswer": correct_answer,
            "explanation": ((gp.group(1).strip() if gp else "") + " " + (ex.group(1).strip() if ex else "")).strip(),
            "japanese": jp.group(1).strip() if jp else ""
        })
    return questions

if __name__ == "__main__":
    full_text = sys.stdin.read()
    questions = parse_quiz(full_text)
    quiz_data = [{
        "id": "a1-quiz-bible-grammar",
        "title": "Bible Grammar Quiz (A1-A2)",
        "questions": questions
    }]
    print(json.dumps(quiz_data, indent=2, ensure_ascii=False))
