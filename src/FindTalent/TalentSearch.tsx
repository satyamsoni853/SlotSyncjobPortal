import React, { useState } from 'react';
import { Button } from '@mantine/core';
import {
  IconSearch,
  IconMapPin,
  IconRecharging,
} from '@tabler/icons-react';
import MultiInput from '../FindJobs/MultiInput'; // Assuming this component exists

// --- 1. Your data is used directly ---
const searchFields = [
    { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Skills", icon: IconRecharging, options: ["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"] },
];

function TalentSearchbar() {
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

  const handleFilterChange = (filterName: string, value: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleSearch = () => {
    console.log('Searching for talent with filters:', filters);
    alert('Search initiated! Check the console for the filter data.');
  };

  return (
    <div className="bg-gray-900 p-5 rounded-xl border border-gray-700/50">
      {/* --- 2. The layout is now a 4-column grid for 3 inputs and a button --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 items-end">
        
        {/* Map over the 3 filter inputs */}
        {searchFields.map((field) => {
          // Generate a unique name for state management, e.g., "Job Title" -> "jobtitle"
          const filterName = field.title.replace(/\s+/g, '').toLowerCase();
          
          return (
            <div key={field.title}>
              {/* --- 3. Component props are now matched to your data structure --- */}
              <MultiInput
                // The icon component is passed directly
                icon={React.createElement(field.icon, { size: 20, className: "text-gray-400" })}
                // `label` is taken from `field.title`
                label={field.title}
                // `data` is taken from `field.options`
                data={field.options}
                placeholder={`e.g., ${field.options[0]}`}
                value={filters[filterName] || []}
                onChange={(value: string[]) => handleFilterChange(filterName, value)}
              />
            </div>
          );
        })}

        {/* Search Button takes the last column */}
        <Button
          onClick={handleSearch}
          fullWidth
          size="sm"
          style={{ height: '42px' }}
          leftSection={<IconSearch size={20} />}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          className="shadow-lg"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default TalentSearchbar;