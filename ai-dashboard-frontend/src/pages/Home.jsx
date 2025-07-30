import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Database,
  BarChart2,
  Sun,
  Moon,
  Users,
  Brain,
  BarChart,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // Adjust path if needed
import { Card, CardContent } from "@/components/ui/card";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[idx]);
      idx++;
      if (idx === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}</span>;
};

const floatingIcons = [
  { Icon: Cpu, top: "20%", left: "10%", delay: 0 },
  { Icon: Database, top: "35%", right: "15%", delay: 1.5 },
  { Icon: BarChart2, top: "60%", left: "20%", delay: 3 },
];

const Home = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const cards = [
    { title: "Active Users", value: "1,204", icon: <Users className="text-blue-500" /> },
    { title: "Churn Prediction", value: "2.4%", icon: <Brain className="text-rose-500" /> },
    { title: "Revenue Forecast", value: "$42,300", icon: <BarChart className="text-green-500" /> },
  ];

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center px-6 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
      }}
    >
      {/* Animated Background Circles */}
      <motion.div
        className="absolute rounded-full bg-indigo-400 opacity-20 w-96 h-96 top-[-150px] left-[-150px]"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full bg-purple-400 opacity-20 w-72 h-72 bottom-[-100px] right-[-100px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, top, left, right, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-indigo-300"
          style={{ top, left, right }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 4, delay }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      <motion.h1
        className="text-5xl font-extrabold mb-4 tracking-wide relative z-10"
        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
      >
        Welcome to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
          AI Analytics Dashboard
        </span>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mx-auto mt-2"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.h1>

      <motion.p
        className="text-lg mb-2 max-w-2xl leading-relaxed text-indigo-200 relative z-10"
        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
      >
        Unlock powerful insights with our AI-powered tools. Navigate through dashboards, explore reports, and manage your data efficiently.
      </motion.p>

      <motion.p
        className="text-sm italic text-indigo-300 mb-12 relative z-10"
        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
      >
        <Typewriter text="Your data, smarter and simpler." speed={80} />
      </motion.p>

      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/50 px-8 py-3 rounded-full font-semibold text-white tracking-wide hover:brightness-110 transition"
        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
      >
        Go to Dashboard <ArrowRight size={20} />
      </motion.button>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-16 w-full px-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <p className="text-2xl font-bold mt-2">{card.value}</p>
                </div>
                <div className="text-4xl">{card.icon}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Morphing blob SVG */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-48"
        viewBox="0 0 600 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="rgba(139,92,246,0.6)"
          d="M421.8,145.3Q391,190,344.5,199.3Q298,208.5,250,202Q202,195.5,154.3,181Q106.5,166.5,83.8,128.8Q61,91,89.5,59.8Q118,28.5,157.8,15.8Q197.5,3,243,13Q288.5,23,321.8,55.3Q355,87.5,385.3,107.5Q415.5,127.5,421.8,145.3Z"
          animate={{
            d: [
              "M421.8,145.3Q391,190,344.5,199.3Q298,208.5,250,202Q202,195.5,154.3,181Q106.5,166.5,83.8,128.8Q61,91,89.5,59.8Q118,28.5,157.8,15.8Q197.5,3,243,13Q288.5,23,321.8,55.3Q355,87.5,385.3,107.5Q415.5,127.5,421.8,145.3Z",
              "M417.8,131.3Q399,172,347.5,185.3Q296,198.5,244,190Q192,181.5,147.3,160Q102.5,138.5,83.8,108.8Q65,79,88.5,59.8Q112,40.5,154.8,31.8Q197.5,23,247,27Q296.5,31,337.8,58.3Q379,85.5,406.3,107.5Q433.5,129.5,417.8,131.3Z",
              "M421.8,145.3Q391,190,344.5,199.3Q298,208.5,250,202Q202,195.5,154.3,181Q106.5,166.5,83.8,128.8Q61,91,89.5,59.8Q118,28.5,157.8,15.8Q197.5,3,243,13Q288.5,23,321.8,55.3Q355,87.5,385.3,107.5Q415.5,127.5,421.8,145.3Z",
            ],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-indigo-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </motion.div>
  );
};

export default Home;
