import React from 'react';
import { Search, Bell, User, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-biruMuda px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="" alt="TechZone Logo" className="h-8 w-auto" />
        <h1 className="text-xl font-semibold text-blue-900">TECH ZONE</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-1/2 space-x-2">
        <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300">
          <option>All categories</option>
          {/* Tambahkan opsi kategori di sini */}
        </select>
        <input type="text" placeholder="Search anything" className="flex-grow bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300" />
        <button className="text-biruTua hover:text-blue-500">
          <Search size={20} />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <button className="flex items-center text-biruTua hover:text-blue-500">
          <span className="mr-1">Help</span>
        </button>
        <button className="relative text-biruTua hover:text-blue-500">
          <Bell size={20} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </button>
        <button className="text-biruTua hover:text-blue-500">
          <User size={20} />
          <span className="ml-1">Account</span>
        </button>
        <button className="text-biruTua hover:text-blue-500">
          <ShoppingCart size={20} />
          <span className="ml-1">Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
