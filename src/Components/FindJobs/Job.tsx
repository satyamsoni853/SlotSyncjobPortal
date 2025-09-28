import React from 'react';
import { Select, useMantineColorScheme } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import JobCard from './JobCard';
import { jobList } from '../../JobPortalResources/Data/JobsData';

function Job() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <section className="mt-8 space-y-6">
      <div className="bg-white/80 dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-6 rounded-2xl border border-faded-jade-200/70 dark:border-gray-700/60 shadow-[0px_10px_30px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] transition-colors duration-200">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-faded-jade-700 dark:text-white">Recommended Jobs</h2>
          <Select
            placeholder="Sort by"
            defaultValue="relevance"
            rightSection={<IconChevronDown size={16} />}
            data={[
              { value: 'relevance', label: 'Relevance' },
              { value: 'date_desc', label: 'Date (Newest)' },
              { value: 'date_asc', label: 'Date (Oldest)' },
              { value: 'salary_desc', label: 'Salary (High to Low)' },
              { value: 'salary_asc', label: 'Salary (Low to High)' },
              { value: 'experience_asc', label: 'Experience (Entry First)' },
            ]}
            styles={{
              input: {
                backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                borderColor: isDark ? '#4B5563' : '#D1D5DB',
                color: isDark ? '#F9FAFB' : '#1F2937',
              },
              dropdown: {
                backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                borderColor: isDark ? '#4B5563' : '#E2E8F0',
              },
              option: {
                '&[data-selected]': {
                  backgroundColor: isDark ? '#374151' : '#BAE6FD',
                  color: isDark ? '#F8FAFC' : '#0F172A',
                },
                '&[data-hovered]': {
                  backgroundColor: isDark ? '#4B5563' : '#E2E8F0',
                },
              },
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}

export default Job;
