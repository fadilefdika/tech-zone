import React from 'react';
import { Button } from '@/components/ui/button';
import CardProduct from '../../components/CardProduct';

const ProductSection = () => {
  return (
    <div className="py-10 px-5 bg-white">
      <div className="flex justify-between w-full mt-14">
        <h1 className="text-3xl font-bold mb-10 ml-3 text-gray-800 ">Produk yang Mungkin Anda Suka</h1>
        <Button className="bg-biruTua text-white">Temukan Lebih Banyak</Button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max px-4">
          <CardProduct isStar={true} isPrice={true} price={1000000} rating={4} imageUrl="/product/tv.png" productName="Smart TV" />
          <CardProduct isStar={true} isPrice={true} price={1000000} rating={4} imageUrl="/product/tv.png" productName="Smart TV" />
          <CardProduct isStar={true} isPrice={true} price={1000000} rating={4} imageUrl="/product/tv.png" productName="Smart TV" />
          <CardProduct isStar={true} isPrice={true} price={1000000} rating={4} imageUrl="/product/tv.png" productName="Smart TV" />
          <CardProduct isStar={true} isPrice={true} price={1000000} rating={4} imageUrl="/product/tv.png" productName="Smart TV" />
          <CardProduct isStar={true} isPrice={true} price={1000000} rating={4} imageUrl="/product/tv.png" productName="Smart TV" />
          <CardProduct isStar={true} isPrice={true} price={1000000} rating={4} imageUrl="/product/tv.png" productName="Smart TV" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
