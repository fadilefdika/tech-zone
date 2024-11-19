'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { GiCardboardBox } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();
  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: <MdOutlineDashboardCustomize className="text-xl" /> },
    { href: '/admin/reports', label: 'Laporan', icon: <TbReportSearch className="text-xl" /> },
    { href: '/admin/products', label: 'Produk', icon: <GiCardboardBox className="text-xl" /> },
    { href: '/admin/users', label: 'Pengguna', icon: <FaUsers className="text-xl" /> },
  ];

  return (
    <div className="w-1/6 bg-white min-h-screen flex flex-col items-center shadow-sm rounded-3xl">
      <div className="mt-6 text-lg font-bold text-gray-700">
        <span className="text-blue-500">My</span>Logo
      </div>
      <div className="mt-6 w-full px-4">
        <p className="text-sm font-medium text-gray-400 tracking-wider">MENU</p>
        <ul className="flex flex-col w-full px-1 gap-3 mt-3">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex gap-4 items-center rounded-lg py-3 px-5 transition ${pathname === item.href ? 'bg-[#D4EDFF] text-blue-500 shadow-sm' : 'text-gray-700 hover:bg-[#D0ECFF] hover:text-blue-500 hover:shadow-sm'}`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
