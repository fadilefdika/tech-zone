import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { today } from '@/app/utils/Today';

interface Props {
  title: string;
}

const Header = (props: Props) => {
  return (
    <div className="mb-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
        <p className="text-gray-600 text-sm">{today}</p>
      </div>
      <div className="flex gap-6 items-center">
        <div className="p-2 bg-white rounded-full hover:bg-gray-100 cursor-pointer transition">
          <IoMdNotificationsOutline className="text-2xl text-gray-600" />
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineAccountCircle className="text-4xl text-gray-600 p-2 bg-white rounded-full" />
          <div className="flex flex-col">
            <h2 className="text-gray-800 font-medium">Upa Mekano</h2>
            <h3 className="text-gray-600 text-sm">Super Admin</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
