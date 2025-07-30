import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AIPredictionCard = ({ title, value, confidence, status }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-2xl shadow-lg p-6 bg-gradient-to-br from-[#f0f4ff] to-[#e0ecff] dark:from-[#1f2937] dark:to-[#111827] hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <Sparkles size={20} className="text-blue-500" />
      </div>
      <div className="text-3xl font-bold text-black dark:text-white mb-1">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-300">Confidence: {confidence}%</div>
      <div
        className={`mt-2 inline-block px-3 py-1 text-xs rounded-full ${
          status === "High"
            ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
            : status === "Medium"
            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
            : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
        }`}
      >
        Risk: {status}
      </div>
    </motion.div>
  );
};

export default AIPredictionCard;
