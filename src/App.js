import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./components/PopUp";
import bgImg from "./assets/img/background.png";
import Field from "./components/Field";
import Timer from "./components/Timer";
import Score from "./components/Score";

function App() {
  const [play, setPlay] = useState(false);
  const [bugs, setBugs] = useState([]);
  const [carrots, setCarrots] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const ITEMS = 5;
  const [score, setScore] = useState(ITEMS);

  const onGamePlay = () => {
    if (!play) {
      setPlay(true);
    } else {
      setShowPopUp(true);
    }
  };

  const handleItemClick = (key, isBug) => {
    if (isBug) {
      setShowPopUp(true);
    } else {
      setScore((prevScore) => prevScore - 1);
      setCarrots((prevCarrots) => {
        const newCarrots = prevCarrots.filter((carrot) => carrot.key !== key);
        return newCarrots;
      });
    }
  };

  return (
    <>
      <section style={{ backgroundImage: `url(${bgImg})` }} className="game">
        <header className="game__header">
          <button onClick={onGamePlay} className="game__btn">
            {play ? (
              <FontAwesomeIcon icon={faStop} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          {play && (
            <>
              <Timer play={play} />
              <Score score={score} />
            </>
          )}
        </header>
        <Field
          bugs={bugs}
          setBugs={setBugs}
          carrots={carrots}
          setCarrots={setCarrots}
          play={play}
          handleItemClick={handleItemClick}
          ITEMS={ITEMS}
        />
      </section>
      {showPopUp && <PopUp setPlay={setPlay} setShowPopUp={setShowPopUp} />}
    </>
  );
}

export default App;
