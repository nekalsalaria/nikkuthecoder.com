import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    console.log(result.user);

    navigate("/dashboard"); // redirect
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="h-screen w-full bg-black text-white flex overflow-hidden">
      {/* LEFT SIDE (Brand / Hero) */}
      <div className="w-1/2 hidden md:flex flex-col justify-center px-16 relative">
        {/* Background glow */}
        <div className="absolute w-125 h-125 bg-green-500/10 blur-3xl rounded-full -top-25 -left-25" />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold leading-tight"
        >
          Master DSA <br />
          <span className="text-green-400">the structured way.</span>
        </motion.h1>

        {/* Subtext */}
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

        {/* Points */}
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

      {/* RIGHT SIDE (Login Card) */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        {/* Animated glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute w-100 h-100 bg-green-500/20 blur-3xl rounded-full"
        />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#0b0f19]/80 backdrop-blur-xl border border-green-500/20 p-10 rounded-3xl shadow-2xl w-95"
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 bg-linear-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-lg">
              N
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center">
            Welcome to <span className="text-green-400">NIKKUtheCoder.com</span>
          </h2>

          <p className="text-gray-400 text-sm text-center mt-2 mb-8">
            Start your DSA journey today
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-green-400 to-green-600 text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-500/30 transition cursor-pointer"
          >
            {/* Google Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5 bg-white rounded-full p-1"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.5 2.7 13.5l8 6.2C12.7 13.1 17.9 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.5 24.5c0-1.7-.2-3.3-.5-4.9H24v9.3h12.6c-.5 2.9-2.1 5.4-4.5 7.1l7 5.5c4.1-3.8 6.4-9.3 6.4-17z"
              />
              <path
                fill="#FBBC05"
                d="M10.7 28.7c-1-2.9-1-6 0-8.9l-8-6.2C.9 17.1 0 20.4 0 24s.9 6.9 2.7 10.4l8-5.7z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.3 0 11.6-2.1 15.4-5.7l-7-5.5c-2 1.4-4.6 2.3-8.4 2.3-6.1 0-11.3-3.6-13.3-8.7l-8 5.7C6.6 42.5 14.6 48 24 48z"
              />
            </svg>
            Continue with Google
          </motion.button>

          {/* Footer */}
          <p className="text-gray-500 text-xs text-center mt-6">
            No spam. No cost. Just results.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
