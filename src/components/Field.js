import { useState, useEffect, useRef } from "react";
import bug from "../assets/img/bug.png";
import carrot from "../assets/img/carrot.png";

const Field = ({bugs, setBugs,carrots, setCarrots}) => {
  const ref = useRef(null);
  const CARROT_SIZE = 80;

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const addItems = (num, setItemsFunc, imgSrc, maxWidth, maxHeight) => {
    const items = [];
    for (let i = 0; i < num; i++) {
      const style = {
        position: "absolute",
        left: `${randomNum(0, maxWidth - CARROT_SIZE)}px`,
        bottom: `${randomNum(0, maxHeight - CARROT_SIZE)}px`,
      };

      items.push(
        <img
          key={i}
          src={imgSrc}
          alt={imgSrc === "bug" ? "bug" : "carrot"}
          style={style}
        />
      );
    }

    setItemsFunc(items);
  };

  useEffect(() => {
    const fieldRect = ref.current.getBoundingClientRect();
    const fieldWidth = fieldRect.width;
    const fieldHeight = fieldRect.height;

    addItems(5, setCarrots, carrot, fieldWidth, fieldHeight);
    addItems(5, setBugs, bug, fieldWidth, fieldHeight);
  }, []);

  return (
    <section ref={ref} className="game__field">
      {carrots}
      {bugs}
    </section>
  );
};

export default Field;
