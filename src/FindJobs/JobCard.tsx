import React from 'react';
import { Avatar, Badge, Button, ActionIcon, Tooltip } from '@mantine/core';
import {
  IconMapPin,
  IconBriefcase,
  IconCash,
  IconBookmark,
  IconDotsVertical,
} from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';

function JobCard(props: any) {
  const navigate = useNavigate();
  const jobDetails = [
    { icon: <IconBriefcase size={16} />, label: '5+ Years' },
    { icon: <IconCash size={16} />, label: '? 45-60 LPA' },
    { icon: <IconMapPin size={16} />, label: 'Remote' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6 rounded-2xl border border-faded-jade-200/60 dark:border-gray-700/60 shadow-[0px_10px_30px_rgba(19,121,111,0.1)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] transition-colors duration-200 max-w-2xl mx-auto">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_logo_%282012%29.svg"
              size="lg"
              radius="md"
              className="bg-white p-1"
            />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{props.companyName}</p>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-faded-jade-700 dark:text-white">
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

        <div className="flex flex-wrap items-center gap-3 py-3">
          <Badge color="cyan" variant="light" size="lg">
            New
          </Badge>
          {jobDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-faded-jade-100/80 dark:bg-gray-800/60 text-faded-jade-700 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm transition-colors"
            >
              {detail.icon}
              <span className="font-medium">{detail.label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-faded-jade-200/60 dark:border-gray-700/60"></div>

        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">Posted 5 days ago</p>
          <div className="flex items-center gap-3">
            <Tooltip label="Save Job">
              <ActionIcon variant="light" color="teal" size="lg" radius="md">
                <IconBookmark size={20} />
              </ActionIcon>
            </Tooltip>
            <Button
              variant="gradient"
              gradient={{ from: 'teal', to: 'cyan' }}
              size="sm"
              radius="md"
              className="transition-transform duration-200 hover:scale-105"
              onClick={() => navigate('/Apply-Job')}
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
