import client1 from "../../../assets/images/client/logo1.jpg";
import client2 from "../../../assets/images/client/logo2.jpg";
import client3 from "../../../assets/images/client/logo3.jpg";
import client4 from "../../../assets/images/client/logo4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../../../components/core/carousel";
import SectionDivider from "../../../components/ui/sectionDivider/SectionDivider";

export default function Client() {
  const clientImage = [
    client1,
    client2,
    client3,
    client4,
    client1,
    client2,
    client3,
    client4,
  ];
  return (
    <>
      <SectionDivider />
      <div className=" relative w-full  bg-slate-50">
        <Carousel className="container mx-auto py-4">
          <CarouselContent>
            {clientImage.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/5 basis-1/2 ">
                <div className="flex justify-center items-center">
                  <img src={image} alt="" className="h-28" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            className="absolute  top-1/2 left-auto  w-full justify-between gap-2"
            classNameButton="bg-primary *:stroke-white dark:bg-primary dark:*:stroke-white"
            alwaysShow
          />
        </Carousel>
      </div>
    </>
  );
}
