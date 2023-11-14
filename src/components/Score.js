import { useState, useEffect } from "react";

const Score = ({ play, carrots }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (play && carrots > 0) {
      setScore((prev) => prev + 1);
    }
  }, [play, carrots]);

  return <span className="game__score">{score}</span>;
};

export default Score;
