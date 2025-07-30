import { motion } from "framer-motion";

export default function KPICard({ title, value }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h4 className="text-gray-500 dark:text-gray-400 text-sm">{title}</h4>
      <p className="text-2xl font-semibold">{value}</p>
    </motion.div>
  );
}