import { ReactNode, useEffect, useState } from "react";
import { AnimatedNumber } from "../../components/core/animated-number";

interface ICounterProps {
  icon: ReactNode;
  title: string;
  number: number;
}

const Counter = ({ icon, title, number }: ICounterProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(number);
  }, [number]);
  return (
    <div className="flex flex-col items-center group">
      <figure className="group-hover:text-6xl size-36 transition-all duration-200 rounded-full ring ring-primary text-white flex justify-center items-center text-5xl">
        {icon}
      </figure>

      <AnimatedNumber
        className="inline-flex items-center text-3xl font-semibold text-primary my-2 mt-4"
        springOptions={{
          bounce: 0,
          duration: 3000,
        }}
        value={value}
      />

      <h3 className="text-slate-100 text-xl">{title}</h3>
    </div>
  );
};

export default Counter;
