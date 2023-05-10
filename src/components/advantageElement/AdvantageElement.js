import React from "react";
import "./AdvantageElement.scss";

const AdvantageElement = (props) => {
  const { img, title, text } = props;

  return (
    <div className="advantage-element__menu">
      <img className="advantage-element__menu-img" src={img} alt="menu" />
      <div className="advantage-element__menu-wrap">
        <h3 className="advantage-element__menu-wrap--title">{title}</h3>
        <p className="advantage-element__menu-wrap--text">{text}</p>
      </div>
    </div>
  );
};

export default AdvantageElement;
