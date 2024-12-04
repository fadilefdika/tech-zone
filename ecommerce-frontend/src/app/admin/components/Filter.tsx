'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Product } from '@/types/product';

interface FilterProps {
  startDate?: string;
  endDate?: string;
  status: string;
  category?: string;
}

interface FiltersProps<T> {
  isDate?: boolean;
  titleStatus: string;
  optionsStatus: { value: string; label: string }[]; // Data untuk status
  titleCategory?: string; // Judul kategori
  optionsCategory?: { value: string; label: string }[]; // Opsi kategori tambahan
  setFilteredData: (data: Product[]) => void; // Fungsi untuk set data yang sudah difilter
  data?: Product[]; // Data yang akan difilter
}

const Filters = <T extends { date?: string; status: string; category?: string }>({ isDate = false, titleStatus, optionsStatus, titleCategory, optionsCategory = [], data = [], setFilteredData }: FiltersProps<T>) => {
  const [filters, setFilters] = useState<FilterProps>({
    status: '',
    category: '',
    ...(isDate ? { startDate: '', endDate: '' } : {}),
  });

  const [isClient, setIsClient] = useState(false);

  // Perubahan filter untuk status dan kategori
  const handleChange = (name: keyof FilterProps, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani perubahan filter
  const handleFilterChange = () => {
    const { startDate, endDate, status, category } = filters;

    const filtered = data.filter((item) => {
      // const itemDate = item.date || '';
      // const isDateInRange = !isDate || ((!startDate || new Date(itemDate) >= new Date(startDate)) && (!endDate || new Date(itemDate) <= new Date(endDate)));
      // const isStatusMatch = status === 'SEMUA' || !status || item.status.toLowerCase() === status.toLowerCase();
      const isCategoryMatch = category === 'SEMUA' || !category;

      return isCategoryMatch;
    });

    setFilteredData(filtered);
  };

  // Mengupdate filter setiap kali terjadi perubahan
  useEffect(() => {
    setIsClient(true); // Menandakan client-side sudah siap
  }, []);

  useEffect(() => {
    if (isClient) {
      handleFilterChange(); // Terapkan filter setelah client-side render selesai
    }
  }, [filters, data, isClient]); // Pastikan data sebagai dependency

  // Jangan render komponen ini sebelum client-side rendering selesai
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

      {titleCategory && optionsCategory.length > 0 && (
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
