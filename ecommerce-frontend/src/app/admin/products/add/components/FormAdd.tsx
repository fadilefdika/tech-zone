'use client';
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Category } from '../../data/dataKategori';
import { AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '@/redux/slice/productSlice'; // Pastikan path import sesuai dengan folder proyek
import { RootState } from '@/redux/store';
import { Product } from '@/types/types';
import { useToast } from '@/hooks/use-toast';
import { redirect } from 'next/navigation';
import { fetchProducts } from '@/redux/slice/productSlice';
import LoadingSpinner2 from '@/app/components/LoadingSpiner';

const AddProductForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const { status, error } = useSelector((state: RootState) => state.products); // Mendapatkan status dari Redux

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    status: 'active', // Default status aktif
    categoryName: '', // Ini akan menyimpan ID kategori yang terpilih
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'price' || name === 'stock') {
      setFormData({
        ...formData,
        [name]: value === '' ? '' : value, // Pastikan harga dan stok disimpan sebagai string kosong jika tidak diisi
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Fungsi untuk menangani perubahan pada select (kategori dan status)
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: name === 'categoryName' ? value : value, // Pastikan categoryName tetap string
    });
  };
  // Fungsi untuk menangani submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCategory = Category.find((category) => category.value === formData.categoryName);
    console.log('ini selected category', selectedCategory);
    const categoryName = selectedCategory ? selectedCategory.value : '';
    console.log('ini category id', categoryName);

    const price = parseFloat(formData.price);
    const stock = parseInt(formData.stock);

    if (isNaN(price) || isNaN(stock)) {
      toast({
        title: 'Input tidak valid',
        description: 'Harga atau stok tidak valid. Mohon periksa kembali.',
        duration: 4000,
        variant: 'destructive',
      });
      return; // Jangan lanjutkan jika ada data yang tidak valid
    }

    const productData: Product = {
      name: formData.name,
      description: formData.description,
      price,
      stock,
      status: formData.status,
      categoryName,
    };

    try {
      // Dispatch untuk create produk
      await dispatch(createProduct(productData)).unwrap();

      // Setelah berhasil menambah produk, fetch ulang data produk terbaru
      await dispatch(fetchProducts());

      toast({
        title: 'Produk berhasil ditambahkan',
        description: 'Data produk Anda telah berhasil disimpan.',
        duration: 4000,
        variant: 'default',
      });

      redirect('/admin/products');
    } catch (err) {
      // Menangani error jika produk gagal ditambahkan
      console.error('Gagal menambahkan produk:', err);
      toast({
        title: 'Gagal menambahkan produk',
        description: 'Terjadi kesalahan saat menambahkan produk. Coba lagi nanti.',
        duration: 4000,
        variant: 'destructive',
      });
    }
  };

  if (status === 'loading') {
    return <LoadingSpinner2 />;
  }

  if (error) {
    return (
      <div className="mt-4 p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="mt-4 p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nama Produk */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Nama Produk
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-[5px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Masukkan Nama Produk"
            aria-label="Nama Produk"
            required
          />
        </div>

        {/* Deskripsi */}
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
          {/* Kategori */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="categoryName">Kategori</Label>
            <Select value={formData.categoryName} onValueChange={(value) => handleSelectChange('categoryName', value)}>
              <SelectTrigger id="categoryName">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                {Category.filter((option) => option.value !== 'SEMUA').map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Harga */}
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

          {/* Stok */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="stock">
              Stok Barang
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

        {/* Status */}
        <div>
          <Label className="block text-sm font-medium text-gray-700" htmlFor="status">
            Status
          </Label>
          <Select value={formData.status} onValueChange={(value) => handleSelectChange('status', value)} aria-label="Product Status">
            <SelectTrigger className="mt-1 py-2 px-3">
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Aktif</SelectItem>
              <SelectItem value="inactive">Tidak Aktif</SelectItem>
            </SelectContent>
          </Select>
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
