'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface FilterProps {
  startDate?: string;
  endDate?: string;
  status: string;
  category?: string;
}

interface FiltersProps<T> {
  isDate?: boolean;
  titleStatus: string;
  optionsStatus: { value: string; label: string }[];
  titleCategory?: string;
  optionsCategory?: { value: string; label: string }[];
  setFilteredData: (data: T[]) => void;
  dummyData?: T[]; // Nilai opsional
}

const Filters = <T extends { date?: string; status: string; category?: string }>({
  isDate = false,
  titleStatus,
  optionsStatus,
  titleCategory,
  optionsCategory,
  dummyData = [], // Default value
  setFilteredData,
}: FiltersProps<T>) => {
  const [filters, setFilters] = useState<FilterProps>({
    status: '',
    category: '',
    ...(isDate ? { startDate: '', endDate: '' } : {}),
  });

  const handleChange = (name: keyof FilterProps, value: string) => {
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
  };

  const handleFilterChange = () => {
    const { startDate, endDate, status, category } = filters;

    const filtered = dummyData.filter((item) => {
      const itemDate = item.date || '';
      console.log('Category in item:', item.category); // Debug nilai category dari item
      console.log('Category filter:', category); // Debug nilai category dari filter

      const isDateInRange = !isDate || ((!startDate || new Date(itemDate) >= new Date(startDate)) && (!endDate || new Date(itemDate) <= new Date(endDate)));
      const isStatusMatch = status === 'ALL' || !status || item.status.toLowerCase() === status.toLowerCase();
      const isCategoryMatch = category === 'ALL' || !category || item.category?.toLocaleLowerCase() === category.toLowerCase();

      console.log('Category Match:', isCategoryMatch); // Debug apakah kategori cocok

      return isDateInRange && isStatusMatch && isCategoryMatch;
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [filters]);

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
      {titleCategory && optionsCategory && (
        <div className="flex flex-col gap-2">
          <Label htmlFor="category">{titleCategory}</Label>
          <Select value={filters.category || ''} onValueChange={(value) => handleChange('category', value)}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent>
              {optionsCategory.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default Filters;
