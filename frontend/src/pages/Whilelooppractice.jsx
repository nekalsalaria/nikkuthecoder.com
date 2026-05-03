import { useState } from "react";

const questions = [

  // ---------- EASY (1–15) ----------
  { id: 1, difficulty: "Easy", question: "Count digits in a number using while loop" },
  { id: 2, difficulty: "Easy", question: "Find sum of digits of a number using while loop" },
  { id: 3, difficulty: "Easy", question: "Reverse a number using while loop" },
  { id: 4, difficulty: "Easy", question: "Print digits of a number one by one" },
  { id: 5, difficulty: "Easy", question: "Find last digit of a number using loop" },

  { id: 6, difficulty: "Easy", question: "Check if number is palindrome using while loop" },
  { id: 7, difficulty: "Easy", question: "Find product of digits of a number" },
  { id: 8, difficulty: "Easy", question: "Count even digits in a number" },
  { id: 9, difficulty: "Easy", question: "Count odd digits in a number" },
  { id: 10, difficulty: "Easy", question: "Find largest digit in a number" },

  { id: 11, difficulty: "Easy", question: "Find smallest digit in a number" },
  { id: 12, difficulty: "Easy", question: "Check if sum of digits is even or odd" },
  { id: 13, difficulty: "Easy", question: "Print digits in reverse order" },
  { id: 14, difficulty: "Easy", question: "Remove last digit repeatedly and print number" },
  { id: 15, difficulty: "Easy", question: "Count how many digits are greater than 5" },

  // ---------- MEDIUM (16–35) ----------
  { id: 16, difficulty: "Medium", question: "Check Armstrong number using while loop" },
  { id: 17, difficulty: "Medium", question: "Check if number is strong number (sum of factorial of digits)" },
  { id: 18, difficulty: "Medium", question: "Find sum of squares of digits" },
  { id: 19, difficulty: "Medium", question: "Find sum of cubes of digits" },
  { id: 20, difficulty: "Medium", question: "Check if number is Harshad (divisible by sum of digits)" },

  { id: 21, difficulty: "Medium", question: "Check if number is automorphic (square ends with same digits)" },
  { id: 22, difficulty: "Medium", question: "Find difference between sum of even and odd digits" },
  { id: 23, difficulty: "Medium", question: "Replace all 0 digits with 1 in a number" },
  { id: 24, difficulty: "Medium", question: "Check if number contains digit 7" },
  { id: 25, difficulty: "Medium", question: "Count how many times a digit appears in a number" },

  { id: 26, difficulty: "Medium", question: "Check if all digits are same" },
  { id: 27, difficulty: "Medium", question: "Find second largest digit in a number" },
  { id: 28, difficulty: "Medium", question: "Check if digits are in increasing order" },
  { id: 29, difficulty: "Medium", question: "Check if digits are in decreasing order" },
  { id: 30, difficulty: "Medium", question: "Sum only prime digits in a number" },

  { id: 31, difficulty: "Medium", question: "Count digits divisible by 3" },
  { id: 32, difficulty: "Medium", question: "Check if reversed number equals original" },
  { id: 33, difficulty: "Medium", question: "Find number formed by reversing digits" },
  { id: 34, difficulty: "Medium", question: "Multiply all digits except zero" },
  { id: 35, difficulty: "Medium", question: "Count digits less than 5" },

  // ---------- HARD (36–50) ----------
  { id: 36, difficulty: "Hard", question: "Check if number is palindrome without using extra variable" },
  { id: 37, difficulty: "Hard", question: "Find sum of factorial of digits" },
  { id: 38, difficulty: "Hard", question: "Find number of trailing zeros in a number" },
  { id: 39, difficulty: "Hard", question: "Check if number is spy number (sum == product of digits)" },
  { id: 40, difficulty: "Hard", question: "Convert number to binary using while loop" },

  { id: 41, difficulty: "Hard", question: "Convert binary to decimal using while loop" },
  { id: 42, difficulty: "Hard", question: "Find frequency of each digit in number" },
  { id: 43, difficulty: "Hard", question: "Check if number is neon number (sum of digits of square = number)" },
  { id: 44, difficulty: "Hard", question: "Remove all occurrences of a digit from number" },
  { id: 45, difficulty: "Hard", question: "Check if number is duck number (contains 0 but not at start)" },

  { id: 46, difficulty: "Hard", question: "Find sum of alternate digits" },
  { id: 47, difficulty: "Hard", question: "Check if number is circular prime (basic logic)" },
  { id: 48, difficulty: "Hard", question: "Create number by swapping first and last digit" },
  { id: 49, difficulty: "Hard", question: "Check if number is palindrome after removing last digit" },
  { id: 50, difficulty: "Hard", question: "Find digital root using loop (keep summing digits until single digit)" },

];

export default function WhileLoopPractice() {
  const [current, setCurrent] = useState(0);
  const total = questions.length;
  const q = questions[current];
  const progressPercent = ((current + 1) / total) * 100;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Top Bar */}
        <div style={styles.topBar}>
          <button style={styles.backBtn} onClick={() => window.location.href = "/"}>
            ← Dashboard
          </button>
          <div>{current + 1} / {total}</div>
        </div>

        {/* Progress */}
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progressPercent}%` }} />
        </div>

        {/* Header */}
        <h1>While Loop Practice</h1>
        <p style={{ color: "#64748b" }}>
          Practice condition-based looping logic
        </p>

        {/* Question */}
        <div style={styles.card}>
          <div style={styles.meta}>
            <span>Q{current + 1}</span>
            <span style={difficultyStyle(q.difficulty)}>{q.difficulty}</span>
          </div>
          <h3>{q.question}</h3>
        </div>

        {/* Task */}
        <div style={styles.taskBox}>
          <div style={styles.taskHeader}>Task</div>
          <pre style={styles.code}>
Write a program using while loop to solve this.
          </pre>
        </div>

        {/* Buttons */}
        <div style={styles.btnRow}>
          <button
            disabled={current === 0}
            onClick={() => setCurrent(c => c - 1)}
            style={{ ...styles.btn, opacity: current === 0 ? 0.5 : 1 }}
          >
            ← Prev
          </button>

          <button
            onClick={() => setCurrent(c => Math.min(c + 1, total - 1))}
            style={styles.primary}
          >
            {current === total - 1 ? "Finish" : "Next →"}
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e2e8f0",
    padding: "20px",
    fontFamily: "Inter, sans-serif",
  },
  container: { maxWidth: "720px", margin: "0 auto" },

  topBar: { display: "flex", justifyContent: "space-between", marginBottom: "10px" },

  backBtn: {
    background: "#1e293b",
    border: "none",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  progressBar: {
    height: "6px",
    background: "#1e293b",
    borderRadius: "10px",
    marginBottom: "20px",
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    background: "#22c55e"
  },

  card: {
    background: "#0f172a",
    padding: "16px",
    borderRadius: "10px",
    marginTop: "20px"
  },

  meta: { display: "flex", justifyContent: "space-between" },

  taskBox: {
    background: "#020617",
    border: "1px solid #1e293b",
    marginTop: "20px",
    borderRadius: "10px"
  },

  taskHeader: {
    padding: "10px",
    borderBottom: "1px solid #1e293b",
    color: "#94a3b8"
  },

  code: {
    padding: "12px",
    fontFamily: "monospace",
    color: "#22c55e"
  },

  btnRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px"
  },

  btn: {
    background: "#1e293b",
    border: "none",
    padding: "10px 18px",
    color: "#fff",
    borderRadius: "6px"
  },

  primary: {
    background: "#22c55e",
    border: "none",
    padding: "10px 18px",
    color: "#fff",
    borderRadius: "6px"
  }
};

const difficultyStyle = (level) => {
  const map = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };
  return { color: map[level], fontWeight: "600" };
};