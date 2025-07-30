import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  Star,
  Lightbulb,
  LineChart,
  ShieldCheck,
} from "lucide-react";

const Insights = () => {
  const insightData = {
    churnRate: "12%",
    forecast: "Sales expected to grow by 18% in Q3",
    bestProduct: "AI-Powered Smartwatch Pro",
    fraudRisk: "Low risk detected in past month",
    userSentiment: "82% positive feedback",
  };

  const insightsList = [
    {
      icon: <AlertTriangle className="text-red-500" size={28} />,
      title: "Customer Churn Prediction",
      description: `Churn rate is currently at ${insightData.churnRate}.`,
      impact: "Use retention campaigns to improve loyalty.",
      bg: "bg-red-50 dark:bg-zinc-800",
    },
    {
      icon: <TrendingUp className="text-green-500" size={28} />,
      title: "Sales Forecast",
      description: insightData.forecast,
      impact: "Prepare inventory and optimize campaign budgets.",
      bg: "bg-green-50 dark:bg-zinc-800",
    },
    {
      icon: <Star className="text-yellow-500" size={28} />,
      title: "Top Product Insights",
      description: `Best performer: ${insightData.bestProduct}.`,
      impact: "Scale production and marketing efforts.",
      bg: "bg-yellow-50 dark:bg-zinc-800",
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={28} />,
      title: "Fraud Risk Detection",
      description: insightData.fraudRisk,
      impact: "No major anomalies. Continue monitoring.",
      bg: "bg-blue-50 dark:bg-zinc-800",
    },
    {
      icon: <Lightbulb className="text-purple-500" size={28} />,
      title: "AI Recommendations",
      description: "Focus more on Gen-Z audience in Tier 1 cities.",
      impact: "Refine marketing segmentation strategies.",
      bg: "bg-purple-50 dark:bg-zinc-800",
    },
    {
      icon: <LineChart className="text-pink-500" size={28} />,
      title: "User Sentiment",
      description: insightData.userSentiment,
      impact: "Feedback trend indicates high user satisfaction.",
      bg: "bg-pink-50 dark:bg-zinc-800",
    },
  ];

  return (
    <section className="min-h-screen p-6 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          🔍 AI-Powered Business Insights
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightsList.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Card
                className={`${insight.bg} shadow-md hover:shadow-xl transition duration-300 rounded-2xl border border-gray-200 dark:border-zinc-700`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white dark:bg-zinc-700 rounded-full shadow-sm">
                      {insight.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {insight.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-zinc-300 text-sm">
                    {insight.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                    {insight.impact}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
