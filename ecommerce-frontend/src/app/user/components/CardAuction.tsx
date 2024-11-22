import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CardAuction = () => {
  return (
    <Card className="rounded-lg shadow-lg bg-white overflow-hidden w-64">
      <CardHeader className="flex items-center justify-center bg-biruMuda">
        <Image src="/product/tv.png" alt="Image Product" width={200} height={200} className="rounded-t-lg object-cover" />
      </CardHeader>

      <CardFooter className="flex flex-col items-start p-4 space-y-3">
        <CardTitle className="text-xl font-semibold text-gray-900">Name Product</CardTitle>

        <div className="flex flex-row justify-between w-full mb-5">
          <h2 className="text-base text-gray-500">Kategori</h2>
          <div className="flex flex-col items-end">
            <CardDescription className="text-sm text-gray-500">Dimulai Dari</CardDescription>
            <p className="text-lg font-semibold text-gray-900">Rp 1.000.000</p>
          </div>
        </div>

        <Progress value={24} className="w-full h-2 rounded-lg bg-gray-200" />
      </CardFooter>

      <div className="flex justify-center pb-4 mt-2">
        <Button className="bg-biruTua text-white rounded-md w-40 py-2">Ikuti Auction</Button>
      </div>
    </Card>
  );
};

export default CardAuction;
