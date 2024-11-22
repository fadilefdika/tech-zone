import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AdminLayoutProps {
  children: ReactNode;
}

const DashboardUserLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col overflow-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardUserLayout;
