import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { 
  BrainCircuit, 
  TrendingUp, 
  MapPin, 
  UserCheck, 
  AlertTriangle 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ForecastChart from "@/components/charts/ForecastChart";
import AIInsightCard from "@/components/cards/AIInsightCard";
import PredictionForm from "@/components/forms/PredictionForm";
import UserMetricsTable from "@/components/tables/UserMetricsTable";

// Expanded dummy sales data for better visualization
const dummySalesData = [
  { product: "Product A", revenue: 8000 },
  { product: "Product B", revenue: 12000 },
  { product: "Product C", revenue: 15500 },
  { product: "Product D", revenue: 13000 },
  { product: "Product E", revenue: 17500 },
  { product: "Product F", revenue: 18000 },
  { product: "Product G", revenue: 20000 },
  { product: "Product H", revenue: 22000 },
  { product: "Product I", revenue: 24500 },
  { product: "Product J", revenue: 27000 },
];

const Sales = () => {
  const [salesData] = useState(dummySalesData);

  const forecast =
    salesData.length > 0
      ? salesData[salesData.length - 1].revenue + 500
      : 0;

  return (
    <motion.div
      className="p-6 space-y-6 dark:bg-gray-700 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold text-blue-600">Sales Forecasting</h2>

      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
        <CardContent className="py-4 px-6 dark:bg-gray-800">
          <p className="text-gray-700 text-lg font-medium dark:text-white">📈 AI Prediction:</p>
          <p className="text-2xl font-bold text-blue-700">
            ₹{forecast.toLocaleString()} expected next cycle
          </p>
          <p className="text-sm text-gray-500 dark:text-white">Based on sample data</p>
        </CardContent>
      </Card>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="product" />
            <YAxis dataKey="revenue" />
            <Tooltip contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AIInsightCard
          title="Predicted Churn"
          value="23.5%"
          trend="up"
          percentage="4.8%"
          icon={<BrainCircuit />}
          description="Projected increase over last month"
          bgGradient="from-purple-100 to-indigo-200"
          glowColor="shadow-indigo-400"
        />

        <AIInsightCard
          title="Sales Growth Forecast"
          value="+12.3%"
          trend="up"
          percentage="2.1%"
          icon={<TrendingUp />}
          description="Expected revenue rise next quarter"
          bgGradient="from-green-100 to-teal-200"
          glowColor="shadow-green-400"
        />

        <AIInsightCard
          title="Top Performing Region"
          value="West Zone"
          trend="stable"
          percentage="32.7%"
          icon={<MapPin />}
          description="Based on last 30 days of data"
          bgGradient="from-yellow-100 to-orange-200"
          glowColor="shadow-yellow-400"
        />

        <AIInsightCard
          title="Returning Customers"
          value="58.9%"
          trend="up"
          percentage="5.6%"
          icon={<UserCheck />}
          description="Based on loyalty segmentation"
          bgGradient="from-blue-100 to-cyan-200"
          glowColor="shadow-blue-300"
        />

        <AIInsightCard
          title="High-Risk Clients"
          value="8 accounts"
          trend="down"
          percentage="1.3%"
          icon={<AlertTriangle />}
          description="Flagged by churn model"
          bgGradient="from-red-100 to-pink-200"
          glowColor="shadow-red-300"
        />
        <ForecastChart title="Upcoming Revenue Forecast" data={salesData} />
      </div>

      <PredictionForm title="Input Sales Parameters" />

      <div className="mt-6">
        <UserMetricsTable />
      </div>
    </motion.div>
  );
};

export default Sales;