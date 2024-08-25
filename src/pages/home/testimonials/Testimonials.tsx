import { FcBusinessman } from "react-icons/fc";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../../../components/core/carousel";

const Testimonials = () => {
  return (
    <div className="bg-gradient-testimonial w-full py-20">
      <div className="container mx-auto px-[4%] grid grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-3xl text-center font-semibold text-slate-900">
            Testimonials
          </h3>
        </div>

        <div className="pl-8">
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
                    Dignissimos illo dolor quae vel, optio consequatur? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Animi
                    laborum laudantium non minima rerum repudiandae!
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
                    Dignissimos illo dolor quae vel, optio consequatur? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Animi
                    laborum laudantium non minima rerum repudiandae!
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
                    Dignissimos illo dolor quae vel, optio consequatur? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Animi
                    laborum laudantium non minima rerum repudiandae!
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
            <CarouselNavigation
              className="absolute bottom-3 left-auto top-auto w-full justify-end gap-2"
              classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
