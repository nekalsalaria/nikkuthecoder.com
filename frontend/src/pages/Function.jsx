import { useState } from "react";
import { useNavigate } from "react-router-dom";

const topics = [
  {
    name: "What is a Function?",
    desc: "A function is a reusable block of code that performs a specific task.",
    code: `#include <iostream>
using namespace std;

void greet() {
  cout << "Hello!";
}

int main() {
  greet();
}`,
  },
  {
    name: "Function with Parameters",
    desc: "Functions can take inputs to perform operations.",
    code: `int add(int a, int b) {
  return a + b;
}`,
  },
  {
    name: "Return Type",
    desc: "Functions can return values using return keyword.",
    code: `int square(int x) {
  return x * x;
}`,
  },
  {
    name: "Pass by Value",
    desc: "A copy of variable is passed.",
    code: `void change(int x) {
  x = 10;
}`,
  },
  {
    name: "Pass by Reference",
    desc: "Original variable is modified.",
    code: `void change(int &x) {
  x = 10;
}`,
  },
  {
    name: "Recursion Basics",
    desc: "Function calling itself.",
    code: `int fact(int n) {
  if(n==0) return 1;
  return n * fact(n-1);
}`,
  },
];

export default function FunctionPage() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const t = topics[active];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080d18",
      color: "#e2e8f0",
      fontFamily: "'Sora', sans-serif",
      padding: "20px"
    }}>

      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        <button
          onClick={() => navigate("/dashboard")}
          style={btn("#22c55e")}
        >← Dashboard</button>

        <h1 style={{ marginTop: "20px" }}>Functions</h1>
        <p style={{ color: "#64748b" }}>
          Learn reusable code blocks — core of programming.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "20px 0" }}>
          {topics.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: i === active ? "1px solid #22c55e" : "1px solid rgba(255,255,255,0.1)",
                background: i === active ? "rgba(34,197,94,0.1)" : "transparent",
                color: i === active ? "#22c55e" : "#64748b",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "12px"
        }}>
          <p>{t.desc}</p>
        </div>

        <pre style={codeStyle}>
{t.code}
        </pre>

        <button
          onClick={() => navigate("/functions/practice")}
          style={btn("#3b82f6")}
        >
          Practice Functions →
        </button>

      </div>
    </div>
  );
}

const btn = (bg) => ({
  background: bg,
  border: "none",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
  fontWeight: "600"
});

const codeStyle = {
  background: "#060b16",
  padding: "16px",
  borderRadius: "10px",
  marginBottom: "20px",
  fontFamily: "monospace",
  fontSize: "13px",
  color: "#7dd3fc",
  whiteSpace: "pre-wrap"
};