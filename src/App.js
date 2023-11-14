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
          <Timer play={play} />
          <Score play={play} />
        </header>
        {play && (
          <Field
            bugs={bugs}
            setBugs={setBugs}
            carrots={carrots}
            setCarrots={setCarrots}
          />
        )}
      </section>
      {showPopUp && <PopUp />}
    </>
  );
}

export default App;
