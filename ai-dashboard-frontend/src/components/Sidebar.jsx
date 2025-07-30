import { Link, useLocation } from "react-router-dom";
import { Home, BarChart, Settings, Users, Brain,File,Bot, Activity, BarChart2, FileText } from "lucide-react";

const navItems = [
  { name: "Home", path: "/home", icon: <Home size={18} /> },
  { name: "AI Insights", path: "/insights", icon: <Brain size={18} /> },
  { name: "Sales Forecasting", path: "/sales", icon: <BarChart size={18} /> }, // match route path
  { name: "Reports", path: "/reports", icon: <File size={18} /> },
  { name: "Users", path: "/users", icon: <Users size={18} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={18} /> },{ name: "AI Assistant", path: "/ai-assistant", icon: <Bot /> },
{ name: "Churn Prediction", path: "/churn-prediction", icon: <Activity /> },
{ name: "Forecast Analysis", path: "/forecast-analysis", icon: <BarChart2 /> },
{ name: "Smart Reports", path: "/smart-reports", icon: <FileText /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-60 h-full bg-white dark:bg-gray-800 shadow-md">
      <div className="p-6 text-xl font-bold text-gray-900 dark:text-white">AI Dashboard</div>
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map(({ name, path, icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
              ${location.pathname === path
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`}
          >
            {icon}
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;