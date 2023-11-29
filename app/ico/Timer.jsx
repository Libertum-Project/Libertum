import { useEffect, useState, useCallback } from "react";
const Timer = () => {
  const year = new Date().getFullYear().toString().substr(-2);
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDiffrence = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? `${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? `${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    {
      const customDate = new Date("2023-12-01T00:00:00");
      const countDownDate = new Date(
        customDate.getFullYear(),
        customDate.getMonth(),
        customDate.getDate(),
        customDate.getHours(),
        customDate.getMinutes(),
        customDate.getSeconds() + 1
      );
      setInterval(() => {
        getTimeDiffrence(countDownDate.getTime());
      }, 1000);
    }
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
