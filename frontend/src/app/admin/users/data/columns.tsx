'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

export type User = {
  id: number;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: number;
  status: string;
  createdAt: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'fullName',
    header: 'Nama Lengkap',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Nomor Telepon',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'createdAt',
    header: 'Tanggal Registrasi',
  },
  {
    header: 'Actions',
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(`User ID: ${user.id}`)}>Copy User ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log('View user details')}>View User Details</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log('Edit user')}>Edit User</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log('Delete user')}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const data: User[] = [
  { id: 1, fullName: 'John Doe', username: 'johndoe', email: 'john@example.com', phoneNumber: 1234567890, status: 'Aktif', createdAt: '2024-01-01' },
  { id: 2, fullName: 'Jane Smith', username: 'janesmith', email: 'jane@example.com', phoneNumber: 9876543210, status: 'Aktif', createdAt: '2024-02-01' },
  { id: 3, fullName: 'Samuel Green', username: 'samgreen', email: 'sam@example.com', phoneNumber: 1231231234, status: 'Tidak Aktif', createdAt: '2024-03-01' },
  { id: 4, fullName: 'Alice Brown', username: 'alicebrown', email: 'alice@example.com', phoneNumber: 4564564567, status: 'Aktif', createdAt: '2024-04-01' },
  { id: 5, fullName: 'Michael White', username: 'mwhite', email: 'michael@example.com', phoneNumber: 7897897891, status: 'Diblokir', createdAt: '2024-05-01' },
  { id: 6, fullName: 'Laura Black', username: 'lblack', email: 'laura@example.com', phoneNumber: 3213213213, status: 'Aktif', createdAt: '2024-06-01' },
  { id: 7, fullName: 'Chris Blue', username: 'chrisblue', email: 'chris@example.com', phoneNumber: 6546546543, status: 'Tidak Aktif', createdAt: '2024-07-01' },
  { id: 8, fullName: 'Emma Green', username: 'emmagreen', email: 'emma@example.com', phoneNumber: 9879879876, status: 'Aktif', createdAt: '2024-08-01' },
  { id: 9, fullName: 'Oliver Red', username: 'olivered', email: 'oliver@example.com', phoneNumber: 1234567123, status: 'Aktif', createdAt: '2024-09-01' },
  { id: 10, fullName: 'Sophia Gray', username: 'sophiagray', email: 'sophia@example.com', phoneNumber: 6543211234, status: 'Diblokir', createdAt: '2024-10-01' },
  { id: 11, fullName: 'Liam Yellow', username: 'liamyellow', email: 'liam@example.com', phoneNumber: 1236549870, status: 'Tidak Aktif', createdAt: '2024-11-01' },
  { id: 12, fullName: 'Isabella Violet', username: 'isaviolet', email: 'isabella@example.com', phoneNumber: 4567891234, status: 'Aktif', createdAt: '2024-12-01' },
  { id: 13, fullName: 'James Orange', username: 'jamesorange', email: 'james@example.com', phoneNumber: 7891234567, status: 'Aktif', createdAt: '2024-11-02' },
  { id: 14, fullName: 'Mia Purple', username: 'miapurple', email: 'mia@example.com', phoneNumber: 3219876543, status: 'Diblokir', createdAt: '2024-11-03' },
  { id: 15, fullName: 'Ethan Cyan', username: 'ethancyan', email: 'ethan@example.com', phoneNumber: 9876543219, status: 'Aktif', createdAt: '2024-11-04' },
  { id: 16, fullName: 'Ava Indigo', username: 'avaindigo', email: 'ava@example.com', phoneNumber: 4561237890, status: 'Tidak Aktif', createdAt: '2024-11-05' },
  { id: 17, fullName: 'William Pink', username: 'williampink', email: 'william@example.com', phoneNumber: 7893214567, status: 'Aktif', createdAt: '2024-11-06' },
  { id: 18, fullName: 'Emily Magenta', username: 'emilymagenta', email: 'emily@example.com', phoneNumber: 3214569870, status: 'Diblokir', createdAt: '2024-11-07' },
  { id: 19, fullName: 'Benjamin Teal', username: 'benjaminteal', email: 'benjamin@example.com', phoneNumber: 6549871230, status: 'Aktif', createdAt: '2024-11-08' },
  { id: 20, fullName: 'Charlotte Peach', username: 'charlottepeach', email: 'charlotte@example.com', phoneNumber: 7896543210, status: 'Tidak Aktif', createdAt: '2024-11-09' },
];
