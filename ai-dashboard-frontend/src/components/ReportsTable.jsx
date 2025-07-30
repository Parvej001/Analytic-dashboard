import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";

const dummyReports = [
  { id: 1, name: "Customer Segmentation", status: "Completed", score: "92%", date: "2025-07-29" },
  { id: 2, name: "Churn Risk Analysis", status: "In Progress", score: "76%", date: "2025-07-28" },
  { id: 3, name: "Sales Forecast Review", status: "Completed", score: "88%", date: "2025-07-27" },
  { id: 4, name: "User Retention Pattern", status: "Pending", score: "-", date: "2025-07-26" },
];

const ReportsTable = () => {
  return (
    <motion.div
      className="bg-white dark:bg-[#1c1c1c] p-6 rounded-2xl shadow-md mt-8"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        📋 AI Smart Reports
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Report Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyReports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.id}</TableCell>
              <TableCell>{report.name}</TableCell>
              <TableCell className="text-sm font-medium">
                <span
                  className={`px-2 py-1 rounded-full text-white ${
                    report.status === "Completed"
                      ? "bg-green-500"
                      : report.status === "In Progress"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                >
                  {report.status}
                </span>
              </TableCell>
              <TableCell>{report.score}</TableCell>
              <TableCell>{report.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default ReportsTable;
