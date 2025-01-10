'use client';

import React, { useEffect } from 'react';
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  title: string;
}

export function DataTable<TData>({ columns, data, title }: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-bold text-black mb-4">{title}</h3>

      <Table className="w-full text-sm text-left text-gray-600">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-gray-50">
              {headerGroup.headers.map((header) => (
                <TableHead className=" text-black" key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-4">
                Tidak ada data yang tersedia
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify mt-4">
        <div className="text-sm text-gray-600">
          Halaman {currentPage} dari {totalPages}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={() => table.previousPage()} className={!table.getCanPreviousPage() ? 'opacity-50 pointer-events-none' : ''} aria-label="Halaman Sebelumnya" />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink href="#" isActive={currentPage === i + 1} onClick={() => table.setPageIndex(i)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={() => table.nextPage()} className={!table.getCanNextPage() ? 'opacity-50 pointer-events-none' : ''} aria-label="Halaman Berikutnya" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default DataTable;
