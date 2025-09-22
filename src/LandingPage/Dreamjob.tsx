import React from "react";
import boyImage from "../JobPortalResources/Boy.png"; // Make sure this path is correct

import {
  IconSearch,
  IconBriefcase,
  IconBuildingStore,
  IconStarFilled,
} from "@tabler/icons-react";
import { Avatar } from "@mantine/core";
import avatarpng from "../JobPortalResources/avatar.png";
import avatar1 from "../JobPortalResources/avatar1.png";
import avatar2 from "../JobPortalResources/avatar2.png";

function Dreamjob() {
  return (
    // Main container now only centers the content wrapper vertically and horizontally
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full -bottom-20 -right-20 blur-3xl"></div>

      {/* NEW: Content Wrapper with max-width */}
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-center gap-8 z-10">
        
        {/* Left side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-2 leading-tight">
            Find Your Dream <span className="text-cyan-400">Job</span> <br /> With{" "}
            <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6 max-w-lg">
            We help you find the best job opportunities tailored to your skills and
            preferences.
          </p>

          {/* Search Form Container */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-grow">
              <IconBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                // HOVER EFFECT ADDED
                className="w-full p-4 pl-12 rounded-lg border-none focus:outline-none bg-gray-800 text-white placeholder-gray-500 transition-all duration-300 hover:ring-2 hover:ring-cyan-500/50 focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="relative flex-grow">
              <IconBuildingStore className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="City or country"
                // HOVER EFFECT ADDED
                className="w-full p-4 pl-12 rounded-lg border-none focus:outline-none bg-gray-800 text-white placeholder-gray-500 transition-all duration-300 hover:ring-2 hover:ring-cyan-500/50 focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button 
              // HOVER EFFECT ADDED
              className="p-4 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-600 shrink-0 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <IconSearch size={20} />
            </button>
          </div>
        </div>

        {/* Right side: Image with floating glass cards */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src={boyImage}
              alt="Person looking for a job"
              className="w-full h-auto"
            />

            {/* --- Glass Card 1: Job Seekers --- */}
            <div 
              // HOVER EFFECT ADDED
              className="absolute top-10 -left-4 sm:-left-12 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20"
            >
              <p className="font-bold text-lg text-white">10k+ Got Hired</p>
              <Avatar.Group spacing="sm" className="mt-2">
                <Avatar src={avatarpng} radius="xl" />
                <Avatar src={avatar1} radius="xl" />
                <Avatar src={avatar2} radius="xl" />
                <Avatar radius="xl">+9k</Avatar>
              </Avatar.Group>
            </div>

            {/* --- Glass Card 2: Job Vacancy --- */}
            <div 
              // HOVER EFFECT ADDED
              className="absolute bottom-20 -right-4 sm:-right-10 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20"
            >
              <p className="text-3xl font-bold">10.4k</p>
              <p className="text-gray-300">Job Vacancies</p>
            </div>

            {/* --- Glass Card 3: User Review --- */}
            <div 
              // HOVER EFFECT ADDED
              className="absolute -bottom-5 left-5 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20"
            >
              <Avatar src={avatar1} radius="xl" size="lg" />
              <div>
                <p className="font-bold">Jane Foster</p>
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