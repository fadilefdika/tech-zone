'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { User } from '../users/data/columns';

interface FilterProps {
  startDate?: string;
  endDate?: string;
  status: string;
  category?: string;
}

interface FiltersProps {
  isDate?: boolean;
  titleStatus: string;
  optionsStatus: { value: string; label: string }[];
  setFilteredData: (data: User[]) => void;
  dummyData: User[];
}

const FilterUser: React.FC<FiltersProps> = ({ isDate = false, titleStatus, optionsStatus, dummyData = [], setFilteredData }) => {
  const [filters, setFilters] = useState<FilterProps>({
    status: '',
    category: '',
    ...(isDate ? { startDate: '', endDate: '' } : {}),
  });

  const [isClient, setIsClient] = useState(false);

  const handleChange = (name: keyof FilterProps, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterChange = () => {
    const { startDate, endDate, status, category } = filters;

    const filtered = dummyData.filter((item) => {
      const itemDate = item.createdAt || ''; // Menggunakan createdAt sesuai dengan interface User
      const isDateInRange = !isDate || ((!startDate || new Date(itemDate) >= new Date(startDate)) && (!endDate || new Date(itemDate) <= new Date(endDate)));

      const isStatusMatch = status === 'SEMUA' || !status || item.status.toLowerCase() === status.toLowerCase();

      return isDateInRange && isStatusMatch;
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      handleFilterChange();
    }
  }, [filters, dummyData, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-6 mb-6">
      {isDate && (
        <>
          <div className="flex flex-col gap-2">
            <Label htmlFor="startDate">Mulai Tanggal</Label>
            <Input type="date" id="startDate" value={filters.startDate || ''} onChange={(e) => handleChange('startDate', e.target.value)} placeholder="Pilih tanggal mulai" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="endDate">Sampai Tanggal</Label>
            <Input type="date" id="endDate" value={filters.endDate || ''} onChange={(e) => handleChange('endDate', e.target.value)} placeholder="Pilih tanggal akhir" />
          </div>
        </>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="status">{titleStatus}</Label>
        <Select value={filters.status} onValueChange={(value) => handleChange('status', value)}>
          <SelectTrigger id="status">
            <SelectValue placeholder="Semua Status" />
          </SelectTrigger>
          <SelectContent>
            {optionsStatus.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterUser;
