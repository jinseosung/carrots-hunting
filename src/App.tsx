import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./components/PopUp";
import bgImg from "./assets/img/background.png";
import Field from "./components/Field";
import Timer from "./components/Timer";
import Score from "./components/Score";

import bgSound from "./assets/sound/bg.mp3";
import alertSound from "./assets/sound/alert.wav";
import bugSound from "./assets/sound/bug_pull.mp3";
import carrotSound from "./assets/sound/carrot_pull.mp3";
import winSound from "./assets/sound/game_win.mp3";

function App() {
  const [started, setStarted] = useState<boolean>(false);
  const [bugs, setBugs] = useState<JSX.Element[]>([]);
  const [carrots, setCarrots] = useState<JSX.Element[]>([]);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const ITEMS_NUM = 20;
  const TIME = 20;
  const [score, setScore] = useState<number>(ITEMS_NUM);
  const [resetFieldKey, setResetFieldKey] = useState<number>(0);
  const [time, setTime] = useState<number>(TIME);
  const [popUpMessage, setPopUpMessage] = useState<string>("");

  const loadSound = (file: any) => {
    const sound = new Audio(file);
    return {
      play: () => {
        sound.currentTime = 0;
        sound.play();
      },
      stop: () => {
        sound.pause();
      },
    };
  };

  const bgSoundRef = useRef(loadSound(bgSound));

  const onGamePlay = () => {
    if (!started) {
      setStarted(true);
      bgSoundRef.current.play();
    } else {
      bgSoundRef.current.stop();
      loadSound(alertSound).play();
      setPopUpMessage("Recommencé ❓");
      setShowPopUp(true);
    }
  };

  const handleItemClick = (key: string, isBug: any) => {
    if (showPopUp) return;
    if (isBug) {
      loadSound(bugSound).play();
      bgSoundRef.current.stop();
      setPopUpMessage("Perdu 😥");
      setShowPopUp(true);
    } else {
      loadSound(carrotSound).play();
      setScore((prevScore) => {
        const newScore = prevScore - 1;
        if (newScore === 0) {
          bgSoundRef.current.stop();
          loadSound(winSound).play();
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
    bgSoundRef.current.play();
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
