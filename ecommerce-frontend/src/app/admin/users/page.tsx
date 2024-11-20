'use client';
import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import DataTable from '../components/DataTable';
import Filters from '../components/Filter';
import Header from '../components/Header';
import { columns, data as dummyData } from '../users/data/columns';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const status = [
  { value: 'SEMUA', label: 'Semua Status' },
  { value: 'Aktif', label: 'Aktif' },
  { value: 'Tidak Aktif', label: 'Tidak Aktif' },
  { value: 'Diblokir', label: 'Diblokir' },
];

const UsersPage = () => {
  const [filteredData, setFilteredData] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const lowercasedQuery = query.toLowerCase();
    const newFilteredData = dummyData.filter((item) => item.fullName.toLowerCase().includes(lowercasedQuery) || item.username.toLowerCase().includes(lowercasedQuery));

    setFilteredData(newFilteredData);
  };

  return (
    <AdminLayout>
      <Header title="Pengguna" />

      <div className="bg-white py-4 px-6 rounded-lg shadow-md">
        <Filters isDate={false} setFilteredData={setFilteredData} dummyData={dummyData} titleStatus="Status Pengguna" optionsStatus={status} />
        <div className="flex flex-col gap-3 mb-4">
          <Label htmlFor="search">Cari Pengguna</Label>
          <Input type="text" placeholder="Cari Pengguna" className="w-2/4" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
        </div>
        <DataTable columns={columns} data={filteredData} title="Data Produk" />
      </div>
    </AdminLayout>
  );
};

export default UsersPage;
