'use client';
import React from 'react';
import MarketplaceSection from './components/MarketplaceSection';
import FilterControls from './components/FilterControls';

const MarketplacePage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 mt-6 gap-6 h-full">
      <aside className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <FilterControls />
      </aside>

      <main className="w-full lg:w-3/4 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Marketplace</h2>
        <MarketplaceSection />
      </main>
    </div>
  );
};

export default MarketplacePage;
