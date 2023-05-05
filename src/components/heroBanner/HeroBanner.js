import React from "react";
import "./HeroBanner.scss";

const HeroBanner = (props) => {
  const { img, title, text } = props;
  return (
    <div className="hero-banner">
      <img className="hero-banner__background" src={img} alt="backgroundImg" />
      <h1 className="hero-banner__title">{title}</h1>
      <p className="hero-banner__text">{text}</p>
    </div>
  );
};

export default HeroBanner;
