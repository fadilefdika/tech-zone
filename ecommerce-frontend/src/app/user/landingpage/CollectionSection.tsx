import React from 'react';
import CardProduct from '../components/CardProduct';
import { Button } from '@/components/ui/button';
import ButtonLandingPage from '../components/ButtonLandingPage';

const Collection = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="text-2xl font-semibold text-gray-800 my-4 flex items-center justify-center">Koleksi Kami</div>
      <div className="flex flex-wrap justify-evenly ">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <ButtonLandingPage teks="Pesan Sekarang" />
    </div>
  );
};

export default Collection;
