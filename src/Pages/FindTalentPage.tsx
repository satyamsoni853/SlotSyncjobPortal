import React from 'react';
import TalentSearchBar from '../Components/FindTalent/TalentSearch';
import TalentCardContainer from '../Components/FindTalent/TalentCardContainer';

function FindTalentPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-10">
      <TalentSearchBar />
      <TalentCardContainer />
    </div>
  );
}

export default FindTalentPage;
