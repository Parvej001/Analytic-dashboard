import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Users, TrendingUp, TrendingDown, BrainCircuit } from "lucide-react";
import AIInsightCard from "@/components/cards/AIInsightCard";

const churnStats = [
  { name: "Churned", value: 320 },
  { name: "Retained", value: 680 },
];

const COLORS = ["#ef4444", "#10b981"];

const churnTrendData = [
  { month: "Jan", churn: 50 },
  { month: "Feb", churn: 60 },
  { month: "Mar", churn: 70 },
  { month: "Apr", churn: 80 },
  { month: "May", churn: 90 },
  { month: "Jun", churn: 110 },
  { month: "Jul", churn: 130 },
];

const userData = [
  { name: "Alice", status: "Retained", usage: "High", lastLogin: "2025-07-20" },
  { name: "Bob", status: "Churned", usage: "Low", lastLogin: "2025-06-10" },
  { name: "Charlie", status: "Retained", usage: "Medium", lastLogin: "2025-07-25" },
  { name: "David", status: "Churned", usage: "Low", lastLogin: "2025-05-30" },
  { name: "Eva", status: "Retained", usage: "High", lastLogin: "2025-07-27" },
];

const ChurnPrediction = () => {
  const [stats, setStats] = useState({ churnRate: 32, trend: "up", delta: 5.4 });

  useEffect(() => {
    // Simulated dynamic fetch/update if needed
    setTimeout(() => {
      setStats({ churnRate: 32, trend: "up", delta: 5.4 });
    }, 500);
  }, []);

  return (
    <motion.div
      className="p-6 space-y-6 dark:bg-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold text-rose-600">Churn Prediction</h2>
      <p className="text-gray-600 dark:text-gray-300">Insights into customer retention and churn rates</p>

      {/* Insight Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <AIInsightCard
          title="Churn Rate"
          value={`${stats.churnRate}%`}
          trend={stats.trend}
          percentage={`${stats.delta}%`}
          icon={<TrendingUp />}
          description="Compared to previous month"
          bgGradient="from-rose-100 to-pink-200"
          glowColor="shadow-rose-400"
        />
        <AIInsightCard
          title="Total Churned Users"
          value="320"
          trend="up"
          percentage="8.2%"
          icon={<TrendingDown />}
          description="Overall churned accounts"
          bgGradient="from-red-100 to-orange-200"
          glowColor="shadow-orange-400"
        />
        <AIInsightCard
          title="Active Users"
          value="680"
          trend="down"
          percentage="2.1%"
          icon={<Users />}
          description="Consistently engaging users"
          bgGradient="from-green-100 to-emerald-200"
          glowColor="shadow-green-400"
        />
      </div>

      {/* Pie Chart + Line Chart */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="h-[300px] p-4">
            <h4 className="text-lg font-semibold mb-2">Churn Distribution</h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={churnStats}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {churnStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="h-[300px] p-4">
            <h4 className="text-lg font-semibold mb-2">Churn Trend Over Months</h4>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={churnTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="churn" stroke="#ef4444" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card className="shadow-md mt-4">
        <CardContent className="p-4">
          <h4 className="text-lg font-semibold mb-3">User Churn Table</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">User</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Usage</th>
                  <th className="p-2">Last Login</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="p-2">{user.name}</td>
                    <td className={`p-2 font-semibold ${user.status === "Churned" ? "text-red-500" : "text-green-500"}`}>
                      {user.status}
                    </td>
                    <td className="p-2">{user.usage}</td>
                    <td className="p-2">{user.lastLogin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChurnPrediction;
