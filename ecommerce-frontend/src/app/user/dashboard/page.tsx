import React from 'react';
import BannerSection from './components/BannerSection';
import ProductSection from './components/ProductSection';
import CategorySection from './components/CategorySection';

const DashboardUser = () => {
  return (
    <div className="px-6">
      <BannerSection />
      <CategorySection />
      <ProductSection />
    </div>
  );
};

export default DashboardUser;
