import { ReactNode, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AnimatedNumber } from "../../../components/core/animated-number";
const PolishCard = ({
  title,
  icon,
  count,
}: {
  title: string;
  icon: ReactNode;
  count: number;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(count);
  }, [count]);
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm flex flex-col justify-center items-center py-6 space-y-2">
      <div className="size-24 rounded-full bg-primary flex justify-center items-center text-white text-5xl">
        {icon}
      </div>
      <div className="flex items-center text-primary">
        <AnimatedNumber
          className="text-3xl  text-center font-semibold"
          springOptions={{
            bounce: 0,
            duration: 2000,
          }}
          value={value}
        />
        <FaPlus size={24} />
      </div>
      <p className=" text-slate-900 font-[500] capitalize">{title}</p>
    </div>
  );
};

export default PolishCard;
