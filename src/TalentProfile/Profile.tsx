import React from 'react';
import { IconBriefcase, IconMapPin } from '@tabler/icons-react';

import CertificationCard from './CertificationCard';
import BannerImage from '../JobPortalResources/Profile/banner.jpg';
import AvatarImage from '../JobPortalResources/avatar.png';
import ExperienceCard from './ExperienceCard';

function Profile() {
  return (
    <div className="max-w-[1000px] mx-auto bg-white/95 dark:bg-zinc-900 rounded-2xl shadow-[0px_20px_40px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] overflow-hidden text-gray-700 dark:text-gray-300 border border-faded-jade-200/70 dark:border-zinc-700 transition-colors duration-200">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={BannerImage} alt="Banner" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <img
          className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-900 absolute -bottom-16 left-6"
          src={AvatarImage}
          alt="User Avatar"
        />
      </div>

      <div className="p-6 pt-20">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-faded-jade-700 dark:text-white">Jarrod Wood</h1>
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            Message
          </button>
        </div>

        <div className="space-y-1 mb-6 text-gray-600 dark:text-gray-300">
          <p className="flex items-center">
            <IconBriefcase size={18} className="mr-2 text-faded-jade-500" />
            Software Engineer @ Google
          </p>
          <p className="flex items-center">
            <IconMapPin size={18} className="mr-2 text-faded-jade-500" />
            New York, United States
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white mb-2 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            About
          </h2>
          <p className="text-base leading-relaxed">
            As a Software Engineer @ Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful products that make a difference.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            Skills
          </h2>
          <div className="pt-4 flex flex-wrap gap-2">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'SpringBoot', 'Kubernetes', 'Google Cloud'].map((skill) => (
              <span
                key={skill}
                className="bg-faded-jade-100/80 dark:bg-zinc-800 text-faded-jade-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            Experience
          </h2>
          <div className="pt-4">
            <ExperienceCard />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            Certifications
          </h2>
          <div className="pt-4">
            <CertificationCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
