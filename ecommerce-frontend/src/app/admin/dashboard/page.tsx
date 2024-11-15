import React from 'react';
import AdminLayout from '../components/AdminLayout';
import Card from './components/Card';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaUserFriends } from 'react-icons/fa';
import { PiPackage } from 'react-icons/pi';
import { MdPointOfSale } from 'react-icons/md';

const DashboardPage = () => {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6 text-sm">{today}</p>
      <div className="flex gap-4">
        <Card icon={<GiTakeMyMoney className="text-2xl" />} margin={12} total={12000000} title="Pendapatan Bulan Ini" isCurrency={true} />
        <Card icon={<MdPointOfSale className="text-2xl" />} margin={-5} total={11} title="Penjualan Bulan Ini" />
        <Card icon={<FaUserFriends className="text-2xl" />} margin={3} total={32} title="Jumlah Pengguna Baru" />
        <Card icon={<PiPackage className="text-2xl" />} margin={-5} total={2} title="Jumlah Produk Baru" />
      </div>
      <div>Distribusi penjuaalan berdaraskan kategory</div>

      <div>Total Lelang berlangsung</div>
      <div>Rata-rata jumlah bid per lelang</div>
      <div>Total Pesanan</div>
    </AdminLayout>
  );
};

export default DashboardPage;
