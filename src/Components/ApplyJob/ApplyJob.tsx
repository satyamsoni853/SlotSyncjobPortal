import React from 'react';

const ApplyJob = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Application submitted!');
  };

  return (
    <div className="w-full bg-white/95 dark:bg-gray-900 border border-faded-jade-200/70 dark:border-gray-700 rounded-3xl shadow-[0px_20px_40px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] p-6 sm:p-10 transition-colors duration-200">
      <h2 className="text-3xl font-bold text-faded-jade-700 dark:text-white">Apply for Software Engineer</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">at Google</p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg border border-faded-jade-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-faded-jade-400 dark:focus:ring-cyan-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border border-faded-jade-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-faded-jade-400 dark:focus:ring-cyan-500"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full rounded-lg border border-faded-jade-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-faded-jade-400 dark:focus:ring-cyan-500"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="portfolio" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Portfolio Link
          </label>
          <input
            type="url"
            id="portfolio"
            className="w-full rounded-lg border border-faded-jade-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-faded-jade-400 dark:focus:ring-cyan-500"
            placeholder="https://example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            className="w-full text-gray-700 dark:text-gray-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cover-letter" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Cover Letter
          </label>
          <textarea
            id="cover-letter"
            rows={6}
            className="w-full rounded-lg border border-faded-jade-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-faded-jade-400 dark:focus:ring-cyan-500"
            placeholder="Write a brief cover letter..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
