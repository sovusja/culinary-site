import React from "react";
import "./MenuElement.scss";

const MenuElement = (props) => {
  const { text } = props;
  return <div className="menu">{text}</div>;
};

export default MenuElement;
