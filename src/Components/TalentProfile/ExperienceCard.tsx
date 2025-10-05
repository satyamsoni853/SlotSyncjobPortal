import React from 'react';
import { IconCalendar, IconMapPin } from '@tabler/icons-react';

function ExperienceCard({
  logoUrl,
  title,
  company,
  startDate,
  endDate,
  location,
  description,
}: any) {
  return (
    <div className="flex items-start space-x-4 p-5 bg-faded-jade-100/80 dark:bg-zinc-800 rounded-lg shadow-md border border-faded-jade-200/70 dark:border-zinc-700 transition-colors duration-200">
      <img
        src={logoUrl}
        alt="Company logo"
        className="w-12 h-12 object-contain rounded-md mt-1"
      />

      <div className="flex-1 text-gray-700 dark:text-gray-200">
        <h3 className="text-lg font-semibold text-faded-jade-700 dark:text-white">{title}</h3>
        <p className="text-md text-gray-600 dark:text-gray-300">{company}</p>

        <div className="flex flex-col sm:flex-row text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1 sm:space-y-0 sm:space-x-4">
          <span className="flex items-center">
            <IconCalendar size={16} className="mr-1.5 text-faded-jade-500" />
            {startDate} - {endDate}
          </span>
          <span className="flex items-center">
            <IconMapPin size={16} className="mr-1.5 text-faded-jade-500" />
            {location}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mt-3 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
