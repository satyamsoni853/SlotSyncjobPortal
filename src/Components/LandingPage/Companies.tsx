import React from 'react';
import Marquee from 'react-fast-marquee';
import { companies } from '../../JobPortalResources/Data/Data';
import { companyLogos } from '../../JobPortalResources/Companies';

function Companies() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 sm:py-20 transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Trusted by thousands of <br className="sm:hidden" />
          <span className="text-faded-jade-600 dark:text-faded-jade-400">companies worldwide.</span>
        </h1>

        <Marquee speed={50} pauseOnHover>
          {companies.map((company, index) => (
            <div key={index} className="mx-8 sm:mx-12">
              <img
                src={companyLogos[company]}
                alt={`${company} logo`}
                className="h-14 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Companies;
