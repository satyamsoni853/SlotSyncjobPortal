import React, { useState, useEffect } from "react";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { FiEdit as FiEditIcon } from "react-icons/fi";

import CertificationCard from "./CertificationCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "../../Pages/EducationCard"; // Assuming path
import ProfileService from "../Service/ProfileService";
import { useSelector } from "react-redux";

const ProfileSkeleton = () => (
  <div className="w-full bg-white/95 dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden border border-faded-jade-200/70 dark:border-zinc-700 animate-pulse">
    {/* Banner */}
    <div className="h-48 bg-gray-200 dark:bg-zinc-800"></div>
    <div className="relative p-6 pt-20">
      {/* Avatar */}
      <div className="absolute -top-16 left-6 w-32 h-32 rounded-full bg-gray-300 dark:bg-zinc-700 border-4 border-white dark:border-zinc-900"></div>

      {/* Header */}
      <div className="h-8 w-48 bg-gray-300 dark:bg-zinc-700 rounded mb-2"></div>
      <div className="h-5 w-64 bg-gray-300 dark:bg-zinc-700 rounded mb-6"></div>

      {/* Job Info */}
      <div className="space-y-2 mb-8">
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-zinc-700 rounded"></div>
      </div>

      {/* About Section */}
      <div className="space-y-3">
        <div className="h-6 w-32 bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 w-full bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 w-full bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
      </div>

      {/* Skills Section */}
      <div className="mt-8 space-y-3">
        <div className="h-6 w-24 bg-gray-300 dark:bg-zinc-700 rounded"></div>
        <div className="flex flex-wrap gap-2">
          <div className="h-7 w-20 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
          <div className="h-7 w-24 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
          <div className="h-7 w-16 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
          <div className="h-7 w-28 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

function Profile() {
  const FiEdit = FiEditIcon as React.ComponentType<any>;
  const user = useSelector((state: any) => state.user);

  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user || !user.profileId) {
        setLoading(false);
        return;
      }
      try {
        const data = await ProfileService.getProfile(user.profileId.toString());
        setProfile(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="max-w-[1000px] mx-auto p-6 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-[1000px] mx-auto p-6 text-center text-gray-500">
        No profile data available. Please ensure you are logged in and have a profile.
      </div>
    );
  }

  return (
    <div className="w-full bg-white/95 dark:bg-zinc-900 rounded-2xl shadow-[0px_20px_40px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] overflow-hidden text-gray-700 dark:text-gray-300 border border-faded-jade-200/70 dark:border-zinc-700 transition-colors duration-200">
      <div className="relative group">
        <img
          className="w-full h-48 object-cover"
          src={profile.bannerUrl}
          alt="Banner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <button className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <FiEdit size={20} />
        </button>
        <div className="absolute -bottom-16 left-6 group">
          <img
            className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-900"
            src={profile.avatarUrl}
            alt="User Avatar"
          />
          <button className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <FiEdit size={24} />
          </button>
        </div>
      </div>

      <div className="p-6 pt-20">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-faded-jade-700 dark:text-white">{profile.name}</h1>
           
          </div>
          
        </div>
        <div>
          <div className="flex justify-between items-center mb-2 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              About
            </h2>
            <button className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
              <FiEdit size={18} />
            </button>
          </div>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {profile.about || (
              <span className="italic text-gray-500 dark:text-gray-400">
                No about me information has been added yet.
              </span>
            )}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Skills
            </h2>
            <button className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
              <FiEdit size={18} />
            </button>
          </div>
          <div className="pt-4 flex flex-wrap gap-2">
            {profile.skills && profile.skills.length > 0 ? (
              profile.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-faded-jade-100/80 dark:bg-zinc-800 text-faded-jade-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="italic text-gray-500 dark:text-gray-400">
                No skills have been added yet.
              </span>
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Experience
            </h2>
            <button className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
              <FiEdit size={18} />
            </button>
          </div>
          <div className="pt-4 space-y-6">
            {profile.experiences && profile.experiences.length > 0 ? (
              profile.experiences.map((exp: any) => (
                <ExperienceCard key={exp.id} {...exp} />
              ))
            ) : (
              <span className="italic text-gray-500 dark:text-gray-400">
                No experience has been added yet.
              </span>
            )}
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Certifications
            </h2>
            <button className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
              <FiEdit size={18} />
            </button>
          </div>
          <div className="pt-4 space-y-6">
            {profile.certifications && profile.certifications.length > 0 ? (
              profile.certifications.map((cert: any) => (
                <CertificationCard key={cert.id} {...cert} />
              ))
            ) : (
              <span className="italic text-gray-500 dark:text-gray-400">
                No certifications have been added yet.
              </span>
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Education
            </h2>
            <button className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
              <FiEdit size={18} />
            </button>
          </div>
          <div className="pt-4 space-y-6">
            {profile.education && profile.education.length > 0 ? (
              profile.education.map((edu: any) => (
                <EducationCard key={edu.id} {...edu} />
              ))
            ) : (
              <span className="italic text-gray-500 dark:text-gray-400">
                No education has been added yet.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
