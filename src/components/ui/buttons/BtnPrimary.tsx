import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BtnLoader from "../loaders/BtnLoader";
const BtnPrimary = ({
  title,
  isLoading = false,
  onClick,
  disabled = false,
}: {
  title: string;
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className=" text-white  rounded-md flex items-stretch gap-1 group"
      >
        <span className="bg-primary rounded-l-md px-5 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
          {isLoading ? <BtnLoader /> : title}
        </span>
        <span className=" bg-primary px-2 py-2 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
          <MdOutlineKeyboardArrowRight />
        </span>
      </button>
    </>
  );
};

export default BtnPrimary;
