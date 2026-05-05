import { useState } from "react";
import TopicSection from "../components/TopicSection";
import arrayTopic from "../topics/array";
import { useNavigate } from "react-router-dom";
import stringTopic from "../topics/string";
import STL from "../topics/stl";
import TCSC from "../topics/tcsc";
import Math from "../topics/math";
import TWO_D_ARRAY from "../topics/2darray";
import { useEffect } from "react";
import RECURSION from "../topics/recursion";
import STACK_QUEUE from "../topics/stack&queue";
import LINKED_LIST from "../topics/linkedlist";
import TREE from "../topics/tree";
import GRAPH from "../topics/graph";
import API from "../utils/api";
import StarPattern from "./Starpattern";
import STAR_PATTERNS from "../topics/starpattern";
import FUNCTION from "../topics/function";
import Ifelse from "./Ifelse";
import IFELSE from "../topics/ifelse";
import FOR_LOOP from "../topics/forloop";
import WHILE_LOOP from "../topics/whileloop";
import LOGICAL_QUESTIONS from "../topics/logicalquestions";

const Dashboard = () => {
  const [openQR, setOpenQR] = useState(false);
  const navigate = useNavigate(); // ✅ FIXED (inside component)
  const user = JSON.parse(localStorage.getItem("user"));
  const [totalUsers, setTotalUsers] = useState(0);

 useEffect(() => {
  console.log("API URL:", import.meta.env.VITE_API_URL);

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
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* 🔥 FIXED SIDEBAR */}
      <div className="w-full lg:w-64 lg:h-screen lg:fixed lg:left-0 lg:top-0 bg-[#0b0f19] border-r border-gray-800 p-4 sm:p-6 flex flex-col justify-between">
        {/* TOP */}
        <div>
          {/* ✅ PROFILE (FIXED UI) */}
          <div
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 mb-6 cursor-pointer hover:bg-[#111827] p-2 rounded-lg transition"
          >
            {/* AVATAR */}
            <div className="relative w-10 h-10">
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
            </div>

            {/* TEXT */}
            <div>
              <p className="text-white text-sm font-semibold">
                {user?.displayName || "User"}
              </p>

              <p className="text-gray-400 text-xs truncate max-w-30 sm:max-w-40">
                {user?.email}
              </p>

              <p className="text-green-400 cursor-pointer underline text-[12px]">Your Profile</p>
            </div>
          </div>

          {/* Brand */}
          <h1 className="text-green-400 text-xs underline font-bold mb-4 tracking-wide">
            NIKKUtheCoder Coding Platform
          </h1>

          {/* Useful Links Heading */}
          <div className="mb-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-green-400 font-semibold">
              Useful Links
            </p>
            <div className="w-8 h-0.5 bg-green-400 mt-1 rounded-full"></div>
          </div>

          {/* Single CTA Button */}

          <button
            onClick={() => navigate("/dsa-approach")}
            className="w-full cursor-pointer flex items-center justify-between bg-linear-to-r from-green-500/10 via-green-400/5 to-transparent border border-green-500/30 rounded-lg px-3 py-2 text-xs text-green-300 hover:text-white hover:border-green-400 hover:shadow-[0_0_12px_rgba(34,197,94,0.35)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-green-400 group-hover:scale-110 transition">
                🧠
              </span>
              <span className="font-medium cursor-pointer group-hover:text-green-400 transition">
                How to Approach Any DSA Question
              </span>
            </div>

            <span className="text-[10px] text-green-400 group-hover:translate-x-1 transition">
              →
            </span>
          </button>
          {/* CS Subjects Button */}
          <button
            onClick={() => navigate("/cs-subjects")}
            className="w-full flex cursor-pointer items-center justify-between mb-2 bg-linear-to-r from-blue-500/10 via-blue-400/5 to-transparent border border-blue-500/30 rounded-lg px-3 py-2 text-xs text-blue-300 hover:text-white hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-300 group mt-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-400 group-hover:scale-110 transition">
                📚
              </span>
              <span className="font-medium">CS Subjects Links</span>
            </div>

            <span className="text-[10px] text-blue-400 group-hover:translate-x-1 transition">
              →
            </span>
          </button>

           <button
            onClick={() => navigate("/compiler")}
            className="w-full cursor-pointer mb-2 flex items-center justify-between bg-linear-to-r from-purple-500/10 via-purple-400/5 to-transparent border border-purple-500/30 rounded-lg px-3 py-2 text-xs text-purple-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(147,51,234,0.35)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-purple-400 group-hover:scale-110 transition">
                📄
              </span>
              <span className="font-medium cursor-pointer group-hover:text-purple-400 transition">
                Open Compiler 
              </span>
            </div>

            <span className="text-[10px] text-purple-400 group-hover:translate-x-1 transition">
              →
            </span>
          </button>

          {/* join test button */}
          {/* <button
                onClick={() => navigate("/createtest")}
                className="w-full flex cursor-pointer items-center justify-between bg-linear-to-r from-purple-500/10 via-purple-400/5 to-transparent border border-purple-500/30 rounded-lg px-3 py-2 text-xs text-purple-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(147,51,234,0.35)] transition-all duration-300 group mt-2"
                >
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 group-hover:scale-110 transition">
                  📝
                  </span>
                  <span className="font-medium">Create Test</span>
                </div>

                <span className="text-[10px] text-purple-400 group-hover:translate-x-1 transition">
                  →
                </span>
                </button> */}
          <button
            onClick={() =>
              window.open("https://swapskill-com-1.onrender.com/", "_blank")
            }
            className="w-full flex cursor-pointer items-center justify-between bg-linear-to-r from-blue-500/10 via-blue-400/5 to-transparent border border-blue-500/30 rounded-lg px-3 py-2 text-xs text-blue-300 hover:text-white hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-300 group mt-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-400 group-hover:scale-110 transition">
                🔗
              </span>
              <span className="font-medium">SwapSkill Other Product</span>
            </div>

            <span className="text-[10px] text-blue-400 group-hover:translate-x-1 transition">
              →
            </span>
          </button>

          {/* Divider */}
          <div className="h-px bg-gray-800 mb-4"></div>
        </div>
        <div className="flex items-center justify-between gap-3 bg-linear-to-r from-[#0b0f19] via-[#0f172a] to-[#020617] border border-gray-800 rounded-xl px-4 py-2.5 shadow-md hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center rounded-md bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition">
              👥
            </div>

            <p className="text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-gray-300 whitespace-nowrap">
              Total Learners
            </p>
          </div>

          {/* Right: Count */}
          <h2 className="text-xl font-bold text-green-400 relative">
            {totalUsers}+
            <span className="absolute -inset-1 blur-md bg-green-400/20 opacity-0 group-hover:opacity-100 transition"></span>
          </h2>
        </div>
        {/* BOTTOM */}
        <div className="space-y-3 sm:space-y-4">
          {/* Buy Me a Coffee */}
          <button
            onClick={() => setOpenQR(true)}
            className="w-full bg-linear-to-r from-green-400 to-green-600 text-black text-sm py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/30 transition cursor-pointer"
          >
            Buy Me a Coffee ☕
          </button>

          {/* QR POPUP */}
          {openQR && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-[#0b0f19] border border-gray-800 rounded-xl shadow-xl flex flex-col sm:flex-row overflow-hidden w-[90%] sm:w-auto">
                {/* LEFT */}
                <div className="p-6 text-center border-r border-gray-800">
                  <h3 className="text-white mb-4">Support (Min ₹50)</h3>

                  <img
                    src="/paytm-qr.png"
                    alt="QR"
                    className="w-48 mx-auto mb-4 rounded"
                  />

                  <p className="text-xs text-gray-400">
                    Scan & support the project
                  </p>

                  <button
                    onClick={() => setOpenQR(false)}
                    className="mt-4 text-gray-400 hover:text-white transition cursor-pointer text-sm"
                  >
                    Close
                  </button>
                </div>

                {/* RIGHT */}
                <div className="p-6 w-full sm:w-64 bg-[#111827]">
                  <p className="text-xs text-gray-500 mb-4">Top Donator</p>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                      N
                    </div>

                    <div>
                      <p className="text-sm text-white font-medium">
                        Nekal Singh
                      </p>
                      <p className="text-xs text-gray-400">₹50 donated</p>
                    </div>
                  </div>

                  <div className="text-xs text-green-400 font-medium">
                    #1 Supporter 🏆
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LinkedIn */}
          <div
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/nekalsingh/")
            }
            className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-green-400 transition bg-[#111827] border border-gray-800 rounded-lg py-2 hover:border-green-500/40 hover:shadow-[0_0_8px_rgba(34,197,94,0.3)] cursor-pointer"
          >
            <span>🔗</span>
            Built by <span className="font-medium text-white">Nekal Singh</span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 overflow-y-auto lg:h-screen">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Your DSA Journey Starts Here 🚀
        </h2>

        <p className="text-sm text-gray-400 mb-6">
          Solve problems step-by-step from Basics to Medium. Build consistency
          and become interview-ready.
        </p>
        <TopicSection topic={IFELSE} />
        <TopicSection topic={FOR_LOOP}/>
        <TopicSection topic={WHILE_LOOP}/>
        <TopicSection topic={LOGICAL_QUESTIONS}/>
        <TopicSection topic={STAR_PATTERNS} /> 
        <TopicSection topic ={FUNCTION}/>
        <TopicSection topic={STL} />
        <TopicSection topic={TCSC} />
        <TopicSection topic={arrayTopic} />
        <TopicSection topic={stringTopic} />
        <TopicSection topic={TWO_D_ARRAY} />
        <TopicSection topic={Math} />
        <TopicSection topic={RECURSION} />
        <TopicSection topic={STACK_QUEUE} />
        <TopicSection topic={LINKED_LIST} />
        <TopicSection topic={TREE} />
        <TopicSection topic={GRAPH} />
      </div>
    </div>
  );
};

export default Dashboard;
