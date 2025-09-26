import React from 'react';
import Profile from '../TalentProfile/Profile'; // Assuming this path is correct
import RecommendedTalent from '../TalentProfile/RecommentTalent';

function TalentProfilePage() {
  return (
    // This div acts as the main page container
    // It sets the dark background, centers content, and enforces the 1600px max width
    <div className="min-h-screen w-full bg-zinc-900 flex justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full flex items-start justify-space-between flex-wrap max-w-[1600px]">
        <Profile />
        <RecommendedTalent/>
      </div>
    </div>
  );
}

export default TalentProfilePage;