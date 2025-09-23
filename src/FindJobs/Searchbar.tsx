// src/components/Searchbar.tsx

import React, { useState } from 'react';
import MultiInput from './MultiInput';
import { dropdownData } from '../JobPortalResources/Data/JobsData';
import { Button } from '@mantine/core';

import {
  IconBriefcase,
  IconMapPin,
  IconHourglassHigh,
  IconTools,
  IconSearch,
} from '@tabler/icons-react';

const iconMap: { [key: string]: React.ReactNode } = {
  BriefcaseIcon: <IconBriefcase size={20} className="text-gray-400" />,
  MapPinIcon: <IconMapPin size={20} className="text-gray-400" />,
  HourglassIcon: <IconHourglassHigh size={20} className="text-gray-400" />,
  ToolsIcon: <IconTools size={20} className="text-gray-400" />,
};

function Searchbar() {
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

  const handleFilterChange = (filterName: string, value: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    alert('Search initiated! Check the console for the filter data.');
  };

  return (
    // Main container with a softer background and a subtle border
    <div className="bg-gray-900 p-5 rounded-xl border border-gray-700/50">
      {/* Grid layout with vertical alignment at the end (bottom) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-5 items-end">
        
        {/* Map over the 4 filter inputs */}
        {dropdownData.map((filterProps) => {
          const { icon, ...restOfFilterProps } = filterProps;
          return (
            <div key={restOfFilterProps.name}>
              <MultiInput
                icon={iconMap[icon as string]}
                {...restOfFilterProps}
                value={filters[restOfFilterProps.name] || []}
                onChange={(value) => handleFilterChange(restOfFilterProps.name, value)}
              />
            </div>
          );
        })}

        {/* Search Button takes the last column */}
        <Button
          onClick={handleSearch}
          fullWidth
          size="sm" // Use a smaller height that matches the inputs
          style={{ height: '42px' }}
          leftSection={<IconSearch size={20} />}
          variant="gradient" // A gradient button looks much better
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          className="shadow-lg"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default Searchbar;