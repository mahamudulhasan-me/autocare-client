import { FaComments, FaFax, FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { MdKeyboardArrowRight, MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../../assets//images/logo.png";
import footerLine from "../../../assets/images/line.png";
import img1 from "../../../assets/images/polishGallery/pic1.jpg";
import img2 from "../../../assets/images/polishGallery/pic2.jpg";
import img3 from "../../../assets/images/polishGallery/pic3.jpg";
import SocialMedia from "./SocialMedia";
const FooterSection = () => {
  return (
    <footer className="bg-slate-900  mt-5">
      <div className="py-20 container mx-auto px-[4%] grid grid-cols-4 gap-x-8">
        <div>
          <img src={logo} alt="logo" className="w-52" />
          <p className="text-slate-50 mt-4 text-justify">
            Auto Care ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore agna aliquam
            erat . wisi enim ad minim veniam, quis tation. sit amet, consec
            tetuer.ipsum dolor sit amet, consectetuer.
          </p>
          <SocialMedia />
        </div>
        {/* recent post  */}
        <div>
          <h1 className="text-xl uppercase text-white font-semibold">
            Recent Post
          </h1>
          <div className="flex items-center justify-start gap-1 mt-2">
            <div className="w-4 h-2.5 bg-white -skew-x-[18deg]"></div>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <img src={img1} alt="" className="w-24 h-20 rounded-sm" />
              <div>
                <Link
                  to={"#"}
                  className="capitalize  font-semibold text-primary"
                >
                  How will auto care
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-slate-200">By</span>{" "}
                  <Link
                    to={"#"}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    Admin{" "}
                  </Link>
                  <p className="flex items-center gap-1">
                    <span className="text-slate-400">/ </span>
                    <FaComments className="text-primary text-lg" />{" "}
                    <span className="text-slate-200">15</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={img2} alt="" className="w-24 h-20 rounded-sm" />
              <div>
                <Link
                  to={"#"}
                  className="capitalize  font-semibold text-primary"
                >
                  Seven fact about
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-slate-200">By</span>{" "}
                  <Link
                    to={"#"}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    Admin{" "}
                  </Link>
                  <p className="flex items-center gap-1">
                    <span className="text-slate-400">/ </span>
                    <FaComments className="text-primary text-lg" />{" "}
                    <span className="text-slate-200">18</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={img3} alt="" className="w-24 h-20 rounded-sm" />
              <div>
                <Link
                  to={"#"}
                  className="capitalize  font-semibold text-primary"
                >
                  10 Things You
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-slate-200">By</span>{" "}
                  <Link
                    to={"#"}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    Admin{" "}
                  </Link>
                  <p className="flex items-center gap-1">
                    <span className="text-slate-400">/ </span>
                    <FaComments className="text-primary text-lg" />{" "}
                    <span className="text-slate-200">30</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our services  */}
        <div>
          <h1 className="text-xl uppercase text-white font-semibold">
            Our Services
          </h1>
          <div className="flex items-center justify-start gap-1 mt-2">
            <div className="w-4 h-2.5 bg-white -skew-x-[18deg]"></div>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="mt-8 space-y-1">
            {Array.from({ length: 6 }).map(() => (
              <p className="text-slate-200 flex items-center gap-1 border-b border-dashed border-slate-700 py-2">
                <MdKeyboardArrowRight size={20} />
                <Link to={"#"} className="hover:text-primary transition-colors">
                  Engine Diagnostics
                </Link>
              </p>
            ))}
          </div>
        </div>
        {/* contact us */}
        <div>
          <h1 className="text-xl uppercase text-white font-semibold">
            contact us
          </h1>
          <div className="flex items-center justify-start gap-1 mt-2">
            <div className="w-4 h-2.5 bg-white -skew-x-[18deg]"></div>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-2">
              <MdOutlineLocationOn className="text-slate-300 text-2xl" />
              <div>
                <h6 className="text-slate-200 font-semibold uppercase">
                  Address
                </h6>
                <p className="text-slate-400">123, Main Street, Your City</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-slate-300 text-2xl" />
              <div>
                <h6 className="text-slate-200 font-semibold uppercase">
                  Phone
                </h6>
                <p className="text-slate-400">
                  0800-123456 (24/7 Support Line)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaFax className="text-slate-300 text-2xl" />
              <div>
                <h6 className="text-slate-200 font-semibold uppercase">Fax</h6>
                <p className="text-slate-400">(123) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaRegEnvelope className="text-slate-300 text-2xl" />
              <div>
                <h6 className="text-slate-200 font-semibold uppercase">
                  email
                </h6>
                <p className="text-slate-400">2PQpX@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 w-full">
        <div
          style={{ backgroundImage: `url(${footerLine})` }}
          className="w-full h-1 bg-primary"
        ></div>
        <div className="container mx-auto px-[4%] flex items-center justify-between py-4 text-gray-200 text-sm">
          <p> &copy; 2022 All Rights Reserved</p>
          <p className="flex items-center gap-1">
            Design With <GiSelfLove className="text-primary text-xl" /> by
            <Link to={"#"} className="hover:text-primary transition-colors">
              Mahamudul Hasan
            </Link>
          </p>
          <nav className="space-x-4">
            <Link to={"#"} className="hover:text-primary transition-colors">
              About US
            </Link>
            <Link to={"#"} className="hover:text-primary transition-colors">
              FAQs
            </Link>
            <Link to={"#"} className="hover:text-primary transition-colors">
              Contact US
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
