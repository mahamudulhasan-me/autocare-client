import { GrUserWorker } from "react-icons/gr";
import { RiHomeOfficeLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import sectionDiv from "../../../assets/images/bg-img.png";
import BtnPrimary from "../../../components/ui/buttons/BtnPrimary";
import CarPolishGallery from "./CarPolishGallery";
import PolishCard from "./PolishCard";
const CarPolish = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-[4%] grid grid-cols-12 gap-x-5">
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
            <div className="grid grid-cols-3 items-center justify-between gap-x-8">
              <PolishCard
                count={1800}
                icon={<GrUserWorker />}
                title="Engineers & Workers"
              />
              <PolishCard
                count={620}
                icon={<RiHomeOfficeLine />}
                title="Factory In Worldwide"
              />{" "}
              <PolishCard
                count={1527}
                icon={<VscWorkspaceTrusted />}
                title="Projects Completed"
              />
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
        style={{ backgroundImage: `url(${sectionDiv})` }}
        className="w-full h-8 mt-10"
      ></div>
    </div>
  );
};

export default CarPolish;
