'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

export type Product = {
  id: number;
  name: string;
  category: string;
  totalSales: number;
  auctionSales: number;
  regularSales: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'totalSales',
    header: 'Total Sales',
  },
  {
    accessorKey: 'auctionSales',
    header: 'Auction Sales',
  },
  {
    accessorKey: 'regularSales',
    header: 'Regular Sales',
  },
  {
    header: 'Actions',
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(`Product ID: ${product.id}`)}>Copy Product ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log('View product details')}>View Product Details</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log('Edit product')}>Edit Product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const data: Product[] = [
  {
    id: 1,
    name: 'Laptop Pro X',
    category: 'Laptop',
    totalSales: 150,
    auctionSales: 50,
    regularSales: 100,
  },
  {
    id: 2,
    name: 'Wireless Headset Z',
    category: 'Accessories',
    totalSales: 120,
    auctionSales: 40,
    regularSales: 80,
  },
  {
    id: 3,
    name: 'Smartphone 12 Ultra',
    category: 'Smartphone',
    totalSales: 200,
    auctionSales: 70,
    regularSales: 130,
  },
  {
    id: 4,
    name: 'Gaming Mouse MX',
    category: 'Peripherals',
    totalSales: 90,
    auctionSales: 30,
    regularSales: 60,
  },
  {
    id: 5,
    name: 'Monitor HD 24"',
    category: 'Monitor',
    totalSales: 180,
    auctionSales: 60,
    regularSales: 120,
  },
  {
    id: 6,
    name: 'Keyboard RGB K5',
    category: 'Peripherals',
    totalSales: 110,
    auctionSales: 35,
    regularSales: 75,
  },
  {
    id: 7,
    name: 'Laptop Ultra Y',
    category: 'Laptop',
    totalSales: 220,
    auctionSales: 70,
    regularSales: 150,
  },
  {
    id: 8,
    name: 'Wireless Mouse MX',
    category: 'Accessories',
    totalSales: 100,
    auctionSales: 25,
    regularSales: 75,
  },
  {
    id: 9,
    name: 'Smartphone X20',
    category: 'Smartphone',
    totalSales: 240,
    auctionSales: 90,
    regularSales: 150,
  },
  {
    id: 10,
    name: 'Gaming Chair Elite',
    category: 'Furniture',
    totalSales: 70,
    auctionSales: 20,
    regularSales: 50,
  },
  {
    id: 11,
    name: 'Tablet Pro M10',
    category: 'Tablet',
    totalSales: 130,
    auctionSales: 40,
    regularSales: 90,
  },
  {
    id: 12,
    name: 'Headphone Studio Z',
    category: 'Audio',
    totalSales: 170,
    auctionSales: 50,
    regularSales: 120,
  },
  {
    id: 13,
    name: '4K Ultra Monitor',
    category: 'Monitor',
    totalSales: 200,
    auctionSales: 80,
    regularSales: 120,
  },
  {
    id: 14,
    name: 'Gaming Keyboard T10',
    category: 'Peripherals',
    totalSales: 140,
    auctionSales: 45,
    regularSales: 95,
  },
  {
    id: 15,
    name: 'Smartwatch V5',
    category: 'Wearables',
    totalSales: 90,
    auctionSales: 20,
    regularSales: 70,
  },
  {
    id: 16,
    name: 'Laptop CoreBook',
    category: 'Laptop',
    totalSales: 300,
    auctionSales: 100,
    regularSales: 200,
  },
  {
    id: 17,
    name: 'Noise-Cancelling Headphone',
    category: 'Audio',
    totalSales: 160,
    auctionSales: 50,
    regularSales: 110,
  },
  {
    id: 18,
    name: 'Smartphone Alpha One',
    category: 'Smartphone',
    totalSales: 280,
    auctionSales: 100,
    regularSales: 180,
  },
  {
    id: 19,
    name: 'Monitor Curve X34',
    category: 'Monitor',
    totalSales: 190,
    auctionSales: 60,
    regularSales: 130,
  },
  {
    id: 20,
    name: 'Gaming Mouse Pro',
    category: 'Peripherals',
    totalSales: 120,
    auctionSales: 40,
    regularSales: 80,
  },
];
