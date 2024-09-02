import { Breadcrumb } from "antd";
import Search from "antd/es/input/Search";
import { IoHomeOutline } from "react-icons/io5";
import coverImage from "../../assets/images/banner/slide4.jpg";
import { TextEffect } from "../../components/core/text-effect";
import MyCheckbox from "../../components/ui/checkbox/MyCheckbox";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import { IService } from "../../types";
import ServiceCard from "../home/services/ServiceCard";
import ServiceSidebar from "./Service.Sidebar";
const ServicePage = () => {
  const { data: services } = useGetAllServicesQuery({});
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${coverImage})` }}
        className="w-full h-fit bg-cover bg-center bg-no-repeat bg-slate-900/60 bg-blend-overlay"
      >
        <div className="container mx-auto px-[5%] h-full text-white py-20 space-y-2">
          <TextEffect
            per="char"
            preset="fade"
            className="text-3xl font-semibold"
          >
            All Services
          </TextEffect>
          <div
            className="flex space-x-1 items-center mt-3"
            style={{ transform: "translateY(-50%) skewX(-10deg)" }}
          >
            <p className="w-10 h-1 bg-primary "></p>
            <p className="w-4 h-3 bg-white skew-y-[20deg]"></p>
            <p className="w-28 h-1 bg-primary"></p>
          </div>

          <TextEffect per="word" preset="fade" className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            rem, animi porro perspiciatis distinctio impedit.
          </TextEffect>
        </div>
      </div>
      <div>
        <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] container mx-auto px-[5%] py-6 text-xl">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: <IoHomeOutline />,
              },
              {
                title: "All Services",
              },
            ]}
          />
        </div>

        <div className="container mx-auto px-[5%] grid grid-cols-12 my-10 gap-x-12">
          <aside className="col-span-3 space-y-10">
            <ServiceSidebar />
          </aside>
          <aside className="col-span-9">
            <div className="bg-slate-100 w-full flex items-center justify-between px-2 py-4 rounded-sm mb-10">
              <Search
                className="w-[30%]"
                placeholder="input search text"
                enterButton
                size="large"
              />
              <div className="flex items-center gap-x-5">
                <MyCheckbox title="Sort by Price" />
                <MyCheckbox title="Sort by Duration" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {services?.data?.map((service: IService) => (
                <ServiceCard service={service} key={service._id} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
