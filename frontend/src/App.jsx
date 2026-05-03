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
import CreateTest from "./pages/Createtest";
import STAR_PATTERNS from "./pages/Starpattern";
import StarPatternPractice from "./pages/Starpatternpractice";
import FUNCTION from "./pages/Function";
import FunctionPractice from "./pages/Functionpractice";
import Ifelse from "./pages/Ifelse";
import IfelsePractice from "./pages/Ifelsepractice";
import FOR_LOOP from "./pages/forloop";
import ForLoopPractice from "./pages/Forlooppractice";
import WHILE_LOOP from "./pages/whileloop";
import WhileLoopPractice from "./pages/Whilelooppractice";
import LOGICAL_QUESTIONS from "./pages/logicalquestions";
import LogicalquestionsPractice from "./pages/Logicalquestionspractice";

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
        path="/star-patterns"
        element={
          <PrivateRoute>
            <STAR_PATTERNS />
          </PrivateRoute>
        }
      />
      <Route
        path="/ifelse"
        element={
          <PrivateRoute>
            <Ifelse />
          </PrivateRoute>
        }
      />
      <Route
        path="/ifelse/practice"
        element={
          <PrivateRoute>
            <IfelsePractice/>
          </PrivateRoute>
        }
      />
      <Route
        path="/forloop"
        element={
          <PrivateRoute>
            <FOR_LOOP/>
          </PrivateRoute>
        }
      />
      <Route
        path="/forloop/practice"
        element={
          <PrivateRoute>
            <ForLoopPractice/>
          </PrivateRoute>
        }
      />
      <Route
        path="/whileloop"
        element={
          <PrivateRoute>
            <WHILE_LOOP/>
          </PrivateRoute>
        }
      />
      <Route
        path="/whileloop/practice"
        element={
          <PrivateRoute>
            <WhileLoopPractice/>
          </PrivateRoute>
        }
      />
      <Route
        path="/logical"
        element={
          <PrivateRoute>
            <LOGICAL_QUESTIONS/>
          </PrivateRoute>
        }
      />
      <Route
        path="/logical/practice"
        element={
          <PrivateRoute>
            <LogicalquestionsPractice/>
          </PrivateRoute>
        }
      />
      <Route
        path="/star-patterns-practice"
        element={
          <PrivateRoute>
            <StarPatternPractice />
          </PrivateRoute>
        }
      />
      <Route
        path="/function"
        element={
          <PrivateRoute>
            <FUNCTION />
          </PrivateRoute>
        }
      />
      <Route
        path="/function-practice"
        element={
          <PrivateRoute>
            <FunctionPractice />
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
      
      <Route
        path="/createtest"
        element={
          <PrivateRoute>
            <CreateTest/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
