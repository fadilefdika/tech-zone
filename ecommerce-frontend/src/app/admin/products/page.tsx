'use client';

import AdminLayout from '../components/AdminLayout';
import Filters from '../components/FilterProduct';
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
import FiltersProduct from '../components/FilterProduct';
import LoadingSpinner2 from '@/app/components/LoadingSpiner';

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const [filteredData, setFilteredData] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, productStatus]);

  if (productStatus === 'loading') return <LoadingSpinner2 />;
  if (productStatus === 'failed') return <p>Error: {error}</p>;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    const newFilteredData = products.filter((item) => item.name.toLowerCase().includes(lowercasedQuery));
    setFilteredData(newFilteredData);
  };

  return (
    <AdminLayout>
      <div className="mb-5">
        <Header title="Produk" />
      </div>
      <div className="bg-white py-4 px-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-row justify-between items-center">
          <FiltersProduct isDate={false} setFilteredData={setFilteredData} data={products} titleStatus="Status Produk" optionsStatus={statusOptions} titleCategory="Kategori" optionsCategory={Category} />
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
