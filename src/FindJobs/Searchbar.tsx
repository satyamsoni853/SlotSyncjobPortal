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
  BriefcaseIcon: <IconBriefcase size={20} className="text-faded-jade-500 dark:text-gray-300" />,
  MapPinIcon: <IconMapPin size={20} className="text-faded-jade-500 dark:text-gray-300" />,
  HourglassIcon: <IconHourglassHigh size={20} className="text-faded-jade-500 dark:text-gray-300" />,
  ToolsIcon: <IconTools size={20} className="text-faded-jade-500 dark:text-gray-300" />,
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
    <section className="bg-white/80 dark:bg-gray-900 p-5 md:p-6 rounded-2xl border border-faded-jade-200/70 dark:border-gray-700/60 shadow-[0px_10px_30px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors duration-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-5 items-end">
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

        <Button
          onClick={handleSearch}
          fullWidth
          size="sm"
          
          leftSection={<IconSearch size={20} />}
          variant="gradient"
          gradient={{ from: 'teal', to: 'cyan', deg: 90 }}
          className="shadow-lg"
        >
          Search
        </Button>
      </div>
    </section>
  );
}

export default Searchbar;
