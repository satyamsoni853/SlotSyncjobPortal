import React, { useMemo, useState } from 'react';
import { Button } from '@mantine/core';
import {
  IconMapPin,
  IconRecharging,
  IconSearch,
} from '@tabler/icons-react';
import MultiInput from '../FindJobs/MultiInput';

type SearchField = {
  title: string;
  icon: React.ElementType;
  options: string[];
  filterKey: string;
};

const searchFields: SearchField[] = [
  {
    title: 'Job Title',
    icon: IconSearch,
    options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'],
    filterKey: 'jobTitle',
  },
  {
    title: 'Location',
    icon: IconMapPin,
    options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'],
    filterKey: 'location',
  },
  {
    title: 'Skills',
    icon: IconRecharging,
    options: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Node.js', 'Python', 'Java', 'Ruby', 'PHP', 'SQL', 'MongoDB', 'PostgreSQL', 'Git', 'API Development', 'Testing and Debugging', 'Agile Methodologies', 'DevOps', 'AWS', 'Azure', 'Google Cloud'],
    filterKey: 'skills',
  },
];

const initialFilters = searchFields.reduce<Record<string, string[]>>((accumulator, field) => {
  accumulator[field.filterKey] = [];
  return accumulator;
}, {});

function TalentSearchBar() {
  const [filters, setFilters] = useState(initialFilters);

  const activeFilters = useMemo(
    () => Object.entries(filters).filter(([, value]) => value.length > 0),
    [filters],
  );

  const handleFilterChange = (filterName: string, value: string[]) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [filterName]: value,
    }));
  };

  const handleSearch = () => {
    console.log('Searching for talent with filters:', filters);
    alert('Search initiated! Check the console for the filter data.');
  };

  return (
    <section className="bg-white/80 dark:bg-gray-900 p-5 md:p-6 rounded-2xl border border-faded-jade-200/70 dark:border-gray-700/60 shadow-[0px_10px_30px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors duration-200 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 items-end">
        {searchFields.map((field) => {
          const IconComponent = field.icon;
          const placeholder = `e.g., ${field.options[0]}`;

          return (
            <MultiInput
              key={field.filterKey}
              icon={<IconComponent size={20} className="text-faded-jade-500 dark:text-gray-300" />}
              label={field.title}
              data={field.options}
              placeholder={placeholder}
              value={filters[field.filterKey]}
              onChange={(value) => handleFilterChange(field.filterKey, value as string[])}
            />
          );
        })}

        <Button
          onClick={handleSearch}
          fullWidth
          size="sm"
          style={{ height: '42px' }}
          leftSection={<IconSearch size={20} />}
          variant="gradient"
          gradient={{ from: 'teal', to: 'cyan', deg: 90 }}
          className="shadow-lg"
        >
          Search
        </Button>
      </div>

      {activeFilters.length > 0 && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Active filters:{' '}
          {activeFilters
            .map(([key, value]) => `${key}: ${value.join(', ')}`)
            .join(' | ')}
        </p>
      )}
    </section>
  );
}

export default TalentSearchBar;
