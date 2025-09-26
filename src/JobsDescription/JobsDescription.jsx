import React from 'react';
import { IconMapPin, IconBriefcase, IconSchool, IconCurrencyDollar } from '@tabler/icons-react';
import RecommendedJob from './RecommendedJob';

const JobsDescription = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-start justify-center p-4">
      <div className="flex w-full max-w-6xl gap-8">
        <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-white">Software Engineer</h1>
                <p className="text-xl text-gray-400">Google</p>
              </div>
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="Company Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-400">
                <IconMapPin size={20} className="mr-2 text-blue-500" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center text-gray-400">
                <IconBriefcase size={20} className="mr-2 text-blue-500" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center text-gray-400">
                <IconSchool size={20} className="mr-2 text-blue-500" />
                <span>Mid-Senior Level</span>
              </div>
              <div className="flex items-center text-gray-400">
                  <IconCurrencyDollar size={20} className="mr-2 text-blue-500" />
                  <span>$120,000 - $150,000</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About the Job</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We are looking for a passionate Software Engineer to design, develop, and install software solutions. The successful candidate will be able to build high-quality, innovative, and fully performing software in compliance with coding standards and technical design.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">React</span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">Node.js</span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">TypeScript</span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">PostgreSQL</span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">AWS</span>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Recommended Jobs</h2>
          <RecommendedJob />
        </div>
      </div>
    </div>
  );
};

export default JobsDescription;
