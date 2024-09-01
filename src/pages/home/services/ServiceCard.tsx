import { BiSolidCarGarage } from "react-icons/bi";
import { FaHandsWash } from "react-icons/fa";
import { MdKeyboardArrowRight, MdOutlineLocalCarWash } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { SiOwasp, SiWasmcloud, SiWasmer } from "react-icons/si";
import { Link } from "react-router-dom";
import { IService } from "../../../types";

const ServiceCard = ({ service }: { service: IService }) => {
  const { coverImage, description, name } = service;

  // Array of icons
  const icons = [
    MdOutlineLocalCarWash,
    SiWasmer,
    SiWasmcloud,
    FaHandsWash,
    SiOwasp,
    BiSolidCarGarage,
    RiCaravanLine,
    // Add more icons as needed
  ];

  // Select a random icon
  const RandomIcon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div className="relative group">
      <img src={coverImage} alt="" className="rounded-xl w-full min-h-72" />
      <div className="absolute -bottom-20 left-6 right-6 min-h-36 bg-white mx-auto shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] pt-4 rounded-lg flex flex-col justify-end items-center">
        <div className="size-24 absolute -top-[30%] rounded-full bg-primary flex justify-center items-center text-white text-5xl">
          <RandomIcon />
        </div>
        <div className="text-center space-y-2 mt-9">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-24 text-center px-5">
            {description}
          </p>
          <Link
            to={"/"}
            className="text-primary font-semibold capitalize w-full bg-white z-10 pb-4 rounded-b-lg flex justify-center items-center group/button"
          >
            <span>View Details</span>{" "}
            <MdKeyboardArrowRight className="text-2xl transition-all duration-300 group-hover/button:ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
