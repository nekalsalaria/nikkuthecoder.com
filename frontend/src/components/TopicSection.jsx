import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import QuestionRow from "./QuestionRow";
import { getProgress } from "../utils/progress";

const TopicSection = ({ topic }) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(getProgress());
  }, []);

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

  // ✅ FIX: move inside component
  const getSectionProgress = (sec) => {
    const solved = sec.questions.filter((q) => progress[q.id]).length;
    const total = sec.questions.length;
    const percent = total === 0 ? 0 : Math.round((solved / total) * 100);
    return { solved, total, percent };
  };

  return (
    <div className="border-b border-gray-800 py-4">

      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <span className="text-gray-500 group-hover:text-green-400 transition">
          {open ? "▼" : "▶"}
        </span>

        <h3 className="text-gray-300 group-hover:text-green-400 transition whitespace-nowrap">
          {topic.title}
        </h3>

        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden mx-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.4 }}
            className="h-full bg-green-500 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.6)]"
          />
        </div>

        <span className="text-gray-500 text-sm whitespace-nowrap">
          {solvedCount} / {totalCount}
        </span>
      </div>

      {/* SECTIONS */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-6 mt-4 space-y-4"
        >
          {topic.sections.map((sec, index) => {
            const { solved, total, percent } = getSectionProgress(sec);

            return (
              <div key={index}>

                {/* SECTION HEADER WITH PROGRESS */}
                <div
                  onClick={() =>
                    setActiveSection(
                      activeSection === index ? null : index
                    )
                  }
                  className="cursor-pointer flex items-center gap-3 text-gray-400 hover:text-green-400"
                >
                  <span>
                    {activeSection === index ? "▼" : "▶"}
                  </span>

                  {/* Name */}
                  <span className="w-20">{sec.name}</span>

                  {/* Mini Bar */}
                  <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${percent}%` }}
                      className="h-full bg-green-500"
                    />
                  </div>

                  {/* Count */}
                  <span className="text-xs text-gray-500 w-12 text-right">
                    {solved}/{total}
                  </span>
                </div>

                {/* QUESTIONS */}
                {activeSection === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 ml-6"
                  >

                    {/* HEADER ROW */}
                    <div className="grid grid-cols-6 text-xs text-gray-500 mb-2 px-4">
                      <span>Status</span>
                      <span>Problem</span>
                      <span>Link</span>
                      <span>Notes</span>
                      <span>Revision</span>
                      <span>Difficulty</span>
                    </div>

                    {/* QUESTIONS */}
                    <div className="space-y-2">
                      {sec.questions.map((q, i) => (
                        <QuestionRow
                          key={i}
                          q={q}
                          isChecked={progress[q.id] || false}
                          onToggle={handleToggle}
                        />
                      ))}
                    </div>

                  </motion.div>
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