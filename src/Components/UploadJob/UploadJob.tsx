import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  IconAward,
  IconBriefcase,
  IconChevronDown,
  IconCoin,
  IconFileDescription,
  IconMapPin,
  IconUser,
} from '@tabler/icons-react';

type FormData = {
  jobTitle: string;
  companyName: string;
  location: string;
  skills: string;
  jobDescription: string;
  experience: string;
  salary: string;
};

type FieldConfigKey = Exclude<keyof FormData, 'jobTitle'>;

type FieldConfig = {
  key: FieldConfigKey;
  label: string;
  placeholder: string;
  icon: React.ElementType;
  isTextArea?: boolean;
};

const jobTitleOptions = [
  'Designer',
  'Developer',
  'Product Manager',
  'Marketing Specialist',
  'Data Analyst',
  'Sales Executive',
  'Content Writer',
  'Customer Support',
];

const fieldConfig: FieldConfig[] = [
  {
    key: 'companyName',
    label: 'Company Name',
    placeholder: 'e.g., Google, Microsoft',
    icon: IconBriefcase,
  },
  {
    key: 'location',
    label: 'Location',
    placeholder: 'e.g., New York, United States',
    icon: IconMapPin,
  },
  {
    key: 'skills',
    label: 'Skills',
    placeholder: 'e.g., React, Node.js, Python',
    icon: IconUser,
  },
  {
    key: 'jobDescription',
    label: 'Job Description',
    placeholder: 'Describe the job responsibilities, requirements, etc.',
    icon: IconFileDescription,
    isTextArea: true,
  },
  {
    key: 'experience',
    label: 'Experience',
    placeholder: 'e.g., 2+ years',
    icon: IconAward,
  },
  {
    key: 'salary',
    label: 'Salary',
    placeholder: 'e.g., $80,000 - $100,000',
    icon: IconCoin,
  },
];

const initialFormState: FormData = {
  jobTitle: '',
  companyName: '',
  location: '',
  skills: '',
  jobDescription: '',
  experience: '',
  salary: '',
};

function UploadJob() {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [isJobTitleOpen, setIsJobTitleOpen] = useState(false);
  const jobTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (jobTitleRef.current && !jobTitleRef.current.contains(event.target as Node)) {
        setIsJobTitleOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleJobTitleSelect = useCallback((option: string) => {
    setFormData((previous) => ({
      ...previous,
      jobTitle: option,
    }));
    setIsJobTitleOpen(false);
  }, []);

  const handleInputChange = useCallback(
    (key: FieldConfigKey) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        setFormData((previous) => ({
          ...previous,
          [key]: value,
        }));
      },
    [],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Job submitted! Check the console for the form data.');
    setFormData(initialFormState);
  };

  const isSubmitDisabled = useMemo(
    () => Object.values(formData).some((value) => value.trim() === ''),
    [formData],
  );

  const inputClasses =
    'w-full pl-10 pr-3 py-2.5 rounded-md border transition-colors bg-white/90 dark:bg-zinc-900 text-gray-900 dark:text-white border-faded-jade-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-faded-jade-400 dark:focus:ring-cyan-500 placeholder:text-gray-500 dark:placeholder:text-gray-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-gray-900 dark:text-gray-100">
      <div className="grid gap-6">
        <div className="relative" ref={jobTitleRef}>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Job Title</label>
          <button
            type="button"
            onClick={() => setIsJobTitleOpen((previous) => !previous)}
            className="flex items-center justify-between w-full px-4 py-2.5 rounded-md border border-faded-jade-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-faded-jade-400 dark:focus:ring-cyan-500"
          >
            <span className={formData.jobTitle ? 'text-gray-900 dark:text-white' : 'text-gray-500'}>
              {formData.jobTitle || 'Select a Job Title'}
            </span>
            <IconChevronDown size={20} className={`transition-transform ${isJobTitleOpen ? 'rotate-180' : ''}`} />
          </button>

          {isJobTitleOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white dark:bg-zinc-900 border border-faded-jade-200 dark:border-zinc-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
              <ul className="py-1">
                {jobTitleOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleJobTitleSelect(option)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-faded-jade-100 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {fieldConfig.map((field) => {
          const IconComponent = field.icon;
          const sharedProps = {
            id: field.key,
            value: formData[field.key],
            onChange: handleInputChange(field.key),
            placeholder: field.placeholder,
            className: inputClasses,
            required: true,
          };

          return (
            <div key={field.key}>
              <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {field.label}
              </label>
              <div className="relative">
                <IconComponent className="absolute left-3 top-1/2 -translate-y-1/2 text-faded-jade-500 dark:text-gray-400" size={20} />
                {field.isTextArea ? (
                  <textarea
                    {...sharedProps}
                    className={`${sharedProps.className} h-32 resize-none pt-3`}
                  />
                ) : (
                  <input type="text" {...sharedProps} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={isSubmitDisabled}
      >
        Post Job
      </button>
    </form>
  );
}

export default UploadJob;
