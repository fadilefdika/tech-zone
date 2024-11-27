'use client';
import AdminLayout from '../components/AdminLayout';
import Filters from '../components/Filter';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import { columns, data as dummyData } from './data/columns';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { status, Category } from './data/dataKategori';

interface FilterProps {
  startDate: string;
  endDate: string;
  status: string;
}

const ProductsPage = () => {
  const [filteredData, setFilteredData] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const lowercasedQuery = query.toLowerCase();
    const newFilteredData = dummyData.filter((item) => item.name.toLowerCase().includes(lowercasedQuery));

    setFilteredData(newFilteredData);
  };

  return (
    <AdminLayout>
      <Header title="Produk" />
      <div className="bg-white py-4 px-6 rounded-lg shadow-md">
        <div className="flex flex-row justify-between items-center">
          <Filters isDate={false} setFilteredData={setFilteredData} dummyData={dummyData} titleStatus="Status Produk" optionsStatus={status} titleCategory="Kategori" optionsCategory={Category} />
          <Link href="/admin/products/add">
            <Button>Tambah Produk</Button>
          </Link>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <Label htmlFor="search">Cari Produk</Label>
          <Input type="text" placeholder="Cari Produk" className="w-2/4" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
        </div>
        <DataTable columns={columns} data={filteredData} title="Data Produk" />
      </div>
    </AdminLayout>
  );
};

export default ProductsPage;
