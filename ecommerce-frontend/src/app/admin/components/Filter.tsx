import React, { useState } from 'react';

interface FilterProps {
  startDate: string;
  endDate: string;
  status: string;
}

interface FiltersProps {
  onFilterChange: (filters: FilterProps) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterProps>({
    startDate: '',
    endDate: '',
    status: '',
  });

  const handleChange = (name: keyof FilterProps, value: string) => {
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="flex gap-4 mb-6">
      <input type="date" className="border p-2 rounded w-1/3" value={filters.startDate} onChange={(e) => handleChange('startDate', e.target.value)} placeholder="Mulai Tanggal" />
      <input type="date" className="border p-2 rounded w-1/3" value={filters.endDate} onChange={(e) => handleChange('endDate', e.target.value)} placeholder="Sampai Tanggal" />
      <select className="border p-2 rounded w-1/3" value={filters.status} onChange={(e) => handleChange('status', e.target.value)}>
        <option value="">Semua Status</option>
        <option value="PAID">PAID</option>
        <option value="PENDING">PENDING</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="CANCELLED">CANCELLED</option>
      </select>
    </div>
  );
};

export default Filters;
