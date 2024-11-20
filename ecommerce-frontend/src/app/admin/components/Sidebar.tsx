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
    <div className="w-1/6 bg-white pt-2 pb-5 flex flex-col items-center shadow-md rounded-xl fixed top-5 left-5 overflow-auto border-r border-gray-200">
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
                className={`flex gap-4 items-center rounded-lg py-3 px-5 transition ${pathname === item.href ? 'bg-blue-100 text-blue-600 shadow-md border border-blue-200' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500'}`}
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
