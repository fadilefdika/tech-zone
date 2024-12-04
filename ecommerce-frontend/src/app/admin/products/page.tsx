'use client';

import AdminLayout from '../components/AdminLayout';
import Filters from '../components/Filter';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import { columns } from './data/columns';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { status as statusOptions, Category } from './data/dataKategori';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/slice/productSlice';
import { AppDispatch, RootState } from '@/redux/store'; // Mengimpor RootState dan AppDispatch

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>(); // Mendeklarasikan tipe dispatch
  const products = useSelector((state: RootState) => state.products.items); // Menambahkan RootState pada useSelector
  const productStatus = useSelector((state: RootState) => state.products.status); // Menambahkan RootState pada useSelector
  const error = useSelector((state: RootState) => state.products.error); // Menambahkan RootState pada useSelector

  const [filteredData, setFilteredData] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, productStatus]);

  if (productStatus === 'loading') return <p>Loading...</p>;
  if (productStatus === 'failed') return <p>Error: {error}</p>;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    const newFilteredData = products.filter((item) => item.name.toLowerCase().includes(lowercasedQuery));
    setFilteredData(newFilteredData);
  };

  return (
    <AdminLayout>
      <Header title="Produk" />
      <div className="bg-white py-4 px-6 rounded-lg shadow-md">
        <div className="flex flex-row justify-between items-center">
          <Filters isDate={false} setFilteredData={setFilteredData} data={products} titleStatus="Status Produk" optionsStatus={statusOptions} titleCategory="Kategori" optionsCategory={Category} />
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
