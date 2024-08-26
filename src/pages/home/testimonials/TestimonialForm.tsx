import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Rating from "react-rating";
const TestimonialForm = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-y-4 mt-8">
      <div className="text-3xl text-primary">
        <Rating emptySymbol={<FaRegStar />} fullSymbol={<FaStar />} />
      </div>
      <div className="w-full flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded-sm  text-lg text-slate-900 focus:outline-none  focus:ring-1 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 rounded-sm  text-lg text-slate-900 focus:outline-none  focus:ring-1 focus:ring-primary"
        />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Your Feedback"
        className="w-full  p-2 rounded-sm  text-lg text-slate-900 focus:outline-none  focus:ring-1 focus:ring-primary"
        rows={4}
      ></textarea>
      <div className="flex items-center gap-4">
        {/* <button className=" text-white  flex items-stretch gap-1 group">
          <span className=" bg-primary px-2 py-1 flex justify-center items-center text-xl  rounded-l-md hover:bg-opacity-90 transition-opacity ">
            <GrPowerReset />
          </span>
          <span className="bg-primary rounded-r-md px-6 py-2 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
            reset
          </span>
        </button> */}
        <button className=" text-white  rounded-md flex items-stretch gap-1 group">
          <span className="bg-primary rounded-l-md px-8 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
            Submit
          </span>
          <span className=" bg-primary px-2 py-1 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
            <MdOutlineKeyboardArrowRight />
          </span>
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;
