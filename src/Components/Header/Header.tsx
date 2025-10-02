import React, { useState } from 'react';
import {
  IconMenu2,
  IconMoon,
  IconSnowboarding,
  IconSun,
  IconX,
} from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import NavLink from './NavLink';
import UserProfile from './UserProfile';
import AuthButtons from './AuthButtons';
import { useAuth } from '../../AuthContext';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const { isAuthenticated } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const handleColorSchemeToggle = () => {
    toggleColorScheme();
  };

  return (
    <header className="w-full h-28 flex justify-between items-center px-4 sm:px-6 lg:px-8 border-b border-faded-jade-200 dark:border-gray-700 relative transition-colors duration-200 bg-gradient-to-r from-faded-jade-50 via-white to-faded-jade-100 dark:bg-gray-900 dark:from-transparent dark:via-transparent">
      <div className="flex items-center bg-white/70 dark:bg-gray-900 shadow-[0px_10px_30px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm rounded-full px-4 py-2 space-x-3 transition-colors duration-200">
        <IconSnowboarding className="cursor-pointer text-faded-jade-500 dark:text-faded-jade-400" />
        <p className="text-2xl font-bold text-faded-jade-600 dark:text-faded-jade-400 font-sans-serif">
          SlotSync
        </p>
      </div>

      <div className="hidden lg:flex">
        <NavLink isMobile={false} />
      </div>

      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={handleColorSchemeToggle}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="rounded-full border border-faded-jade-200 dark:border-gray-700 bg-faded-jade-100 dark:bg-mine-shaft-800 text-faded-jade-700 dark:text-white p-2 transition-colors duration-200 hover:shadow-md"
        >
          {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
        </button>

        {isAuthenticated ? <UserProfile /> : <AuthButtons />}

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            className="p-2 rounded-full border border-transparent hover:border-faded-jade-200 dark:hover:border-gray-700 transition-colors duration-200 bg-white/70 dark:bg-gray-900"
          >
            {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-28 left-0 w-full bg-gradient-to-b from-faded-jade-50 to-white dark:from-transparent dark:to-transparent dark:bg-gray-900 border-t border-faded-jade-200 dark:border-gray-800 lg:hidden transition-colors duration-200">
          <NavLink isMobile />
        </div>
      )}
    </header>
  );
}

export default Header;
