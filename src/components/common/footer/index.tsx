import logo from "../../../assets//images/logo.png";
import SocialMedia from "./SocialMedia";
const FooterSection = () => {
  return (
    <footer className="bg-slate-900 py-20 mt-5">
      <div className="container mx-auto px-[4%] grid grid-cols-4">
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
      </div>
    </footer>
  );
};

export default FooterSection;
