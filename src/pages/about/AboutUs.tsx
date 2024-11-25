import { Breadcrumb } from "antd";
import { FaUserFriends } from "react-icons/fa";
import { FaBrave, FaGear } from "react-icons/fa6";
import { IoHomeOutline, IoTrophyOutline } from "react-icons/io5";
import aboutImg from "../../assets/images/worker.png";
import PageBanner from "../../components/ui/pageBanner/PageBanner";
import SectionDivider from "../../components/ui/sectionDivider/SectionDivider";
import AboutCompanyCard from "./AboutCompanyCard";
import OverviewCounter from "./OverviewCounter";

const AboutUsPage = () => {
  return (
    <section>
      <PageBanner title="About Us" desc="About Us" />
      <div className=" shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  py-6 text-xl">
        <Breadcrumb
          className="container mx-auto md:px-[4%] px-4"
          items={[
            {
              href: "/",
              title: <IoHomeOutline />,
            },
            {
              title: "About Us",
            },
          ]}
        />
      </div>
      <div className="container mx-auto md:px-[4%] px-4 md:grid grid-cols-12 my-20">
        <aside className="col-span-8 mr-10">
          <div className="w-full flex flex-col justify-start items-start px-2 md:px-0">
            <h1 className="md:text-3xl text-2xl text-center font-bold uppercase text-slate-900">
              About Company
            </h1>
            <div
              className="flex space-x-1 items-center mt-3"
              style={{ transform: "translateY(-50%) skewX(-10deg)" }}
            >
              <p className="w-10 h-1 bg-primary "></p>
              <p className="w-4 h-3 bg-slate-900 skew-y-[20deg]"></p>
              <p className="w-24 h-1 bg-primary"></p>
            </div>
            {/* <p className=" text-slate-900 font-[500] md:w-[60%] text-center mt-4">
       
      </p> */}
          </div>
          <article className="text-slate-800 font-[500] mt-4 text-lg">
            There are many variations of passages of Lorem Ipsum typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </article>
          <article className="text-slate-800 font-[500] mt-4 text-lg">
            There are many variations of passages of Lorem Ipsum typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the with the
            release of Letraset sheets containing Lorem Ipsum
          </article>
          <div className="grid grid-cols-2 mt-10 gap-y-14">
            <AboutCompanyCard
              icon={<FaGear />}
              title="WE'RE EXPERTS"
              desc="There are many variations of passages of Lorem Ipsum"
            />
            <AboutCompanyCard
              icon={<FaUserFriends />}
              title="WE'RE FRIENDLY"
              desc="There are many variations of passages of Lorem Ipsum"
            />
            <AboutCompanyCard
              icon={<FaBrave />}
              title="WE'RE ACCURATE"
              desc="There are many variations of passages of Lorem Ipsum"
            />
            <AboutCompanyCard
              icon={<IoTrophyOutline />}
              title="WE'RE TRUSTED"
              desc="There are many variations of passages of Lorem Ipsum"
            />
          </div>
        </aside>
        <figure className="col-span-4 rounded-md">
          <img src={aboutImg} />
        </figure>
      </div>
      <SectionDivider />
      <>
        <OverviewCounter />
      </>
    </section>
  );
};

export default AboutUsPage;
