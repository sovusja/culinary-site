import React from "react";
import "./RecommendationElement.scss";

const RecommendationElement = (props) => {
  const { text, src, price } = props;

  return (
    <div className="icons-menu">
      <img className="icon" alt={text} src={src} />
      <p>{price}</p>
    </div>
  );
};

export default RecommendationElement;
