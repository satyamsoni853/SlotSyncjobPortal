import React from 'react';
import { 
  IconCurrencyRupee, 
  IconMapPin, 
  IconExternalLink, 
  IconMessageCircle2 
} from '@tabler/icons-react';

// Assume you have these images in your project
import AvatarJarrod from '../JobPortalResources/avatar.png';
import AvatarAisha from '../JobPortalResources/avatar2.png';

// --- Data for the cards is now inside this file ---
const talentData = [
  {
    id: 1,
    avatar: AvatarJarrod,
    name: 'Jarrod Wood',
    title: 'Software Engineer at Google',
    summary: 'A passionate Software Engineer specializing in building scalable and high-performance applications by integrating front-end and back-end technologies like React and SpringBoot.',
    topSkills: ['REACT', 'SPRINGBOOT', 'MONGODB'],
    ctc: '₹48 - 60LPA',
    location: 'New York, United States'
  },
  {
    id: 2,
    avatar: AvatarAisha,
    name: 'Aisha Khan',
    title: 'Senior UX Designer at Nexus Creative',
    summary: 'A creative and user-centric UX designer with over 8 years of experience in crafting intuitive and engaging digital experiences to bridge user needs and business goals.',
    topSkills: ['FIGMA', 'USER RESEARCH', 'WIREFRAMING'],
    ctc: '₹35 - 50LPA',
    location: 'Bengaluru, India'
  }
];

// This component now renders the full list of cards
function TalentCard() {
  return (
    <div className=" bg-zinc-900 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col justify-center gap-8">
        
        {/* We map over the data array directly inside this component */}
        {talentData.map((talent) => (
          // The JSX for each card is rendered here
          <div key={talent.id} className="max-w-sm w-full bg-zinc-800/90 border border-zinc-700 rounded-2xl shadow-lg p-6 text-gray-300 font-sans flex flex-col">
            
            {/* --- Header Section --- */}
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={talent.avatar} 
                alt={talent.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-zinc-600"
              />
              <div>
                <h1 className="text-xl font-bold text-white">{talent.name}</h1>
                <p className="text-sm text-gray-400">{talent.title}</p>
              </div>
            </div>

            {/* --- About Section --- */}
            <p className="text-sm leading-relaxed mb-5 flex-grow">
              {talent.summary}
            </p>

            {/* --- Top Skills Section --- */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-400 mb-2">Top Skills:</h2>
              <div className="flex flex-wrap gap-2">
                {talent.topSkills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-xs font-semibold text-cyan-400 border border-cyan-400/50 rounded-full px-3 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* --- Details Section (CTC & Location) --- */}
            <div className="grid grid-cols-2 gap-4 mb-6 border-t border-zinc-700 pt-5">
              <div className="flex items-start space-x-2">
                <IconCurrencyRupee className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-xs text-gray-400">Expected CTC</h3>
                  <p className="text-md font-semibold text-white">{talent.ctc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <IconMapPin className="text-blue-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-xs text-gray-400">Location</h3>
                  <p className="text-md font-semibold text-white">{talent.location}</p>
                </div>
              </div>
            </div>
            
            {/* --- Action Buttons Section --- */}
            <div className="flex flex-col space-y-3 mt-auto">
              <button className="flex items-center justify-center w-full p-2.5 bg-zinc-700/50 text-white rounded-lg hover:bg-zinc-700 transition-colors font-semibold">
                <IconExternalLink size={18} className="mr-2" />
                View Full Profile
              </button>
              <button className="flex items-center justify-center w-full p-2.5 bg-zinc-700/50 text-white rounded-lg hover:bg-zinc-700 transition-colors font-semibold">
                <IconMessageCircle2 size={18} className="mr-2" />
                Message
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default TalentCard;