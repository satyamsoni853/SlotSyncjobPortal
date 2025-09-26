import React, { useState, useRef, useEffect } from 'react';
import { IconChevronDown, IconBriefcase, IconMapPin, IconUser, IconFileDescription, IconAward, IconCoin } from '@tabler/icons-react';

// The main UploadJob form component now contains all logic and data directly.
function UploadJob() {
  // State for the form fields
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');

  // --- Logic for the custom "Job Title" dropdown is now directly inside this component ---
  const [isJobTitleOpen, setIsJobTitleOpen] = useState(false);
  const jobTitleRef = useRef(null);
  const jobTitleOptions = ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'];
  const jobTitlePlaceholder = "Select a Job Title";

  // Effect to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (jobTitleRef.current && !(jobTitleRef.current as HTMLElement).contains(event.target)) {
        setIsJobTitleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleJobTitleSelect = (option: React.SetStateAction<string>) => {
    setJobTitle(option);
    setIsJobTitleOpen(false);
  };
  // --- End of dropdown logic ---

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { jobTitle, companyName, location, skills, jobDescription, experience, salary };
    console.log("Form Submitted:", formData);
    alert('Job Submitted! Check the console for the form data.');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-900 rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Post a New Job</h1>
        <p className="text-gray-400 mb-8">Fill out the details below to publish a job opening.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* --- Job Title Dropdown (Direct Implementation) --- */}
          <div className="relative" ref={jobTitleRef}>
            <label className="block mb-2 text-sm font-medium text-gray-300">Job Title</label>
            <button
              type="button"
              onClick={() => setIsJobTitleOpen(!isJobTitleOpen)}
              className="flex items-center justify-between w-full p-2.5 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className={jobTitle ? 'text-white' : 'text-gray-400'}>
                {jobTitle || jobTitlePlaceholder}
              </span>
              <IconChevronDown size={20} className={`transition-transform ${isJobTitleOpen ? 'rotate-180' : ''}`} />
            </button>

            {isJobTitleOpen && (
              <div className="absolute z-10 w-full mt-1 bg-zinc-700 border border-zinc-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
                <ul className="py-1">
                  {jobTitleOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleJobTitleSelect(option)}
                      className="px-4 py-2 text-white hover:bg-blue-600 cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Company Name Input */}
          <div>
            <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-300">Company Name</label>
            <div className="relative">
              <IconBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g., Google, Microsoft"
                className="w-full pl-10 p-2.5 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Location Input */}
          <div>
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-300">Location</label>
            <div className="relative">
              <IconMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., New York, United States"
                className="w-full pl-10 p-2.5 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Skills Input */}
          <div>
            <label htmlFor="skills" className="block mb-2 text-sm font-medium text-gray-300">Skills</label>
            <div className="relative">
              <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g., React, Node.js, Python"
                className="w-full pl-10 p-2.5 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Job Description Input */}
          <div>
            <label htmlFor="jobDescription" className="block mb-2 text-sm font-medium text-gray-300">Job Description</label>
            <div className="relative">
              <IconFileDescription className="absolute left-3 top-3 text-gray-400" size={20} />
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Describe the job responsibilities, requirements, etc."
                className="w-full pl-10 p-2.5 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>
          </div>

          {/* Experience Input */}
          <div>
            <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-300">Experience</label>
            <div className="relative">
              <IconAward className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g., 2+ years"
                className="w-full pl-10 p-2.5 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Salary Input */}
          <div>
            <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-300">Salary</label>
            <div className="relative">
              <IconCoin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="e.g., $80,000 - $100,000"
                className="w-full pl-10 p-2.5 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
         
          
          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadJob;