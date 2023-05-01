import React from "react";
import "./MenuGalary.scss";
import Candy01 from "../../img/02.jpg";
import Candy02 from "../../img/03.jpg";
import Candy03 from "../../img/08.jpg";
import Candy04 from "../../img/05.jpg";
import Candy05 from "../../img/06.jpg";
import Candy06 from "../../img/07.jpg";

const MenuGalary = () => {
  const menuGalary = [
    {
      id: 1,
      src: Candy01,
      text: "caramel",
    },
    {
      id: 2,
      src: Candy02,
      text: "chocolate candies",
    },
    {
      id: 3,
      src: Candy03,
      text: "cake",
    },
    {
      id: 4,
      src: Candy04,
      text: "chocolate",
    },
    {
      id: 5,
      src: Candy05,
      text: "pie",
    },
    {
      id: 6,
      src: Candy06,
      text: "donut",
    },
  ];

  return (
    <div className="galary">
      {menuGalary.map((link) => (
        <img
          className="galary__icon"
          key={link.id}
          alt={link.text}
          src={link.src}
        />
      ))}
    </div>
  );
};

export default MenuGalary;
