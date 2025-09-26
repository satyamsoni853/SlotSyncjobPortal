import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';

function CertificationCard() {
  const logoUrl = 'https://via.placeholder.com/48/cccccc/1a1a1a?text=AWS';
  const credentialUrl = 'https://aws.amazon.com/certification/certified-solutions-architect-associate/';

  return (
    <div className="flex items-start space-x-4 p-5 bg-faded-jade-100/80 dark:bg-zinc-800 rounded-lg shadow-md border border-faded-jade-200/70 dark:border-zinc-700 transition-colors duration-200">
      <img
        src={logoUrl}
        alt="AWS logo"
        className="w-12 h-12 object-contain rounded-md mt-1"
      />

      <div className="flex-1 text-gray-700 dark:text-gray-200">
        <h3 className="text-lg font-semibold text-faded-jade-700 dark:text-white">
          AWS Certified Solutions Architect - Associate
        </h3>
        <p className="text-md text-gray-600 dark:text-gray-300">Amazon Web Services (AWS)</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Issued Sep 2024</p>

        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-3 px-3 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-md hover:from-teal-600 hover:to-cyan-600 transition-colors"
        >
          Show credential
          <IconExternalLink size={16} className="ml-1.5" />
        </a>
      </div>
    </div>
  );
}

export default CertificationCard;
