import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AdminLayoutProps {
  children: ReactNode;
}

const MarketPlaceLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col overflow-auto pb-20">{children}</div>
      <Footer />
    </div>
  );
};

export default MarketPlaceLayout;
