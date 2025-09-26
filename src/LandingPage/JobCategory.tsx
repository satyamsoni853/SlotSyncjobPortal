import React from 'react';
import {
  IconCode,
  IconDeviceDesktopAnalytics,
  IconChartInfographic,
  IconCloudCode,
  IconShieldLock,
  IconClipboardList,
  IconDeviceMobile,
  IconBug,
} from '@tabler/icons-react';

const jobCategories = [
  {
    icon: <IconCode size={40} className="text-faded-jade-500" />,
    title: 'Software Development',
    description: 'Build scalable software and applications.',
    jobsAvailable: '6.2k Jobs Available',
  },
  {
    icon: <IconDeviceDesktopAnalytics size={40} className="text-faded-jade-500" />,
    title: 'UI/UX Design',
    description: 'Create intuitive and beautiful user interfaces.',
    jobsAvailable: '2.1k Jobs Available',
  },
  {
    icon: <IconChartInfographic size={40} className="text-faded-jade-500" />,
    title: 'Data Science & Analytics',
    description: 'Turn raw data into actionable insights.',
    jobsAvailable: '3.5k Jobs Available',
  },
  {
    icon: <IconCloudCode size={40} className="text-faded-jade-500" />,
    title: 'Cloud & DevOps',
    description: 'Manage and scale infrastructure in the cloud.',
    jobsAvailable: '4.0k Jobs Available',
  },
  {
    icon: <IconShieldLock size={40} className="text-faded-jade-500" />,
    title: 'Cybersecurity',
    description: 'Protect systems and data from cyber threats.',
    jobsAvailable: '2.8k Jobs Available',
  },
  {
    icon: <IconClipboardList size={40} className="text-faded-jade-500" />,
    title: 'Product Management',
    description: 'Define and guide the product lifecycle.',
    jobsAvailable: '1.9k Jobs Available',
  },
  {
    icon: <IconDeviceMobile size={40} className="text-faded-jade-500" />,
    title: 'Mobile Development',
    description: 'Build applications for iOS and Android.',
    jobsAvailable: '3.1k Jobs Available',
  },
  {
    icon: <IconBug size={40} className="text-faded-jade-500" />,
    title: 'QA & Testing',
    description: 'Ensure software quality and reliability.',
    jobsAvailable: '1.7k Jobs Available',
  },
];

function JobCategory() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-20 transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Browse by <span className="text-faded-jade-600 dark:text-faded-jade-400">Job</span> Category
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore a wide range of job categories to find the role that truly fits your skills and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="bg-faded-jade-50/90 dark:bg-gray-900 p-6 rounded-lg border border-faded-jade-200/70 dark:border-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-faded-jade-500/80 dark:hover:border-cyan-400"
            >
              {category.icon}
              <h3 className="mt-4 text-xl font-bold text-faded-jade-700 dark:text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{category.description}</p>
              <p className="mt-6 font-semibold text-faded-jade-600 dark:text-faded-jade-400">
                {category.jobsAvailable}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobCategory;
