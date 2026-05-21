import { useState, useEffect } from "react";
import TopicSection from "../components/TopicSection";
import arrayTopic from "../topics/array";
import { useNavigate } from "react-router-dom";
import stringTopic from "../topics/string";
import STL from "../topics/stl";
import TCSC from "../topics/tcsc";
import Math from "../topics/math";
import TWO_D_ARRAY from "../topics/2darray";
import RECURSION from "../topics/recursion";
import STACK_QUEUE from "../topics/stack&queue";
import LINKED_LIST from "../topics/linkedlist";
import TREE from "../topics/tree";
import GRAPH from "../topics/graph";
import API from "../utils/api";
import STAR_PATTERNS from "../topics/starpattern";
import FUNCTION from "../topics/function";
import IFELSE from "../topics/ifelse";
import FOR_LOOP from "../topics/forloop";
import WHILE_LOOP from "../topics/whileloop";
import LOGICAL_QUESTIONS from "../topics/logicalquestions";
import OOP from "../topics/oop";

/* ─────────────────────────────────────────
   Robot Welcome Popup — desktop only, shown
   only once per browser (localStorage flag)
───────────────────────────────────────── */
const RobotWelcomePopup = ({ onClose, user }) => {
  return (
    <>
      <style>{`
        @keyframes rwFloatIn {
          from { transform: translateY(60px) scale(0.7); opacity: 0; }
          to   { transform: translateY(0)    scale(1);   opacity: 1; }
        }
        @keyframes rwBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes rwPopBalloon {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          70%  { transform: scale(1.1) rotate(5deg); opacity: 1; }
          100% { transform: scale(1)   rotate(0deg); opacity: 1; }
        }
        @keyframes rwConfetti {
          0%   { transform: translateY(-10px) rotate(0deg);   opacity: 1; }
          100% { transform: translateY(90px)  rotate(360deg); opacity: 0; }
        }
        @keyframes rwBlink {
          0%, 90%, 100% { transform: scaleY(1);   }
          95%           { transform: scaleY(0.1); }
        }
        @keyframes rwFadeUp {
          from { transform: translateY(10px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes rwShimmer {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1;   }
        }

        .rw-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .rw-card {
          background: #0b0f19;
          border: 1px solid rgba(34,197,94,0.4);
          border-radius: 20px;
          padding: 32px 36px;
          width: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          animation: rwFloatIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
          box-shadow: 0 0 48px rgba(34,197,94,0.18);
        }

        .rw-confetti-piece {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          animation: rwConfetti 2.4s ease-in infinite;
          pointer-events: none;
        }

        .rw-balloon {
          font-size: 28px;
          opacity: 0;
          animation: rwPopBalloon 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .rw-balloon:nth-child(1) { animation-delay: 0.3s; }
        .rw-balloon:nth-child(2) { animation-delay: 0.5s; }
        .rw-balloon:nth-child(3) { animation-delay: 0.4s; }

        .rw-robot {
          animation: rwBounce 2.5s ease-in-out infinite;
          margin: 4px 0 12px;
        }

        .rw-eye {
          animation: rwBlink 3s ease-in-out infinite;
          transform-origin: center;
        }
        .rw-eye:nth-child(2) { animation-delay: 0.1s; }

        .rw-antenna { animation: rwShimmer 1.5s ease-in-out infinite; }

        .rw-badge {
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.4);
          color: #4ade80;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 12px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          animation: rwFadeUp 0.4s ease 0.8s both;
        }

        .rw-title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
        }

        .rw-sub {
          font-size: 13px;
          color: #9ca3af;
          text-align: center;
          line-height: 1.6;
          margin: 0 0 20px;
          animation: rwFadeUp 0.5s ease 1s both;
        }
        .rw-sub span { color: #4ade80; font-weight: 600; }

        .rw-btn {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #000;
          border: none;
          border-radius: 10px;
          padding: 10px 32px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.3px;
          animation: rwFadeUp 0.5s ease 1.3s both;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .rw-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 18px rgba(34,197,94,0.45);
        }
      `}</style>

      <div className="rw-overlay" onClick={onClose}>
        <div className="rw-card" onClick={(e) => e.stopPropagation()}>

          {/* Confetti */}
          {[
            { left:"8%",  top:"8%",  bg:"#4ade80", delay:"0s",    shape:"2px" },
            { left:"18%", top:"4%",  bg:"#facc15", delay:"0.4s",  shape:"50%" },
            { left:"75%", top:"6%",  bg:"#f472b6", delay:"0.2s",  shape:"2px" },
            { left:"85%", top:"3%",  bg:"#60a5fa", delay:"0.7s",  shape:"50%" },
            { left:"50%", top:"2%",  bg:"#fb923c", delay:"0.1s",  shape:"2px" },
            { left:"30%", top:"5%",  bg:"#a78bfa", delay:"0.9s",  shape:"50%" },
            { left:"65%", top:"3%",  bg:"#4ade80", delay:"0.6s",  shape:"2px" },
            { left:"90%", top:"10%", bg:"#facc15", delay:"0.3s",  shape:"2px" },
          ].map((c, i) => (
            <div
              key={i}
              className="rw-confetti-piece"
              style={{
                left: c.left,
                top: c.top,
                background: c.bg,
                animationDelay: c.delay,
                borderRadius: c.shape,
              }}
            />
          ))}

          {/* Balloons */}
          <div style={{ display:"flex", gap:"12px", marginBottom:"12px" }}>
            <span className="rw-balloon">🎈</span>
            <span className="rw-balloon">🎉</span>
            <span className="rw-balloon">🎈</span>
          </div>

          {/* Robot SVG */}
          <div className="rw-robot">
            <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className="rw-antenna" x="41" y="2" width="8" height="14" rx="4" fill="#4ade80" opacity="0.9"/>
              <circle cx="45" cy="2" r="4" fill="#4ade80"/>
              <rect x="18" y="16" width="54" height="42" rx="10" fill="#1a2235" stroke="#4ade80" strokeWidth="1.5"/>
              <rect x="26" y="26" width="15" height="10" rx="5" fill="#0a0e1a"/>
              <rect x="49" y="26" width="15" height="10" rx="5" fill="#0a0e1a"/>
              <ellipse className="rw-eye" cx="33" cy="31" rx="5" ry="4.5" fill="#4ade80"/>
              <ellipse className="rw-eye" cx="57" cy="31" rx="5" ry="4.5" fill="#4ade80"/>
              <circle cx="33" cy="31" r="2" fill="#fff"/>
              <circle cx="57" cy="31" r="2" fill="#fff"/>
              <rect x="30" y="44" width="30" height="6" rx="3" fill="#1f3a2a" stroke="#4ade80" strokeWidth="0.8"/>
              <rect x="30" y="44" width="10" height="6" rx="3" fill="#4ade80" opacity="0.7"/>
              <rect x="22" y="58" width="46" height="36" rx="8" fill="#1a2235" stroke="#4ade80" strokeWidth="1.2"/>
              <rect x="26" y="64" width="38" height="4" rx="2" fill="#4ade80" opacity="0.3"/>
              <rect x="26" y="72" width="28" height="4" rx="2" fill="#4ade80" opacity="0.2"/>
              <rect x="26" y="80" width="20" height="4" rx="2" fill="#4ade80" opacity="0.15"/>
              <rect x="9"  y="60" width="12" height="28" rx="6" fill="#1a2235" stroke="#4ade80" strokeWidth="1"/>
              <rect x="69" y="60" width="12" height="28" rx="6" fill="#1a2235" stroke="#4ade80" strokeWidth="1"/>
              <rect x="30" y="94" width="12" height="16" rx="6" fill="#1a2235" stroke="#4ade80" strokeWidth="1"/>
              <rect x="48" y="94" width="12" height="16" rx="6" fill="#1a2235" stroke="#4ade80" strokeWidth="1"/>
            </svg>
          </div>

          <div className="rw-badge">HELLO {user?.displayName || user?.name || "there"}!</div>
          <p className="rw-title">Hi, Welcome! 👋</p>
          <p className="rw-sub">
            I'm your coding buddy!<br />
            <span>All the best</span> on your DSA journey —<br />
            let's crush those interviews together! 🚀
          </p>

          <button className="rw-btn" onClick={onClose}>
            Let's Go! 🔥
          </button>
        </div>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────
   Main Dashboard
───────────────────────────────────────── */
const Dashboard = () => {
  const [openQR, setOpenQR] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Show popup only on desktop and only once per browser
    const isDesktop = window.innerWidth >= 1024;
    const alreadySeen = localStorage.getItem("rw_welcome_seen");
    if (isDesktop && !alreadySeen) {
      setShowWelcome(true);
    }

    const fetchUsers = async () => {
      try {
        const res = await API.get("/api/user/total-users");
        setTotalUsers(res.data.totalUsers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("rw_welcome_seen", "true");
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex flex-col lg:flex-row">

      {/* Robot Welcome Popup */}
      {showWelcome && <RobotWelcomePopup onClose={handleCloseWelcome} />}

      {/* SIDEBAR */}
      <div className="w-full lg:w-64 lg:h-screen lg:fixed lg:left-0 lg:top-0 bg-[#0b0f19] border-r border-gray-800 p-4 sm:p-6 flex flex-col justify-between">
        {/* TOP */}
        <div>
          {/* PROFILE */}
          <div
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 mb-5 cursor-pointer p-3 rounded-xl border border-white/5 bg-white/3 hover:bg-white/6 hover:border-white/10 transition-all duration-200 group"
          >
            <div className="relative shrink-0">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="user"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                  className="w-11 h-11 rounded-full object-cover border-[1.5px] border-white/15"
                />
              ) : null}
              <div
                className={`w-11 h-11 rounded-full bg-green-500/15 border border-green-500/30 items-center justify-center text-xl ${
                  user?.photoURL ? "hidden" : "flex"
                }`}
              >
                😎
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0b0f19]" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white text-[13px] font-semibold truncate">
                {user?.displayName || "Coder"}
              </p>
              <p className="text-gray-500 text-[11px] truncate mt-0.5">
                {user?.email}
              </p>
              <p className="text-green-400 text-[11px] mt-1 flex items-center gap-1">
                <span>View Profile</span>
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </p>
            </div>

            <svg
              className="w-4 h-4 text-gray-600 shrink-0 group-hover:text-gray-400 transition-colors"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          {/* Brand */}
          <p className="text-green-400 text-[13px] font-semibold mb-5 whitespace-nowrap">
            NIKKUtheCoder{" "}
            <span className="text-white text-left font-medium">Coding Platform</span>
          </p>

          {/* Useful Links */}
          <div className="mb-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-green-400 font-bold">
              Useful Links
            </p>
            <div className="w-8 h-0.5 bg-green-400 mt-1 rounded-full"></div>
          </div>

          <button
            onClick={() => navigate("/dsa-approach")}
            className="w-full cursor-pointer flex items-center justify-between bg-linear-to-r from-green-500/10 via-green-400/5 to-transparent border border-green-500/30 rounded-lg px-3 py-2 text-xs text-green-300 hover:text-white hover:border-green-400 hover:shadow-[0_0_12px_rgba(34,197,94,0.35)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-green-400 group-hover:scale-110 transition">🧠</span>
              <span className="font-medium text-left text-[11px] leading-tight group-hover:text-green-400 transition">
                How to Approach Any DSA Question
              </span>
            </div>
            <span className="text-[10px] text-green-400 group-hover:translate-x-1 transition">→</span>
          </button>

          <button
            onClick={() => navigate("/createresume")}
            className="w-full mb-2 flex cursor-pointer items-center justify-between bg-linear-to-r from-orange-500/10 via-orange-400/5 to-transparent border border-orange-500/30 rounded-lg px-3 py-2 text-xs text-orange-300 hover:text-white hover:border-orange-400 hover:shadow-[0_0_12px_rgba(234,179,8,0.35)] transition-all duration-300 group mt-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-orange-400 group-hover:scale-110 transition">📝</span>
              <span className="font-medium">Create Resume</span>
            </div>
            <span className="text-[10px] text-orange-400 group-hover:translate-x-1 transition">→</span>
          </button>

          <button
            onClick={() => navigate("/compiler")}
            className="w-full cursor-pointer mb-2 flex items-center justify-between bg-linear-to-r from-purple-500/10 via-purple-400/5 to-transparent border border-purple-500/30 rounded-lg px-3 py-2 text-xs text-purple-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(147,51,234,0.35)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-purple-400 group-hover:scale-110 transition">💻</span>
              <span className="font-medium cursor-pointer group-hover:text-purple-400 transition">Open Compiler</span>
            </div>
            <span className="text-[10px] text-purple-400 group-hover:translate-x-1 transition">→</span>
          </button>

          <button
            onClick={() => navigate("/cs-subjects")}
            className="w-full flex cursor-pointer items-center justify-between mb-2 bg-linear-to-r from-blue-500/10 via-blue-400/5 to-transparent border border-blue-500/30 rounded-lg px-3 py-2 text-xs text-blue-300 hover:text-white hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-300 group mt-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-400 group-hover:scale-110 transition">📚</span>
              <span className="font-medium">CS Subjects Links</span>
            </div>
            <span className="text-[10px] text-blue-400 group-hover:translate-x-1 transition">→</span>
          </button>

          <div className="h-px bg-gray-800 mb-4 mt-2"></div>
        </div>

        {/* Total Learners */}
        <div className="flex items-center justify-between gap-3 bg-linear-to-r from-[#0b0f19] via-[#0f172a] to-[#020617] border border-gray-800 rounded-xl px-4 py-2.5 shadow-md hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
          <div className="flex items-center gap-2">
            <span className="text-base">👥</span>
            <p className="text-[10px] uppercase tracking-[0.12em] text-gray-500 whitespace-nowrap">
              Total Learners
            </p>
          </div>
          <h2 className="text-xl font-bold text-green-400 relative">
            {totalUsers}+
            <span className="absolute -inset-1 blur-md bg-green-400/20 opacity-0 group-hover:opacity-100 transition"></span>
          </h2>
        </div>

        {/* BOTTOM */}
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={() => setOpenQR(true)}
            className="w-full bg-green-500 hover:bg-green-400 text-black text-[11.5px] font-semibold py-2 rounded-lg cursor-pointer transition-all duration-200 tracking-wide"
          >
            ☕ Buy Me a Coffee
          </button>

          {openQR && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-[#0b0f19] border border-gray-800 rounded-xl shadow-xl flex flex-col sm:flex-row overflow-hidden w-[90%] sm:w-auto">
                <div className="p-6 text-center border-r border-gray-800">
                  <h3 className="text-white mb-4">Support (Min ₹50)</h3>
                  <img src="/paytm-qr.png" alt="QR" className="w-48 mx-auto mb-4 rounded" />
                  <p className="text-xs text-gray-400">Scan & support the project</p>
                  <button
                    onClick={() => setOpenQR(false)}
                    className="mt-4 text-gray-400 hover:text-white transition cursor-pointer text-sm"
                  >
                    Close
                  </button>
                </div>
                <div className="p-6 w-full sm:w-64 bg-[#111827]">
                  <p className="text-xs text-gray-500 mb-4">Top Donator</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">N</div>
                    <div>
                      <p className="text-sm text-white font-medium">Nekal Singh</p>
                      <p className="text-xs text-gray-400">₹50 donated</p>
                    </div>
                  </div>
                  <div className="text-xs text-green-400 font-medium">#1 Supporter 🏆</div>
                </div>
              </div>
            </div>
          )}

          <div
            onClick={() => (window.location.href = "https://www.linkedin.com/in/nekalsingh/")}
            className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-green-400 transition bg-[#111827] border border-gray-800 rounded-lg py-2 hover:border-green-500/40 hover:shadow-[0_0_8px_rgba(34,197,94,0.3)] cursor-pointer"
          >
            <span>🔗</span>
            Built by <span className="font-medium text-white">Nekal Singh</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 overflow-y-auto lg:h-screen">
        {/* Heading */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white mb-1.5">
            Your DSA Journey Starts Here
          </h2>
          <p className="text-[13px] text-gray-500 leading-relaxed">
            Basics se Advanced tak — ek ek step mein.{" "}
            <span className="text-green-400">Interview-ready</span> bano.
          </p>
        </div>

        {/* Topics */}
        <TopicSection topic={IFELSE} />
        <TopicSection topic={FOR_LOOP} />
        <TopicSection topic={WHILE_LOOP} />
        <TopicSection topic={LOGICAL_QUESTIONS} />
        <TopicSection topic={STAR_PATTERNS} />
        <TopicSection topic={FUNCTION} />
        <TopicSection topic={STL} />
        <TopicSection topic={TCSC} />
        <TopicSection topic={arrayTopic} />
        <TopicSection topic={stringTopic} />
        <TopicSection topic={TWO_D_ARRAY} />
        <TopicSection topic={Math} />
        <TopicSection topic={RECURSION} />
        <TopicSection topic={STACK_QUEUE} />
        <TopicSection topic={OOP} />
        <TopicSection topic={LINKED_LIST} />
        <TopicSection topic={TREE} />
        <TopicSection topic={GRAPH} />
      </div>
    </div>
  );
};

export default Dashboard;