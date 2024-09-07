import banner4 from "../../../assets/images/banner/slide4.jpg";
import banner5 from "../../../assets/images/banner/slide5.jpg";
import banner6 from "../../../assets/images/banner/slide6.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "../../../components/core/carousel";
import { InView } from "../../../components/core/in-view";
import { TextEffect } from "../../../components/core/text-effect";
import BtnPrimary from "../../../components/ui/buttons/BtnPrimary";

export default function Banner() {
  return (
    <div className="relative z-0">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div
              style={{ backgroundImage: `url(${banner4})` }}
              className="md:h-[calc(100vh-50px)] h-[80vh] w-full bg-cover bg-center bg-no-repeat bg-slate-900/60 bg-blend-overlay flex items-center justify-center"
            >
              <div className="container mx-auto md:px-[4%] px-4">
                <TextEffect
                  per="char"
                  preset="fade"
                  className="md:text-7xl text-4xl text-white font-semibold uppercase md:w-[50%] space-y-5"
                >
                  Make Your car last longer
                </TextEffect>
                <TextEffect
                  per="word"
                  preset="slide"
                  className="text-xl text-slate-50 mb-12 mt-8 md:w-[55%] space-y-1"
                >
                  There are many variations of passages of Lorem Ipsum
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </TextEffect>
                <InView
                  variants={{
                    hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  viewOptions={{ margin: "0px 0px 0px 0px" }}
                  transition={{ duration: 1, ease: "backInOut" }}
                >
                  <BtnPrimary title="Read More" />
                </InView>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{ backgroundImage: `url(${banner5})` }}
              className="md:h-[calc(100vh-50px)] h-[80vh] w-full bg-cover bg-center bg-no-repeat bg-slate-900/60 bg-blend-overlay flex items-center justify-center"
            >
              <div className="container mx-auto md:px-[4%] px-4 flex flex-col justify-end items-center mt-36">
                <TextEffect
                  per="char"
                  preset="slide"
                  className="md:text-7xl text-4xl text-white font-semibold uppercase"
                >
                  Give Your Car
                </TextEffect>
                <TextEffect
                  per="word"
                  preset="slide"
                  className="text-xl text-slate-50 mb-12 mt-8 md:w-[40%] text-center"
                >
                  A Premium Revolution Slider Template for your Website
                  Highlights & Multi-Media Content.
                </TextEffect>
                <InView
                  variants={{
                    hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  viewOptions={{ margin: "0px 0px 0px 0px" }}
                  transition={{ duration: 0.8, ease: "backIn" }}
                >
                  <BtnPrimary title="Read More" />
                </InView>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div
              style={{ backgroundImage: `url(${banner6})` }}
              className="md:h-[calc(100vh-50px)] h-[80vh] w-full bg-cover bg-center bg-no-repeat bg-slate-900/60 bg-blend-overlay flex items-center justify-center"
            >
              <div className="container mx-auto md:px-[4%] px-4">
                <TextEffect
                  per="char"
                  preset="fade"
                  className="md:text-7xl text-4xl text-white font-semibold uppercase md:w-[50%] space-y-1"
                >
                  Make Your car last longer
                </TextEffect>
                <TextEffect
                  per="word"
                  preset="slide"
                  className="text-xl text-slate-50 mb-12 mt-8 md:w-[60%] space-y-1"
                >
                  There are many variations of passages of Lorem Ipsum
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled
                </TextEffect>
                <InView
                  variants={{
                    hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  viewOptions={{ margin: "0px 0px 0px 0px" }}
                  transition={{ duration: 0.8, ease: "backInOut" }}
                >
                  <BtnPrimary title="Read More" />
                </InView>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation
          className="absolute bottom-2 left-auto top-auto w-full justify-end gap-2"
          classNameButton="bg-zinc-800 *:stroke-primary dark:bg-primary dark:*:stroke-zinc-primary"
          alwaysShow
        />
        <CarouselIndicator className="absolute bottom-5" />
      </Carousel>
    </div>
  );
}
