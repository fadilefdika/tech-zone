import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface AdminLayoutProps {
  children: ReactNode;
}

const MarketPlaceLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col overflow-auto">{children}</div>
    </div>
  );
};

export default MarketPlaceLayout;
