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
      <div className="flex flex-col md:flex-row gap-16 p-6 mt-7">
        <div className="flex flex-col items-center text-center p-1 rounded-lg transition-shadow duration-300">
          <Truck className="w-9 h-9 text-white mb-4" />
          <h2 className="text-sm text-white font-medium">FREE AND FAST DELIVERY</h2>
          <h4 className="text-white text-sm mt-1">Free delivery for all orders over $140</h4>
        </div>
        <div className="flex flex-col items-center text-center p-1 rounded-lg transition-shadow duration-300">
          <Headphones className="w-9 h-9 text-white mb-4" />
          <h2 className="text-sm text-white font-medium">24/7 CUSTOMER SERVICE</h2>
          <h4 className="text-white text-sm mt-1">Friendly 24/7 customer support</h4>
        </div>
        <div className="flex flex-col items-center text-center p-1 rounded-lg transition-shadow duration-300">
          <DollarSign className="w-9 h-9 text-white mb-4" />
          <h2 className="text-sm text-white font-medium">MONEY BACK GUARANTEE</h2>
          <h4 className="text-white text-sm mt-1">We return money within 30 days</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
