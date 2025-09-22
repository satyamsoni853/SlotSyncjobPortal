import React from 'react';
// Icons for each step in the process and for the feature list
import { 
  IconUserPlus,
  IconSearch,
  IconSend,
  IconCircleCheck
} from '@tabler/icons-react';
import Girlimage from '../JobPortalResources/Working/Girl.png';
import avatar from '../JobPortalResources/avatar1.png';

// Data for the steps - easy to manage and update
const workingSteps = [
  {
    icon: <IconUserPlus size={40} className="text-cyan-400" />,
    title: 'Create Your Profile',
    description: 'Sign up and build your profile to showcase your skills, experience, and projects to potential employers.',
  },
  {
    icon: <IconSearch size={40} className="text-cyan-400" />,
    title: 'Find Your Perfect Job',
    description: 'Use our advanced search filters to browse thousands of IT job listings and find roles that match your expertise.',
  },
  {
    icon: <IconSend size={40} className="text-cyan-400" />,
    title: 'Apply & Get Hired',
    description: 'Apply directly to jobs with just a few clicks. Track your application status and connect with top companies.',
  },
];

function Working() {
  return (
    // Using a React Fragment to return multiple sections
    <>
      {/* "How It Works" Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It <span className="text-cyan-400">Works</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              A simple, streamlined process to connect you with your next opportunity in just three easy steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {workingSteps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-gray-800 p-8 rounded-lg border border-gray-700"
              >
                <div className="absolute top-4 right-6 text-8xl font-bold text-white/5">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Build Your Resume" CTA Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Side: Image Composition (Previously on the Right) */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative">
                <img src={Girlimage} alt="Person building a profile" className="w-full max-w-md mx-auto rounded-lg" />
                
                {/* Floating Profile Completion "Glass" Card */}
                <div className="absolute -bottom-8 -left-4 sm:-left-8 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20 w-64">
                    <div className="flex items-center gap-3">
                        <img src={avatar} alt="User avatar" className="w-12 h-12 rounded-full border-2 border-cyan-400" />
                        <div>
                            <p className="font-bold text-white">Complete your profile</p>
                            <p className="text-sm text-gray-300">70% Completed</p>
                        </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-3">
                        <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                </div>
              </div>
            </div>

            {/* Right Side: Text Content (Previously on the Left) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                Build a Profile That <span className="text-cyan-400">Gets Noticed</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Create a professional profile in minutes. Highlight your skills and experience to catch the eye of top employers.
              </p>
              <ul className="mt-8 space-y-4 text-left">
                <li className="flex items-start">
                  <IconCircleCheck className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Showcase your projects, skills, and career history.</span>
                </li>
                <li className="flex items-start">
                  <IconCircleCheck className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Get matched with jobs that fit your unique profile.</span>
                </li>
                <li className="flex items-start">
                  <IconCircleCheck className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Our step-by-step guide makes profile creation easy.</span>
                </li>
              </ul>
              <button className="mt-10 px-8 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105">
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