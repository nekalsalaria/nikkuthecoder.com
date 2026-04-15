import { useState, useEffect } from "react";
import { getProgress, saveProgress } from "../utils/progress";
import { getNotes, saveNotes } from "../utils/notes";
import { getRevision, saveRevision } from "../utils/revision";
import { markToday } from "../utils/streak";

const QuestionRow = ({ q, isChecked, onToggle }) => {
  const [openNotes, setOpenNotes] = useState(false);
  const [text, setText] = useState("");
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const notes = getNotes();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setText(notes[q.id] || "");

    const rev = getRevision();
    setIsStarred(rev[q.id] || false);
  }, [q.id]);

  const handleCheck = () => {
    const progress = getProgress();
    const updated = { ...progress, [q.id]: !isChecked };

    saveProgress(updated);
    onToggle(q.id, !isChecked);

    // ✅ mark streak ONLY when marking as solved
    if (!isChecked) {
      markToday();
    }
  };

  const handleSaveNotes = () => {
    const notes = getNotes();
    const updated = { ...notes, [q.id]: text };
    saveNotes(updated);
    setOpenNotes(false);
  };

  const handleStar = () => {
    const rev = getRevision();
    const updated = { ...rev, [q.id]: !isStarred };

    saveRevision(updated);
    setIsStarred(!isStarred);
  };

  return (
    <>
      <div className="grid grid-cols-6 items-center text-sm py-3 px-4 border border-gray-800 rounded-lg bg-[#0f172a]">
        {/* Status */}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="w-4 h-4 accent-green-500 cursor-pointer"
        />

        {/* Problem */}
        <p
          className={`${isChecked ? "line-through text-gray-500" : "text-gray-200"}`}
        >
          {q.title}
        </p>

        {/* Link */}
        <a
          href={q.link}
          target="_blank"
          rel="noreferrer"
          className="text-green-400 cursor-pointer"
        >
          Solve
        </a>

        {/* Notes */}
        <button
          onClick={() => setOpenNotes(true)}
          className="text-gray-400 hover:text-green-400 cursor-pointer"
        >
          📝
        </button>

        {/* ⭐ REVISION */}
        <button
          onClick={handleStar}
          className={`cursor-pointer text-lg ${
            isStarred
              ? "text-yellow-400"
              : "text-gray-500 hover:text-yellow-400"
          }`}
        >
          {isStarred ? "★" : "☆"}
        </button>

        {/* Difficulty */}
        <span className="text-xs text-green-400">{q.difficulty}</span>
      </div>

      {/* NOTES MODAL */}
      {openNotes && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#0b0f19] border border-gray-800 rounded-xl p-5 w-100">
            <h3 className="text-white mb-3">Notes</h3>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-32 bg-black border border-gray-700 rounded p-2 text-gray-200"
              placeholder="Write your notes..."
            />

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => setOpenNotes(false)}
                className="text-gray-400 cursor-pointer hover:text-white transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveNotes}
                className="bg-green-500 text-black px-3 py-1 rounded cursor-pointer hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionRow;
