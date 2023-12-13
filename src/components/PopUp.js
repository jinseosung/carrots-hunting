import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const PopUp = ({ handleGameRestart, popUpMessage }) => {
  return (
    <section className="popUp">
      <div className="popUp__container">
        <button className="popUp__btn" onClick={handleGameRestart}>
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
        <span className="popUp__message">{popUpMessage}</span>
      </div>
    </section>
  );
};

export default PopUp;
