import { useEffect } from "react";

type TimerProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  showPopUp: boolean;
  score: number;
};

const Timer: React.FC<TimerProps> = ({ time, setTime, showPopUp, score }) => {
  useEffect(() => {
    let myTimer: ReturnType<typeof setInterval>;

    myTimer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(myTimer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    if (showPopUp || score === 0) {
      clearInterval(myTimer);
    }

    return () => {
      clearInterval(myTimer);
    };
  }, [showPopUp]);

  const formattedMinutes = String(Math.floor(time / 60)).padStart(2, "0");
  const formattedSeconds = String(time % 60).padStart(2, "0");

  return (
    <span className="game__timer">{`${formattedMinutes}:${formattedSeconds}`}</span>
  );
};

export default Timer;
