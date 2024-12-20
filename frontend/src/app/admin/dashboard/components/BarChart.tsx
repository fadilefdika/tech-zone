'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data dummy
const data = [
  { day: 'Mon', totalAuctions: 10 },
  { day: 'Tue', totalAuctions: 15 },
  { day: 'Wed', totalAuctions: 20 },
  { day: 'Thu', totalAuctions: 25 },
  { day: 'Fri', totalAuctions: 30 },
  { day: 'Sat', totalAuctions: 35 },
  { day: 'Sun', totalAuctions: 40 },
];

const DailyAuctionBarChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalAuctions" fill="#6DBCF6" name="Jumlah Lelang" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyAuctionBarChart;
