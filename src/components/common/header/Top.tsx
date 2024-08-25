import { FaRegEnvelope } from "react-icons/fa6";
import { HiMiniPhone } from "react-icons/hi2";
import { MdOutlineWatchLater } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-black.png";
const Top = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-1 py-1 grid grid-cols-12">
        <div className="col-span-5">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-52" />
          </Link>
        </div>
        <div className="col-span-7 flex items-center justify-between">
          <div className="py-2">
            <h2 className="flex items-center gap-1 text-primary uppercase  font-[500]">
              <HiMiniPhone size={22} /> <span>Call us</span>
            </h2>
            <p className="text-sm">+123 456 789</p>
          </div>
          <div className="py-2">
            <h2 className="flex items-center gap-1 text-primary uppercase  font-[500]">
              <FaRegEnvelope size={22} /> <span> Send us a Mail</span>
            </h2>
            <p className="text-sm">info@autocare.com</p>
          </div>
          <div className="py-2">
            <h2 className="flex items-center gap-1 text-primary uppercase  font-[500]">
              <MdOutlineWatchLater size={22} /> <span> Opening Hours</span>
            </h2>
            <p className="text-sm">Mon -Sat: 7:00 - 17:00</p>
          </div>
          <div className="text-white bg-primary p-2 rounded-md flex items-center justify-center gap-2">
            <VscCallOutgoing size={24} className="animate-bounce" />
            <div>
              <h1 className="font-[500] uppercase">Call Toll Free</h1>
              <p className="text-sm font-[500]">+123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
