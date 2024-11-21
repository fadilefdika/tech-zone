import React from 'react';
import CardBlog from '../components/CardBlog';
import { Truck, Headphones, DollarSign } from 'lucide-react';
import ButtonLandingPage from '../components/ButtonLandingPage';

const BlogSection = () => {
  return (
    <div className="flex flex-col gap-4 p-6 items-center mt-4">
      <h1 className="text-2xl font-semibold my-4 flex items-center justify-center text-white">Baca Artikel Terbaru</h1>
      <div className="flex flex-wrap gap-6 ">
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
      <ButtonLandingPage teks="Jelajahi Semua Blog" />
      <div className="flex flex-col md:flex-row gap-10 p-6 mt-7">
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Truck className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold">FREE AND FAST DELIVERY</h2>
          <h4 className="text-gray-600 mt-2">Free delivery for all orders over $140</h4>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Headphones className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-xl font-bold">24/7 CUSTOMER SERVICE</h2>
          <h4 className="text-gray-600 mt-2">Friendly 24/7 customer support</h4>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <DollarSign className="w-12 h-12 text-yellow-500 mb-4" />
          <h2 className="text-xl font-bold">MONEY BACK GUARANTEE</h2>
          <h4 className="text-gray-600 mt-2">We return money within 30 days</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
