"use client";

import React, { useState } from "react";
import Sidebar from "@/components/SideBar";
import { SearchBar, Button } from "@/components/ui/index";
import Image from "next/image";
import {
  doorbell,
  moon,
  notification,
  roundedFilledPlus,
  sun,
  wallet,
} from "@/public/assets";
import { TabsDemo } from "./tabs";

const DashboardPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex gap-x-[20px]">
      <div className="left-side-bar items-center">
        <Sidebar />
      </div>
      <div className="dashboard">
        <div className="dashboard-head">
          <div className="flex mt-[20px]">
            <SearchBar
              className="bg-transparent border-[#ffffff50] w-[400px]"
              type="text"
              placeholder="Search your projects"
            />
            <div className="flex gap-x-[13px] ml-[220px]">
              <Button
                variant="ghost"
                className="border-[1px] border-[#ffffff50] font-[500] text-[16px] text-white relative w-[40px]"
              >
                <Image
                  src={doorbell}
                  alt="notification"
                  className="min-w-[20px]"
                />
                <div className="absolute top-[-4px] right-[-4px] w-3 h-3 bg-[#194BFF] rounded-full"></div>
              </Button>
              <Button
                variant="ghost"
                className="border-[1px] border-[#ffffff50] font-[500] text-[16px] text-white"
              >
                <Image src={wallet} alt="wallet" className="mr-[5px]" />
                Connect Wallet
              </Button>
              <Button
                variant="ghost"
                className="border-[1px] border-[#ffffff50] font-[500] text-[16px] text-white"
              >
                <Image
                  src={roundedFilledPlus}
                  alt="wallet"
                  className="mr-[5px] h-[23px]"
                />
                New dApp
              </Button>
              <Image
                src={toggle ? sun : moon}
                alt="data light theme toggle button"
                className="cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
          </div>
        </div>
        <div className="dashboard-body border">
          <TabsDemo />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
