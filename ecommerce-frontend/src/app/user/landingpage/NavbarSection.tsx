import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className="bg-[#f5fbff] shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-7 flex items-center justify-between">
        <div className="">
          <Image src="/Logo Techzone.png" alt="Logo" width={80} height={80} />
        </div>
        <nav>
          <ul className="hidden md:flex space-x-12">
            <li>
              <Link href={'#'} className="text-gray-800 hover:text-[#28638d]">
                Home
              </Link>
            </li>
            <li>
              <Link href={'#'} className="text-gray-800 hover:text-[#28638d]">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href={'#'} className="text-gray-800 hover:text-[#28638d]">
                Blog
              </Link>
            </li>
            <li>
              <Link href={'#'} className="text-gray-800 hover:text-[#28638d]">
                TechSell
              </Link>
            </li>
            <li>
              <Link href={'#'} className="text-gray-800 hover:text-[#28638d]">
                Help
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Link href={'/user/dashboard'}>
            <Button className="px-6 py-2 bg-biruTua text-white hover:bg-[#1f4e6f]">Login</Button>
          </Link>
          <Button variant="outline" className="px-6 py-2 text-biruTua border-biruTua hover:bg-blue-100">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
