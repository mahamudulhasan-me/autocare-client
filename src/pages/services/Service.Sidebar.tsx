import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload, FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import AnimatedBackground from "../../components/core/animated-background";
import { carWashingServiceCategories } from "../../const/carWashingServiceCategories";

import { setCategory } from "../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../redux/hooks";

export const DownloadBrochures = (
  <div>
    <h1 className="text-2xl font-semibold capitalize">Get your brochures</h1>
    <div className="w-1/4 h-0.5 bg-primary mt-2 mb-6"></div>
    <div className="space-y-5">
      <div className="flex items-center space-x-2 justify-between border border-primary rounded-sm pr-2  cursor-pointer hover:text-primary transition-colors">
        <div className="flex items-center space-x-2 h-full">
          <div className="size-14  bg-primary text-white   flex justify-center items-center text-2xl">
            <FaRegFilePdf />
          </div>
          <span className="font-[500]">Company Brochures</span>
        </div>
        <FiDownload size={22} />
      </div>
      <div className="flex items-center space-x-2 justify-between border border-primary rounded-sm pr-2  cursor-pointer hover:text-primary transition-colors">
        <div className="flex items-center space-x-2 h-full">
          <div className="size-14  bg-primary text-white   flex justify-center items-center text-2xl">
            <FaRegFilePdf />
          </div>
          <span className="font-[500]">Company Info</span>
        </div>
        <FiDownload size={22} />
      </div>
    </div>
  </div>
);
export const ContactUs = (
  <div>
    <h1 className="text-2xl font-semibold capitalize">Contact Us</h1>
    <div className="w-1/4 h-0.5 bg-primary mt-2 mb-6"></div>
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <MdOutlineLocationOn className="text-slate-900 text-2xl" />
        <div>
          <h6 className="text-slate-900 font-semibold uppercase">Address</h6>
          <p className="text-slate-900">123, Main Street, Your City</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FiPhone className="text-slate-900 text-2xl" />
        <div>
          <h6 className="text-slate-900 font-semibold uppercase">Phone</h6>
          <p className="text-slate-900">0800-123456 (24/7 Support Line)</p>
        </div>
      </div>
    </div>
  </div>
);

const ServiceSidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-8  pt-10 md:pt-0">
      <div className="hidden md:block">
        <h1 className="text-2xl font-semibold capitalize">Categories</h1>
        <div className="w-1/4 h-0.5 bg-primary mt-2 mb-6"></div>
        <div className="flex flex-col w-full  rounded-sm  bg-white ">
          <AnimatedBackground
            onValueChange={(value) => dispatch(setCategory(value))}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            defaultValue={carWashingServiceCategories[0].categoryId}
            className=" bg-primary w-full h-10 rounded-sm"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
          >
            {carWashingServiceCategories.map((tab) => (
              <button
                key={tab.categoryId}
                data-id={tab.categoryId}
                type="button"
                className="inline-flex h-12 w-full items-center justify-start text-slate-950 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-white data-[checked=true]:font-semibold pt-2 pb-2 px-2  border-b"
              >
                {tab.categoryName}
              </button>
            ))}
          </AnimatedBackground>
        </div>
      </div>
      {DownloadBrochures}
      {ContactUs}
    </div>
  );
};

export default ServiceSidebar;
