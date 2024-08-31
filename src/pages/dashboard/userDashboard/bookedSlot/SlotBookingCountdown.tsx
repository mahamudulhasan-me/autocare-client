import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

const useCountdown = (targetDate: Date) => {
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const updateRemainingTime = () => {
      const currentDate = dayjs();
      const slotDate = dayjs(targetDate);
      const remainingDuration = dayjs.duration(slotDate.diff(currentDate));

      const hours = remainingDuration.asHours();
      const minutes = remainingDuration.minutes();
      const seconds = remainingDuration.seconds();

      setRemainingHours(Math.floor(hours));
      setRemainingMinutes(minutes);
      setRemainingSeconds(seconds);
    };

    // Initial call to set the time immediately
    updateRemainingTime();

    // Set interval to update the time every second
    const intervalId = setInterval(updateRemainingTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return {
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  };
};

export default useCountdown;
