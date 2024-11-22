import React from 'react';
import BannerSection from './components/BannerSection';
import AuctionSection from './components/AuctionSection';
import ProductSection from './components/ProductSection';

const DashboardUser = () => {
  return (
    <div className="px-6">
      <BannerSection />
      <AuctionSection />
      <ProductSection />
    </div>
  );
};

export default DashboardUser;
