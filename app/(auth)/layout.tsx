import React from "react";
import Image from "next/image";
import dapptizeLogo from "@/public/assets/images/dapptize-logo.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">
      <Image src={dapptizeLogo} alt="" className="ml-[20px] mt-[10px]" />
      {children}
    </main>
  );
};

export default Layout;
