import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';

function CertificationCard() {
  // Dummy data is now hardcoded inside the component
  const logoUrl = 'https://via.placeholder.com/48/cccccc/1a1a1a?text=AWS'; // A generic placeholder logo

  return (
    <div className="flex items-start space-x-4 p-5 bg-zinc-800 rounded-lg shadow-md">
      {/* Issuing Organization Logo */}
      <img 
        src={logoUrl} 
        alt="Organization logo" 
        className="w-12 h-12 object-contain rounded-md mt-1"
      />
      
      <div className="flex-1">
        {/* Certification Name */}
        <h3 className="text-lg font-semibold text-white">AWS Certified Solutions Architect – Associate</h3>
        
        {/* Issuing Organization */}
        <p className="text-md text-gray-300">Amazon Web Services (AWS)</p>
        
        {/* Issued Date */}
        <p className="text-sm text-gray-400 mt-1">Issued Sep 2024</p>
        
        {/* Credential Link */}
        <a 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-3 px-3 py-1.5 text-sm font-semibold text-zinc-900 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
        >
          Show credential
          <IconExternalLink size={16} className="ml-1.5" />
        </a>
      </div>
    </div>
  );
}

export default CertificationCard;