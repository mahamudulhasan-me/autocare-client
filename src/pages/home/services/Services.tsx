import SectionHead from "../../../components/common/sectionHead/SectionHead";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../../../components/core/carousel";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="py-20">
      <SectionHead />
      <div className="relative container mx-auto px-[4%] my-10 ">
        <Carousel>
          <CarouselContent className="space-x-5">
            <CarouselItem className="basis-1/4 overflow-visible mb-24">
              <ServiceCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4 overflow-visible mb-24">
              <ServiceCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4 overflow-visible mb-24">
              <ServiceCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4 overflow-visible mb-24">
              <ServiceCard />
            </CarouselItem>

            <CarouselItem className="basis-1/4 overflow-visible mb-24">
              <ServiceCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4 overflow-visible mb-24">
              <ServiceCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation
            className="absolute -bottom-14 left-auto top-auto w-full justify-end gap-2"
            classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
            alwaysShow
          />
        </Carousel>
      </div>
    </div>
  );
}