'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '@/redux/slice/productSlice';
import AdminLayout from '../../components/AdminLayout';
import Header from '../../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import { AppDispatch, RootState } from '@/redux/store';
import DetailProduct from './components/DetailProduct';
import LoadingSpinner2 from '@/app/components/LoadingSpiner';

const ProductDetailPage = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const numericId = id ? Number(id) : null;

  const dispatch = useDispatch<AppDispatch>();

  // Mendapatkan state produk dari Redux
  const { currentProduct, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (numericId) {
      dispatch(getProductById(numericId));
    }
  }, [dispatch, numericId]);

  // Menampilkan pesan jika ID tidak valid
  if (!numericId || isNaN(numericId)) {
    return <p>ID produk tidak valid</p>;
  }

  // Menampilkan spinner saat data sedang dimuat
  if (status === 'loading') {
    return <LoadingSpinner2 />;
  }

  // Menampilkan pesan error jika ada
  if (status === 'failed') {
    return <p>Error: {error || 'Gagal memuat produk.'}</p>;
  }

  // Menampilkan pesan jika produk tidak ditemukan
  if (!currentProduct) {
    return <p>Produk tidak ditemukan</p>;
  }

  return (
    <AdminLayout>
      <Header title="Detail Produk" />
      <Breadcrumb name="Detail Produk" />
      <DetailProduct product={currentProduct} />
    </AdminLayout>
  );
};

export default ProductDetailPage;
