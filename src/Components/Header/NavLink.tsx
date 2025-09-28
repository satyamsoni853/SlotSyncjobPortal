import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  isMobile?: boolean;
}

const links = [
  { name: 'Find Job', url: '/Find-Job' },
  { name: 'Find Talent', url: '/Find-Talent' },
  { name: 'Upload Job', url: '/Upload-Job' },
  { name: 'About Us', url: '/About-Us' },
];

const mobileContainerClasses = 'flex flex-col items-center space-y-6 p-4 bg-gradient-to-b from-faded-jade-50 to-white dark:from-transparent dark:to-transparent dark:bg-gray-900 text-faded-jade-800 dark:text-white transition-colors duration-200 backdrop-blur-sm';
const desktopContainerClasses = 'flex items-center h-full bg-white/80 dark:bg-gray-900 text-faded-jade-800 dark:text-white shadow-[0px_10px_30px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm rounded-full px-6 py-3 space-x-8 transition-colors duration-200';
const mobileLinkClasses = 'border-b-2 border-transparent w-full text-center pb-2 last:border-b-0';
const desktopLinkClasses = 'flex items-center h-full border-t-[3px] border-transparent';

function NavLink({ isMobile = false }: NavLinkProps) {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  return (
    <nav className={isMobile ? mobileContainerClasses : desktopContainerClasses}>
      {links.map((link) => {
        const isActive = currentPath === link.url.toLowerCase();
        const activeClasses = isActive
          ? 'border-faded-jade-500 text-faded-jade-600 dark:text-faded-jade-400'
          : 'border-transparent';

        return (
          <div key={link.name} className={`${isMobile ? mobileLinkClasses : desktopLinkClasses} ${activeClasses}`}>
            <Link
              to={link.url}
              className="hover:text-faded-jade-600 dark:hover:text-faded-jade-300 cursor-pointer text-lg font-medium transition-colors duration-200"
              aria-current={isActive ? 'page' : undefined}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default NavLink;
