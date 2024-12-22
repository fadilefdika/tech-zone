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
import LoadingSpinner2 from '@/app/components/LoadingSpiner';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.items);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    if (id && productStatus !== 'loading' && !product) {
      dispatch(getProductById(Number(id)));
    }

    if (product) {
      console.log('Product details:', product.imageUrl); // Cek apakah imageUrl sudah ada
    }
  }, [id, product, productStatus, dispatch]);

  if (productStatus === 'loading') {
    return <LoadingSpinner2 />;
  }

  if (productStatus === 'failed') {
    return <p>Error: {error}</p>;
  }

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
