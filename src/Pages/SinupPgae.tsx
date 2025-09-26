import React, { useState, useEffect } from 'react';
import { IconSnowboarding } from "@tabler/icons-react";
import Signup from '../SignupLogin/Signup';
import Login from '../SignupLogin/Login';

interface AuthPageProps {
  isLogin?: boolean;
}

function BrandingSection() {
  return (
    <>
      <div className="flex items-center rounded-full bg-gray-800 shadow-[0px_0px_30px_rgba(255,255,255,0.05)] p-4 space-x-4">
        <IconSnowboarding className="cursor-pointer text-faded-jade-400" size={48} />
        <p className="text-4xl font-bold text-faded-jade-400 font-sans-serif">
          SlotSync
        </p>
      </div>
      <p className="text-2xl text-mine-shaft-200 font-serif mt-4">Find Job that Made for You</p>
    </>
  );
}

function SinupPgae({ isLogin = false }: AuthPageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [isLogin]);

  const brandingClasses = `hidden lg:flex w-2/5 bg-gray-900 text-white flex-col justify-center items-center p-8 transition-transform duration-1000 ease-in-out rounded-2xl`;
  const formClasses = `w-full lg:w-3/5 bg-gray-800 flex justify-center items-center transition-transform duration-1000 ease-in-out`;

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {isLogin ? (
        <>
          <div className={`${formClasses} ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
            <Login />
          </div>
          <div className={`${brandingClasses} ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}>
            <BrandingSection />
          </div>
        </>
      ) : (
        <>
          <div className={`${brandingClasses} ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
            <BrandingSection />
          </div>
          <div className={`${formClasses} ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}>
            <Signup />
          </div>
        </>
      )}
    </div>
  );
}

export default SinupPgae;