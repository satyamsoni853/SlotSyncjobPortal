import React from 'react';
import { IconBriefcase, IconMapPin } from '@tabler/icons-react';

import CertificationCard from './CertificationCard';


// Import your local images with the updated avatar path
import BannerImage from '../JobPortalResources/Profile/banner.jpg';
import AvatarImage from '../JobPortalResources/avatar.png';
import ExperienceCard from './ExperienceCard';

function Profile() {
  return (
    // The card itself. 'mx-auto' centers it within the 1600px container.
  <div>

      <div className="max-w-[1000px] mx-auto bg-grey-900 rounded-2xl shadow-2xl overflow-hidden text-gray-300">
      
      {/* Header with Banner and Avatar */}
      <div className="relative">
        <img 
          className="w-full h-48 object-cover"
          src={BannerImage} // Use the imported banner image
          alt="Banner" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <img 
          className="w-32 h-32 rounded-full border-4 border-zinc-800 absolute -bottom-16 left-6"
          src={AvatarImage} // Use the updated imported avatar image
          alt="User Avatar" 
        />
      </div>

      {/* Profile Body */}
      <div className="p-6 pt-20">
        
        {/* Name and Message Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-white">Jarrod Wood</h1>
          <button className="bg-yellow-500 text-zinc-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
            Message
          </button>
        </div>

        {/* Job and Location Details */}
        <div className="space-y-1 mb-6 text-gray-400">
          <p className="flex items-center">
            <IconBriefcase size={18} className="mr-2" />
            Software Engineer • Google
          </p>
          <p className="flex items-center">
            <IconMapPin size={18} className="mr-2" />
            New York, United States
          </p>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2 pb-1 border-b border-zinc-600">
            About
          </h2>
          <p className="text-base leading-relaxed">
            As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful products that make a difference.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4 pb-1 border-b border-zinc-600">
            Skills
          </h2>
          <div className="pt-4 flex flex-wrap gap-2">
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">React</span>
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">SpringBoot</span>
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">Kubernetes</span>
            <span className="bg-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">Google Cloud</span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4 pb-1 border-b border-zinc-600">
            Experience
          </h2>
          <div className="pt-4">
            <ExperienceCard />
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4 pb-1 border-b border-zinc-600">
            Certifications
          </h2>
          <div className="pt-4">
            <CertificationCard />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Profile;