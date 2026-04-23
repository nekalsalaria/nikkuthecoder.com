import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import QuestionRow from "./QuestionRow";
import { useProgress } from "../context/ProgressContext";

const TopicSection = ({ topic }) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const { progress, setProgress, loading } = useProgress();

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const allQuestions = topic.sections.flatMap((sec) => sec.questions);

  const solvedCount = allQuestions.filter((q) => progress[q.id]).length;
  const totalCount = allQuestions.length;

  const percent =
    totalCount === 0 ? 0 : Math.round((solvedCount / totalCount) * 100);

  const handleToggle = (id, value) => {
    setProgress((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const getSectionProgress = (sec) => {
    const solved = sec.questions.filter((q) => progress[q.id]).length;
    const total = sec.questions.length;
    const percent = total === 0 ? 0 : Math.round((solved / total) * 100);
    return { solved, total, percent };
  };

  return (
    <div className="bg-[#0b0f19] border border-gray-800 rounded-xl p-5 hover:border-green-500/20">

      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <span className="text-gray-500 text-xs">
          {open ? "▼" : "▶"}
        </span>

        <h3 className="text-sm text-gray-200 group-hover:text-white">
          {topic.title}
        </h3>

        <div className="flex-1 h-1.5 bg-gray-800 rounded-full mx-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.4 }}
            className="h-full bg-linear-to-r from-green-400 to-green-600"
          />
        </div>

        <span className="text-xs text-gray-500">
          {solvedCount}/{totalCount}
        </span>
      </div>

      {/* SECTIONS */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5 space-y-4"
        >
          {topic.sections.map((sec, index) => {
            const { solved, total, percent } = getSectionProgress(sec);

            return (
              <div key={index}>
                {/* SECTION HEADER */}
                <div
                  onClick={() =>
                    setActiveSection(
                      activeSection === index ? null : index
                    )
                  }
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-gray-500 text-xs">
                    {activeSection === index ? "▼" : "▶"}
                  </span>

                  <span className="text-sm text-gray-300 w-20">
                    {sec.name}
                  </span>

                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${percent}%` }}
                      className="h-full bg-green-500"
                    />
                  </div>

                  <span className="text-[10px] text-gray-500 w-12 text-right">
                    {solved}/{total}
                  </span>
                </div>

                {/* QUESTIONS */}
                {activeSection === index && (
                  <div className="mt-3 pl-4 space-y-2">

                    {/* ✅ HEADER ROW ADDED */}
                    <div className="grid grid-cols-[40px_2fr_1fr_1fr_1fr_1fr] px-4 py-2 text-xs text-gray-400 border border-gray-800 rounded-lg bg-[#020617]">
                      <span></span>
                      <span>Topic</span>
                      <span>Link</span>
                      <span>Notes</span>
                      <span>Revision</span>
                      <span>Difficulty</span>
                    </div>

                    {/* QUESTIONS LIST */}
                    {sec.questions.map((q, i) => (
                      <div
                        key={i}
                        className="bg-[#020617] border border-gray-800 rounded-lg"
                      >
                        <QuestionRow
                          q={q}
                          isChecked={progress[q.id] || false}
                          onToggle={handleToggle}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default TopicSection;