import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import bg from "../../assets/images/bg12.jpg";
import Counter from "./Counter";
const OverviewCounter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-blend-overlay bg-slate-900/60 bg-cover bg-center bg-no-repeat w-full h-full flex justify-center items-center bg-fixed"
    >
      <div className="container mx-auto md:px-[4%] px-4  my-20 grid md:grid-cols-4 gap-y-10">
        <Counter
          icon={<AiOutlineFundProjectionScreen />}
          title="Completed Project"
          number={1035}
        />
        <Counter
          icon={<AiOutlineFundProjectionScreen />}
          title="Active Experts"
          number={1124}
        />
        <Counter
          icon={<AiOutlineFundProjectionScreen />}
          title="Happy Clients"
          number={834}
        />
        <Counter
          icon={<AiOutlineFundProjectionScreen />}
          title="Developer Hand"
          number={538}
        />
      </div>
    </div>
  );
};

export default OverviewCounter;
