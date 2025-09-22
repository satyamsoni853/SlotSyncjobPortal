import React from "react";
import SlotSyncLogo from "../Images/SlotSynclogo.png";
import {
  IconBellMinus,
  IconSettings,
  IconSnowboarding,
} from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLink from "./NavLink";
function Header() {
  return (
    <div className="w-full bg-mine-shaft-950 text-white h-28 flex justify-between items-center px-8 border-b border-gray-700">
      <div className="flex items-center bg-mine-shaft-900 rounded-full p-2 space-x-4">
        <IconSnowboarding className="cursor-pointer text-faded-jade-400" />
        <p className="text-2xl font-bold text-faded-jade-400 font-sans-serif">
          {" "}
          SlotSync
        </p>
      </div>
      <div >
      {/* NavLink Component Code Inline */}
      {NavLink()}
      </div>
      <div className="flex items-center bg-mine-shaft-900 rounded-full p-2 space-x-4">
        <p className="hover:text-gray-300 cursor-pointer">
          <Avatar color="cyan" radius="xl">
            SS
          </Avatar>
        </p>
        <Indicator offset={6} processing color="faded-jade.4" withBorder>
          {" "}
          <IconBellMinus
            size={30}
            className="cursor-pointer rounded-full p-1 bg-mine-shaft-700"
          />
        </Indicator>

        <IconSettings
          size={30}
          className="cursor-pointer rounded-full p-1 bg-mine-shaft-700 "
        />
      </div>
    </div>
  );
}

export default Header;
