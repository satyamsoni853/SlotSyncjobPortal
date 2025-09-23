import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

// src/JobPortalResources/Data/JobsData.ts

// You'll need to import your icons. For demonstration, I'm using placeholder strings.
// In a real project, you might import them from a library like @tabler/icons-react
// import { IconBriefcase, IconMapPin, IconHourglassHigh, IconTools } from '@tabler/icons-react';

 const dropdownData = [
  {
    name: 'jobTitle',
    label: 'Job Title',
    placeholder: 'e.g., Software Engineer',
    // icon: <IconBriefcase size={20} />, // Example using Tabler Icons
    icon: 'BriefcaseIcon', // Placeholder string for the icon
    data: [
      { value: 'swe', label: 'Software Engineer' },
      { value: 'pm', label: 'Product Manager' },
      { value: 'designer', label: 'UX/UI Designer' },
      { value: 'data_scientist', label: 'Data Scientist' },
      { value: 'devops', label: 'DevOps Engineer' },
    ],
  },
  {
    name: 'location',
    label: 'Location',
    placeholder: 'e.g., Remote, New York',
    // icon: <IconMapPin size={20} />,
    icon: 'MapPinIcon', // Placeholder string for the icon
    data: [
      { value: 'remote', label: 'Remote' },
      { value: 'ny', label: 'New York, NY' },
      { value: 'sf', label: 'San Francisco, CA' },
      { value: 'london', label: 'London, UK' },
      { value: 'bangalore', label: 'Bangalore, IN' },
    ],
  },
  {
    name: 'experience',
    label: 'Experience Level',
    placeholder: 'e.g., Entry Level',
    // icon: <IconHourglassHigh size={20} />,
    icon: 'HourglassIcon', // Placeholder string for the icon
    data: [
      { value: 'internship', label: 'Internship' },
      { value: 'entry', label: 'Entry Level (0-2 years)' },
      { value: 'mid', label: 'Mid-Senior Level (3-5 years)' },
      { value: 'senior', label: 'Senior Level (5+ years)' },
    ],
  },
  {
    name: 'skills',
    label: 'Skills',
    placeholder: 'e.g., React, Python',
    // icon: <IconTools size={20} />,
    icon: 'ToolsIcon', // Placeholder string for the icon
    data: [
      { value: 'react', label: 'React' },
      { value: 'nodejs', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'aws', label: 'AWS' },
    ],
  },
];

const jobList = [
    {
      jobTitle: "Product Designer",
      company: "Meta",
      applicants: 25,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "New York",
      package: "32 LPA",
      postedDaysAgo: 12,
      description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
    },
    {
      jobTitle: "Sr. UX Designer",
      company: "Netflix",
      applicants: 14,
      experience: "Expert",
      jobType: "Part-Time",
      location: "San Francisco",
      package: "40 LPA",
      postedDaysAgo: 5,
      description: "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates will have extensive experience in user research and interaction design, helping us to deliver engaging content to our global audience."
    },
    {
      jobTitle: "Product Designer",
      company: "Microsoft",
      applicants: 58,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Remote",
      package: "35 LPA",
      postedDaysAgo: 4,
      description: "Join Microsoft as a Product Designer and contribute to our new Lightspeed LA studio. We're looking for designers who can create intuitive and compelling gaming experiences. This is a remote position, offering flexibility and the opportunity to work with a leading technology company."
    },
    {
      jobTitle: "Product Designer",
      company: "Adobe",
      applicants: 23,
      experience: "Expert",
      jobType: "Part-Time",
      location: "Toronto",
      package: "33 LPA",
      postedDaysAgo: 22,
      description: "Adobe is seeking a part-time Product Designer to help us enhance our user experience. You will work closely with our team to design features that make our platform more engaging and user-friendly. This role is perfect for experienced designers looking for flexible work hours."
    },
    {
      jobTitle: "Backend Developer",
      company: "Google",
      applicants: 21,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "Bangalore",
      package: "38 LPA",
      postedDaysAgo: 8,
      description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services. This role requires strong problem-solving skills and experience with modern backend technologies."
    },
    {
      jobTitle: "SMM Manager",
      company: "Spotify",
      applicants: 73,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Delhi",
      package: "34 LPA",
      postedDaysAgo: 8,
      description: "Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi. You will create and manage campaigns to promote our music streaming service, engage with our audience, and drive growth. This role is ideal for creative marketers with a passion for music."
    },
    {
      jobTitle: "Frontend Developer",
      company: "Amazon",
      applicants: 50,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Seattle",
      package: "36 LPA",
      postedDaysAgo: 10,
      description: "Amazon is looking for a Frontend Developer to build and maintain our customer-facing applications. You will work with a dynamic team to create seamless and responsive web applications."
    },
    {
      jobTitle: "iOS Developer",
      company: "Apple",
      applicants: 30,
      experience: "Expert",
      jobType: "Full-Time",
      location: "Cupertino",
      package: "42 LPA",
      postedDaysAgo: 7,
      description: "Apple is seeking an iOS Developer to join our team in Cupertino. You will work on developing cutting-edge applications for iOS devices, ensuring high performance and an exceptional user experience."
    }
  ];

  export {dropdownData,jobList};