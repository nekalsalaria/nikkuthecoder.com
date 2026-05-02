import { useState } from "react";

const questions = [
  { id: 1, difficulty: "Easy", question: "Print a square pattern (n = 5)", output: `*****
*****
*****
*****
*****` },

  { id: 2, difficulty: "Easy", question: "Print a right triangle", output: `*
**
***
****
*****` },

  { id: 3, difficulty: "Easy", question: "Print inverted triangle", output: `*****
****
***
**
*` },

  { id: 4, difficulty: "Easy", question: "Print number triangle", output: `1
12
123
1234
12345` },

  { id: 5, difficulty: "Easy", question: "Print same number triangle", output: `1
22
333
4444
55555` },


  { id: 11, difficulty: "Medium", question: "Print binary triangle", output: `1
01
101
0101` },

  { id: 12, difficulty: "Hard", question: "Print Floyd’s triangle", output: `1
2 3
4 5 6
7 8 9 10` },

  { id: 13, difficulty: "Hard", question: "Print Pascal triangle (n=5)", output: `1
1 1
1 2 1
1 3 3 1
1 4 6 4 1` },

  { id: 14, difficulty: "Medium", question: "Print increasing alphabet triangle", output: `A
AB
ABC
ABCD` },

  { id: 15, difficulty: "Medium", question: "Print reverse alphabet triangle", output: `ABCD
ABC
AB
A` },
 { id: 6, difficulty: "Medium", question: "Print pyramid", output: `    *
   ***
  *****
 *******
*********` },

  { id: 7, difficulty: "Medium", question: "Print inverted pyramid", output: `*********
 *******
  *****
   ***
    *` },

  { id: 8, difficulty: "Medium", question: "Print diamond pattern", output: `    *
   ***
  *****
   ***
    *` },

  { id: 9, difficulty: "Medium", question: "Print hollow square", output: `*****
*   *
*   *
*   *
*****` },

  { id: 10, difficulty: "Medium", question: "Print hollow triangle", output: `*
**
* *
*  *
*****` },

  { id: 16, difficulty: "Hard", question: "Print butterfly pattern", output: `*      *
**    **
***  ***
********
********
***  ***
**    **
*      *` },

  { id: 17, difficulty: "Hard", question: "Print zig-zag pattern", output: `*   *
 * * 
  *  ` },

  { id: 18, difficulty: "Medium", question: "Print mirrored triangle", output: `    *
   **
  ***
 ****
*****` },

  { id: 19, difficulty: "Medium", question: "Print hollow pyramid", output: `    *
   * *
  *   *
 *******` },

  { id: 20, difficulty: "Hard", question: "Print concentric square", output: `44444
43334
43234
43334
44444` },
];

export default function StarPatternPractice() {
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
          <h1 style={styles.title}>Star Pattern Practice</h1>
          <p style={styles.subtitle}>
            Solve patterns from basic → advanced
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

        {/* Output */}
        <div style={styles.outputBox}>
          <div style={styles.outputHeader}>Expected Output</div>
          <pre style={styles.code}>{q.output}</pre>
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
  },

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
    transition: "0.2s"
  },

  progressText: {
    fontSize: "13px",
    color: "#94a3b8"
  },

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
    transition: "0.3s"
  },

  header: {
    marginBottom: "20px"
  },

  title: {
    fontSize: "28px",
    fontWeight: "700"
  },

  subtitle: {
    color: "#64748b",
    marginTop: "6px",
    fontSize: "14px"
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "18px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },

  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    marginBottom: "8px"
  },

  qNo: {
    color: "#94a3b8"
  },

  question: {
    fontSize: "18px",
    fontWeight: "600"
  },

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
    background: "#020617",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    color: "#94a3b8"
  },

  code: {
    padding: "16px",
    fontFamily: "monospace",
    whiteSpace: "pre",
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
    transition: "0.2s",
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

  return {
    color: colors[level],
    fontWeight: "600"
  };
};