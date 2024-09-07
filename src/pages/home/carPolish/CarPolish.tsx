import { FaQuoteLeft } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import bg from "../../../assets/images/banner/bg1.png";
import AnimatedBackground from "../../../components/core/animated-background";
import { InView } from "../../../components/core/in-view";
import BtnPrimary from "../../../components/ui/buttons/BtnPrimary";
import CarPolishGallery from "./CarPolishGallery";
import PolishCard from "./PolishCard";
const ITEMS = [
  {
    count: 1800,
    icon: <GrUserWorker />,
    title: "Engineers & Workers",
  },
  {
    count: 620,
    icon: <RiHomeOfficeLine />,
    title: "Factory In Worldwide",
  },
  {
    count: 1557,
    icon: <VscWorkspaceTrusted />,
    title: "Projects Completed",
  },
];
const CarPolish = () => {
  return (
    <div className="mt-20 mb-5">
      <div className="container mx-auto md:px-[4%] px-4 md:grid grid-cols-12 gap-x-5">
        <div className="col-span-7">
          <h1 className="uppercase text-slate-900 text-2xl font-semibold">
            Car <span className="text-primary">polish</span>
          </h1>
          <h6 className="text-lg text-slate-900 font-[500]">
            Innovation & Adoption
          </h6>
          <div className="space-y-6 mt-8">
            <p className="text-slate-800 text-justify">
              There are many variations of passages of Lorem Ipsum typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularized in the 1960s with the release of Learjet sheets
              containing..
            </p>
            <div className="md:grid grid-cols-3 gap-x-8 space-y-6 md:space-y-0">
              <AnimatedBackground
                className="rounded-md bg-slate-800  w-full"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                enableHover
              >
                {ITEMS.map((item, index) => (
                  <div
                    key={index}
                    data-id={`card-${index}`}
                    className="w-full flex justify-center items-center"
                  >
                    <PolishCard
                      count={item.count}
                      icon={item.icon}
                      title={item.title}
                    />
                  </div>
                ))}
              </AnimatedBackground>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
            <BtnPrimary title="Book Service" />
          </div>
        </div>
        <div className="col-span-5 mt-10">
          <CarPolishGallery />
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full md:h-32 mt-20 bg-primary bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <InView
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <div className="container mx-auto px-[5%] md:flex justify-between items-center h-full py-10 space-y-5 md:space-y-0">
            <FaQuoteLeft className="text-4xl text-white" />
            <h1 className="text-slate-100 text-2xl font-semibold">
              “Take care of your car in the garage, and the car will take care
              of you on the road.”
            </h1>
            <button className=" text-white  rounded-md flex items-stretch gap-1 group">
              <span className="bg-slate-900 rounded-l-md px-5 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
                Get Quote
              </span>
              <span className=" bg-slate-900 px-2 py-2 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </InView>
      </div>
    </div>
  );
};

export default CarPolish;
