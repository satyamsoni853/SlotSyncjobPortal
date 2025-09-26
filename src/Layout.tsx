import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMantineColorScheme } from '@mantine/core';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.toLowerCase() === '/login' || location.pathname.toLowerCase() === '/signup';
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    const root = document.documentElement;
    if (colorScheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [colorScheme]);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="min-h-screen transition-colors duration-200 bg-gradient-to-b from-faded-jade-50 via-white to-faded-jade-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
