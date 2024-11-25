import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CardAuctionProps } from '../types/Card';

const CardAuction: React.FC<CardAuctionProps> = ({ isAuction, isBid, isWin, price, product, category, auctionEndDate, imageUrl }) => {
  return (
    <Card className="rounded-lg shadow-lg bg-white overflow-hidden w-64">
      <CardHeader className="flex items-center justify-center bg-blue-100 w-full h-44">
        <Image src={imageUrl || '/placeholder.png'} alt={product || 'Image Product'} width={200} height={200} className="rounded-t-lg object-cover" />
      </CardHeader>

      <CardFooter className="flex flex-col items-start p-4 space-y-3">
        <CardTitle className="text-xl font-semibold text-gray-900">{product || 'Product Name'}</CardTitle>

        <div className="flex flex-row justify-between w-full mb-5">
          <h2 className="text-base text-gray-500">{category || 'Category'}</h2>
          <div className="flex flex-col items-end">
            <CardDescription className="text-sm text-gray-500">Dimulai Dari</CardDescription>
            <p className="text-lg font-semibold text-gray-900">Rp {price ? price.toLocaleString() : '0'}</p>
          </div>
        </div>

        {isAuction && <Progress value={24} className="w-full h-2 rounded-lg bg-gray-200" />}
      </CardFooter>

      <div className="flex justify-center pb-4 mt-2">
        {isWin ? (
          <Button className="bg-green-500 text-white rounded-md w-40 py-2">Anda Menang!</Button>
        ) : isBid ? (
          <Button className="bg-yellow-500 text-white rounded-md w-40 py-2">Sudah Bid</Button>
        ) : (
          <Button className="bg-blue-600 text-white rounded-md w-40 py-2">{isAuction ? 'Ikuti Auction' : 'Beli Sekarang'}</Button>
        )}
      </div>
    </Card>
  );
};

export default CardAuction;
