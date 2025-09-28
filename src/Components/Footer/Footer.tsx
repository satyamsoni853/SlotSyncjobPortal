import React from 'react';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSnowboarding,
  IconWorld,
} from '@tabler/icons-react';

const socialLinks = {
  portfolio: 'https://satyamsoni-nextjs-portfolio.vercel.app/',
  github: 'https://github.com/satyamsoni853',
  linkedin: 'https://www.linkedin.com/in/satyam-soni-833873293/',
  twitter: 'https://x.com/crazy_soni_',
  instagram: 'https://www.instagram.com/_.satyamsoni__/?next=%2F',
  facebook: 'https://www.facebook.com/people/Satyam-Soni/pfbid02Sxp5NzQe6DtqshDxJtRNi9GVjcESFW5q9ghDFHP4PKtN2d6vy8fydV5Q85mAMLdl/',
};

const quickLinks = [
  { label: 'Find Jobs', href: '/Find-Job' },
  { label: 'About Us', href: '/About-Us' },
  { label: 'Post a Job', href: '/Upload-Job' },
  { label: 'Contact', href: 'mailto:hello@slotsync.com' },
];

const categoryLinks = [
  { label: 'Software Development', href: '/Find-Job?category=software-development' },
  { label: 'UI/UX Design', href: '/Find-Job?category=ui-ux' },
  { label: 'Cloud & DevOps', href: '/Find-Job?category=cloud-devops' },
  { label: 'Cybersecurity', href: '/Find-Job?category=cybersecurity' },
];

const resourceLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

function Footer() {
  return (
    <footer className="bg-white/95 dark:bg-gray-900 border-t border-faded-jade-200/70 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <IconSnowboarding size={40} className="text-faded-jade-500" />
              <span className="text-2xl font-bold text-faded-jade-700 dark:text-white">SlotSync</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Connecting IT professionals with the world's most innovative companies.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-faded-jade-500 transition-colors"
                aria-label="Portfolio"
              >
                <IconWorld size={24} />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-faded-jade-500 transition-colors"
                aria-label="GitHub"
              >
                <IconBrandGithub size={24} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-faded-jade-500 transition-colors"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={24} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-faded-jade-500 transition-colors"
                aria-label="Twitter"
              >
                <IconBrandTwitter size={24} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-faded-jade-500 transition-colors"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={24} />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-faded-jade-500 transition-colors"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-faded-jade-700 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-faded-jade-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-faded-jade-700 dark:text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-faded-jade-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-faded-jade-700 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-faded-jade-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-faded-jade-200/70 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} SlotSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
