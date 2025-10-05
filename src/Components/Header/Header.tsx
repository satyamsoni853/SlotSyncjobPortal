import React, { useState } from 'react';
import {
  IconMenu2,
  IconMoon,
  IconSnowboarding,
  IconSun,
  IconX,
  IconBellMinus, IconSettings, IconUser, IconMessage, IconFileText, IconLogout
} from '@tabler/icons-react';
import { useMantineColorScheme, Avatar, Indicator, Menu } from '@mantine/core';
import NavLink from './NavLink';
import AuthButtons from './AuthButtons';
import { useAuth } from '../../AuthContext';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const user = useSelector((state: any) => state.user);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const handleColorSchemeToggle = () => {
    toggleColorScheme();
  };

  const handleLogout = () => {
    logout();
    navigate('/Login');
  };

  return (
    <header className="w-full h-28 flex justify-between items-center px-4 sm:px-6 lg:px-8 border-b border-faded-jade-200 dark:border-gray-700 relative transition-colors duration-200 bg-gradient-to-r from-faded-jade-50 via-white to-faded-jade-100 dark:bg-gray-900 dark:from-transparent dark:via-transparent">
      <Link to="/" className="no-underline">
        <div className="flex items-center bg-white/70 dark:bg-gray-900 shadow-[0px_10px_30px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm rounded-full px-4 py-2 space-x-3 transition-colors duration-200">
          <IconSnowboarding className="cursor-pointer text-faded-jade-500 dark:text-faded-jade-400" />
          <p className="text-2xl font-bold text-faded-jade-600 dark:text-faded-jade-400 font-sans-serif">
            SlotSync
          </p>
        </div>
      </Link>

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

        {isAuthenticated ? (
          <div className="hidden md:flex items-center bg-white/70 dark:bg-gray-900 shadow-[0px_10px_30px_rgba(19,121,111,0.1)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm rounded-full p-2 space-x-4 transition-colors duration-200">
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <div className="flex items-center cursor-pointer">
                  <Avatar color="cyan" radius="xl">
                    <span className="text-faded-jade-700 dark:text-white font-bold">{user?.name || 'User'}</span>
                  </Avatar>
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item component={Link} to="/profile" leftSection={<IconUser size={14} />}>
                  Profile
                </Menu.Item>
                <Menu.Item component={Link} to="/messages" leftSection={<IconMessage size={14} />}>
                  Message
                </Menu.Item>
                <Menu.Item component={Link} to="/resume" leftSection={<IconFileText size={14} />}>
                  Resume
                </Menu.Item>
                <Menu.Item color="red" leftSection={<IconLogout size={14} />} onClick={handleLogout}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Indicator offset={6} processing color="faded-jade.4" withBorder>
              <IconBellMinus size={30} className="cursor-pointer rounded-full p-1 bg-faded-jade-100 dark:bg-mine-shaft-700 text-faded-jade-700 dark:text-white transition-colors duration-200" />
            </Indicator>
            <IconSettings size={30} className="cursor-pointer rounded-full p-1 bg-faded-jade-100 dark:bg-mine-shaft-700 text-faded-jade-700 dark:text-white transition-colors duration-200" />
          </div>
        ) : (
          <AuthButtons />
        )}

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