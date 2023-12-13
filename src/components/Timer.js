import { useState, useEffect } from "react";

const Timer = ({ play, showPopUp, score }) => {
  const [time, setTime] = useState(5);

  useEffect(() => {
    let myTimer;

    if (play) {
      myTimer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(myTimer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    if (showPopUp || score === 0) {
      clearInterval(myTimer);
    }

    return () => {
      clearInterval(myTimer);
    };
  }, [play, time, showPopUp, score]);

  const formattedMinutes = String(Math.floor(time / 60)).padStart(2, "0");
  const formattedSeconds = String(time % 60).padStart(2, "0");

  return (
    <span className="game__timer">{`${formattedMinutes}:${formattedSeconds}`}</span>
  );
};

export default Timer;
