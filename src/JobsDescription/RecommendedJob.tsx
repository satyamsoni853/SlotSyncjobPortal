import React from 'react';

const RecommendedJob = () => {
  const job = {
    title: 'Frontend Developer',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    skills: ['React', 'JavaScript', 'CSS'],
    logo: 'https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-4.png',
  };

  return (
    <div className="bg-white/95 dark:bg-gray-900 border border-faded-jade-200/70 dark:border-gray-700 rounded-2xl shadow-[0px_15px_35px_rgba(19,121,111,0.1)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] p-6 text-gray-700 dark:text-gray-200 transition-colors duration-200">
      <div className="flex items-center gap-4 mb-4">
        <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 rounded-full bg-white p-1" />
        <div>
          <h3 className="text-lg font-semibold text-faded-jade-700 dark:text-white">{job.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{job.location}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-faded-jade-100/80 dark:bg-gray-800 text-faded-jade-700 dark:text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-2.5 rounded-lg transition-colors">
        Apply Now
      </button>
    </div>
  );
};

export default RecommendedJob;
