import { ReactNode } from 'react';
import Header from './landingpage/HeaderSection';

interface AdminLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col overflow-auto">{children}</div>
    </div>
  );
};

export default UserLayout;
