'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Header from '../../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import DetailProduct from './components/DetailProduct';
import { useGetProductByIdQuery } from '@/redux/service/productApi';

const ProductDetailPage = () => {
  const { id } = useParams();
  const numericId = id ? Number(id) : null;

  // Return early if the ID is invalid (null or NaN)
  if (numericId === null || isNaN(numericId)) {
    return <p>Produk tidak ditemukan</p>;
  }

  // Fetch product details using RTK Query hook
  const { data: currentProduct, error, isLoading } = useGetProductByIdQuery(numericId);

  // Handle loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error fetching product data</p>;
  }

  // Handle case when product is not found
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
