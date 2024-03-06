import React from "react";
import { cards } from "@constants/__mock__";
import CardItem from "@components/cardItem/cardItem";

function Cards() {
  return (
    <div className="cards">
      {cards?.map((card, i) => {
        return <CardItem key={i} card={card} />;
      })}
    </div>
  );
}

export default Cards;
