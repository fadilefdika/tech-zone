import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  isStar: boolean;
  isPrice: boolean;
  price: number;
  rating: number;
  imageUrl: string;
  productName: string;
}

const CardProduct = ({ isStar, isPrice, price, rating, imageUrl, productName }: Props) => {
  return (
    <Card className="rounded-lg shadow-lg bg-white overflow-hidden w-64 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex items-center justify-center bg-biruMuda">
        <Image src={imageUrl} alt={productName} width={150} height={150} className="rounded-t-lg object-cover" />
      </CardHeader>
      <CardFooter className="flex flex-col items-start p-4 space-y-2">
        <CardTitle className="text-xl font-semibold text-gray-900">{productName}</CardTitle>
        <CardDescription className="text-sm text-gray-500">Shop Now</CardDescription>

        {isStar && (
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={`text-${index < rating ? 'yellow' : 'gray'}-400`} />
            ))}
            <span className="ml-2 text-gray-600 text-sm">({rating}.0)</span>
          </div>
        )}

        {isPrice && <h2 className="text-lg font-semibold text-biruTua">{`Rp ${price.toLocaleString()}`}</h2>}
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
