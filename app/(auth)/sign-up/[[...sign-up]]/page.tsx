import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="">
      <h1 className="font-[600] text-[64px] text-center text-[white]">
        Let&apos;s get started
      </h1>
      <h2 className="font-[500] text-[24px] text-center text-[white]">
        Create your account to start investing today
      </h2>
      <div className="ml-[425px] mt-[50px] mb-[50px]">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
