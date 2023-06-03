import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuElement.scss";

const MenuElement = (props) => {
  const { text, link, setIsOpen = () => {} } = props;

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(link);
    setIsOpen(false);
  };

  return (
    <div onClick={clickHandler} className="menu">
      {text}
    </div>
  );
};

export default MenuElement;
