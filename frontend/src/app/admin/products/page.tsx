'use client';

import AdminLayout from '../components/AdminLayout';
import FiltersProduct from '../components/FilterProduct';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import { columns } from './data/columns';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { status as statusOptions, Category } from './data/dataKategori';
import { useFetchProductsQuery } from '@/redux/service/productApi'; // Import useFetchProductsQuery
import LoadingSpinner2 from '@/app/components/LoadingSpiner';

const ProductsPage = () => {
  const { data: items, error, isLoading, isError } = useFetchProductsQuery(); // Use RTK Query hook

  const [filteredData, setFilteredData] = useState(items || []);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Update filteredData when items or searchQuery changes
    if (items) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const newFilteredData = items.filter((item) => item.name.toLowerCase().includes(lowercasedQuery));
      setFilteredData(newFilteredData);
    }
  }, [items, searchQuery]);

  if (isLoading) return <LoadingSpinner2 />;
  if (isError) return <p>Error: {error?.message || 'An error occurred'}</p>;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <AdminLayout>
      <div className="mb-5">
        <Header title="Produk" />
      </div>
      <div className="bg-white py-4 px-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-row justify-between items-center">
          <FiltersProduct
            isDate={false}
            setFilteredData={setFilteredData}
            data={items} // Pass the original data for filtering
            titleStatus="Status Produk"
            optionsStatus={statusOptions}
            titleCategory="Kategori"
            optionsCategory={Category}
          />
          <Link href="/admin/products/add">
            <Button>Tambah Produk</Button>
          </Link>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <Label htmlFor="search">Cari Produk</Label>
          <Input type="text" placeholder="Cari Produk" className="w-2/4" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
        </div>
      </div>
      <DataTable columns={columns} data={filteredData} title="Data Produk" />
    </AdminLayout>
  );
};

export default ProductsPage;
