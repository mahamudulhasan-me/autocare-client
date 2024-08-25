import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const BtnPrimary = ({ title }: { title: string }) => {
  return (
    <>
      <button className=" text-white  rounded-md flex items-stretch gap-1 group">
        <span className="bg-primary rounded-l-md px-5 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
          {title}
        </span>
        <span className=" bg-primary px-2 py-2 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
          <MdOutlineKeyboardArrowRight />
        </span>
      </button>
    </>
  );
};

export default BtnPrimary;
