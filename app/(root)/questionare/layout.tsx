import Image from "next/image";
import React from "react";
import dapptizeLogo from "@/public/assets/images/dapptize-logo.svg";
import { UserButton } from "@clerk/nextjs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Image src={dapptizeLogo} alt="" className="ml-[20px] mt-[10px]" />
      <div className="ml-[20px]">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
      {children}
    </main>
  );
};

export default layout;
