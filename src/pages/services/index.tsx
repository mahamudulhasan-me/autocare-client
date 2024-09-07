import { Breadcrumb } from "antd";
import Search from "antd/es/input/Search";
import { IoHomeOutline } from "react-icons/io5";
import MyCheckbox from "../../components/ui/checkbox/MyCheckbox";
import PageBanner from "../../components/ui/pageBanner/PageBanner";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import { IService } from "../../types";
import ServiceCard from "../home/services/ServiceCard";
import ServiceSidebar from "./Service.Sidebar";
const ServicePage = () => {
  const { data: services } = useGetAllServicesQuery({});
  return (
    <div>
      <PageBanner title="All Services" desc="Lorem ipsum dolor sit amet" />
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

        <div className="container mx-auto md:px-[4%] px-4 md:grid grid-cols-12 my-10 gap-x-12">
          <aside className="hidden md:block col-span-3 space-y-10">
            <ServiceSidebar />
          </aside>
          <aside className="col-span-9">
            <div className="bg-slate-100 w-full flex md:flex-wrap flex-col items-center justify-between px-2 py-4 rounded-sm mb-10 space-y-5 md:space-y-0">
              <Search
                className="md:w-[30%]"
                placeholder="input search text"
                enterButton
                size="large"
              />
              <div className="flex items-center gap-x-5">
                <MyCheckbox title="Sort by Price" />
                <MyCheckbox title="Sort by Duration" />
              </div>
            </div>
            <div className="md:grid grid-cols-3 gap-x-4 gap-y-24 space-y-28 md:space-y-0 mb-28 md:mb-0">
              {services?.data?.map((service: IService) => (
                <ServiceCard service={service} key={service._id} />
              ))}
            </div>
            <ServiceSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
