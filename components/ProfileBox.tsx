"use client";

import React from "react";
import { Button } from "./ui/button";
import { insight } from "@/public/assets";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

const ProfileBox = () => {
  const { user } = useUser();

  console.log(user);

  const items = [{ icon: insight, title: "Upgrade Now" }];

return (
  <div className="flex flex-col items-center bg-[#FFFFFF1A] w-[230px] h-[130px] p-[10px] border-[0.4px] border-[#FFFFFF30] rounded-[10px] mt-[50px]">
    <div className="flex flex-row gap-x-[10px]">
      <div className="flex items-center">
        <UserButton />
      </div>
      <div className="flex flex-col">
        <p className="font-[500] text-[16px] text-[#fff]">{user?.username}</p>
        <p className="font-[400] text-[12px] text-[#fff] ">
          {user?.emailAddresses[0].emailAddress}
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-y-4 mt-[20px]">
      {items.map((item, i) => (
        <Button
          key={i}
          variant="ghost"
          className="font-[500] text-[#ADADAD] text-[16px] gap-x-[12px] w-fit bg-selected-gradient"
        >
          <Image src={item.icon} alt="" />
          {item.title}
        </Button>
      ))}
    </div>
  </div>
);
};

export default ProfileBox;
