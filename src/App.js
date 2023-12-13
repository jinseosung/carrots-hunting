import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./components/PopUp";
import bgImg from "./assets/img/background.png";
import Field from "./components/Field";
import Timer from "./components/Timer";
import Score from "./components/Score";

function App() {
  const [started, setStarted] = useState(false);
  const [bugs, setBugs] = useState([]);
  const [carrots, setCarrots] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const ITEMS_NUM = 20;
  const TIME = 20;
  const [score, setScore] = useState(ITEMS_NUM);
  const [resetFieldKey, setResetFieldKey] = useState(0);
  const [time, setTime] = useState(TIME);
  const [popUpMessage, setPopUpMessage] = useState("");

  const onGamePlay = () => {
    if (!started) {
      setStarted(true);
    } else {
      setPopUpMessage("Recommencé ❓");
      setShowPopUp(true);
    }
  };

  const handleItemClick = (key, isBug) => {
    if (isBug) {
      setPopUpMessage("Perdu 😥");
      setShowPopUp(true);
    } else {
      setScore((prevScore) => {
        const newScore = prevScore - 1;
        if (newScore === 0) {
          setPopUpMessage("Gagné 🎉");
          setShowPopUp(true);
        }
        return newScore;
      });

      setCarrots((prevCarrots) => {
        const newCarrots = prevCarrots.filter((carrot) => carrot.key !== key);
        return newCarrots;
      });
    }
  };

  const handleGameRestart = () => {
    setStarted(true);
    setScore(ITEMS_NUM);
    setTime(TIME);
    setShowPopUp(false);
    setResetFieldKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <section style={{ backgroundImage: `url(${bgImg})` }} className="game">
        <header className="game__header">
          <button
            onClick={onGamePlay}
            className="game__btn"
            style={showPopUp ? { visibility: "hidden" } : {}}
          >
            <FontAwesomeIcon icon={started ? faStop : faPlay} />
          </button>
          {started && (
            <>
              <Timer
                time={time}
                setTime={setTime}
                showPopUp={showPopUp}
                score={score}
              />
              <Score score={score} />
            </>
          )}
        </header>
        <Field
          bugs={bugs}
          setBugs={setBugs}
          carrots={carrots}
          setCarrots={setCarrots}
          started={started}
          handleItemClick={handleItemClick}
          ITEMS_NUM={ITEMS_NUM}
          resetFieldKey={resetFieldKey}
        />
      </section>
      {showPopUp && (
        <PopUp
          handleGameRestart={handleGameRestart}
          popUpMessage={popUpMessage}
        />
      )}
    </>
  );
}

export default App;
