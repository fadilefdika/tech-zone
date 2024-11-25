export interface CardAuctionProps {
  isAuction: boolean;
  isBid: boolean;
  isWin: boolean;
  price: number;
  product: string;
  category: string;
  auctionEndDate: string;
  imageUrl: string;
}

export interface CardProductProps {
  isStar: boolean;
  isPrice: boolean;
  price: number;
  rating: number;
  imageUrl: string;
  productName: string;
}

export type MarketplaceItem = (CardAuctionProps & { id: number }) | (CardProductProps & { id: number });

export interface MarketplaceSectionProps {
  items: MarketplaceItem[];
}
