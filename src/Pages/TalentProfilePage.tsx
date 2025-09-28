import React from 'react';
import Profile from '../Components/TalentProfile/Profile';
import RecommendedTalent from '../Components/TalentProfile/RecommendedTalent';



function TalentProfilePage() {
  return (
    <div className="min-h-screen w-full flex justify-center p-4 sm:p-6 lg:p-10">
      <div className="w-full flex items-start justify-between flex-wrap gap-8 max-w-[1600px]">
        <Profile />
        <RecommendedTalent />
      </div>
    </div>
  );
}

export default TalentProfilePage;
