import { Alert, Breadcrumb } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import MyCheckbox from "../../components/ui/checkbox/MyCheckbox";
import PageBanner from "../../components/ui/pageBanner/PageBanner";
import {
  resetFilter,
  setSearch,
  setSort,
} from "../../redux/features/filter/filterSlice";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IService } from "../../types";
import ServiceCard from "../home/services/ServiceCard";
import ServiceSidebar, {
  ContactUs,
  DownloadBrochures,
} from "./Service.Sidebar";

const ServicePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filtersBy = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const { sort, category, search } = filtersBy;
  const { data: services, isError } = useGetAllServicesQuery(filtersBy);
  const [latestSearchTerm, setLatestSearchTerm] = useState<string>("");

  // useEffect to dispatch setSearch after 5 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(latestSearchTerm);
      dispatch(setSearch(latestSearchTerm));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [latestSearchTerm, dispatch]);

  // Handle input change and update local state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value); // Update local state immediately
    setLatestSearchTerm(value); // Update latest search term
  };
  const handleClearFilter = () => {
    dispatch(resetFilter());
    setSearchTerm("");
  };
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
              <div className="md:w-[65%] md:flex items-center  md:gap-x-5 space-y-2 md:space-y-0">
                <Search
                  placeholder="input search text"
                  enterButton
                  size="large"
                  className="md:w-1/2"
                  onChange={handleChange}
                  value={searchTerm}
                />

                {(sort || category || search) && (
                  <button
                    onClick={handleClearFilter}
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
                  onChange={() => dispatch(setSort("price"))}
                  checked={sort === "price"}
                />
                <MyCheckbox
                  title="Sort by Duration"
                  onChange={() => dispatch(setSort("duration"))}
                  checked={sort === "duration"}
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
