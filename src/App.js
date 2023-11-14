import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./components/PopUp";
import bgImg from "./assets/img/background.png";
import Field from "./components/Field";

function App() {
  const [play, setPlay] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const onGamePlay = () => {
    !play ? setPlay(true) : setPlay(false);
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
          <span className="game__timer">00:00</span>
          <span className="game__score">10</span>
        </header>
        {play && <Field />}
      </section>
      {showPopUp && <PopUp />}
    </>
  );
}

export default App;
