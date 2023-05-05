import React from "react";
import "./AboutUsHome.scss";
import UsPerson from "../../img/home-3-2-341x391.png";
import UsFone from "../../img/home-3-1-483x327.jpg";

const AboutUs = () => {
  return (
    <div className="abouthome">
      <div className="abouthome__img">
        <img className="abouthome__img-person" alt="person" src={UsPerson} />
        <img className="abouthome__img-fon" alt="fon" src={UsFone} />
      </div>
      <div className="abouthome__text">
        <h3 className="abouthome__text-us">About Us</h3>
        <p className="abouthome__text-about">
          Pesto is a family owned and operated Italian Restaurant offering a
          combination of fresh ingredients and authentic Italian cooking. We
          will make sure you are served the most authentic and fresh Italian
          dishes, while offering the best customer service. Our kitchen is
          committed to providing our guests with the best Italian Cuisine.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
