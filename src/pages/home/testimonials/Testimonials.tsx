import SectionDivider from "../../../components/ui/sectionDivider/SectionDivider";
import TestimonialForm from "./TestimonialForm";
import TestimonialSliders from "./TestimonialSliders";
const Testimonials = () => {
  return (
    <>
      <SectionDivider />
      <div className="bg-gradient-testimonial w-full py-20">
        <div className="container mx-auto px-[4%] grid grid-cols-2">
          <div className="pr-8">
            <h3 className="text-3xl text-white  font-semibold uppercase">
              give your <span className="text-primary">feedback</span>
            </h3>
            <p className="my-2 text-slate-50">
              Lorem ipsum dolor sit amet, consectet adipi sed do eiusmod tempor
              incididunt modo labore et dolore magna aliqu...
            </p>
            <TestimonialForm />
          </div>

          <div className="pl-8">
            <TestimonialSliders />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
