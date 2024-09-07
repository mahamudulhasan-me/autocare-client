import { Link } from "react-router-dom";
import team3 from "../../../assets/images/team/pic3.png";
import { socialProfileLinks } from "../../../const/SocialProfileLinks";
const TeamMember2 = () => {
  return (
    <>
      <div className="relative w-full h-80 group  border-b-4 border-primary mt-36 md:mt-0">
        <div className="absolute h-60 w-1 bg-primary bottom-0 left-0"></div>
        <div className="absolute h-60 w-1 bg-primary right-0 bottom-0"></div>
        <div className="absolute w-full h-1 bg-primary top-[24%]"></div>
        <img
          src={team3}
          alt=""
          className="absolute bottom-4 h-96  right-12 group-hover:bottom-10 transition-all duration-500"
        />
        <div className="absolute w-[97%]  bg-slate-900 -bottom-10  right-[11px] left-[5px] flex flex-col justify-center items-center text-white min-h-20">
          <h3 className="text-2xl font-[500]"> Hackson Willingham</h3>
          <p>Manager</p>
        </div>
        <div className="bg-primary absolute  bottom-[40px] left-[6px] right-0 w-fit h-10 flex mx-auto justify-center items-center space-x-5 px-8 text-white text-lg">
          {socialProfileLinks.map((link, index) => (
            <Link to={link.url} key={index} className="">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamMember2;
