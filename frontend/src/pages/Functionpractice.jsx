import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const progress = ((current + 1) / questions.length) * 100;
  const total = questions.length;
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Top Bar */}
        <div style={styles.topBar}>
          <button
            style={styles.backBtn}
            onClick={() => navigate("/dashboard")}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
          >
            ← Dashboard
          </button>

          <div style={styles.progressText}>
            {current + 1} / {total}
          </div>
        </div>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Function Practice</h1>
          <p style={styles.subtitle}>
            Solve problems step-by-step using functions
          </p>
        </div>

        {/* Progress */}
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>

        {/* Question Card */}
        <div style={styles.card}>
          <div style={styles.meta}>
            <span style={styles.qNo}>
              Q{current + 1} / {total}
            </span>
            <span style={difficultyStyle(q.difficulty)}>
              {q.difficulty}
            </span>
          </div>

          <h2 style={styles.question}>{q.question}</h2>
        </div>

        {/* Buttons */}
        <div style={styles.buttonRow}>
          <button
            disabled={current === 0}
            onClick={() => setCurrent(c => c - 1)}
            style={{
              ...styles.secondaryBtn,
              opacity: current === 0 ? 0.5 : 1,
              cursor: current === 0 ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            ← Previous
          </button>

          <button
            onClick={() => setCurrent(c => Math.min(c + 1, total - 1))}
            style={styles.primaryBtn}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
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
    fontFamily: "Inter, sans-serif",
    padding: "24px",
  },

  container: {
    maxWidth: "720px",
    margin: "0 auto",
    animation: "fadeIn 0.4s ease",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    padding: "10px 14px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    backdropFilter: "blur(8px)",
  },

  backBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#e2e8f0",
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    transition: "0.2s",
  },

  progressText: {
    fontSize: "13px",
    color: "#94a3b8",
  },

  header: {
    marginBottom: "20px",
  },

  title: {
    fontSize: "30px",
    fontWeight: "700",
  },

  subtitle: {
    color: "#64748b",
    marginTop: "6px",
  },

  progressBar: {
    height: "6px",
    background: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #22c55e, #4ade80)",
    boxShadow: "0 0 10px rgba(34,197,94,0.6)",
  },

  card: {
    background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
    marginBottom: "24px",
  },

  meta: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },

  qNo: {
    fontSize: "13px",
    color: "#94a3b8",
  },

  question: {
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "1.5",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "none",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.2s",
  },

  secondaryBtn: {
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "12px",
  },
};

const difficultyStyle = (level) => {
  const map = {
    Easy: { background: "rgba(34,197,94,0.15)", color: "#22c55e" },
    Medium: { background: "rgba(245,158,11,0.15)", color: "#f59e0b" },
    Hard: { background: "rgba(239,68,68,0.15)", color: "#ef4444" },
  };

  return {
    padding: "5px 12px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    ...map[level],
  };
};