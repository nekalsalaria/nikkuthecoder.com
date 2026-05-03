import { useState } from "react";

const questions = [

  // ---------- EASY (1–20) ----------
  { id: 1, difficulty: "Easy", question: "Check if a number is even or odd" },
  { id: 2, difficulty: "Easy", question: "Check if a number is positive, negative or zero" },
  { id: 3, difficulty: "Easy", question: "Check if a number is divisible by 5" },
  { id: 4, difficulty: "Easy", question: "Check if a number is greater than 100" },
  { id: 5, difficulty: "Easy", question: "Check if two numbers are equal" },

  { id: 6, difficulty: "Easy", question: "Check if a person is eligible to vote (age ≥ 18)" },
  { id: 7, difficulty: "Easy", question: "Check if a student passed or failed (marks ≥ 33)" },
  { id: 8, difficulty: "Easy", question: "Check if a number is single-digit or multi-digit" },
  { id: 9, difficulty: "Easy", question: "Check if a number is divisible by 7" },
  { id: 10, difficulty: "Easy", question: "Check if temperature is hot or cold" },

  { id: 11, difficulty: "Easy", question: "Find maximum of two numbers" },
  { id: 12, difficulty: "Easy", question: "Find minimum of two numbers" },
  { id: 13, difficulty: "Easy", question: "Check if character is uppercase or lowercase" },
  { id: 14, difficulty: "Easy", question: "Check if number is odd and greater than 50" },
  { id: 15, difficulty: "Easy", question: "Check if a number lies between 10 and 50" },

  { id: 16, difficulty: "Easy", question: "Check if a number is divisible by both 3 and 5" },
  { id: 17, difficulty: "Easy", question: "Check if a number is multiple of 10" },
  { id: 18, difficulty: "Easy", question: "Check if character is a vowel" },
  { id: 19, difficulty: "Easy", question: "Check if a number is less than 0" },
  { id: 20, difficulty: "Easy", question: "Check if age is child (<13), teen, or adult" },

  // ---------- MEDIUM (21–40) ----------
  { id: 21, difficulty: "Medium", question: "Find maximum of three numbers" },
  { id: 22, difficulty: "Medium", question: "Check if a year is leap year" },
  { id: 23, difficulty: "Medium", question: "Check if character is vowel or consonant" },
  { id: 24, difficulty: "Medium", question: "Create grade system using marks (A/B/C/D/Fail)" },
  { id: 25, difficulty: "Medium", question: "Print day of week using number (1–7)" },

  { id: 27, difficulty: "Medium", question: "Find type of triangle (equilateral, isosceles, scalene)" },
  { id: 28, difficulty: "Medium", question: "Simple calculator using if-else (+, -, *, /)" },
  { id: 30, difficulty: "Medium", question: "Check eligibility for driving license" },

  { id: 33, difficulty: "Medium", question: "Find largest among 4 numbers" },
  { id: 34, difficulty: "Medium", question: "Check if character is digit, letter or special character" },
  { id: 35, difficulty: "Medium", question: "Calculate electricity bill based on units" },

  { id: 36, difficulty: "Medium", question: "Check if student gets distinction (marks > 75)" },
  { id: 37, difficulty: "Medium", question: "Check login credentials (username & password)" },
  { id: 38, difficulty: "Medium", question: "Apply discount based on shopping amount" },
  { id: 40, difficulty: "Medium", question: "Display greeting based on time (morning/evening/night)" },

  // ---------- HARD (41–50) ----------
 { id: 41, difficulty: "Hard", question: "Create a menu-driven program using if-else: take a choice (1–4) from user to perform addition, subtraction, multiplication, or division on two numbers. Handle invalid choice." },

{ id: 42, difficulty: "Hard", question: "Check ATM withdrawal: input balance and amount. If amount > balance → print 'Insufficient Balance'. If amount not multiple of 100 → 'Invalid Amount'. Else deduct and print remaining balance." },

{ id: 43, difficulty: "Hard", question: "Calculate bank interest: input account type (Savings/Current) and balance. Savings → 4% interest, Current → 2%. Print interest amount." },

{ id: 44, difficulty: "Hard", question: "Calculate salary bonus: input salary and years of experience. <2 → no bonus, 2–5 → 10%, >5 → 20%. Print final salary after bonus." },

{ id: 45, difficulty: "Hard", question: "Find roots type of quadratic equation: input a, b, c. Calculate D = b*b - 4*a*c. If D>0 → two real roots, D==0 → one root, D<0 → imaginary." },

{ id: 46, difficulty: "Hard", question: "Check if a number is prime: input n and check if it is divisible by any number from 2 to n-1. If yes → not prime, else prime." },

{ id: 47, difficulty: "Hard", question: "Find second largest among three numbers using only if-else (no sorting or arrays)." },

{ id: 48, difficulty: "Hard", question: "Check if triangle is right-angled: input three sides and verify if any combination satisfies a² + b² = c²." },

{ id: 49, difficulty: "Hard", question: "Suggest internet plan based on data usage: <1GB → Basic, 1–5GB → Standard, >5GB → Premium." },

{ id: 50, difficulty: "Hard", question: "Check promotion eligibility: input rating (1–5) and experience. If rating ≥ 4 AND experience ≥ 3 → eligible, else not eligible." },
];

export default function IfelsePractice() {
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

        {/* Progress Bar */}
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progressPercent}%` }} />
        </div>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>If-Else Practice</h1>
          <p style={styles.subtitle}>
            Solve conditional problems from basic → advanced
          </p>
        </div>

        {/* Question Card */}
        <div style={styles.card}>
          <div style={styles.meta}>
            <span style={styles.qNo}>Q{current + 1}</span>
            <span style={difficultyStyle(q.difficulty)}>{q.difficulty}</span>
          </div>

          <h3 style={styles.question}>{q.question}</h3>
        </div>

        {/* Instruction Box (instead of output) */}
        <div style={styles.outputBox}>
          <div style={styles.outputHeader}>Task</div>
          <pre style={styles.code}>
Write a program using if-else to solve this problem.
          </pre>
        </div>

        {/* Navigation */}
        <div style={styles.buttonRow}>
          <button
            disabled={current === 0}
            onClick={() => setCurrent(c => c - 1)}
            style={{
              ...styles.secondaryBtn,
              opacity: current === 0 ? 0.5 : 1,
              cursor: current === 0 ? "not-allowed" : "pointer"
            }}
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

/* ---------- SAME STYLES (copied) ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e2e8f0",
    fontFamily: "Inter, sans-serif",
    padding: "24px",
  },
  container: { maxWidth: "720px", margin: "0 auto" },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    alignItems: "center"
  },

  backBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  progressText: { fontSize: "13px", color: "#94a3b8" },

  progressBar: {
    height: "6px",
    background: "#1e293b",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px"
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #22c55e, #4ade80)",
  },

  header: { marginBottom: "20px" },
  title: { fontSize: "28px", fontWeight: "700" },
  subtitle: { color: "#64748b", marginTop: "6px", fontSize: "14px" },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "18px",
  },

  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    marginBottom: "8px"
  },

  qNo: { color: "#94a3b8" },
  question: { fontSize: "18px", fontWeight: "600" },

  outputBox: {
    background: "#020617",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    marginBottom: "20px",
    overflow: "hidden"
  },

  outputHeader: {
    padding: "10px 16px",
    fontSize: "13px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    color: "#94a3b8"
  },

  code: {
    padding: "16px",
    fontFamily: "monospace",
    fontSize: "14px",
    color: "#22c55e"
  },

  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px"
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "none",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryBtn: {
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
  }
};

const difficultyStyle = (level) => {
  const colors = {
    Easy: "#22c55e",
    Medium: "#f59e0b",
    Hard: "#ef4444"
  };
  return { color: colors[level], fontWeight: "600" };
};