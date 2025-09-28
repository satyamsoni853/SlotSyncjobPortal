import React from 'react';
import {
  IconCurrencyRupee,
  IconExternalLink,
  IconMapPin,
  IconMessageCircle2,
} from '@tabler/icons-react';

import AvatarJarrod from '../../JobPortalResources/avatar.png';  
import AvatarAisha from '../../JobPortalResources/avatar2.png';

interface Talent {
  id: number;
  avatar: string;
  name: string;
  title: string;
  summary: string;
  topSkills: string[];
  ctcRange: string;
  location: string;
}

const talentData: Talent[] = [
  {
    id: 1,
    avatar: AvatarJarrod,
    name: 'Jarrod Wood',
    title: 'Software Engineer at Google',
    summary:
      'Passionate about building scalable, high-performance applications by combining front-end and back-end technologies including React and Spring Boot.',
    topSkills: ['React', 'Spring Boot', 'MongoDB'],
    ctcRange: 'INR 48 - 60 LPA',
    location: 'New York, United States',
  },
  {
    id: 2,
    avatar: AvatarAisha,
    name: 'Aisha Khan',
    title: 'Senior UX Designer at Nexus Creative',
    summary:
      'User-centric designer with 8+ years crafting intuitive digital experiences that balance user needs with business goals.',
    topSkills: ['Figma', 'User Research', 'Wireframing'],
    ctcRange: 'INR 35 - 50 LPA',
    location: 'Bengaluru, India',
  },
];

function RecommendedTalent() {
  return (
    <aside className="flex flex-col items-center justify-center gap-8">
      {talentData.map((talent) => (
        <article
          key={talent.id}
          className="max-w-sm w-full bg-white/95 dark:bg-zinc-900 border border-faded-jade-200/70 dark:border-zinc-700 rounded-2xl shadow-[0px_15px_35px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] p-6 text-gray-700 dark:text-gray-200 flex flex-col transition-colors duration-200"
        >
          <header className="flex items-center space-x-4 mb-4">
            <img
              src={talent.avatar}
              alt={talent.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-faded-jade-200 dark:border-zinc-600"
            />
            <div>
              <h1 className="text-xl font-bold text-faded-jade-700 dark:text-white">{talent.name}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{talent.title}</p>
            </div>
          </header>

          <p className="text-sm leading-relaxed mb-5 flex-grow">
            {talent.summary}
          </p>

          <section className="mb-6">
            <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Top Skills</h2>
            <div className="flex flex-wrap gap-2">
              {talent.topSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold text-faded-jade-700 dark:text-cyan-300 border border-faded-jade-300/70 dark:border-cyan-400/40 rounded-full px-3 py-1 uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 mb-6 border-t border-faded-jade-200/70 dark:border-zinc-700 pt-5">
            <div className="flex items-start space-x-2">
              <IconCurrencyRupee className="text-emerald-500 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-xs text-gray-500 dark:text-gray-400">Expected CTC</h3>
                <p className="text-md font-semibold text-faded-jade-700 dark:text-white">{talent.ctcRange}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <IconMapPin className="text-blue-500 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-xs text-gray-500 dark:text-gray-400">Location</h3>
                <p className="text-md font-semibold text-faded-jade-700 dark:text-white">{talent.location}</p>
              </div>
            </div>
          </section>

          <div className="flex flex-col space-y-3 mt-auto">
            <button className="flex items-center justify-center w-full p-2.5 bg-faded-jade-100/80 dark:bg-zinc-800 text-faded-jade-700 dark:text-gray-200 rounded-lg hover:bg-faded-jade-100 dark:hover:bg-zinc-700 transition-colors font-semibold">
              <IconExternalLink size={18} className="mr-2" />
              View Full Profile
            </button>
            <button className="flex items-center justify-center w-full p-2.5 bg-faded-jade-100/80 dark:bg-zinc-800 text-faded-jade-700 dark:text-gray-200 rounded-lg hover:bg-faded-jade-100 dark:hover:bg-zinc-700 transition-colors font-semibold">
              <IconMessageCircle2 size={18} className="mr-2" />
              Message
            </button>
          </div>
        </article>
      ))}
    </aside>
  );
}

export default RecommendedTalent;
