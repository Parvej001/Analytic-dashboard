import { Sparkles } from "lucide-react";

const SmartReportCard = ({ report }) => {
  // Placeholder AI logic (replace with real API or AI logic later)
  const generateInsight = (title) => {
    if (title.toLowerCase().includes("churn")) {
      return "Churn rate decreased by 12% due to improved user onboarding.";
    } else if (title.toLowerCase().includes("sales")) {
      return "Projected Q2 sales to rise by 8% based on current trends.";
    } else if (title.toLowerCase().includes("feedback")) {
      return "Positive feedback increased by 22% last month.";
    }
    return "AI is reviewing this report for deeper insights...";
  };

  const aiInsight = generateInsight(report.title);

  return (
    <div className="mt-4 px-3 py-2 bg-purple-50 border border-purple-200 rounded-md text-sm text-purple-800 flex items-start gap-2">
      <Sparkles className="w-4 h-4 mt-1 text-purple-600" />
      <p>{aiInsight}</p>
    </div>
  );
};

export default SmartReportCard;
