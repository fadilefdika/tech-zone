'use client';

import { Report } from '@/types/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'total',
    header: 'Total',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
];

export const data: Report[] = [
  { id: 101, name: 'John Doe', total: 2000000, date: '2024-11-12', status: 'DIBAYAR' },
  { id: 102, name: 'Jane Smith', total: 1500000, date: '2024-11-13', status: 'MENUNGGU' },
  { id: 103, name: 'Ali Yusuf', total: 750000, date: '2024-11-14', status: 'SELESAI' },
  { id: 104, name: 'Fatimah Azzahra', total: 3000000, date: '2024-11-15', status: 'DIBAYAR' },
  { id: 105, name: 'Robert Brown', total: 1200000, date: '2024-11-16', status: 'DIBATALKAN' },
  { id: 106, name: 'Nina Williams', total: 800000, date: '2024-11-17', status: 'MENUNGGU' },
  { id: 107, name: 'Ahmad Zaki', total: 2500000, date: '2024-11-18', status: 'DIBAYAR' },
  { id: 108, name: 'Sophia Loren', total: 900000, date: '2024-11-19', status: 'SELESAI' },
  { id: 109, name: 'William Turner', total: 1750000, date: '2024-11-20', status: 'DIBAYAR' },
  { id: 110, name: 'Aisyah Khadijah', total: 4000000, date: '2024-11-21', status: 'MENUNGGU' },
  { id: 111, name: 'James Anderson', total: 1000000, date: '2024-11-22', status: 'SELESAI' },
  { id: 112, name: 'Olivia Johnson', total: 3200000, date: '2024-11-23', status: 'DIBAYAR' },
  { id: 113, name: 'Ethan Thomas', total: 2400000, date: '2024-11-24', status: 'DIBATALKAN' },
  { id: 114, name: 'Amelia Grace', total: 1800000, date: '2024-11-25', status: 'MENUNGGU' },
  { id: 115, name: 'Muhammad Rafi', total: 2700000, date: '2024-11-26', status: 'DIBAYAR' },
  { id: 116, name: 'Isabella White', total: 850000, date: '2024-11-27', status: 'SELESAI' },
  { id: 117, name: 'Liam Davis', total: 1650000, date: '2024-11-28', status: 'MENUNGGU' },
  { id: 118, name: 'Hannah Lee', total: 2900000, date: '2024-11-29', status: 'DIBAYAR' },
  { id: 119, name: 'Michael Carter', total: 1300000, date: '2024-11-30', status: 'DIBATALKAN' },
  { id: 120, name: 'Emma Harris', total: 3500000, date: '2024-12-01', status: 'SELESAI' },
];
