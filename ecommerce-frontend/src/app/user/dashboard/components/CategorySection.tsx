import Image from 'next/image';
import React from 'react';

type Props = {};

const CategorySection = (props: Props) => {
  return (
    <div className="pt-8 px-5">
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Kategori</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Elektronik */}
        <div className="flex flex-col items-center hover:shadow-lg hover:bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-200">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
            <Image src={'/product/tv.png'} alt="Elektronik" width={80} height={80} className="object-contain" />
          </div>
          <p className="mt-4 text-sm text-center font-medium text-gray-700">Elektronik</p>
        </div>

        {/* Gaming */}
        <div className="flex flex-col items-center hover:shadow-lg hover:bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-200">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
            <Image src={'/product/laptop.png'} alt="Gaming" width={80} height={80} className="object-contain" />
          </div>
          <p className="mt-4 text-sm text-center font-medium text-gray-700">Gaming</p>
        </div>

        {/* Aksesoris */}
        <div className="flex flex-col items-center hover:shadow-lg hover:bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-200">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
            <Image src={'/product/headset.png'} alt="Aksesoris" width={80} height={80} className="object-contain" />
          </div>
          <p className="mt-4 text-sm text-center font-medium text-gray-700">Aksesoris</p>
        </div>

        {/* Komputer */}
        <div className="flex flex-col items-center hover:shadow-lg hover:bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-200">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
            <Image src={'/product/keyboard.png'} alt="Komputer" width={80} height={80} className="object-contain" />
          </div>
          <p className="mt-4 text-sm text-center font-medium text-gray-700">Komputer</p>
        </div>

        {/* Peralatan Kantor */}
        <div className="flex flex-col items-center hover:shadow-lg hover:bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-200">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
            <Image src={'/product/kipas.png'} alt="Peralatan Kantor" width={80} height={80} className="object-contain" />
          </div>
          <p className="mt-4 text-sm text-center font-medium text-gray-700">Peralatan Kantor</p>
        </div>

        {/* Peralatan Pendukung Teknis */}
        <div className="flex flex-col items-center hover:shadow-lg hover:bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-200">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
            <Image src={'/product/pendrive.png'} alt="Peralatan Pendukung Teknis" width={80} height={80} className="object-contain" />
          </div>
          <p className="mt-4 text-sm text-center font-medium text-gray-700">Peralatan Pendukung Teknis</p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
