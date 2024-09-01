/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { InView } from "../../../components/core/in-view";
import BtnPrimary from "../../../components/ui/buttons/BtnPrimary";
import { useCreateTestimonialMutation } from "../../../redux/features/testimonial/testimonialApi";
import { useAppSelector } from "../../../redux/hooks";
interface Inputs {
  name: string;
  email: string;
  message: string;
}
const TestimonialForm = () => {
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const [createTestimonial, { isLoading, isError, error, isSuccess }] =
    useCreateTestimonialMutation();
  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: { name: user?.name, email: user?.email },
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("Thank you for your feedback");
      reset();
      setRating(0);
    } else if (isError) {
      toast.error((error as any).data.message);
    }
  }, []);
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    try {
      if (!rating) {
        toast.error("Please provide a rating");
      } else if (isAuthenticated) {
        createTestimonial({
          user: user?._id,
          rating,
          description: data?.message,
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          x: -100, // Change this value to negative to make the element come from the left
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewOptions={{ margin: "0px 0px -350px 0px" }}
    >
      <form
        className="relative flex flex-col justify-center items-center gap-y-4 mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!isAuthenticated && (
          <div className="absolute glassmorphism top-0 right-0 w-full h-full rounded-md z-10 flex flex-col justify-center items-center space-y-2">
            <div>
              <h2 className="text-2xl text-slate-900 font-semibold text-center mt-8">
                Please log in to provide <br />{" "}
                <span className="text-primary">your feedback</span>
              </h2>
            </div>
            <BtnPrimary title="Login" onClick={() => navigate("/login")} />
          </div>
        )}
        <div className="text-3xl text-primary">
          {/* @ts-ignore */}
          <Rating
            // @ts-ignore
            value={rating}
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
            onChange={(value) => setRating(value)}
          />
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <input
            required
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded-sm  text-lg text-slate-900 focus:outline-none  focus:ring-1 focus:ring-primary"
            {...register("name")}
          />
          <input
            required
            type="text"
            placeholder="Email"
            className="w-full p-2 rounded-sm  text-lg text-slate-900 focus:outline-none  focus:ring-1 focus:ring-primary"
            {...register("email")}
          />
        </div>
        <textarea
          required
          id=""
          placeholder="Your Feedback"
          className="w-full  p-2 rounded-sm  text-lg text-slate-900 focus:outline-none  focus:ring-1 focus:ring-primary"
          rows={4}
          {...register("message")}
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
          <button
            type="submit"
            disabled={isLoading}
            className=" text-white  rounded-md flex items-stretch gap-1 group"
          >
            <span className="bg-primary rounded-l-md px-8 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
              Submit
            </span>
            <span className=" bg-primary px-2 py-1 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </form>
    </InView>
  );
};

export default TestimonialForm;
