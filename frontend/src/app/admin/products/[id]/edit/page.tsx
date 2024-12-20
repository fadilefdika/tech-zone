'use client';
import React from 'react';
import AdminLayout from '@/app/admin/components/AdminLayout';
import Header from '@/app/admin/components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import EditProductForm from './components/FormEdit';

type Props = {};

const FormEditProduct = (props: Props) => {
  return (
    <AdminLayout>
      <Header title="Edit Produk" />

      <Breadcrumb name="Edit Produk" />

      <EditProductForm />
    </AdminLayout>
  );
};

export default FormEditProduct;
