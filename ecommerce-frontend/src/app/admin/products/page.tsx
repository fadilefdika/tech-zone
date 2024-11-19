'use client';
import AdminLayout from '../components/AdminLayout';
import Filters from '../components/Filter';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import { columns, data as dummyData } from '../products/data/columns';
import { useState } from 'react';

interface FilterProps {
  startDate: string;
  endDate: string;
  status: string;
}

const status = [
  { value: 'ALL', label: 'Semua Status' },
  { value: 'Aktif', label: 'Aktif' },
  { value: 'Tidak Aktif', label: 'Tidak Aktif' },
];

const Category = [
  { value: 'ALL', label: 'Semua Kategori' },
  { value: 'elektronik', label: 'Elektronik' },
  { value: 'komputer', label: 'Komputer' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'aksesoris', label: 'Aksesoris' },
  { value: 'smart-home', label: 'Smart Home' },
  { value: 'peralatan-kantor', label: 'Peralatan Kantor' },
  { value: 'peralatan-pendukung-teknis', label: 'Peralatan Pendukung Teknis' },
  { value: 'fotografi', label: 'Fotografi' },
];

const ProductsPage = () => {
  const [filteredData, setFilteredData] = useState(dummyData);

  return (
    <AdminLayout>
      <Header title="Produk" />

      <div className="bg-white py-4 px-6 rounded-lg shadow-md">
        <Filters isDate={false} setFilteredData={setFilteredData} dummyData={dummyData} titleStatus="Status Produk" optionsStatus={status} titleCategory="Kategori" optionsCategory={Category} />

        <DataTable columns={columns} data={filteredData} title="Data Produk" />
      </div>
    </AdminLayout>
  );
};

export default ProductsPage;
