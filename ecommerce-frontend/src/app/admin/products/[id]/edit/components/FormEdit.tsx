'use client';
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Category } from '../../../data/dataKategori';
import { AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, getProductById, fetchProducts } from '@/redux/slice/productSlice';
import { RootState } from '@/redux/store';
import { Product } from '@/types/product';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface EditProductFormProps {
  productId: number; // ID produk yang akan diedit
}

const EditProductForm: React.FC<EditProductFormProps> = ({ productId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const { status, error, items } = useSelector((state: RootState) => state.products);
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    description: '',
    price: '',
    stock: '',
    status: 'active',
    categoryId: '',
    sellerId: 0,
  });

  const router = useRouter();

  // Ambil data produk berdasarkan productId ketika komponen di-mount
  useEffect(() => {
    // Cek jika produk sudah ada di state
    const product = items.find((product) => product.id === productId);
    if (product) {
      setFormData({
        ...product,
        price: product.price.toString(),
        stock: product.stock.toString(),
      });
    } else {
      dispatch(getProductById(productId));
    }
  }, [productId, items, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani perubahan pada select (kategori dan status)
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCategory = Category.find((category) => category.value === formData.categoryId);
    const categoryId = selectedCategory ? Category.findIndex((category) => category.value === formData.categoryId) : 0;

    const price = parseFloat(formData.price);
    const stock = parseInt(formData.stock);

    if (isNaN(price) || isNaN(stock)) {
      console.error('Harga atau stok tidak valid');
      return;
    }

    const productData: Product = {
      ...formData,
      price,
      stock,
      categoryId,
    };

    // Dispatch untuk update produk
    try {
      await dispatch(updateProduct(productData)).unwrap();
      toast({
        title: 'Produk berhasil diperbarui',
        description: 'Data produk Anda telah berhasil diperbarui.',
        duration: 4000,
        variant: 'default',
      });

      dispatch(fetchProducts());

      router.push('/admin/products');
    } catch (err) {
      toast({
        title: 'Gagal memperbarui produk',
        description: 'Terjadi kesalahan saat memperbarui produk.',
        duration: 4000,
        variant: 'destructive',
      });
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed' && error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-4 p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Edit Produk</h2>
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
            <Label htmlFor="categoryId">Kategori</Label>
            <Select value={formData.categoryId} onValueChange={(value) => handleSelectChange('categoryId', value)}>
              <SelectTrigger id="categoryId">
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
            Perbarui Produk
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
