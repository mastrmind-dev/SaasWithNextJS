type StepLayoutProps = {
  children: React.ReactNode;
  onSkip?: () => void;
  stepTitle: string;
  stepSubtitle: string;
  currentStep?: number;
};

const StepLayout = ({
  children,
  stepTitle,
  stepSubtitle,
  currentStep,
}: StepLayoutProps) => {
  return (
    <div className="z-50 p-4 md:p-8 mt-[-70px]">
      <div className="p-4 px-4">
        <div className="flex flex-col py-8 md:py-16">
          <div className="flex flex-col items-center gap-6">
            <div className="text-base font-semibold text-white font-poppins text-[32px] font-[500]">
              {stepSubtitle}
            </div>
            <div className="text-[48px] font-semibold text-white font-poppins text-center">
              {stepTitle}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default StepLayout;
