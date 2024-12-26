import React from "react";
import "./Cards.css";
import { CardsData } from "../../Data";
import Kard from "../card/Kard";
const Cards = () => {
  return (
    <div className="cards">
      {CardsData.map((card, i) => {
        return (
          <div className="parent-container" key={i}>
            <Kard
              title={card.title}
              barValue={card.barValue}
              color={card.color}
              png={card.png}
              value={card.value}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
