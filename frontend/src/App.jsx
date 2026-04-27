import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import CSSubjects from "./pages/CSSubjects";
import TimeComplexity from "./pages/TimeComplexity";
import TCPractice from "./pages/TCPractice";
import SpaceComplexity from "./pages/spacecomplexity";
import SCPractice from "./pages/SCPractice";
import Containers from "./pages/Containers"; // ✅ ADD THIS
import InbuiltFunctions from "./pages/InbuiltFunctions";
import DsaApproach from "./pages/Dsa-approach";

function App() {
  return (
    <Routes>
      {/* Public Route */}
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
        path="/time-complexity"
        element={
          <PrivateRoute>
            <TimeComplexity />
          </PrivateRoute>
        }
      />

      <Route
        path="/tc-practice"
        element={
          <PrivateRoute>
            <TCPractice />
          </PrivateRoute>
        }
      />

      <Route
        path="/space-complexity"
        element={
          <PrivateRoute>
            <SpaceComplexity />
          </PrivateRoute>
        }
      />

      <Route
        path="/sc-practice"
        element={
          <PrivateRoute>
            <SCPractice />
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

      <Route
        path="/cs-subjects"
        element={
          <PrivateRoute>
            <CSSubjects />
          </PrivateRoute>
        }
      />

      {/* ✅ CONTAINERS ROUTE (DYNAMIC) */}
      <Route
        path="/containers/:type"
        element={
          <PrivateRoute>
            <Containers />
          </PrivateRoute>
        }
      />
      <Route
        path="/containers"
        element={
          <PrivateRoute>
            <Containers />
          </PrivateRoute>
        }
      />
      {/* ✅ INBUILT FUNCTIONS ROUTE */}
      <Route
        path="/inbuilt/:type"
        element={
          <PrivateRoute>
            <InbuiltFunctions />
          </PrivateRoute>
        }
      />

      <Route
        path="/inbuilt"
        element={
          <PrivateRoute>
            <InbuiltFunctions />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/dsa-approach"
        element={
          <PrivateRoute>
            <DsaApproach/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
