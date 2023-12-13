import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const PopUp = ({ handleGameRestart }) => {
  return (
    <section className="popUp">
      <button className="popUp__btn" onClick={handleGameRestart}>
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </button>
      <span className="popUp__message">replay</span>
    </section>
  );
};

export default PopUp;
