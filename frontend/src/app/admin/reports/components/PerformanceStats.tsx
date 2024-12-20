import React from 'react';
import { MdOutlineShoppingCart, MdAttachMoney, MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md';

const PerformanceStats = () => {
  const stats = [
    { title: 'Produk Terjual', value: 450 },
    { title: 'Pendapatan Total', value: 'Rp 30,000,000' },
    { title: 'Lelang Sukses', value: 120 },
    { title: 'Lelang Gagal', value: 15 },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[
        { title: 'Produk Terjual', value: 450, icon: <MdOutlineShoppingCart className="text-blue-500 text-3xl" /> },
        { title: 'Pendapatan Total', value: 'Rp 30,000,000', icon: <MdAttachMoney className="text-green-500 text-3xl" /> },
        { title: 'Lelang Sukses', value: 120, icon: <MdOutlineThumbUp className="text-blue-500 text-3xl" /> },
        { title: 'Lelang Gagal', value: 15, icon: <MdOutlineThumbDown className="text-red-500 text-3xl" /> },
      ].map((stat, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition">
          <div>{stat.icon}</div>
          <div>
            <h3 className="text-sm text-gray-600">{stat.title}</h3>
            <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceStats;
