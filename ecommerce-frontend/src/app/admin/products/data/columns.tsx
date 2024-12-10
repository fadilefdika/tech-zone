'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Product } from '@/types/types';
import { useRouter } from 'next/navigation'; // App Router

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
    accessorKey: 'description',
    header: 'Deskripsi',
  },
  {
    accessorKey: 'categoryName',
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
      const router = useRouter();

      const viewDetailProduct = () => {
        router.push(`/admin/products/${product.id}`);
      };

      const handleEditProduct = () => {
        router.push(`/admin/products/${product.id}/edit`);
      };

      const deleteProduct = () => {
        console.log('Delete product');
      };

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
            <DropdownMenuItem onClick={viewDetailProduct}>View Product Details</DropdownMenuItem>
            <DropdownMenuItem onClick={handleEditProduct}>Edit Product</DropdownMenuItem>
            <DropdownMenuItem onClick={deleteProduct}>Hapus</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
