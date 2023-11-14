import { useState, useEffect } from "react";

const Timer = ({ play }) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myTimer;

    if (play) {
      myTimer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          clearInterval(myTimer);
        }
      }, 1000);
    } else {
      clearInterval(myTimer);
      setMinutes(1);
      setSeconds(0);
    }

    return () => {
      clearInterval(myTimer);
    };
  }, [play, minutes, seconds]);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <span className="game__timer">
      {play ? `${formattedMinutes}:${formattedSeconds}` : `00:00`}
    </span>
  );
};

export default Timer;
