import { IoMdAdd } from "react-icons/io";

interface BtnAddProps {
  title: string;
  onClick: () => void; // Add onClick prop
}

const BtnAdd: React.FC<BtnAddProps> = ({ title, onClick }) => {
  return (
    <button
      className="rounded-md relative w-40 h-10 cursor-pointer flex items-center border border-primary bg-primary group hover:bg-primary active:bg-primary active:border-primary overflow-hidden"
      onClick={onClick} // Attach onClick handler
    >
      <span className="text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
        {title}
      </span>
      <span className="absolute right-0 h-full w-10 rounded-md bg-primary flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300 text-white">
        <IoMdAdd className="text-2xl" />
      </span>
    </button>
  );
};

export default BtnAdd;
