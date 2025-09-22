import React from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSnowboarding,
  IconBrandInstagram, // Added
  IconBrandFacebook,  // Added
  IconWorld,          // Added for portfolio
} from '@tabler/icons-react';

function Footer() {
  // Storing your links here for cleanliness
  const socialLinks = {
    portfolio: 'https://satyamsoni-nextjs-portfolio.vercel.app/',
    github: 'https://github.com/satyamsoni853',
    linkedin: 'https://www.linkedin.com/in/satyam-soni-833873293/',
    twitter: 'https://x.com/crazy_soni_',
    instagram: 'https://www.instagram.com/_.satyamsoni__/?next=%2F',
    facebook: 'https://www.facebook.com/people/Satyam-Soni/pfbid02Sxp5NzQe6DtqshDxJtRNi9GVjcESFW5q9ghDFHP4PKtN2d6vy8fydV5Q85mAMLdl/',
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <IconSnowboarding size={40} className="text-cyan-400" />
              <span className="text-2xl font-bold text-white">SlotSync</span>
            </a>
            <p className="text-gray-400 max-w-xs">
              Connecting IT professionals with the world's most innovative companies.
            </p>
            {/* UPDATED: Social media links now have your URLs */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><IconWorld size={24} /></a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><IconBrandGithub size={24} /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><IconBrandLinkedin size={24} /></a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><IconBrandTwitter size={24} /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><IconBrandInstagram size={24} /></a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><IconBrandFacebook size={24} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Find Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Job Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Software Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cloud & DevOps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SlotSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;