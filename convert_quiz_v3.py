import re
import json
import sys

def parse_quiz(text):
    # Regex to capture Question number, text, options A-D, and Answer
    # It assumes the structure: **N. Question text** \n A) ... B) ... C) ... D) ... \n ... Answer: X
    pattern = r"\*\*(\d+)\.\s*(.*?)\*\*(.*?)\*\*Answer:\s*([A-D])\*\*"
    matches = re.finditer(pattern, text, re.DOTALL)

    questions = []
    for match in matches:
        q_num = match.group(1)
        q_text = match.group(2).strip()
        body = match.group(3)
        ans_letter = match.group(4)

        options = []
        for letter in ['A', 'B', 'C', 'D']:
            opt_m = re.search(rf"{letter}\)\s*(.*?)(?:\n|\r|$)", body)
            if opt_m:
                options.append(opt_m.group(1).strip())

        gp = re.search(r"\*Grammar Point:\*\s*(.*?)(?:\n|\r|$)", body)
        ex = re.search(r"\*Explanation:\*\s*(.*?)(?:\n|\r|$)", body)
        jp = re.search(r"\*Japanese:\*\s*(.*?)(?:\n|\r|$)", body)

        correct_answer = ""
        idx = ord(ans_letter) - ord('A')
        if idx < len(options):
            correct_answer = options[idx]

        questions.append({
            "id": f"q{q_num}",
            "type": "multiple-choice",
            "question": q_text,
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
