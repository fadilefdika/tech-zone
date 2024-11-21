import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CardProduct = () => {
  return (
    <Card className="rounded-lg shadow-lg bg-white overflow-hidden w-64">
      <CardHeader className="flex items-center justify-center bg-[#D0ecff]">
        <Image src="/product/tv.png" alt="Image Product" width={200} height={200} className="rounded-t-lg object-cover" />
      </CardHeader>
      <CardFooter className="flex flex-col items-start p-4 space-y-2">
        <CardTitle className="text-xl font-semibold text-gray-900">Name Product</CardTitle>
        <CardDescription className="text-sm text-gray-500">Shop Now</CardDescription>
        <div className="flex items-center space-x-1">
          {/* Rating Icon */}
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
          <span className="ml-2 text-gray-600 text-sm">(4.0)</span> {/* Rating text */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
