import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LANGUAGES = [
  { label: "Python", value: "python", url: "https://onecompiler.com/python" },
  { label: "C", value: "c", url: "https://onecompiler.com/c" },
  { label: "C++", value: "cpp", url: "https://onecompiler.com/cpp" },
  { label: "Java", value: "java", url: "https://onecompiler.com/java" },
  { label: "JavaScript", value: "javascript", url: "https://onecompiler.com/javascript" },
];

export default function Compiler() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(LANGUAGES[0]);

  const handleChange = (e) => {
    const lang = LANGUAGES.find(l => l.value === e.target.value);
    setLanguage(lang);
  };

  return (
    <div style={styles.page}>
      
      {/* Top Bar */}
      <div style={styles.topBar}>
  <button onClick={() => navigate("/dashboard")} style={styles.backBtn}>
    ← Dashboard
  </button>

  <h1 style={styles.heading}>
  <span style={styles.brand}>NIKKUtheCoder</span>
  <span style={styles.x}>X</span>
  <span style={styles.sub}> Code Studio</span>
</h1>

  <select
    value={language.value}
    onChange={handleChange}
    style={styles.select}
  >
    {LANGUAGES.map(l => (
      <option key={l.value} value={l.value}>{l.label}</option>
    ))}
  </select>
</div>

      {/* Full Screen Compiler */}
      <iframe
        src={language.url}
        title="Compiler"
        style={styles.iframe}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
      />
    </div>
  );
}

const styles = {
   heading: {
  fontSize: "15px",
  fontWeight: "700",
  textAlign: "center",
  flex: 1,
  letterSpacing: "0.5px",
},

brand: {
  background: "linear-gradient(90deg, #22c55e, #4ade80)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
},

sub: {
  color: "#38bdf8",
  marginLeft: "6px",
},
x:{
    color: "#f87171",
    margin: "0 6px",
    fontWeight: "900",
    fontSize: "18px",
    
},
  page: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background: "#020617",
  },

 topBar: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  padding: "10px 16px",
  background: "linear-gradient(90deg, #020617, #0f172a)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
},

  backBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
  },

  select: {
    background: "#1e293b",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "6px 10px",
    borderRadius: "8px",
  },

  iframe: {
    flex: 1,
    width: "100%",
    border: "none",
  },
};