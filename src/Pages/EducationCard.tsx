import React from 'react';
import { IconSchool, IconCalendar } from '@tabler/icons-react';
function EducationCard({
  logoUrl,
  school,
  degree,
  fieldOfStudy,
  startDate,
  endDate,
}: any) {
  return (
    <div className="flex items-start space-x-4 p-5 bg-faded-jade-100/80 dark:bg-zinc-800 rounded-lg shadow-md border border-faded-jade-200/70 dark:border-zinc-700 transition-colors duration-200">
      <img src={logoUrl} alt={`${school} logo`} className="w-12 h-12 object-contain rounded-md mt-1" />
      <div className="flex-1 text-gray-700 dark:text-gray-200">
        <h3 className="text-lg font-semibold text-faded-jade-700 dark:text-white">{school}</h3>
        <p className="text-md text-gray-600 dark:text-gray-300">{degree}, {fieldOfStudy}</p>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
          <IconCalendar size={16} className="mr-1.5 text-faded-jade-500" />
          <span>{startDate} - {endDate}</span>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;