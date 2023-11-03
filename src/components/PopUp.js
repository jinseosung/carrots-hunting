import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const PopUp = () => {
  return (
    <section className="popUp">
      <button className="popUp__btn">
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </button>
      <span className="popUp__message">replay</span>
    </section>
  );
};

export default PopUp;
