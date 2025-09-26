import React from 'react';
import { IconCalendar, IconMapPin } from '@tabler/icons-react';

function ExperienceCard() {
  // Dummy data is now hardcoded inside the component
  const logoUrl = 'https://via.placeholder.com/48/cccccc/1a1a1a?text=Logo'; // A generic placeholder logo

  return (
    <div className="flex items-start space-x-4 p-5 bg-zinc-800 rounded-lg shadow-md">
      {/* Company Logo */}
      <img 
        src={logoUrl} 
        alt="Company logo" 
        className="w-12 h-12 object-contain rounded-md mt-1"
      />
      
      <div className="flex-1">
        {/* Job Title */}
        <h3 className="text-lg font-semibold text-white">Senior Software Engineer</h3>
        
        {/* Company Name */}
        <p className="text-md text-gray-300">Innovatech Solutions</p>
        
        {/* Duration and Location */}
        <div className="flex flex-col sm:flex-row text-sm text-gray-400 mt-1 space-y-1 sm:space-y-0 sm:space-x-4">
          <span className="flex items-center">
            <IconCalendar size={16} className="mr-1.5" />
            Jan 2022 - Present
          </span>
          <span className="flex items-center">
            <IconMapPin size={16} className="mr-1.5" />
            San Francisco, CA
          </span>
        </div>
        
        {/* Job Description */}
        <p className="text-gray-300 mt-3 text-base leading-relaxed">
          Leading the development of a new cloud-native platform using React, Node.js, and Kubernetes. Responsible for architecting microservices, improving system performance, and mentoring a team of junior developers.
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;