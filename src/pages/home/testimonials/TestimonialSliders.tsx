import { FcBusinessman } from "react-icons/fc";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../../../components/core/carousel";

const TestimonialSliders = () => {
  return (
    <>
      <h3 className="text-3xl  font-semibold uppercase">
        WHAT CUSTOMERS <span className="text-primary">SAID</span>
      </h3>
      <p className="my-2">
        Lorem ipsum dolor sit amet, consectet adipi sed do eiusmod tempor
        incididunt modo labore et dolore magna aliqu...
      </p>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="border mt-8 border-slate-300 rounded-sm p-5 overflow-visible mb-20">
            <div className="relative">
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos illo dolor quae vel, optio consequatur? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Animi laborum
                laudantium non minima rerum repudiandae!
              </p>
              <div className="flex items-end gap-1 absolute -bottom-[70px]">
                <div className="bg-white border border-slate-300 size-20 flex justify-center items-center rounded-sm ">
                  <FcBusinessman size={64} />
                </div>
                <div className="-space-y-1">
                  <h6 className="font-semibold">Mahamudul Hasan</h6>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="border mt-8 border-slate-300 rounded-sm p-5 overflow-visible mb-20">
            <div className="relative">
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos illo dolor quae vel, optio consequatur? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Animi laborum
                laudantium non minima rerum repudiandae!
              </p>
              <div className="flex items-end gap-1 absolute -bottom-[70px]">
                <div className="bg-white border border-slate-300 size-20 flex justify-center items-center rounded-sm ">
                  <FcBusinessman size={64} />
                </div>
                <div className="-space-y-1">
                  <h6 className="font-semibold">Mahamudul Hasan</h6>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="border mt-8 border-slate-300 rounded-sm p-5 overflow-visible mb-20">
            <div className="relative">
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos illo dolor quae vel, optio consequatur? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Animi laborum
                laudantium non minima rerum repudiandae!
              </p>
              <div className="flex items-end gap-1 absolute -bottom-[70px]">
                <div className="bg-white border border-slate-300 size-20 flex justify-center items-center rounded-sm ">
                  <FcBusinessman size={64} />
                </div>
                <div className="-space-y-1">
                  <h6 className="font-semibold">Mahamudul Hasan</h6>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="relative flex items-end justify-between w-full">
          <button className=" text-white  rounded-md flex items-stretch gap-0.5 group">
            <span className="bg-primary rounded-l-md px-3 py-2 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase text-sm">
              See All Review
            </span>
            <span className=" bg-primary p-1 flex justify-center items-center text-xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
          <CarouselNavigation
            className="absolute -bottom-4 left-auto top-auto w-full justify-end gap-2"
            classNameButton="bg-zinc-800 *:stroke-primary dark:bg-primary dark:*:stroke-zinc-primary"
            alwaysShow
          />
        </div>
      </Carousel>
    </>
  );
};

export default TestimonialSliders;
