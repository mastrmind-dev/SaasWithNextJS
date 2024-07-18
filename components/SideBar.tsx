import React from "react";
import Image from "next/image";
import dapptizeLogo from "@/public/assets/images/dapptize-logo.svg";
import { Button } from "./ui/button";
import {
  community,
  insight,
  marketplace,
  myApplications,
  myTeam,
  resources,
} from "@/public/assets";
import ProfileBox from "./ProfileBox";

const Sidebar = () => {
  const items = [
    { icon: myApplications, title: "My Applications" },
    { icon: marketplace, title: "Marketplace" },
    { icon: myTeam, title: "My Team" },
    { icon: resources, title: "Resources" },
    { icon: community, title: "Community" },
    { icon: insight, title: "Whats New" },
  ];

  return (
    <div className="flex flex-col rounded-[10px] bg-[#FFFFFF1A] h-[95vh] mt-[2.5vh] ml-[2.5vh] w-[270px] py-[3px] px-[22px]">
      <Image src={dapptizeLogo} alt="" className="mt-[10px]" />
      <div className="flex flex-col mt-[20px] gap-y-4">
        {items.map((item, i) => (
          <Button
            key={i}
            variant="ghost"
            className="font-[500] text-[#ADADAD] text-[16px] gap-x-[12px] w-fit"
          >
            <Image src={item.icon} alt="" />
            {item.title}
          </Button>
        ))}
      </div>
      {/* profile box */}
      <ProfileBox />
    </div>
  );
};

export default Sidebar;
