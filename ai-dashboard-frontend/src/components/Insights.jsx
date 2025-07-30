import React, { useEffect, useState } from "react";
import { getDummySalesForecast, getDummyChurnRate, getDummyTrendInsight } from "../services/aiServices";

const Insights = () => {
  const [salesForecast, setSalesForecast] = useState([]);
  const [churnData, setChurnData] = useState({});
  const [trend, setTrend] = useState("");

  useEffect(() => {
    setSalesForecast(getDummySalesForecast());
    setChurnData(getDummyChurnRate());
    setTrend(getDummyTrendInsight());
  }, []);

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl space-y-6 ">
      <h2 className="text-2xl font-semibold text-gray-800">📊 AI-Powered Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-xl">
          <h3 className="font-medium">🔮 Sales Forecast</h3>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            {salesForecast.map((day, idx) => (
              <li key={idx}>{day.date}: ₹{day.predictedSales}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-red-50 rounded-xl">
          <h3 className="font-medium">🚨 Churn Risk</h3>
          <p className="text-sm mt-2">Probability: <strong>{churnData.churnProbability}</strong></p>
          <p className="text-sm">High-Risk Users: <strong>{churnData.highRiskUsers}</strong></p>
        </div>

        <div className="p-4 bg-green-50 rounded-xl">
          <h3 className="font-medium">🔥 Trending Now</h3>
          <p className="text-sm mt-2">{trend}</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;