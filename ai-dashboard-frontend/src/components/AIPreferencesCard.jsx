import { Sparkles } from "lucide-react";

const AIPreferencesCard = () => {
  return (
    <div className="mt-8 bg-purple-50 border border-purple-200 rounded-2xl p-4 space-y-3 dark:bg-gray-800 dark:border-purple-700">
      <div className="flex items-center gap-2 text-purple-700 font-semibold">
        <Sparkles className="w-5 h-5" />
        AI Personalization Suggestions
      </div>

      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
        <li>Switch to dark mode during evening hours for eye comfort.</li>
        <li>Enable weekly reports to track engagement trends.</li>
        <li>Use a password manager to enhance account security.</li>
        <li>Set up 2FA for critical actions to prevent unauthorized access.</li>
      </ul>
    </div>
  );
};

export default AIPreferencesCard;
