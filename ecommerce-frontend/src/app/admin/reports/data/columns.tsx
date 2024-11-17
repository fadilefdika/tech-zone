'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Report = {
  id: number;
  user: string;
  total: string;
  date: string;
  status: string;
};

export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'user',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

export const data: Report[] = [
  { id: 101, user: 'John Doe', total: 'Rp 2,000,000', date: '2024-11-12', status: 'PAID' },
  { id: 102, user: 'Jane Smith', total: 'Rp 1,500,000', date: '2024-11-13', status: 'PENDING' },
  { id: 103, user: 'Ali Yusuf', total: 'Rp 750,000', date: '2024-11-14', status: 'COMPLETED' },
  { id: 104, user: 'Fatimah Azzahra', total: 'Rp 3,000,000', date: '2024-11-15', status: 'PAID' },
  { id: 105, user: 'Robert Brown', total: 'Rp 1,200,000', date: '2024-11-16', status: 'CANCELLED' },
  { id: 106, user: 'Nina Williams', total: 'Rp 800,000', date: '2024-11-17', status: 'PENDING' },
  { id: 107, user: 'Ahmad Zaki', total: 'Rp 2,500,000', date: '2024-11-18', status: 'PAID' },
  { id: 108, user: 'Sophia Loren', total: 'Rp 900,000', date: '2024-11-19', status: 'COMPLETED' },
  { id: 109, user: 'William Turner', total: 'Rp 1,750,000', date: '2024-11-20', status: 'PAID' },
  { id: 110, user: 'Aisyah Khadijah', total: 'Rp 4,000,000', date: '2024-11-21', status: 'PENDING' },
  { id: 111, user: 'James Anderson', total: 'Rp 1,000,000', date: '2024-11-22', status: 'COMPLETED' },
  { id: 112, user: 'Olivia Johnson', total: 'Rp 3,200,000', date: '2024-11-23', status: 'PAID' },
  { id: 113, user: 'Ethan Thomas', total: 'Rp 2,400,000', date: '2024-11-24', status: 'CANCELLED' },
  { id: 114, user: 'Amelia Grace', total: 'Rp 1,800,000', date: '2024-11-25', status: 'PENDING' },
  { id: 115, user: 'Muhammad Rafi', total: 'Rp 2,700,000', date: '2024-11-26', status: 'PAID' },
  { id: 116, user: 'Isabella White', total: 'Rp 850,000', date: '2024-11-27', status: 'COMPLETED' },
  { id: 117, user: 'Liam Davis', total: 'Rp 1,650,000', date: '2024-11-28', status: 'PENDING' },
  { id: 118, user: 'Hannah Lee', total: 'Rp 2,900,000', date: '2024-11-29', status: 'PAID' },
  { id: 119, user: 'Michael Carter', total: 'Rp 1,300,000', date: '2024-11-30', status: 'CANCELLED' },
  { id: 120, user: 'Emma Harris', total: 'Rp 3,500,000', date: '2024-12-01', status: 'COMPLETED' },
];
