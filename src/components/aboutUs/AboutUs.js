import React from "react";
import "./AboutUs.scss";
import UsPerson from "../../img/home-3-2-341x391.png";
import UsFone from "../../img/home-3-1-483x327.jpg";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__img">
        <img className="about__img-person" alt="person" src={UsPerson} />
        <img className="about__img-fon" alt="fon" src={UsFone} />
      </div>
      <div className="about__text">
        <h3 className="about__text-us">About Us</h3>
        <p className="about__text-about">
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
