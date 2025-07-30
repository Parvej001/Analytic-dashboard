import { motion } from "framer-motion";
import { FileText, Download, FileSearch } from "lucide-react";
import SmartReportCard from "../components/SmartReportCard";
const mockReports = [
  {
    id: 1,
    title: "User Churn Prediction - July",
    status: "Completed",
    date: "2025-07-25",
  },
  {
    id: 2,
    title: "Sales Forecast - Q2",
    status: "In Progress",
    date: "2025-07-27",
  },
  {
    id: 3,
    title: "Customer Segmentation",
    status: "Completed",
    date: "2025-07-23",
  },
  {
    id: 4,
    title: "Marketing Campaign Analysis",
    status: "Pending Review",
    date: "2025-07-20",
  },
  {
    id: 5,
    title: "Inventory Turnover Report",
    status: "In Progress",
    date: "2025-07-28",
  },
  {
    id: 6,
    title: "Product Performance Review",
    status: "Completed",
    date: "2025-07-22",
  },
  {
    id: 7,
    title: "Website Traffic Analysis",
    status: "Delayed",
    date: "2025-07-18",
  },
  {
    id: 8,
    title: "Customer Feedback Summary",
    status: "Completed",
    date: "2025-07-26",
  },
  {
    id: 9,
    title: "Quarterly Financial Report",
    status: "In Progress",
    date: "2025-07-30",
  },
  {
    id: 10,
    title: "Product Launch Impact",
    status: "Pending Review",
    date: "2025-07-24",
  },
];

const Reports = () => {
  return (
    <motion.div
      className="p-6 dark:bg-gray-600 dark:text-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-600 flex items-center gap-2">
          <FileSearch className="w-6 h-6" />
          Reports Dashboard
        </h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {mockReports.map((report) => (
          <div
            key={report.id}
            className="dark:bg-gray-800 dark:text-white border border-purple-300 bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow"
          >
            <div className=" flex items-center justify-between">
              <h3 className="font-semibold text-lg text-purple-700">
                {report.title}
              </h3>
              <FileText className="text-purple-600 w-5 h-5" />
            </div>
            <p className="text-sm  text-gray-500 mt-1">Date: {report.date}</p>
            <span
              className={`inline-block  mt-2 px-3 py-1 text-xs rounded-full font-medium ${report.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : report.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : report.status === "Pending Review"
                      ? "bg-blue-100 text-blue-600"
                      : report.status === "Delayed"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                }`}
            >
              {report.status}
            </span>
            <SmartReportCard report={report} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reports;
