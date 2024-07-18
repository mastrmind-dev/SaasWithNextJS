import { useForm, SubmitHandler } from "react-hook-form";
import { ReactNode, useEffect, useState } from "react";

type IFormInput = {
  email: string;
};

type StepProps = {
  onNext: () => void;
};

const Step4 = () => {
  const { control, handleSubmit, formState } = useForm<IFormInput>({});
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
  };

  useEffect(() => {
    return () => {
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 5000);;
    };
  }, []);

  return (
    <div className="">
      
    </div>
  );
};

export default Step4;
