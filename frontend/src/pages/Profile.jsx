import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import topics from "../topics";
import { useProgress } from "../context/ProgressContext";

const getColor = (topic) => {
  if (topic.includes("Array")) return "bg-orange-500";
  if (topic.includes("String")) return "bg-purple-500";
  if (topic.includes("STL")) return "bg-green-500";
  if (topic.includes("TC")) return "bg-yellow-500";
  if (topic.includes("Math")) return "bg-pink-500";
  if (topic.includes("TWO_D_ARRAY")) return "bg-orange-500";
  return "bg-gray-500";
};

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let topicData = topics.map((topic) => {
      let solved = 0;
      let total = 0;

      topic.sections.forEach((sec) => {
        sec.questions.forEach((q) => {
          total++;
          if (progress[q.id]) solved++;
        });
      });

      return {
        name: topic.title,
        solved,
        total,
      };
    });

    topicData.sort((a, b) => {
      const pa = a.total === 0 ? 0 : a.solved / a.total;
      const pb = b.total === 0 ? 0 : b.solved / b.total;
      return pb - pa;
    });

    setData(topicData);
    setLoading(false);
  }, [progress]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const totalSolved = data.reduce((a, b) => a + b.solved, 0);
  const totalQuestions = data.reduce((a, b) => a + b.total, 0);

  const percent =
    totalQuestions === 0 ? 0 : Math.round((totalSolved / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-8">
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm cursor-pointer text-gray-400 hover:text-green-400"
        >
          ← Dashboard
        </button>

        <button
          onClick={handleLogout}
          className="px-4 py-2 cursor-pointer text-sm bg-[#0b0f19] border border-gray-800 rounded-lg hover:text-red-400"
        >
          Logout
        </button>
      </div>

      <div className="flex items-center gap-5 mb-10">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-600 bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-black text-lg">
          😎
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            {user?.displayName || "User"}
          </h2>
          <p className="text-sm text-gray-400">Keep improving daily 🚀</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        <div className="bg-[#0b0f19] p-4 rounded-lg border border-gray-800">
          <p className="text-xs text-gray-400">Solved</p>
          <h3 className="text-xl font-bold">{totalSolved}</h3>
        </div>

        <div className="bg-[#0b0f19] p-4 rounded-lg border border-gray-800">
          <p className="text-xs text-gray-400">Total</p>
          <h3 className="text-xl font-bold">{totalQuestions}</h3>
        </div>

        <div className="bg-[#0b0f19] p-4 rounded-lg border border-gray-800">
          <p className="text-xs text-gray-400">Completion</p>
          <h3 className="text-xl font-bold">{percent}%</h3>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm text-gray-500 uppercase">Topics Progress</h3>

        {data.map((topic, i) => {
          const percent =
            topic.total === 0
              ? 0
              : Math.round((topic.solved / topic.total) * 100);

          return (
            <div
              key={i}
              className="bg-[#0b0f19] p-4 rounded-lg border border-gray-800"
            >
              <div className="flex justify-between mb-2">
                <span>{topic.name}</span>
                <span className="text-xs text-gray-400">
                  {topic.solved}/{topic.total}
                </span>
              </div>

              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  style={{ width: `${percent}%` }}
                  className={`h-full ${getColor(topic.name)} transition-all`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;