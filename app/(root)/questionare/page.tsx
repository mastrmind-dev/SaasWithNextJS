"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import StepLayout from "./stepLayout";

const QuestionarePage = () => {
  const [step, setStep] = useState(1);
  const { user } = useUser();

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  let content;
  let stepTitle;
  let stepSubtitle;
  let layoutTitle;
  let layoutSubTitle;

  switch (step) {
    case 1:
      content = <Step1 onNext={nextStep} />;
      stepTitle = "What would you like to use Dapptize for? ";
      stepSubtitle = `Welcome, ${user?.firstName}!`;
      layoutTitle = "Password Reset";
      layoutSubTitle = "Reset your Password";
      break;
    case 2:
      content = <Step2 onNext={nextStep} />;
      stepTitle = "Whom do you want to build apps for?";
      stepSubtitle = `Welcome, ${user?.firstName}!`;
      layoutTitle = "Password Reset";
      layoutSubTitle = "Reset your Password";
      break;
    case 3:
      content = <Step3 onNext={nextStep} />;
      stepTitle = "Which level describe you better?";
      stepSubtitle = `Welcome, ${user?.firstName}!`;
      layoutTitle = "Password Reset";
      layoutSubTitle = "Reset your Password";
      break;
    case 4:
      content = <Step4 />;
      stepTitle = "Please Wait, we are preparing us for you!";
      stepSubtitle = `Welcome, ${user?.firstName}!`;
      layoutTitle = "Password Changed Successfully";
      layoutSubTitle = "";
      break;
    default:
      content = <div>Unknown Step</div>;
      stepTitle = "Error";
      stepSubtitle = "An error has occurred";
      layoutTitle = "Error";
      layoutSubTitle = "";
  }

  return (
    <>
      <div className="flex flex-col px-4 sm:px-8 md:px-32 lg:px-48 xl:px-64 2xl:max-w-screen-2xl 2xl:mx-auto">
        {step === 5 ? (
          content
        ) : (
          <StepLayout stepTitle={stepTitle} stepSubtitle={stepSubtitle}>
            {content}
          </StepLayout>
        )}
      </div>
    </>
  );
};

export default QuestionarePage;
