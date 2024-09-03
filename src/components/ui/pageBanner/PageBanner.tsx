import coverImageDefault from "../../../assets/images/banner/slide4.jpg";
import { TextEffect } from "../../core/text-effect";
const PageBanner = ({
  title,
  desc,
  coverImage,
}: {
  title: string;
  desc: string;
  coverImage?: string;
}) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${coverImage || coverImageDefault})` }}
        className="w-full h-fit bg-cover bg-center bg-no-repeat bg-slate-900/60 bg-blend-overlay"
      >
        <div className="container mx-auto px-[5%] h-full text-white py-20 space-y-2">
          <TextEffect
            per="char"
            preset="fade"
            className="text-3xl font-semibold"
          >
            {title}
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
            {desc}
          </TextEffect>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
