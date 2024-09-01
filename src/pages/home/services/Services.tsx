import SectionHead from "../../../components/common/sectionHead/SectionHead";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../../../components/core/carousel";
import ServiceCardLoader from "../../../components/ui/loaders/ServiceCardLoader";
import { useGetAllServicesQuery } from "../../../redux/features/service/serviceApi";
import { IService } from "../../../types";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { data: services, isLoading, isFetching } = useGetAllServicesQuery({});

  return (
    <div className="py-20">
      <SectionHead
        title="Offering Quality Services"
        desc="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer."
      />
      <div className="relative container mx-auto px-[4%] my-10 ">
        <Carousel>
          <CarouselContent className="space-x-5">
            {isLoading || isFetching
              ? Array.from({ length: 4 }).map((_, i) => (
                  <ServiceCardLoader key={i} />
                ))
              : services?.data?.map((service: IService) => (
                  <CarouselItem
                    key={service._id}
                    className="basis-1/4 overflow-visible mb-24"
                  >
                    <ServiceCard service={service} />
                  </CarouselItem>
                ))}
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
