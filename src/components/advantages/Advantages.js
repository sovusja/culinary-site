import React from "react";
import "./Advantages.scss";
import Coffee from "../../img/coffee.svg";
import Candy from "../../img/candy.svg";
import Cake from "../../img/cake.svg";
import Cupcake from "../../img/cupcake.svg";
import Donut from "../../img/donut.svg";
import IceCream from "../../img/ice-cream.svg";
import AdvantageElement from "../advantageElement/AdvantageElement";

const Advantages = () => {
  const advantagesMenu = [
    {
      id: 1,
      img: Coffee,
      title: "Hot drinks",
      text: "Morbi tritique senectus et netus et malesuada fames ac turpis.",
    },
    {
      id: 2,
      img: Candy,
      title: "Bright lollipops",
      text: "Cum resistentia mori, omnes elevatuses imperium plac.",
    },
    {
      id: 3,
      img: IceCream,
      title: "Refreshing ice-cream",
      text: "Cum consilium accelerare, omnes absolutioes quaestio fatalis.",
    },
    {
      id: 4,
      img: Cupcake,
      title: "Cute cupcakes",
      text: "Cum onus studere, omnes consiliumes amor plac.",
    },
    {
      id: 5,
      img: Donut,
      title: "Fresh donuts",
      text: "Cum demolitione persuadere, omnes devatioes captis.",
    },
    {
      id: 6,
      img: Cake,
      title: "Various cakes",
      text: "Mirabilis, gratis devatios mechanice contactus de neuter, primus vigil.",
    },
  ];

  return (
    <div className="advantage">
      <p>Why People Choose Us</p>
      <div className="advantage__menu">
        {advantagesMenu.map((link) => {
          return (
            <AdvantageElement
              key={link.id}
              img={link.img}
              title={link.title}
              text={link.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Advantages;
