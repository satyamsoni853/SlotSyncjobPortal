import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink({ isMobile }: { isMobile?: boolean }) {
  const links = [
    { name: "Find Job", url: "/Find-Job" },
    { name: "Find Talent", url: "/Find-Talent" },
    { name: "Upload Job", url: "/Upload-Job" },
    { name: "About Us", url: "/About-Us" },
  ];
  const location = useLocation();

  const mobileContainerClasses = 'flex flex-col items-center space-y-6 p-4';
  const desktopContainerClasses = 'flex items-center text-black h-full bg-gray-900 shadow-[0px_0px_30px_rgba(0,0,0,0.5)] rounded-full p-5 space-x-8';

  const mobileLinkClasses = 'border-b-2 w-full text-center pb-2';
  const desktopLinkClasses = 'border-t-[3px] items-center h-full';

  return (
    <div className={isMobile ? mobileContainerClasses : desktopContainerClasses}>
      {links.map((link) => (
        <div key={link.name} className={`${isMobile ? mobileLinkClasses : desktopLinkClasses} ${location.pathname === link.url ? 'border-faded-jade-400' : 'border-transparent'}`}>
          <Link to={link.url} className="hover:text-gray-300 cursor-pointer text-lg">
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavLink;