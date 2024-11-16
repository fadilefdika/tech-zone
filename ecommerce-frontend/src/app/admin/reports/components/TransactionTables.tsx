import React from 'react';

interface Transaction {
  id: number;
  user: string;
  total: string;
  date: string;
  status: string;
}

interface TransactionTableProps {
  data: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Laporan Transaksi</h3>
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b px-4 py-2">ID Transaksi</th>
            <th className="border-b px-4 py-2">Pengguna</th>
            <th className="border-b px-4 py-2">Total</th>
            <th className="border-b px-4 py-2">Tanggal</th>
            <th className="border-b px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 101, user: 'John Doe', total: 'Rp 2,000,000', date: '2024-11-12', status: 'PAID' },
            { id: 102, user: 'Jane Smith', total: 'Rp 1,500,000', date: '2024-11-13', status: 'PENDING' },
            { id: 103, user: 'Ali Yusuf', total: 'Rp 750,000', date: '2024-11-14', status: 'COMPLETED' },
          ].map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border-b px-4 py-2">{transaction.id}</td>
              <td className="border-b px-4 py-2">{transaction.user}</td>
              <td className="border-b px-4 py-2">{transaction.total}</td>
              <td className="border-b px-4 py-2">{transaction.date}</td>
              <td className="border-b px-4 py-2">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
