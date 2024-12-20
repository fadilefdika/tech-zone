'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Data untuk PieChart
const data = [
  { name: 'Direct', value: 300.5 },
  { name: 'Affiliate', value: 135.18 },
  { name: 'Sponsored', value: 154.02 },
  { name: 'E-mail', value: 48.96 },
];

// Warna untuk setiap bagian PieChart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

// Fungsi kustom untuk label persentase
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#fff" fontSize={12} textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const ChartWithCustomLegend: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-36">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="50%" outerRadius="100%" fill="#8884d8" label={renderCustomizedLabel} labelLine={false}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '3px solid #ddd',
                borderRadius: '8px',
              }}
              formatter={(value: number, name: string) => [`$${value.toFixed(2)}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Total Sales</h3>
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center mb-2">
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: '8px',
                borderRadius: '50%',
              }}
            ></div>
            <span className="text-gray-700 text-sm">{entry.name}</span>
            <span className="ml-4 text-gray-500 text-sm">${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartWithCustomLegend;
