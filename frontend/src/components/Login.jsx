import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "../utils/api"; // ✅ use API instead of axios

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // save locally
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ FIXED API CALL
      await API.post("/api/auth/google-login", {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      localStorage.setItem("token", "user_logged_in");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-full bg-black text-white flex overflow-hidden">
      {/* LEFT SIDE */}
      <div className="w-1/2 hidden md:flex flex-col justify-center px-16 relative">
        <div className="absolute w-125 h-125 bg-green-500/10 blur-3xl rounded-full -top-25 -left-25" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold leading-tight"
        >
          Master DSA <br />
          <span className="text-green-400">the structured way.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mt-6 text-lg max-w-lg"
        >
          NIKKUtheCoder.com helps you learn Data Structures & Algorithms with a
          clear roadmap, real interview problems, and progress tracking — all
          completely free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 space-y-3 text-sm text-gray-300"
        >
          <p>✔ Structured Roadmap</p>
          <p>✔ Track Your Progress</p>
          <p>✔ Company-wise Questions</p>
          <p>✔ 100% Free Platform</p>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute w-100 h-100 bg-green-500/20 blur-3xl rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#0b0f19]/80 backdrop-blur-xl border border-green-500/20 p-10 rounded-3xl shadow-2xl w-95"
        >
          <div className="mb-2 flex justify-center items-center">
            <img
              src="/logo.png"
              alt="NIKKUtheCoder Logo"
              className="w-40 sm:w-52 md:w-60 h-auto object-contain drop-shadow-xl"
            />
          </div>

          <h2 className="text-2xl font-bold text-center">
            Welcome to <span className="text-green-400">NIKKUtheCoder.com</span>
          </h2>

          <p className="text-gray-400 text-sm text-center mt-2 mb-8">
            Start your DSA journey today
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-green-400 to-green-600 text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-500/30 transition cursor-pointer"
          >
            Continue with Google
          </motion.button>

          <p className="text-gray-500 text-xs text-center mt-6">
            No spam. No cost. Just results.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;