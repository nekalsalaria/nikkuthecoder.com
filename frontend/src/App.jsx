import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import CSSubjects from "./pages/CSSubjects"; // ✅ ADD THIS

function App() {
  return (
    <Routes>
      {/* Public Route (Login) */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Private Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      {/* ✅ NEW ROUTE */}
      <Route
        path="/cs-subjects"
        element={
          <PrivateRoute>
            <CSSubjects />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;