import { motion } from "framer-motion";
import pic1 from "../../../assets/images/polishGallery/pic1.jpg";
import pic10 from "../../../assets/images/polishGallery/pic10.jpg";
import pic2 from "../../../assets/images/polishGallery/pic2.jpg";
import pic3 from "../../../assets/images/polishGallery/pic3.jpg";
import pic4 from "../../../assets/images/polishGallery/pic4.jpg";
import pic5 from "../../../assets/images/polishGallery/pic5.jpg";
import pic6 from "../../../assets/images/polishGallery/pic6.jpg";
import pic7 from "../../../assets/images/polishGallery/pic7.jpg";
import pic8 from "../../../assets/images/polishGallery/pic8.jpg";
import pic9 from "../../../assets/images/polishGallery/pic9.jpg";
import { InView } from "../../../components/core/in-view";
const CarPolishGallery = () => {
  return (
    <InView
      viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
    >
      <div className="columns-2 gap-3 px-8 sm:columns-3">
        {[
          pic1,
          pic2,
          pic3,
          pic4,
          pic5,
          pic6,
          pic7,
          pic8,
          pic9,
          pic10,
          pic2,
        ].map((imgSrc, index) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              key={index}
              className="mb-4"
            >
              <img
                src={imgSrc}
                alt={`Image placeholder from cosmos.so, index:${index}`}
                className="size-full rounded-md object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </InView>
  );
};

export default CarPolishGallery;
