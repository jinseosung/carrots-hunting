type ScoreProps = {
  score: number;
};

const Score: React.FC<ScoreProps> = ({ score }) => {
  return <span className="game__score">{score}</span>;
};

export default Score;
