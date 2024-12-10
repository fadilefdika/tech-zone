import React from 'react';
import { Button } from '@/components/ui/button'; // Pastikan import Button sudah benar
import { Product } from '@/types/types';

// Definisikan tipe data untuk product

interface DetailProductProps {
  product: Product;
}

const DetailProduct: React.FC<DetailProductProps> = ({ product }) => {
  return (
    <div className="mt-6 w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Gambar Produk */}
        {/* <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={product.imageUrl} // Asumsi produk memiliki URL gambar
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div> */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <div className="w-full h-64 object-cover rounded-lg shadow-md bg-gray-600"></div>
        </div>

        {/* Detail Produk */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>

          {/* Product Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">ID Produk</p>
              <p className="text-xl font-medium text-gray-800">{product.id}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Kategori</p>
              <p className="text-xl font-medium text-gray-800">{product.categoryName}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Deskripsi</p>
              <p className="text-lg font-medium text-gray-800">{product.description}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Stok Tersedia</p>
              <p className="text-xl font-medium text-gray-800">{product.stock}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Harga</p>
              <p className="text-xl font-medium text-gray-800">Rp {product.price.toLocaleString()}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Status</p>
              <p className="text-xl font-medium text-gray-800">{product.status}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-start">
            <Button variant="outline" onClick={() => window.history.back()}>
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
