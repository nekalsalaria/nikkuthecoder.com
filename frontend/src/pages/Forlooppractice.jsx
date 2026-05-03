import { useState } from "react";

const questions = [

  // ---------- EASY (1–20) ----------
  { id: 1, difficulty: "Easy", question: "Print numbers from 1 to n" },
  { id: 2, difficulty: "Easy", question: "Print numbers from n to 1" },
  { id: 3, difficulty: "Easy", question: "Print even numbers from 1 to n" },
  { id: 4, difficulty: "Easy", question: "Print odd numbers from 1 to n" },
  { id: 5, difficulty: "Easy", question: "Print multiplication table of a number" },

  { id: 6, difficulty: "Easy", question: "Print numbers from 1 to n with step 2" },
  { id: 7, difficulty: "Easy", question: "Print first n multiples of 5" },
  { id: 8, difficulty: "Easy", question: "Print numbers divisible by 3 from 1 to n" },
  { id: 9, difficulty: "Easy", question: "Count numbers from 1 to n" },
  { id: 10, difficulty: "Easy", question: "Print squares from 1 to n" },

  { id: 11, difficulty: "Easy", question: "Print cubes from 1 to n" },
  { id: 12, difficulty: "Easy", question: "Print sum of numbers from 1 to n" },
  { id: 13, difficulty: "Easy", question: "Print sum of even numbers up to n" },
  { id: 14, difficulty: "Easy", question: "Print sum of odd numbers up to n" },
  { id: 15, difficulty: "Easy", question: "Print numbers divisible by both 2 and 3" },

  { id: 16, difficulty: "Easy", question: "Print numbers between two given numbers (a to b)" },
  { id: 17, difficulty: "Easy", question: "Print all numbers greater than 50 up to n" },
  { id: 18, difficulty: "Easy", question: "Print all numbers less than 100" },
  { id: 19, difficulty: "Easy", question: "Print reverse counting from n to 0" },
  { id: 20, difficulty: "Easy", question: "Print first n natural numbers using loop" },

  // ---------- MEDIUM (21–40) ----------
  { id: 21, difficulty: "Medium", question: "Print factorial of a number using loop" },
  { id: 22, difficulty: "Medium", question: "Count how many numbers are divisible by 3 from 1 to n" },
  { id: 23, difficulty: "Medium", question: "Print sum of squares from 1 to n" },
  { id: 24, difficulty: "Medium", question: "Print alternating sum (1 - 2 + 3 - 4 ... n)" },
  { id: 25, difficulty: "Medium", question: "Print multiplication tables from 1 to n" },

  { id: 26, difficulty: "Medium", question: "Print numbers divisible by 5 but not by 3" },
  { id: 27, difficulty: "Medium", question: "Count even and odd numbers from 1 to n" },
  { id: 28, difficulty: "Medium", question: "Print sum of multiples of 7 up to n" },
  { id: 29, difficulty: "Medium", question: "Print numbers in reverse order skipping 2 numbers each time" },
  { id: 30, difficulty: "Medium", question: "Print sum of digits of a number using loop" },

  { id: 31, difficulty: "Medium", question: "Count digits of a number using loop" },
  { id: 32, difficulty: "Medium", question: "Reverse a number using loop" },
  { id: 33, difficulty: "Medium", question: "Check palindrome number using loop" },
  { id: 34, difficulty: "Medium", question: "Find largest digit in a number using loop" },
  { id: 35, difficulty: "Medium", question: "Find smallest digit in a number using loop" },

  { id: 36, difficulty: "Medium", question: "Print numbers divisible by both 3 and 5 from 1 to n" },
  { id: 37, difficulty: "Medium", question: "Print sum of first n odd numbers" },
  { id: 38, difficulty: "Medium", question: "Print sum of first n even numbers" },
  { id: 39, difficulty: "Medium", question: "Print numbers skipping multiples of 5" },
  { id: 40, difficulty: "Medium", question: "Print numbers and their squares together" },

  // ---------- HARD (41–50) ----------
  { id: 41, difficulty: "Hard", question: "Print Fibonacci series up to n terms using loop" },
  { id: 42, difficulty: "Hard", question: "Check if a number is prime using loop" },
  { id: 43, difficulty: "Hard", question: "Print all prime numbers from 1 to n" },
  { id: 44, difficulty: "Hard", question: "Print factors of a number using loop" },
  { id: 45, difficulty: "Hard", question: "Count number of factors of a number" },

];

export default function ForLoopPractice() {
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

          <div style={styles.progressText}>
            {current + 1} / {total}
          </div>
        </div>

        {/* Progress */}
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progressPercent}%` }} />
        </div>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>For Loop Practice</h1>
          <p style={styles.subtitle}>
            Build strong loop logic from basic → advanced
          </p>
        </div>

        {/* Question */}
        <div style={styles.card}>
          <div style={styles.meta}>
            <span>Q{current + 1}</span>
            <span style={difficultyStyle(q.difficulty)}>{q.difficulty}</span>
          </div>

          <h3 style={styles.question}>{q.question}</h3>
        </div>

        {/* Task Box */}
        <div style={styles.outputBox}>
          <div style={styles.outputHeader}>Task</div>
          <pre style={styles.code}>
Write a program using for loop to solve this problem.
          </pre>
        </div>

        {/* Buttons */}
        <div style={styles.buttonRow}>
          <button
            disabled={current === 0}
            onClick={() => setCurrent(c => c - 1)}
            style={{ ...styles.secondaryBtn, opacity: current === 0 ? 0.5 : 1 }}
          >
            ← Previous
          </button>

          <button
            onClick={() => setCurrent(c => Math.min(c + 1, total - 1))}
            style={styles.primaryBtn}
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
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e2e8f0",
    padding: "24px",
    fontFamily: "Inter, sans-serif",
  },
  container: { maxWidth: "720px", margin: "0 auto" },

  topBar: { display: "flex", justifyContent: "space-between", marginBottom: "12px" },

  backBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "8px 14px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
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
    background: "linear-gradient(90deg,#22c55e,#4ade80)"
  },

  header: { marginBottom: "20px" },
  title: { fontSize: "28px", fontWeight: "700" },
  subtitle: { color: "#64748b", fontSize: "14px" },

  card: {
    background: "rgba(255,255,255,0.04)",
    padding: "20px",
    borderRadius: "14px",
    marginBottom: "18px",
  },

  meta: { display: "flex", justifyContent: "space-between" },
  question: { marginTop: "10px", fontSize: "18px" },

  outputBox: {
    background: "#020617",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  outputHeader: {
    padding: "10px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    color: "#94a3b8"
  },

  code: {
    padding: "14px",
    fontFamily: "monospace",
    color: "#22c55e"
  },

  buttonRow: {
    display: "flex",
    justifyContent: "space-between"
  },

  primaryBtn: {
    background: "#22c55e",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer"
  },

  secondaryBtn: {
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "#fff"
  }
};

const difficultyStyle = (level) => {
  const colors = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };
  return { color: colors[level], fontWeight: "600" };
};