import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AIInsightCard({
  title = "AI Insight",
  value = "₹0",
  trend = "up",         // "up", "down", or null
  percentage = "0%",
  icon = null,
  description = "Based on recent analysis",
  bgGradient = "from-blue-100 to-blue-200",
  glowColor = "shadow-blue-400",
}) {
  const trendIcon =
    trend === "up" ? <ArrowUpRight size={18} className="text-green-600" /> :
    trend === "down" ? <ArrowDownRight size={18} className="text-red-600" /> :
    null;

  const trendColor =
    trend === "up" ? "text-green-600 bg-green-100" :
    trend === "down" ? "text-red-600 bg-red-100" :
    "text-gray-500 bg-gray-100";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-2xl bg-gradient-to-tr ${bgGradient} text-gray-800 shadow-md hover:shadow-xl border border-white/20 hover:${glowColor} transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${trendColor}`}>
            {trendIcon}
            <span>{percentage}</span>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold opacity-90 mb-1">{title}</h3>
        <p className="text-3xl font-bold leading-tight">{value}</p>
        <p className="text-sm text-gray-600 mt-1 dark:text-white/70">{description}</p>
      </div>
    </motion.div>
  );
}
