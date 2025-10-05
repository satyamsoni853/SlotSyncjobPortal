import React, { useState, useEffect } from "react";
import { IconBriefcase, IconMapPin, IconX } from "@tabler/icons-react";
import { FiEdit as FiEditIcon } from "react-icons/fi";

import CertificationCard from "./CertificationCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "../../Pages/EducationCard"; // Assuming path
import ProfileService from "../Service/ProfileService";
import { useSelector } from "react-redux";
import ExperienceForm from "./ExperienceForm";
import CertificationForm from "./CertificationForm";
import EducationForm from "./EducationForm";

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
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editedProfile, setEditedProfile] = useState<any | null>(null);
  const [newSkill, setNewSkill] = useState("");

  const handleEdit = (section: string) => {
    setEditingSection(section);
    setEditedProfile({
      ...profile,
      experiences: profile.experiences || [],
      certifications: profile.certifications || [],
      education: profile.education || [],
    });
  };

  const handleCancel = () => {
    setEditingSection(null);
    setEditedProfile(null);
  };

  const handleSave = async () => {
    if (!editedProfile) return;
    try {
      const updatedProfile = await ProfileService.updateProfile(editedProfile);
      setProfile(updatedProfile);
      setEditingSection(null);
      setEditedProfile(null);
    } catch (err: any) {
      setError(err.message || "Failed to update profile");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (!editedProfile) return;
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSkillAdd = () => {
    if (newSkill && editedProfile && !(editedProfile.skills || []).includes(newSkill)) {
      setEditedProfile({
        ...editedProfile,
        skills: [...(editedProfile.skills || []), newSkill],
      });
      setNewSkill("");
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    if (editedProfile) {
      setEditedProfile({
        ...editedProfile,
        skills: editedProfile.skills.filter((skill: string) => skill !== skillToRemove),
      });
    }
  };

  const handleExperienceChange = (index: number, updatedExperience: any) => {
    if (editedProfile) {
      const newExperiences = [...editedProfile.experiences];
      newExperiences[index] = updatedExperience;
      setEditedProfile({ ...editedProfile, experiences: newExperiences });
    }
  };

  const handleExperienceAdd = () => {
    if (editedProfile) {
      const newExperience = {
        id: Date.now(), // Temporary ID
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      };
      setEditedProfile({
        ...editedProfile,
        experiences: [...(editedProfile.experiences || []), newExperience],
      });
    }
  };

  const handleExperienceRemove = (index: number) => {
    if (editedProfile) {
      const newExperiences = [...editedProfile.experiences];
      newExperiences.splice(index, 1);
      setEditedProfile({ ...editedProfile, experiences: newExperiences });
    }
  };

  const handleCertificationChange = (index: number, updatedCertification: any) => {
    if (editedProfile) {
      const newCertifications = [...editedProfile.certifications];
      newCertifications[index] = updatedCertification;
      setEditedProfile({ ...editedProfile, certifications: newCertifications });
    }
  };

  const handleCertificationAdd = () => {
    if (editedProfile) {
      const newCertification = {
        id: Date.now(), // Temporary ID
        name: "",
        issuingOrganization: "",
        issueDate: "",
      };
      setEditedProfile({
        ...editedProfile,
        certifications: [...(editedProfile.certifications || []), newCertification],
      });
    }
  };

  const handleCertificationRemove = (index: number) => {
    if (editedProfile) {
      const newCertifications = [...editedProfile.certifications];
      newCertifications.splice(index, 1);
      setEditedProfile({ ...editedProfile, certifications: newCertifications });
    }
  };

  const handleEducationChange = (index: number, updatedEducation: any) => {
    if (editedProfile) {
      const newEducation = [...editedProfile.education];
      newEducation[index] = updatedEducation;
      setEditedProfile({ ...editedProfile, education: newEducation });
    }
  };

  const handleEducationAdd = () => {
    if (editedProfile) {
      const newEducation = {
        id: Date.now(), // Temporary ID
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      };
      setEditedProfile({
        ...editedProfile,
        education: [...(editedProfile.education || []), newEducation],
      });
    }
  };

  const handleEducationRemove = (index: number) => {
    if (editedProfile) {
      const newEducation = [...editedProfile.education];
      newEducation.splice(index, 1);
      setEditedProfile({ ...editedProfile, education: newEducation });
    }
  };

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
        <button onClick={() => handleEdit('banner')} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <FiEdit size={20} />
        </button>
        <div className="absolute -bottom-16 left-6 group">
          <img
            className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-900"
            src={profile.avatarUrl}
            alt="User Avatar"
          />
          <button onClick={() => handleEdit('avatar')} className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
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
            {editingSection !== 'about' && (
              <button onClick={() => handleEdit('about')} className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
                <FiEdit size={18} />
              </button>
            )}
          </div>
          {editingSection === 'about' ? (
            <div>
              <textarea
                name="about"
                value={editedProfile?.about || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
              />
              <div className="flex justify-end mt-2">
                <button onClick={handleCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
              </div>
            </div>
          ) : (
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {profile.about || (
                <span className="italic text-gray-500 dark:text-gray-400">
                  No about me information has been added yet.
                </span>
              )}
            </p>
          )}
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Skills
            </h2>
            {editingSection !== 'skills' && (
              <button onClick={() => handleEdit('skills')} className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
                <FiEdit size={18} />
              </button>
            )}
          </div>
          {editingSection === 'skills' ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
                  placeholder="Add a new skill"
                />
                <button onClick={handleSkillAdd} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Add</button>
              </div>
              <div className="pt-4 flex flex-wrap gap-2">
                {editedProfile?.skills && editedProfile.skills.length > 0 ? (
                  editedProfile.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="bg-faded-jade-100/80 dark:bg-zinc-800 text-faded-jade-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {skill}
                      <button onClick={() => handleSkillRemove(skill)}>
                        <IconX size={14} />
                      </button>
                    </span>
                  ))
                ) : (
                  <span className="italic text-gray-500 dark:text-gray-400">
                    No skills have been added yet.
                  </span>
                )}
              </div>
              <div className="flex justify-end mt-2">
                <button onClick={handleCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
              </div>
            </div>
          ) : (
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
          )}
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Experience
            </h2>
            {editingSection !== 'experience' && (
              <button onClick={() => handleEdit('experience')} className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
                <FiEdit size={18} />
              </button>
            )}
          </div>
          {editingSection === 'experience' ? (
            <div>
              {editedProfile?.experiences && editedProfile.experiences.map((exp: any, index: number) => (
                <ExperienceForm
                  key={exp.id}
                  experience={exp}
                  onSave={(updatedExp: any) => handleExperienceChange(index, updatedExp)}
                  onCancel={handleCancel}
                />
              ))}
              <button onClick={handleExperienceAdd} className="mt-2 px-4 py-2 rounded bg-faded-jade-500 text-white">Add Experience</button>
              <div className="flex justify-end mt-2">
                <button onClick={handleCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
              </div>
            </div>
          ) : (
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
          )}
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Certifications
            </h2>
            {editingSection !== 'certifications' && (
              <button onClick={() => handleEdit('certifications')} className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
                <FiEdit size={18} />
              </button>
            )}
          </div>
          {editingSection === 'certifications' ? (
            <div>
              {editedProfile?.certifications && editedProfile.certifications.map((cert: any, index: number) => (
                <CertificationForm
                  key={cert.id}
                  certification={cert}
                  onSave={(updatedCert: any) => handleCertificationChange(index, updatedCert)}
                  onCancel={handleCancel}
                />
              ))}
              <button onClick={handleCertificationAdd} className="mt-2 px-4 py-2 rounded bg-faded-jade-500 text-white">Add Certification</button>
              <div className="flex justify-end mt-2">
                <button onClick={handleCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
              </div>
            </div>
          ) : (
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
          )}
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 pb-1 border-b border-faded-jade-200/70 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-faded-jade-700 dark:text-white">
              Education
            </h2>
            {editingSection !== 'education' && (
              <button onClick={() => handleEdit('education')} className="text-gray-500 hover:text-faded-jade-600 dark:hover:text-cyan-400 transition-colors">
                <FiEdit size={18} />
              </button>
            )}
          </div>
          {editingSection === 'education' ? (
            <div>
              {editedProfile?.education && editedProfile.education.map((edu: any, index: number) => (
                <EducationForm
                  key={edu.id}
                  education={edu}
                  onSave={(updatedEdu: any) => handleEducationChange(index, updatedEdu)}
                  onCancel={handleCancel}
                />
              ))}
              <button onClick={handleEducationAdd} className="mt-2 px-4 py-2 rounded bg-faded-jade-500 text-white">Add Education</button>
              <div className="flex justify-end mt-2">
                <button onClick={handleCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;