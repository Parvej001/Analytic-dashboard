import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, BrainCog } from "lucide-react";

const AIAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt) return;

    setLoading(true);
    const currentPrompt = prompt;
    setPrompt("");

    // Simulate AI thinking delay
    setTimeout(() => {
      const fakeAnswer = generateFakeAIResponse(currentPrompt);
      setResponses((prev) => [
        ...prev,
        { question: currentPrompt, answer: fakeAnswer },
      ]);
      setLoading(false);
    }, 1200);
  };

  const generateFakeAIResponse = (question) => {
    const examples = [
      `Based on your input, the churn rate this month is estimated at 5.2%. Recommend launching a re-engagement campaign.`,
      `Great question! I suggest segmenting users by engagement score and targeting the low ones.`,
      `Revenue trends are stable. Try projecting Q4 with a 7% growth rate and see variance.`,
      `Your top 3 performing regions are: California, Texas, and New York.`,
      `The sentiment analysis on recent reviews is 74% positive. No major concerns.`,
    ];

    const picked = examples[Math.floor(Math.random() * examples.length)];
    return picked;
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black min-h-screen rounded-xl shadow-xl">
      <motion.h2
        className="text-3xl font-bold flex items-center gap-2 text-zinc-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <BrainCog size={28} className="text-primary" />
        AI Assistant
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Input
          className="w-full md:w-2/3"
          placeholder="Ask something like 'How's user retention this week?'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button onClick={handleAsk} disabled={loading}>
          {loading ? "Thinking..." : "Ask"}
        </Button>
      </div>

      <div className="space-y-4 mt-4">
        {responses.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white dark:bg-zinc-900 border dark:border-zinc-700 shadow-md hover:shadow-xl transition">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-500 mb-2">
                  <span className="font-medium">You:</span> {entry.question}
                </p>
                <div className="flex items-start gap-3">
                  <Sparkles className="text-blue-500 mt-1" />
                  <p className="text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed">
                    {entry.answer}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {responses.length === 0 && !loading && (
          <p className="text-zinc-500 dark:text-zinc-400 mt-8 text-center">
            Ask me anything about sales, users, churn, or forecasting!
          </p>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
