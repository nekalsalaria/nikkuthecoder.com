import { useState } from "react";

const questions = [

  {
    id: 1,
    difficulty: "Easy",
    question: `Even–Odd + Loop Control

- Take an integer input
- If number is even:
  → Print numbers from 1 to 50 using for loop
- If number is odd:
  → Print numbers from 50 to 1 using while loop
- Else:
  → Print 'Invalid Input'`
  },

  {
    id: 2,
    difficulty: "Easy",
    question: `Number Type + Table

- Input a number
- If number is positive:
  → Print its table (1 to 10)
- If number is negative:
  → Print absolute value using while loop
- Else:
  → Print 'Zero Found'`
  },

  {
    id: 3,
    difficulty: "Easy",
    question: `Divisible Check + Series

- Input a number
- If divisible by 3:
  → Print multiples of 3 till 30
- If divisible by 5:
  → Print multiples of 5 till 50
- Else:
  → Print numbers from 1 to 20`
  },

  {
    id: 4,
    difficulty: "Easy",
    question: `Digit Count + Logic

- Input a number
- Count number of digits
- If digits > 3:
  → Reverse the number using while loop
- If digits ≤ 3:
  → Print factorial using for loop`
  },

  {
    id: 5,
    difficulty: "Easy",
    question: `Voting + Loop

- Input age
- If age ≥ 18:
  → Print 'Eligible'
  → Print numbers from 1 to age
- If age < 18:
  → Print 'Not Eligible'
  → Print numbers from age to 1`
  },

  {
    id: 6,
    difficulty: "Medium",
    question: `Car Parking System

- Input number of vehicles
- For each vehicle:
  → Input type (Bike ₹20/hr, Car ₹50/hr, Truck ₹100/hr)
  → Input hours parked
- Calculate total charges
- If total > ₹500:
  → Apply 10% discount
- If vehicles > 10:
  → Print 'Parking Full'
- Print final amount`
  },

  {
    id: 7,
    difficulty: "Medium",
    question: `Food Ordering System

- Menu:
  → Pizza ₹200
  → Burger ₹100
  → Momos ₹80
  → Coffee ₹120
- Input items and quantity
- If bill > ₹500:
  → Free delivery
- Else:
  → Add ₹50 delivery
- If only coffee ordered:
  → Apply 20% discount`
  },

  {
    id: 8,
    difficulty: "Medium",
    question: `Electricity Bill System

- Input units
- ≤100 → ₹5/unit
- 101–300 → ₹7/unit
- >300 → ₹10/unit
- If bill > ₹2000:
  → Add 5% surcharge
- Print final bill`
  },

  {
    id: 9,
    difficulty: "Medium",
    question: `ATM Simulation

- Initial balance ₹10000
- Options:
  → Withdraw
  → Deposit
  → Check balance
- Withdraw rules:
  → Cannot exceed balance
  → Max ₹5000 per transaction
- Print final balance`
  },

  {
    id: 10,
    difficulty: "Medium",
    question: `Student Result System

- Input marks of 5 subjects
- Calculate percentage
- Grade:
  → ≥90 → A
  → 70–89 → B
  → 50–69 → C
  → <50 → F
- Print result`
  }

];

export default function LogicalquestionsPractice() {
  const [current, setCurrent] = useState(0);
  const total = questions.length;
  const q = questions[current];
  const progress = ((current + 1) / total) * 100;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Top */}
        <div style={styles.top}>
          <button style={styles.back} onClick={() => window.location.href = "/"}>
            ← Dashboard
          </button>
          <span>{current + 1} / {total}</span>
        </div>

        {/* Progress */}
        <div style={styles.bar}>
          <div style={{ ...styles.fill, width: `${progress}%` }} />
        </div>

        {/* Header */}
        <h1>Logical Practice</h1>
        <p style={{ color: "#64748b" }}>
          Real-world logic + conditions + loops
        </p>

        {/* Question */}
        <div style={styles.card}>
          <div style={styles.meta}>
            <span>Q{current + 1}</span>
            <span style={diff(q.difficulty)}>{q.difficulty}</span>
          </div>
          <h3 style={styles.question}>{q.question}</h3>
        </div>

        {/* Buttons */}
        <div style={styles.row}>
          <button
            disabled={current === 0}
            onClick={() => setCurrent(c => c - 1)}
            style={{ ...styles.btn, opacity: current === 0 ? 0.5 : 1 }}
          >
            ← Prev
          </button>

          <button
            onClick={() => setCurrent(c => Math.min(c + 1, total - 1))}
            style={styles.next}
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

  top: { display: "flex", justifyContent: "space-between", marginBottom: "10px" },

  back: {
    background: "#1e293b",
    border: "none",
    padding: "8px 12px",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer"
  },

  bar: {
    height: "6px",
    background: "#1e293b",
    borderRadius: "10px",
    marginBottom: "20px",
    overflow: "hidden"
  },

  fill: { height: "100%", background: "#22c55e" },

  card: {
    background: "#0f172a",
    padding: "16px",
    borderRadius: "10px",
    marginTop: "20px"
  },

  meta: { display: "flex", justifyContent: "space-between" },

  task: {
    background: "#020617",
    border: "1px solid #1e293b",
    marginTop: "20px",
    borderRadius: "10px"
  },

  taskHead: {
    padding: "10px",
    borderBottom: "1px solid #1e293b",
    color: "#94a3b8"
  },
question: {
  marginTop: "10px",
  fontSize: "16px",
  lineHeight: "1.6",
  whiteSpace: "pre-line",   // 🔥 THIS FIXES EVERYTHING
},
  code: {
    padding: "12px",
    fontFamily: "monospace",
    color: "#22c55e"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px"
  },

  btn: {
    background: "#1e293b",
    padding: "10px 18px",
    border: "none",
    color: "#fff",
    borderRadius: "6px"
  },

  next: {
    background: "#22c55e",
    padding: "10px 18px",
    border: "none",
    color: "#fff",
    borderRadius: "6px"
  }
};

const diff = (d) => {
  const c = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };
  return { color: c[d], fontWeight: "600" };
};