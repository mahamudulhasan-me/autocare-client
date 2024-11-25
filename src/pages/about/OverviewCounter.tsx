import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import bg from "../../assets/images/bg12.jpg";
import { AnimatedNumber } from "../../components/core/animated-number";
const OverviewCounter = () => {
  const [value, setValue] = useState(1053);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(10000);
  }
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-blend-overlay bg-slate-900/50 bg-cover bg-center bg-no-repeat w-full h-full flex justify-center items-center bg-fixed"
    >
      <div className="container mx-auto md:px-[4%] px-4  my-20 grid grid-cols-4">
        <div className="flex flex-col items-center">
          <figure className="size-32 rounded-full ring ring-slate-900 text-primary flex justify-center items-center text-5xl">
            <AiOutlineFundProjectionScreen />
          </figure>

          <AnimatedNumber
            className="inline-flex items-center text-3xl font-light text-zinc-800 dark:text-zinc-50"
            springOptions={{
              bounce: 0,
              duration: 10000,
            }}
            value={value}
          />

          <h3 className="text-white text-lg">Complete Projects</h3>
        </div>
      </div>
    </div>
  );
};

export default OverviewCounter;
