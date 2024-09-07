import { BsCloudRain, BsFuelPumpDiesel } from "react-icons/bs";
import { MdOutlineLocalCarWash } from "react-icons/md";
import AnimatedBackground from "../../../components/core/animated-background";
import KeyFeatureCard from "./KeyFeatureCard";
export default function KeyFeatures() {
  const ITEMS = [
    {
      id: 1,
      icon: MdOutlineLocalCarWash,
      title: "Car wash 100% without detergents",
    },
    {
      id: 2,
      icon: BsCloudRain,
      title: "Rain/Snow protection programs",
    },
    {
      id: 3,
      icon: BsFuelPumpDiesel,
      title: "Efficient modern wash machines",
    },
    {
      id: 4,
      icon: MdOutlineLocalCarWash,
      title: "Online Appointment Booking system",
    },
  ];

  return (
    <div className="container mx-auto md:px-[4%] px-4 md:grid grid-cols-2 p-10 md:grid-cols-4 gap-x-8 my-20 space-y-10 md:space-y-0">
      <AnimatedBackground
        className="rounded-md bg-slate-800 z-10"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {ITEMS.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <KeyFeatureCard
              number={item.id}
              title={item.title}
              icon={item.icon}
            />
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
}
