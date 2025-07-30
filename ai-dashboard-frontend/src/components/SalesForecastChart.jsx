import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const dummyForecastData = [
  { month: "Jan", sales: 4200 },
  { month: "Feb", sales: 4600 },
  { month: "Mar", sales: 5100 },
  { month: "Apr", sales: 4800 },
  { month: "May", sales: 5400 },
  { month: "Jun", sales: 5900 },
  { month: "Jul", sales: 6200 },
];

const SalesForecastChart = () => {
  return (
    <motion.div
      className="bg-white dark:bg-[#1c1c1c] p-6 rounded-2xl shadow-md"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        📈 Sales Forecast (Next 6 Months)
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={dummyForecastData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SalesForecastChart;
