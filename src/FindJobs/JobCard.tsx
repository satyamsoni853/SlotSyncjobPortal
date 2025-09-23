import React from 'react';
import { Avatar, Badge, Button, ActionIcon, Tooltip } from '@mantine/core';
import {
  IconMapPin,
  IconBriefcase,
  IconCash,
  IconBookmark,
  IconDotsVertical,
} from '@tabler/icons-react';

function JobCard(props: any) {
  // An array for job details to make the JSX cleaner
  const jobDetails = [
    { icon: <IconBriefcase size={16} />, label: '5+ Years' },
    { icon: <IconCash size={16} />, label: '₹ 45-60 LPA' },
    { icon: <IconMapPin size={16} />, label: 'Remote' },
  ];

  return (
    // Main card container with a subtle gradient and shadow effects
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-2xl border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 max-w-2xl mx-auto">
      <div className="flex flex-col gap-5">
        
        {/* --- Header Section: Company Info & Menu --- */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_logo_%282012%29.svg"
              size="lg"
              radius="md"
              className="bg-white p-1" // Added padding for better logo appearance
            />
            <div>
              <p className="text-sm text-gray-400">{props.companyName}</p>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                 {props.jobTitle}
                </h3>
              </div>
            </div>
          </div>
          <Tooltip label="More Options">
            <ActionIcon variant="subtle" color="gray">
              <IconDotsVertical size={20} />
            </ActionIcon>
          </Tooltip>
        </div>

        {/* --- Key Details Section: Experience, Salary, Location --- */}
        <div className="flex flex-wrap items-center gap-3 py-3">
          <Badge color="cyan" variant="light" size="lg">
            New
          </Badge>
          {jobDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-800/60 text-gray-300 px-3 py-1.5 rounded-full text-sm"
            >
              {detail.icon}
              <span className="font-medium">{detail.label}</span>
            </div>
          ))}
        </div>

        {/* --- Divider --- */}
        <div className="border-t border-gray-700/50"></div>

        {/* --- Footer & Actions --- */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Posted 5 days ago</p>
          <div className="flex items-center gap-3">
            <Tooltip label="Save Job">
              <ActionIcon variant="light" color="blue" size="lg" radius="md">
                <IconBookmark size={20} />
              </ActionIcon>
            </Tooltip>
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="sm"
              radius="md"
              className="transition-transform duration-200 hover:scale-105"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;