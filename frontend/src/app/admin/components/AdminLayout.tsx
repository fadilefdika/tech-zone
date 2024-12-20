'use client';
import Sidebar from './Sidebar';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100 text-black">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col p-6 overflow-auto ml-[18%]">{children}</div>
    </div>
  );
};

export default AdminLayout;
