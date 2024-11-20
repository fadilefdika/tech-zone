'use client';

import AdminLayout from '../components/AdminLayout';
import React, { useState } from 'react';
import PerformanceStats from './components/PerformanceStats';
import Filters from '../components/Filter';
import DataTable from '../components/DataTable';
import Header from '../components/Header';
import { columns, data as dummyData } from './data/columns';

interface FilterProps {
  startDate: string;
  endDate: string;
  status: string;
}

const status = [
  { value: 'ALL', label: 'Semua Status' },
  { value: 'DIBAYAR', label: 'DIBAYAR' },
  { value: 'MENUNGGU', label: 'MENUNGGU' },
  { value: 'SELESAI', label: 'SELESAI' },
  { value: 'DIBATALKAN', label: 'DIBATALKAN' },
];

const ReportsPage: React.FC = () => {
  const [filteredData, setFilteredData] = useState(dummyData);

  return (
    <AdminLayout>
      <Header title="Laporan" />

      <PerformanceStats />

      <div className="bg-white py-4 px-6 rounded-lg shadow-md">
        <Filters isDate={true} setFilteredData={setFilteredData} dummyData={dummyData} titleStatus="Status" optionsStatus={status} />

        <DataTable columns={columns} data={filteredData} title="Laporan Transaksi" />
      </div>
    </AdminLayout>
  );
};

export default ReportsPage;
