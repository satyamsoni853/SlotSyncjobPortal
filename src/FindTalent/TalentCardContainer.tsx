import React from 'react';
import TalentCard from './TalentCard';

import { talents } from '../JobPortalResources/Data/TalentData';

import avatar from '../JobPortalResources/avatar.png';
import avatar1 from '../JobPortalResources/avatar1.png';
import avatar2 from '../JobPortalResources/avatar2.png';

const avatarMap: { [key: string]: string } = {
  avatar: avatar,
  avatar1: avatar1,
  avatar2: avatar2,
};

function TalentCardContainer() {
  return (
    <section className="p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-faded-jade-700 dark:text-white">
          Find Your Next Hire
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Browse through our curated list of top-tier professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} image={avatarMap[talent.image]} />
        ))}
      </div>
    </section>
  );
}

export default TalentCardContainer;
