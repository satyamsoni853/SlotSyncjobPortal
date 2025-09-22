import React from 'react';
// UPDATED: Icons are now specific to IT roles
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

// UPDATED: The data array now contains only IT sector jobs
const jobCategories = [
  {
    icon: <IconCode size={40} className="text-cyan-400" />,
    title: 'Software Development',
    description: 'Build scalable software and applications.',
    jobsAvailable: '6.2k Jobs Available',
  },
  {
    icon: <IconDeviceDesktopAnalytics size={40} className="text-cyan-400" />,
    title: 'UI/UX Design',
    description: 'Create intuitive and beautiful user interfaces.',
    jobsAvailable: '2.1k Jobs Available',
  },
  {
    icon: <IconChartInfographic size={40} className="text-cyan-400" />,
    title: 'Data Science & Analytics',
    description: 'Turn raw data into actionable insights.',
    jobsAvailable: '3.5k Jobs Available',
  },
  {
    icon: <IconCloudCode size={40} className="text-cyan-400" />,
    title: 'Cloud & DevOps',
    description: 'Manage and scale infrastructure in the cloud.',
    jobsAvailable: '4.0k Jobs Available',
  },
   {
    icon: <IconShieldLock size={40} className="text-cyan-400" />,
    title: 'Cybersecurity',
    description: 'Protect systems and data from cyber threats.',
    jobsAvailable: '2.8k Jobs Available',
  },
   {
    icon: <IconClipboardList size={40} className="text-cyan-400" />,
    title: 'Product Management',
    description: 'Define and guide the product lifecycle.',
    jobsAvailable: '1.9k Jobs Available',
  },
   {
    icon: <IconDeviceMobile size={40} className="text-cyan-400" />,
    title: 'Mobile Development',
    description: 'Build applications for iOS and Android.',
    jobsAvailable: '3.1k Jobs Available',
  },
   {
    icon: <IconBug size={40} className="text-cyan-400" />,
    title: 'QA & Testing',
    description: 'Ensure software quality and reliability.',
    jobsAvailable: '1.7k Jobs Available',
  },
];

function JobCategory() {
  return (
    // Section with a slightly different dark background for contrast
    <section className="bg-gray-900 text-white py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Browse by <span className="text-cyan-400">Job</span> Category
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Explore a wide range of job categories to find the role that truly fits your skills and passion.
          </p>
        </div>

        {/* Responsive Grid for Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobCategories.map((category, index) => (
            <div 
              key={index}
              // Card styling with hover effects
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 cursor-pointer
                         transition-all duration-300 ease-in-out 
                         hover:-translate-y-2 hover:border-cyan-500"
            >
              {category.icon}
              <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
              <p className="mt-2 text-gray-400">{category.description}</p>
              <p className="mt-6 font-semibold text-cyan-400">{category.jobsAvailable}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default JobCategory;