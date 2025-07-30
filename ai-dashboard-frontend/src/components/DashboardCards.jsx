import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, DollarSign, Users, Repeat } from 'lucide-react';

const metrics = [
  { id: 1, title: 'Revenue', value: '₹1.2M', change: '+8%', icon: <DollarSign size={20} />, positive: true },
  { id: 2, title: 'Users', value: '8,450', change: '-3%', icon: <Users size={20} />, positive: false },
  { id: 3, title: 'Conversions', value: '1,220', change: '+12%', icon: <Repeat size={20} />, positive: true },
  { id: 4, title: 'Growth', value: '24%', change: '+24%', icon: <ArrowUp size={20} />, positive: true },
];

const DashboardCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    {metrics.map(({ id, title, value, change, icon, positive }) => (
      <Card key={id} className="hover:shadow-lg transition-shadow">
        <CardContent className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h4>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            <p className={`mt-1 text-sm font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
              {positive ? <ArrowUp size={12} /> : <ArrowDown size={12} />} {change}
            </p>
          </div>
          <div className="text-gray-400 dark:text-gray-600">{icon}</div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default DashboardCards;