import React from 'react';
import UploadJob from '../UploadJob/UploadJob';

function UploadJobPage() {
  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-800 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Upload a New Job</h2>
          
          <UploadJob/>
        </div>
      </div>
    </div>
  );
}

export default UploadJobPage;