import {
  Breadcrumb,
  Button,
  DatePicker,
  Modal,
  Skeleton,
  Tag,
  Tooltip,
} from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import BtnBackToService from "../../../components/ui/buttons/BtnBackToService";
import BtnPrimary from "../../../components/ui/buttons/BtnPrimary";
import SlotLoader from "../../../components/ui/loaders/SlotLoader";
import PageBanner from "../../../components/ui/pageBanner/PageBanner";
import { setBookingData } from "../../../redux/booking/bookingSlice";
import { useGetServiceQuery } from "../../../redux/features/service/serviceApi";
import { useGetSlotsByServiceQuery } from "../../../redux/features/slot/slotApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IService, ISlot } from "../../../types";
import ServiceFAQs from "./ServiceFAQs";

// Define the type for grouped slots

const ServiceDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());
  const [filteredSlots, setFilteredSlots] = useState<ISlot[]>([]);

  const { slugId } = useParams<{ slugId: string }>();
  const serviceId = slugId?.split("-").pop();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const { data: service, isLoading: isLoadingService } =
    useGetServiceQuery(serviceId);
  const { _id, coverImage, description, name, duration, price } =
    (service?.data as IService) || {};

  const { data: slots, isLoading: isLoadingSlots } = useGetSlotsByServiceQuery({
    skip: isLoadingService,
    serviceId: _id,
  });
  const slug = name?.replace(" ", "-").toLowerCase();

  useEffect(() => {
    if (!selectedDate || !slots?.data) return;

    // Format selectedDate to match the format of the date in slots
    const formattedSelectedDate = dayjs(selectedDate).format("YYYY-MM-DD");

    // Filter slots based on the formatted selected date
    const filterSlotsByDate = slots.data.filter((slot: ISlot) => {
      const date = slot.date ? dayjs(slot.date).format("YYYY-MM-DD") : null; // Format the Date object to string
      return date === formattedSelectedDate;
    });

    setFilteredSlots(filterSlotsByDate);
  }, [selectedDate, slots]);

  const handleSelectedSlot = (slotId: string) => {
    setSelectedSlotId((prevSelectedSlotId) =>
      prevSelectedSlotId === slotId ? "" : slotId
    );
  };

  useEffect(() => {
    if (selectedSlotId) {
      dispatch(
        setBookingData({
          service: service?.data,
          customer: user,
          slot: slots?.data?.find((slot: ISlot) => slot._id === selectedSlotId),
        })
      );
    }
  }, [dispatch, selectedSlotId, service, slots, user]);

  const handleNavigateToCheckout = () => {
    if (!selectedSlotId) {
      toast.warning("Please select a slot");
    } else if (isAuthenticated) {
      navigate(`/services/${slug}/checkout`);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <PageBanner
        title={name || "Service Details"}
        desc={
          description?.slice(0, 100) + "..." || "Lorem ipsum dolor sit abet"
        }
        coverImage={coverImage}
      />
      <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] container mx-auto px-[10%] py-6 text-xl">
        <Breadcrumb
          items={[
            {
              href: "/",
              title: <IoHomeOutline />,
            },
            { href: "/services", title: "All Services" },
            { title: name || "Service Details" },
          ]}
        />
      </div>
      <div className="container mx-auto md:px-[10%] px-4 md:grid grid-cols-12 my-20 gap-y-20">
        <aside className="col-span-5">
          {isLoadingService ? (
            <div className="w-full">
              <Skeleton.Button active block className="w-full min-h-72 mb-2" />
              <Skeleton active />
            </div>
          ) : (
            <>
              <img src={coverImage} alt={name} />
              <p className="mt-6 hidden md:block">
                {description} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Excepturi quisquam debitis quia aperiam
                doloribus nostrum perspiciatis vitae nisi, laudantium
                temporibus!
              </p>
            </>
          )}

          <div className="hidden md:block">
            <BtnBackToService />
          </div>
        </aside>
        <aside className="col-span-7 md:ml-10 my-10 md:mt-0">
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

          <div className=" text-lg font-semibold mb-6 border-b border-slate-300 pb-2 flex  items-center gap-x-3">
            <p>Select Slot</p>{" "}
            <DatePicker
              className="w-1/3"
              defaultValue={selectedDate}
              minDate={dayjs(new Date())}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>

          {/* Render grouped slots */}
          {isLoadingService || (isLoadingSlots && <SlotLoader />)}
          {filteredSlots.length > 0 ? (
            <>
              <div className="my-4">
                <h4 className="font-[500] mb-2">
                  {dayjs(selectedDate).format("ddd, MMM D, YYYY")}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {filteredSlots.map((slot: ISlot) => (
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
                      type={slot._id === selectedSlotId ? "primary" : "default"}
                    >
                      {dayjs(slot.startTime, "HH:mm").format("hh:mm A")}
                    </Button>
                  </Tooltip>
                ))}
              </div>
            </>
          ) : (
            <p className="text-rose-600 font-[500]">
              Sorry, no slots are available for this service on{" "}
              <Tag className="text-base" color="red">
                {dayjs(selectedDate).format("ddd, MMM D, YYYY")}
              </Tag>
            </p>
          )}
          {filteredSlots.length > 0 && (
            <div className="mt-8">
              <BtnPrimary
                // disabled={!selectedSlotId || isLoadingSlots}
                title="Book Now"
                onClick={handleNavigateToCheckout}
              />
            </div>
          )}
          <p className="mt-6 block md:hidden border-t border-slate-300 pt-6">
            {description} Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Excepturi quisquam debitis quia aperiam doloribus nostrum
            perspiciatis vitae nisi, laudantium temporibus!
          </p>
          <div className="md:hidden block">
            <BtnBackToService />
          </div>
        </aside>

        <div className="h-[1px] w-full bg-slate-300 col-span-12"></div>
        <ServiceFAQs />
      </div>

      <Modal
        open={isModalOpen}
        title="Login Required for Booking"
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={() => (
          <div className="flex justify-end items-stretch">
            <BtnPrimary
              title="Yes, Proceed to Login"
              onClick={() => navigate("/login")}
            />
          </div>
        )}
      >
        <p>To proceed with booking, you need to be logged in.</p>
        <p>Would you like to log in now?</p>
      </Modal>
    </div>
  );
};

export default ServiceDetails;
