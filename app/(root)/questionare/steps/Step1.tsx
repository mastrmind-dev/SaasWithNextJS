import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ReactNode, useState } from "react";
import Image from "next/image";
import personal from "@/public/assets/images/personal.svg";
import work from "@/public/assets/images/work.png";
import school from "@/public/assets/images/school.svg";

type IFormInput = {
  email: string;
};

type StepProps = {
  onNext: () => void;
};

const Step1 = ({ onNext }: StepProps) => {
  const { control, handleSubmit, formState } = useForm<IFormInput>({});
  const [loading, setLoading] = useState(false);
  const [clickedNo, setClickedNo] = useState(0);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
  };

  return (
    <div className="flex items-center justify-center w-full p-4 gap-x-[30px] ">
      <div
        className={`flex flex-col gap-y-[10px] w-[150px] h-[150px] bg-[#FFFFFF1A] border-[0.5px] border-[#FFFFFF80] rounded-[18px] py-[12px] px-[40px] items-center justify-center text-center ${
          clickedNo === 0 && "bg-selected-gradient"
        }`}
        onClick={() => {
          setClickedNo(0);
        }}
        onDoubleClick={onNext}
      >
        <Image
          src={work}
          alt=""
          style={{ minWidth: "100px", height: "90px" }}
        />
        <span className="font-[600] text-[16px] text-[#B9B9B9]">Work</span>
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
        <Image src={personal} width={40} alt="" />
        <span className="font-[600] text-[16px] text-[#B9B9B9]">Personal</span>
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
        <Image src={school} width={60} alt="" />
        <span className="font-[600] text-[16px] text-[#B9B9B9]">School</span>
      </div>
    </div>
  );
};

export default Step1;
