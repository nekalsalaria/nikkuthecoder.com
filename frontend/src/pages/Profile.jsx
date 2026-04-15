import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProgress } from "../utils/progress";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // adjust path if needed
import topics from "../topics";

const Circle = ({ value, total, label, color }) => {
  const percent = total === 0 ? 0 : Math.round((value / total) * 100);
  const r = 40;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-24 h-24">
        <svg className="-rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r={r}
            stroke="#1f2937"
            strokeWidth="8"
            fill="none"
          />

          <circle
            cx="48"
            cy="48"
            r={r}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
          {value}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-2 group-hover:text-white transition">
        {label}
      </p>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);

      localStorage.clear();

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const [data, setData] = useState([]);

  // ✅ FIX: user defined here
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const progress = getProgress();

    const sectionMap = {};

    topics.forEach((topic) => {
      topic.sections.forEach((sec) => {
        if (!sectionMap[sec.name]) {
          sectionMap[sec.name] = { solved: 0, total: 0 };
        }

        const solved = sec.questions.filter((q) => progress[q.id]).length;

        sectionMap[sec.name].solved += solved;
        sectionMap[sec.name].total += sec.questions.length;
      });
    });

    const finalData = Object.keys(sectionMap).map((key) => ({
      name: key,
      solved: sectionMap[key].solved,
      total: sectionMap[key].total,
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(finalData);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10">
        {/* BACK */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition cursor-pointer"
        >
          ← Back to Dashboard
        </button>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm bg-[#111827] border border-gray-800 rounded-lg text-gray-300 hover:text-red-400 hover:border-red-500/40 hover:shadow-[0_0_6px_rgba(239,68,68,0.3)] transition cursor-pointer"
        >
          🚪 Logout
        </button>
      </div>

      {/* HEADER */}
      <div className="flex flex-col items-center mb-12">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="user"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : null}

        {/* Fallback Emoji */}
        <div
          className={`w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-black text-lg ${
            user?.photoURL ? "hidden" : "flex"
          }`}
        >
          😎
        </div>
        <h2 className="text-3xl font-bold">{user?.displayName || "User"}</h2>

        <p className="text-gray-400 text-sm mt-1">
          Stay consistent. Results will follow.
        </p>
      </div>

      {/* 🔥 CIRCULAR STATS */}
      <div className="flex justify-center gap-10 flex-wrap">
        {data.map((sec, i) => (
          <Circle
            key={i}
            value={sec.solved}
            total={sec.total}
            label={sec.name}
            color={
              sec.name === "Basics"
                ? "#22c55e"
                : sec.name === "Easy"
                  ? "#3b82f6"
                  : "#facc15"
            }
          />
        ))}
      </div>

      {/* FOOTER LINE */}
      <div className="text-center mt-12 text-xs text-gray-500">
        Track your growth. Stay consistent. Win long term.
      </div>
    </div>
  );
};

export default Profile;
