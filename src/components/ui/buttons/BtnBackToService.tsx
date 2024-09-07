import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const BtnBackToService = () => {
  return (
    <>
      <Link
        to={"/services"}
        className=" text-white  rounded-md flex items-stretch gap-1 group mt-8"
      >
        <span className=" bg-primary px-2 py-2 flex justify-center items-center text-2xl rounded-l-md hover:bg-opacity-90 transition-opacity ">
          <MdOutlineKeyboardArrowLeft />
        </span>
        <span className="bg-primary rounded-r-md px-5 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
          Back to Services
        </span>
      </Link>
    </>
  );
};

export default BtnBackToService;
