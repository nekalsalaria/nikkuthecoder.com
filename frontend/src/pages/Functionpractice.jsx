import { useState } from "react";

const questions = [
  { id: 1, difficulty: "Easy", question: "Write a function to add two numbers" },
  { id: 2, difficulty: "Easy", question: "Write a function to find square of a number" },
  { id: 3, difficulty: "Easy", question: "Write a function to print numbers from 1 to n" },
  { id: 4, difficulty: "Easy", question: "Write a function to check even or odd" },
  { id: 5, difficulty: "Easy", question: "Write a function to find maximum of two numbers" },

  { id: 6, difficulty: "Medium", question: "Write a function to find factorial using loop" },
  { id: 7, difficulty: "Medium", question: "Write a function to reverse a number" },
  { id: 8, difficulty: "Medium", question: "Write a function to count digits in a number" },
  { id: 9, difficulty: "Medium", question: "Write a function to check palindrome number" },
  { id: 10, difficulty: "Medium", question: "Write a function to find sum of digits" },

  { id: 11, difficulty: "Medium", question: "Write a function to find GCD of two numbers" },
  { id: 12, difficulty: "Medium", question: "Write a function to check prime number" },
  { id: 13, difficulty: "Medium", question: "Write a function to generate Fibonacci series" },
  { id: 14, difficulty: "Medium", question: "Write a function to find power (x^n)" },
  { id: 15, difficulty: "Medium", question: "Write a function to swap two numbers using reference" },

  { id: 16, difficulty: "Hard", question: "Write recursive function for factorial" },
  { id: 17, difficulty: "Hard", question: "Write recursive Fibonacci function" },
  { id: 18, difficulty: "Hard", question: "Write function to check Armstrong number" },
  { id: 19, difficulty: "Hard", question: "Write function to count trailing zeros in factorial" },
  { id: 20, difficulty: "Hard", question: "Write function to convert decimal to binary" },
];

export default function FunctionPractice() {
  const [current, setCurrent] = useState(0);
  const q = questions[current];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080d18",
      color: "#e2e8f0",
      fontFamily: "'Sora', sans-serif",
      padding: "20px"
    }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        <h1>Function Practice</h1>
        <p style={{ color: "#64748b" }}>
          Solve these by writing functions yourself.
        </p>

        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "18px",
          borderRadius: "12px",
          marginTop: "20px"
        }}>
          <div style={{ fontSize: "12px", color: "#64748b" }}>
            Q{current + 1} / {questions.length} · {q.difficulty}
          </div>

          <h3 style={{ marginTop: "10px" }}>{q.question}</h3>
        </div>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          {current > 0 && (
            <button onClick={() => setCurrent(c => c - 1)} style={btn("#334155")}>
              ← Prev
            </button>
          )}

          <button
            onClick={() => setCurrent(c => Math.min(c + 1, questions.length - 1))}
            style={btn("#10b981")}
          >
            {current === questions.length - 1 ? "Finish" : "Next →"}
          </button>
        </div>

      </div>
    </div>
  );
}

const btn = (bg) => ({
  background: bg,
  border: "none",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600"
});