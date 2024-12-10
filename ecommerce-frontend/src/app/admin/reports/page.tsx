'use client';

import AdminLayout from '../components/AdminLayout';
import React, { useState } from 'react';
import PerformanceStats from './components/PerformanceStats';
import DataTable from '../components/DataTable';
import Header from '../components/Header';
import { columns, data as dummyData } from './data/columns';
import FiltersReport from '../components/FilterReport';

interface FilterProps {
  startDate: string;
  endDate: string;
  status: string;
}

const status = [
  { value: 'SEMUA', label: 'Semua Status' },
  { value: 'DIBAYAR', label: 'DIBAYAR' },
  { value: 'MENUNGGU', label: 'MENUNGGU' },
  { value: 'SELESAI', label: 'SELESAI' },
  { value: 'DIBATALKAN', label: 'DIBATALKAN' },
];

const ReportsPage: React.FC = () => {
  const [filteredData, setFilteredData] = useState(dummyData);

  return (
    <AdminLayout>
      <div className="mb-5">
        <Header title="Laporan" />
      </div>

      <div className="mb-6">
        <PerformanceStats />
      </div>

      <div className="bg-white py-4 px-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter Laporan</h2>
        <FiltersReport isDate={true} setFilteredData={setFilteredData} dummyData={dummyData} titleStatus="Status" optionsStatus={status} />
      </div>

      <DataTable columns={columns} data={filteredData} title="Laporan Transaksi" />
    </AdminLayout>
  );
};

export default ReportsPage;
