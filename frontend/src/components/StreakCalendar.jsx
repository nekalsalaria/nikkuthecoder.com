import { getStreakData } from "../utils/streak";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const StreakCalendar = () => {
  const data = getStreakData();

  const getLabel = (item, done, isPast, isToday, monthName) => {
    const dateStr = `${item.day} ${monthName}`;
    if (done) return `${dateStr} • Solved`;
    if (isToday) return `${dateStr} • Today`;
    if (isPast) return `${dateStr} • Missed`;
    return `${dateStr} • Upcoming`;
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const todayDate = today.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // ✅ Month Name
  const monthName = today.toLocaleString("default", { month: "long" });

  const formatDate = (d) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const dates = Array.from({ length: daysInMonth }, (_, i) => {
    const d = new Date(year, month, i + 1);
    return {
      key: formatDate(d), // ✅ LOCAL DATE (no shift)
      day: i + 1,
    };
  });

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-lg p-3">
      {/* Month Title */}
      <p className="text-xs text-gray-400 mb-3">{monthName} Progress</p>

      <div className="grid grid-cols-7 gap-1">
        {dates.map((item, i) => {
          const done = data[item.key];
          const isPast = item.day < todayDate;
          const isToday = item.day === todayDate;

          const label = getLabel(item, done, isPast, isToday, monthName);

          return (
            <div key={i} className="relative group">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className={`w-7 h-7 text-[10px] flex items-center justify-center rounded cursor-default
          ${done ? "bg-green-500 text-black shadow-[0_0_6px_rgba(34,197,94,0.7)]" : ""}
          ${!done && isPast ? "bg-gray-800 text-gray-400" : ""}
          ${!done && !isPast ? "text-gray-600" : ""}
          ${isToday ? "border border-green-400" : ""}
        `}
              >
                {done ? "😊" : isPast ? "😢" : item.day}
              </motion.div>

              {/* 🔥 TOOLTIP */}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
        px-2 py-1 rounded bg-black text-[10px] text-gray-300 border border-gray-700 
        opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50"
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StreakCalendar;
