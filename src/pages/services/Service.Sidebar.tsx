import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload, FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import AnimatedBackground from "../../components/core/animated-background";
import { carWashingServiceCategories } from "../../const/carWashingServiceCategories";

const ServiceSidebar = () => {
  return (
    <div className="space-y-8 md:space-y-0 pt-10 md:pt-0">
      <div className="hidden md:block">
        <h1 className="text-2xl font-semibold capitalize">Categories</h1>
        <div className="w-1/4 h-0.5 bg-primary mt-2 mb-6"></div>
        <div className="flex flex-col w-full  rounded-sm  bg-white ">
          <AnimatedBackground
            defaultValue={carWashingServiceCategories[0].categoryName}
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
                data-id={tab.categoryName}
                type="button"
                className="inline-flex h-12 w-full items-center justify-start text-slate-950 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-white data-[checked=true]:font-semibold pt-2 pb-2 px-2  border-b"
              >
                {tab.categoryName}
              </button>
            ))}
          </AnimatedBackground>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold capitalize">
          Get your brochures
        </h1>
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
      <div>
        <h1 className="text-2xl font-semibold capitalize">Contact Us</h1>
        <div className="w-1/4 h-0.5 bg-primary mt-2 mb-6"></div>
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <MdOutlineLocationOn className="text-slate-900 text-2xl" />
            <div>
              <h6 className="text-slate-900 font-semibold uppercase">
                Address
              </h6>
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
    </div>
  );
};

export default ServiceSidebar;
