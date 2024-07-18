import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ReactNode, useState } from "react";
import Image from "next/image";
import startup from "@/public/assets/images/startup.svg";
import smallBusiness from "@/public/assets/images/small-business.svg";
import largeBusiness from "@/public/assets/images/large-business.svg";
import government from "@/public/assets/images/government.svg";

type IFormInput = {
  email: string;
};

type StepProps = {
  onNext: () => void;
};

const Step2 = ({ onNext }: StepProps) => {
  const { control, handleSubmit, formState } = useForm<IFormInput>({});
  const [loading, setLoading] = useState(false);
  const [clickedNo, setClickedNo] = useState(0);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
  };

  return (
    <div className="flex items-center justify-center w-full p-4 gap-x-[30px] ">
      <div
        className={`flex flex-col gap-y-[10px] w-[150px] h-[150px] bg-[#FFFFFF1A] border-[0.5px] border-[#FFFFFF80] rounded-[18px] py-[12px] px-[0px] items-center justify-center text-center ${
          clickedNo === 0 && "bg-selected-gradient"
        }`}
        onClick={() => {
          setClickedNo(0);
        }}
        onDoubleClick={onNext}
      >
        <Image src={startup} width={40} alt="" />
        <span className="font-[600] text-[16px] text-[#B9B9B9]">Startup</span>
      </div>
      <div
        className={`flex flex-col gap-y-[10px] w-[150px] h-[150px] bg-[#FFFFFF1A] border-[0.5px] border-[#FFFFFF80] rounded-[18px] py-[12px] px-[0px] items-center justify-center text-center ${
          clickedNo === 1 && "bg-selected-gradient"
        }`}
        onClick={() => {
          setClickedNo(1);
        }}
        onDoubleClick={onNext}
      >
        <Image src={smallBusiness} width={60} alt="" />
        <span className="font-[600] text-[16px] text-[#B9B9B9]">
          Small <br /> Business
        </span>
      </div>
      <div
        className={`flex flex-col gap-y-[10px] w-[150px] h-[150px] bg-[#FFFFFF1A] border-[0.5px] border-[#FFFFFF80] rounded-[18px] py-[12px] px-[40px] items-center justify-center text-center ${
          clickedNo === 2 && "bg-selected-gradient"
        }`}
        onClick={() => {
          setClickedNo(2);
        }}
        onDoubleClick={onNext}
      >
        <Image src={largeBusiness} alt="" />
        <span className="font-[600] text-[16px] text-[#B9B9B9]">
          Large Business
        </span>
      </div>
      <div
        className={`flex flex-col gap-y-[10px] w-[150px] h-[150px] bg-[#FFFFFF1A] border-[0.5px] border-[#FFFFFF80] rounded-[18px] py-[12px] px-[40px] items-center justify-center text-center ${
          clickedNo === 3 && "bg-selected-gradient"
        }`}
        onClick={() => {
          setClickedNo(3);
        }}
        onDoubleClick={onNext}
      >
        <Image src={government} alt="" />
        <span className="font-[600] text-[16px] text-[#B9B9B9]">
          Government
        </span>
      </div>
    </div>
  );
};

export default Step2;
