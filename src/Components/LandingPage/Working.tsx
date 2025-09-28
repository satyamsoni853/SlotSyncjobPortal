import React from 'react';
import {
  IconUserPlus,
  IconSearch,
  IconSend,
  IconCircleCheck,
} from '@tabler/icons-react';
import Girlimage from '../../JobPortalResources/Working/Girl.png';
import avatar from '../../JobPortalResources/avatar1.png';



const workingSteps = [
  {
    icon: <IconUserPlus size={40} className="text-faded-jade-500" />,
    title: 'Create Your Profile',
    description:
      'Sign up and build your profile to showcase your skills, experience, and projects to potential employers.',
  },
  {
    icon: <IconSearch size={40} className="text-faded-jade-500" />,
    title: 'Find Your Perfect Job',
    description:
      'Use our advanced search filters to browse thousands of IT job listings and find roles that match your expertise.',
  },
  {
    icon: <IconSend size={40} className="text-faded-jade-500" />,
    title: 'Apply & Get Hired',
    description:
      'Apply directly to jobs with just a few clicks. Track your application status and connect with top companies.',
  },
];

function Working() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-20 transition-colors duration-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It <span className="text-faded-jade-600 dark:text-faded-jade-400">Works</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A simple, streamlined process to connect you with your next opportunity in just three easy steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {workingSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-faded-jade-50/90 dark:bg-gray-800 p-8 rounded-lg border border-faded-jade-200/70 dark:border-gray-700 shadow-[0px_15px_35px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] transition-colors"
              >
                <div className="absolute top-4 right-6 text-8xl font-bold text-faded-jade-200/40 dark:text-white/5">
                  0{index + 1}
                </div>
                <div className="relative z-10 space-y-4">
                  <div>{step.icon}</div>
                  <h3 className="text-2xl font-bold text-faded-jade-700 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-20 transition-colors duration-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative">
                <img src={Girlimage} alt="Person building a profile" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
                <div className="absolute -bottom-8 -left-4 sm:-left-8 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-faded-jade-200/70 dark:border-gray-700 rounded-2xl shadow-[0px_10px_30px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out hover:scale-105 w-64">
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt="User avatar" className="w-12 h-12 rounded-full border-2 border-faded-jade-500" />
                    <div>
                      <p className="font-bold text-faded-jade-700 dark:text-white">Complete your profile</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">70% Completed</p>
                    </div>
                  </div>
                  <div className="w-full bg-faded-jade-100 dark:bg-gray-700 rounded-full h-2 mt-3">
                    <div className="bg-faded-jade-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                Build a Profile That <span className="text-faded-jade-600 dark:text-faded-jade-400">Gets Noticed</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Create a professional profile in minutes. Highlight your skills and experience to catch the eye of top employers.
              </p>
              <ul className="mt-8 space-y-4 text-left text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <IconCircleCheck className="text-faded-jade-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Showcase your projects, skills, and career history.</span>
                </li>
                <li className="flex items-start">
                  <IconCircleCheck className="text-faded-jade-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Get matched with jobs that fit your unique profile.</span>
                </li>
                <li className="flex items-start">
                  <IconCircleCheck className="text-faded-jade-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Our step-by-step guide makes profile creation easy.</span>
                </li>
              </ul>
              <button className="mt-10 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-teal-600 hover:to-cyan-600 transition-transform duration-300 ease-in-out transform hover:scale-105">
                Complete Your Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Working;
