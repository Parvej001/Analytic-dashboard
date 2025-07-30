import { motion } from "framer-motion";
import { Settings as SettingsIcon, Lock, Bell } from "lucide-react";
import AIPreferencesCard from "../components/AIPreferencesCard";

const Settings = () => {
  return (
    <motion.div
      className="p-6 dark:bg-gray-700 dark:text-white"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2">
        <SettingsIcon className="w-6 h-6" />
        Settings
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <AIPreferencesCard />
        {/* General Settings */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold text-purple-600">General</h3>
          <div>
            <label className="block text-sm text-gray-600 dark:bg-gray-800 dark:text-white">Name</label>
            <input
              type="text"
              defaultValue="Parvej Khan"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:bg-gray-800 dark:text-white">Email</label>
            <input
              type="email"
              defaultValue="parvej@example.com"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold text-purple-600 flex items-center gap-1">
            <Lock className="w-5 h-5" />
            Security
          </h3>
          <div>
            <label className="block text-sm text-gray-600 dark:bg-gray-800 dark:text-white">Change Password</label>
            <input
              type="password"
              placeholder="New password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:bg-gray-800 dark:text-white">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 col-span-full md:col-span-1 dark:bg-gray-900 dark:text-white">
          <h3 className="text-xl font-semibold text-purple-600 flex items-center gap-1">
            <Bell className="w-5 h-5" />
            Notifications
          </h3>

          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked className="toggle toggle-purple" />
          </div>

          <div className="flex items-center justify-between">
            <span>Push Alerts</span>
            <input type="checkbox" defaultChecked className="toggle toggle-purple" />
          </div>

          <div className="flex items-center justify-between">
            <span>Weekly Reports</span>
            <input type="checkbox" className="toggle toggle-purple" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;
