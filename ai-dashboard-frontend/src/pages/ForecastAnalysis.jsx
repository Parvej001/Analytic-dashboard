import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from "recharts";
import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import AIInsightCard from "@/components/cards/AIInsightCard";

const salesForecast = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 14000 },
    { month: "Mar", sales: 16000 },
    { month: "Apr", sales: 20000 },
    { month: "May", sales: 23000 },
    { month: "Jun", sales: 25000 },
    { month: "Jul", sales: 28000 },
];

const revVsExp = [
    { month: "Jan", revenue: 14000, expenses: 7000 },
    { month: "Feb", revenue: 15000, expenses: 8500 },
    { month: "Mar", revenue: 17000, expenses: 9000 },
    { month: "Apr", revenue: 20000, expenses: 10000 },
    { month: "May", revenue: 22000, expenses: 12000 },
    { month: "Jun", revenue: 26000, expenses: 13000 },
    { month: "Jul", revenue: 30000, expenses: 15000 },
];

const forecastSummary = [
    { metric: "Predicted Revenue (Q3)", value: "$75,000" },
    { metric: "Expected Growth Rate", value: "18.6%" },
    { metric: "Projected ROI", value: "32%" },
    { metric: "Break-even Point", value: "Sep 2025" },
    { metric: "Top Performing Month", value: "Jul" },
];

const ForecastAnalysis = () => {
    const [growth, setGrowth] = useState(18.6);

    useEffect(() => {
        // Simulate a backend fetch/update
        setTimeout(() => setGrowth(18.6), 300);
    }, []);

    return (
        <motion.div
            className="p-6 space-y-6 dark:bg-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h2 className="text-3xl font-bold text-indigo-600">Forecast Analysis</h2>
            <p className="text-gray-600 dark:text-gray-300">
                AI-powered future performance projections and financial forecasts
            </p>

            {/* Insight Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-4">
                <AIInsightCard
                    title="Projected Growth"
                    value={`${growth}%`}
                    trend="up"
                    percentage="3.2%"
                    icon={<TrendingUp />}
                    description="Quarter-over-Quarter growth"
                    bgGradient="from-blue-100 to-indigo-200"
                    glowColor="shadow-blue-400"
                />
                <AIInsightCard
                    title="Forecasted Sales"
                    value="$28,000"
                    trend="up"
                    percentage="6.7%"
                    icon={<DollarSign />}
                    description="Expected peak in July"
                    bgGradient="from-green-100 to-emerald-200"
                    glowColor="shadow-green-400"
                />
                <AIInsightCard
                    title="Predicted Revenue"
                    value="$75,000"
                    trend="up"
                    percentage="8.9%"
                    icon={<BarChart3 />}
                    description="For upcoming quarter"
                    bgGradient="from-yellow-100 to-amber-200"
                    glowColor="shadow-yellow-400"
                />
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Sales Forecast Line Chart */}
                <Card className="shadow-lg h-[450px]">
                    <CardContent className="p-6 h-full flex flex-col">
                        <h4 className="text-xl font-semibold mb-4">📈 Sales Forecast</h4>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={salesForecast}
                                margin={{ top: 20, right: 30, left: 10, bottom: 40 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="month"
                                    angle={-15}
                                    textAnchor="end"
                                    height={60}
                                    tick={{ fontSize: 12 }}
                                />
                                <YAxis
                                    tick={{ fontSize: 12 }}
                                    allowDecimals={false}
                                    width={40}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
                                    labelStyle={{ color: "#4b5563" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="sales"
                                    stroke="#6366f1"
                                    strokeWidth={3}
                                    dot={{ r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>



                {/* Revenue vs Expenses Bar Chart */}
                <Card className="shadow-lg">
                    <CardContent className="p-4 h-[400px]">
                        <h4 className="text-lg font-semibold mb-2">Revenue vs Expenses</h4>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={revVsExp}
                                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" angle={-15} textAnchor="end" />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36} />
                                <Bar dataKey="revenue" fill="#10b981" />
                                <Bar dataKey="expenses" fill="#ef4444" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Forecast Summary Table */}
            <Card className="mt-6 shadow-md">
                <CardContent className="p-4 h-[300px]">
                    <h4 className="text-lg font-semibold mb-3">Forecast Summary</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="border-b text-left">
                                    <th className="p-2">Metric</th>
                                    <th className="p-2">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {forecastSummary.map((item, idx) => (
                                    <tr key={idx} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <td className="p-2 font-medium">{item.metric}</td>
                                        <td className="p-2">{item.value}</td>
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

export default ForecastAnalysis;
