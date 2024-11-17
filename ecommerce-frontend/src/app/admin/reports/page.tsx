'use client';

import AdminLayout from '../components/AdminLayout';
import React, { useState } from 'react';
import PerformanceStats from './components/PerformanceStats';
import Filters from '../components/Filter';
import { DataTableTransaction } from './components/TransactionTables';
import Header from '../components/Header';
import { columns, data as dummyData } from './data/columns';

interface FilterProps {
  startDate: string;
  endDate: string;
  status: string;
}

const ReportsPage: React.FC = () => {
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleFilterChange = (filters: FilterProps) => {
    const { startDate, endDate, status } = filters;

    const filtered = dummyData.filter((item) => {
      const isDateInRange = (!startDate || new Date(item.date) >= new Date(startDate)) && (!endDate || new Date(item.date) <= new Date(endDate));
      const isStatusMatch = !status || item.status.toLowerCase() === status.toLowerCase();

      return isDateInRange && isStatusMatch;
    });

    setFilteredData(filtered);
  };

  return (
    <AdminLayout>
      <Header title="Laporan" />

      <PerformanceStats />

      {/* Filter Laporan */}
      <Filters onFilterChange={handleFilterChange} />

      {/* Tabel Transaksi */}
      <DataTableTransaction columns={columns} data={filteredData} />
    </AdminLayout>
  );
};

export default ReportsPage;
