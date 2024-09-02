import { Breadcrumb } from "antd";
import { IoHomeOutline } from "react-icons/io5";
import coverImage from "../../assets/images/banner/slide4.jpg";
import AnimatedBackground from "../../components/core/animated-background";
import { TextEffect } from "../../components/core/text-effect";
import { carWashingServiceCategories } from "../../const/carWashingServiceCategories";
const ServicePage = () => {
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
        <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] container mx-auto px-[5%] py-6 text-xl">
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

        <div className="container mx-auto px-[5%] grid grid-cols-12 my-10">
          <aside className="col-span-3">
            <div className="flex flex-col w-full  rounded-md border border-slate-300 bg-white p-2">
              <AnimatedBackground
                defaultValue={carWashingServiceCategories[0].categoryName}
                className="rounded-lg bg-slate-100 w-full h-10 divide-y"
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
                    className="inline-flex h-9 w-full items-center justify-start text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-primary"
                  >
                    {tab.categoryName}
                  </button>
                ))}
              </AnimatedBackground>
            </div>
          </aside>
          <aside className="col-span-9">main</aside>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
