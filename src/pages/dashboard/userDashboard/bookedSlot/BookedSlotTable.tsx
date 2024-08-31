import type { TableColumnsType, TableProps } from "antd";
import { Table, Tag } from "antd";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect, useState } from "react";
import AnimatedBackground from "../../../../components/core/animated-background";
import { useGetBookingByUserQuery } from "../../../../redux/features/booking/bookingApi";
import { IBooking } from "../../../../types";
import CountdownCell from "./CountDownCell";

const onChange: TableProps<IBooking>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const BookedSlotTable: React.FC = () => {
  dayjs.extend(duration);
  const [filterBy, setFilterBy] = useState(0); // Correct initial state
  const [filterValue, setFilterValue] = useState<IBooking[] | undefined>([]);

  const {
    data: bookings,
    isLoading,
    isFetching,
  } = useGetBookingByUserQuery({});

  useEffect(() => {
    if (!bookings?.data) {
      setFilterValue([]); // Handle no data scenario
      return;
    }

    const now = dayjs();
    let filteredBookings: IBooking[] = [];

    switch (filterBy) {
      case 0:
        filteredBookings = bookings.data;
        break;
      case 1:
        filteredBookings = bookings.data.filter((booking: IBooking) => {
          const bookingDate = dayjs(booking.slot.date);
          return bookingDate.isAfter(now);
        });
        break;
      case 2:
        filteredBookings = bookings.data.filter((booking: IBooking) => {
          const bookingDate = dayjs(booking.slot.date);
          return bookingDate.isBefore(now);
        });
        break;
      default:
        filteredBookings = [];
    }

    setFilterValue(filteredBookings);
  }, [bookings?.data, filterBy]);

  const sortBookingsByRemainingTime = (a: IBooking, b: IBooking) => {
    const now = dayjs();
    const bookingDateA = dayjs(a.slot.date);
    const bookingDateB = dayjs(b.slot.date);
    return bookingDateB.diff(now, "minute") - bookingDateA.diff(now, "minute");
  };

  // Create a new array to sort the bookings
  const sortedBookings = filterValue
    ? [...filterValue].sort(sortBookingsByRemainingTime)
    : [];

  const columns: TableColumnsType<IBooking> = [
    {
      title: "SL",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "Service",
      dataIndex: "service",
      render: (service) => service.name,
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      render: (createdAt) => dayjs(createdAt).format("D MMM, YY"),
    },
    {
      title: "Slot Date",
      dataIndex: "slot",
      render: (slot) => dayjs(slot.date).format("D MMM, YY"),
    },
    {
      title: "Start Time",
      dataIndex: "slot",
      render: (_, record) => (
        <Tag>{dayjs(record.slot.startTime, "HH:mm").format("hh:mm A")}</Tag>
      ),
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      render: (_, record) => (
        <Tag>{dayjs(record.slot.endTime, "HH:mm").format("hh:mm A")}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, { slot }) => <CountdownCell slotDate={slot.date} />,
    },
  ];

  return (
    <>
      <div className="mb-4 w-fit rounded-md bg-slate-900 p-1">
        <AnimatedBackground
          defaultValue="All Slots"
          className={`rounded-md  text-center bg-primary`}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
        >
          {["All Slots", "Upcoming Slot", "Previous Slot"].map(
            (label, index) => {
              return (
                <button
                  onClick={() => setFilterBy(index)}
                  key={index}
                  data-id={label}
                  type="button"
                  className="inline-flex p-2  items-center justify-center text-center  transition-transform active:scale-[0.98] text-white font-semibold"
                >
                  {label}
                </button>
              );
            }
          )}
        </AnimatedBackground>
      </div>
      <Table
        columns={columns}
        loading={isLoading || isFetching}
        dataSource={sortedBookings}
        onChange={onChange}
        className="table-shadow rounded-md"
        rowClassName={(_, index) => (index === 0 ? "text-lg font-bold" : "")}
      />
    </>
  );
};

export default BookedSlotTable;
