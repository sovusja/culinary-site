import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuElement.scss";

const MenuElement = (props) => {
  const { text, link } = props;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(link)} className="menu">
      {text}
    </div>
  );
};

export default MenuElement;
