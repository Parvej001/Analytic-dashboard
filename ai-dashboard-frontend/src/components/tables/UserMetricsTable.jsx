import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('name', {
    header: 'User',
    cell: info => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.accessor('email', {
    header: 'Email',
  }),
  columnHelper.accessor('engagementScore', {
    header: 'Engagement',
    cell: info => (
      <span className="text-blue-600 font-semibold">
        {info.getValue()}%
      </span>
    ),
  }),
  columnHelper.accessor('churnProbability', {
    header: 'Churn Risk',
    cell: info => {
      const value = info.getValue();
      const color =
        value > 70 ? 'text-red-600' : value > 40 ? 'text-yellow-500' : 'text-green-600';
      return <span className={`font-bold ${color}`}>{value}%</span>;
    },
  }),
];

const data = [
  {
    name: 'Parvej Khan',
    email: 'parvej@example.com',
    engagementScore: 85,
    churnProbability: 30,
  },
  {
    name: 'Alisha Gupta',
    email: 'alisha@example.com',
    engagementScore: 62,
    churnProbability: 55,
  },
  {
    name: 'Ravi Patel',
    email: 'ravi@example.com',
    engagementScore: 42,
    churnProbability: 78,
  },
  {
    name: 'Simran Kaur',
    email: 'simran@example.com',
    engagementScore: 91,
    churnProbability: 25,
  },
];

const UserMetricsTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card className="p-4 shadow-lg rounded-2xl dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">User AI Metrics</h2>
      <ScrollArea className="max-h-[300px]">
        <table className="w-full text-sm border-collapse">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="text-left border-b border-gray-300 dark:border-gray-700">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="py-2 px-3 text-gray-600 dark:text-gray-300 font-medium">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-2 px-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
    </Card>
  );
};

export default UserMetricsTable;
