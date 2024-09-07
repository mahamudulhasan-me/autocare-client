import SectionDivider from "../../../components/ui/sectionDivider/SectionDivider";
import TestimonialForm from "./TestimonialForm";
import TestimonialSliders from "./TestimonialSliders";
const Testimonials = () => {
  return (
    <>
      <SectionDivider />
      <div className="md:bg-gradient-testimonial w-full md:py-20 pt-20 md:pt-0 bg-slate-900">
        <div className="container mx-auto md:px-[4%] px-4 md:grid grid-cols-2 space-y-5 md:space-y-0">
          <div className="md:pr-8 px-2 md:px-0">
            <h3 className="md:text-3xl text-2xl text-white  font-semibold uppercase">
              give your <span className="text-primary">feedback</span>
            </h3>
            <p className="my-2 text-slate-50">
              Lorem ipsum dolor sit amet, consectet adipi sed do eiusmod tempor
              incididunt modo labore et dolore magna aliqu...
            </p>
            <TestimonialForm />
          </div>

          <div className="md:pl-8 bg-slate-100 p-2 md:p-0 pb-20 md:mb-0">
            <TestimonialSliders />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
