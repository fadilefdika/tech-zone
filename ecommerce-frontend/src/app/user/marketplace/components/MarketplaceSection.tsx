import React from 'react';
import { cardProductData } from '../../data/CardProduct';
import CardProduct from '../../components/CardProduct';

type Props = {};

const MarketplaceSection = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      {cardProductData.map((item) => (
        <CardProduct key={item.id} isStar={item.isStar} isPrice={item.isPrice} price={item.price} rating={item.rating} imageUrl={item.imageUrl} productName={item.productName} />
      ))}
    </div>
  );
};

export default MarketplaceSection;
