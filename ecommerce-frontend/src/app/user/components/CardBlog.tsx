import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CardBlog = () => {
  return (
    <div>
      <Card className="rounded-lg shadow-lg bg-white overflow-hidden w-64">
        <CardHeader className="flex items-center justify-center bg-[#D0ecff]">
          <Image src="/product/tv.png" alt="Image Product" width={200} height={200} className="rounded-t-lg object-cover" />
        </CardHeader>
        <CardFooter className="flex flex-col items-start p-4 space-y-2">
          <CardDescription className="text-sm text-gray-500">Kategori</CardDescription>
          <CardTitle className="text-xl font-semibold text-gray-900">Judul Blog</CardTitle>
          <p className="line-clamp-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti aut ipsa nulla quisquam. Sint, provident molestiae pariatur eius itaque commodi earum consequatur quis nam rerum perferendis? Placeat, iusto asperiores.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardBlog;
