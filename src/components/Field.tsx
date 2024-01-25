import { useEffect, useRef } from "react";
import bug from "../assets/img/bug.png";
import carrot from "../assets/img/carrot.png";

type FieldProps = {
  bugs: JSX.Element[];
  setBugs: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  carrots: JSX.Element[];
  setCarrots: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  handleItemClick: (key: string, isBug: any) => void;
  started: boolean;
  ITEMS_NUM: number;
  resetFieldKey: number;
};

const Field: React.FC<FieldProps> = ({
  bugs,
  setBugs,
  carrots,
  setCarrots,
  handleItemClick,
  started,
  ITEMS_NUM,
  resetFieldKey,
}) => {
  const ref = useRef(null);
  const CARROT_SIZE = 80;

  const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const addItems = (
    num: number,
    setItemsFunc: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    imgSrc: string,
    maxWidth: number,
    maxHeight: number
  ) => {
    const items = [];
    for (let i = 0; i < num; i++) {
      const key = `item-${i}`;
      const style: React.CSSProperties = {
        position: "absolute",
        left: `${randomNum(0, maxWidth - CARROT_SIZE)}px`,
        bottom: `${randomNum(0, maxHeight - CARROT_SIZE)}px`,
      };

      items.push(
        <img
          key={key}
          src={imgSrc}
          alt={imgSrc === bug ? "bug" : "carrot"}
          style={style}
          className="img"
          onClick={() => handleItemClick(key, imgSrc === bug)}
        />
      );
    }

    setItemsFunc(items);
  };

  useEffect(() => {
    const rect = ref.current as HTMLElement | null;
    const fieldRect = rect!.getBoundingClientRect();
    const fieldWidth = fieldRect.width;
    const fieldHeight = fieldRect.height;

    if (started) {
      setCarrots([]);
      setBugs([]);

      addItems(ITEMS_NUM, setCarrots, carrot, fieldWidth, fieldHeight);
      addItems(ITEMS_NUM, setBugs, bug, fieldWidth, fieldHeight);
    }
  }, [started, resetFieldKey]);

  return (
    <section ref={ref} className="game__field">
      {carrots}
      {bugs}
    </section>
  );
};

export default Field;
