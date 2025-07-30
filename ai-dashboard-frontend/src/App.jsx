import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Reports from "./pages/Reports";
import Sales from "./pages/Sales";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import AIAssistant from "./pages/AIAssistant";
import ForecastAnalysis from "./pages/ForecastAnalysis";
import ChurnPrediction from "./pages/ChurnPrediction";
import SmartReports from "./pages/SmartReports";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />

            {/* ✅ New Routes */}
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/forecast-analysis" element={<ForecastAnalysis />} />
            <Route path="/churn-prediction" element={<ChurnPrediction />} />
            <Route path="/smart-reports" element={<SmartReports />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
