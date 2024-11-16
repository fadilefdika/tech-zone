import Link from 'next/link';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { GiCardboardBox } from 'react-icons/gi';
import { FaUserTag } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-white min-h-max flex flex-col items-center shadow-sm rounded-3xl">
      {/* Logo */}
      <div className="mt-6 text-lg font-bold text-gray-700">
        <span className="text-blue-500">My</span>Logo
      </div>

      {/* Menu */}
      <div className="mt-6 w-full px-4">
        <p className="text-sm font-medium text-gray-400 tracking-wider">MENU</p>
        <ul className="flex flex-col w-full px-1 gap-3 mt-3">
          {/* Dashboard */}
          <li>
            <Link href="/admin/dashboard" className="flex gap-3 items-center text-gray-700 hover:bg-[#D0ECFF] hover:text-blue-500 hover:shadow-sm transition rounded-lg py-3 px-5">
              <MdOutlineDashboardCustomize className="text-xl" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </li>

          {/* Report */}
          <li>
            <Link href="/admin/reports" className="flex gap-3 items-center text-gray-700 hover:bg-[#D0ECFF] hover:text-blue-500 hover:shadow-sm transition rounded-lg py-3 px-5">
              <TbReportSearch className="text-xl" />
              <span className="text-sm font-medium">Report</span>
            </Link>
          </li>

          {/* Product */}
          <li>
            <Link href="/admin/products" className="flex gap-3 items-center text-gray-700 hover:bg-[#D0ECFF] hover:text-blue-500 hover:shadow-sm transition rounded-lg py-3 px-5">
              <GiCardboardBox className="text-xl" />
              <span className="text-sm font-medium">Product</span>
            </Link>
          </li>

          {/* Customer */}
          <li>
            <Link href="/admin/users" className="flex gap-3 items-center text-gray-700 hover:bg-[#D0ECFF] hover:text-blue-500 hover:shadow-sm transition rounded-lg py-3 px-5">
              <FaUsers className="text-xl" />
              <span className="text-sm font-medium">Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
