import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import data from "../data/lineChartData";
import { useTheme } from "../context/ThemeContext";

export default function LineChartComponent() {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg p-4 h-[300px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className="text-gray-700 dark:text-gray-200 font-medium mb-2">Revenue Over Time</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{ backgroundColor: darkMode ? "#2d2d2d" : "#fff" }}
            labelStyle={{ color: darkMode ? "#aaa" : "#000" }}
            itemStyle={{ color: darkMode ? "#fff" : "#000" }}
          />
          <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}