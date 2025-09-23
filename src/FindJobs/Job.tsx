import React from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import JobCard from './JobCard';
import { jobList } from '../JobPortalResources/Data/JobsData';

function Job() {
  return (
    // Changed the background to bg-gray-900 and added padding
    <div>
      <div className="bg-gray-900 p-4 md:p-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Recommended Jobs</h2>
        <Select
          placeholder="Sort by"
          defaultValue="relevance"
          rightSection={<IconChevronDown size={16} />}
          // Added more sorting options to the data array
          data={[
            { value: 'relevance', label: 'Relevance' },
            { value: 'date_desc', label: 'Date (Newest)' },
            { value: 'date_asc', label: 'Date (Oldest)' },
            { value: 'salary_desc', label: 'Salary (High to Low)' },
            { value: 'salary_asc', label: 'Salary (Low to High)' },
            { value: 'experience_asc', label: 'Experience (Entry First)' },
          ]}
          // Custom styles to match the dark theme
          styles={{
            input: { backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#F9FAFB' },
            dropdown: { backgroundColor: '#1F2937', borderColor: '#4B5563' },
            option: {
              '&[data-selected]': { backgroundColor: '#374151' },
              '&[data-hovered]': { backgroundColor: '#4B5563' },
            },
          }}
        />
      </div>
    </div>
  
  {
    jobList.map((job, index) =>
      <JobCard key={index} {...job} />)
  }
    </div>
  );
}

export default Job;