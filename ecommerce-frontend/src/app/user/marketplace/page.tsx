'use client';
import React from 'react';
import FilterControls from './components/FilterControls';
import BreadCrumb from './components/BreadCrumb';
import MarketplaceSection from './components/MarketplaceSection';

const MarketplacePage: React.FC = () => {
  return (
    <div className="flex flex-col px-6 ">
      <div className="my-4">
        <BreadCrumb firstName="Dashboard" firstPath="/user/dashboard" secondName="Marketplace" secondPath="#" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <aside className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-3">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <FilterControls />
        </aside>

        <main className="w-full lg:w-3/4 p-3 items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Marketplace</h2>
          <div className="flex items-center justify-center">
            <MarketplaceSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketplacePage;
