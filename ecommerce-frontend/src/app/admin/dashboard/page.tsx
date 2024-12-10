'use client';
import { useEffect } from 'react';
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import Card from './components/Card';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaUserFriends } from 'react-icons/fa';
import { PiPackage } from 'react-icons/pi';
import { MdPointOfSale } from 'react-icons/md';
import Chart from './components/PieChart';
import MonthlyChart from './components/LineChart';
import DailyAuctionBarChart from './components/BarChart';
import DataTableProduct from './components/TableProduct';
import Header from '../components/Header';
import { columns } from '../products/data/columns';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchProducts } from '@/redux/slice/productSlice';
import LoadingSpinner2 from '@/app/components/LoadingSpiner';

const chartData = [
  { name: 'Jan', revenue: 12000, sales: 1500 },
  { name: 'Feb', revenue: 14000, sales: 1700 },
  { name: 'Mar', revenue: 13000, sales: 1600 },
  { name: 'Apr', revenue: 15000, sales: 1800 },
  { name: 'May', revenue: 16000, sales: 1900 },
  { name: 'Jun', revenue: 18000, sales: 2100 },
  { name: 'Jul', revenue: 20000, sales: 2300 },
  { name: 'Aug', revenue: 22000, sales: 2400 },
  { name: 'Sep', revenue: 21000, sales: 2200 },
  { name: 'Oct', revenue: 23000, sales: 2500 },
  { name: 'Nov', revenue: 24000, sales: 2600 },
  { name: 'Dec', revenue: 25000, sales: 2700 },
];

const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, productStatus]);

  if (productStatus === 'loading') return <LoadingSpinner2 />;
  if (productStatus === 'failed') return <p>Error: {error}</p>;

  return (
    <AdminLayout>
      <Header title="Admin Dashboard" />

      <div className="flex flex-row gap-4 mb-6">
        <Card icon={<GiTakeMyMoney className="text-3xl text-green-500" />} margin={12} total={12000000} title="Pendapatan Bulan Ini" isCurrency={true} />
        <Card icon={<MdPointOfSale className="text-3xl text-blue-500" />} margin={-5} total={11} title="Penjualan Bulan Ini" />
        <Card icon={<FaUserFriends className="text-3xl text-purple-500" />} margin={3} total={32} title="Jumlah Pengguna Baru" />
        <Card icon={<PiPackage className="text-3xl text-orange-500" />} margin={-5} total={2} title="Jumlah Produk Baru" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white py-4 px-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-sm font-medium text-gray-600 mb-4">Distribusi Penjualan Berdasarkan Kategori</h2>
          <Chart />
        </div>

        <div className="col-span-2 bg-white py-4 px-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-sm font-medium text-gray-600 mb-4">Perbandingan Pendapatan dan Penjualan Produk</h2>
          <MonthlyChart data={chartData} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white py-6 px-8 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-600 mb-6">Top Produk hari ini</h3>
          <div className="h-[400px]">
            <DataTableProduct columns={columns} data={products} />
          </div>
        </div>

        <div className="col-span-1 bg-white py-6 px-8 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Jumlah Lelang Perhari</h3>
          <div className="h-[200px]">
            <DailyAuctionBarChart />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
