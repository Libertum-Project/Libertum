import { useEffect, useState, useCallback } from "react";

const Timer = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000).toString().padStart(2, '0');

    if (timeDifference < 0) {
      setCountDownTime({ days: "00", hours: "00", minutes: "00", seconds: "00" });
    } else {
      setCountDownTime({ days, hours, minutes, seconds });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date(Date.UTC(2023, 11, 1, 10, 0, 0)); // December 1, 2023 at 10:00:00 UTC
    const interval = setInterval(() => {
      getTimeDifference(customDate.getTime());
    }, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex justify-center bg-transparent items-center">
      <div className="flex justify-center flex-col gap-4">
        <div className="flex gap-2 items-center justify-center">
          <div className="flex gap-1 ">
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.days?.charAt(0)}
            </span>
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.days?.charAt(1)}
            </span>
            <span
              className={
                countDownTime?.days?.length <= 2
                  ? "hidden"
                  : "bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl"
              }
            >
              {countDownTime?.days?.charAt(2)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1 shadow-lg">
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.hours?.charAt(0)}
            </span>
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.hours?.charAt(1)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1">
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.minutes?.charAt(0)}
            </span>
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.minutes?.charAt(1)}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
          <div className="flex gap-1">
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.seconds?.charAt(0)}
            </span>
            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime?.seconds?.charAt(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer;
