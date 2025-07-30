import { motion } from "framer-motion";
import { UserCircle, Mail, Calendar, BadgeCheck } from "lucide-react";
import UserMetricsTable from "@/components/tables/UserMetricsTable"; // ✅ Import added

const dummyUsers = [
  {
    id: 1,
    name: "Parvej Khan",
    email: "parvej@example.com",
    role: "Admin",
    joined: "2024-06-15",
  },
  {
    id: 2,
    name: "Sara Malik",
    email: "sara@example.com",
    role: "User",
    joined: "2024-07-05",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    role: "Manager",
    joined: "2024-07-12",
  },
];

const Users = () => {
  return (
    <motion.div
      className="p-6 dark:bg-gray-700 dark:text-white"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2">
        <UserCircle className="w-6 h-6" />
        Users Management
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {dummyUsers.map((user) => (
          <motion.div
            key={user.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-xl dark:bg-gray-800 dark:text-white p-5 rounded-2xl border-l-4 border-purple-500 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:bg-gray-800 dark:text-white">
                {user.name}
              </h3>
              <BadgeCheck className="text-green-500 w-5 h-5" />
            </div>

            <div className="text-sm text-gray-600 mt-1 flex items-center gap-2 dark:bg-gray-800 dark:text-white">
              <Mail className="w-4 h-4" />
              {user.email}
            </div>

            <div className="text-sm text-gray-600 mt-1 flex items-center gap-2 dark:bg-gray-800 dark:text-white">
              <Calendar className="w-4 h-4" />
              Joined: {user.joined}
            </div>

            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
                {user.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Appended Metrics Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow"
      >
        <h3 className="text-xl font-semibold mb-4 text-purple-700">User Metrics Summary</h3>
        <UserMetricsTable />
      </motion.div>
    </motion.div>
  );
};

export default Users;
