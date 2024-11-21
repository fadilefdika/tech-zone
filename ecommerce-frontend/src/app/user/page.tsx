import React from 'react';
import HeroSection from './landingpage/Hero';
import CollectionSection from './landingpage/CollectionSection';
import CategorySection from './landingpage/CategorySection';
import BlogSection from './landingpage/BlogSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CollectionSection />
      <div className="bg-[#2b6c9a]">
        <CategorySection />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
