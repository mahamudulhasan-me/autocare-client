import { Watermark } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import notfound from "../assets/images/not-found.png";

const NotFoundLayout = () => {
  return (
    <div>
      <Watermark content="404-Not Found">
        <div className="min-h-[80vh] w-screen  flex flex-col justify-center items-center">
          <img src={notfound} alt="" />
          <h1 className="text-3xl font-bold text-primary">
            Oops... Not Found!
          </h1>
          <Link
            to={"/"}
            className=" text-white px-3   rounded-md flex items-stretch gap-1 group mt-10"
          >
            <span className=" bg-primary px-2 py-2 flex justify-center items-center text-2xl rounded-l-md hover:bg-opacity-90 transition-opacity ">
              <MdOutlineKeyboardArrowLeft />
            </span>
            <span className="bg-primary rounded-r-md px-5 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
              Back to Home
            </span>
          </Link>
        </div>
      </Watermark>
    </div>
  );
};

export default NotFoundLayout;
