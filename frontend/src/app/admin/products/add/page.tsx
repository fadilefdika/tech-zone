'use client';
import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import Header from '../../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import AddProductForm from './components/FormAdd';

type Props = {};

const FormAddProduct = (props: Props) => {
  return (
    <AdminLayout>
      <Header title="Tambah Produk" />

      <Breadcrumb name="Tambah Produk" />

      <AddProductForm />
    </AdminLayout>
  );
};

export default FormAddProduct;
