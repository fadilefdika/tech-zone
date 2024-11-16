'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Validasi Data
const validateData = (data: Array<{ name: string; revenue: number; sales: number }>) => {
  return data.filter((item) => typeof item.name === 'string' && typeof item.revenue === 'number' && typeof item.sales === 'number');
};

// Tipe untuk AxisTickProps
type AxisTickProps = {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
};

// Custom Tick untuk X-Axis
const CustomizedAxisTick = ({ x = 0, y = 0, payload = { value: '' } }: AxisTickProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

// Custom Label untuk Titik pada Chart
const CustomizedLabel = ({ x = 0, y = 0, stroke = '#000', value = 0 }: { x?: number; y?: number; stroke?: string; value?: number }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

// Tipe Props untuk Chart
type MonthlyChartProps = {
  data: Array<{ name: string; revenue: number; sales: number }>;
};

// LineChart dengan Pendapatan dan Penjualan
const MonthlyChart = ({ data }: MonthlyChartProps) => {
  const validatedData = validateData(data);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={validatedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" label={<CustomizedLabel />} name="Pendapatan" />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" name="Penjualan" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

MonthlyChart.defaultProps = {
  data: [],
};

export default MonthlyChart;
