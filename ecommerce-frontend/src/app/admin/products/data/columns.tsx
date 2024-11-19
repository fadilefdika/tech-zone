'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

export type Product = {
  id: number;
  name: string;
  description: string;
  skuCode: string;
  category: string;
  stock: number;
  price: number;
  status: string;
  weight: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Nama Produk',
  },
  {
    accessorKey: 'skuCode',
    header: 'Kode SKU',
  },
  {
    accessorKey: 'category',
    header: 'Kategori',
  },
  {
    accessorKey: 'stock',
    header: 'Stok Tersedia',
  },
  {
    accessorKey: 'price',
    header: 'Harga',
  },
  {
    accessorKey: 'status',
    header: 'Status',
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
            <DropdownMenuItem onClick={() => console.log('Hapus product')}>Hapus</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const data: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    skuCode: 'WH123',
    category: 'Elektronik',
    stock: 50,
    price: 150.99,
    status: 'Aktif',
    weight: 0.5,
  },
  {
    id: 2,
    name: 'Gaming Keyboard',
    description: 'Mechanical keyboard with RGB backlight.',
    skuCode: 'GK456',
    category: 'Gaming',
    stock: 30,
    price: 75.5,
    status: 'Aktif',
    weight: 1.2,
  },
  {
    id: 3,
    name: 'Smartphone Case',
    description: 'Durable smartphone case with shock protection.',
    skuCode: 'SC789',
    category: 'Aksesoris',
    stock: 120,
    price: 19.99,
    status: 'Aktif',
    weight: 0.3,
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 10 hours of battery life.',
    skuCode: 'BS234',
    category: 'Elektronik',
    stock: 45,
    price: 89.99,
    status: 'Tidak Aktif',
    weight: 1.0,
  },
  {
    id: 5,
    name: 'LED Monitor',
    description: '24-inch Full HD LED monitor with adjustable stand.',
    skuCode: 'LM567',
    category: 'Komputer',
    stock: 25,
    price: 199.99,
    status: 'Aktif',
    weight: 4.5,
  },
  {
    id: 6,
    name: 'Running Shoes',
    description: 'Lightweight running shoes for all-day comfort.',
    skuCode: 'RS890',
    category: 'Aksesoris', // Tidak ada kategori "Footwear" dalam daftar Anda
    stock: 80,
    price: 59.99,
    status: 'Tidak Aktif',
    weight: 1.0,
  },
  {
    id: 7,
    name: 'Fitness Tracker',
    description: 'Water-resistant fitness tracker with heart rate monitoring.',
    skuCode: 'FT321',
    category: 'Elektronik',
    stock: 35,
    price: 49.99,
    status: 'Aktif',
    weight: 0.2,
  },
  {
    id: 8,
    name: 'Laptop Backpack',
    description: 'Spacious backpack with padded laptop compartment.',
    skuCode: 'LB654',
    category: 'Aksesoris',
    stock: 60,
    price: 39.99,
    status: 'Aktif',
    weight: 1.8,
  },
  {
    id: 9,
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated water bottle keeps drinks hot or cold for hours.',
    skuCode: 'WB987',
    category: 'Aksesoris', // Menggunakan kategori Aksesoris karena lebih umum
    stock: 70,
    price: 25.5,
    status: 'Tidak Aktif',
    weight: 0.6,
  },
  {
    id: 10,
    name: 'Office Chair',
    description: 'Ergonomic office chair with adjustable height and lumbar support.',
    skuCode: 'OC112',
    category: 'Peralatan Kantor',
    stock: 15,
    price: 129.99,
    status: 'Aktif',
    weight: 10.5,
  },
  {
    id: 11,
    name: 'Electric Kettle',
    description: '1.5-liter electric kettle with auto shut-off feature.',
    skuCode: 'EK334',
    category: 'Peralatan Pendukung Teknis',
    stock: 40,
    price: 35.0,
    status: 'Aktif',
    weight: 1.3,
  },
  {
    id: 12,
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat with carrying strap.',
    skuCode: 'YM556',
    category: 'Aksesoris', // Tidak ada kategori "Fitness" dalam daftar Anda
    stock: 100,
    price: 24.99,
    status: 'Aktif',
    weight: 2.0,
  },
  {
    id: 13,
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness levels.',
    skuCode: 'DL778',
    category: 'Peralatan Kantor',
    stock: 55,
    price: 29.99,
    status: 'Aktif',
    weight: 1.1,
  },
  {
    id: 14,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life.',
    skuCode: 'WM990',
    category: 'Komputer',
    stock: 75,
    price: 15.99,
    status: 'Aktif',
    weight: 0.3,
  },
  {
    id: 15,
    name: 'Digital Camera',
    description: 'Compact digital camera with 20MP resolution.',
    skuCode: 'DC223',
    category: 'Fotografi',
    stock: 20,
    price: 299.99,
    status: 'Aktif',
    weight: 0.8,
  },
];
