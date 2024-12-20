import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BannerSection = () => {
  return (
    <div className="bg-white py-10 w-full flex items-center justify-center">
      <div className="flex flex-row gap-6 max-w-7xl w-full px-6">
        {/* Kolom gambar produk samping */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#1a1a2e] rounded-lg p-4">
            <Image src={'/product/headset3.png'} alt="JBL Tour One" width={120} height={120} className="object-contain" />
            <p className="text-center text-white text-sm mt-2">JBL Tour One</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-4">
            <Image src={'/product/headset5.png'} alt="BO10 Headphone" width={120} height={120} className="object-contain" />
            <p className="text-center text-white text-sm mt-2">BO10 Headphone</p>
          </div>
        </div>

        {/* Kolom konten produk */}
        <div className="flex flex-row bg-[#e7f5ff] items-center shadow-md gap-10 rounded-lg w-full">
          <div className="flex flex-col gap-4 flex-grow p-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold text-[#3d5a80]">LG GRAM I7</h1>
              <h3 className="text-base text-gray-600">12th Gen Core i7 / Win11 / Microsoft 365</h3>
              <h3 className="text-xl font-bold text-[#3d5a80]">Starting at Rp 7.599.999</h3>
            </div>
            <Button className="bg-[#3d5a80] text-white rounded-md w-fit px-6 py-2 mt-4">Beli Sekarang</Button>
          </div>

          {/* Gambar produk utama */}
          <div className="flex-shrink-0 pr-6">
            <Image src={'/product/Laptop image.png'} alt="LG Gram 17" width={350} height={350} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
