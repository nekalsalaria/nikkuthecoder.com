import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../firebase";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const token = await user.getIdToken();

        const res = await axios.get(
          "http://localhost:5000/api/user/progress",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProgress(res.data || {});
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, setProgress, loading }}>
      {children}
    </ProgressContext.Provider>
  );
};

// hook
// eslint-disable-next-line react-refresh/only-export-components
export const useProgress = () => useContext(ProgressContext);