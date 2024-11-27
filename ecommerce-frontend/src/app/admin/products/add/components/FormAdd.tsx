'use client';
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Category } from '../../data/dataKategori';

const AddProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    weight: '',
    status: 'active',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="mt-4 p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nama Produk */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="productName">
            Nama Produk
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-[5px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Masukkan Nama Produk"
            aria-label="Nama Produk"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-[5px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Masukkan Deskripsi Produk"
            aria-label="Product Description"
          />
        </div>

        {/* Grid Inputs */}
        <div className="grid grid-cols-3 gap-4">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="category">Kategori</Label>
            <Select onValueChange={(value) => handleSelectChange('category', value)}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                {Category.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="price">
              Harga
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-[5px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan Harga Produk"
              aria-label="Product Price"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="stock">
              Stok barang
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-[5px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan Stok Produk"
              aria-label="Product Stock"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="weight">
              Berat (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-1 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan Berat Produk"
              aria-label="Product Weight"
              required
            />
          </div>

          {/* Status */}
          <div>
            <Label className="block text-sm font-medium text-gray-700" htmlFor="status">
              Status
            </Label>
            <Select value={formData.status} onValueChange={(value) => handleSelectChange('status', value)} aria-label="Product Status">
              <SelectTrigger className="mt-1 py-2 px-3">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Aktif</SelectItem>
                <SelectItem value="inactive">Tidak Aktif</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Tambah Produk
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
