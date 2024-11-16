'use client';
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  totalSales: number;
  auctionSales: number;
  regularSales: number;
}

const TopProductsTable: React.FC = () => {
  // Data dummy untuk tabel
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Laptop Pro X',
      category: 'Laptop',
      totalSales: 150,
      auctionSales: 50,
      regularSales: 100,
    },
    {
      id: 2,
      name: 'Wireless Headset Z',
      category: 'Accessories',
      totalSales: 120,
      auctionSales: 40,
      regularSales: 80,
    },
    {
      id: 3,
      name: 'Smartphone 12 Ultra',
      category: 'Smartphone',
      totalSales: 200,
      auctionSales: 70,
      regularSales: 130,
    },
    {
      id: 4,
      name: 'Gaming Mouse MX',
      category: 'Peripherals',
      totalSales: 90,
      auctionSales: 30,
      regularSales: 60,
    },
  ]);

  // Event handler untuk menghapus produk
  const handleDelete = (id: number) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Top Products (Checked Out)</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Category</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Total Sales</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Auction Sales</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Regular Sales</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className={`hover:bg-gray-100 ${products.indexOf(product) % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-6 py-3 text-sm text-gray-800">{product.name}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{product.category}</td>
                <td className="px-6 py-3 text-center text-sm text-gray-800">{product.totalSales}</td>
                <td className="px-6 py-3 text-center text-sm text-gray-800">{product.auctionSales}</td>
                <td className="px-6 py-3 text-center text-sm text-gray-800">{product.regularSales}</td>
                <td className="px-6 py-3 text-center text-sm text-gray-800">
                  <button className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600" onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsTable;
