import React from "react";
import "./Recommendations.scss";
import IceCrema from "../../img/010.jpg";
import Coffe from "../../img/012.jpg";
import Marmalade from "../../img/09.jpg";
import RecommendationElement from "../recommendationsElement/RecommendationElement";

const Recommendations = () => {
  const menu = [
    {
      id: 1,
      src: IceCrema,
      text: "Ice-crema",
      price: "$5",
    },
    {
      id: 2,
      src: Coffe,
      text: "Coffe",
      price: "$2",
    },
    {
      id: 3,
      src: Marmalade,
      text: "Marmalade",
      price: "$3",
    },
  ];

  return (
    <div className="sweets">
      <h2 className="sweets__offers">Featured Offers</h2>
      <p className="sweets__text">
        We can also offer you our best sweets. They will be able to shade all
        the notes of our hot or warming drinks...
      </p>
      <div className="sweets__icons-menu">
        {menu.map((link) => (
          <RecommendationElement
            key={link.id}
            text={link.text}
            src={link.src}
            price={link.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
