import React, { useState } from "react";
import {
  IconBellMinus,
  IconSettings,
  IconSnowboarding,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return  ( location.pathname === '/Signup' || location.pathname === '/Login' ? null :
    <div className="w-full bg-gray-900 text-white h-28 flex justify-between items-center px-8 border-b border-gray-700 relative">
      <div className="flex items-center bg-gray-900 shadow-[0px_0px_30px_rgba(255,255,255,0.05)] rounded-full p-2 space-x-4">
        <IconSnowboarding className="cursor-pointer text-faded-jade-400" />
        <p className="text-2xl font-bold text-faded-jade-400 font-sans-serif">
          SlotSync
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex">
        <NavLink isMobile={false} />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-28 left-0 w-full bg-gray-900 lg:hidden">
          <NavLink isMobile={true} />
        </div>
      )}

      <div className="hidden md:flex items-center bg-gray-900 shadow-[0px_0px_30px_rgba(255,255,255,0.05)] rounded-full p-2 space-x-4">
        <p className="hover:text-gray-300 cursor-pointer">
          <Avatar color="cyan" radius="xl">
            SS
          </Avatar>
        </p>
        <Indicator offset={6} processing color="faded-jade.4" withBorder>
          <IconBellMinus
            size={30}
            className="cursor-pointer rounded-full p-1 bg-mine-shaft-700"
          />
        </Indicator>
        <IconSettings
          size={30}
          className="cursor-pointer rounded-full p-1 bg-mine-shaft-700"
        />
      </div>
    </div>
  );
}

export default Header;
