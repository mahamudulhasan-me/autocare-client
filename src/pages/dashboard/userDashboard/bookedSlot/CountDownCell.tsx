// Adjust the import as needed
import { Tooltip } from "antd";
import dayjs from "dayjs";
import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AnimatedNumber } from "../../../../components/core/animated-number";
import useCountdown from "./SlotBookingCountdown";
// Adjust the import path as necessary

const CountdownCell: React.FC<{ slotDate: Date }> = ({ slotDate }) => {
  const { remainingHours, remainingMinutes, remainingSeconds } =
    useCountdown(slotDate);

  const isPast = dayjs(slotDate).isBefore(dayjs(), "second");

  return isPast ? (
    <Tooltip title="Service Completed" color="green">
      <FaRegCalendarCheck className="text-green-600 cursor-pointer text-3xl" />
    </Tooltip>
  ) : (
    <Tooltip title="Service Running" color="orange">
      <div className="flex space-x-1">
        <>
          <AnimatedNumber
            className="inline-flex items-center"
            springOptions={{
              bounce: 0,
              duration: 1000,
            }}
            value={remainingHours}
          />
        </>
        <span>:</span>
        <AnimatedNumber
          className="inline-flex items-center"
          springOptions={{
            bounce: 0,
            duration: 1000,
          }}
          value={remainingMinutes}
        />
        <span>:</span>
        <AnimatedNumber
          className="inline-flex items-center"
          springOptions={{
            bounce: 0,
            duration: 1000,
          }}
          value={remainingSeconds}
        />
      </div>
    </Tooltip>
  );
};

export default CountdownCell;
