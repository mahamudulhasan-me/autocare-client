/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import BtnPrimary from "../../components/ui/buttons/BtnPrimary";
import GlobalLoader from "../../components/ui/loaders/GlobalLoader";
import { useCreateBookingMutation } from "../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../redux/hooks";
import { IService, ISlot, IUser } from "../../types";

const CheckoutPage = () => {
  const { service, slot, customer } = useAppSelector((state) => state.booking);
  const {
    _id: serviceId,
    name,

    duration,
    price,
  } = (service as IService) || {};
  const { _id: slotId, date, startTime, endTime } = (slot as ISlot) || {};
  const {
    _id: customerId,
    name: customerName,
    email,
    phone,
    address,
  } = (customer as IUser) || {};

  const [createBooking, { isLoading, isError, error, isSuccess }] =
    useCreateBookingMutation();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      customerName: customerName || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
      vehicleType: "",
      vehicleBrand: "",
      vehicleModel: "",
      manufacturingYear: "",
      registrationPlate: "",
    },
  });

  const onSubmit: SubmitHandler<Record<string, string>> = async (data) => {
    const bookingData = {
      service: serviceId,
      slot: slotId,
      customer: customerId,
      paymentStatus: "pending",
      vehicleType: data.vehicleType,
      vehicleBrand: data.vehicleBrand,
      vehicleModel: data.vehicleModel,
      manufacturingYear: data.manufacturingYear,
      registrationPlate: data.registrationPlate,
    };
    try {
      const res = await createBooking(bookingData).unwrap();
      console.log(res);

      if (res?.data?.payment?.result) {
        window.location.href = res?.data.payment.payment_url;
      }
    } catch (error) {
      toast.error((error as any).data?.message || "Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    } else if (isError) {
      console.log(error);
    }
  }, [error, isError, isSuccess, reset]);

  return (
    <>
      {isLoading && <GlobalLoader />}
      <div>
        <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] container mx-auto px-[10%] py-6 text-xl">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: <IoHomeOutline />,
              },
              { href: "/services", title: "All Services" },
              {
                title: name || "Service Details",
                href: `/services/${name}-${serviceId}`,
              },
              {
                title: "Checkout",
              },
            ]}
          />
        </div>
        <div className="container mx-auto md:px-[4%] px-4 md:grid grid-cols-12 my-10 space-y-10 md:space-y-0">
          <aside className="col-span-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md py-4">
            <h6 className="text-lg font-[500] mb-4 border-b border-slate-300 px-3">
              Service Info:
            </h6>
            <div className="space-y-3 px-3">
              <p className="grid grid-cols-2">
                <span>Name</span>
                <span className="border-b border-dashed border-slate-300 w-fit">
                  : {name || "N/A"}
                </span>
              </p>
              <p className="grid grid-cols-2">
                <span>Price</span>
                <span className="border-b border-dashed border-slate-300 w-fit">
                  : ${price || "N/A"}
                </span>
              </p>
              <p className="grid grid-cols-2">
                <span>Duration</span>
                <span className="border-b border-dashed border-slate-300 w-fit">
                  : {duration || "N/A"} Min.
                </span>
              </p>
              <p className="grid grid-cols-2">
                <span>Name</span>
                <span className="border-b border-dashed border-slate-300 w-fit">
                  : {name || "N/A"}
                </span>
              </p>
            </div>
            <h6 className="text-lg font-[500] mb-4 border-b border-slate-300 mt-4 px-3">
              Slot Info:
            </h6>
            <div className="space-y-3 px-3">
              <p className="grid grid-cols-2">
                <span>Date:</span>
                <span className="border-b border-dashed border-slate-300 w-fit">
                  : {dayjs(date)?.format("ddd, MMM D, YYYY") || "N/A"}
                </span>
              </p>
              <p className="grid grid-cols-2">
                <span>Start Time</span>
                <span className="border-b border-dashed border-slate-300 w-fit">
                  : {dayjs(startTime, "HH:mm").format("hh:mm A") || "N/A"}
                </span>
              </p>
              <p className="grid grid-cols-2">
                <span>End Time</span>
                <span className="border-b border-dashed border-slate-300 w-fit">
                  : {dayjs(endTime, "HH:mm").format("hh:mm A") || "N/A"}
                </span>
              </p>
            </div>
            <Link
              to={"/services"}
              className=" text-white px-3   rounded-md flex items-stretch gap-1 group mt-10"
            >
              <span className=" bg-primary px-2 py-2 flex justify-center items-center text-2xl rounded-l-md hover:bg-opacity-90 transition-opacity ">
                <MdOutlineKeyboardArrowLeft />
              </span>
              <span className="bg-primary rounded-r-md px-5 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
                Back to Services
              </span>
            </Link>
          </aside>
          <aside className="col-span-7 md:ml-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md"
            >
              <h5 className="text-lg font-[500] mb-4 border-b border-slate-300 px-3">
                Customer Info:
              </h5>
              <div className="md:grid grid-cols-2 gap-4 px-3 space-y-4 md:space-y-0">
                <aside>
                  <label className="modal-label">Name*</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("customerName", { required: true })}
                  />
                </aside>
                <aside>
                  <label className="modal-label">Email</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("email")}
                  />
                </aside>
              </div>
              <div className="md:grid grid-cols-2 gap-4 px-3 space-y-4 md:space-y-0">
                <aside>
                  <label className="modal-label">Phone*</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("phone", { required: true })}
                  />
                </aside>
                <aside>
                  <label className="modal-label">Address*</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("address", { required: true })}
                  />
                </aside>
              </div>
              <h5 className="text-lg font-[500] mb-4 border-b border-slate-300 px-3">
                Vehicle Info:
              </h5>
              <div className="md:grid grid-cols-2 gap-4 px-3 space-y-4 md:space-y-0">
                <aside>
                  <label className="modal-label">Vehicle Type</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("vehicleType")}
                  />
                </aside>
                <aside>
                  <label className="modal-label">Brand</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("vehicleBrand")}
                  />
                </aside>
              </div>
              <div className="md:grid grid-cols-3 gap-4 px-3 space-y-4 md:space-y-0">
                <aside>
                  <label className="modal-label">Model</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("vehicleModel")}
                  />
                </aside>
                <aside>
                  <label className="modal-label">Manufacturing Year</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("manufacturingYear")}
                  />
                </aside>
                <aside>
                  <label className="modal-label">Registration Plate</label>
                  <input
                    className="modal-input"
                    type="text"
                    {...register("registrationPlate")}
                  />
                </aside>
              </div>
              <div className="flex justify-end px-3 pt-5">
                <BtnPrimary title="Payment Now" isLoading={isLoading} />
              </div>
            </form>
          </aside>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
