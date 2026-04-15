import { useState } from "react";
import TopicSection from "../components/TopicSection";
import arrayTopic from "../topics/array";
import StreakCalendar from "../components/StreakCalendar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [openQR, setOpenQR] = useState(false);
  const navigate = useNavigate(); // ✅ FIXED (inside component)
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* 🔥 FIXED SIDEBAR */}
      <div className="w-64 h-screen fixed left-0 top-0 bg-[#0b0f19] border-r border-gray-800 p-6 flex flex-col justify-between">
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

              <p className="text-gray-400 text-xs truncate max-w-35">
                {user?.email}
              </p>

              <p className="text-gray-500 text-[10px]">Your Profile</p>
            </div>
          </div>

          {/* Brand */}
          <h1 className="text-green-400 text-xl font-bold mb-4 tracking-wide">
            NIKKUtheCoder.com
          </h1>

          {/* Divider */}
          <div className="h-px bg-gray-800 mb-4"></div>

          {/* Calendar */}
          <StreakCalendar />

          {/* Motivation */}
          <div className="text-xs text-gray-400 leading-relaxed space-y-2 mt-5 ">
            <p>Consistency beats intensity.</p>
            <p>1% better every day.</p>
            <p>Small steps → Big results.</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="space-y-4">
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
              <div className="bg-[#0b0f19] border border-gray-800 rounded-xl shadow-xl flex overflow-hidden">
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
                <div className="p-6 w-64 bg-[#111827]">
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
          <a
            href="https://www.linkedin.com/in/nekalsingh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-green-400 transition bg-[#111827] border border-gray-800 rounded-lg py-2 hover:border-green-500/40 hover:shadow-[0_0_8px_rgba(34,197,94,0.3)]"
          >
            <span>🔗</span>
            Built by <span className="font-medium text-white">Nekal Singh</span>
          </a>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <h2 className="text-2xl font-semibold mb-2">
          Your DSA Journey Starts Here 🚀
        </h2>

        <p className="text-sm text-gray-400 mb-6">
          Solve problems step-by-step from Basics to Medium. Build consistency
          and become interview-ready.
        </p>

        <TopicSection topic={arrayTopic} />
      </div>
    </div>
  );
};

export default Dashboard;
