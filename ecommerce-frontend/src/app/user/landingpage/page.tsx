import React from 'react';
import HeroSection from './Hero';
import CollectionSection from './CollectionSection';
import CategorySection from './CategorySection';
import BlogSection from './BlogSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CollectionSection />
      <div className="bg-biruTua">
        <CategorySection />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
