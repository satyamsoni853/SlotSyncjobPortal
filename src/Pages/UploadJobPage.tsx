import React from 'react';
import UploadJob from '../UploadJob/UploadJob';

function UploadJobPage() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900 rounded-3xl shadow-[0px_20px_40px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] border border-faded-jade-200/70 dark:border-gray-700/60 p-6 sm:p-10 transition-colors duration-200">
        <h2 className="text-3xl font-bold text-center text-faded-jade-700 dark:text-white mb-8">
          Upload a New Job
        </h2>
        <UploadJob />
      </div>
    </div>
  );
}

export default UploadJobPage;
