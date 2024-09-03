import { Button, Skeleton, Tooltip } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import BtnPrimary from "../../components/ui/buttons/BtnPrimary";
import SlotLoader from "../../components/ui/loaders/SlotLoader";
import PageBanner from "../../components/ui/pageBanner/PageBanner";
import { useGetServiceQuery } from "../../redux/features/service/serviceApi";
import { useGetSlotsByServiceQuery } from "../../redux/features/slot/slotApi";
import { IService, ISlot } from "../../types";

// Define the type for grouped slots
type GroupedSlots = {
  [key: string]: ISlot[];
};

const ServiceDetails = () => {
  const [selectedSlotId, setSelectedSlotId] = useState<string>("");
  const { slugId } = useParams<{ slugId: string }>();
  const serviceId = slugId?.split("-").pop();

  const { data: service, isLoading: isLoadingService } =
    useGetServiceQuery(serviceId);
  const { _id, coverImage, description, name, duration, price } =
    (service?.data as IService) || {};

  const { data: slots, isLoading: isLoadingSlots } = useGetSlotsByServiceQuery({
    skip: isLoadingService,
    serviceId: _id,
  });

  // Group slots by date
  let groupedSlots;
  if (!isLoadingSlots) {
    const groupedSlotsFn: GroupedSlots | undefined = slots?.data?.reduce(
      (acc: GroupedSlots, slot: ISlot) => {
        const date = slot.date?.split("T")[0]; // Extract date part from ISO string
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(slot);
        return acc;
      },
      {}
    );
    groupedSlots = groupedSlotsFn;
  }

  const handleSelectedSlot = (slotId: string) => {
    setSelectedSlotId((prevSelectedSlotId) =>
      prevSelectedSlotId === slotId ? "" : slotId
    );
  };

  return (
    <div>
      <PageBanner
        title={name || "Service Details"}
        desc={description || "Lorem ipsum dolor sit amet"}
        coverImage={coverImage}
      />
      <div className="container mx-auto px-[10%] grid grid-cols-12 my-20">
        <aside className="col-span-5">
          {isLoadingService ? (
            <div className="w-full">
              <Skeleton.Button active block className="w-full min-h-72 mb-2" />
              <Skeleton active />
            </div>
          ) : (
            <>
              <img src={coverImage} alt={name} />
              <p className="mt-6">
                {description} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Excepturi quisquam debitis quia aperiam
                doloribus nostrum perspiciatis vitae nisi, laudantium
                temporibus!
              </p>
            </>
          )}

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
        </aside>
        <aside className="col-span-7 ml-10">
          <p className="text-primary text-sm font-semibold uppercase">
            Best Services We Provided
          </p>
          <h1 className="text-3xl font-semibold">
            {isLoadingService ? (
              <Skeleton.Button active block className="w-1/2" />
            ) : (
              name
            )}
          </h1>

          <h5 className=" text-lg mt-6">
            <span className="font-semibold"> Duration:</span>{" "}
            {isLoadingService ? <Skeleton.Button active /> : duration} Minutes
          </h5>
          <h5 className=" text-lg mb-6">
            <span className="font-semibold"> Price:</span> $
            {isLoadingService ? <Skeleton.Button active /> : price}
          </h5>

          <h5 className=" text-lg font-semibold mb-6 border-b border-slate-300 pb-2">
            Select Slot
          </h5>

          {/* Render grouped slots */}
          {isLoadingSlots && <SlotLoader />}
          {groupedSlots ? (
            Object.keys(groupedSlots).map((date) => (
              <div key={date} className="my-4">
                <h4 className="font-[500] mb-2">
                  {dayjs(date).format("ddd, MMM D, YYYY")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {groupedSlots[date].map((slot: ISlot) => (
                    <Tooltip
                      key={slot._id} // Add key here to avoid React warning
                      color={`${slot.isBooked ? "red" : "blue"}`}
                      title={`${
                        slot.isBooked
                          ? "This Slot is Already Booked."
                          : `From ${slot.startTime} To ${slot.endTime}`
                      }`}
                    >
                      <Button
                        onClick={() => handleSelectedSlot(slot._id as string)}
                        disabled={slot.isBooked}
                        type={
                          slot._id === selectedSlotId ? "primary" : "default"
                        }
                      >
                        {dayjs(slot.startTime, "HH:mm").format("hh:mm A")}
                      </Button>
                    </Tooltip>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-rose-600 font-[500]">
              Currently, there are no available slots for this service!
            </p>
          )}
          {groupedSlots && (
            <div className="mt-8">
              <BtnPrimary title="Book Now" />
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetails;
