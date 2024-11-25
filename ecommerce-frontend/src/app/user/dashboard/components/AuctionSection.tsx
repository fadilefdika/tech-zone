import React from 'react';
import CardAuction from '../../components/CardAuction';
import { Button } from '@/components/ui/button';
import { cardAuctionData } from '../../data/CardAuction';

const AuctionSection = () => {
  return (
    <div className="py-10 px-5 bg-white">
      <h1 className="text-3xl font-bold mb-10 ml-1 text-gray-800 ">Ikuti Lelang Seru Sekarang!</h1>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max px-4">
          {cardAuctionData.map((item) => (
            <CardAuction key={item.id} isAuction={item.isAuction} isBid={item.isBid} isWin={item.isWin} auctionEndDate={item.auctionEndDate} price={item.price} product={item.product} category={item.category} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>
      {/* Tombol di tengah */}
      <div className="flex justify-center w-full mt-10">
        <Button className="bg-biruTua text-white">Lihat Semua Lelang</Button>
      </div>
    </div>
  );
};

export default AuctionSection;
