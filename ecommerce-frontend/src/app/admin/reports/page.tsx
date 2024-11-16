'use client';

import AdminLayout from '../components/AdminLayout';
import React, { useState } from 'react';
import PerformanceStats from './components/PerformanceStats';
import Filters from '../components/Filter';
import TransactionTable from './components/TransactionTables';
import { today } from '@/app/utils/Today';
import Header from '../components/Header';

interface FilterProps {
  startDate: string;
  endDate: string;
  category: string;
}

const ReportsPage = () => {
  const dummyData = [
    { id: 101, user: 'John Doe', total: 'Rp 2,000,000', date: '2024-11-12', status: 'PAID' },
    { id: 102, user: 'Jane Smith', total: 'Rp 1,500,000', date: '2024-11-13', status: 'PENDING' },
    { id: 103, user: 'Ali Yusuf', total: 'Rp 750,000', date: '2024-11-14', status: 'COMPLETED' },
  ];

  const [filteredData, setFilteredData] = useState(dummyData);

  const handleFilterChange = (filters: FilterProps) => {
    const { startDate, endDate, category } = filters;

    const filtered = dummyData.filter((item) => {
      const isDateInRange = (!startDate || item.date >= startDate) && (!endDate || item.date <= endDate);
      const isCategoryMatch = !category || category === 'electronics'; // Dummy logic for category

      return isDateInRange && isCategoryMatch;
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
      <TransactionTable data={filteredData} />
    </AdminLayout>
  );
};

export default ReportsPage;
