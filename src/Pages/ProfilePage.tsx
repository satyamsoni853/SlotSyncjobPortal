import React from 'react';
import Profile from '../Components/TalentProfile/Profile';

function ProfilePage() {
  return (
    <div className="min-h-screen w-full flex justify-center p-4 sm:p-6 lg:p-10">
      <div className="w-full max-w-[1400px]">
        <Profile />
      </div>
    </div>
  );
}

export default ProfilePage;
