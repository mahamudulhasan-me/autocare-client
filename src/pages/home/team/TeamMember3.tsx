import { Link } from "react-router-dom";
import team1 from "../../../assets/images/team/pic1.png";
import { socialProfileLinks } from "../../../const/SocialProfileLinks";
const TeamMember3 = () => {
  return (
    <>
      <div className="relative w-full h-80 group  border-b-4 border-primary mt-36 md:mt-0">
        <div className="absolute h-[15.1rem] w-1 bg-primary bottom-0 left-0"></div>
        <div className="absolute h-96 w-1 bg-primary right-0 bottom-0"></div>
        <div className="absolute w-full h-1 bg-primary top-0  md:-skew-y-[22deg] -skew-y-[24deg]"></div>
        <img
          src={team1}
          alt=""
          className="absolute bottom-4 h-96  right-12 group-hover:bottom-10 transition-all duration-500"
        />
        <div className="absolute w-[97%]  bg-slate-900 -bottom-10  right-[11px] left-[5px] flex flex-col justify-center items-center text-white min-h-20">
          <h3 className="text-2xl font-[500]"> Hackson Willingham</h3>
          <p>Manager</p>
        </div>
        <div className="bg-primary absolute  bottom-[43px] right-[6px] w-10 h-fit flex flex-col justify-center items-center space-y-5 py-8 text-white text-lg">
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

export default TeamMember3;
