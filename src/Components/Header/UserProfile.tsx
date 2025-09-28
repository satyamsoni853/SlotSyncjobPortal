
import React from 'react';
import { Avatar, Indicator } from '@mantine/core';
import { IconBellMinus, IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
  return (
    <div className="hidden md:flex items-center bg-white/70 dark:bg-gray-900 shadow-[0px_10px_30px_rgba(19,121,111,0.1)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm rounded-full p-2 space-x-4 transition-colors duration-200">
      <Avatar color="cyan" radius="xl">
        <Link to="/profile">
          <span className="text-faded-jade-700 dark:text-white font-bold">
            User Name
          </span>
        </Link>
      </Avatar>
      <Indicator offset={6} processing color="faded-jade.4" withBorder>
        <IconBellMinus size={30} className="cursor-pointer rounded-full p-1 bg-faded-jade-100 dark:bg-mine-shaft-700 text-faded-jade-700 dark:text-white transition-colors duration-200" />
      </Indicator>
      <IconSettings size={30} className="cursor-pointer rounded-full p-1 bg-faded-jade-100 dark:bg-mine-shaft-700 text-faded-jade-700 dark:text-white transition-colors duration-200" />
    </div>
  );
};

export default UserProfile;
