'use client';
import React, { useState } from 'react';
import CardProduct from '../components/CardProduct';
import { Button } from '@/components/ui/button';
import ButtonLandingPage from '../components/ButtonLandingPage';

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Latest', 'Best Selling', 'Top Rated'];

  return (
    <div className="flex flex-col gap-4 p-6 items-center mt-4">
      <h1 className="text-2xl font-semibold mb-4 text-white">Kategori Unggulan</h1>
      <div className="mb-6">
        <ul className="flex gap-6">
          {categories.map((category) => (
            <li key={category} onClick={() => setSelectedCategory(category)} className={`cursor-pointer text-lg ${selectedCategory === category ? 'border-b-2 border-blue-500 font-medium text-white' : 'text-white'} transition-all`}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <ButtonLandingPage teks="Jelajahi Semua Produk" />
    </div>
  );
};

export default CategorySection;
