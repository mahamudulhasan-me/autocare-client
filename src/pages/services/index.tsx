import { Alert, Breadcrumb } from "antd";
import Search from "antd/es/input/Search";
import { IoIosRefresh } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import MyCheckbox from "../../components/ui/checkbox/MyCheckbox";
import PageBanner from "../../components/ui/pageBanner/PageBanner";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import {
  clearParams,
  setParams,
} from "../../redux/features/service/serviceSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IService } from "../../types";
import ServiceCard from "../home/services/ServiceCard";
import ServiceSidebar, {
  ContactUs,
  DownloadBrochures,
} from "./Service.Sidebar";

const ServicePage = () => {
  const { params } = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();
  const { data: services, isError } = useGetAllServicesQuery(params);

  const handleSorting = (value: string) =>
    dispatch(
      setParams(
        { name: "sortBy", value } // Add or remove sorting parameter
      )
    );

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
            <div className="bg-slate-100 w-full flex flex-wrap md:flex-row flex-col items-center justify-between px-2 py-4 rounded-sm mb-10 space-y-5 md:space-y-0">
              <div className="w-[65%] flex items-center  gap-x-5">
                <Search
                  placeholder="input search text"
                  enterButton
                  size="large"
                  className="w-1/2"
                />
                {params.length > 0 && (
                  <button
                    onClick={() => dispatch(clearParams())}
                    className=" text-white  rounded-md flex items-stretch gap-1 group"
                  >
                    <span className="bg-primary rounded-l-md px-4 py-2 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
                      Clear Filter
                    </span>
                    <span className=" bg-primary px-1.5 py-1 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
                      <IoIosRefresh />
                    </span>
                  </button>
                )}
              </div>
              <div className="flex items-center gap-x-5">
                <MyCheckbox
                  title="Sort by Price"
                  onChange={() => handleSorting("price")}
                />
                <MyCheckbox
                  title="Sort by Duration"
                  onChange={() => handleSorting("duration")}
                />
              </div>
            </div>
            <div className="md:grid grid-cols-3 gap-x-4 gap-y-24 space-y-28 md:space-y-0 mb-28 md:mb-0">
              {isError && (
                <div className="flex justify-center items-center col-span-3">
                  <Alert
                    message="Service Not Found"
                    type="error"
                    className="w-1/2 text-center text-lg text-rose-600"
                  />
                </div>
              )}
              {services?.data.length > 0 &&
                !isError &&
                services?.data?.map((service: IService) => (
                  <ServiceCard service={service} key={service._id} />
                ))}
            </div>
            <div className="md:hidden block mt-28 space-y-8">
              {DownloadBrochures} {ContactUs}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
