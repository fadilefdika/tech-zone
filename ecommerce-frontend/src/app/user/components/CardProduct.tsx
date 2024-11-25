import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CardProductProps } from '../types/Card';

const CardProduct: React.FC<CardProductProps> = ({ isStar, isPrice, price, rating, imageUrl, productName }) => {
  return (
    <Card className="rounded-lg shadow-lg bg-white overflow-hidden w-64 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex items-center justify-center bg-blue-100 h-44 w-full">
        <Image src={imageUrl || '/placeholder.png'} alt={productName || 'Product Image'} width={150} height={150} className="rounded-t-lg object-cover" />
      </CardHeader>

      <CardFooter className="flex flex-col items-start p-4 space-y-2">
        <CardTitle className="text-xl font-semibold text-gray-900">{productName || 'Product Name'}</CardTitle>
        <CardDescription className="text-sm text-gray-500">Shop Now</CardDescription>

        {isStar && (
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-400'} />
            ))}
            <span className="ml-2 text-gray-600 text-sm">({rating.toFixed(1)})</span>
          </div>
        )}

        {isPrice && <h2 className="text-lg font-semibold text-blue-600">Rp {price ? price.toLocaleString() : '0'}</h2>}
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
