import dayjs from "dayjs";
import { BiLike } from "react-icons/bi";
import { FaAngleRight, FaRegComments } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CarWashBlog } from "../../../types/blog";

const BlogCard = ({ blog }: { blog: CarWashBlog }) => {
  const { by, comments, date, description, image, likes, name } = blog;
  return (
    <div className="relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md group">
      <div className="relative w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full rounded-t-md transform transition-transform duration-[3000ms] group-hover:scale-150"
        />
        <div className="absolute bottom-0 left-5 bg-primary font-semibold text-lg flex items-center justify-center text-center text-white px-4 py-2 w-14">
          {dayjs(date).format("DD MMM")}
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-5 mt-2">
          <p className="flex items-center text-sm gap-x-2 ">
            <FaRegCircleUser className="text-primary text-base" />{" "}
            <span>by {by}</span>
          </p>
          <p className="flex items-center text-sm gap-x-2">
            <BiLike className="text-primary text-base" />{" "}
            <span>{likes} Likes</span>
          </p>
          <p className="flex items-center text-sm gap-2">
            <FaRegComments className="text-primary text-lg" />{" "}
            <span>{comments} Comments</span>
          </p>
        </div>
        <Link
          to=""
          className="block text-2xl font-semibold text-slate-900 hover:text-primary transition-all"
        >
          {name}
        </Link>
        <p className="text-justify text-slate-700">
          {description.slice(0, 100)}...
        </p>
        <Link
          to="#"
          className="text-primary font-semibold flex gap-x-1 items-center group/link"
        >
          Read More{" "}
          <span className="transition-all transform group-hover/link:ml-2">
            <FaAngleRight />
          </span>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary transition-all duration-300"></div>
    </div>
  );
};

export default BlogCard;
