/* eslint-disable no-undef */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { auth } from "../firebase";
import { useProgress } from "../context/ProgressContext";

const QuestionRow = ({ q, isChecked, onToggle }) => {
  const { progress, setProgress } = useProgress();

  const [openNotes, setOpenNotes] = useState(false);
  const [text, setText] = useState("");
  const [isStarred, setIsStarred] = useState(false);

  const debounceRef = useRef(null);

  // ✅ LOAD NOTES + REVISION FROM BACKEND
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await auth.currentUser.getIdToken();

        // NOTES
        const notesRes = await axios.get(
          `http://localhost:5000/api/user/notes/${auth.currentUser.uid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setText(notesRes.data[q.id] || "");

        // REVISION
        const revRes = await axios.get(
          `http://localhost:5000/api/user/revision/${auth.currentUser.uid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setIsStarred(revRes.data[q.id] || false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [q.id]);

  // ✅ PROGRESS (UNCHANGED)
  const handleCheck = () => {
    const updated = { ...progress, [q.id]: !isChecked };

    setProgress(updated);
    onToggle(q.id, !isChecked);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const token = await auth.currentUser.getIdToken();

        await axios.post(
          "http://localhost:5000/api/user/progress",
          { progress: updated },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    }, 500);

    if (!isChecked) {
      markToday();
    }
  };

  // ✅ SAVE NOTES (BACKEND)
  const handleSaveNotes = async () => {
    try {
      const token = await auth.currentUser.getIdToken();

      const res = await axios.get(
        `http://localhost:5000/api/user/notes/${auth.currentUser.uid}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updated = { ...res.data, [q.id]: text };

      await axios.post(
        "http://localhost:5000/api/user/notes",
        {
          userId: auth.currentUser.uid,
          notes: updated,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setOpenNotes(false);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ SAVE REVISION (BACKEND)
  const handleStar = async () => {
    try {
      const token = await auth.currentUser.getIdToken();

      const res = await axios.get(
        `http://localhost:5000/api/user/revision/${auth.currentUser.uid}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updated = {
        ...res.data,
        [q.id]: !isStarred,
      };

      await axios.post(
        "http://localhost:5000/api/user/revision",
        {
          userId: auth.currentUser.uid,
          revision: updated,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setIsStarred(!isStarred);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-[40px_2fr_1fr_1fr_1fr_1fr] items-center text-sm py-3 px-4 border border-gray-800 rounded-lg bg-[#0f172a]">
        
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="w-4 h-4 accent-green-500 cursor-pointer"
        />

        {/* Title */}
        <p className={`${isChecked ? "line-through text-gray-500" : "text-gray-200"}`}>
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

        {/* Revision */}
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
                className="text-gray-400 hover:text-white"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveNotes}
                className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600"
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