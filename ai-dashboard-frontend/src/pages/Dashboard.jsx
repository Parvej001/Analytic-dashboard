import React from 'react';
import { motion } from 'framer-motion';
import CardCustom from '@/components/CardCustom';
import ChartSection from '@/components/ChartSection';
import KPICard from '@/components/KPICard';
import AIPredictionCard from '@/components/AIPredictionCard';
import SalesForecastChart from '@/components/SalesForecastChart';
import ReportsTable from '@/components/ReportsTable';

const Dashboard = () => {
  return (
    <motion.div
      className="p-6 space-y-6 dark:bg-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPICard title="Users" value="2,456" growth="12%" />
        <KPICard title="Sales" value="$25,000" growth="9%" />
        <KPICard title="Sessions" value="15,300" growth="6%" />
      </div>

      {/* AI Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AIPredictionCard
          title="Churn Risk"
          prediction="High"
          confidence="85%"
        />
        <AIPredictionCard
          title="Sales Boost Region"
          prediction="West Zone"
          confidence="78%"
        />
        <AIPredictionCard
          title="Next Quarter Forecast"
          prediction="$28,500"
          confidence="92%"
        />
      </div>

      {/* Sales Forecast Chart */}
      <SalesForecastChart />

      {/* Chart + Custom Cards */}
      <ChartSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardCustom
          title="Revenue Breakdown"
          description="Insights by region, product, and performance."
        />
        <CardCustom
          title="Conversion Funnel"
          description="Track leads converting into users."
        />
      </div>

      {/* Reports Table */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Reports</h2>
        <ReportsTable />
      </div>
    </motion.div>
  );
};

export default Dashboard;
