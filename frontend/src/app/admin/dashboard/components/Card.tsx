import React from 'react';
import { formatNumber } from '@/app/utils/formatnumbers';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';

type Props = {
  icon: React.ReactNode;
  margin: number;
  total: number;
  title: string;
  isCurrency?: boolean;
};

const Card = (props: Props) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-64 transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{props.icon}</div>
        <div className={`flex items-center rounded-lg px-2 py-1`}>
          {props.margin > 0 ? <FaArrowTrendUp className="mr-1 text-base text-green-500" /> : <FaArrowTrendDown className="mr-1 text-base text-red-500" />}
          <p className={`text-xs font-semibold ml-1 ${props.margin > 0 ? 'text-green-500' : 'text-red-500'}`}>{Math.abs(props.margin)}%</p>
        </div>
      </div>
      <h1 className="text-sm font-medium text-gray-600 mb-2">{props.title}</h1>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-gray-800">{formatNumber(props.total, props.isCurrency)}</p>
        <p className="text-xs text-gray-500 mb-1 text-right w-1/3">Dibandingkan bulan lalu</p>
      </div>
    </div>
  );
};

export default Card;
