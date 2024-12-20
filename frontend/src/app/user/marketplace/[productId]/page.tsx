'use client';
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Image from 'next/image';
import { FaRecycle, FaStar, FaTruck } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

type Props = {};

const rating = 4;

const ProductDetail = (props: Props) => {
  return (
    <div className="flex flex-col px-6">
      <div className="my-4">
        <BreadCrumb firstName="Dashboard" firstPath="/user/dashboard" secondName="Marketplace" secondPath="/user/marketplace" thirdName="Produk" thirdPath="#" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="flex flex-col gap-3 items-end lg:w-1/5 justify-center">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="rounded-lg shadow-md bg-biruMuda p-2 hover:shadow-lg transition-all">
              <Image src={'/image 11.png'} alt={`product-thumbnail-${index}`} width={125} height={125} className="object-cover rounded-md" />
            </div>
          ))}
        </div>

        {/* Main product image */}
        <div className="flex items-center justify-center lg:w-2/5">
          <div className="bg-biruMuda rounded-lg p-6 shadow-md">
            <Image src={'/image 11.png'} alt="product-main" width={400} height={400} className="object-cover rounded-md" />
          </div>
        </div>

        {/* Product info */}
        <div className="lg:w-2/5 space-y-6">
          <h1 className="text-3xl font-bold">Nama Produk</h1>

          {/* Rating & stock info */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-400'} />
              ))}
              <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
            </div>
            <p className="text-sm text-gray-600">
              | 105 reviews | <span className="text-green-600">In Stock</span>
            </p>
          </div>

          {/* Price */}
          <h2 className="text-4xl font-semibold text-gray-800">Rp 20.000</h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam odit rem vel alias non eos consectetur quod quidem fuga unde, deleniti excepturi!</p>

          {/* Purchase section */}
          <div className="flex items-center space-x-4">
            <div className="border px-4 py-2 rounded-lg text-gray-700">Quantity: 1</div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-2">Beli Sekarang</Button>
          </div>

          {/* Additional Info (Shipping & Return) */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <FaTruck className="text-2xl text-gray-500" />
              <div>
                <h3 className="font-semibold text-lg">Gratis Ongkir</h3>
                <p className="text-gray-600">Nikmati pengiriman gratis untuk semua pesanan di atas Rp 100.000.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaRecycle className="text-2xl text-gray-500" />
              <div>
                <h3 className="font-semibold text-lg">Pengembalian Mudah</h3>
                <p className="text-gray-600">Pengembalian gratis dalam 30 hari jika produk cacat atau tidak sesuai.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products section */}
      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-6">Produk Terkait</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example of related product card */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <Image src={'/image 11.png'} alt={`related-product-${index}`} width={150} height={150} className="object-cover rounded-md" />
              <h2 className="mt-4 font-semibold">Nama Produk {index + 1}</h2>
              <p className="text-red-500">Rp 15.000</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
