import React from "react";
import Marquee from "react-fast-marquee";
import { companies } from "../JobPortalResources/Data/Data";

function Companies() {
  return (
    // Main section container with dark background and vertical padding
    <section className="bg-gray-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Trusted by thousands of <br className="sm:hidden" />
          <span className="text-cyan-400">companies worldwide.</span>
        </h1>

        {/* Marquee with gradient effect */}
        <Marquee
          
          speed={50}
          pauseOnHover={true}
        >
          {companies.map((company, index) => (
            <div key={index} className="mx-8 sm:mx-12">
              <img
                // Corrected template literal syntax
                src={`/companies/${company}.png`}
                alt={`${company} logo`}
                // Enhanced styling with larger size and lift-up hover effect
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