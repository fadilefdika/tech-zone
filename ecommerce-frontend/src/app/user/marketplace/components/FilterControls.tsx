import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterControlsProps {}

const FilterControls: React.FC<FilterControlsProps> = () => {
  const sections = [
    {
      title: 'Categories',
      items: [
        { id: 'electronics', label: 'Elektronik', count: 24 },
        { id: 'fashion', label: 'Fashion', count: 12 },
        { id: 'furniture', label: 'Furniture', count: 8 },
      ],
    },
    {
      title: 'Availability',
      items: [{ id: 'inStock', label: 'Ada Stok', count: 24 }],
    },
    {
      title: 'Brand',
      items: [
        { id: 'brandA', label: 'Brand A', count: 15 },
        { id: 'brandB', label: 'Brand B', count: 10 },
      ],
    },
  ];

  return (
    <div className="bg-white px-6 py-3 space-y-8">
      {sections.map((section, index) => (
        <div key={index}>
          {/* Section Header */}
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold text-biruTua">{section.title}</h2>
            <button className="text-sm text-biruTua hover:text-blue-600 transition">Reset</button>
          </div>

          {/* Section Items */}
          <div className="space-y-4">
            {section.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id={item.id} />
                  <label htmlFor={item.id} className="text-sm font-medium text-gray-700 leading-none cursor-pointer">
                    {item.label}
                  </label>
                </div>
                <p className="text-gray-500 text-sm">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterControls;
