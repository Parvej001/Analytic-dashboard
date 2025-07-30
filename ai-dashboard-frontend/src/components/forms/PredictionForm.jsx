import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export default function PredictionForm({ onPredict, title = "Predict Insights" }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onPredict(input);
      setInput(""); // clear after submit
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>

      <input
        type="text"
        placeholder="Enter user data or metric e.g. sales, churn"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
      />

      <Button type="submit" className="w-full flex items-center justify-center gap-2">
        <Brain size={18} />
        Predict Now
      </Button>
    </form>
  );
}
