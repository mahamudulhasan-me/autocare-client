import { Breadcrumb } from "antd";
import { IoHomeOutline } from "react-icons/io5";
import BookedSlotOverview from "./BookedSlotOverview";

const BookedSlot = () => {
  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <Breadcrumb
        items={[
          {
            href: "/",
            title: <IoHomeOutline />,
          },
          {
            href: "",
            title: "Dashboard",
          },
          {
            title: "Booking Slots",
          },
        ]}
      />
      <div className="w-full h-full bg-white title-shadow py-2 px-4 rounded-md mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Booking History</h1>
      </div>
      <BookedSlotOverview />
    </div>
  );
};

export default BookedSlot;
