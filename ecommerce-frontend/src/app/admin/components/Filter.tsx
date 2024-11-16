'use client';
import React, { useState } from 'react';

interface FilterProps {
  startDate: string;
  endDate: string;
  category: string;
}

type OnFilterChange = (filters: FilterProps) => void;

interface FiltersProps {
  onFilterChange: OnFilterChange;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="flex gap-4 mb-6">
      <input type="date" className="border p-2 rounded w-1/3" placeholder="mm/dd/yyyy" />
      <input type="date" className="border p-2 rounded w-1/3" placeholder="mm/dd/yyyy" />
      <select className="border p-2 rounded w-1/3">
        <option value="">Semua Kategori</option>
        <option value="electronics">Elektronik</option>
        <option value="fashion">Fashion</option>
        <option value="home">Rumah Tangga</option>
      </select>
    </div>
  );
};

export default Filters;
