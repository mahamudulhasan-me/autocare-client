import team1 from "../../../assets/images/team/pic1.png";
import team2 from "../../../assets/images/team/pic2.png";
import team3 from "../../../assets/images/team/pic3.png";
const Team = () => {
  return (
    <div className="container mx-auto px-[10%] my-20">
      <h1>Team</h1>
      <div className="grid grid-cols-3 gap-x-20 ">
        <div className="relative w-full h-80 group">
          <div className="absolute h-96 w-1 bg-primary bottom-2.5 left-0"></div>
          <div className="absolute h-60 w-1 bg-primary right-0 bottom-0"></div>
          <div className="absolute w-full h-1 bg-primary top-0  skew-y-[24deg]"></div>
          <img
            src={team2}
            alt=""
            className="absolute bottom-8 h-96 left-8 right-5 group-hover:bottom-12 transition-all duration-500"
          />
          <div className="absolute w-[98%] h-24 bg-slate-900 -bottom-10 ring-4 ring-primary right-[11px] left-[3px]"></div>
        </div>
        <div className="relative w-full h-80 group  border-b-4 border-primary">
          <div className="absolute h-60 w-1 bg-primary bottom-0 left-0"></div>
          <div className="absolute h-60 w-1 bg-primary right-0 bottom-0"></div>
          <div className="absolute w-full h-1 bg-primary top-[24%]"></div>
          <img
            src={team3}
            alt=""
            className="absolute bottom-8 h-96 left-8 right-5 group-hover:bottom-12 transition-all duration-500"
          />
          <div className="absolute w-[97%]  bg-slate-900 -bottom-10  right-[11px] left-[5px] flex flex-col justify-center items-center text-white min-h-20">
            <h3 className="text-2xl font-[500]"> William Dames</h3>
            <p>Manager</p>
          </div>
        </div>
        <div className="relative w-full h-80 group">
          <div className="absolute h-60 w-1 bg-primary bottom-2.5 left-0"></div>
          <div className="absolute h-96 w-1 bg-primary right-0 bottom-0"></div>
          <div className="absolute w-full h-1 bg-primary top-0  -skew-y-[21deg]"></div>
          <img
            src={team1}
            alt=""
            className="absolute bottom-8 h-96 left-8 right-5 group-hover:bottom-12 transition-all duration-500"
          />
          <div className="absolute w-[98%] h-24 bg-slate-900 -bottom-10 ring-4 ring-primary right-[11px] left-[3px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Team;
