import { motion } from "framer-motion";
import { insights } from "../data/insights";

export default function InsightCard() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow-md rounded-lg p-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="text-gray-700 dark:text-gray-200 font-medium mb-2">🧠 AI Insights</h4>
      <ul className="list-disc pl-5 space-y-2">
        {insights.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>
    </motion.div>
  );
}