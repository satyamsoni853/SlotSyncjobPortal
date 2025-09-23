import React from 'react';
import TalentSearchbar from '../Findtalent/TalentSearch';
import TalentCardContainer from '../Findtalent/TalentCardContainer';

function FindTalentPage() {
  return <div className="min-h-screen bg-gray-900">
    <TalentSearchbar/>
    <TalentCardContainer/>
  </div>;
}

export default FindTalentPage;
