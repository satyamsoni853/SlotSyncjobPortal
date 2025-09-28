import React from 'react';
import boyImage from '../../JobPortalResources/Boy.png';
import {
  IconSearch,
  IconBriefcase,
  IconBuildingStore,
  IconStarFilled,
} from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import avatarpng from '../../JobPortalResources/avatar.png';
import avatar1 from '../../JobPortalResources/avatar1.png';
import avatar2 from '../../JobPortalResources/avatar2.png';

function Dreamjob() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center p-8 relative overflow-hidden transition-colors duration-200">
      <div className="absolute w-96 h-96 bg-faded-jade-200/40 dark:bg-cyan-500/20 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-faded-jade-200/40 dark:bg-purple-500/20 rounded-full -bottom-20 -right-20 blur-3xl"></div>

      <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-center gap-8 z-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-2 leading-tight">
            Find Your Dream <span className="text-faded-jade-600 dark:text-faded-jade-400">Job</span>{' '}
            <br /> With <span className="text-faded-jade-600 dark:text-faded-jade-400">Us</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
            We help you find the best job opportunities tailored to your skills and preferences.
          </p>

          <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-grow">
              <IconBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-faded-jade-500" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full p-4 pl-12 rounded-lg border border-faded-jade-200/70 dark:border-gray-700 bg-white/90 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:ring-2 hover:ring-faded-jade-400/60 focus:ring-2 focus:ring-faded-jade-400 focus:outline-none"
              />
            </div>
            <div className="relative flex-grow">
              <IconBuildingStore className="absolute left-4 top-1/2 -translate-y-1/2 text-faded-jade-500" />
              <input
                type="text"
                placeholder="City or country"
                className="w-full p-4 pl-12 rounded-lg border border-faded-jade-200/70 dark:border-gray-700 bg-white/90 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:ring-2 hover:ring-faded-jade-400/60 focus:ring-2 focus:ring-faded-jade-400 focus:outline-none"
              />
            </div>
            <button className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center hover:from-teal-600 hover:to-cyan-600 shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105">
              <IconSearch size={20} />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <img src={boyImage} alt="Person looking for a job" className="w-full h-auto" />

            <div className="absolute top-10 -left-4 sm:-left-12 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-faded-jade-200/70 dark:border-gray-700 rounded-2xl shadow-[0px_10px_30px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] transition-transform duration-300 ease-in-out hover:scale-105">
              <p className="font-bold text-lg text-faded-jade-700 dark:text-white">10k+ Got Hired</p>
              <Avatar.Group spacing="sm" className="mt-2">
                <Avatar src={avatarpng} radius="xl" />
                <Avatar src={avatar1} radius="xl" />
                <Avatar src={avatar2} radius="xl" />
                <Avatar radius="xl">+9k</Avatar>
              </Avatar.Group>
            </div>

            <div className="absolute bottom-20 -right-4 sm:-right-10 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-faded-jade-200/70 dark:border-gray-700 rounded-2xl shadow-[0px_10px_30px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] text-center transition-transform duration-300 ease-in-out hover:scale-105">
              <p className="text-3xl font-bold text-faded-jade-700 dark:text-white">10.4k</p>
              <p className="text-gray-600 dark:text-gray-300">Job Vacancies</p>
            </div>

            <div className="absolute -bottom-5 left-5 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-faded-jade-200/70 dark:border-gray-700 rounded-2xl shadow-[0px_10px_30px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] flex items-center gap-3 transition-transform duration-300 ease-in-out hover:scale-105">
              <Avatar src={avatar1} radius="xl" size="lg" />
              <div>
                <p className="font-bold text-faded-jade-700 dark:text-white">Jane Foster</p>
                <div className="flex text-yellow-400">
                  <IconStarFilled size={16} />
                  <IconStarFilled size={16} />
                  <IconStarFilled size={16} />
                  <IconStarFilled size={16} />
                  <IconStarFilled size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dreamjob;
