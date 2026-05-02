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
 *******
` },

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

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080d18",
      color: "#e2e8f0",
      fontFamily: "'Sora', sans-serif",
      padding: "20px"
    }}>

      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ fontSize: "28px" }}>Star Pattern Practice</h1>
          <p style={{ color: "#64748b" }}>
            Solve patterns by writing code yourself.
          </p>
        </div>

        {/* Question */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "20px",
          marginBottom: "14px"
        }}>
          <div style={{ fontSize: "13px", color: "#64748b" }}>
            Q{current + 1} / {total} · {q.difficulty}
          </div>

          <h3 style={{ marginTop: "10px" }}>{q.question}</h3>
        </div>

        {/* Expected Output */}
        <div style={{
          background: "#060b16",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          padding: "16px",
          fontFamily: "monospace",
          whiteSpace: "pre",
          marginBottom: "20px"
        }}>
          {q.output}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          {current > 0 && (
            <button onClick={() => setCurrent(c => c - 1)}
              style={btnStyle("#334155")}>
              ← Prev
            </button>
          )}

          <button
            onClick={() => setCurrent(c => Math.min(c + 1, total - 1))}
            style={btnStyle("#10b981")}
          >
            {current === total - 1 ? "Finish" : "Next →"}
          </button>
        </div>

      </div>
    </div>
  );
}

const btnStyle = (bg) => ({
  background: bg,
  border: "none",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600"
});