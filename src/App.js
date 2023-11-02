import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="game">
      <header className="game__header">
        <button className="game__btn">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <span className="game__timer">00:00</span>
        <span className="game__score">10</span>
      </header>
      <section className="game__field"></section>
      <section className="popUp">
        <button className="popUp__btn">
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
        <span className="popUp__message">replay</span>
      </section>
    </div>
  );
}

export default App;
