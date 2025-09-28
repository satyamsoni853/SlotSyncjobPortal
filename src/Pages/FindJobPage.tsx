import React from 'react';
import Searchbar from '../Components/FindJobs/Searchbar';
import Job from '../Components/FindJobs/Job';

function FindJobPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-8">
      <Searchbar />
      <Job />
    </div>
  );
}

export default FindJobPage;
