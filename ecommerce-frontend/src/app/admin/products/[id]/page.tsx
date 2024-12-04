'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '@/redux/slice/productSlice';
import AdminLayout from '../../components/AdminLayout';
import Header from '../../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { AppDispatch, RootState } from '@/redux/store';
import DetailProduct from './components/DetailProduct';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.items);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    if (id && !product && productStatus !== 'loading') {
      console.log('Dispatching getProductById with ID:', id);
      dispatch(getProductById(Number(id)));
    }
  }, [dispatch]);

  // Menampilkan loading saat data produk sedang di-fetch
  if (productStatus === 'loading') {
    return <p>Loading...</p>;
  }

  // Menampilkan error jika terjadi kesalahan pengambilan data produk
  if (productStatus === 'failed') {
    return <p>Error: {error}</p>;
  }

  // Jika produk tidak ditemukan setelah fetch, tampilkan pesan
  if (!product) {
    return <p>Produk tidak ditemukan</p>;
  }

  return (
    <AdminLayout>
      <Header title="Detail Produk" />
      <Breadcrumb name="Detail Produk" />

      <DetailProduct product={product} />
    </AdminLayout>
  );
};

export default ProductDetailPage;
