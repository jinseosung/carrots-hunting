import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const PopUp = ({ setPlay, setShowPopUp }) => {
  return (
    <section className="popUp">
      <button
        className="popUp__btn"
        onClick={() => {
          setPlay(true);
          setShowPopUp(false);
        }}
      >
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </button>
      <span className="popUp__message">replay</span>
    </section>
  );
};

export default PopUp;
