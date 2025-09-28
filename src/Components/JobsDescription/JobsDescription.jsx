import React from 'react';
import { IconMapPin, IconBriefcase, IconSchool, IconCurrencyDollar } from '@tabler/icons-react';
import RecommendedJob from './RecommendedJob';

const JobsDescription = () => {
  return (
    <section className="w-full flex items-start justify-center p-4 md:p-8">
      <div className="flex w-full max-w-6xl gap-8 flex-col lg:flex-row">
        <div className="max-w-4xl w-full bg-white/95 dark:bg-gray-900 rounded-2xl shadow-[0px_20px_40px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] overflow-hidden border border-faded-jade-200/70 dark:border-gray-700 transition-colors duration-200">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-faded-jade-700 dark:text-white">Software Engineer</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">Google</p>
              </div>
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="Company Logo"
                className="w-16 h-16 rounded-full object-cover border border-faded-jade-200 dark:border-gray-700"
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <IconMapPin size={20} className="mr-2 text-faded-jade-500" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center">
                <IconBriefcase size={20} className="mr-2 text-faded-jade-500" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center">
                <IconSchool size={20} className="mr-2 text-faded-jade-500" />
                <span>Mid-Senior Level</span>
              </div>
              <div className="flex items-center">
                <IconCurrencyDollar size={20} className="mr-2 text-faded-jade-500" />
                <span>$120,000 - $150,000</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-faded-jade-700 dark:text-white mb-4">About the Job</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We are looking for a passionate Software Engineer to design, develop, and install software solutions. The successful candidate will be able to build high-quality, innovative, and fully performing software in compliance with coding standards and technical design.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-faded-jade-700 dark:text-white mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-faded-jade-100/80 dark:bg-gray-800 text-faded-jade-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <h2 className="text-2xl font-bold text-faded-jade-700 dark:text-white">Recommended Jobs</h2>
          <RecommendedJob />
        </div>
      </div>
    </section>
  );
};

export default JobsDescription;
